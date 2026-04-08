import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbList } from "@/lib/seo";
import { buildArticleEntity, buildPageMetadata, seoConfig } from "@/lib/seo";

const POSTS = {
  "seo-tecnico-nextjs-app-router": {
    title: "SEO técnico en Next.js App Router",
    description:
      "Implementación limpia de metadata, JSON-LD y señales técnicas para sitios construidos con App Router.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
  },
  "seo-entidades-schemadotorg": {
    title: "SEO orientado a entidades con Schema.org",
    description:
      "Cómo modelar negocio, servicios, artículos y breadcrumbs para mejorar el entendimiento semántico.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-07",
  },
} as const;

type PostSlug = keyof typeof POSTS;

async function getPost(slug: string) {
  if (slug in POSTS) {
    return POSTS[slug as PostSlug];
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {};
  }

  return buildPageMetadata(seoConfig, {
    title: `${post.title} | ${seoConfig.brand.brandName}`,
    description: post.description,
    canonicalPath: `/blog/${slug}`,
    openGraph: {
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
    },
  });
}

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbList(
    [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${slug}` },
    ],
    seoConfig,
  );

  const article = buildArticleEntity(seoConfig, {
    kind: "BlogPosting",
    slug,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <Seo entities={[article, breadcrumbs]} />
      <article className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Blog</p>
        <h1 className="text-4xl font-semibold text-white">{post.title}</h1>
        <p className="max-w-2xl text-zinc-300">{post.description}</p>
      </article>
    </main>
  );
}

