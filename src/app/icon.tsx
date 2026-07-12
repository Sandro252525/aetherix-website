import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at top right, #2563EB 0%, #0F172A 58%)",
          color: "white",
          display: "flex",
          fontSize: 34,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-2px",
          width: "100%",
        }}
      >
        A
      </div>
    ),
    size,
  );
}