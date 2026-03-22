import type { EducationGuide } from "@/lib/education-guides";
import type { AppLocale } from "@/i18n/routing";

type LocalizedMeta = {
  title: string;
  description: string;
};

const englishGuideMeta: Record<string, LocalizedMeta> = {
  "tradfi-level-1-guide-1-del-ahorro-a-la-inversion": {
    title: "Guide 1: From Saving to Investing",
    description: "Your first step toward financial freedom: saving, inflation, budgeting and compound interest.",
  },
  "tradfi-level-1-guide-2-renta-fija-mexico": {
    title: "Guide 2: Fixed-Income Investing in Mexico",
    description: "CETES, government bonds, SOFIPOs, protections, PPRs and basic tax treatment.",
  },
  "tradfi-level-1-guide-3-perfil-de-inversionista": {
    title: "Guide 3: Who Am I as an Investor?",
    description: "Risk profile, tolerance, asset allocation and a self-assessment questionnaire.",
  },
  "tradfi-level-2-guide-4-bolsa-e-indices": {
    title: "Guide 4: Stock Market and Indexes",
    description: "TradFi basics, primary/secondary market, major indexes and ETFs as entry point.",
  },
  "tradfi-level-2-guide-5-sp500-sectores": {
    title: "Guide 5: Inside the S&P 500",
    description: "Sector anatomy of the S&P 500: approximate weights, major companies, risk and sector ETFs.",
  },
  "tradfi-level-2-guide-6-invertir-desde-mexico": {
    title: "Guide 6: How to Invest in Stocks from Mexico",
    description: "Regulated brokers, available platforms, investor protections and practical onboarding steps.",
  },
  "tradfi-level-2-guide-7-trading-vs-inversion": {
    title: "Guide 7: Trading vs Investing",
    description: "Different mindsets, basic analysis tools and key market risks.",
  },
  "tradfi-level-3-guide-8-diversificacion-avanzada": {
    title: "Guide 8: Advanced Diversification",
    description: "Beyond stocks: commodities, gold and the role of crypto in aggressive portfolios.",
  },
  "tradfi-level-3-guide-9-precio-accion-dividendos": {
    title: "Guide 9: Stock Price and Dividends",
    description: "What moves stock prices, how dividends work and basic tax considerations in Mexico.",
  },
  "tradfi-level-3-guide-10-seguridad-patrimonio": {
    title: "Guide 10: Security and Wealth Management",
    description: "Fraud prevention, digital hygiene, 2FA and portfolio operations tracking.",
  },
  "level-1-guide-1-que-son-las-criptomonedas": {
    title: "Guide 1: What Are Cryptocurrencies?",
    description: "Introduction to money, banks, blockchain and foundational crypto concepts.",
  },
  "level-1-guide-2-wallets-criptomonedas": {
    title: "Guide 2: Crypto Wallets",
    description: "Wallet types, keys, custody models and practical security guidelines.",
  },
  "level-1-guide-3-bitcoin-blockchain-smart-contracts": {
    title: "Guide 3: Bitcoin, Blockchain and Smart Contracts",
    description: "BTC valuation, Lightning Network, SHA-256 and smart contract fundamentals.",
  },
  "level-2-guide-4-que-es-ethereum": {
    title: "Guide 4: What Is Ethereum?",
    description: "Ethereum platform, EVM, ETH, fees, native/non-native tokens and Ethereum 2.0.",
  },
  "level-2-guide-5-web3-y-dapps": {
    title: "Guide 5: What Is Web 3.0 and DApps?",
    description: "Web evolution, decentralized applications and practical access paths to Web3.",
  },
  "level-2-guide-6-nfts": {
    title: "Guide 6: What Are NFTs?",
    description: "NFT history, utility, valuation, marketplaces and security considerations.",
  },
  "level-2-guide-7-metaverso": {
    title: "Guide 7: What Is the Metaverse?",
    description: "Metaverse concepts, platforms, gaming, multiverse vision and social implications.",
  },
  "level-2-guide-8-stablecoins-cbdcs": {
    title: "Guide 8: Stablecoins and CBDCs",
    description: "Stablecoins, CBDCs, LATAM cases and core monetary design differences.",
  },
  "level-2-guide-9-identidad-digital-web3": {
    title: "Guide 9: Digital Identity in Web 3.0",
    description: "DIDs, trustless models, ZK proofs, SBTs and identity verification debates.",
  },
  "glossary-guide-10-defi-web3": {
    title: "Guide 10: DeFi & Web3 Glossary",
    description: "Key glossary for crypto, Web3, identity and market concepts.",
  },
  "level-3-guide-1-coming-soon": {
    title: "Guide 1: Advanced Level (Coming Soon)",
    description: "We are migrating this content into the site for direct reading.",
  },
};

