import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at top right, #2563EB 0%, #0F172A 60%)",
          borderRadius: "36px",
          color: "white",
          display: "flex",
          fontSize: 96,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-6px",
          width: "100%",
        }}
      >
        A
      </div>
    ),
    size,
  );
}