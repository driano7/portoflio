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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 35% 30%, #7c3aed 0%, #4c1d95 55%, #0b1022 100%)",
          padding: 18,
          borderRadius: 36,
        }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%" aria-label="Lightning apple icon">
          <path d="M58 4L21 57h24L35 96l44-52H55z" fill="#facc15" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
