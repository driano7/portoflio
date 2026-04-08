import type { Metadata } from "next";
import Link from "next/link";

import { buildPageMetadata, seoConfig } from "@/lib/seo";

const SERVICE_SLUGS = [
  { slug: "creacion-sitios-web", title: "Creación de sitios web" },
  { slug: "seo-para-empresas", title: "SEO para empresas y negocios" },
];

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoConfig, {
    title: `Servicios | ${seoConfig.brand.brandName}`,
    description: "Servicios principales de la agencia: sitios web y SEO técnico.",
    canonicalPath: "/servicios",
  });
}

export default function ServicesIndexPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-white">Servicios</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">
        Página índice para agrupar los servicios del sitio y dar contexto semántico a los enlaces internos.
      </p>
      <div className="mt-8 grid gap-4">
        {SERVICE_SLUGS.map((service) => (
          <Link key={service.slug} href={`/servicios/${service.slug}`} className="rounded border border-zinc-800 p-4">
            {service.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
