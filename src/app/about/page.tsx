import type { Metadata } from "next";

import { About } from "@/components/sections/about";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildPageMetadata({
    title: "Sobre mí | Donovan Riaño",
    description:
      "Conoce la trayectoria de Donovan Riaño: ingeniería, UX/UI, producto, Web3 e IA aplicados a proyectos con enfoque de negocio.",
    canonicalPath: "/about",
  });
}

export default function AboutPage() {
  return (
      <main className="w-full max-w-5xl mx-auto">
        <About />
      </main>
  );
}
