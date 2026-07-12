import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} - ${siteConfig.slogan}`;

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
          alignItems: "center",
          background:
            "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.7), transparent 32%), radial-gradient(circle at 85% 80%, rgba(37,99,235,0.35), transparent 30%), #0F172A",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "70px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "22px",
            }}
          >
            <div
              style={{
                alignItems: "center",
                background:
                  "radial-gradient(circle at top right, #60A5FA, #2563EB 52%, #172554)",
                borderRadius: "28px",
                display: "flex",
                fontSize: "62px",
                fontWeight: 900,
                height: "112px",
                justifyContent: "center",
                width: "112px",
              }}
            >
              A
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: "58px",
                  fontWeight: 900,
                  letterSpacing: "7px",
                }}
              >
                AETHERIX
              </div>

              <div
                style={{
                  color: "#93C5FD",
                  fontSize: "25px",
                  marginTop: "8px",
                }}
              >
                {siteConfig.slogan}
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "70px",
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              marginTop: "64px",
              maxWidth: "970px",
            }}
          >
            Transformamos ideas en productos digitales que impulsan negocios.
          </div>

          <div
            style={{
              color: "#CBD5E1",
              fontSize: "26px",
              lineHeight: 1.45,
              marginTop: "30px",
              maxWidth: "900px",
            }}
          >
            Desarrollo web, sistemas empresariales, automatización,
            inteligencia artificial, integraciones y calidad de software.
          </div>
        </div>
      </div>
    ),
    size,
  );
}