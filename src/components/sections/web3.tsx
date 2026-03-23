"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
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
                  {isEs ? "Inversiones" : "Investments"}
                </h3>

                <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-900 dark:text-white">
                      {isEs ? "Ruta de formación financiera autónoma para prepararte para cripto" : "Autonomous financial training path to prepare for crypto"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-700 dark:text-zinc-400 space-y-4 text-justify">
                    <p>
                      {isEs
                        ? "Este contenido está diseñado para que cualquier persona fortalezca sus bases en finanzas personales, finanzas básicas e intermedias antes de profundizar en los tópicos de cripto."
                        : "This content is designed so anyone can strengthen personal finance, basic finance, and intermediate finance foundations before going deeper into crypto topics."}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        {isEs
                          ? "Conectar principios económicos (ahorro, inflación, riesgo y asignación de capital) con decisiones cotidianas de dinero."
                          : "Connect economic principles (saving, inflation, risk, and capital allocation) with everyday money decisions."}
                      </li>
                      <li>
                        {isEs
                          ? "Entender conceptos tecnológicos y operativos de CeFi y DeFi desde una perspectiva económica, técnica y práctica."
                          : "Understand CeFi and DeFi technological and operational concepts from an economic, technical, and practical perspective."}
                      </li>
                      <li>
                        {isEs
                          ? "Aplicar una gestión financiera personal simple: presupuesto, control de gastos, priorización de metas y administración de riesgo."
                          : "Apply simple personal finance management: budgeting, expense control, goal prioritization, and risk management."}
                      </li>
                    </ul>
                    <p>
                      {isEs
                        ? "No se ofrece asesoría de inversión ni preparación para certificaciones. Es una ruta educativa para gestionar el dinero de forma clara, práctica y sencilla, atendiendo una necesidad histórica en nuestra realidad latinoamericana."
                        : "This is not investment advice and it is not designed to prepare users for certifications. It is an educational path to manage money in a clear, practical, and simple way, addressing a longstanding need in the Latin American context."}
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
                  </CardContent>
                </Card>

                <CollapsibleCard
                  title={isEs ? "Nivel 1: Fundamentos Financieros" : "Level 1: Financial Fundamentals"}
                  ariaLabel={isEs ? "Desplegar nivel 1" : "Toggle level 1"}
                  animateButton
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 1: Del ahorro a la inversión" : "Guide 1: From Saving to Investing"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Ahorrar no es lo mismo que invertir: ahorrar resguarda valor, invertir busca hacerlo crecer." : "Saving is not the same as investing: saving stores value, investing grows it."}</li>
                        <li>{isEs ? "La inflación reduce el poder adquisitivo de tu dinero con el tiempo." : "Inflation decreases your money&apos;s purchasing power over time."}</li>
                        <li>{isEs ? "Métodos de presupuesto: 50/30/20, 50/30/10/10 y otras variantes según perfil personal." : "Budgeting methods: 50/30/20, 50/30/10/10, and other variations based on personality type."}</li>
                        <li>{isEs ? "Interés compuesto: el tiempo es tu mejor aliado al invertir." : "Compound interest: time is your best ally when investing."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 2: Inversiones de renta fija en México" : "Guide 2: Fixed Income Investments in Mexico"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "CETES y bonos: funcionamiento, tipos (Bonddia, Bonos, Udibonos) y acceso por Cetesdirecto." : "CETES and bonds: how they work, instrument types (Bonddia, Bonds, Udibonos), and Cetesdirecto access."}</li>
                        <li>{isEs ? "SOFIPOs: qué son y opciones conocidas como Nu, Klar y Finsus." : "SOFIPOs: what they are and common options such as Nu, Klar, and Finsus."}</li>
                        <li>{isEs ? "Protecciones: PROSOFIPO (SOFIPOs), IPAB (bancos) y UMA como unidad de referencia." : "Investor protections: PROSOFIPO (for SOFIPOs), IPAB (for banks), and UMA as the coverage reference unit."}</li>
                        <li>{isEs ? "Planes de retiro (PPR): ventajas fiscales y valor de largo plazo." : "Retirement plans (PPRs): tax advantages and long-term value."}</li>
                        <li>{isEs ? "Impuestos: visión general del ISR sobre rendimientos." : "Taxes: general overview of income tax on investment returns."}</li>
                        <li>{isEs ? "Disclaimer LATAM: existen instrumentos equivalentes en otros países." : "LATAM disclaimer: equivalent instruments exist in other countries."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 3: Perfiles de inversionista" : "Guide 3: Investor Profiles"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Perfiles: conservador, moderado y agresivo." : "Profiles: conservative, moderate, and aggressive."}</li>
                        <li>{isEs ? "Factores clave: edad, ingreso, estabilidad laboral, horizonte y deuda." : "Key factors: age, income, job stability, investment horizon, and debt."}</li>
                        <li>{isEs ? "Ejemplos de asignación: conservador 80/20, moderado 50/50, agresivo 20/80 (renta fija/renta variable)." : "Asset allocation examples: conservative 80/20, moderate 50/50, aggressive 20/80 (fixed income/equities)."}</li>
                        <li>{isEs ? "Autoevaluación para identificar tu perfil de riesgo." : "Self-assessment quiz: helps identify your risk profile."}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <Link
                      href="/web3/education/tradfi-level-1-guide-1-del-ahorro-a-la-inversion"
                      className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {isEs ? "Nivel 1: Docs Fundamentos" : "Level 1: Fundamentals Docs"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title={isEs ? "Nivel 2: Introducción al mercado de valores" : "Level 2: Introduction to the Stock Market"}
                  ariaLabel={isEs ? "Desplegar nivel 2" : "Toggle level 2"}
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 4: Bolsa e índices" : "Guide 4: Stock Markets and Indices"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "TradFi vs. Crypto: finanzas tradicionales comparadas con DeFi." : "TradFi vs. Crypto: traditional finance concepts compared to DeFi."}</li>
                        <li>{isEs ? "Mercado primario vs secundario: cómo se emiten y negocian valores." : "Primary vs. secondary market: how securities are issued and traded."}</li>
                        <li>{isEs ? "Índices clave: S&P 500, NASDAQ, Dow Jones, Russell 2000, S&P/BMV IPC, Euro Stoxx 50 y Nikkei 225." : "Key indices: S&amp;P 500, NASDAQ, Dow Jones, Russell 2000, S&amp;P/BMV IPC, Euro Stoxx 50, and Nikkei 225."}</li>
                        <li>{isEs ? "ETFs (VOO, VTI, SPY, QQQ) como vía práctica para exposición a índices." : "ETFs (VOO, VTI, SPY, QQQ) as a practical path to index exposure."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 5: El S&P 500 por dentro" : "Guide 5: The S&amp;P 500 Inside Out"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "11 sectores: tecnología, salud, financiero, consumo discrecional, entre otros." : "11 sectors: including technology, healthcare, financials, and consumer discretionary."}</li>
                        <li>{isEs ? "Desglose sectorial: peso, empresas representativas, volatilidad y ETF sectorial (ej. XLK para tecnología)." : "Sector breakdown: weight, representative companies, volatility profile, and related ETF ticker (for example, XLK for tech)."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 6: Invertir en bolsa desde México" : "Guide 6: Investing in Stocks from Mexico"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Brokers regulados y por qué importa la supervisión de CNBV." : "Regulated brokers and why CNBV supervision matters."}</li>
                        <li>{isEs ? "Opciones populares: GBM+, Bursanet y Flink con sus tradeoffs." : "Popular options: GBM+, Bursanet, and Flink with their tradeoffs."}</li>
                        <li>{isEs ? "Mecanismos de protección para inversionistas en casas de bolsa." : "Investor protection frameworks for brokerage firms."}</li>
                        <li>{isEs ? "Pasos prácticos: abrir cuenta, fondear y comprar tu primer ETF o acción." : "Practical steps: open account, fund it, buy your first ETF or stock."}</li>
                        <li>{isEs ? "Horarios de mercado: BMV (México) y mercado de EE.UU. vía SIC." : "Market hours: BMV (Mexico) and U.S. trading through SIC."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 7: Trading vs inversión" : "Guide 7: Trading vs. Investing"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Diferencias clave: mentalidad, horizonte y exposición al riesgo." : "Core differences: mindset, time horizon, and risk exposure."}</li>
                        <li>{isEs ? "Bases de trading: velas japonesas, soporte y resistencia (nivel intro)." : "Trading basics: Japanese candlesticks, support, and resistance (intro level)."}</li>
                        <li>{isEs ? "Herramientas gratuitas: Yahoo Finance, Google Finance y TradingView." : "Free tools: Yahoo Finance, Google Finance, and TradingView."}</li>
                        <li>{isEs ? "Riesgos de mercado: volatilidad, imprevisibilidad y psicología del inversionista." : "Market risks: volatility, unpredictability, and investor psychology."}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <Link
                      href="/web3/education/tradfi-level-2-guide-4-bolsa-e-indices"
                      className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {isEs ? "Nivel 2: Docs Intermedio" : "Level 2: Intermediate Docs"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title={isEs ? "Nivel 3: Estrategias y gestión de portafolio" : "Level 3: Strategies and Portfolio Management"}
                  ariaLabel={isEs ? "Desplegar nivel 3" : "Toggle level 3"}
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 8: Diversificación avanzada" : "Guide 8: Advanced Diversification"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Principio de portafolio: no poner todos los huevos en la misma canasta." : "Portfolio principle: do not put all your eggs in one basket."}</li>
                        <li>{isEs ? "Commodities: exposición a energía, metales y agrícolas, usualmente vía ETFs." : "Commodities: energy, metals, and agriculture exposure, commonly through ETFs."}</li>
                        <li>{isEs ? "Oro como activo de resguardo histórico en periodos de crisis." : "Gold as a historical store of value during economic downturns."}</li>
                        <li>{isEs ? "Criptomonedas: Bitcoin y Ethereum como activos de alto riesgo/alta recompensa." : "Cryptocurrencies: Bitcoin and Ethereum as high-risk/high-reward assets."}</li>
                        <li>{isEs ? "Asignación sugerida: 1% a 5% en portafolios agresivos." : "Suggested allocation: 1 to 5 percent in aggressive portfolios."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 9: Precio de acciones y dividendos" : "Guide 9: Stock Prices and Dividends"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Factores de precio: reportes de utilidades, market cap, noticias, innovación, reputación y macroeconomía." : "Price drivers: earnings reports, market cap, news, innovation, reputation, and macro factors."}</li>
                        <li>{isEs ? "Dividendos: distribución de utilidades a accionistas." : "Dividends: distributions of company profits to shareholders."}</li>
                        <li>{isEs ? "Impuestos en México: referencia general de 10% sobre ganancias de capital y dividendos." : "Taxes in Mexico: general reference of 10 percent on capital gains and dividends."}</li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <p><strong>{isEs ? "Guía 10: Seguridad y gestión patrimonial" : "Guide 10: Security and Wealth Management"}</strong></p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>{isEs ? "Fraudes y estafas: identificar esquemas Ponzi, pirámides y promesas falsas; reportar en CONDUSEF." : "Frauds and scams: identify Ponzi schemes, pyramid schemes, and fake guarantees; report to CONDUSEF."}</li>
                        <li>{isEs ? "Higiene digital: usa contraseñas fuertes y únicas." : "Digital hygiene: use strong and unique passwords."}</li>
                        <li>{isEs ? "Autenticación de dos factores (2FA): apps autenticadoras o SMS para proteger cuentas." : "Two-factor authentication (2FA): use authenticator apps or SMS to protect accounts."}</li>
                        <li>{isEs ? "Control de portafolio: seguimiento con hoja de cálculo (ticker, cantidad, precio promedio, valor actual, ganancia/pérdida y peso)." : "Portfolio control: track positions with a spreadsheet (ticker, quantity, average price, current value, gain/loss percentage, and portfolio weight)."}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mt-6">
                    <Link
                      href="/web3/education/tradfi-level-3-guide-8-diversificacion-avanzada"
                      className="btn-frosted flex items-center justify-center gap-2 w-full text-center px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {isEs ? "Nivel 3: Docs Avanzado" : "Level 3: Advanced Docs"} <ArrowRight className="w-4 h-4" />
                    </Link>
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

            <div id="education" className="space-y-8 scroll-mt-24">
              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl text-center">
                {isEs ? "Iniciativas educativas" : "Educational Initiatives"}
              </h3>
              <Card className="bg-white/90 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-900 dark:text-white">
                    {isEs ? "Empoderando a la comunidad hispanohablante" : "Empowering the Spanish-Speaking Community"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-700 dark:text-zinc-400 space-y-4 text-justify">
                  <p>
                    {isEs
                      ? "Estoy enfocado en hacer accesibles temas complejos de blockchain, cripto, Web3 y privacidad para la comunidad hispanohablante. La ruta educativa está organizada en tres niveles:"
                      : "I am dedicated to making complex topics in blockchain, crypto, Web3, and privacy accessible to Spanish speakers. The educational roadmap is organized in three levels:"}
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>{isEs ? "Nivel 1: Fundamentos" : "Level 1: Fundamentals"}</li>
                    <li>{isEs ? "Nivel 2: Intermedio" : "Level 2: Intermediate"}</li>
                    <li>{isEs ? "Nivel 3: Avanzado (inglés)" : "Level 3: Advanced (English)"}</li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/web3/education"
                      className="btn-frosted inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-semibold"
                    >
                      {isEs ? "Acceso a los docs" : "Docs access"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