const sectionTitleEn: Record<string, string> = {
  "Introducción": "Introduction",
  "Conceptos básicos": "Basic concepts",
  "Desarrollo": "Development",
  "Conclusión": "Conclusion",
  "Referencias": "References",
  "¿Qué es el dinero?": "What is money?",
  "Historia del dinero y los bancos": "History of money and banks",
  "Trilema de la escalabilidad": "Scalability trilemma",
  "Creación de las criptomonedas": "Cryptocurrency creation",
  "Asentamiento de registros": "Settlement of records",
  "Cómo funciona Blockchain": "How blockchain works",
  "Cadenas Blockchain": "Blockchain chains",
  "Wallets calientes y wallets frías": "Hot wallets and cold wallets",
  "Wallets calientes": "Hot wallets",
  "Wallets frías": "Cold wallets",
  "Wallets de un solo protocolo": "Single-protocol wallets",
  "Wallets de distintos protocolos": "Multi-protocol wallets",
  "Abreviación de Bitcoin": "Bitcoin abbreviation",
  "Cómo se determina el valor de BTC": "How BTC value is determined",
  "Qué es Lighting Network": "What Lightning Network is",
  "Qué es Blockchain": "What blockchain is",
  "Importancia del algoritmo SHA-256": "Importance of the SHA-256 algorithm",
  "Qué son los smart contracts": "What smart contracts are",
  "Proceso de los contratos inteligentes": "Smart contract process",
  "Que es Ethereum": "What Ethereum is",
  "Que es Ethereum Virtual Machine (EVM)": "What Ethereum Virtual Machine (EVM) is",
  "Qué es Ether (ETH)": "What Ether (ETH) is",
  "Qué son los gases o fees": "What gas fees are",
  "Bifurcación de Ethereum y Ethereum Classic": "Ethereum and Ethereum Classic fork",
  "Ethereum 2.0": "Ethereum 2.0",
  "Qué son los tokens nativos y los tokens no nativos": "Native and non-native tokens",
  "¿Cuál es la importancia de Ethereum?": "Why Ethereum matters",
  "¿Qué son las aplicaciones descentralizadas (DApps)?": "What decentralized applications (DApps) are",
  "¿Qué pretende la Web 3.0?": "What Web 3.0 aims to achieve",
  "Cómo acceder a los inicios del internet descentralizado": "How to access the early decentralized internet",
  "¿Qué son los NFTs? Desde sus remotos antecedentes": "What NFTs are: early origins",
  "Comparación con el arte": "Comparison with art",
  "¿Qué son los NFTs? Desde el punto de vista tecnológico": "What NFTs are: technology perspective",
  "Tecnicismo de los NFTs": "NFT technical details",
  "Utilidad": "Utility",
  "¿Qué determina sus precios? y ejemplos": "What determines NFT prices and examples",
  "Dónde comprarlos": "Where to buy them",
  "Otras cosas que también debes saber de los NFTs": "Other things you should know about NFTs",
  "¿Qué es el Metaverso?": "What the metaverse is",
  "Principales Metaversos": "Main metaverse platforms",
  "Metaversos": "Metaverses",
  "Multiverso en el Metaverso": "Multiverse in the metaverse",
  "Metaverso desde un punto de vista filosófico": "Metaverse from a philosophical view",
  "Distintos tipos de criptomonedas": "Different types of cryptocurrencies",
  "Ejemplos de proyectos de Stablecoins": "Examples of stablecoin projects",
  "Principales ejemplos de CBDCs": "Main CBDC examples",
  "Principales ejemplos de stablecoins": "Main stablecoin examples",
  "Situación de Latinoamérica con respecto a las CBDCs y Stablecoins": "LATAM context for CBDCs and stablecoins",
  "La desintermediación financiera": "Financial disintermediation",
  "Decentralized Identifications (DIDs)": "Decentralized Identifiers (DIDs)",
  "¿Qué es la tecnología trustless?": "What trustless technology is",
  "Zero knowledge proof (ZKP)": "Zero-knowledge proof (ZKP)",
  "¿Qué son los soulbound tokens (SBTs)?": "What soulbound tokens (SBTs) are",
  "Diferencias entre los SBTs y los DIDs": "Differences between SBTs and DIDs",
  "Cómo las compañías de tech se tendrán que adaptar a esto.": "How tech companies will need to adapt",
  "Relación del entorno Crypto y la IA": "Relationship between crypto and AI",
  "Términos fundamentales": "Fundamental terms",
  "Términos de Ethereum y Web3": "Ethereum and Web3 terms",
  "Términos de identidad y seguridad": "Identity and security terms",
  "Términos financieros y de mercado": "Financial and market terms",
  "Migración En Progreso": "Migration in progress",
  "Conceptualización: ahorrar vs invertir": "Conceptualization: saving vs investing",
  "El enemigo silencioso: inflación": "The silent enemy: inflation",
  "Reglas para el manejo del dinero": "Rules for managing money",
  "La importancia de empezar a invertir": "Why starting to invest matters",
  "CETES y bonos gubernamentales": "CETES and government bonds",
  "SOFIPOs: qué son y cómo operan": "SOFIPOs: what they are and how they work",
  "Seguros y protecciones: PROSOFIPO, IPAB y UMA": "Protection schemes: PROSOFIPO, IPAB and UMA",
  "Planeando el futuro: PPRs": "Planning ahead: PPRs",
  "Disclaimer LATAM": "LATAM disclaimer",
  "Perfiles de inversión": "Investment profiles",
  "Factores clave para definir tu perfil": "Key factors to define your profile",
  "Asignación de activos (Asset Allocation)": "Asset allocation",
  "Cuestionario de autoevaluación": "Self-assessment questionnaire",
  "Índices bursátiles: el pulso de la economía": "Stock indexes: the pulse of the economy",
  "ETFs: la forma más sencilla de empezar": "ETFs: the easiest way to start",
  "Anatomía del S&P 500": "Anatomy of the S&P 500",
  "Análisis sectorial": "Sector analysis",
  "Lectura práctica para el inversionista": "Practical reading for investors",
  "Brokers regulados y seguridad": "Regulated brokers and safety",
  "Opciones populares en México": "Popular options in Mexico",
  "Guía rápida de apertura y primera compra": "Quick guide: account opening and first buy",
  "Horarios de mercado y SIC": "Market hours and SIC",
  "Diferencias fundamentales": "Core differences",
  "Conceptos básicos de trading": "Basic trading concepts",
  "Herramientas gratuitas": "Free tools",
  "Riesgos y psicología del inversionista": "Risks and investor psychology",
  "Portafolio y diversificación": "Portfolio and diversification",
  "Commodities (materias primas)": "Commodities",
  "El oro como activo refugio": "Gold as a safe-haven asset",
  "Criptomonedas en un portafolio tradicional": "Crypto in a traditional portfolio",
  "¿Qué mueve el precio de una acción?": "What moves a stock price?",
  "¿Qué son los dividendos?": "What are dividends?",
  "Impuestos sobre inversión en bolsa": "Taxes on stock investing",
  "Fraudes y estafas": "Fraud and scams",
  "Higiene digital y contraseñas": "Digital hygiene and passwords",
  "Autenticación de dos factores (2FA)": "Two-factor authentication (2FA)",
  "Control y seguimiento del portafolio": "Portfolio tracking and control"
};

export function localizeGuideMeta(guide: EducationGuide, locale: AppLocale): LocalizedMeta {
  if (locale === "es") {
    return { title: guide.title, description: guide.description };
  }

  return englishGuideMeta[guide.slug] ?? { title: guide.title, description: guide.description };
}

export function localizeSectionTitle(title: string, locale: AppLocale): string {
  if (locale === "es") {
    return title;
  }

  return sectionTitleEn[title] ?? title;
}
