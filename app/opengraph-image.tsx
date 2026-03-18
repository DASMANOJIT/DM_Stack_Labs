import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0A2540 0%, #06172a 45%, #001b2a 100%)",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(700px circle at 15% 20%, rgba(30,144,255,0.45), transparent 55%), radial-gradient(700px circle at 80% 40%, rgba(0,198,255,0.35), transparent 55%), radial-gradient(900px circle at 60% 90%, rgba(255,165,0,0.18), transparent 60%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #1E90FF, #00C6FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: -0.5,
            }}
          >
            DM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 800, letterSpacing: -0.8 }}>
              DM Stack Labs
            </div>
            <div style={{ fontSize: 18, opacity: 0.85 }}>
              Website Development Company • SEO optimized websites
            </div>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: 36, maxWidth: 920 }}>
          <div style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.2 }}>
            Affordable, fast, and scalable websites that convert.
          </div>
          <div style={{ marginTop: 16, fontSize: 22, opacity: 0.9, lineHeight: 1.35 }}>
            Web development services for startups and small businesses — responsive website design,
            custom website development, and performance-first builds.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            marginTop: 40,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {["Next.js", "Tailwind CSS", "SEO", "Performance"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

