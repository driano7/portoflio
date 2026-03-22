'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/routing";
import { XocoPaymentCardDemo } from "@/components/ui/xoco-payment-card-demo";

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
                <div className="space-y-4">
                  <p>
                    Soy Ingeniero en Computación por la UNAM (2017-2022), una etapa académica que culminó con la defensa de mi tesis, mi cuarto artículo científico sobre detección de publicidad web y análisis de malas prácticas de grandes compañías, en Florida Atlantic University (FAU), ampliando mi perspectiva global. Me comunico profesionalmente en <strong>español</strong>, <strong>inglés (avanzado)</strong> y <strong>portugués (básico)</strong>.
                  </p>
                  <p>
                    También me apasiona viajar por el mundo y mantengo un compromiso profundo con Latinoamérica. Por eso recorro distintos países de la región, conecto con las personas, aprendo de sus culturas y entiendo de primera mano nuestras problemáticas. Esa experiencia la incorporo directamente en las soluciones de software en las que trabajo, para construir productos más útiles, sensibles al contexto y con impacto real.
                  </p>
                </div>
              ),
            },
            {
              id: "role",
              title: "My role",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Rol profesional de Donovan Riaño",
              content: (
                <p>
                  Mi rol principal está enfocado en <strong>UX/UI, gestión de producto y prototipado con IA</strong>. Trabajo desde las necesidades y requisitos reales del usuario para diseñar y construir aplicaciones y sitios web que no solo funcionen técnicamente, sino que también comuniquen valor de marca con claridad. Este enfoque impacta directamente en la proyección de imagen de mis clientes y facilita el cierre de ventas mediante experiencias digitales más confiables, claras y orientadas a conversión. Además, incorporo <strong>agentes de IA</strong> en mi flujo de trabajo para construir los productos que desarrollo con mayor velocidad y profundidad técnica, lo que me permite ampliar continuamente mis habilidades.
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
                <div className="space-y-4">
                  <p>
                    Actualmente, mi carrera está enfocada en la intersección de tecnologías que definen el futuro: <strong>Web3, criptomonedas e Inteligencia Artificial</strong>. Como <strong>Creative Director en <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Criptec.io</Link></strong>, lidero el desarrollo de soluciones innovadoras dentro del ecosistema cripto. En los últimos meses también me he enfocado intensamente en la arquitectura de interfaz, refinando componentes, microinteracciones y adaptación visual de un repositorio anterior hacia un sistema más consistente, escalable y orientado a producto.
                  </p>
                  <p>
                    Dentro de Criptec también desarrollo contenido profesional para redes sociales en formato video, enfocado en noticias y análisis de <strong>Inteligencia Artificial, cripto, Web3 y tecnología en general</strong>. Este trabajo complementa la estrategia de marca y educación, traduciendo temas complejos en mensajes claros, útiles y accionables para la comunidad.
                  </p>
                </div>
              ),
            },
            {
              id: "xoco-suite",
              title: "Xoco Suite",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Xoco Suite",
              content: (
                <p>
                  De forma paralela, estoy desarrollando <strong>Xoco Suite</strong>, un software integral para restaurantes y negocios de alimentos que conecta <strong>sitio web</strong>, <strong>app de cliente</strong> y <strong>punto de venta</strong> en una sola operación. La plataforma sincroniza pedidos entre la app y el POS, incorpora <strong>métricas avanzadas</strong>, y añade <strong>gestión de higiene y cumplimiento</strong> alineada a lineamientos de organismos gubernamentales. Además, gracias al acuerdo con <strong><Link href="https://blokko.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">blokko.io</Link></strong>, permite recibir pagos en <strong>cripto</strong> y en sistemas latinoamericanos como <strong>PIX, SPEI o Mercado Libre</strong>, con liquidación al día siguiente en moneda local, bajo una experiencia equivalente a una transacción con tarjeta Visa o Master card.
                </p>
              ),
            },
            {
              id: "skills",
              title: "My skills",
              imageSrc: "/chalten.jpeg",
              imageAlt: "Habilidades de Donovan Riaño",
              content: (
                <div className="space-y-4">
                  <p>
                    Mis habilidades también fueron reconocidas por <strong>Meta (antes Facebook) en 2021</strong>, donde pasé por un proceso de entrevistas integral que reforzó mi potencial para aportar en empresas de tecnología de primer nivel.
                  </p>
                  <p>
                    Desde enero de 2022 también me desempeño como <strong>QA Engineer en American Express</strong>, donde aplico mi atención al detalle para asegurar calidad y robustez en productos globales. Este rol también ha sido clave para fortalecer mis habilidades de comunicación, gestión de proyectos y liderazgo, complementando mi agilidad del mundo startup con una visión integral del ciclo de vida del software.
                  </p>
                </div>
              ),
            },
            {
              id: "future",
              title: "Proyecto futuro",
              imageSrc: "/canada.jpeg",
              imageAlt: "Proyecto futuro de Donovan Riaño",
              content: (
                <p>
                  Como proyecto futuro, estoy trabajando junto con mi equipo para abrir una cafetería en Ciudad de México. Puedes seguir nuestro camino en{" "}
                  <Link
                    href="https://xococafe.netlify.app"
                    target="_blank"
                    className="underline font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Xoco Café
                  </Link>
                  . Ofreceremos bebidas mexicanas de alta calidad, con sabor y calidad como pilares principales, y también aceptaremos <strong>pagos con cripto</strong>.
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
                <div className="space-y-4">
                  <p>
                    I hold a bachelor&apos;s degree in Computer Engineering from UNAM (2017-2022), an academic journey that culminated with the defense of my thesis—my fourth scientific paper on web ads detection and the analysis of malpractices by big companies—at Florida Atlantic University (FAU), broadening my global perspective. I communicate professionally in <strong>Spanish</strong>, <strong>English (advanced)</strong>, and <strong>Portuguese (basic)</strong>.
                  </p>
                  <p>
                    I am also passionate about traveling the world and I keep a strong commitment to Latin America. That is why I travel across different countries in the region, connect with people, and learn from their cultures and everyday challenges. I apply those insights directly to the software solutions I build, so products are more useful, context-aware, and capable of creating real impact.
                  </p>
                </div>
              ),
            },
            {
              id: "role",
              title: "My role",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Professional role of Donovan Riaño",
              content: (
                <p>
                  My core role is focused on <strong>UX/UI, product management, and AI-assisted prototyping</strong>. I work from real user needs and requirements to design and build web applications and websites that are not only technically solid, but also communicate brand value with clarity. This approach has a direct impact on my clients&apos; brand projection and helps close sales faster through more trustworthy, clearer, and conversion-oriented digital experiences. In addition, I integrate <strong>AI agents</strong> into my workflow to build the products I develop with greater speed and technical depth, which continuously expands my skill set.
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
                <div className="space-y-4">
                  <p>
                    Currently, my career is focused on the intersection of technologies defining the future: <strong>Web3, cryptocurrencies, and Artificial Intelligence</strong>. As <strong>Creative Director at <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">Criptec.io</Link></strong>, I lead the development of innovative solutions in the crypto space. Over the last few months, I have also invested significant effort in UI architecture, polishing components, micro-interactions, and adapting a previous repository into a more consistent, scalable, product-oriented system.
                  </p>
                  <p>
                    At Criptec, I also produce professional social media video content focused on news and analysis related to <strong>Artificial Intelligence, crypto, Web3, and technology in general</strong>. This work strengthens our branding and educational strategy by translating complex topics into clear, practical, and actionable insights for the community.
                  </p>
                </div>
              ),
            },
            {
              id: "xoco-suite",
              title: "Xoco Suite",
              imageSrc: "/iguazu.jpeg",
              imageAlt: "Xoco Suite",
              content: (
                <p>
                  In parallel, I am building <strong>Xoco Suite</strong>, an integrated software product for restaurants and food businesses that unifies a <strong>website</strong>, <strong>client app</strong>, and <strong>point-of-sale system</strong> into one connected operation. The platform synchronizes orders between the app and POS, provides <strong>advanced metrics</strong>, and includes <strong>hygiene and compliance management</strong> aligned with government regulatory guidelines. In addition, through an agreement with <strong><Link href="https://blokko.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">blokko.io</Link></strong>, it supports payments in <strong>crypto</strong> and LATAM rails such as <strong>PIX, SPEI, and Mercado Libre</strong>, settling to local currency the next day with an experience equivalent to a Visa or Master card transaction.
                </p>
              ),
            },
            {
              id: "skills",
              title: "My skills",
              imageSrc: "/chalten.jpeg",
              imageAlt: "Skills of Donovan Riaño",
              content: (
                <div className="space-y-4">
                  <p>
                    My skills were also recognized by <strong>Meta (formerly Facebook) in 2021</strong>, where I went through a comprehensive interview process, underscoring my potential for contributing to top-tier tech companies.
                  </p>
                  <p>
                    Since January 2022, I have also served as a <strong>QA Engineer at American Express</strong>, where I apply my attention to detail to ensure the quality and robustness of world-class products. This role has also been crucial in developing my skills in communication, project management, and leadership. This corporate experience complements my agility in the startup world, giving me a comprehensive view of the software lifecycle.
                  </p>
                </div>
              ),
            },
            {
              id: "future",
              title: "Future project",
              imageSrc: "/canada.jpeg",
              imageAlt: "Future project of Donovan Riaño",
              content: (
                <p>
                  As a future project, I am working hard with my team to open a coffee shop in Mexico City. You can follow our journey at{" "}
                  <Link
                    href="https://xococafe.netlify.app"
                    target="_blank"
                    className="underline font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    Xoco Café
                  </Link>
                  . We will offer quality Mexican-origin beverages, with flavor and quality as our main cornerstones, and we will also accept <strong>crypto payments</strong>.
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
      <div className="container mx-auto px-4">
        <div id="about" ref={sectionRef} className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl text-center">
            {isEs ? <>Sobre <span className="text-violet-400">mí</span></> : <>About <span className="text-violet-400">Me</span></>}
          </h2>

          <div className="mt-10 text-lg leading-8 text-zinc-700 dark:text-zinc-300 text-justify">
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
                                className={`rounded-2xl w-full h-full min-h-[420px] sm:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10 dark:hidden ${
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
                                className={`rounded-2xl w-full h-full min-h-[420px] sm:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10 hidden dark:block ${
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
                              className="rounded-2xl object-cover w-full h-full min-h-[420px] sm:min-h-[560px] shadow-2xl shadow-black/25 border border-white/10"
                              priority={index === 0}
                            />
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            {card.title}
                          </h3>
                          <div className="space-y-4 text-base sm:text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                            {card.content}
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
            <div className="-mt-16 flex items-center justify-center gap-3">
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
