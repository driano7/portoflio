"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronDown, ChevronUp, Instagram, Music2 } from "lucide-react";
import { ScrollRevealStagger } from "@/components/ui/scroll-reveal-stagger";
import { useLocale } from "next-intl";
import type { AppLocale } from "@/i18n/routing";

type CollapsibleCardProps = {
  title: string;
  children: ReactNode;
  ariaLabel: string;
  defaultOpen?: boolean;
  animateButton?: boolean;
};

function DropdownIconButton({
  open,
  onClick,
  ariaLabel,
  animateButton = false,
}: {
  open: boolean;
  onClick: () => void;
  ariaLabel: string;
  animateButton?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`no-frosted group relative h-9 w-9 overflow-hidden rounded-full border border-violet-400/35 bg-zinc-900/60 text-zinc-100 transition-transform duration-200 hover:scale-105 hover:border-violet-300/60 active:scale-95 dark:bg-zinc-950/70 ${animateButton ? "defi-dropdown-button-fundamentals" : ""}`}
    >
      <span className="pointer-events-none absolute inset-0 theme-toggle-gradient" aria-hidden />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
      <span className="relative inline-flex h-full w-full items-center justify-center">
        {open ? <ChevronUp className="h-4 w-4 text-violet-200" /> : <ChevronDown className="h-4 w-4 text-violet-200" />}
      </span>
    </button>
  );
}

function CollapsibleCard({
  title,
  children,
  ariaLabel,
  defaultOpen = false,
  animateButton = false,
}: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [openCycle, setOpenCycle] = useState(0);

  const handleToggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) setOpenCycle((cycle) => cycle + 1);
      return next;
    });
  };

  return (
    <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
      <CardHeader className="relative pr-14">
        <CardTitle className="text-zinc-900 dark:text-white">{title}</CardTitle>
        <div className="absolute right-6 top-5">
          <DropdownIconButton open={open} onClick={handleToggle} ariaLabel={ariaLabel} animateButton={animateButton} />
        </div>
      </CardHeader>
      {open ? (
        <CardContent key={openCycle} className="defi-dropdown-reveal text-zinc-700 dark:text-zinc-400 space-y-6 text-justify">
          {children}
        </CardContent>
      ) : null}
    </Card>
  );
}

