import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Donovan Riaño",
    short_name: "DR",
    description: "Sitio personal de Donovan Riaño",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1022",
    theme_color: "#4c1d95",
    icons: [
      {
        src: "/icon-192?v=20260326",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512?v=20260326",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon?v=20260326",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
