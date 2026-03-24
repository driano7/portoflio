import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";

export function GET() {
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
          padding: 20,
          borderRadius: 38,
        }}
      >
        <svg viewBox="0 0 100 100" width="100%" height="100%" aria-label="Lightning icon 192">
          <path d="M58 4L21 57h24L35 96l44-52H55z" fill="#facc15" />
        </svg>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
