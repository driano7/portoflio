import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbList } from "@/lib/seo";
import { buildArticleEntity, buildPageMetadata, seoConfig } from "@/lib/seo";

const CASES = {
  "sitio-para-empresa-b2b": {
    title: "Sitio para empresa B2B",
    description:
      "Caso de uso orientado a estructura semántica, velocidad y conversión para una empresa de servicios.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
  },
  "seo-local-para-negocio": {
    title: "SEO local para negocio",
    description:
      "Caso de uso para negocio con foco local, servicios, cobertura geográfica y datos estructurados.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
  },
} as const;

type CaseSlug = keyof typeof CASES;

async function getCase(slug: string) {
  if (slug in CASES) {
    return CASES[slug as CaseSlug];
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCase(slug);

  if (!caseStudy) {
    return {};
  }

  return buildPageMetadata(seoConfig, {
    title: `${caseStudy.title} | ${seoConfig.brand.brandName}`,
    description: caseStudy.description,
    canonicalPath: `/casos/${slug}`,
    openGraph: {
      type: "article",
    },
  });
}

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCase(slug);

  if (!caseStudy) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbList(
    [
      { name: "Inicio", path: "/" },
      { name: "Casos", path: "/casos" },
      { name: caseStudy.title, path: `/casos/${slug}` },
    ],
    seoConfig,
  );

  const article = buildArticleEntity(seoConfig, {
    kind: "Article",
    slug,
    headline: caseStudy.title,
    description: caseStudy.description,
    datePublished: caseStudy.datePublished,
    dateModified: caseStudy.dateModified,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <Seo entities={[article, breadcrumbs]} />
      <article className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Caso</p>
        <h1 className="text-4xl font-semibold text-white">{caseStudy.title}</h1>
        <p className="max-w-2xl text-zinc-300">{caseStudy.description}</p>
      </article>
    </main>
  );
}

