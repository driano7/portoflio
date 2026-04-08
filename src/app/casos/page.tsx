import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata, seoConfig } from "@/lib/seo";

const CASES = [
  { slug: "sitio-para-empresa-b2b", title: "Sitio para empresa B2B" },
  { slug: "seo-local-para-negocio", title: "SEO local para negocio" },
];

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoConfig, {
    title: `Casos | ${seoConfig.brand.brandName}`,
    description: "Casos de estudio para documentar resultados y autoridad temática.",
    canonicalPath: "/casos",
  });
}

export default function CasesIndexPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-white">Casos</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">
        Índice de casos de estudio para fortalecer la relación entre servicios, resultados y entidad de negocio.
      </p>
      <div className="mt-8 grid gap-4">
        {CASES.map((caseStudy) => (
          <Link key={caseStudy.slug} href={`/casos/${caseStudy.slug}`} className="rounded border border-zinc-800 p-4">
            {caseStudy.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