export function Web3() {
  const locale = useLocale() as AppLocale;
  const isEs = locale === "es";

  return (
    <div className="relative py-24 sm:py-32 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <ScrollRevealStagger className="space-y-16">
            <div id="defi-cefi" className="space-y-8 scroll-mt-24">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
                {isEs ? "Finanzas " : ""}
                <span className="text-violet-400">DeFi y CeFi</span>
                {!isEs ? " Finance" : ""}
              </h3>

              <div id="investments" className="space-y-8 scroll-mt-24">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
                  {isEs ? "Ruta cripto" : "Crypto roadmap"}
                </h3>

                <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-900 dark:text-white">
                      {isEs ? "Contenido para aprender CeFi y DeFi de forma autónoma" : "Autonomous CeFi and DeFi learning path"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-700 dark:text-zinc-400 space-y-4 text-justify">
                    <p>
                      {isEs
                        ? "Esta ruta está diseñada para entender cripto con estructura: primero conceptos base, luego operación en CeFi y finalmente ejecución en DeFi."
                        : "This path is designed to learn crypto with structure: fundamentals first, then CeFi operations, and finally DeFi execution."}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        {isEs
                          ? "Desarrollar criterio técnico y económico para tomar decisiones informadas en cripto."
                          : "Build technical and economic judgment to make informed crypto decisions."}
                      </li>
                      <li>
                        {isEs
                          ? "Cubrir seguridad, wallets, contratos inteligentes, stablecoins, identidad digital y gestión de riesgo."
                          : "Cover security, wallets, smart contracts, stablecoins, digital identity, and risk management."}
                      </li>
                      <li>
                        {isEs
                          ? "Aplicar una progresión de aprendizaje por niveles para pasar de teoría a práctica."
                          : "Follow a level-based progression to move from theory to practice."}
                      </li>
                    </ul>
                    <p>
                      {isEs
                        ? "No se ofrece asesoría de inversión ni preparación para certificaciones. Es una ruta educativa práctica para formar criterio propio."
                        : "This is not investment advice and it is not a certification track. It is a practical educational path to build independent judgment."}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                  <CardContent className="pt-6 text-zinc-700 dark:text-zinc-400 space-y-3 text-justify">
                    <p>
                      {isEs ? (
                        <>
                          <strong>CeFi</strong> (Centralized Finance) usa intermediarios como exchanges o plataformas custodias para facilitar la operación y la experiencia de usuario.
                        </>
                      ) : (
                        <>
                          <strong>CeFi</strong> (Centralized Finance) uses intermediaries such as exchanges or custodial platforms to simplify operations and user experience.
                        </>
                      )}
                    </p>
                    <p>
                      {isEs ? (
                        <>
                          <strong>DeFi</strong> (Decentralized Finance) opera con contratos inteligentes y protocolos abiertos, donde tú gestionas tus activos y llaves.
                        </>
                      ) : (
                        <>
                          <strong>DeFi</strong> (Decentralized Finance) runs through smart contracts and open protocols, where you manage your own assets and keys.
                        </>
                      )}
                    </p>
                    <p>
                      {isEs
                        ? "Diferencia clave: CeFi ofrece mayor comodidad con confianza delegada; DeFi ofrece mayor soberanía con mayor responsabilidad operativa."
                        : "Key difference: CeFi offers convenience with delegated trust; DeFi offers sovereignty with higher operational responsibility."}
                    </p>
                    <p>
                      <strong>
                        {isEs
                          ? "Recomendación: primero recorre CeFi y después DeFi."
                          : "Recommendation: complete CeFi first, then move to DeFi."}
                      </strong>
                    </p>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    {isEs ? "Contenido visual complementario" : "Complementary visual content"}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <Link
                      href="https://www.instagram.com/mrcripto_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white"
                    >
                      <Instagram className="h-3.5 w-3.5 text-violet-300" />
                      <span className="font-medium">Instagram @mrcripto_</span>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@mrcripto_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-2 text-xs text-zinc-200 transition-colors hover:border-violet-400/50 hover:text-white"
                    >
                      <Music2 className="h-3.5 w-3.5 text-violet-300" />
                      <span className="font-medium">TikTok @mrcripto_</span>
                    </Link>
                  </div>
                </div>

                <CollapsibleCard
                  title={isEs ? "CeFi: Programa completo (3 niveles)" : "CeFi: Full program (3 levels)"}
                  ariaLabel={isEs ? "Desplegar CeFi" : "Toggle CeFi"}
                  animateButton
                >
                  <p>
                    {isEs
                      ? "Ruta enfocada en finanzas con intermediarios y estructura tradicional: hábitos financieros, instrumentos regulados, ejecución y control de riesgo."
                      : "Track focused on intermediary-based and traditional finance structure: financial habits, regulated instruments, execution, and risk control."}
                  </p>

                  <div className="space-y-4">
                    <CollapsibleCard
                      title={isEs ? "Nivel 1: Fundamentos CeFi" : "Level 1: CeFi Fundamentals"}
                      ariaLabel={isEs ? "Desplegar nivel 1 de CeFi" : "Toggle CeFi level 1"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: construye la base financiera y el marco mental para tomar decisiones de inversión con orden, objetivos y tolerancia al riesgo."
                            : "Level summary: build the financial foundation and decision framework to invest with structure, goals, and risk discipline."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 1: Del ahorro a la inversión. Define los fundamentos de administración personal, inflación, presupuesto e interés compuesto para pasar de conservar dinero a hacerlo crecer." : "Guide 1: From saving to investing. Covers personal money management, inflation, budgeting, and compound interest."}</li>
                          <li>{isEs ? "Guía 2: Renta fija en México. Expone instrumentos base, protección regulatoria y criterios prácticos para evaluar rendimiento, liquidez y riesgo." : "Guide 2: Fixed income in Mexico. Explains core instruments, regulatory protection, and practical risk/return/liquidity criteria."}</li>
                          <li>{isEs ? "Guía 3: Perfil de inversionista. Aterriza cómo alinear horizonte, ingreso y tolerancia al riesgo con una asignación de portafolio coherente." : "Guide 3: Investor profile. Aligns horizon, income, and risk tolerance with coherent portfolio allocation."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/tradfi-level-1-guide-1-del-ahorro-a-la-inversion"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 1 CeFi: Ver docs" : "CeFi level 1: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title={isEs ? "Nivel 2: Operación y riesgo en CeFi" : "Level 2: CeFi operations and risk"}
                      ariaLabel={isEs ? "Desplegar nivel 2 de CeFi" : "Toggle CeFi level 2"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: introduce mercado de capitales y ejecución operativa con enfoque en costos, riesgo, horizonte y toma de decisiones informada."
                            : "Level summary: introduces capital markets and operational execution with focus on costs, risk, horizon, and informed decisions."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 4: Bolsa e índices. Explica estructura del mercado, lógica de índices y uso estratégico de ETFs para exposición diversificada." : "Guide 4: Stock market and indices. Explains market structure, index logic, and strategic ETF exposure."}</li>
                          <li>{isEs ? "Guía 5: S&P 500 y sectores. Desglosa composición sectorial, concentración y lectura macro para construir criterio de selección." : "Guide 5: S&P 500 and sectors. Breaks down sector composition, concentration, and macro reading for selection criteria."}</li>
                          <li>{isEs ? "Guía 6: Invertir desde México. Resume el proceso operativo completo: intermediario, fondeo, ejecución y consideraciones regulatorias." : "Guide 6: Investing from Mexico. Covers end-to-end operation: broker, funding, execution, and regulatory considerations."}</li>
                          <li>{isEs ? "Guía 7: Trading vs inversión. Diferencia enfoques, temporalidades y gestión emocional para evitar decisiones reactivas." : "Guide 7: Trading vs investing. Differentiates approaches, timeframes, and emotional management to avoid reactive decisions."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/tradfi-level-2-guide-4-bolsa-e-indices"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 2 CeFi: Ver docs" : "CeFi level 2: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title={isEs ? "Nivel 3: Estrategia CeFi avanzada" : "Level 3: Advanced CeFi strategy"}
                      ariaLabel={isEs ? "Desplegar nivel 3 de CeFi" : "Toggle CeFi level 3"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: consolida estrategia patrimonial con criterios avanzados de diversificación, valoración y protección de capital."
                            : "Level summary: consolidates wealth strategy with advanced diversification, valuation, and capital protection criteria."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 8: Diversificación avanzada. Profundiza en correlación, rebalanceo y control de concentración para portafolios robustos." : "Guide 8: Advanced diversification. Covers correlation, rebalancing, and concentration control for robust portfolios."}</li>
                          <li>{isEs ? "Guía 9: Precio de la acción y dividendos. Aborda drivers de valuación, retorno total y lectura de flujos para análisis más completo." : "Guide 9: Stock price and dividends. Covers valuation drivers, total return, and cash-flow perspective."}</li>
                          <li>{isEs ? "Guía 10: Seguridad patrimonial. Cierra con gobierno personal del riesgo, protección operativa y continuidad financiera." : "Guide 10: Wealth security. Closes with personal risk governance, operational protection, and financial continuity."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/tradfi-level-3-guide-8-diversificacion-avanzada"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 3 CeFi: Ver docs" : "CeFi level 3: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title={isEs ? "DeFi: Programa completo (3 niveles)" : "DeFi: Full program (3 levels)"}
                  ariaLabel={isEs ? "Desplegar DeFi" : "Toggle DeFi"}
                >
                  <p>
                    {isEs
                      ? "Ruta enfocada en protocolos abiertos, contratos inteligentes y autocustodia para operar en cripto con responsabilidad técnica y operativa."
                      : "Track focused on open protocols, smart contracts, and self-custody to operate in crypto with technical and operational responsibility."}
                  </p>

                  <div className="space-y-4">
                    <CollapsibleCard
                      title={isEs ? "Nivel 1: Fundamentos DeFi" : "Level 1: DeFi Fundamentals"}
                      ariaLabel={isEs ? "Desplegar nivel 1 de DeFi" : "Toggle DeFi level 1"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: establece los conceptos troncales del ecosistema cripto y su arquitectura técnica para comprender cómo se mueve el valor en blockchain."
                            : "Level summary: establishes core crypto concepts and technical architecture to understand blockchain value transfer."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 1: Qué son las criptomonedas. Presenta origen, propósito y fundamentos de descentralización, seguridad y registros distribuidos." : "Guide 1: What cryptocurrencies are. Introduces origin, purpose, decentralization, security, and distributed ledgers."}</li>
                          <li>{isEs ? "Guía 2: Wallets crypto. Explica custodia, llaves, tipos de billetera y criterios prácticos de seguridad operativa." : "Guide 2: Crypto wallets. Covers custody, keys, wallet types, and practical operational security."}</li>
                          <li>{isEs ? "Guía 3: Qué es Bitcoin (BTC). Profundiza en la red Bitcoin, su lógica de valor, escalabilidad y componentes clave de su funcionamiento." : "Guide 3: What Bitcoin (BTC) is. Deep dives into Bitcoin network logic, value drivers, and key components."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/level-1-guide-1-que-son-las-criptomonedas"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 1 DeFi: Ver docs" : "DeFi level 1: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title={isEs ? "Nivel 2: Aplicaciones DeFi y Web3" : "Level 2: DeFi and Web3 applications"}
                      ariaLabel={isEs ? "Desplegar nivel 2 de DeFi" : "Toggle DeFi level 2"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: amplía fundamentos hacia aplicaciones y narrativas del ecosistema Web3 para entender utilidades, riesgos y evolución del mercado."
                            : "Level summary: expands fundamentals into Web3 applications and narratives to understand utility, risk, and market evolution."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 4: Qué es Ethereum. Explica su arquitectura, EVM, gas, bifurcación histórica y evolución técnica del protocolo." : "Guide 4: What Ethereum is. Covers architecture, EVM, gas, historical fork, and protocol evolution."}</li>
                          <li>{isEs ? "Guía 5: Web 3.0 y DApps. Define el cambio de paradigma hacia servicios descentralizados y nuevas dinámicas de propiedad digital." : "Guide 5: Web 3.0 and DApps. Defines the paradigm shift to decentralized services and digital ownership."}</li>
                          <li>{isEs ? "Guía 6: NFTs. Analiza su base técnica, casos de uso y criterios que influyen en adopción y valuación." : "Guide 6: NFTs. Analyzes technical base, use cases, and valuation/adoption drivers."}</li>
                          <li>{isEs ? "Guía 7: Metaverso. Enmarca el concepto, sus plataformas principales y sus implicaciones tecnológicas y sociales." : "Guide 7: Metaverse. Frames the concept, major platforms, and technological/social implications."}</li>
                          <li>{isEs ? "Guía 8: Stablecoins y CBDCs. Compara modelos centralizados y descentralizados de dinero digital y su impacto regional." : "Guide 8: Stablecoins and CBDCs. Compares centralized and decentralized digital money models and regional impact."}</li>
                          <li>{isEs ? "Guía 9: Conceptos clave. Consolida un glosario operativo para unificar lenguaje técnico antes de la fase avanzada." : "Guide 9: Key concepts. Consolidates an operational glossary before the advanced phase."}</li>
                          <li>{isEs ? "Guía 10: Identidad digital en Web 3.0. Profundiza en DIDs, ZKP, SBTs y autenticación soberana en entornos descentralizados." : "Guide 10: Digital identity in Web 3.0. Covers DIDs, ZKP, SBTs, and self-sovereign authentication."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/level-2-guide-4-que-es-ethereum"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 2 DeFi: Ver docs" : "DeFi level 2: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>

                    <CollapsibleCard
                      title={isEs ? "Nivel 3: Estrategias DeFi avanzadas" : "Level 3: Advanced DeFi strategies"}
                      ariaLabel={isEs ? "Desplegar nivel 3 de DeFi" : "Toggle DeFi level 3"}
                    >
                      <div className="space-y-3">
                        <p>
                          {isEs
                            ? "Resumen del nivel: integra protocolos de mayor complejidad, gobernanza y diseño de estrategia para ejecución avanzada en DeFi."
                            : "Level summary: integrates higher-complexity protocols, governance, and strategy design for advanced DeFi execution."}
                        </p>
                        <p><strong>{isEs ? "Guías del nivel" : "Level guides"}</strong></p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>{isEs ? "Guía 11: Qué son las Criptomonedas 2. Recorre altcoins de nueva generación, interoperabilidad y criterios comparativos entre redes." : "Guide 11: What Cryptocurrencies 2 is. Covers next-gen altcoins, interoperability, and comparative network criteria."}</li>
                          <li>{isEs ? "Guía 12: Qué es una DAO. Expone modelos de gobernanza, votación on/off-chain y estructura organizacional descentralizada." : "Guide 12: What a DAO is. Covers governance models, on/off-chain voting, and decentralized organizational design."}</li>
                          <li>{isEs ? "Guía 13: Pools de liquidez y ejecución en DeFi. Introduce funcionamiento operativo, incentivos y riesgos de provisión de liquidez." : "Guide 13: Liquidity pools and DeFi execution. Introduces operating logic, incentives, and liquidity provision risks."}</li>
                          <li>{isEs ? "Guía 14: El papel de la Inteligencia Artificial en el entorno Cripto. Integra agentes, datos, wallets inteligentes y gestión de riesgo operativo." : "Guide 14: The role of Artificial Intelligence in the crypto ecosystem. Integrates agents, data, smart wallets, and operational risk management."}</li>
                          <li>{isEs ? "Guía 15: Mayores estafas en modo preventivo del entorno Cripto. Aterriza tipologías de fraude, señales de alerta y protocolo de respuesta." : "Guide 15: Major scams in preventive mode in the crypto ecosystem. Covers fraud typologies, red flags, and incident response protocol."}</li>
                          <li>{isEs ? "Guía 16: Principios de regulación de las Criptomonedas. Explica el marco comparado entre MiCA, GENIUS/CLARITY y estatus regulatorio en China, LATAM y México." : "Guide 16: Principles of Cryptocurrency Regulation. Explains the comparative framework across MiCA, GENIUS/CLARITY, and regulatory status in China, LATAM, and Mexico."}</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-1 gap-4 mt-6">
                        <Link
                          href="/web3/education/level-3-guide-11-criptomonedas-2"
                          className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                        >
                          {isEs ? "Nivel 3 DeFi: Ver docs" : "DeFi level 3: Open docs"} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </CollapsibleCard>
                  </div>
                </CollapsibleCard>
              </div>
            </div>

            <div id="criptec" className="space-y-8 scroll-mt-24">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">Criptec.io</h3>
              <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-900 dark:text-white">{isEs ? "Impulsando la adopción de Web3" : "Driving Web3 Adoption"}</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-700 dark:text-zinc-400 space-y-4 text-justify">
                  <p>
                    {isEs
                      ? <>En <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-300">Criptec.io</Link>, somos un colectivo de desarrolladores, diseñadores e investigadores apasionados por construir el futuro descentralizado. Nuestra misión es cerrar la brecha entre la complejidad blockchain y aplicaciones reales.</>
                      : <>At <Link href="https://criptec.io" target="_blank" className="underline hover:text-zinc-900 dark:hover:text-zinc-300">Criptec.io</Link>, we are a collective of developers, designers, and researchers passionate about building the decentralized future. Our mission is to bridge the gap between complex blockchain technology and real-world applications.</>}
                  </p>
                  <p>
                    {isEs
                      ? "Nos especializamos en consultoría blockchain, desarrollo de dApps y educación para impulsar la siguiente ola de usuarios y builders Web3. Como Creative Director, guío la visión de marca y aseguro que nuestras soluciones sean técnicamente sólidas, accesibles e impactantes."
                      : "We specialize in blockchain consulting, decentralized application (dApp) development, and creating educational resources to empower the next wave of Web3 users and builders. As Creative Director, I guide our brand's vision and ensure our solutions are not only technologically sound but also accessible and impactful."}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div id="strawberry" className="space-y-8 scroll-mt-24">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
                {isEs ? "Strawberry Wallet y Pruebas de Conocimiento Cero" : "Strawberry Wallet & Zero-Knowledge Proofs"}
              </h3>
              <CollapsibleCard
                title={isEs ? "Arquitectura y ventajas" : "Architecture and benefits"}
                ariaLabel={isEs ? "Desplegar Strawberry Wallet" : "Toggle Strawberry Wallet"}
              >
                <p>
                  {isEs
                    ? "Strawberry Wallet es un proyecto conceptual de cartera de criptomonedas segura y fácil de usar, diseñado con la privacidad como eje central. Una tecnología clave para lograrlo son las "
                    : "Strawberry Wallet is a conceptual project for a secure, user-friendly cryptocurrency wallet designed with privacy at its core. A key technology enabling this is "}
                  <strong>Zero-Knowledge Proofs (ZKPs)</strong>.
                </p>
                <p>
                  {isEs
                    ? "Las ZKPs son protocolos criptográficos que permiten demostrar conocimiento de cierta información sin revelar la información en sí. Esto tiene implicaciones profundas para la privacidad y seguridad en transacciones blockchain. Sus ventajas principales son:"
                    : "ZKPs are cryptographic protocols that allow one party to prove to another that they know a certain piece of information without revealing the information itself. This has profound implications for privacy and security in blockchain transactions. The main advantages of ZKPs are:"}
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>{isEs ? "Confidencialidad:" : "Confidentiality:"}</strong>{" "}
                    {isEs
                      ? "Las transacciones pueden validarse sin exponer detalles sensibles como montos o participantes."
                      : "Transactions can be validated without exposing sensitive details like amounts or participants."}
                  </li>
                  <li>
                    <strong>{isEs ? "Escalabilidad:" : "Scalability:"}</strong>{" "}
                    {isEs
                      ? "Las ZKPs pueden agrupar múltiples transacciones en una sola prueba, reduciendo datos en cadena y aumentando rendimiento."
                      : "ZKPs can bundle multiple transactions into a single proof, reducing the data stored on the blockchain and increasing throughput."}
                  </li>
                  <li>
                    <strong>{isEs ? "Seguridad:" : "Security:"}</strong>{" "}
                    {isEs
                      ? "Brindan verificación robusta sin centralizar ni exponer datos privados."
                      : "They provide robust verification without centralizing or exposing private data."}
                  </li>
                </ul>
              </CollapsibleCard>
            </div>
          </ScrollRevealStagger>
        </div>
      </div>
    </div>
  );
}
