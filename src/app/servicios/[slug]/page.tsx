import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Seo } from "@/components/seo/Seo";
import { buildBreadcrumbList } from "@/lib/seo";
import {
  buildPageMetadata,
  buildServiceEntity,
  seoConfig,
} from "@/lib/seo";

const SERVICES = {
  "creacion-sitios-web": {
    title: "Creación de sitios web",
    description:
      "Diseño y desarrollo de sitios web orientados a rendimiento, conversión y mantenimiento sencillo.",
    serviceType: "Web development",
  },
  "seo-para-empresas": {
    title: "SEO para empresas y negocios",
    description:
      "SEO técnico y semántico para mejorar rastreo, comprensión de entidades y visibilidad orgánica.",
    serviceType: "Search engine optimization",
  },
} as const;

type ServiceSlug = keyof typeof SERVICES;

async function getService(slug: string) {
  if (slug in SERVICES) {
    return SERVICES[slug as ServiceSlug];
  }

  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return {};
  }

  return buildPageMetadata(seoConfig, {
    title: `${service.title} | ${seoConfig.brand.brandName}`,
    description: service.description,
    canonicalPath: `/servicios/${slug}`,
    openGraph: {
      type: "website",
    },
  });
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = buildBreadcrumbList(
    [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios" },
      { name: service.title, path: `/servicios/${slug}` },
    ],
    seoConfig,
  );

  const serviceEntity = buildServiceEntity(seoConfig, {
    slug,
    name: service.title,
    description: service.description,
    serviceType: service.serviceType,
  });

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-16">
      <Seo entities={[serviceEntity, breadcrumbs]} />
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Servicio</p>
        <h1 className="text-4xl font-semibold text-white">{service.title}</h1>
        <p className="max-w-2xl text-zinc-300">{service.description}</p>
      </header>
    </main>
  );
}

