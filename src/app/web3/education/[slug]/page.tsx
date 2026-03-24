import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BtcGuideChart } from "@/components/sections/btc-guide-chart";
import { EthGuideChart } from "@/components/sections/eth-guide-chart";
import { LoopingGuideImage } from "@/components/ui/looping-guide-image";
import { ScrollRevealStagger } from "@/components/ui/scroll-reveal-stagger";
import { fetchAndParseGoogleDoc } from "@/lib/google-docs";
import { educationGuides, getGuideBySlug, getGuideIndex } from "@/lib/education-guides";
import { guideFallbackSectionsEn } from "@/lib/education-guides-content-en";
import { localizeGuideMeta, localizeSectionTitle } from "@/lib/education-guides-i18n";
import type { AppLocale } from "@/i18n/routing";
import { resolveAppLocale } from "@/i18n/resolve-locale";

function toId(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function normalizeReferenceLabel(label: string): string {
  return label.replace(/^\[\d+\]\s*/, "").trim();
}

function resolveSectionImageUrl(imageUrl: string | undefined, slug: string, sectionTitle: string): string | undefined {
  if (!imageUrl) return undefined;
  if (imageUrl.includes("placehold.co")) {
    return `https://picsum.photos/seed/${encodeURIComponent(`${slug}-${sectionTitle}`)}/1200/630`;
  }
  return imageUrl;
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

type RenderableSection = {
  id: string;
  title: string;
  blocks: Array<
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
  >;
  imageUrl?: string;
  references?: Array<{ label: string; url: string }>;
};

export default async function EducationGuidePage({ params }: PageProps) {
  const locale = await resolveAppLocale() as AppLocale;
  const t = await getTranslations({ locale, namespace: "education" });
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  let sections: RenderableSection[] = [];
  let resolvedTitle = localizeGuideMeta(guide, locale).title;

  if (guide.docId) {
    const parsed = await fetchAndParseGoogleDoc(guide.docId);
    if (parsed) {
      resolvedTitle = locale === "en" ? localizeGuideMeta(guide, locale).title : parsed.title || guide.title;
      sections = parsed.sections.map((section) => ({
        id: toId(localizeSectionTitle(section.title, locale)),
        title: localizeSectionTitle(section.title, locale),
        blocks: section.blocks,
      }));
    }
  }

  if (sections.length === 0 && guide.fallbackSections) {
    const localizedFallbackSections =
      locale === "en" && guideFallbackSectionsEn[guide.slug]?.length
        ? guideFallbackSectionsEn[guide.slug]
        : guide.fallbackSections;

    sections = localizedFallbackSections.map((section) => ({
      id: toId(localizeSectionTitle(section.title, locale)),
      title: localizeSectionTitle(section.title, locale),
      imageUrl: resolveSectionImageUrl(section.imageUrl, guide.slug, localizeSectionTitle(section.title, locale)),
      references: section.references,
      blocks: [
        ...section.paragraphs.map((paragraph) => ({ type: "paragraph" as const, text: paragraph })),
        ...(section.bullets && section.bullets.length > 0
          ? [{ type: "list" as const, items: section.bullets }]
          : []),
      ],
    }));
  }

  const currentIndex = getGuideIndex(slug);
  const previousGuide = currentIndex > 0 ? educationGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < educationGuides.length - 1 ? educationGuides[currentIndex + 1] : null;
  const previousLocalized = previousGuide ? localizeGuideMeta(previousGuide, locale) : null;
  const nextLocalized = nextGuide ? localizeGuideMeta(nextGuide, locale) : null;
  const isTradFiGuide = (item: (typeof educationGuides)[number]) => item.track === "tradfi";
  const nonGlossaryGuides = educationGuides.filter((item) => !item.isGlossary);
  const tradFiGuides = nonGlossaryGuides.filter((item) => isTradFiGuide(item));
  const deFiGuides = nonGlossaryGuides.filter((item) => !isTradFiGuide(item));
  const tradFiLevelOneGuides = tradFiGuides.filter((item) => item.level === 1);
  const tradFiLevelTwoGuides = tradFiGuides.filter((item) => item.level === 2);
  const tradFiLevelThreeGuides = tradFiGuides.filter((item) => item.level === 3);
  const deFiLevelOneGuides = deFiGuides.filter((item) => item.level === 1);
  const deFiLevelTwoGuides = deFiGuides.filter((item) => item.level === 2);
  const deFiLevelThreeGuides = deFiGuides.filter((item) => item.level === 3);
  const deFiGlossaryGuides = educationGuides.filter((item) => item.isGlossary && !isTradFiGuide(item));
  const levelLabel = guide.isGlossary
    ? t("labels.glossary")
    : guide.level === 1
      ? t("levels.fundamental")
      : guide.level === 2
        ? t("levels.intermediate")
        : t("levels.advanced");
  const trackLabel = guide.track === "tradfi" ? t("labels.trackTradfi") : t("labels.trackDefi");
  const treeGroups: Array<{
    key: string;
    title: string;
    levels: Array<{ key: string; title: string; guides: typeof educationGuides }>;
  }> = [
    {
      key: "tradfi",
      title: t("tracks.tradfi"),
      levels: [
        { key: "tradfi-level-1", title: t("levels.tradfi1"), guides: tradFiLevelOneGuides },
        { key: "tradfi-level-2", title: t("levels.tradfi2"), guides: tradFiLevelTwoGuides },
        { key: "tradfi-level-3", title: t("levels.tradfi3"), guides: tradFiLevelThreeGuides },
      ],
    },
    {
      key: "defi",
      title: t("tracks.defi"),
      levels: [
        { key: "defi-level-1", title: t("levels.defi1"), guides: deFiLevelOneGuides },
        { key: "defi-level-2", title: t("levels.defi2"), guides: deFiLevelTwoGuides },
        { key: "defi-level-3", title: t("levels.defi3"), guides: deFiLevelThreeGuides },
        { key: "defi-glossary", title: t("levels.defiGlossary"), guides: deFiGlossaryGuides },
      ],
    },
  ];

  return (
      <main className="w-full max-w-7xl mx-auto pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
            <aside className="lg:sticky lg:top-24 h-fit">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-base">{t("labels.guideTree")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 text-sm">
                  <details open className="rounded border border-zinc-800 px-2">
                    <summary className="cursor-pointer py-2 text-zinc-100 font-semibold list-none">
                      {t("labels.programSubmenu")}
                    </summary>
                    <div className="pb-2 space-y-2">
                      {treeGroups.map((tree) => {
                        const treeHasCurrentGuide = tree.levels.some((level) =>
                          level.guides.some((levelGuide) => levelGuide.slug === slug),
                        );
                        return (
                          <details
                            key={tree.key}
                            className={`rounded border ${treeHasCurrentGuide ? "border-primary/50 bg-zinc-800/40" : "border-zinc-800"} px-2`}
                            open={treeHasCurrentGuide}
                          >
                            <summary className="cursor-pointer py-2 text-zinc-200 font-medium list-none">
                              {tree.title}
                            </summary>
                            <div className="pb-2 space-y-2">
                              {tree.levels.map((level) => {
                                if (level.guides.length === 0) {
                                  return null;
                                }

                                const levelHasCurrentGuide = level.guides.some((levelGuide) => levelGuide.slug === slug);
                                return (
                                  <details
                                    key={level.key}
                                    className={`rounded border ${levelHasCurrentGuide ? "border-primary/50 bg-zinc-800/40" : "border-zinc-800"} px-2`}
                                    open={levelHasCurrentGuide}
                                  >
                                    <summary className="cursor-pointer py-2 text-zinc-300 list-none">
                                      {level.title}
                                    </summary>
                                    <div className="pb-2 space-y-2">
                                      {level.guides.map((item) => {
                                        const activeGuide = item.slug === slug;
                                        const sectionLinks =
                                          locale === "en" && guideFallbackSectionsEn[item.slug]?.length
                                            ? guideFallbackSectionsEn[item.slug]
                                            : (item.fallbackSections ?? []);
                                        const localizedGuide = localizeGuideMeta(item, locale);

                                        return (
                                          <details
                                            key={item.slug}
                                            className={`rounded border ${activeGuide ? "border-primary/50 bg-zinc-800/40" : "border-zinc-800"} px-2`}
                                            open={activeGuide}
                                          >
                                            <summary className="cursor-pointer py-2 text-zinc-300 list-none">
                                              {localizedGuide.title}
                                            </summary>
                                            <div className="pb-2 space-y-2">
                                              <Link
                                                href={`/web3/education/${item.slug}`}
                                                className="block text-zinc-300 hover:text-white transition-colors"
                                              >
                                                {t("labels.openGuide")}
                                              </Link>
                                              <div className="pl-2 space-y-1 border-l border-zinc-700">
                                                {sectionLinks.map((section) => (
                                                  <Link
                                                    key={`${item.slug}-${section.title}`}
                                                    href={`/web3/education/${item.slug}#${toId(localizeSectionTitle(section.title, locale))}`}
                                                    className="block text-zinc-400 hover:text-zinc-200 transition-colors"
                                                  >
                                                    {localizeSectionTitle(section.title, locale)}
                                                  </Link>
                                                ))}
                                              </div>
                                            </div>
                                          </details>
                                        );
                                      })}
                                    </div>
                                  </details>
                                );
                              })}
                            </div>
                          </details>
                        );
                      })}
                    </div>
                  </details>

                  <div className="space-y-2">
                    <p className="text-white text-xs uppercase tracking-wide">{t("labels.onThisPage")}</p>
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {section.title}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>

            <article>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">{t("title")}</CardTitle>
                  <p className="text-zinc-300 text-base">{resolvedTitle}</p>
                  <p className="text-zinc-400 text-sm">
                    {trackLabel} - {guide.isGlossary ? t("labels.glossary") : `${t("labels.level")} ${guide.level} - ${levelLabel}`}
                  </p>
                </CardHeader>
                <CardContent className="space-y-10 text-zinc-300 text-justify">
                  {sections.map((section) => {
                    const shouldRenderBtcChartBeforeSection =
                      guide.slug === "level-1-guide-3-bitcoin-blockchain-smart-contracts" &&
                      /cómo se determina el valor de btc|how btc value is determined/i.test(section.title);
                    const shouldRenderEthChartBeforeSection =
                      guide.slug === "level-2-guide-4-que-es-ethereum" &&
                      /qué son los gases o fees|what are gas fees/i.test(section.title);

                    return (
                      <div key={section.id} className="space-y-6">
                        {shouldRenderBtcChartBeforeSection ? <BtcGuideChart isEs={locale === "es"} /> : null}
                        {shouldRenderEthChartBeforeSection ? <EthGuideChart isEs={locale === "es"} /> : null}
                        <section id={section.id} className="scroll-mt-24 space-y-4">
                          <h2 className="text-xl text-white font-semibold">{section.title}</h2>
                          {section.imageUrl && (
                            <LoopingGuideImage
                              src={section.imageUrl}
                              alt={section.title}
                              className="h-[240px] sm:h-[300px] lg:h-[340px]"
                            />
                          )}
                          <ScrollRevealStagger className="space-y-4">
                            {section.blocks.map((block, blockIndex) => {
                              if (block.type === "paragraph") {
                                return <p key={`${section.id}-p-${blockIndex}`}>{block.text}</p>;
                              }

                              return (
                                <ul key={`${section.id}-l-${blockIndex}`} className="list-disc pl-5 space-y-2">
                                  {block.items.map((item, itemIndex) => (
                                    <li key={`${section.id}-li-${itemIndex}`}>{item}</li>
                                  ))}
                                </ul>
                              );
                            })}
                            {section.references && section.references.length > 0 && (
                              <ol className="list-decimal pl-5 space-y-2">
                                {section.references.map((reference, refIndex) => (
                                  <li key={`${section.id}-ref-${refIndex}`}>
                                    <a
                                      href={reference.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline hover:text-zinc-100 transition-colors"
                                    >
                                      {`[${refIndex + 1}] ${normalizeReferenceLabel(reference.label)}`}
                                    </a>
                                  </li>
                                ))}
                              </ol>
                            )}
                          </ScrollRevealStagger>
                        </section>
                      </div>
                    );
                  })}

                  <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {previousGuide ? (
                      <Link
                        href={`/web3/education/${previousGuide.slug}`}
                        className="group rounded-md border border-zinc-700 px-4 py-3 hover:border-zinc-500 transition-colors"
                      >
                        <span className="text-xs text-zinc-400 block">{t("labels.prev")}</span>
                        <span className="text-sm text-zinc-200 inline-flex items-center gap-2">
                          <ArrowLeft className="w-4 h-4" />
                          {previousLocalized?.title}
                        </span>
                      </Link>
                    ) : (
                      <div />
                    )}

                    {nextGuide ? (
                      <Link
                        href={`/web3/education/${nextGuide.slug}`}
                        className="group rounded-md border border-zinc-700 px-4 py-3 hover:border-zinc-500 transition-colors sm:text-right"
                      >
                        <span className="text-xs text-zinc-400 block">{t("labels.next")}</span>
                        <span className="text-sm text-zinc-200 inline-flex items-center gap-2 sm:justify-end">
                          {nextLocalized?.title}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    ) : (
                      <div />
                    )}
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </main>
  );
}
