
function isEmail(value: unknown): value is string {
  return typeof value === "string" && value.includes("@") && value.length <= 320;
}

function safeText(value: unknown, maxLen: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") ?? "";

    if (!contentType.includes("application/json")) {
      return Response.json(
        { success: false, error: "Expected application/json" },
        { status: 415 }
      );
    }

    const body = (await req.json().catch(() => null)) as
      | { name?: unknown; email?: unknown; phone?: unknown; message?: unknown }
      | null;

    const name = safeText(body?.name, 80);
    const email = safeText(body?.email, 120);
    const phone = safeText(body?.phone, 40);
    const message = safeText(body?.message, 2000);

    // Validation
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    if (name.length < 2) {
      return Response.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return Response.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return Response.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      process.env.APPS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    if (!googleScriptUrl) {
      return Response.json(
        { success: false, error: "GOOGLE_SCRIPT_URL is not configured" },
        { status: 500 }
      );
    }

    console.log("[lead]", {
      name,
      email,
      phone,
      messageLen: message.length,
      ts: Date.now(),
    });

    const payload = JSON.stringify({ name, email, phone, message });

    const doForward = async (url: string) => {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
        redirect: "manual",
      });
    };

    let forwardResponse;
    let forwardedText = "";
    let forwardedJson: any = null;
    let forwardError: string | null = null;

    try {
      forwardResponse = await doForward(googleScriptUrl);

      // Handle redirects (Apps Script quirk)
      if ([301, 302, 303, 307, 308].includes(forwardResponse.status)) {
        const location = forwardResponse.headers.get("location");
        if (location) {
          const redirectedUrl = new URL(location, googleScriptUrl).toString();
          forwardResponse = await doForward(redirectedUrl);
        }
      }

      forwardedText = await forwardResponse.text();

      try {
        forwardedJson = JSON.parse(forwardedText);
      } catch {
        forwardedJson = null;
      }

      // DO NOT FAIL REQUEST — just log warning
      if (!forwardResponse.ok) {
        forwardError = `Apps Script responded with ${forwardResponse.status}`;
      }

      if (
        forwardedJson &&
        typeof forwardedJson === "object" &&
        forwardedJson !== null &&
        "success" in forwardedJson &&
        forwardedJson.success === false
      ) {
        forwardError = "Apps Script returned failure";
      }

    } catch (err: any) {
      forwardError = err.message || "Forwarding failed";
    }

    // ✅ Always return success (lead captured)
    return Response.json(
      {
        success: true,
        data: forwardedJson ?? forwardedText,
        warning: forwardError, // helpful debug info
      },
      { status: 200 }
    );

  } catch (error: any) {
    return Response.json(
      {
        success: false,
        error: error.message || "Server error",
      },
      { status: 500 }
    );
  }
}
