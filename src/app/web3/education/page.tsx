import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { educationGuides } from "@/lib/education-guides";
import { localizeGuideMeta } from "@/lib/education-guides-i18n";
import type { AppLocale } from "@/i18n/routing";
import { resolveAppLocale } from "@/i18n/resolve-locale";

export const dynamic = "force-dynamic";

export default async function EducationIndexPage() {
  const locale = await resolveAppLocale() as AppLocale;
  const t = await getTranslations({ locale, namespace: "education" });
  const tradFiGuides = educationGuides.filter((guide) => guide.track === "tradfi");
  const deFiGuides = educationGuides.filter((guide) => guide.track !== "tradfi");

  return (
      <main className="w-full max-w-6xl mx-auto pt-8 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">{t("title")}</h1>
          <p className="text-zinc-400 text-center mt-4">{t("subtitle")}</p>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">{t("tracks.tradfi")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tradFiGuides.map((guide) => {
                const localized = localizeGuideMeta(guide, locale);
                return (
                <Card key={guide.slug} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <p className="text-xs uppercase tracking-wider text-zinc-400">{t("labels.level")} {guide.level}</p>
                    <CardTitle className="text-white">{localized.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-zinc-400 text-justify">
                    <p>{localized.description}</p>
                    <Link
                      href={`/web3/education/${guide.slug}`}
                      className="btn-frosted inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {t("labels.openGuide")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              )})}
            </div>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">{t("tracks.defi")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deFiGuides.map((guide) => {
                const localized = localizeGuideMeta(guide, locale);
                return (
                <Card key={guide.slug} className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <p className="text-xs uppercase tracking-wider text-zinc-400">
                      {guide.isGlossary ? t("labels.glossary") : `${t("labels.level")} ${guide.level}`}
                    </p>
                    <CardTitle className="text-white">{localized.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-zinc-400 text-justify">
                    <p>{localized.description}</p>
                    <Link
                      href={`/web3/education/${guide.slug}`}
                      className="btn-frosted inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {t("labels.openGuide")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              )})}
            </div>
          </section>
        </div>
      </main>
  );
}
