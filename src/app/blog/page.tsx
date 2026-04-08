import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata, seoConfig } from "@/lib/seo";

const POSTS = [
  { slug: "seo-tecnico-nextjs-app-router", title: "SEO técnico en Next.js App Router" },
  { slug: "seo-entidades-schemadotorg", title: "SEO orientado a entidades con Schema.org" },
];

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoConfig, {
    title: `Blog | ${seoConfig.brand.brandName}`,
    description: "Artículos técnicos sobre SEO, entidades y Next.js.",
    canonicalPath: "/blog",
  });
}

export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-white">Blog</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">
        Índice de contenido editorial para organizar artículos y enlazar posts con datos estructurados.
      </p>
      <div className="mt-8 grid gap-4">
        {POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded border border-zinc-800 p-4">
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
