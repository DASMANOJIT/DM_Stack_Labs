type GooglePlaceReview = {
  author_name?: string;
  rating?: number;
  text?: string;
  profile_photo_url?: string;
  relative_time_description?: string;
  time?: number;
};

function json(data: unknown, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

const LIVE_GOOGLE_REVIEWS_ENABLED = false;

export async function GET() {
  if (!LIVE_GOOGLE_REVIEWS_ENABLED) {
    return json({
      success: false,
      reviews: [],
      error: "Live Google reviews are temporarily disabled.",
    });
  }

  // Temporarily disabled to remove API-key dependency from production builds.
  // To restore live reviews later:
  // 1. Set LIVE_GOOGLE_REVIEWS_ENABLED to true
  // 2. Re-enable the env/config checks below
  // 3. Keep the Google Places fetch logic intact
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!placeId || !apiKey) {
    return json({
      success: false,
      reviews: [],
      error: "Google reviews are not configured yet. Add GOOGLE_PLACE_ID and GOOGLE_API_KEY.",
    });
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews,url");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    const response = await fetch(url.toString(), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return json(
        {
          success: false,
          reviews: [],
          error: `Google Places request failed with status ${response.status}.`,
        },
        502,
      );
    }

    const data = (await response.json()) as {
      result?: {
        name?: string;
        rating?: number;
        user_ratings_total?: number;
        url?: string;
        reviews?: GooglePlaceReview[];
      };
      status?: string;
      error_message?: string;
    };

    if (data.status && data.status !== "OK") {
      return json(
        {
          success: false,
          reviews: [],
          error: data.error_message || `Google Places API returned ${data.status}.`,
        },
        502,
      );
    }

    const reviews =
      data.result?.reviews
        ?.filter((review) => review.author_name && review.text)
        .slice(0, 6)
        .map((review) => ({
          authorName: review.author_name ?? "Google user",
          rating: review.rating ?? 0,
          text: review.text ?? "",
          profilePhotoUrl: review.profile_photo_url ?? null,
          relativeTimeDescription: review.relative_time_description ?? "",
          time: review.time ?? 0,
        })) ?? [];

    return json({
      success: true,
      placeName: data.result?.name ?? "DM Stack Labs",
      averageRating: data.result?.rating ?? null,
      totalRatings: data.result?.user_ratings_total ?? null,
      googleMapsUrl: data.result?.url ?? null,
      reviews,
    });
  } catch {
    return json(
      {
        success: false,
        reviews: [],
        error: "Unable to load Google reviews right now.",
      },
      500,
    );
  }
}
