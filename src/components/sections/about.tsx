'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import { XocoPaymentCardDemo } from "@/components/ui/xoco-payment-card-demo";
import { ScrollTyping } from "@/components/ui/scroll-typing";

type AboutCard = {
  id: string;
  title: string;
  imageSrc: string;
  imageSrcLight?: string;
  imageSrcDark?: string;
  imageAlt: string;
  content: React.ReactNode;
};

export function About() {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasManualNavigation, setHasManualNavigation] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [atPageBottom, setAtPageBottom] = useState(false);
  const animatingRef = useRef(false);
  const hintPlayedRef = useRef(false);

  const cards = useMemo<AboutCard[]>(
    () =>
      isEs
        ? [
            {
              id: "about",
              title: "About",
              imageSrc: "/donovan.jpeg",
              imageAlt: "Donovan Riaño",
              content: (
                <p>
                  Soy Ingeniero en Computación por la UNAM (2017-2022) y realicé investigación académica en Florida Atlantic University (FAU), donde reforcé una visión técnica con perspectiva internacional. Me comunico profesionalmente en <strong>español</strong>, <strong>inglés (avanzado)</strong> y <strong>portugués (básico)</strong>. Viajar por Latinoamérica me permite entender mejor el contexto regional y convertir ese aprendizaje en productos digitales con impacto real.
                </p>
              ),
            },
            {
              id: "role",
              title: "My role",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Rol profesional de Donovan Riaño",
              content: (
                <p>
                  Mi rol está enfocado en <strong>UX/UI, gestión de producto y prototipado con IA</strong>. Diseño y construyo apps y sitios web a partir de necesidades reales de negocio y usuario, cuidando conversión, claridad y escalabilidad. Además, utilizo <strong>agentes de IA</strong> para acelerar ejecución, mejorar calidad de entrega y ampliar mis capacidades técnicas.
                </p>
              ),
            },
            {
              id: "criptec",
              title: "Criptec",
              imageSrc: "/criptec-logo-color.png",
              imageSrcLight: "/criptec-logo-color.png",
              imageSrcDark: "/criptec-logo-white.png",
              imageAlt: "Donovan Riaño en Criptec",
              content: (
                <p>
                  En <strong><Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Criptec.io</Link></strong>, como Creative Director, lidero iniciativas en <strong>Web3, cripto e IA</strong> con foco en producto, marca y experiencia de usuario. También produzco contenido de valor para redes sociales sobre tecnología, IA y ecosistema cripto, transformando temas complejos en mensajes claros y accionables.
                </p>
              ),
            },
            {
              id: "xoco-suite",
              title: "Xoco Suite",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Xoco Suite",
              content: (
                <p>
                  Desarrollo <strong>Xoco Suite</strong>, una plataforma para restaurantes que unifica <strong>sitio web, app de cliente y punto de venta</strong>, con sincronización de pedidos, analítica avanzada y gestión de higiene/compliance. Además, mediante <strong><Link href="https://blokko.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">blokko.io</Link></strong>, integra pagos en cripto y rieles LATAM (PIX, SPEI, Mercado Libre) con liquidación al día siguiente en moneda local.
                </p>
              ),
            },
            {
              id: "skills",
              title: "My skills",
              imageSrc: "/chalten.jpeg",
              imageAlt: "Habilidades de Donovan Riaño",
              content: (
                <p>
                  Mi perfil combina experiencia en ecosistemas startup y corporativos: fui evaluado por <strong>Meta</strong> en procesos de alto nivel y actualmente trabajo como <strong>QA Engineer en American Express</strong>, fortaleciendo calidad, comunicación técnica, liderazgo y ejecución en productos de escala global.
                </p>
              ),
            },
            {
              id: "future",
              title: "Proyecto futuro",
              imageSrc: "/canada.jpeg",
              imageAlt: "Proyecto futuro de Donovan Riaño",
              content: (
                <p>
                  Como siguiente etapa, estoy construyendo con mi equipo una cafetería en Ciudad de México. Puedes seguir el proyecto en{" "}
                  <Link
                    href="https://xococafe.netlify.app"
                    target="_blank"
                    className="underline font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Xoco Café
                  </Link>
                  , donde combinamos hospitalidad, producto y tecnología, incluyendo <strong>pagos con cripto</strong>.
                </p>
              ),
            },
          ]
        : [
            {
              id: "about",
              title: "About",
              imageSrc: "/donovan.jpeg",
              imageAlt: "Donovan Riaño",
              content: (
                <p>
                  I hold a Computer Engineering degree from UNAM (2017-2022) and completed academic research at Florida Atlantic University (FAU), strengthening both technical depth and global perspective. I work professionally in <strong>Spanish</strong>, <strong>English (advanced)</strong>, and <strong>Portuguese (basic)</strong>. Traveling across Latin America helps me design software with stronger context awareness and practical impact.
                </p>
              ),
            },
            {
              id: "role",
              title: "My role",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Professional role of Donovan Riaño",
              content: (
                <p>
                  My core role focuses on <strong>UX/UI, product management, and AI-assisted prototyping</strong>. I design and build apps and websites from real user and business requirements, prioritizing clarity, conversion, and scalability. I also leverage <strong>AI agents</strong> to accelerate delivery and raise technical quality.
                </p>
              ),
            },
            {
              id: "criptec",
              title: "Criptec",
              imageSrc: "/criptec-logo-color.png",
              imageSrcLight: "/criptec-logo-color.png",
              imageSrcDark: "/criptec-logo-white.png",
              imageAlt: "Donovan Riaño at Criptec",
              content: (
                <p>
                  At <strong><Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Criptec.io</Link></strong>, as Creative Director, I lead initiatives in <strong>Web3, crypto, and AI</strong> with a product-and-experience-first approach. I also produce educational social media content that turns complex technical topics into clear, practical insights for the community.
                </p>
              ),
            },
            {
              id: "xoco-suite",
              title: "Xoco Suite",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Xoco Suite",
              content: (
                <p>
                  I am building <strong>Xoco Suite</strong>, a restaurant platform that unifies <strong>website, client app, and POS</strong>, with synchronized orders, advanced analytics, and hygiene/compliance workflows. Through <strong><Link href="https://blokko.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">blokko.io</Link></strong>, it also supports crypto and LATAM payment rails (PIX, SPEI, Mercado Libre) with next-day local-currency settlement.
                </p>
              ),
            },
            {
              id: "skills",
              title: "My skills",
              imageSrc: "/chalten.jpeg",
              imageAlt: "Skills of Donovan Riaño",
              content: (
                <p>
                  My profile combines startup execution and enterprise rigor: I went through high-standard evaluation processes at <strong>Meta</strong> and currently work as a <strong>QA Engineer at American Express</strong>, strengthening software quality, technical communication, leadership, and delivery consistency at global scale.
                </p>
              ),
            },
            {
              id: "future",
              title: "Future project",
              imageSrc: "/canada.jpeg",
              imageAlt: "Future project of Donovan Riaño",
              content: (
                <p>
                  As a next chapter, I am building a coffee shop in Mexico City with my team. You can follow the project at{" "}
                  <Link
                    href="https://xococafe.netlify.app"
                    target="_blank"
                    className="underline font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Xoco Café
                  </Link>
                  , where we combine hospitality, product thinking, and technology, including <strong>crypto payments</strong>.
                </p>
              ),
            },
          ],
    [isEs],
  );

  const moveCard = useCallback(
    (direction: 1 | -1, manual: boolean) => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      setIsAnimating(true);
      if (manual) setHasManualNavigation(true);

      window.setTimeout(() => {
        setActiveIndex((prev) => (prev + direction + cards.length) % cards.length);
        setIsAnimating(false);
        animatingRef.current = false;
      }, 860);
    },
    [cards.length],
  );

  useEffect(() => {
    if (hasManualNavigation) return;
    const interval = window.setInterval(() => {
      moveCard(1, false);
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [hasManualNavigation, moveCard]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setAtPageBottom(scrollBottom >= pageHeight - 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAboutVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || hintPlayedRef.current) return;

    let forwardTimeout: number | undefined;
    let backwardTimeout: number | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hintPlayedRef.current || hasManualNavigation) return;
        hintPlayedRef.current = true;

        forwardTimeout = window.setTimeout(() => {
          moveCard(1, false);
          backwardTimeout = window.setTimeout(() => {
            moveCard(-1, false);
          }, 1300);
        }, 1500);

        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);

    return () => {
      if (forwardTimeout) window.clearTimeout(forwardTimeout);
      if (backwardTimeout) window.clearTimeout(backwardTimeout);
      observer.disconnect();
    };
  }, [hasManualNavigation, moveCard]);

  const first = cards[activeIndex];
  const second = cards[(activeIndex + 1) % cards.length];
  const third = cards[(activeIndex + 2) % cards.length];

  const visibleCards = [first, second, third];

  return (
    <div className="relative py-24 sm:py-32 animate-fade-in">
      {isAboutVisible && !atPageBottom ? (
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 bottom-28 z-40 -translate-x-1/2 sm:hidden"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/35 bg-zinc-900/70 text-violet-200 shadow-lg backdrop-blur-md dark:bg-zinc-950/75">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </span>
        </div>
      ) : null}
      <div className="container mx-auto px-4">
        <div id="about" ref={sectionRef} className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl text-center">
            {isEs ? <>Sobre <span className="text-violet-400">mí</span></> : <>About <span className="text-violet-400">Me</span></>}
          </h2>

          <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label={isEs ? "Tarjeta anterior" : "Previous card"}
              onClick={() => moveCard(-1, true)}
              className="no-frosted group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 disabled:opacity-50 dark:bg-zinc-950/70"
              disabled={isAnimating}
            >
              <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              <ChevronLeft className="relative h-3.5 w-3.5 text-violet-200" />
            </button>
            <button
              type="button"
              aria-label={isEs ? "Tarjeta siguiente" : "Next card"}
              onClick={() => moveCard(1, true)}
              className="no-frosted group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 disabled:opacity-50 dark:bg-zinc-950/70"
              disabled={isAnimating}
            >
              <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
              <ChevronRight className="relative h-3.5 w-3.5 text-violet-200" />
            </button>
          </div>

          <div className="mt-2 sm:mt-4 text-lg leading-8 text-zinc-700 dark:text-zinc-300 text-justify">
            <div className={`about-card-stack ${isAnimating ? "is-animating" : ""}`}>
              {visibleCards.map((card, index) => {
                const isTopCard = index === 0;
                const stackClass =
                  isTopCard
                    ? "about-stack-item about-stack-item--top"
                    : index === 1
                    ? "about-stack-item about-stack-item--middle"
                    : "about-stack-item about-stack-item--back";

                return (
                  <article key={`${card.id}-${activeIndex}-${index}`} className={stackClass}>
                    <div className="about-stack-card relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/85">
                      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 p-5 sm:p-7 items-stretch">
                        <div className="relative w-full h-full self-stretch">
                          {card.id === "xoco-suite" ? (
                            <XocoPaymentCardDemo playSequence={isTopCard} cardholder="Donovan Riaño" />
                          ) : card.imageSrcLight && card.imageSrcDark ? (
                            <>
                              <Image
                                src={card.imageSrcLight}
                                alt={card.imageAlt}
                                width={340}
                                height={680}
                                quality={100}
                                className={`rounded-2xl w-full aspect-square md:aspect-auto h-auto md:h-full md:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10 dark:hidden ${
                                  card.id === "criptec"
                                    ? "object-contain bg-zinc-50 p-5 sm:p-6"
                                    : "object-cover"
                                }`}
                                priority={index === 0}
                              />
                              <Image
                                src={card.imageSrcDark}
                                alt={card.imageAlt}
                                width={340}
                                height={680}
                                quality={100}
                                className={`rounded-2xl w-full aspect-square md:aspect-auto h-auto md:h-full md:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10 hidden dark:block ${
                                  card.id === "criptec"
                                    ? "object-contain bg-zinc-900 p-5 sm:p-6"
                                    : "object-cover"
                                }`}
                                priority={index === 0}
                              />
                            </>
                          ) : (
                            <Image
                              src={card.imageSrc}
                              alt={card.imageAlt}
                              width={340}
                              height={680}
                              className="rounded-2xl object-cover w-full aspect-square md:aspect-auto h-auto md:h-full md:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10"
                              priority={index === 0}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            {card.title}
                          </h3>
                          <div className="space-y-4 text-base sm:text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                            {isTopCard ? (
                              <ScrollTyping key={`typing-${card.id}-${activeIndex}`}>
                                {card.content}
                              </ScrollTyping>
                            ) : (
                              card.content
                            )}
                          </div>
                        </div>
                      </div>
                      {!isTopCard ? (
                        <div className="pointer-events-none absolute inset-0 z-20 bg-black/98 backdrop-blur-[1px]" />
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="-mt-16 hidden sm:flex items-center justify-center gap-3">
              <button
                type="button"
                aria-label={isEs ? "Tarjeta anterior" : "Previous card"}
                onClick={() => moveCard(-1, true)}
                className="no-frosted group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 disabled:opacity-50 dark:bg-zinc-950/70"
                disabled={isAnimating}
              >
                <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <ChevronLeft className="relative h-3.5 w-3.5 text-violet-200" />
              </button>
              <button
                type="button"
                aria-label={isEs ? "Tarjeta siguiente" : "Next card"}
                onClick={() => moveCard(1, true)}
                className="no-frosted group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 disabled:opacity-50 dark:bg-zinc-950/70"
                disabled={isAnimating}
              >
                <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
                <ChevronRight className="relative h-3.5 w-3.5 text-violet-200" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
