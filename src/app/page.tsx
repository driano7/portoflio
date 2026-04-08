import type { Metadata } from "next";

import { Landing } from "@/components/sections/landing";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Donovan Riaño | Sitio personal",
    description:
      "Ingeniero en Computación y Creative Director especializado en UX/UI, producto, Web3 e IA. Explora trayectoria, guías y proyectos.",
    canonicalPath: "/",
  });
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full">
      <Landing />
    </main>
  );
}
