import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ferdy Alwondho Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A", // --bg-primary
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          color: "#FAFAFA", // --text-primary
          fontFamily: "sans-serif",
          borderTop: "16px solid #C5F82A", // --accent
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            Ferdy Alwondho
          </div>
          <div
            style={{
              fontSize: "38px",
              color: "#A1A1AA", // --text-secondary
              marginBottom: "60px",
              fontWeight: 500,
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Head of IT Apps & Integration
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {[
              "Project Management",
              "Telecom Infrastructure",
              "Full-Stack Web Dev",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "28px",
                  color: "#C5F82A",
                  background: "rgba(197, 248, 42, 0.1)",
                  border: "2px solid rgba(197, 248, 42, 0.2)",
                  padding: "16px 32px",
                  borderRadius: "100px",
                  fontWeight: 600,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
