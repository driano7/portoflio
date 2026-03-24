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
    title: "Guide 9: Key Concepts",
    description: "Glossary-style recap of core concepts covered in the previous guides.",
  },
  "level-2-guide-10-identidad-digital-web3": {
    title: "Guide 10: Digital Identity in Web 3.0",
    description: "DIDs, trustless models, ZK proofs, SBTs and identity verification debates.",
  },
  "level-3-guide-11-criptomonedas-2": {
    title: "Guide 11: Cryptocurrencies 2",
    description: "Third-generation altcoins, interoperability, and technical network comparisons.",
  },
  "level-3-guide-12-que-es-una-dao": {
    title: "Guide 12: What Is a DAO",
    description: "Blockchain governance models, voting mechanics, and decentralized organizational structures.",
  },
  "level-3-guide-13-pools-liquidez-defi": {
    title: "Guide 13: Liquidity Pools and DeFi Execution",
    description:
      "How liquidity pools, yield farming, and liquidity mining work, including key operational and market risks.",
  },
  "level-3-guide-14-papel-ia-entorno-cripto": {
    title: "Guide 14: The Role of Artificial Intelligence in the Crypto Ecosystem",
    description:
      "AI + crypto convergence: agents, data, smart wallets, operational risks, and practical LATAM use cases.",
  },
  "level-3-guide-15-estafas-cripto-modo-preventivo": {
    title: "Guide 15: Major Scams in Preventive Mode in the Crypto Ecosystem",
    description:
      "Preventive anti-scam framework: fraud typologies, red flags, operational controls, and incident response.",
  },
  "level-3-guide-16-principios-regulacion-criptomonedas": {
    title: "Guide 16: Principles of Cryptocurrency Regulation",
    description:
      "Comparative regulatory framework: MiCA in Europe, GENIUS and CLARITY in the U.S., China stance, and LATAM with a Mexico focus.",
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
  "Altcoins": "Altcoins",
  "Polkadot": "Polkadot",
  "Cardano": "Cardano",
  "Algorand": "Algorand",
  "Solana": "Solana",
  "Ripple": "Ripple",
  "Polygon": "Polygon",
  "Binance Chain": "Binance Chain",
  "Avalanche": "Avalanche",
  "Agradecimientos": "Acknowledgements",
  "Votos y tokens": "Votes and tokens",
  "¿Qué es la Gobernanza?": "What is governance?",
  "Gobernanza en proyectos robustos": "Governance in robust projects",
  "Política en la Blockchain": "Politics in blockchain",
  "Forks": "Forks",
  "Gobernanza on-chain y off-chain": "On-chain and off-chain governance",
  "Ejemplos de gobernanza": "Governance examples",
  "¿Qué son las pools de liquidez?": "What are liquidity pools?",
  "Yield farming, staking y liquidity mining": "Yield farming, staking, and liquidity mining",
  "Protocolos relevantes": "Relevant protocols",
  "Riesgos operativos y de mercado": "Operational and market risks",
  "¿Por qué converge la IA con cripto?": "Why AI and crypto converge",
  "Infraestructura descentralizada para IA": "Decentralized infrastructure for AI",
  "Agentes autónomos on-chain y off-chain": "Autonomous on-chain and off-chain agents",
  "El rol de los datos: oráculos, calidad y trazabilidad": "The role of data: oracles, quality, and traceability",
  "Wallets inteligentes y automatización (Account Abstraction)": "Smart wallets and automation (Account Abstraction)",
  "Riesgos reales del cruce IA + cripto": "Real risks in AI + crypto convergence",
  "Aplicaciones prácticas para LATAM": "Practical applications for LATAM",
  "Estafas de inversión y plataformas falsas": "Investment scams and fake platforms",
  "Phishing, drainer y robo de llaves": "Phishing, drainers, and key theft",
  "Rug pulls, honeypots y contratos maliciosos": "Rug pulls, honeypots, and malicious contracts",
  "Suplantación, soporte falso y recuperación fraudulenta": "Impersonation, fake support, and fraudulent recovery",
  "Estafas P2P y OTC": "P2P and OTC scams",
  "Checklist preventivo antes de mover fondos": "Preventive checklist before moving funds",
  "Qué hacer si ya fuiste víctima": "What to do if you were already a victim",
  "Principios de regulación en cripto": "Principles of crypto regulation",
  "MiCA en Europa: alcance y estatus": "MiCA in Europe: scope and status",
  "Estados Unidos: Ley GENIUS y Ley CLARITY": "United States: GENIUS Act and CLARITY Act",
  "China continental y Hong Kong: dos vías regulatorias": "Mainland China and Hong Kong: two regulatory paths",
  "Latinoamérica: panorama regulatorio comparado": "Latin America: comparative regulatory landscape",
  "México: estatus actual": "Mexico: current status",
  "Checklist regulatorio para proyectos y usuarios": "Regulatory checklist for projects and users",
  "Notas al pie": "Footnotes",
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
