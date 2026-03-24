export type EducationGuide = {
  slug: string;
  level: 1 | 2 | 3;
  track?: "tradfi" | "defi";
  isGlossary?: boolean;
  title: string;
  description: string;
  docId?: string;
  sourceUrl?: string;
  fallbackSections?: Array<{
    title: string;
    imageUrl?: string;
    paragraphs: string[];
    bullets?: string[];
    references?: Array<{
      label: string;
      url: string;
    }>;
  }>;
};

export const educationGuides: EducationGuide[] = [
  {
    slug: "tradfi-level-1-guide-1-del-ahorro-a-la-inversion",
    track: "tradfi",
    level: 1,
    title: "Guía 1: Del Ahorro a la Inversión",
    description: "Tu primer paso hacia la libertad financiera: ahorro, inflación, presupuestos e interés compuesto.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/93c5fd?text=Guia+1+TradFi+Introduccion",
        paragraphs: [
          "La mayoría de personas quiere mejorar su dinero, pero no siempre sabe por dónde empezar. Esta guía arranca desde cero, con una lógica simple: primero entendemos el flujo de dinero, después tomamos decisiones más inteligentes.",
          "Aquí no se trata de promesas mágicas ni de fórmulas de internet. Se trata de construir criterio financiero con pasos prácticos y sostenibles.",
          "Como te he comentado en otras guías del programa, el objetivo siempre es el mismo: aprender a tomar decisiones informadas según tu realidad personal (no según la moda del momento).",
        ],
      },
      {
        title: "Conceptualización: ahorrar vs invertir",
        imageUrl: "https://placehold.co/1200x630/1e293b/c4b5fd?text=Ahorrar+vs+Invertir",
        paragraphs: [
          "Ahorrar es separar una parte de tu ingreso para conservar poder de compra en el corto plazo. Invertir es poner ese dinero a trabajar en instrumentos que buscan generar rendimiento con el tiempo.",
          "En términos sencillos, ahorrar te ayuda a protegerte; invertir te ayuda a crecer.",
          "Nota al pie: ambas acciones no compiten entre sí. El ahorro forma tu colchón de seguridad; la inversión construye tu patrimonio de mediano y largo plazo.",
        ],
        bullets: [
          "Ahorro: liquidez alta, riesgo bajo, rendimiento bajo.",
          "Inversión: liquidez variable, riesgo variable, rendimiento potencial mayor.",
          "Estrategia recomendada: primero fondo de emergencia, luego inversión periódica.",
        ],
      },
      {
        title: "El enemigo silencioso: inflación",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Inflacion+y+Poder+Adquisitivo",
        paragraphs: [
          "La inflación es el aumento generalizado de precios. No significa que tú ganes menos; significa que tu dinero compra menos con el paso del tiempo.",
          "Ejemplo rápido: si hoy compras una canasta de productos con 1,000 pesos, el próximo año podrías necesitar 1,060 o 1,080 para la misma canasta, dependiendo de la inflación anual.",
          "Por eso dejar todo el dinero inmóvil durante muchos años suele ser una pérdida silenciosa de poder adquisitivo.",
          "Nota al pie: este punto conecta directamente con la lógica de las stablecoins y activos de resguardo que vimos en el programa cripto, solo que aquí lo abordamos desde finanzas tradicionales.",
        ],
      },
      {
        title: "Reglas para el manejo del dinero",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Metodos+de+Presupuesto",
        paragraphs: [
          "No existe un presupuesto perfecto para todos. El mejor método es el que puedes mantener sin abandonar al mes dos.",
          "Te comparto cinco modelos funcionales y para qué perfil suelen servir mejor.",
        ],
        bullets: [
          "50/30/20: 50% necesidades, 30% estilo de vida, 20% ahorro/inversión. Ideal para quien busca equilibrio.",
          "50/30/10/10: agrega una línea para objetivos concretos y otra para protección financiera. Útil para quien quiere orden estricto.",
          "60/20/20: prioriza estabilidad y acumulación. Funciona bien para perfiles conservadores.",
          "70/20/10: más flexible en consumo, útil para ingresos variables mientras mantengas disciplina.",
          "Presupuesto base cero: cada peso tiene destino antes de gastarse. Excelente para corregir fugas financieras.",
        ],
      },
      {
        title: "La importancia de empezar a invertir",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Interes+Compuesto",
        paragraphs: [
          "El interés compuesto es el rendimiento sobre el rendimiento. Es decir, no solo crece tu capital inicial, también crecen las ganancias acumuladas.",
          "Lo poderoso no es adivinar el mejor activo del año; lo poderoso es sostener constancia durante años.",
          "Dos personas pueden invertir montos similares, pero quien empieza antes tiene ventaja estructural por tiempo en mercado.",
          "Nota al pie: el tiempo reduce el impacto de la volatilidad de corto plazo, siempre que el portafolio esté bien construido y diversificado.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Conclusion+Guia+1+TradFi",
        paragraphs: [
          "Esta primera guía es la base de todo el bloque de finanzas tradicionales: diferenciar ahorro de inversión, entender inflación y crear un sistema de presupuesto sostenible.",
          "Sin estas bases, cualquier estrategia avanzada de bolsa termina siendo frágil. Con estas bases, incluso una estrategia sencilla puede ser muy efectiva.",
          "La meta no es volverte trader en una semana; la meta es construir libertad financiera con método, paciencia y criterio.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+1",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Instituto Nacional de Estadística y Geografía (INEGI). (2026). Índice Nacional de Precios al Consumidor (INPC). Recuperado el 23 de marzo de 2026, de: https://www.inegi.org.mx/temas/inpc/",
            url: "https://www.inegi.org.mx/temas/inpc/",
          },
          {
            label: "[2] Banco de México. (2026). Sistema de Información Económica (SIE). Recuperado el 23 de marzo de 2026, de: https://www.banxico.org.mx/SieInternet/",
            url: "https://www.banxico.org.mx/SieInternet/",
          },
          {
            label: "[3] Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Educación financiera. Recuperado el 23 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "[4] Malkiel, B. G. (2019). A Random Walk Down Wall Street (12th ed.). W. W. Norton & Company.",
            url: "https://wwnorton.com/books/9780393358384",
          },
          {
            label: "[5] Bogle, J. C. (2017). The Little Book of Common Sense Investing (Updated ed.). Wiley.",
            url: "https://www.wiley.com/en-us/The+Little+Book+of+Common+Sense+Investing%2C+Updated+and+Revised-p-9781119404507",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-1-guide-2-renta-fija-mexico",
    track: "tradfi",
    level: 1,
    title: "Guía 2: Inversiones de Renta Fija en México",
    description: "CETES, bonos, SOFIPOs, seguros de depósito, PPR e impuestos básicos.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/a5b4fc?text=Guia+2+TradFi+Introduccion",
        paragraphs: [
          "La renta fija suele ser la columna vertebral del portafolio inicial, sobre todo cuando estás construyendo estabilidad y aún no quieres exposición alta a volatilidad.",
          "En esta guía aterrizamos instrumentos reales y vigentes para México, con un enfoque práctico: entender, comparar y ejecutar correctamente.",
        ],
      },
      {
        title: "CETES y bonos gubernamentales",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=CETES+y+Bonos",
        paragraphs: [
          "Los CETES son instrumentos de deuda del Gobierno Federal a corto plazo. Se compran con descuento y al vencimiento recibes su valor nominal.",
          "Además de CETES, existen instrumentos como BONDDIA, BONOS y UDIBONOS, con plazos, cupones y sensibilidad a inflación distintos.",
          "Cetesdirecto permite invertir sin intermediarios tradicionales para instrumentos gubernamentales.",
        ],
        bullets: [
          "Paso 1: abrir cuenta en Cetesdirecto con datos personales y CLABE.",
          "Paso 2: fondear vía SPEI desde tu banco.",
          "Paso 3: elegir instrumento, plazo y monto.",
          "Paso 4: confirmar compra y dar seguimiento al vencimiento o reinversión.",
        ],
      },
      {
        title: "SOFIPOs: qué son y cómo operan",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=SOFIPOs",
        paragraphs: [
          "Las SOFIPOs son entidades financieras populares reguladas, enfocadas en captación y crédito para segmentos específicos.",
          "Pueden ofrecer tasas competitivas, pero exigen evaluar solidez, regulación y límites de protección antes de concentrar capital.",
          "Entre las opciones conocidas por usuarios mexicanos están Nu, Klar y Finsus (siempre revisando condiciones vigentes y regulación aplicable).",
        ],
      },
      {
        title: "Seguros y protecciones: PROSOFIPO, IPAB y UMA",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Protecciones+Financieras",
        paragraphs: [
          "PROSOFIPO protege depósitos en SOFIPOs bajo un límite expresado en UDIS. El monto de referencia histórico es hasta 25,000 UDIS, sujeto a actualización regulatoria.",
          "IPAB protege depósitos bancarios con límite de cobertura expresado en UDIS (referencia común: hasta 400,000 UDIS por persona, por institución).",
          "La UMA es una unidad de medida oficial usada en distintos cálculos regulatorios y de cobertura; no debe confundirse con salario.",
          "Nota al pie: protección no significa riesgo cero. Siempre revisa concentración por institución y salud financiera del emisor.",
        ],
      },
      {
        title: "Planeando el futuro: PPRs",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=PPRs",
        paragraphs: [
          "Un Plan Personal de Retiro (PPR) es una herramienta de largo plazo que combina disciplina de aportaciones con incentivos fiscales.",
          "Su ventaja principal es estratégica: te obliga a pensar en horizonte de décadas, no de meses.",
          "Para elegir un PPR conviene revisar comisiones, política de inversión, liquidez, penalizaciones por retiro anticipado y tratamiento fiscal.",
        ],
      },
      {
        title: "Impuestos",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Impuestos+Renta+Fija",
        paragraphs: [
          "En renta fija existe retención de ISR sobre rendimientos, con reglas que cambian según instrumento y disposiciones vigentes.",
          "La regla práctica es mantener registro de operaciones y consultar año con año tablas y criterios publicados por SAT y SHCP.",
          "Nota al pie: el objetivo no es volverte fiscalista, sino invertir con orden documental para evitar sorpresas.",
        ],
      },
      {
        title: "Disclaimer LATAM",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Disclaimer+LATAM",
        paragraphs: [
          "Esta guía está enfocada en México. En otros países de LATAM existen equivalentes: deuda soberana local, cuentas remuneradas, fondos de money market y esquemas de seguro de depósitos.",
          "La lógica de análisis se mantiene: regulación, emisor, riesgo de crédito, liquidez, costo fiscal y horizonte de inversión.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Conclusion+Guia+2+TradFi",
        paragraphs: [
          "La renta fija no es aburrida; es estratégica. Es la base que da estabilidad al portafolio mientras aprendes a gestionar riesgos más complejos.",
          "Entender CETES, bonos, SOFIPOs y protecciones como IPAB/PROSOFIPO te permite tomar decisiones con mucha más tranquilidad.",
          "En la siguiente guía definiremos cómo usar esta base según tu perfil de riesgo personal.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+2",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Cetesdirecto. (2026). Sitio oficial y operación de instrumentos gubernamentales. Recuperado el 23 de marzo de 2026, de: https://www.cetesdirecto.com/sites/portal/inicio",
            url: "https://www.cetesdirecto.com/sites/portal/inicio",
          },
          {
            label: "[2] Instituto para la Protección al Ahorro Bancario (IPAB). (2026). Seguro de depósitos bancarios. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/ipab",
            url: "https://www.gob.mx/ipab",
          },
          {
            label: "[3] Comisión Nacional Bancaria y de Valores (CNBV). (2026). Entidades supervisadas y marco regulatorio. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "[4] Servicio de Administración Tributaria (SAT). (2026). Régimen fiscal e ISR para personas físicas. Recuperado el 23 de marzo de 2026, de: https://www.sat.gob.mx/",
            url: "https://www.sat.gob.mx/",
          },
          {
            label: "[5] Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Educación financiera y alertas al usuario. Recuperado el 23 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-1-guide-3-perfil-de-inversionista",
    track: "tradfi",
    level: 1,
    title: "Guía 3: ¿Quién soy como inversionista?",
    description: "Perfil, tolerancia al riesgo, asignación de activos y cuestionario de autoevaluación.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fca5a5?text=Guia+3+Perfil+Inversionista",
        paragraphs: [
          "Antes de elegir activos, hay que elegir estrategia. Y antes de elegir estrategia, hay que conocerte como inversionista.",
          "La misma cartera puede ser excelente para una persona y pésima para otra. Por eso el perfil de riesgo no es un trámite: es el corazón del plan financiero.",
        ],
      },
      {
        title: "Perfiles de inversión",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Perfiles+de+Inversion",
        paragraphs: [
          "Perfil conservador: prioriza estabilidad, liquidez y preservación de capital.",
          "Perfil moderado: busca equilibrio entre crecimiento y control de volatilidad.",
          "Perfil agresivo: acepta mayor variación de corto plazo a cambio de mayor potencial de largo plazo.",
          "Nota al pie: agresivo no significa apostar sin método; significa asumir riesgo con una tesis clara y diversificación real.",
        ],
      },
      {
        title: "Factores clave para definir tu perfil",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Factores+Clave",
        paragraphs: [
          "La edad importa, pero no decide todo. También importa tu estabilidad laboral, tus dependientes económicos, tus deudas y tu horizonte.",
          "Una persona joven con ingresos inestables puede tener menos tolerancia real al riesgo que una persona mayor con flujo sólido y fondo de emergencia robusto.",
        ],
        bullets: [
          "Horizonte: ¿necesitarás ese dinero en 1 año o en 15?",
          "Liquidez: ¿cuánto efectivo necesitas disponible mes a mes?",
          "Ingresos: ¿son fijos, variables o estacionales?",
          "Deuda: ¿tienes pasivos caros que deban liquidarse antes de invertir fuerte?",
          "Psicología: ¿cómo reaccionas cuando tu portafolio cae 10% o 20%?",
        ],
      },
      {
        title: "Asignación de activos (Asset Allocation)",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Asset+Allocation",
        paragraphs: [
          "La asignación de activos es el reparto estructural del portafolio entre renta fija, renta variable y otros activos. Es más importante que intentar adivinar el mejor timing del mercado.",
          "Modelo base sugerido para este programa:",
        ],
        bullets: [
          "Conservador: 80% renta fija (Guía 2), 20% renta variable.",
          "Moderado: 50% renta fija, 50% renta variable.",
          "Agresivo: 20% renta fija, 80% renta variable.",
        ],
      },
      {
        title: "Cuestionario de autoevaluación",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Test+de+Perfil",
        paragraphs: [
          "Mini test práctico (asigna 1 a 3 puntos por pregunta):",
        ],
        bullets: [
          "¿Cuánto tiempo puedes dejar invertido tu dinero? (1: <3 años, 2: 3-7 años, 3: >7 años).",
          "Si tu portafolio cae 15%, ¿qué haces? (1: vendo todo, 2: espero, 3: compro más gradualmente).",
          "¿Qué tan estable es tu ingreso? (1: inestable, 2: mixto, 3: estable).",
          "¿Tienes fondo de emergencia? (1: no, 2: parcial, 3: sí, 3-6 meses o más).",
          "¿Qué te importa más? (1: no perder, 2: equilibrio, 3: crecer capital).",
          "Resultado orientativo: 5-8 conservador, 9-12 moderado, 13-15 agresivo.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Conclusion+Guia+3+TradFi",
        paragraphs: [
          "Definir perfil no te encierra; te ordena. Puedes evolucionar de conservador a moderado conforme crece tu estabilidad financiera y tu conocimiento.",
          "Un portafolio bien alineado a tu perfil reduce decisiones impulsivas y mejora tu consistencia.",
          "Con esta base, ya podemos entrar al mercado de valores con criterio, no con ansiedad.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+3",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Bodie, Z., Kane, A., & Marcus, A. J. (2021). Investments (12th ed.). McGraw-Hill Education.",
            url: "https://www.mheducation.com/highered/product/investments-bodie-kane/M9781260772166.html",
          },
          {
            label: "[2] Malkiel, B. G. (2019). A Random Walk Down Wall Street (12th ed.). W. W. Norton & Company.",
            url: "https://wwnorton.com/books/9780393358384",
          },
          {
            label: "[3] CFA Institute. (2026). Asset allocation resources. Recuperado el 23 de marzo de 2026, de: https://www.cfainstitute.org/",
            url: "https://www.cfainstitute.org/",
          },
          {
            label: "[4] CONDUSEF. (2026). Educación financiera para usuarios. Recuperado el 23 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-2-guide-4-bolsa-e-indices",
    track: "tradfi",
    level: 2,
    title: "Guía 4: La bolsa de valores y los índices",
    description: "TradFi, mercado primario/secundario, índices globales y ETFs como puerta de entrada.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Guia+4+Bolsa+e+Indices",
        paragraphs: [
          "Entramos al Nivel 2. Aquí pasamos de la base de finanzas personales al ecosistema de mercado de valores.",
          "El objetivo es entender cómo se mueven las acciones, qué representan los índices y por qué los ETFs son una herramienta tan potente para empezar.",
        ],
      },
      {
        title: "¿Qué son las finanzas tradicionales (TradFi)?",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=TradFi+vs+DeFi",
        paragraphs: [
          "TradFi es el sistema financiero tradicional: bancos, bolsas, casas de bolsa, reguladores y mercados organizados.",
          "A diferencia de DeFi (que vimos en la ruta cripto), TradFi depende de intermediarios y marcos regulatorios centralizados.",
          "Nota al pie: no son mundos enemigos; son capas distintas. De hecho, cada vez hay más puentes entre ambos.",
        ],
      },
      {
        title: "¿Cómo funciona la bolsa de valores?",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Mercado+Primario+y+Secundario",
        paragraphs: [
          "Mercado primario: cuando una empresa emite acciones por primera vez para financiarse.",
          "Mercado secundario: donde inversionistas compran y venden entre sí esas acciones ya emitidas.",
          "La bolsa facilita precio, liquidez y transparencia, mientras reguladores vigilan reglas mínimas de operación.",
        ],
      },
      {
        title: "Índices bursátiles: el pulso de la economía",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Indices+Bursatiles",
        paragraphs: [
          "Un índice es una canasta de activos que resume el comportamiento de un segmento de mercado.",
          "No se invierte directamente en el índice; se invierte a través de productos que lo replican (por ejemplo, ETFs).",
        ],
        bullets: [
          "EE.UU.: S&P 500, NASDAQ Composite, Dow Jones Industrial Average, Russell 2000.",
          "México: S&P/BMV IPC.",
          "Europa y Asia: Euro Stoxx 50 y Nikkei 225.",
        ],
      },
      {
        title: "ETFs: la forma más sencilla de empezar",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=ETFs+para+Iniciar",
        paragraphs: [
          "Un ETF (Exchange Traded Fund) es un fondo que cotiza en bolsa como si fuera una acción.",
          "Permite diversificar con una sola compra, reducir riesgo de concentración y operar con costos relativamente eficientes.",
          "Ejemplos populares:",
        ],
        bullets: [
          "VOO: replica S&P 500.",
          "VTI: mercado accionario total de EE.UU.",
          "SPY: uno de los ETFs más líquidos del S&P 500.",
          "QQQ: exposición alta al Nasdaq-100 y sector tecnológico.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Conclusion+Guia+4+TradFi",
        paragraphs: [
          "Entender índices y ETFs te evita caer en la trampa de querer seleccionar acciones sin base.",
          "Para la mayoría de inversionistas nuevos, empezar por instrumentos diversificados suele ser más eficiente que empezar por apuestas individuales.",
          "En la siguiente guía abriremos el S&P 500 por dentro, sector por sector.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+4",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Bolsa Mexicana de Valores (BMV). (2026). Mercado de capitales. Recuperado el 23 de marzo de 2026, de: https://www.bmv.com.mx/",
            url: "https://www.bmv.com.mx/",
          },
          {
            label: "[2] S&P Dow Jones Indices. (2026). S&P 500. Recuperado el 23 de marzo de 2026, de: https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
            url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
          },
          {
            label: "[3] Nasdaq. (2026). Nasdaq Composite Index. Recuperado el 23 de marzo de 2026, de: https://www.nasdaq.com/market-activity/index/comp",
            url: "https://www.nasdaq.com/market-activity/index/comp",
          },
          {
            label: "[4] FTSE Russell. (2026). Russell US Indexes. Recuperado el 23 de marzo de 2026, de: https://www.ftserussell.com/products/indices/russell-us",
            url: "https://www.ftserussell.com/products/indices/russell-us",
          },
          {
            label: "[5] Vanguard. (2026). VOO y VTI ETF profiles. Recuperado el 23 de marzo de 2026, de: https://investor.vanguard.com/investment-products/etfs",
            url: "https://investor.vanguard.com/investment-products/etfs",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-2-guide-5-sp500-sectores",
    track: "tradfi",
    level: 2,
    title: "Guía 5: El S&P 500 por dentro",
    description: "Anatomía sectorial del S&P 500: pesos aproximados, empresas, riesgo y ETFs sectoriales.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/93c5fd?text=Guia+5+SP500",
        paragraphs: [
          "Hablar del S&P 500 como un bloque único es útil para empezar, pero para tomar mejores decisiones necesitamos abrirlo por dentro.",
          "Cada sector tiene ciclos, riesgos y motores distintos. Esta guía te da una lectura práctica para no invertir a ciegas.",
        ],
      },
      {
        title: "Anatomía del S&P 500",
        imageUrl: "https://placehold.co/1200x630/1e293b/c4b5fd?text=Anatomia+SP500",
        paragraphs: [
          "El S&P 500 está compuesto por 11 sectores GICS. Su peso cambia constantemente por movimientos de precio, utilidades y cambios en componentes.",
          "Nota al pie: los porcentajes siguientes son aproximados y deben validarse en fuentes oficiales al momento de invertir.",
        ],
      },
      {
        title: "Análisis sectorial",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Analisis+Sectorial",
        paragraphs: [
          "Resumen por sector con peso aproximado, empresas representativas, riesgo y ETF sectorial de referencia.",
        ],
        bullets: [
          "Tecnología de la información (~28-32%): Apple, Microsoft, Nvidia. Volatilidad media-alta. ETF: XLK.",
          "Salud (~11-14%): Eli Lilly, UnitedHealth, Johnson & Johnson. Volatilidad media. ETF: XLV.",
          "Financiero (~10-13%): JPMorgan, Bank of America, Berkshire Hathaway. Volatilidad media. ETF: XLF.",
          "Consumo discrecional (~9-12%): Amazon, Tesla, Home Depot. Volatilidad alta. ETF: XLY.",
          "Servicios de comunicación (~8-10%): Alphabet, Meta, Netflix. Volatilidad media-alta. ETF: XLC.",
          "Industriales (~7-10%): GE Aerospace, Caterpillar, Boeing. Volatilidad media. ETF: XLI.",
          "Consumo básico (~5-7%): Procter & Gamble, Coca-Cola, Costco. Volatilidad baja-media. ETF: XLP.",
          "Energía (~3-6%): Exxon Mobil, Chevron. Volatilidad alta y cíclica. ETF: XLE.",
          "Utilities (~2-4%): NextEra Energy, Duke Energy. Volatilidad baja-media. ETF: XLU.",
          "Materiales (~2-4%): Linde, Sherwin-Williams. Volatilidad media. ETF: XLB.",
          "Bienes raíces (~2-4%): Prologis, American Tower. Sensible a tasas de interés. ETF: XLRE.",
        ],
      },
      {
        title: "Lectura práctica para el inversionista",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Lectura+Practica",
        paragraphs: [
          "Si compras un ETF amplio del S&P 500, ya tienes exposición sectorial implícita. Eso significa que no estás totalmente diversificado por igual, sino ponderado por capitalización.",
          "Cuando un solo sector crece demasiado (por ejemplo, tecnología), tu portafolio puede quedar más concentrado de lo que parece.",
          "Nota al pie: este punto conecta con la Guía 8 de diversificación avanzada, donde combinaremos sectores con otras clases de activos.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Conclusion+Guia+5+TradFi",
        paragraphs: [
          "El S&P 500 no es una caja negra. Conocer su composición te permite entender por qué sube, por qué cae y cómo se mueve tu riesgo real.",
          "Invertir mejor no siempre significa invertir más; muchas veces significa entender mejor lo que ya tienes.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+5",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] S&P Dow Jones Indices. (2026). S&P 500 methodology and constituents. Recuperado el 23 de marzo de 2026, de: https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
            url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
          },
          {
            label: "[2] State Street Global Advisors. (2026). Sector SPDR ETFs (XLK, XLF, XLE, etc.). Recuperado el 23 de marzo de 2026, de: https://www.ssga.com/us/en/intermediary/etfs/capabilities/sector-investing",
            url: "https://www.ssga.com/us/en/intermediary/etfs/capabilities/sector-investing",
          },
          {
            label: "[3] Bogle, J. C. (2017). The Little Book of Common Sense Investing (Updated ed.). Wiley.",
            url: "https://www.wiley.com/en-us/The+Little+Book+of+Common+Sense+Investing%2C+Updated+and+Revised-p-9781119404507",
          },
          {
            label: "[4] Damodaran, A. (2024). Equity Risk Premiums (Data update). New York University. Recuperado el 23 de marzo de 2026, de: https://pages.stern.nyu.edu/~adamodar/",
            url: "https://pages.stern.nyu.edu/~adamodar/",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-2-guide-6-invertir-desde-mexico",
    track: "tradfi",
    level: 2,
    title: "Guía 6: ¿Cómo invertir en la bolsa desde México?",
    description: "Brokers regulados, opciones en México, seguridad, pasos de apertura y horarios de mercado.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Guia+6+Invertir+desde+Mexico",
        paragraphs: [
          "Saber qué comprar sin saber dónde comprar es quedarte a mitad del camino. Esta guía conecta teoría con ejecución.",
          "La prioridad aquí es simple: usar infraestructura regulada, reducir fricciones y evitar errores operativos básicos.",
        ],
      },
      {
        title: "Brokers regulados",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Brokers+Regulados",
        paragraphs: [
          "Un broker es la plataforma intermediaria para ejecutar operaciones de compra y venta de valores.",
          "En México, la regulación y supervisión por CNBV es un filtro clave para seguridad jurídica y operativa.",
          "Nota al pie: regulado no equivale a rentabilidad garantizada. Regulado significa reglas, supervisión y mecanismos de cumplimiento.",
        ],
      },
      {
        title: "Opciones accesibles en México",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Opciones+en+Mexico",
        paragraphs: [
          "Tres nombres muy comunes para iniciar son GBM+, Bursanet y Flink. Cada uno cambia en comisiones, experiencia de usuario y profundidad de productos.",
        ],
        bullets: [
          "GBM+: ecosistema robusto y amplio acceso a productos; interfaz madura.",
          "Bursanet: trayectoria local y enfoque clásico de intermediación.",
          "Flink: entrada sencilla para nuevos inversionistas y montos iniciales accesibles.",
        ],
      },
      {
        title: "Seguridad del inversionista",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Seguridad+del+Inversionista",
        paragraphs: [
          "Las casas de bolsa y custodios operan bajo reglas de segregación, reporteo y controles internos definidos por regulación.",
          "Tu mejor defensa práctica sigue siendo operativa: activar 2FA, validar dominios, evitar enlaces sospechosos y no compartir credenciales.",
          "Como ya vimos en la guía de identidad digital (ruta DeFi), la seguridad técnica sin higiene del usuario siempre queda incompleta.",
        ],
      },
      {
        title: "Guía rápida de apertura y primera compra",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Primera+Compra",
        paragraphs: [
          "Flujo general recomendado para empezar:",
        ],
        bullets: [
          "Crear cuenta y completar KYC (identificación oficial, datos personales, validaciones).",
          "Fondear con SPEI desde cuenta bancaria propia.",
          "Elegir activo (idealmente ETF amplio para inicio) y definir monto.",
          "Confirmar operación y guardar comprobantes.",
          "Registrar compra en tu control de portafolio (lo usaremos a detalle en la Guía 10).",
        ],
      },
      {
        title: "Horarios del mercado",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Horarios+de+Mercado",
        paragraphs: [
          "La BMV y el SIC tienen ventanas de operación definidas; el mercado de EE.UU. también tiene horarios específicos.",
          "Por diferencia de husos horarios y ajustes por horario de verano/invierno, conviene validar horarios vigentes directamente en tu broker y en BMV.",
          "Nota al pie: operar fuera de horario puede implicar menor liquidez y spreads más amplios.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Conclusion+Guia+6+TradFi",
        paragraphs: [
          "Invertir desde México es totalmente posible con estructura correcta. La clave no es tener una app, sino tener un proceso.",
          "El proceso mínimo es: broker regulado, seguridad activa, elección de activos congruente y seguimiento periódico.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+6",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Comisión Nacional Bancaria y de Valores (CNBV). (2026). Entidades autorizadas y supervisión. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "[2] Bolsa Mexicana de Valores (BMV). (2026). Información de mercados y horarios. Recuperado el 23 de marzo de 2026, de: https://www.bmv.com.mx/",
            url: "https://www.bmv.com.mx/",
          },
          {
            label: "[3] CONDUSEF. (2026). Recomendaciones de seguridad para usuarios financieros. Recuperado el 23 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "[4] U.S. Securities and Exchange Commission (SEC). (2026). Investor.gov: Basics. Recuperado el 23 de marzo de 2026, de: https://www.investor.gov/",
            url: "https://www.investor.gov/",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-2-guide-7-trading-vs-inversion",
    track: "tradfi",
    level: 2,
    title: "Guía 7: Trading vs. inversión y herramientas",
    description: "Diferencias de filosofía, conceptos base de trading, herramientas gratuitas y psicología del inversor.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Guia+7+Trading+vs+Inversion",
        paragraphs: [
          "Uno de los errores más comunes al empezar es mezclar trading con inversión de largo plazo sin un plan claro.",
          "Ambas estrategias pueden coexistir, pero tienen lógicas, riesgos y exigencias mentales muy diferentes.",
        ],
      },
      {
        title: "Diferencias fundamentales",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Diferencias+Fundamentales",
        paragraphs: [
          "Inversión: enfoque de años, tesis de negocio, paciencia y acumulación.",
          "Trading: enfoque táctico de corto plazo, lectura técnica y ejecución constante.",
          "Nota al pie: no hay una superior por definición; hay una más adecuada según perfil, tiempo disponible y disciplina.",
        ],
        bullets: [
          "Horizonte: inversión (años) vs trading (días/semanas).",
          "Frecuencia: inversión (baja) vs trading (alta).",
          "Costos: trading suele implicar más fricción operativa.",
          "Demanda emocional: trading requiere autocontrol muy alto.",
        ],
      },
      {
        title: "Conceptos básicos de trading",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Conceptos+Basicos+Trading",
        paragraphs: [
          "Velas japonesas: representación visual de precio (apertura, cierre, máximo y mínimo).",
          "Soportes y resistencias: zonas donde el precio suele reaccionar por oferta y demanda.",
          "Tendencia: dirección general del precio (alcista, bajista o lateral).",
          "Esta guía no busca convertirte en trader, sino darte contexto para entender lenguaje de mercado.",
        ],
      },
      {
        title: "Herramientas gratuitas",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Herramientas+Gratuitas",
        paragraphs: [
          "Tres herramientas útiles para cualquier nivel:",
        ],
        bullets: [
          "Yahoo Finance: cotizaciones, noticias, ratios y seguimiento de watchlists.",
          "Google Finance: vista rápida de precios y comparación básica.",
          "TradingView: gráficas avanzadas, indicadores técnicos y comunidad.",
        ],
      },
      {
        title: "Riesgos de la bolsa y psicología",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Riesgos+y+Psicologia",
        paragraphs: [
          "La bolsa es volátil e impredecible en el corto plazo. Ningún indicador elimina totalmente el riesgo.",
          "Los sesgos psicológicos (miedo, euforia, FOMO, aversión a pérdidas) explican más errores que la falta de información técnica.",
          "Regla práctica: nunca arriesgar capital que comprometa tu estabilidad financiera personal.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Conclusion+Guia+7+TradFi",
        paragraphs: [
          "Si estás iniciando, la inversión de largo plazo suele ser más sostenible que intentar hacer trading sin preparación.",
          "El mercado premia más la consistencia que la impulsividad. Aprende, practica con método y ejecuta solo cuando tu plan esté claro.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+7",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Murphy, J. J. (1999). Technical Analysis of the Financial Markets. New York Institute of Finance.",
            url: "https://www.penguinrandomhouse.com/books/57463/technical-analysis-of-the-financial-markets-by-john-j-murphy/",
          },
          {
            label: "[2] Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
            url: "https://us.macmillan.com/books/9780374533557/thinkingfastandslow",
          },
          {
            label: "[3] Yahoo Finance. (2026). Herramientas de mercado y seguimiento de activos. Recuperado el 23 de marzo de 2026, de: https://finance.yahoo.com/",
            url: "https://finance.yahoo.com/",
          },
          {
            label: "[4] TradingView. (2026). Plataforma de gráficos y análisis. Recuperado el 23 de marzo de 2026, de: https://www.tradingview.com/",
            url: "https://www.tradingview.com/",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-3-guide-8-diversificacion-avanzada",
    track: "tradfi",
    level: 3,
    title: "Guía 8: Diversificación avanzada",
    description: "Más allá de acciones: commodities, oro y el rol táctico de cripto en portafolios agresivos.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fca5a5?text=Guia+8+Diversificacion+Avanzada",
        paragraphs: [
          "Llegamos al nivel estratégico. Aquí ya no hablamos solo de comprar acciones o ETFs amplios, sino de construir resiliencia real del portafolio.",
          "Diversificar no es tener muchos tickers. Diversificar es combinar activos que reaccionan distinto ante distintos escenarios económicos.",
        ],
      },
      {
        title: "Portafolio y diversificación",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Portafolio+y+Diversificacion",
        paragraphs: [
          "La frase clásica 'no pongas todos los huevos en la misma canasta' sigue vigente, pero aquí la elevamos de nivel.",
          "El objetivo no es maximizar emoción, sino gestionar riesgo de manera inteligente.",
        ],
      },
      {
        title: "Commodities (materias primas)",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Commodities",
        paragraphs: [
          "Los commodities son activos físicos base de la economía real: energía, metales y productos agrícolas.",
          "En práctica minorista, se accede a ellos principalmente por ETFs, no por entrega física.",
        ],
        bullets: [
          "Energéticos: petróleo, gas natural (ej. ETFs temáticos de energía).",
          "Metales: oro, plata, cobre.",
          "Agrícolas: maíz, soya, trigo, café.",
          "Nota al pie: su comportamiento suele ser cíclico y sensible a inflación, geopolítica y oferta global.",
        ],
      },
      {
        title: "El oro como activo refugio",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Oro+Activo+Refugio",
        paragraphs: [
          "El oro históricamente ha funcionado como activo de cobertura en periodos de incertidumbre, aunque no está libre de volatilidad.",
          "No reemplaza toda una estrategia, pero puede aportar balance en escenarios de estrés de mercado.",
          "ETFs de referencia comunes: GLD, IAU (validar ficha y costos vigentes antes de invertir).",
        ],
      },
      {
        title: "Criptomonedas en un portafolio tradicional",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Cripto+en+Portafolio+TradFi",
        paragraphs: [
          "Para perfiles agresivos, una exposición pequeña (1-5%) a activos como Bitcoin y Ethereum puede funcionar como componente de alto riesgo/alta recompensa.",
          "Este componente debe ser proporcional, documentado y nunca superior a lo que tu tolerancia real puede soportar.",
          "Referencia cruzada: para profundizar en fundamentos, riesgos y custodia de cripto revisa el árbol completo de finanzas descentralizadas del mismo sitio.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Conclusion+Guia+8+TradFi",
        paragraphs: [
          "Diversificación avanzada es diseño de portafolio, no colección de activos.",
          "La combinación correcta depende de tu perfil, horizonte y objetivo. La combinación incorrecta casi siempre nace de improvisación.",
          "Con esta guía ya puedes estructurar portafolios más robustos y menos dependientes de un solo motor de rendimiento.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+8",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Bodie, Z., Kane, A., & Marcus, A. J. (2021). Investments (12th ed.). McGraw-Hill Education.",
            url: "https://www.mheducation.com/highered/product/investments-bodie-kane/M9781260772166.html",
          },
          {
            label: "[2] World Gold Council. (2026). Gold as a strategic asset. Recuperado el 23 de marzo de 2026, de: https://www.gold.org/",
            url: "https://www.gold.org/",
          },
          {
            label: "[3] SPDR. (2026). SPDR Gold Shares (GLD). Recuperado el 23 de marzo de 2026, de: https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-gold-shares-gld",
            url: "https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-gold-shares-gld",
          },
          {
            label: "[4] iShares. (2026). iShares Gold Trust (IAU). Recuperado el 23 de marzo de 2026, de: https://www.ishares.com/us/products/239561/ishares-gold-trust-fund",
            url: "https://www.ishares.com/us/products/239561/ishares-gold-trust-fund",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-3-guide-9-precio-accion-dividendos",
    track: "tradfi",
    level: 3,
    title: "Guía 9: El precio de una acción y los dividendos",
    description: "Qué mueve una acción, cómo funcionan dividendos y tratamiento fiscal básico en México.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Guia+9+Precio+y+Dividendos",
        paragraphs: [
          "Para invertir con criterio necesitas entender dos cosas: por qué cambia el precio de una acción y cómo funciona el flujo de dividendos.",
          "Esta guía conecta análisis fundamental básico con decisiones prácticas de portafolio.",
        ],
      },
      {
        title: "¿Qué mueve el precio de una acción?",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Que+Mueve+el+Precio",
        paragraphs: [
          "El precio no se mueve por una sola variable. Es el resultado de expectativas, resultados y contexto macro.",
        ],
        bullets: [
          "Reportes de ganancias y guidance.",
          "Crecimiento de ingresos, márgenes y flujo de caja.",
          "Capitalización de mercado y valuación relativa.",
          "Noticias corporativas, innovación y reputación.",
          "Tasas de interés, inflación y ciclo económico.",
          "Liquidez, sentimiento y posicionamiento del mercado.",
        ],
      },
      {
        title: "¿Qué son los dividendos?",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Dividendos",
        paragraphs: [
          "Los dividendos son distribuciones de utilidades que algunas empresas pagan a sus accionistas.",
          "No todas las empresas pagan dividendos: algunas prefieren reinvertir utilidades para crecer más rápido.",
          "Una estrategia de dividendos puede aportar flujo periódico, pero debe analizarse junto con crecimiento y calidad del negocio.",
        ],
      },
      {
        title: "Impuestos sobre inversión en bolsa",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Impuestos+Bolsa",
        paragraphs: [
          "En México, una referencia común para inversiones bursátiles es el 10% sobre ganancia de capital realizada y sobre dividendos recibidos, sujeto a normativa vigente y caso particular.",
          "Nota al pie: lo fiscal puede cambiar. Siempre valida reglas aplicables y, si tu operación escala, acompáñate de asesoría contable/fiscal.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Conclusion+Guia+9+TradFi",
        paragraphs: [
          "Entender precio y dividendos te ayuda a dejar de reaccionar solo a titulares de corto plazo.",
          "Una tesis de inversión sólida combina negocio, valuación, riesgo y disciplina fiscal.",
          "El inversionista consistente no adivina; interpreta señales con método y ejecuta con paciencia.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+9",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Damodaran, A. (2024). Investment Valuation (data and teaching resources). New York University. Recuperado el 23 de marzo de 2026, de: https://pages.stern.nyu.edu/~adamodar/",
            url: "https://pages.stern.nyu.edu/~adamodar/",
          },
          {
            label: "[2] Servicio de Administración Tributaria (SAT). (2026). Guías y obligaciones de personas físicas. Recuperado el 23 de marzo de 2026, de: https://www.sat.gob.mx/",
            url: "https://www.sat.gob.mx/",
          },
          {
            label: "[3] Comisión Nacional Bancaria y de Valores (CNBV). (2026). Marco regulatorio del mercado de valores. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "[4] Brealey, R. A., Myers, S. C., & Allen, F. (2019). Principles of Corporate Finance (13th ed.). McGraw-Hill.",
            url: "https://www.mheducation.com/highered/product/principles-corporate-finance-brealey-myers/M9781260565553.html",
          },
        ],
      },
    ],
  },
  {
    slug: "tradfi-level-3-guide-10-seguridad-patrimonio",
    track: "tradfi",
    level: 3,
    title: "Guía 10: Seguridad y gestión de tu patrimonio",
    description: "Fraudes, higiene digital, 2FA y control operativo del portafolio con plantilla práctica.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Guia+10+Seguridad+Patrimonio",
        paragraphs: [
          "Ganar rendimiento sirve de poco si no sabes protegerlo. Esta guía cierra el bloque tradicional con enfoque de seguridad y control patrimonial.",
          "En inversiones, la parte técnica y la parte operativa son inseparables.",
        ],
      },
      {
        title: "Fraudes y estafas frecuentes",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Fraudes+y+Estafas",
        paragraphs: [
          "Las estafas cambian de forma, pero casi siempre repiten el mismo patrón: promesas de rendimiento garantizado y urgencia para depositar.",
          "Ponzi, esquemas piramidales y falsos 'fondos privados' siguen siendo trampas recurrentes.",
          "Canal de apoyo institucional en México: CONDUSEF.",
        ],
        bullets: [
          "Bandera roja 1: 'ganancias fijas altas sin riesgo'.",
          "Bandera roja 2: falta de regulación verificable.",
          "Bandera roja 3: presión para transferir hoy mismo.",
          "Bandera roja 4: opacidad en estados de cuenta y custodia.",
        ],
      },
      {
        title: "Higiene digital",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Higiene+Digital",
        paragraphs: [
          "Contraseñas únicas y robustas, gestor de contraseñas y verificación de dominios oficiales son requisitos mínimos, no opcionales.",
          "Nota al pie: reutilizar la misma contraseña en varios servicios convierte un incidente pequeño en un incidente patrimonial.",
        ],
      },
      {
        title: "Autenticación de dos factores (2FA)",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Autenticacion+2FA",
        paragraphs: [
          "2FA agrega una segunda capa de verificación además de la contraseña.",
          "Opciones comunes: apps autenticadoras (recomendado) y SMS (mejor que nada, pero más vulnerable).",
          "Actívala en brokers, correo principal y cualquier app de banca o inversión.",
        ],
      },
      {
        title: "Control de tu portafolio",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Control+de+Portafolio",
        paragraphs: [
          "Llevar control propio evita dependencia total de la interfaz del broker y te da perspectiva real de asignación y rendimiento.",
          "Formato sugerido en Excel para monitoreo periódico:",
        ],
        bullets: [
          "Activo (Ticker).",
          "Cantidad.",
          "Precio promedio de compra.",
          "Precio actual y valor actual.",
          "Ganancia/Pérdida absoluta y en porcentaje.",
          "Peso del activo dentro del portafolio.",
          "Notas de tesis de inversión y criterios de salida.",
        ],
      },
      {
        title: "Anexo: Control_Portafolio_Demo.xlsx",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Anexo+Excel+Demo",
        paragraphs: [
          "Esta guía considera como anexo un archivo demo de control de portafolio con las columnas clave para seguimiento operativo.",
          "El anexo facilita disciplina, trazabilidad de decisiones y evaluación de desempeño por periodos.",
          "Nota al pie: la plantilla no reemplaza estrategia; la documenta.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Conclusion+Guia+10+TradFi",
        paragraphs: [
          "La verdadera gestión patrimonial combina inversión inteligente y protección activa de cuenta.",
          "Tu patrimonio se construye con años de constancia; perderlo por una mala práctica de seguridad es un costo evitable.",
          "Con esto cerramos la ruta de finanzas tradicionales y bolsa de valores con una visión integral: estrategia, ejecución y protección.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias+Guia+10",
        paragraphs: [
          "Fuentes en formato APA para esta guía.",
        ],
        references: [
          {
            label: "[1] Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Alertas y prevención de fraudes. Recuperado el 23 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "[2] Cybersecurity and Infrastructure Security Agency (CISA). (2026). Use strong passwords and multi-factor authentication. Recuperado el 23 de marzo de 2026, de: https://www.cisa.gov/secure-our-world",
            url: "https://www.cisa.gov/secure-our-world",
          },
          {
            label: "[3] U.S. Securities and Exchange Commission (SEC). (2026). Investor alerts and bulletins. Recuperado el 23 de marzo de 2026, de: https://www.investor.gov/",
            url: "https://www.investor.gov/",
          },
          {
            label: "[4] Comisión Nacional Bancaria y de Valores (CNBV). (2026). Recomendaciones de seguridad para usuarios financieros. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
        ],
      },
    ],
  },
  {
    slug: "level-1-guide-1-que-son-las-criptomonedas",
    level: 1,
    title: "Guía 1: Qué son las Criptomonedas",
    description: "Origen del dinero, nacimiento de Bitcoin y bases técnicas de Blockchain.",
    sourceUrl:
      "https://docs.google.com/document/d/1o8mbXkChaBfir6pTLAuV5dTHDbFIOw-pO_YfuqNRymI/edit?tab=t.0",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/18181b/a78bfa?text=Introduccion+Criptomonedas",
        paragraphs: [
          "Las criptomonedas son activos digitales que, mediante cifrado criptográfico, buscan brindar confianza y seguridad en las transacciones, integridad sin intermediarios, rapidez en pagos y menores comisiones al operar.",
          "Antes de entrar en materia, es clave remontarnos a la historia del dinero y de los sistemas bancarios.",
        ],
      },
      {
        title: "¿Qué es el dinero?",
        imageUrl: "https://placehold.co/1200x630/0f172a/93c5fd?text=Que+es+el+Dinero",
        paragraphs: [
          "El dinero es un medio de cambio para adquirir bienes y servicios, y también una herramienta para el pago de obligaciones.",
          "A diario asignamos precios en función del valor, la disponibilidad (oferta) y las necesidades de las personas (demanda) [1].",
        ],
      },
      {
        title: "Historia del dinero y los bancos",
        imageUrl: "https://placehold.co/1200x630/1e293b/fde68a?text=Historia+del+Dinero+y+los+Bancos",
        paragraphs: [
          "A lo largo de la historia se utilizaron distintas herramientas para intercambiar valor y adquirir productos [2].",
          "Con la evolución tecnológica, las instituciones financieras incorporaron mecanismos como cheques, tarjetas, banca digital y aplicaciones de pago.",
          "Las criptomonedas surgen como alternativa tecnológica a parte de esas fricciones: tiempos largos, costos elevados y dependencia de intermediarios.",
        ],
        bullets: [
          "Trueque (8000-4000 A.C.).",
          "Intercambio de productos como objetos de valor (4000-1000 A.C.).",
          "Monedas (600-575 A.C.).",
          "Billetes (800-1000).",
          "Primeros bancos (1100).",
          "Primer banco central (1668).",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Desarrollo+de+Bitcoin+y+Blockchain",
        paragraphs: [
          "Satoshi Nakamoto es el pseudónimo del creador (o creadores) de Bitcoin, pionero de Blockchain, con la visión de habilitar una moneda digital utilizable para pagos de bienes y servicios.",
          "En Bitcoin, la oferta es finita: se emitirán como máximo 21 millones de unidades [3]. Su precio depende de oferta, demanda, expectativas y adopción.",
          "El proceso de emisión se conoce como minado. En etapas de alta atención del mercado, también crece la especulación y la entrada de nuevos participantes.",
          "El rasgo estructural de este sistema es la descentralización: la validación no depende de un banco o gobierno único, sino de una red distribuida de participantes.",
        ],
      },
      {
        title: "Trilema de la escalabilidad",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Trilema+de+la+Escalabilidad",
        paragraphs: [
          "Las redes cripto enfrentan el trilema de la escalabilidad: seguridad, descentralización y escalabilidad. En la práctica, optimizar dos dimensiones suele implicar comprometer parcialmente la tercera.",
        ],
        bullets: [
          "Seguridad: protección de la integridad y privacidad de la información [4]. Ningún sistema es absolutamente seguro.",
          "Descentralización: menor dependencia de bancos o entidades gubernamentales para validar operaciones.",
          "Escalabilidad: capacidad de procesar transacciones por segundo. Como referencia histórica, Bitcoin alrededor de 7 TPS y Visa hasta alrededor de 65,000 TPS [5].",
        ],
      },
      {
        title: "Creación de las criptomonedas",
        imageUrl: "https://placehold.co/1200x630/111827/fca5a5?text=Creacion+de+las+Criptomonedas",
        paragraphs: [
          "Cada criptomoneda tiene objetivos y diseño técnico propios; por eso es clave revisar su whitepaper.",
          "En Bitcoin, la emisión ocurre por minado: nodos especializados resuelven problemas computacionales y reciben una recompensa en BTC o fracciones.",
          "Conforme avanza el tiempo, la recompensa por bloque se reduce periódicamente (halving), reforzando su política monetaria limitada.",
        ],
      },
      {
        title: "Asentamiento de registros",
        imageUrl: "https://placehold.co/1200x630/0b1324/67e8f9?text=Asentamiento+de+Registros",
        paragraphs: [
          "Los movimientos quedan registrados de forma similar a un libro contable distribuido: una salida en una dirección y una entrada en otra.",
          "Estos registros son públicos y verificables. La red utiliza arquitectura peer-to-peer (P2P), donde múltiples nodos comparten y validan información [2].",
          "En un esquema distribuido, alterar datos de forma maliciosa es complejo porque la versión válida se impone por consenso entre nodos.",
          "En términos generales, un ataque relevante exigiría controlar una proporción crítica de la red (el conocido umbral del 51 por ciento).",
        ],
      },
      {
        title: "Cómo funciona Blockchain",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Como+Funciona+Blockchain",
        paragraphs: [
          "Blockchain es una base de datos distribuida que agrupa transacciones en bloques enlazados criptográficamente. Cada nodo conserva una copia y valida nuevas operaciones para alcanzar consenso.",
        ],
      },
      {
        title: "Analogía del problema de los generales bizantinos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Generales+Bizantinos+y+Consenso",
        paragraphs: [
          "La analogía describe a varios actores que deben coordinarse en un entorno incierto, evitando órdenes contradictorias y posibles traiciones [7].",
          "En Blockchain, esa coordinación se refleja en nodos que intercambian información para confirmar el mismo estado de la red, sin una autoridad central única.",
          "Este principio explica parte del funcionamiento de Bitcoin y de redes con prueba de trabajo (PoW).",
        ],
      },
      {
        title: "Cadenas Blockchain",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Cadenas+Blockchain",
        paragraphs: [
          "En bases de datos tradicionales se habla de operaciones CRUD (Create, Read, Update, Delete).",
          "En Blockchain, el historial confirmado es inmutable: no se edita ni se elimina de forma directa, sino que se agregan nuevos registros para reflejar cambios de estado.",
          "Una vez validado un bloque y propagado por la red, la transacción queda asentada en la cadena.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/f9a8d4?text=Conclusion",
        paragraphs: [
          "Las criptomonedas representan una evolución tecnológica relevante en la manera de transferir y registrar valor.",
          "Su adopción ha crecido por eficiencia operativa, apertura de infraestructura y nuevos casos de uso; al mismo tiempo, traen riesgos de mercado, seguridad y regulación.",
          "Para profundizar correctamente, lo recomendable es estudiar cada proyecto desde su whitepaper y su modelo económico-técnico.",
          "Este primer módulo establece la base conceptual para continuar con wallets, Bitcoin y contratos inteligentes.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Como las transferencias internacionales que emplean el sistema interbancario internacional SWIFT.",
          "2. Estructura y forma para el intercambio y manejo de la información: el cliente solicita y el servidor provee información.",
          "3. Siendo la caída de Constantinopla el inicio del fin del Imperio romano.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] ¿Para qué sirve el dinero? Santander. Recuperado el 3 de marzo de 2023, de: https://www.santander.com/es/stories/para-que-sirve-el-dinero",
            url: "https://www.santander.com/es/stories/para-que-sirve-el-dinero",
          },
          {
            label: "[2] Historia del Dinero. Banco de México. Recuperado el 3 de marzo de 2023, de: https://www.banxico.org.mx/mibanxico//_pdfs/historia-del-dinero.pdf",
            url: "https://www.banxico.org.mx/mibanxico//_pdfs/historia-del-dinero.pdf",
          },
          {
            label: "[3] Nieto, A. El número de bitcoins es finito, no podrá haber más de 21 millones: ¿qué se espera que suceda entonces? Xataka. Recuperado el 30 de mayo de 2021, de: https://cutt.ly/NncK3a2",
            url: "https://cutt.ly/NncK3a2",
          },
          {
            label: "[4] Definición de seguridad informática. Recuperado el 17 de febrero de 2023, de:https://definicion.de/seguridad-informatica/",
            url: "https://definicion.de/seguridad-informatica/",
          },
          {
            label: "[5] Collado, l. VisaNet: el poder de conectar al mundo. Recuperado el 17 de febrero de 2023, de:https://www.visa.com.mx/la-diferencia-visa/impacto-global/visanet-poder-conectar-mundo.html#:~:text=En%20t%C3%A9rminos%20de%20su%20capacidad,con%20un%20rendimiento%20sin%20igual",
            url: "https://www.visa.com.mx/la-diferencia-visa/impacto-global/visanet-poder-conectar-mundo.html#:~:text=En%20t%C3%A9rminos%20de%20su%20capacidad,con%20un%20rendimiento%20sin%20igual",
          },
          {
            label: "[6] García P. El Bitcoin y las criptomonedas: ¿El dinero del futuro? ENAE. Recuperado el 1 de marzo de 2021, de: https://www.enae.es/blog/el-bitcoin-y-las-criptomonedas-el-dinero-del-futuro?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF9yUjoyckdK976ETlowm1hblGHr6-du54K4wHN833Tf9l9_Q9nrof4aAsJdEALw_wcB&_adin=11551547647",
            url: "https://www.enae.es/blog/el-bitcoin-y-las-criptomonedas-el-dinero-del-futuro?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF9yUjoyckdK976ETlowm1hblGHr6-du54K4wHN833Tf9l9_Q9nrof4aAsJdEALw_wcB&_adin=11551547647",
          },
          {
            label: "[7] Brooks, D. Criptomonedas: qué es el \"problema de los generales bizantinos” y por qué explica el origen del bitcoin. BBC News Mundo. Recuperado el 1 de marzo de 2022, de: https://www.bbc.com/mundo/noticias-51380491",
            url: "https://www.bbc.com/mundo/noticias-51380491",
          },
        ],
      },
    ],
  },
  {
    slug: "level-1-guide-2-wallets-criptomonedas",
    level: 1,
    title: "Guía 2: Wallets de Criptomonedas",
    description: "Custodia, llaves criptográficas, hot wallets, cold wallets y modelos multicadena.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/93c5fd?text=Introduccion+a+Wallets",
        paragraphs: [
          "Una wallet (del inglés, cartera) es una herramienta donde una persona o entidad puede alojar activos de criptomonedas. Existen wallets exclusivas para un activo y otras que permiten resguardar distintos tokens.",
          "En la práctica, para comprar criptomonedas se utiliza dinero fiduciario (emitido por bancos centrales), normalmente mediante transferencias bancarias hacia la aplicación o sitio web de la empresa de la wallet.",
          "La criptografía significa, desde su raíz griega, “el arte de ocultar mensajes” [1]. Su objetivo no es garantizar un canal imposible de interceptar, sino volver muy difícil leer o alterar el contenido sin autorización.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/c4b5fd?text=Conceptos+Basicos+de+Wallets",
        paragraphs: [
          "Muchas wallets operan como empresas que, por medio de apps o sitios web, permiten gestionar activos digitales bajo la metáfora de carteras digitales.",
          "Las criptomonedas se apoyan en algoritmos criptográficos (candados de seguridad). Entre los más conocidos están los algoritmos simétricos y asimétricos [2].",
          "Una forma simple de entender la criptografía asimétrica es pensar en llaves de acceso: una llave pública para recibir información y una llave privada para autorizar el uso de los activos. Sin control de ambas llaves, no hay control efectivo del acceso.",
          "Los algoritmos asimétricos ofrecen mayor seguridad, aunque con mayor costo computacional en ciertas operaciones.",
          "Los algoritmos simétricos usan la misma llave para cifrar y descifrar. Son más veloces, pero su modelo de seguridad y uso es distinto; suelen aparecer en procesos de autenticación y recuperación [3].",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo+Tipos+de+Wallets",
        paragraphs: [
          "Existen distintos tipos de wallets y cada una implica ventajas y desventajas según nivel de custodia, facilidad de uso, seguridad y responsabilidad del usuario.",
        ],
      },
      {
        title: "Wallets calientes y wallets frías",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Hot+Wallets+vs+Cold+Wallets",
        paragraphs: [
          "Una clasificación común divide wallets en calientes (hot) y frías (cold). Cada enfoque implica un intercambio entre practicidad, soberanía y gestión del riesgo.",
        ],
      },
      {
        title: "Wallets calientes",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Wallets+Calientes",
        paragraphs: [
          "Las hot wallets son las más comunes y suelen ser la forma más rápida de entrar al ecosistema. Su rasgo clave es que, en muchos casos, el usuario no controla directamente sus llaves privadas.",
          "Estas plataformas suelen funcionar como exchanges, facilitando el cambio entre dinero fiduciario y criptoactivos de manera inmediata.",
          "El riesgo principal es de custodia: si la empresa controla tus llaves, también controla el acceso final a tus fondos. Casos como FTX muestran que una plataforma puede quebrar o colapsar [4].",
          "En algunos mercados existen proveedores con mayor nivel de cumplimiento regulatorio, lo que puede aportar capas adicionales de protección operativa.",
        ],
        bullets: [
          "Ventaja: compra y resguardo de criptoactivos desde smartphone de forma simple.",
          "Ventaja: transferencias rápidas entre usuarios con menor fricción operativa.",
          "Ventaja: fondeo sencillo mediante bancos y, en ciertos casos, comercios físicos.",
          "Ejemplos: Binance, Coinbase, Trust Wallet, Coinomi.",
        ],
      },
      {
        title: "Wallets frías",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Wallets+Frias",
        paragraphs: [
          "Las cold wallets son carteras offline. A diferencia de las calientes, aquí el usuario mantiene control directo de sus llaves y, con ello, de sus activos.",
          "El costo de esa soberanía es la responsabilidad total de custodia. Si se pierden llaves o respaldos, la pérdida de acceso puede ser irreversible.",
          "Este modelo recuerda una premisa inicial del ecosistema Bitcoin: poder custodiar grandes montos en medios físicos, pero también asumir el riesgo de pérdida por mala gestión [5][6].",
        ],
        bullets: [
          "Ventaja: control del dinero al ser dueño de las llaves.",
          "Ventaja: posibilidad de realizar respaldos en varias unidades de almacenamiento.",
          "Ventaja: al estar offline, menor exposición a ataques remotos.",
          "Ejemplo: dispositivos Ledger con mecanismos de autenticación [7].",
        ],
      },
      {
        title: "Wallets de un solo protocolo",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Wallets+de+Un+Solo+Protocolo",
        paragraphs: [
          "Estas carteras se diseñan para activos de una blockchain específica. Históricamente fueron de las primeras en el ecosistema.",
          "Su ventaja es la especialización para gestionar de forma dedicada una sola red y sus activos.",
        ],
        bullets: [
          "Ejemplos: Bitcoin Wallet (Bitcoin), MetaMask (Ethereum), Phantom (Solana), Yoroi (Cardano).",
        ],
      },
      {
        title: "Wallets de distintos protocolos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Wallets+Multicadena",
        paragraphs: [
          "Estas wallets permiten almacenar y gestionar múltiples activos y redes desde una sola interfaz.",
          "En muchos casos, la custodia de llaves recae en la empresa proveedora (modelo hot wallet), aunque existen variaciones híbridas según producto.",
          "Algunas plataformas han ofrecido rendimientos por mantener fondos, pero estos programas pueden cambiar con el ciclo del mercado.",
          "También han surgido integraciones con navegadores y fabricantes de dispositivos móviles [8][9].",
        ],
        bullets: [
          "Ejemplos: Binance, Coinbase, Trust Wallet, Mercado Libre, Skrill.",
          "Integraciones destacadas: Opera Crypto Browser y ecosistema Samsung.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Conclusion+Wallets",
        paragraphs: [
          "No existe una wallet perfecta para todos los casos. La elección depende del equilibrio que cada persona quiera entre comodidad, control y seguridad.",
          "Esta guía ofrece una base para tomar decisiones con criterio, entendiendo custodias, riesgos y responsabilidades.",
          "Mientras más informada esté la comunidad sobre estas herramientas, mayor capacidad habrá para reducir fraudes y mejorar prácticas de seguridad.",
          "Esta es la segunda guía del recorrido cripto y sirve como base para los siguientes módulos prácticos.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Se refiere a la baja probabilidad de que dos mensajes distintos produzcan la misma cadena cifrada; de ahí la analogía de huellas digitales únicas.",
          "2. Factores de pérdida de información: desastres naturales, errores humanos, ciberataques y fallos de hardware [6].",
          "3. Aclaración: no brindamos técnicas de inversión; toda decisión es bajo el riesgo de cada persona.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/0f172a/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Criptografía: el arte de cifrar mensajes. Becas Santander.  Recuperado el 11 de marzo de 2023, de: https://www.becas-santander.com/es/blog/criptografia.html#:~:text=En%20concreto%2C%20este%20t%C3%A9rmino%20proviene,transmitir%20mensajes%20de%20forma%20secreta.",
            url: "https://www.becas-santander.com/es/blog/criptografia.html#:~:text=En%20concreto%2C%20este%20t%C3%A9rmino%20proviene,transmitir%20mensajes%20de%20forma%20secreta.",
          },
          {
            label: "[2] López, A. Todo sobre criptografía: Algoritmos de clave simétrica y asimétrica. Redes Zone. Recuperado el 12 de marzo de 2023, de: https://www.redeszone.net/tutoriales/seguridad/criptografia-algoritmos-clave-simetrica-asimetrica/",
            url: "https://www.redeszone.net/tutoriales/seguridad/criptografia-algoritmos-clave-simetrica-asimetrica/",
          },
          {
            label: "[3] Encriptación Simétrica y Asimétrica: Conoce sus diferencias. GB advisors.  Recuperado el 12 de marzo de 2023, de: https://www.gb-advisors.com/es/encriptacion-simetrica-y-asimetrica-conoce-sus-diferencias/",
            url: "https://www.gb-advisors.com/es/encriptacion-simetrica-y-asimetrica-conoce-sus-diferencias/",
          },
          {
            label: "[4] ¿Qué pasó con FTX? Esto es lo que tienes que saber. New York Times. Recuperado el 14 de marzo de 2023, de: https://www.nytimes.com/es/2022/11/14/espanol/ftx-criptomonedas-que-paso.html",
            url: "https://www.nytimes.com/es/2022/11/14/espanol/ftx-criptomonedas-que-paso.html",
          },
          {
            label: "[5] Pastor, J. 315 millones de euros en bitcoins: el hombre que lleva años buscando un disco duro en un vertedero. Xataka. Recuperado el 14 de marzo de 2023, de: https://www.xataka.com/criptomonedas/315-millones-euros-bitcoins-hombre-que-lleva-anos-buscando-disco-duro-vertedero-1",
            url: "https://www.xataka.com/criptomonedas/315-millones-euros-bitcoins-hombre-que-lleva-anos-buscando-disco-duro-vertedero-1",
          },
          {
            label: "[6] Principales factores que causan una pérdida de información. Recovery labs. Recuperado el 14 de marzo de 2023, de: https://www.recoverylabs.com/ayuda-y-soporte/data-recovery-white-papers/informes/principales-factores-que-causan-una-perdida-de-informacion/",
            url: "https://www.recoverylabs.com/ayuda-y-soporte/data-recovery-white-papers/informes/principales-factores-que-causan-una-perdida-de-informacion/",
          },
          {
            label: "[7] Ledger Nano S: Secure multi-currency hardware wallet. Ledger. Recuperado el 14 de marzo de 2023, de: https://www.ledger.com/ledger-nano-s-secure-multi-currency-hardware-wallet",
            url: "https://www.ledger.com/ledger-nano-s-secure-multi-currency-hardware-wallet",
          },
          {
            label: "[8] Pastor, J. Un vistazo a Opera Crypto Browser, un \"navegador Web3\" que nos prepara para un mundo de dApps, NFTs y criptomonedas. Xataka. Recuperado el 15 de marzo de 2023, de: https://www.xataka.com/aplicaciones/vistazo-a-opera-crypto-browser-navegador-web3-que-nos-prepara-para-mundo-dapps-nfts-criptomonedas",
            url: "https://www.xataka.com/aplicaciones/vistazo-a-opera-crypto-browser-navegador-web3-que-nos-prepara-para-mundo-dapps-nfts-criptomonedas",
          },
          {
            label: "[9] Freire, D. Samsung apuesta por las criptomonedas y el blockchain en la última actualización de sus móviles Galaxy. Andro 4 all. Recuperado el 15 de marzo de 2023, de: https://andro4all.com/samsung/samsung-apuesta-por-las-criptomonedas-y-el-blockchain-en-la-ultima-actualizacion-de-sus-moviles-galaxy",
            url: "https://andro4all.com/samsung/samsung-apuesta-por-las-criptomonedas-y-el-blockchain-en-la-ultima-actualizacion-de-sus-moviles-galaxy",
          },
        ],
      },
    ],
  },
  {
    slug: "level-1-guide-3-bitcoin-blockchain-smart-contracts",
    level: 1,
    title: "Guía 3: Qué es Bitcoin (BTC)",
    description: "Valor de BTC, Lightning Network, Blockchain, SHA-256 y contratos inteligentes.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Introduccion+Bitcoin",
        paragraphs: [
          "Bitcoin nace en 2008 por una persona o equipo bajo el pseudónimo de Satoshi Nakamoto. Existen distintas teorías sobre su origen, pero su aparición abrió un nuevo camino tecnológico y financiero.",
          "Esta alternativa busca consolidarse como moneda digital de intercambio con adopción creciente.",
          "La primera transacción popular de Bitcoin fue la compra de dos pizzas en 2010 por alrededor de 10,000 BTC, evento conocido como Bitcoin Pizza Day [1].",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+BTC",
        paragraphs: [
          "Antes de profundizar, es importante entender cómo se representa BTC en mercado, qué factores explican su precio y cómo influyen los participantes del ecosistema.",
        ],
      },
      {
        title: "Abreviación de Bitcoin",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Abreviacion+de+Bitcoin",
        paragraphs: [
          "Al igual que las divisas tradicionales (USD, EUR, GBP, MXN), Bitcoin usa abreviación: BTC.",
          "El par de análisis más común es BTC/USD, ya que permite observar precio, tendencia y volatilidad frente al dólar.",
          "En esta guía se incluye una gráfica de referencia BTC/USD antes de la siguiente sección, en línea con el análisis de precio.",
        ],
      },
      {
        title: "Cómo se determina el valor de BTC",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Valor+de+BTC",
        paragraphs: [
          "En general, el valor de las criptomonedas puede explicarse por tres factores principales [2]: oferta y demanda, percepción y especulación, y ecosistema.",
          "Oferta y demanda: Bitcoin tiene un límite de 21 millones de monedas y 1 BTC equivale a 100 millones de satoshis [2]. La escasez progresiva influye en precio por la ley de oferta y demanda [3].",
          "Percepción y especulación: al ser la primera criptomoneda, BTC suele marcar tendencia en el mercado; noticias, opiniones y narrativas cambian expectativas de compra o venta.",
          "Ecosistema: la actividad de grandes tenedores (ballenas), la seguridad de exchanges y eventos de fraude o hackeo pueden impactar confianza, liquidez y valuación [4].",
        ],
        bullets: [
          "Oferta y demanda.",
          "Percepción y especulación.",
          "Ecosistema.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Desarrollo",
        paragraphs: [
          "Para comprender mejor Bitcoin, conviene revisar su escalabilidad, su arquitectura Blockchain y los mecanismos criptográficos que sostienen su seguridad.",
        ],
      },
      {
        title: "Qué es Lighting Network",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Lighting+Network",
        paragraphs: [
          "Bitcoin procesa alrededor de 7 transacciones por segundo, cifra limitada para un entorno global de alto volumen.",
          "Por ello surge Lighting Network como capa adicional para desahogar parte de la demanda transaccional y mejorar velocidad [5].",
          "Se describe como una extensión que permite procesos casi instantáneos, aunque depende de canales de pago y puede enfrentar límites de liquidez.",
          "En el material original se relaciona su operación con el principio de no maleabilidad [4].",
        ],
      },
      {
        title: "Qué es Blockchain",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Que+es+Blockchain",
        paragraphs: [
          "Blockchain recibe su nombre por la forma en que asienta registros: cada operación se agrupa en bloques enlazados con las operaciones previas.",
          "Cada transacción verifica emisor, destinatario, monto e integridad de datos. Cuando la red valida el registro, la operación queda confirmada.",
          "Si existe una inconsistencia, la operación se rechaza y los fondos se conservan en la cuenta del emisor. Si el bloque actual está lleno, la operación espera el siguiente.",
          "De forma didáctica: al encadenar varias transacciones, cada bloque hereda contexto previo y construye trazabilidad del historial.",
        ],
      },
      {
        title: "Importancia del algoritmo SHA-256",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=SHA-256",
        paragraphs: [
          "SHA proviene de Secure Hash Algorithm y en Bitcoin se usa SHA-256 para generar huellas criptográficas de la información [6].",
          "Existen hashes de distintas longitudes (128, 256, 512 bits, entre otras). En el caso de SHA-256, la salida mantiene tamaño fijo aunque la entrada cambie de longitud.",
          "Un cambio mínimo en la entrada produce una salida totalmente distinta, propiedad clave para detectar alteraciones.",
          "También existe interés creciente en evaluar la robustez de estos esquemas frente al avance del cómputo cuántico.",
        ],
      },
      {
        title: "Qué son los smart contracts",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Smart+Contracts",
        paragraphs: [
          "Los contratos inteligentes son una abstracción digital de los contratos tradicionales: cuando se cumplen condiciones predefinidas, su ejecución ocurre de forma automática [7].",
          "En la analogía legal, pueden verse como mecanismos de validación que reducen fricción y aportan trazabilidad al acuerdo.",
        ],
      },
      {
        title: "Proceso de los contratos inteligentes",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Proceso+Smart+Contracts",
        paragraphs: [
          "El flujo se explica como una cadena de firmas y validaciones: se firma un mensaje, se verifica por otra parte, y así sucesivamente con los participantes definidos.",
          "La comparación entre mensaje original y su versión cifrada permite detectar incompatibilidades; si no coinciden, se detiene el proceso.",
          "Este control busca garantizar integridad de datos y evitar corrupción de transacciones en tránsito [4].",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Conclusion",
        paragraphs: [
          "Con esta tercera guía se completa la primera fase del programa, enfocada en fundamentos cripto explicados con ejemplos sencillos.",
          "Se resumieron conceptos técnicos de forma accesible para facilitar comprensión y continuidad de aprendizaje.",
          "La siguiente fase incorpora un abanico más amplio de temas que requieren mayor paciencia y profundidad.",
          "Si deseas profundizar en Bitcoin, se recomienda leer su whitepaper en español.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Las ballenas son usuarios con mil o más monedas de un activo; por su volumen, pueden influir en tendencias.",
          "2. Los satoshis son a Bitcoin lo que los centavos a una moneda fiat.",
          "3. Las ballenas pueden compararse con accionistas mayoritarios por su capacidad de incidir en el mercado.",
          "4. El principio de no maleabilidad busca garantizar que un mensaje no se altere durante la transmisión.",
          "5. En algoritmos asimétricos no se utiliza la misma llave para cifrar y descifrar.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1]  ¡Feliz Bitcoin Pizza Day! Así se compró la pizza más cara de la historia. Milenio Negocios. Recuperado el 18 de marzo de 2023, de: https://www.milenio.com/negocios/bitcoin-pizza-day-compro-pizza-cara-historia",
            url: "https://www.milenio.com/negocios/bitcoin-pizza-day-compro-pizza-cara-historia",
          },
          {
            label: "[2] 3 factores clave que determinan el valor de las criptomonedas. Expansión MX. Recuperado el 21 de marzo de 2023, de: https://expansion.mx/mercados/2022/02/22/3-factores-clave-que-determinan-el-valor-de-las-criptomonedas",
            url: "https://expansion.mx/mercados/2022/02/22/3-factores-clave-que-determinan-el-valor-de-las-criptomonedas",
          },
          {
            label: "[3] Sevilla, A. Ley de oferta y demanda. Economipedia. Recuperado el 21 de marzo de 2023, de: https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html",
            url: "https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html",
          },
          {
            label: "[4] Espallargas, A. Grandes criptoestafas: los mayores fraudes y hackeos en la era del bitcoin. GQ. Recuperado el 23 de marzo de 2023, de: https://www.revistagq.com/noticias/articulo/estafas-criptomoneda-bitcoin-fraude-hackeo",
            url: "https://www.revistagq.com/noticias/articulo/estafas-criptomoneda-bitcoin-fraude-hackeo",
          },
          {
            label: "[5] ¿Qué es y cómo funciona la Lightning network? Bit 2 me. Recuperado el 22 de marzo de 2023, de: https://academy.bit2me.com/lightning-network/",
            url: "https://academy.bit2me.com/lightning-network/",
          },
          {
            label: "[6] Donohue, B. ¿Qué Es Un Hash Y Cómo Funciona? Kaspersky. Recuperado el 23 de marzo de 2023 de: https://latam.kaspersky.com/blog/que-es-un-hash-y-como-funciona/2806/",
            url: "https://latam.kaspersky.com/blog/que-es-un-hash-y-como-funciona/2806/",
          },
          {
            label: "[7] Smart contracts, ¿qué son y para qué sirven? Santander. Recuperado el 24 de marzo de: https://www.santander.com/es/stories/smart-contracts",
            url: "https://www.santander.com/es/stories/smart-contracts",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-4-que-es-ethereum",
    level: 2,
    title: "Guía 4: ¿Qué es Ethereum?",
    description: "Plataforma Ethereum, EVM, ETH, gas fees, bifurcación y evolución a Ethereum 2.0.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+Ethereum",
        paragraphs: [
          "Ethereum es un cambia-reglas. Es uno de los desarrollos más adelantados de la era cripto porque abrió un mar de posibilidades para tecnología y finanzas.",
          "En esta guía se explican paso a paso sus conceptos clave y el impacto que ha tenido al abrir nuevos caminos de desarrollo descentralizado.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Ethereum",
        paragraphs: [
          "Para entender Ethereum hay que separar plataforma, moneda nativa, ejecución de contratos y arquitectura de aplicaciones.",
        ],
      },
      {
        title: "Que es Ethereum",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Que+es+Ethereum",
        paragraphs: [
          "Su creador principal es Vitalik Buterin. Ethereum no es una criptomoneda; es una plataforma de aplicaciones descentralizadas.",
          "Esto permite construir software (apps móviles, sitios web o aplicaciones de escritorio) cuya información puede alojarse en infraestructura blockchain.",
          "En términos simples, Ethereum habilita un back-end robusto y descentralizado, mientras el equipo de producto se concentra en front-end y experiencia de usuario.",
          "La lógica se parece al cómputo en la nube: proveedores como GCP [1], AWS [2] o Azure cobran por servicio; en blockchain, gran parte del costo operativo aparece como comisión por transacción.",
        ],
        bullets: [
          "Vista: interfaz con la que interactúa el usuario.",
          "Modelo: capa de datos y reglas de negocio.",
          "Controlador: lógica que procesa solicitudes y devuelve respuestas.",
        ],
      },
      {
        title: "Que es Ethereum Virtual Machine (EVM)",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=EVM",
        paragraphs: [
          "A través de la EVM se implementan y ejecutan los smart contracts [2].",
          "La principal ventaja de una máquina virtual es la compatibilidad: reduce problemas entre sistemas operativos, software o arquitecturas de hardware.",
          "Su principal desventaja es que puede ser más demandante en recursos de cómputo.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Desarrollo",
        paragraphs: [
          "La evolución de Ethereum involucra su moneda nativa, costos de red, cambios de consenso, bifurcaciones y ecosistema de tokens.",
        ],
      },
      {
        title: "Qué es Ether (ETH)",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Ether+ETH",
        paragraphs: [
          "Ether (ETH) es la moneda nativa de la red Ethereum. Red y moneda no son lo mismo.",
          "A diferencia de BTC, ETH no maneja un límite fijo como 21 millones. Su precio depende de adopción, actividad de la red y especulación.",
          "Como referencia general, el reflejo de transacciones en Ethereum suele ser más rápido que en Bitcoin [3].",
          "Un Gwei es una subdivisión de ETH: 1 ETH equivale a 1,000,000,000 Gwei.",
        ],
      },
      {
        title: "Qué son los gases o fees",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Gases+o+Fees",
        paragraphs: [
          "Los gases o fees son la tarifa que cobra la red por mover valor o ejecutar operaciones.",
          "Su costo es variable y depende de la demanda de la red, complejidad de la transacción y prioridad de confirmación.",
          "Antes de mejoras recientes del protocolo, los costos y tiempos fueron notablemente más altos en ciertos periodos.",
        ],
      },
      {
        title: "Bifurcación de Ethereum y Ethereum Classic",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Ethereum+vs+Ethereum+Classic",
        paragraphs: [
          "En su etapa inicial, Ethereum atrajo capital comunitario por crowdfunding y logró gran atención del mercado [4].",
          "La bifurcación se relaciona con un incidente de seguridad en el contexto de una DAO [4][5].",
          "Como resultado, se separaron dos rutas: Ethereum Classic (continuidad original) y Ethereum (rama con cambios priorizando seguridad).",
          "Aunque comparten origen, su gobernanza y evolución técnica divergieron con el tiempo.",
        ],
      },
      {
        title: "Ethereum 2.0",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Ethereum+2.0",
        paragraphs: [
          "A finales de 2022, Ethereum realizó The Merge, migrando de Proof of Work (PoW) [3] a Proof of Stake (PoS) [6].",
          "En PoS, participantes bloquean activos para validar operaciones y recibir recompensas [7], en lugar de depender de minado intensivo en cómputo.",
          "Este cambio mejoró eficiencia energética y sentó bases para escalar mejor el protocolo.",
        ],
        bullets: [
          "Menor consumo energético.",
          "Mayor capacidad de mejora en escalabilidad.",
          "Mejoras graduales en tiempos y costos de operación.",
        ],
      },
      {
        title: "Qué son los tokens nativos y los tokens no nativos",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Tokens+Nativos+y+No+Nativos",
        paragraphs: [
          "Token nativo: moneda originaria de una red (ETH en Ethereum, SOL en Solana, ADA en Cardano).",
          "Token no nativo: activo emitido sobre la infraestructura de otra red principal [8][9].",
          "Este modelo permite lanzar proyectos sin construir un protocolo desde cero.",
          "Un ejemplo de adopción empresarial fue Polygon (MATIC), red basada en Ethereum con presencia en programas como el acelerador de Disney [10].",
        ],
      },
      {
        title: "¿Cuál es la importancia de Ethereum?",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Importancia+de+Ethereum",
        paragraphs: [
          "Ethereum es precursor de propuestas clave del ecosistema: NFTs, DeFi, GameFi y componentes relevantes para metaverso y evolución de Web3.",
          "Su aporte central es cambiar el paradigma de desarrollo y finanzas al introducir lógica programable sobre infraestructura descentralizada.",
          "Especialmente en DeFi, implica desaprender prácticas tradicionales para adoptar un nuevo sistema con reglas distintas.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/111827/e5e7eb?text=Conclusion",
        paragraphs: [
          "Ethereum exige una curva de aprendizaje mayor sobre la base de Bitcoin, pero abre una nueva etapa para el desarrollo de software descentralizado.",
          "Esta es la cuarta guía del programa y la primera de la segunda faceta (Fase 2), enfocada en propuestas vigentes que cambian el status quo tecnológico.",
          "Para profundizar en lo técnico, se recomienda revisar el whitepaper de Ethereum.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. GCP significa Google Cloud Platform.",
          "2. AWS significa Amazon Web Services.",
          "3. Prueba de trabajo, Proof of Work, se abrevia PoW.",
          "4. Decentralized Autonomous Organization se abrevia DAO.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Hernández, R. El patrón modelo-vista-controlador: Arquitectura y frameworks explicados. Free code camp. Recuperado el 25 de marzo de 2023, https://www.freecodecamp.org/espanol/news/el-modelo-de-arquitectura-view-controller-pattern/",
            url: "https://www.freecodecamp.org/espanol/news/el-modelo-de-arquitectura-view-controller-pattern/",
          },
          {
            label: "[2] Juarros, S. Ethereum Virtual Machine, el corazón de la bestia. Ripio. Recuperado el 24 de marzo de 2023, de: https://launchpad.ripio.com/blog/ethereum-virtual-machine-el-corazon-de-la-bestia",
            url: "https://launchpad.ripio.com/blog/ethereum-virtual-machine-el-corazon-de-la-bestia",
          },
          {
            label: "[3] Maldonado, J. ¿Cuánto tarda una transacción de criptomonedas?  Cointelegraph en español. Recuperado el 25 de marzo de 2023, de: https://es.cointelegraph.com/explained/how-long-does-a-cryptocurrency-transaction-take",
            url: "https://es.cointelegraph.com/explained/how-long-does-a-cryptocurrency-transaction-take",
          },
          {
            label: "[4] Ethereum vs. Ethereum Classic. Alexandria, Coin Market Cap. Recuperado el 25 de febrero de 2023, de: https://coinmarketcap.com/alexandria/es/article/ethereum-vs-ethereum-classic",
            url: "https://coinmarketcap.com/alexandria/es/article/ethereum-vs-ethereum-classic",
          },
          {
            label: "[5] Juarros, S. Qué es una DAO. Ripio. Recuperado el 26 de marzo de 2023, de: https://launchpad.ripio.com/blog/que-es-una-dao#:~:text=%E2%80%8DLas%20DAO%20son%20una%20forma,o%20sea%20organizaci%C3%B3n%20aut%C3%B3noma%20descentralizada.",
            url: "https://launchpad.ripio.com/blog/que-es-una-dao#:~:text=%E2%80%8DLas%20DAO%20son%20una%20forma,o%20sea%20organizaci%C3%B3n%20aut%C3%B3noma%20descentralizada.",
          },
          {
            label: "[6] Pastor, J. Qué es Ethereum 2.0: la criptodivisa renace con una nueva cadena de bloques, más transacciones y el adiós a la minería con GPUs. Xataka. Recuperado el 26 de marzo de: https://www.xataka.com/criptomonedas/que-ethereum-2-0-criptodivisa-renace-nueva-cadena-bloques-transacciones-adios-a-mineria-gpus",
            url: "https://www.xataka.com/criptomonedas/que-ethereum-2-0-criptodivisa-renace-nueva-cadena-bloques-transacciones-adios-a-mineria-gpus",
          },
          {
            label: "[7] ¿Qué es Proof of Stake (PoS)? Binance. Recuperado el 26 de marzo de 2023, de: 	https://academy.binance.com/es/articles/proof-of-stake-explained",
            url: "https://academy.binance.com/es/articles/proof-of-stake-explained",
          },
          {
            label: "[8] ¿Qué es un token? Coinbase. Recuperado el 27 de marzo de 2023, de: https://www.coinbase.com/es-LA/learn/crypto-basics/what-is-a-token",
            url: "https://www.coinbase.com/es-LA/learn/crypto-basics/what-is-a-token",
          },
          {
            label: "[9] ¿Qué son los tokens nativos? 24 noticias Bitcoin. Recuperado el 27 de marzo de 2023, de: https://24noticiasbitcoin.com/que-son-los-tokens-nativos/",
            url: "https://24noticiasbitcoin.com/que-son-los-tokens-nativos/",
          },
          {
            label: "[10] Velasquez, F. MATIC Surges as Disney Chooses Polygon for Accelerator Program. Coindesk. Recuperado el 28 de marzo de 2023, de: https://www.coindesk.com/business/2022/07/13/polygon-joins-disneys-accelerator-program-to-develop-ar-nft-and-ai-experiences/",
            url: "https://www.coindesk.com/business/2022/07/13/polygon-joins-disneys-accelerator-program-to-develop-ar-nft-and-ai-experiences/",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-5-web3-y-dapps",
    level: 2,
    title: "Guía 5: Qué es la Web 3.0 y las Aplicaciones Descentralizadas (DApps)",
    description: "Evolución de la web, DApps, descentralización y acceso inicial al ecosistema Web3.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+Web3",
        paragraphs: [
          "La web ha sufrido cambios profundos en tres ciclos: una primera etapa de navegación y construcción de sitios, una segunda marcada por redes sociales y cómputo en la nube, y una tercera enfocada en descentralización e integración de nuevas capacidades digitales.",
          "Actualmente vivimos la transición de Web 2 hacia Web 3.0, con el objetivo de devolver mayor privacidad, control y propiedad digital a las personas usuarias.",
          "En el material original se muestra una referencia visual de esta evolución (Fabric Ventures) para entender el cambio de paradigma entre etapas.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Web",
        paragraphs: [
          "La web es un sistema de transmisión de información sobre Internet [2], mientras que Internet es una red informática global descentralizada que conecta computadoras y servicios [3].",
          "Desde su origen, la web perseguía ser descentralizada, indexada y accesible para todos. En la práctica, muchas dinámicas de mercado concentraron datos y poder en pocas compañías tecnológicas.",
          "La propuesta de Web 3.0 retoma esa visión original: reducir dependencia de intermediarios y fortalecer identidad, privacidad y autonomía del usuario.",
          "El texto base también subraya que distinguir web e Internet ayuda a comprender por qué Web 3.0 no es solo una moda, sino una reconfiguración de capas tecnológicas y de gobernanza digital.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo+Web3",
        paragraphs: [
          "Una forma simple de entender el cambio es: Web 2 es ver Internet; Web 3 es vivir Internet.",
          "La Web 3.0 combina poder de cómputo actual con blockchain y criptografía para habilitar una web más descentralizada e indexada.",
          "El concepto de indexación consiste en ordenar y clasificar contenidos para facilitar su descubrimiento [4]. En este punto, Web 3.0 busca disminuir la monopolización de búsqueda y monetización basada en datos personales.",
        ],
      },
      {
        title: "¿Qué son las aplicaciones descentralizadas (DApps)?",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=DApps",
        paragraphs: [
          "Las aplicaciones descentralizadas (DApps) son programas digitales construidos con contratos inteligentes y ejecutados sobre redes blockchain, en lugar de servidores centralizados [5].",
          "Su principal propuesta es mejorar seguridad, trazabilidad y descentralización de la operación.",
          "Existen DApps en redes sociales, intercambio de activos, metaversos y otras verticales de economía digital programable.",
        ],
        bullets: [
          "Redes sociales descentralizadas: Damus, Phaver, Bluesky y Mastodon.",
          "Intercambio descentralizado: Uniswap (intercambio uno a uno entre usuarios de una misma red).",
          "Entornos virtuales: Decentraland (interacción social y economía digital con activos tokenizados).",
        ],
      },
      {
        title: "¿Qué pretende la Web 3.0?",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Objetivos+Web3",
        paragraphs: [
          "Web 3.0 pretende integrarse con NFTs y metaverso para habilitar identidad digital, autenticación avanzada y propiedad verificable de activos.",
          "Además de lo técnico, propone una nueva relación entre usuario, datos, servicios y responsabilidad individual en seguridad digital.",
        ],
        bullets: [
          "Descentralización del internet y menor concentración de poder en plataformas dominantes.",
          "Modelos passwordless mediante autenticación con activos digitales.",
          "Creación de perfiles únicos e identidad digital verificable.",
          "Control de datos por parte del usuario.",
          "Integración de NFTs con metaverso para acceso, avatares y objetos digitales interoperables.",
          "Mayor demanda de cultura de ciberseguridad para reducir secuestros digitales, fraude e ingeniería social [7].",
        ],
      },
      {
        title: "Cómo acceder a los inicios del internet descentralizado",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Como+Acceder+a+Web3",
        paragraphs: [
          "Actualmente, el acceso inicial al ecosistema descentralizado suele darse mediante wallets, navegadores con soporte Web3 e interacción directa con DApps [8].",
          "La experiencia mejora cuando wallet, navegador y aplicación comparten estándares de conexión, firma y autorización.",
        ],
        bullets: [
          "Wallets cripto para custodiar activos e iniciar sesión en aplicaciones.",
          "Navegadores Web3 (por ejemplo, Opera con integración nativa).",
          "Interacción con DApps para usar servicios, transferir activos y ejecutar operaciones.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Conclusion",
        paragraphs: [
          "La convergencia entre Web 3.0, criptomonedas, NFTs, ciberseguridad e inteligencia artificial marca una transición tecnológica profunda que exige nuevos hábitos y nuevas competencias.",
          "Ethereum es una plataforma clave en este proceso, pero el valor real está en comprender la arquitectura completa y aplicar buenas prácticas de seguridad digital.",
          "Esta es la quinta guía del programa y forma parte de la Fase 2, que profundiza en propuestas vigentes y su aplicación práctica para usuarios y desarrolladores.",
          "En las siguientes entregas se profundizará en NFTs, metaverso e identidad digital.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Intercambio uno a uno significa que el intercambio de activos ocurre entre usuarios de una misma red.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Web3 la evolución de Internet que está cada vez más cerca. Grupo 5. Recuperado el 31 de marzo de 2023, de: https://www.grupo5.com/noticia/586_web3-la-evolucion-de-internet-que-esta-cada-vez-mas-cerca.htm",
            url: "https://www.grupo5.com/noticia/586_web3-la-evolucion-de-internet-que-esta-cada-vez-mas-cerca.htm",
          },
          {
            label: "[2] Significado de Web. Significados.com. Recuperado el 29 de marzo de 2023, de: https://www.significados.com/web/",
            url: "https://www.significados.com/web/",
          },
          {
            label: "[3] Significado de Internet. Significados.com. Recuperado el 29 de marzo de 2023, de: https://www.significados.com/internet/",
            url: "https://www.significados.com/internet/",
          },
          {
            label: "[4] Botey, J. ¿Qué es la indexación web o indexar un contenido y cómo hacerlo? Inboundcycle. Recuperado el 30 de marzo de 2023, de: https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-la-indexacion-o-indexar-un-contenido",
            url: "https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-la-indexacion-o-indexar-un-contenido",
          },
          {
            label: "[5] ¿Qué son las Aplicaciones Descentralizadas (DApps)? Binance academy. Recuperado el 30 de marzo de 2023, de: https://academy.binance.com/es/articles/what-are-decentralized-applications-dapps",
            url: "https://academy.binance.com/es/articles/what-are-decentralized-applications-dapps",
          },
          {
            label: "[6] Web 3.0 & blockchain: el futuro de Internet. Santander X. Recuperado el 31 de marzo de 2023, de: https://www.santanderx.com/es/blog/web-3-0.html",
            url: "https://www.santanderx.com/es/blog/web-3-0.html",
          },
          {
            label: "[7] Estudio revela cuán vulnerables son los mexicanos a ciberataques. Wired. Recuperado el 31 de marzo de 2023, de: https://es.wired.com/articulos/ciberataques-contra-mexicanos-estudio#:~:text=De%20acuerdo%20con%20los%20datos,en%20los%20últimos%2012%20meses",
            url: "https://es.wired.com/articulos/ciberataques-contra-mexicanos-estudio#:~:text=De%20acuerdo%20con%20los%20datos,en%20los%20últimos%2012%20meses",
          },
          {
            label: "[8]¿Qué es la web 3? Binance. Recuperado el 1 de abril de 2023, de: https://www.binance.com/es/blog/ecosystem/qué-es-la-web-3-7726791091349681472",
            url: "https://www.binance.com/es/blog/ecosystem/qué-es-la-web-3-7726791091349681472",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-6-nfts",
    level: 2,
    title: "Guía 6: Qué son los Non-Fungible Tokens (NFTs)",
    description: "NFTs desde antecedentes, utilidad, valuación, compra y seguridad.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+NFTs",
        paragraphs: [
          "Los Non-Fungible Tokens (NFTs), o tokens no fungibles, son una forma digital de representar propiedad, autenticidad y escasez.",
          "En esta guía se abordan sus antecedentes, su componente técnico, su utilidad práctica, los factores que influyen en su precio y los cuidados clave de seguridad para usarlos correctamente.",
        ],
      },
      {
        title: "¿Qué son los NFTs? Desde sus remotos antecedentes",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Antecedentes+NFTs",
        paragraphs: [
          "Los NFTs pueden entenderse como una abstracción digital del valor que los humanos asignamos a objetos y pertenencias [1].",
          "Esa lógica está directamente relacionada con oferta y demanda: cuánto existe de un bien, qué tan difícil es conseguirlo y qué tan deseado es por otras personas.",
          "Al inicio, muchos NFTs nacieron bajo la idea de piezas únicas; después evolucionaron a modelos de alta escasez e incluso colecciones más amplias.",
        ],
        bullets: [
          "Objetos con baja escasez: se consiguen con facilidad y su precio suele ser accesible.",
          "Objetos con alta escasez: tienen reglas o límites de adquisición, y su precio es mayor.",
          "Objetos únicos: son irrepetibles y, en muchos casos, de muy alto valor.",
        ],
      },
      {
        title: "Comparación con el arte",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=NFTs+y+Arte",
        paragraphs: [
          "La analogía con el arte ayuda a entender los NFTs: una obra valiosa requiere autenticidad y certificación de procedencia.",
          "En blockchain, ese certificado puede representarse como un activo digital con registro público de propiedad y trazabilidad de transacciones.",
          "Además, muchos contratos permiten programar regalías para que el creador reciba una comisión en reventas posteriores.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Desarrollo",
        paragraphs: [
          "El ecosistema NFT combina contratos inteligentes, protocolos de tokenización, mercados especializados y dinámicas de comunidad.",
          "Entender estos elementos en conjunto permite diferenciar proyectos con utilidad real de proyectos puramente especulativos.",
        ],
      },
      {
        title: "¿Qué son los NFTs? Desde el punto de vista tecnológico",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=NFTs+desde+lo+Tecnologico",
        paragraphs: [
          "Desde lo técnico, un NFT es un token no fungible emitido mediante contratos inteligentes sobre una blockchain.",
          "El contrato define reglas de propiedad, transferencia, escasez, metadatos y condiciones económicas del activo.",
          "En términos prácticos, se crea un contenido digital (imagen, video, gif, documento o publicación) y se vincula al contrato para dejar constancia verificable de su emisión y titularidad.",
        ],
      },
      {
        title: "Tecnicismo de los NFTs",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Tecnicismo+NFT",
        paragraphs: [
          "El proceso de creación se conoce como acuñación o minteo (mint): el activo digital se registra en blockchain junto con su lógica de contrato.",
          "No existe un único estándar. Cada red y cada protocolo define capacidades distintas para fungibilidad, unicidad, composición y transferencias.",
          "En Ethereum, algunos de los estándares más utilizados son [2]:",
        ],
        bullets: [
          "ERC-721: estándar más común para NFTs únicos.",
          "ERC-20: pensado para tokens fungibles, con usos limitados en esquemas híbridos.",
          "ERC-1155: permite manejar tokens fungibles y no fungibles en un mismo contrato.",
          "ERC-998: enfocado en tokens compuestos (activos que contienen otros activos).",
        ],
      },
      {
        title: "Utilidad",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Utilidad+de+los+NFTs",
        paragraphs: [
          "Los NFTs no se limitan al arte digital: pueden usarse en membresías, boletaje, certificación de autenticidad, videojuegos, logística y experiencias de marca.",
          "Su potencial se relaciona con exclusividad verificable y con beneficios programables para comunidades y clientes.",
          "También existen los POAP, NFTs usados como prueba de asistencia a eventos, talleres o webinars [5].",
          "En Web 3.0, su utilidad se conecta con identidad digital, acceso a servicios y experiencias interoperables entre plataformas.",
        ],
        bullets: [
          "Arte y coleccionables digitales.",
          "Boletos y accesos exclusivos (incluyendo pases de larga duración) [4].",
          "Activos para videojuegos y metaverso.",
          "Certificados de autenticidad para productos físicos [3].",
          "Pruebas de asistencia y participación comunitaria (POAP) [5].",
        ],
      },
      {
        title: "¿Qué determina sus precios? y ejemplos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Precios+y+Ejemplos+NFT",
        paragraphs: [
          "El precio de un NFT depende de múltiples factores: red/protocolo donde está alojado, reputación del artista o proyecto, rareza, utilidad, demanda de la comunidad y contexto general de mercado.",
          "También influye si es una pieza única o parte de colección, su método de creación (manual o algorítmico), y el precio de la criptomoneda base de la red.",
          "Colecciones y casos relevantes mencionados en el material: CryptoKitties, CryptoPunks, Bored Ape Yacht Club (BAYC) y la obra 5000 Days de Beeple.",
        ],
        bullets: [
          "CryptoKitties: colección temprana con mecánicas de combinación y juego.",
          "CryptoPunks: 10,000 piezas generadas algorítmicamente, referentes históricos del sector.",
          "BAYC: colección con alta exposición mediática y expansión hacia ApeCoin [6].",
          "Beeple, 5000 Days: caso emblemático de valuación multimillonaria [7].",
        ],
      },
      {
        title: "Dónde comprarlos",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Donde+Comprar+NFTs",
        paragraphs: [
          "Los NFTs se compran en marketplaces especializados; uno de los más conocidos es OpenSea.",
          "Para almacenarlos y gestionarlos se usan billeteras compatibles con la red donde fue emitido el token.",
          "La seguridad operativa es crítica: una mala gestión de llaves privadas o frase de recuperación puede llevar a pérdida total de los activos.",
          "La visualización depende del protocolo de emisión y del soporte de wallet o herramienta de portfolio utilizada.",
        ],
      },
      {
        title: "Otras cosas que también debes saber de los NFTs",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Ecosistema+NFT",
        paragraphs: [
          "Plataformas sociales como Instagram y Twitter han experimentado con integración de NFTs para perfil y visualización de coleccionables, aunque sus estrategias han cambiado con el mercado.",
          "El ecosistema NFT no se limita a Ethereum; también hay actividad en redes como Cardano, Avalanche, Solana, BNB Chain y Polygon.",
          "La adopción sigue evolucionando rápidamente, por lo que mantener aprendizaje continuo es parte esencial del proceso.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Conclusion",
        paragraphs: [
          "Los NFTs abren una capa importante de propiedad digital para Web 3.0 y metaverso, pero su uso exige responsabilidad alta en seguridad y gestión de credenciales.",
          "Más allá del precio, su valor también está en autenticación, acceso e interoperabilidad de identidad y activos.",
          "Esta es la sexta entrega de las guías y también forma parte de la Fase 2, donde aumentan la complejidad técnica y la aplicación práctica de los conceptos.",
          "El enfoque recomendado es mantener aprendizaje constante, criterio técnico y buenas prácticas de protección de cuentas y activos.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Ejemplos de reglas de acceso por escasez: en ciertos casos de marcas como Ferrari o lanzamientos específicos de Jordan, la compra de modelos nuevos puede condicionarse a historial de compra o posesión previa.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Del villar, L. Listin Diario. Recuperado el 3 de abril de 2023, de: https://listindiario.com/la-vida/2018/01/11/498170/saber-cual-es-el-valor-de-las-cosas#:~:text=El%20ser%20humano%20es%20el,los%20seres%20y%20los%20objetos.",
            url: "https://listindiario.com/la-vida/2018/01/11/498170/saber-cual-es-el-valor-de-las-cosas#:~:text=El%20ser%20humano%20es%20el,los%20seres%20y%20los%20objetos.",
          },
          {
            label: "[2] Descubre los protocolos de NFT de Ethereum: la tecnología que está revolucionando la industria del arte digital y los videojuegos. Recuperado el 5 de abril de 2023, de: https://www.binance.com/es-LA/blog/nft/todo-sobre-los-nft-de-utilidad-los-tokens-%C3%BAnicos-con-aplicaciones-pr%C3%A1cticas-897687675250973294",
            url: "https://www.binance.com/es-LA/blog/nft/todo-sobre-los-nft-de-utilidad-los-tokens-%C3%BAnicos-con-aplicaciones-pr%C3%A1cticas-897687675250973294",
          },
          {
            label: "[3] Coca-Cola, Alibaba y Correos apuestan por los NFT y los hacen tangibles. Reason Why. Recuperado el 6 de abril de 2023, de: https://www.reasonwhy.es/actualidad/coca-cola-alibaba-correos-apuestan-nft",
            url: "https://www.reasonwhy.es/actualidad/coca-cola-alibaba-correos-apuestan-nft",
          },
          {
            label: "[4] ‘Coachella Key Collection’: Festival subasta NFT canjeables por boletos de por vida. El financiero. Recuperado el 6 de abril de 2023, de: https://www.elfinanciero.com.mx/entretenimiento/2022/02/05/coachella-key-collection-festival-subasta-nft-canjeables-por-boletos-de-por-vida/",
            url: "https://www.elfinanciero.com.mx/entretenimiento/2022/02/05/coachella-key-collection-festival-subasta-nft-canjeables-por-boletos-de-por-vida/",
          },
          {
            label: "[5] Catalán, R. ¿Qué es un POAP? Cryptoconexión. Recuperado el 5 de abril de 2023, de: https://cryptoconexion.com/que-es-un-poap/",
            url: "https://cryptoconexion.com/que-es-un-poap/",
          },
          {
            label: "[6] Bored Ape Yacht Club crea una criptomoneda: ¿qué se podrá hacer con ella? iProUp. Recuperado el 6 de abril de 2023, de: https://www.iproup.com/economia-digital/30214-bored-ape-yacht-club-crea-su-propia-criptomoneda",
            url: "https://www.iproup.com/economia-digital/30214-bored-ape-yacht-club-crea-su-propia-criptomoneda",
          },
          {
            label: "[7] Villagrán, M. Así es Beeple, el artista de la era digital. GQ México. Recuperado el 7 de abril de 2023, de: https://www.gq.com.mx/entretenimiento/articulo/beeple-artista-digital-quien-es",
            url: "https://www.gq.com.mx/entretenimiento/articulo/beeple-artista-digital-quien-es",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-7-metaverso",
    level: 2,
    title: "Guía 7: Qué es el Metaverso",
    description: "Conceptos del metaverso, plataformas, videojuegos, multiverso e implicaciones filosóficas.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+Metaverso",
        paragraphs: [
          "Imagina ser repartidor de pizza durante el día y, por la noche, convertirte en un hacker dentro de un mundo virtual totalmente inmersivo. Esa imagen resume bien el punto de partida del metaverso [1].",
          "Snow Crash, de Neal Stephenson, es una referencia fundacional para este concepto: una sociedad interconectada en mundos digitales con efectos reales en su vida cotidiana.",
          "Esta guía aterriza el metaverso desde su definición, su estado actual y sus implicaciones técnicas, económicas y sociales.",
        ],
      },
      {
        title: "¿Qué es el Metaverso?",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Que+es+el+Metaverso",
        paragraphs: [
          "El término metaverso combina la idea de ir más allá con universo: un entorno tridimensional donde las personas interactúan mediante avatares [2].",
          "Dentro de ese entorno se pueden realizar actividades del mundo físico: aprender, trabajar, jugar, comprar, asistir a eventos y convivir en experiencias inmersivas.",
          "Un avatar es la representación gráfica del usuario dentro de ese universo virtual.",
          "No existe un solo metaverso; hoy hay múltiples plataformas con reglas, economías y niveles de inmersión distintos.",
          "El debate de fondo es el poder de las Big Techs sobre datos, publicidad y comportamiento del usuario [3], y cómo eso puede trasladarse al mundo inmersivo.",
        ],
      },
      {
        title: "Principales Metaversos",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Principales+Metaversos",
        paragraphs: [
          "Meta apostó fuerte al metaverso desde la compra de Oculus en 2014 y el cambio de Facebook a Meta en 2021. Su entorno principal es Horizon, ligado a dispositivos dedicados como Quest [4][5].",
          "Además de Meta, compañías como Google, Microsoft, Amazon, Sony y Apple también aceleraron desarrollos en realidad extendida y experiencias inmersivas [6][7].",
          "Sin embargo, el mercado no tiene un ganador absoluto. La carrera se reparte entre metaverso, inteligencia artificial, hardware, contenido y economía digital.",
          "La adopción masiva aún enfrenta barreras: costo de dispositivos, rendimiento, comodidad de uso y valor percibido por usuarios finales.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Desarrollo",
        paragraphs: [
          "Para una experiencia inmersiva real, el metaverso requiere visores, sensores, cómputo gráfico y conectividad estable de baja latencia.",
          "También crecen experiencias híbridas y holográficas en entretenimiento, donde se mezclan elementos físicos y virtuales en tiempo real [8].",
          "Tras la pandemia de COVID-19 aumentó el interés por interacciones remotas para trabajo, educación y ocio, acelerando la conversación sobre metaverso.",
          "El reto no es solo técnico: también es económico y de accesibilidad, porque no todas las personas pueden costear el hardware especializado.",
        ],
      },
      {
        title: "Metaversos",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Metaversos+y+Videojuegos",
        paragraphs: [
          "Los videojuegos son hoy la vía más rápida de adopción del metaverso [9][10]: avatares, economías virtuales, mundos persistentes e interacción social.",
          "Minecraft, Fortnite y Sims funcionan como preámbulos claros por su creación de escenarios, personalización de identidad y modelos de interacción en mundos digitales.",
          "Casos como Crayta mostraron la idea de que usuarios creen y compartan sus propios juegos, aunque su continuidad dependió de plataformas como Google Stadia [11].",
          "Roblox consolidó esta lógica de plataforma al permitir múltiples experiencias dentro de un mismo ecosistema [12].",
          "The Sandbox y Decentraland añaden una capa diferencial al integrar criptomonedas y NFTs, habilitando propiedad digital y monetización programable [13][14].",
          "Esta convergencia entre videojuegos, finanzas digitales y activos virtuales suele resumirse como GameFi, con enfoque play-to-earn.",
          "Decentraland destaca por su enfoque nativo en Web3: identidad, activos digitales y decisiones económicas del usuario dentro de una DApp sobre Ethereum.",
        ],
        bullets: [
          "Avatar como representación digital persistente del usuario.",
          "Actividades virtuales equivalentes al mundo real (trabajo, estudio, ocio, comercio).",
          "Economías digitales con activos transferibles.",
          "Espacios de creación donde la imaginación del usuario define la experiencia.",
        ],
      },
      {
        title: "Multiverso en el Metaverso",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Multiverso+en+el+Metaverso",
        paragraphs: [
          "Con tantas plataformas activas, el escenario más probable es un multiverso de metaversos.",
          "Para que eso funcione, se necesitan estándares abiertos que permitan interoperabilidad de identidad, activos y conexión entre plataformas [15].",
          "La identidad digital de Web3 puede convertirse en la capa transversal para autenticarse entre entornos sin crear usuarios aislados en cada plataforma.",
          "Sin estándares compartidos la experiencia será fragmentada; con estándares abiertos puede surgir un ecosistema más interoperable y portable.",
          "Desde la guía 4 se ha explicado esta integración entre Ethereum, Web 3.0, NFTs y metaverso como un solo cambio estructural de la economía digital.",
        ],
      },
      {
        title: "Metaverso desde un punto de vista filosófico",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Metaverso+Filosofico",
        paragraphs: [
          "El metaverso no solo es tecnología; también abre preguntas éticas y filosóficas sobre identidad, convivencia, ley, trabajo, salud mental y sentido de realidad.",
          "Si parte importante de la vida social y económica migra a mundos virtuales, pueden aparecer riesgos de dependencia, desigualdad digital y captura de identidad.",
          "También surgen dudas prácticas: instituciones, normas, justicia, propiedad, seguridad, salud y gobernanza dentro de estos entornos.",
          "Pensar estos escenarios no es exageración: es un ejercicio preventivo para diseñar mejor la adopción tecnológica.",
          "El marco narrativo de Ready Player One es útil para visualizar escenarios extremos de adopción y desigualdad entre vida real y vida virtual.",
        ],
        bullets: [
          "Personas ricas en la vida virtual y ricas en la vida real.",
          "Personas ricas en la vida virtual y pobres en la vida real.",
          "Personas pobres en la vida virtual y ricas en la vida real.",
          "Personas pobres en la vida virtual y pobres en la vida real.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Conclusion",
        paragraphs: [
          "El metaverso es uno de los pilares más complejos de esta transición por la mezcla de variables técnicas, económicas, sociales y culturales.",
          "Aún faltan mejoras de rendimiento, accesibilidad y madurez de hardware para una adopción amplia y sostenible.",
          "Esta es la séptima entrega de las guías y también forma parte de la Fase 2, donde se integran Ethereum, Web 3.0, NFTs y metaverso como un mismo ecosistema.",
          "Aprender desde ahora sobre seguridad, identidad digital y uso responsable permite aprovechar sus ventajas y reducir riesgos de largo plazo.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Big Techs: Meta, Google, Microsoft, Amazon y Apple.",
          "2. Referencia de interacción inmersiva temprana: mandos de Wii U o sensor Kinect de Xbox.",
          "3. Freemium combina free y premium: acceso base gratuito con funciones o contenidos de pago.",
          "4. Google Stadia: servicio de videojuegos en la nube con hardware y plataforma propios.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] ‘Snow Crash’, la novela que predijo el metaverso, la tecnología que algunas empresas ya usan. El universo. Recuperado el 16 de abril de 2023, de: https://www.eluniverso.com/larevista/tecnologia/snow-crash-la-novela-que-predijo-el-metaverso-la-tecnologia-que-algunas-empresas-ya-usan-nota/",
            url: "https://www.eluniverso.com/larevista/tecnologia/snow-crash-la-novela-que-predijo-el-metaverso-la-tecnologia-que-algunas-empresas-ya-usan-nota/",
          },
          {
            label: "[2] Metaverso: todo lo que necesitas saber para aprovechar el ‘nuevo mundo’. Santander. Recuperado el 16 de abril de 2023, de: https://www.santander.com/es/stories/metaverso-todo-lo-que-necesitas-saber-para-aprovechar-el-nuevo-mundo",
            url: "https://www.santander.com/es/stories/metaverso-todo-lo-que-necesitas-saber-para-aprovechar-el-nuevo-mundo",
          },
          {
            label: "[3] Riaño D., Molero-Castillo G., Piñon R., Vázquez Mena A., Bárcenas E. Regular Expressions for Web Advertising Detection based on an Automatic Sliding Algorithm. Programming and Computer Software, Springer Nature,vol. 46, no. 7, 2020. Recuperado el 17 de abril de 2023, de: https://link.springer.com/article/10.1134%2FS0361768820080162",
            url: "https://link.springer.com/article/10.1134%2FS0361768820080162",
          },
          {
            label: "[4] Téran, M. El Metaverso es un fiasco y Zuckerberg no puede esconderlo: ya no sabe cómo hacer que compres sus gafas. El economista. Recuperado el 20 de abril de 2023, de: https://www.eleconomista.es/tecnologia/noticias/12175676/03/23/El-Metaverso-es-un-fiasco-y-Zuckerberg-no-puede-esconderlo-ya-no-sabe-como-hacer-que-compres-sus-gafas.html",
            url: "https://www.eleconomista.es/tecnologia/noticias/12175676/03/23/El-Metaverso-es-un-fiasco-y-Zuckerberg-no-puede-esconderlo-ya-no-sabe-como-hacer-que-compres-sus-gafas.html",
          },
          {
            label: "[5] Meta Quest 2. Meta. Recuperado el 18 de abril de 2023, de: https://www.meta.com/quest/products/quest-2/",
            url: "https://www.meta.com/quest/products/quest-2/",
          },
          {
            label: "[6] Higuera, A. Sony lanza un dispositivo que te convierte en un personaje de anime en movimiento. 20 bits. Recuperado el 18 de abril de 2023, de: https://www.20minutos.es/tecnologia/moviles-dispositivos/sony-lanza-un-dispositivo-que-te-convierte-en-un-personaje-de-anime-en-movimiento-5081567/",
            url: "https://www.20minutos.es/tecnologia/moviles-dispositivos/sony-lanza-un-dispositivo-que-te-convierte-en-un-personaje-de-anime-en-movimiento-5081567/",
          },
          {
            label: "[7] Marquez, J. Apple finaliza el desarrollo interno de realityOS y prepara su propio metaverso, según Gurman. Xataka. Recuperado el 19 de abril de 2023, de: https://www.xataka.com/realidad-virtual-aumentada/apple-finaliza-desarrollo-interno-realityos-prepara-su-propio-metaverso-gurman",
            url: "https://www.xataka.com/realidad-virtual-aumentada/apple-finaliza-desarrollo-interno-realityos-prepara-su-propio-metaverso-gurman",
          },
          {
            label: "[8] Eric Prydz Unleashes HOLO at Ultra Music Festival Miami 2023. The groove cartel. Recuperado el 21 de abril de 2023, de: https://thegroovecartel.com/news/eric-prydz-holo-ultra-music-festival-miami-2023/",
            url: "https://thegroovecartel.com/news/eric-prydz-holo-ultra-music-festival-miami-2023/",
          },
          {
            label: "[9] Ovide, S. ¿Qué tienen que ver los videojuegos con el metaverso? New York Times. Recuperado el 22 de abril de 2023, de: https://www.nytimes.com/es/2022/01/25/espanol/microsoft-meta-activision-blizzard.html",
            url: "https://www.nytimes.com/es/2022/01/25/espanol/microsoft-meta-activision-blizzard.html",
          },
          {
            label: "[10] Quarmby, B. Los juegos son la \"mayor oportunidad\" para las criptomonedas, dice el cofundador de Polygon. Cointelegraph en español. Recuperado el 20 de junio de 2023, de: https://es.cointelegraph.com/news/gaming-opportunity-crypto-mass-adoption-polygon-sandeep-nailwal",
            url: "https://es.cointelegraph.com/news/gaming-opportunity-crypto-mass-adoption-polygon-sandeep-nailwal",
          },
          {
            label: "[11] Shenton, A. A message for the Crayta Community. Medium. Recuperado el 22 de abril de 2023, de: https://medium.com/crayta/a-message-for-the-crayta-community-7c9ec53126f2",
            url: "https://medium.com/crayta/a-message-for-the-crayta-community-7c9ec53126f2",
          },
          {
            label: "[12] Fernández, Y. Qué es Roblox, en qué se diferencia de los demás y cómo funciona. Xataka Basics. Recuperado el 27 de abril de 2023, de: https://www.xataka.com/basics/que-roblox-que-se-diferencia-como-funciona",
            url: "https://www.xataka.com/basics/que-roblox-que-se-diferencia-como-funciona",
          },
          {
            label: "[13] ¿Qué es The Sandbox y cómo funciona este metaverso? Planeta NFT. Recuperado el 27 de abril de 2023, de: https://planetanft.com/que-es-the-sandbox/",
            url: "https://planetanft.com/que-es-the-sandbox/",
          },
          {
            label: "[14] Pinto, H. Decentraland: qué es, cómo entrar, comprar y más. El grupo Informático. Recuperado el 28 de abril de 2023, de: https://www.elgrupoinformatico.com/tutoriales/decentraland-que-como-entrar-comprar-mas-t82865.html",
            url: "https://www.elgrupoinformatico.com/tutoriales/decentraland-que-como-entrar-comprar-mas-t82865.html",
          },
          {
            label: "[15] Sobre los estándares abiertos. Oficina software libre, Universidad de Zaragoza. Recuperado el 28 de abril de 2023, de: https://osluz.unizar.es/content/sobre-los-estandares-abiertos",
            url: "https://osluz.unizar.es/content/sobre-los-estandares-abiertos",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-8-stablecoins-cbdcs",
    level: 2,
    title: "Guía 8: Qué son las Stablecoins y las CBDCs",
    description: "Stablecoins, CBDCs, casos en LATAM y diferencias clave de diseño monetario.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Introduccion+Stablecoins+y+CBDCs",
        paragraphs: [
          "Como se explicó desde la guía 1, la historia del dinero es una evolución constante de cómo la sociedad intercambia valor y adquiere bienes y servicios.",
          "Las criptomonedas abrieron un nuevo paradigma al proponer mayor control del dinero por parte de las personas y menor dependencia de intermediarios.",
          "Como respuesta, los gobiernos han avanzado en regulación, prohibiciones parciales, análisis de riesgo y diseño de sus propias monedas digitales.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos",
        paragraphs: [
          "Las CBDCs son monedas digitales emitidas por bancos centrales [1]. A diferencia del efectivo, operan de forma digital bajo control del emisor estatal.",
          "Una preocupación frecuente es que una infraestructura totalmente centralizada podría facilitar sanciones financieras directas, bloqueo de fondos o mayor vigilancia transaccional.",
          "Las criptomonedas, en contraste, nacen con una lógica distribuida y mayor resistencia a censura.",
          "Si los gobiernos gestionan de forma más directa los saldos digitales de la población, el rol histórico de la banca comercial puede desplazarse hacia custodia, seguros y servicios complementarios.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo",
        paragraphs: [
          "Como se explicó en la guía 4, los tokens no nativos permiten lanzar monedas sobre infraestructura blockchain ya existente, sin construir una red desde cero.",
          "Este enfoque reduce costo, complejidad y tiempo de salida para nuevos proyectos monetarios.",
          "Stablecoin combina stable (estable) y coin (moneda): su objetivo es reducir la volatilidad frente a activos como BTC o ETH.",
          "Esa estabilidad suele lograrse con respaldo en activos fiduciarios, criptoactivos o mecanismos de balance algorítmico.",
        ],
      },
      {
        title: "Distintos tipos de criptomonedas",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Tipos+de+Criptomonedas",
        paragraphs: [
          "A partir de tokens nativos, no nativos y stablecoins, surgieron múltiples clasificaciones con propósitos y riesgos distintos:",
        ],
        bullets: [
          "Memecoins: nacen de tendencias culturales o virales; ejemplos: Dogecoin [2] y Pepecoin [3].",
          "Shitcoins: proyectos de alto riesgo, misión poco clara y fuerte componente especulativo.",
          "Monedas de utilidad relevante: activos con propósito funcional dentro de un protocolo o producto.",
          "Flatcoins: monedas diseñadas para mantener poder adquisitivo ajustado a inflación [4].",
          "CBDCs: monedas digitales emitidas por bancos centrales.",
          "Criptomonedas adoptadas como curso legal: casos como El Salvador y República Centroafricana [8].",
          "Altcoins: protocolos alternativos a Bitcoin, por ejemplo Ether, Cardano, Algorand y Solana.",
        ],
      },
      {
        title: "Ejemplos de proyectos de Stablecoins",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Proyectos+de+Stablecoins",
        paragraphs: [
          "La diferencia central entre una CBDC y una stablecoin está en la capa de control.",
          "Las CBDCs dependen de un emisor central (banco central), mientras que muchas stablecoins operan como tokens en redes blockchain abiertas.",
          "Esto cambia el equilibrio entre trazabilidad, privacidad, censura, gobernanza e innovación.",
          "También explica por qué la discusión no es solo tecnológica, sino política y económica.",
        ],
      },
      {
        title: "Principales ejemplos de CBDCs",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Ejemplos+de+CBDCs",
        paragraphs: [
          "El caso más visible es el yuan digital de China, uno de los primeros despliegues de gran escala.",
          "Estados Unidos, la Unión Europea, Japón y otras economías mantienen discusión técnica y regulatoria, o ya operan pruebas de mercado.",
          "La adopción de CBDCs no solo cambia medios de pago: también redefine comercio internacional e interoperabilidad para países con sistemas financieros menos modernizados.",
        ],
      },
      {
        title: "Principales ejemplos de stablecoins",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Ejemplos+de+Stablecoins",
        paragraphs: [
          "Entre los ejemplos más citados están USDT (Tether) [5], DAI [6] y EUROC [7].",
          "En modelos respaldados 1:1, el token busca equivalencia con una unidad de moneda fiduciaria.",
          "Para operaciones internacionales, pueden reducir fricción frente a esquemas bancarios tradicionales, al simplificar rutas de transferencia y costos operativos.",
        ],
      },
      {
        title: "Situación de Latinoamérica con respecto a las CBDCs y Stablecoins",
        imageUrl: "https://placehold.co/1200x630/0b1324/fca5a5?text=LATAM+CBDCs+y+Stablecoins",
        paragraphs: [
          "La región LATAM enfrenta barreras estructurales: baja bancarización en segmentos amplios, rezago tecnológico, inflación y altos costos transaccionales.",
          "Ese contexto acelera interés por alternativas digitales, tanto públicas (CBDCs) como privadas (stablecoins), con distintos niveles de madurez [9].",
        ],
      },
      {
        title: "Las Bahamas",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Las+Bahamas",
        paragraphs: [
          "Las Bahamas lanzó el Sand Dollar el 20 de octubre de 2020, considerado uno de los primeros despliegues nacionales de CBDC [9].",
          "El modelo usa niveles de operación con límites y requisitos KYC escalonados.",
          "Sus pilares declarados para control de fraude son estabilidad financiera, integridad financiera y ciberseguridad.",
        ],
        bullets: [
          "Nivel 1: hasta 500 USD de saldo y límite mensual aproximado de 1,500 transacciones, con registro básico.",
          "Nivel 2: hasta 5,000 USD y hasta 10,000 transacciones mensuales, con identificación oficial.",
          "Nivel 3: entre 8,000 y 10,000 USD sin límite mensual, con documentación fiscal adicional.",
        ],
      },
      {
        title: "Jamaica",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Jamaica",
        paragraphs: [
          "Jamaica promulgó su CBDC en marzo de 2021 con lanzamiento formal en 2022.",
          "Su estrategia enfatiza eficiencia de pagos, reducción de costos operativos y mayor inclusión financiera.",
          "También habilitó rutas de onboarding para personas sin cuenta bancaria, mediante registro local e identificación oficial.",
        ],
        bullets: [
          "Mayor relevancia, eficiencia y seguridad en pagos.",
          "Incremento de eficiencia en costos de manejo de dinero y cuentas.",
          "Reducción de costos de operación del banco central.",
          "Más instrumentos de pago para la sociedad.",
          "Interoperabilidad con otros sistemas de pago.",
        ],
      },
      {
        title: "Perú",
        imageUrl: "https://placehold.co/1200x630/172554/86efac?text=Peru",
        paragraphs: [
          "Perú enfrenta retos de inclusión financiera; una parte relevante de la población permanecía sin cuenta bancaria en 2021 [9].",
          "Antes de una implementación masiva de CBDC, se han planteado prioridades de alfabetización, infraestructura y privacidad.",
        ],
        bullets: [
          "Alfabetización digital y financiera.",
          "Mejorar infraestructura de telecomunicaciones.",
          "Promover cultura financiera y reducir informalidad.",
          "Analizar mejora de sueldos y carga fiscal.",
          "Fortalecer privacidad y acceso tecnológico en zonas remotas.",
        ],
      },
      {
        title: "Latinoamérica (LATAM)",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Latinoamerica",
        paragraphs: [
          "En general, la región comparte barreras de entrada y, al mismo tiempo, una fuerte necesidad de modernización monetaria [9].",
          "México, Uruguay, Argentina y Chile mantienen análisis y seguimiento; Brasil muestra señales concretas de avance [10].",
          "Cuando una economía grande de la región consolide su despliegue, puede acelerar aprendizaje y adopción en países vecinos.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/f9a8d4?text=Conclusion",
        paragraphs: [
          "La digitalización monetaria ya está en marcha: algunos países están en pruebas, otros ya operan con monedas digitales oficiales.",
          "El eje de tensión en los próximos años será equilibrar innovación financiera, privacidad, libertad económica y capacidad de supervisión estatal.",
          "En LATAM, la necesidad práctica suele acelerar adopciones incluso antes de que la regulación termine de madurar.",
          "Casos como Venezuela y su experimento con Petro muestran que, en contextos extremos, la sociedad adopta alternativas monetarias por necesidad.",
          "Esta es la octava guía del programa y forma parte de la Fase 2, enfocada en integración entre finanzas digitales, regulación y uso práctico.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. CBDC significa Central Bank Digital Currency (Moneda Digital del Banco Central) [1].",
          "2. Varias memecoins se impulsan en redes sociales, especialmente por comunidades activas en X/Twitter.",
          "3. KYC (Know Your Customer) es el proceso de identificación de clientes para mitigar fraude y lavado de dinero.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Gutiérrez, I. ¿Qué es una CBDC y cuáles son sus características? Muy financiero. Recuperado el 5 de junio de 2023, de: https://muyfinanciero.com/conceptos/cbdc/",
            url: "https://muyfinanciero.com/conceptos/cbdc/",
          },
          {
            label: "[2] Fernández, Y. Qué es el Dogecoin, cómo funciona y por qué se ha hecho tan popular.  Xataka Basics. Recuperado el 7 de junio de 2023, de: https://www.xataka.com/basics/que-dogecoin-como-funciona-que-se-ha-hecho-popular",
            url: "https://www.xataka.com/basics/que-dogecoin-como-funciona-que-se-ha-hecho-popular",
          },
          {
            label: "[3] Gola, Y. ¿Qué es PEPE y puede superar a las memecoins Dogecoin y Shiba Inu? Cointelegraph en español. Recuperado el 7 de junio de 2021, de: https://es.cointelegraph.com/news/what-is-pepe-coin-flip-memecoin-dogecoin-shiba-inu",
            url: "https://es.cointelegraph.com/news/what-is-pepe-coin-flip-memecoin-dogecoin-shiba-inu",
          },
          {
            label: "[4] Lindrea, B. Coinbase quiere que los desarrolladores construyan 'flatcoins' indexadas a la inflación en su nueva red 'Base’. Cointelegraph en español. Recuperado el 8 de junio de 2023, de: https://es.cointelegraph.com/news/coinbase-wants-devs-to-build-inflation-pegged-flatcoins-on-its-new-base-network",
            url: "https://es.cointelegraph.com/news/coinbase-wants-devs-to-build-inflation-pegged-flatcoins-on-its-new-base-network",
          },
          {
            label: "[5] Leal, A. ¿Qué es Tether (USDT)? Criptonoticias. Recuperado el 9 de junio de 2023, de: https://www.criptonoticias.com/criptopedia/que-es-tether-usdt-stablecoin/",
            url: "https://www.criptonoticias.com/criptopedia/que-es-tether-usdt-stablecoin/",
          },
          {
            label: "[6] ¿Qué es DAI? Bit2me academy. Recuperado el 9 de junio de 2023, de: https://academy.bit2me.com/que-es-dai/",
            url: "https://academy.bit2me.com/que-es-dai/",
          },
          {
            label: "[7] ¿Qué es una moneda de euro (EUROC) y cómo se utiliza? Escrypto. Recuperado el 10 de junio de 2023, de: https://www.escrypto.com/es/blog/what-is-euro-coin-euroc-and-how-do-i-use-it",
            url: "https://www.escrypto.com/es/blog/what-is-euro-coin-euroc-and-how-do-i-use-it",
          },
          {
            label: "[8] Jiménez, D. La implantación del Bitcoin como moneda de curso legal. Cointelegraph en español. Recuperado el 10 de junio de 2023, de: https://es.cointelegraph.com/news/the-implementation-of-bitcoin-as-legal-tender",
            url: "https://es.cointelegraph.com/news/the-implementation-of-bitcoin-as-legal-tender",
          },
          {
            label: "[9] Appendino, M. et al. Crypto Assets and CBDCs in Latin America and the Caribbean: Opportunities and Risks. International monetary fund. Recuperado el 12 de junio de 2022, de: https://www.imf.org/en/Publications/WP/Issues/2023/02/17/Crypto-Assets-and-CBDCs-in-Latin-America-and-the-Caribbean-Opportunities-and-Risks-529717",
            url: "https://www.imf.org/en/Publications/WP/Issues/2023/02/17/Crypto-Assets-and-CBDCs-in-Latin-America-and-the-Caribbean-Opportunities-and-Risks-529717",
          },
          {
            label: "[10] Chavez, A.CBDC en Brasil: ¿El real digital es realmente una stablecoin? Be in crypto. Recuperado el 13 de junio de 2023, de: https://es.beincrypto.com/cbdc-brasil-real-digital-realmente-stablecoin/",
            url: "https://es.beincrypto.com/cbdc-brasil-real-digital-realmente-stablecoin/",
          },
          {
            label: "[11] Di Paula, R. CBDC: Comprendiendo un poco más sobre las monedas digitales de los bancos centrales. Cointelegraph en español. Recuperado el 13 de junio de 2023, de: https://es.cointelegraph.com/news/cbdc-understanding-a-little-more-about-central-bank-digital-currencies",
            url: "https://es.cointelegraph.com/news/cbdc-understanding-a-little-more-about-central-bank-digital-currencies",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-9-identidad-digital-web3",
    level: 2,
    title: "Guía 9: Conceptos Clave",
    description: "Glosario de términos clave abordados en las guías anteriores para preparar la siguiente fase.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Introduccion+Conceptos+Clave",
        paragraphs: [
          "A lo largo de las guías se han abordado muchas definiciones para facilitar el aprendizaje del entorno cripto y sus derivados.",
          "Como recapitulación, esta guía funciona como glosario de conceptos vistos anteriormente e introduce algunos términos para familiarizar al lector con la siguiente etapa.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Desarrollo",
        paragraphs: [
          "Este glosario reúne definiciones base para estudiar el ecosistema de criptomonedas, Web3 y metaverso con un mismo lenguaje.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Conceptos+Basicos",
        paragraphs: [
          "Definiciones clave para referencia rápida.",
        ],
        bullets: [
          "Qué es una criptomoneda: activo digital con cifrado criptográfico para seguridad, integridad y transacciones sin intermediarios.",
          "Satoshi Nakamoto: pseudónimo del creador o creadores de Bitcoin, pioneros de blockchain.",
          "Trilema de la escalabilidad: equilibrio entre seguridad, descentralización y escalabilidad.",
          "Minado: proceso de resolver problemas computacionales para validar bloques y obtener recompensas.",
          "Halving: reducción periódica de la recompensa a mineros de Bitcoin por su emisión limitada.",
          "P2P: arquitectura descentralizada donde los nodos pueden ser cliente y servidor al mismo tiempo.",
          "Analogía de los generales bizantinos: explicación de consenso entre nodos distribuidos.",
          "PoW: Proof of Work, mecanismo de consenso basado en trabajo computacional.",
          "Whitepapers: documentos técnicos que describen diseño, reglas y fundamentos del protocolo.",
          "Wallet: cartera para almacenar y gestionar activos criptográficos.",
          "Algoritmos simétricos: cifran y descifran con la misma llave.",
          "Algoritmos asimétricos: usan llaves distintas para cifrar y descifrar.",
          "Wallets calientes: carteras conectadas a internet; fáciles de usar, con mayor dependencia de terceros.",
          "Wallets frías: carteras offline con mayor control del usuario sobre sus llaves.",
          "Wallets de un solo protocolo: enfocadas en una blockchain específica.",
          "Wallets de distintos protocolos: permiten gestionar activos de múltiples redes.",
          "Binance: exchange global de criptomonedas con alta liquidez.",
          "Coinbase: exchange global con origen en Estados Unidos.",
          "FTX: exchange que colapsó tras fraude y mala gestión de fondos.",
          "Trust Wallet: wallet multicadena popular, adquirida por Binance.",
          "Ballena: usuario o entidad con gran cantidad de un activo, capaz de influir en mercado.",
          "Bitcoin Pizza Day: conmemoración de la compra de dos pizzas con 10,000 BTC.",
          "Satoshis: unidad mínima de Bitcoin.",
          "Lightning Network: capa adicional de Bitcoin para pagos más rápidos y de menor costo.",
          "Blockchain: registro distribuido e inmutable con bloques enlazados.",
          "Principio de no maleabilidad: busca evitar alteraciones indebidas en transacciones firmadas.",
          "Hashes: funciones criptográficas que generan huellas digitales de longitud fija.",
          "Smart contracts: contratos autoejecutables en blockchain con reglas programadas.",
          "Ethereum: plataforma descentralizada para ejecutar aplicaciones y contratos inteligentes.",
          "Ethereum Virtual Machine (EVM): entorno de ejecución de smart contracts en Ethereum.",
          "Ether (ETH): moneda nativa de la red Ethereum.",
          "Gwei: subunidad de ETH usada comúnmente en cálculo de fees.",
          "Gases o fees: comisiones de red por procesar transacciones u operaciones.",
          "Ethereum Classic: cadena que continuó tras la bifurcación histórica de Ethereum.",
          "DAO: organización autónoma descentralizada gobernada por reglas en contratos.",
          "Ethereum 2.0 / The Merge: transición de Ethereum desde PoW hacia PoS.",
          "PoS: Proof of Stake, consenso basado en participación y validación por staking.",
          "Token nativo: activo principal de una blockchain.",
          "Token no nativo: activo emitido sobre una red distinta a su protocolo de origen.",
          "DeFi: finanzas descentralizadas.",
          "GameFi: integración de videojuegos con finanzas descentralizadas.",
          "Web: sistema de transmisión de información sobre internet.",
          "Internet: red global descentralizada de computadoras conectadas.",
          "Web 3: evolución de servicios web con base en blockchain y propiedad digital.",
          "DApp: aplicación descentralizada ejecutada sobre blockchain.",
          "Uniswap: exchange descentralizado para intercambios de tokens sin intermediario central.",
          "Metaverso: entorno digital inmersivo e interactivo con identidad y economía virtual.",
          "Avatar: representación gráfica del usuario en un entorno virtual.",
          "Decentraland: metaverso basado en blockchain con activos digitales y terrenos virtuales.",
          "Identidad digital: perfil único para autenticación e interacción en servicios web3.",
          "NFTs: tokens no fungibles que representan unicidad y propiedad digital.",
          "Protocolos blockchain: reglas técnicas para compartir y validar información en red.",
          "Mintear: acuñar un NFT, vinculando contenido digital a un contrato inteligente.",
          "OpenSea: marketplace reconocido para compra y venta de NFTs.",
          "Roblox: plataforma de creación y experiencia de juegos generados por usuarios.",
          "Sandbox: metaverso con enfoque en creación, tokenización y monetización en ecosistema web3.",
          "CBDC: moneda digital emitida por un banco central.",
          "Stablecoin: criptomoneda diseñada para mantener valor estable frente a un activo de referencia.",
          "Memecoin: moneda inspirada en tendencias o cultura de internet, generalmente especulativa.",
          "Shitcoin: término informal para proyectos de baja calidad o alto riesgo.",
          "Altcoin: criptomoneda alternativa a Bitcoin.",
          "TradeFi (según el material): trading descentralizado.",
          "Holder: persona que mantiene criptomonedas en cartera durante un periodo, pese a volatilidad.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion+Conceptos+Clave",
        paragraphs: [
          "Esta guía funciona como recapitulación de términos abordados en entregas previas para consolidar fundamentos y facilitar la lectura de contenidos posteriores.",
          "El objetivo no fue profundizar en un solo tema, sino unificar lenguaje y preparar la transición hacia la última fase con ejemplos y aplicaciones actuales.",
          "Esta es la novena guía del recorrido y cierra la Fase 2 como puente de preparación para la siguiente etapa.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Este glosario consolida conceptos trabajados en las guías 1 a 8. Para fuentes detalladas, consulta la sección de referencias de cada guía correspondiente.",
        ],
        references: [
          {
            label: "Fuentes de la Guía 1 (Qué son las Criptomonedas)",
            url: "/web3/education/level-1-guide-1-que-son-las-criptomonedas#referencias",
          },
          {
            label: "Fuentes de la Guía 2 (Wallets Crypto)",
            url: "/web3/education/level-1-guide-2-wallets-criptomonedas#referencias",
          },
          {
            label: "Fuentes de la Guía 3 (Bitcoin)",
            url: "/web3/education/level-1-guide-3-bitcoin-blockchain-smart-contracts#referencias",
          },
          {
            label: "Fuentes de la Guía 4 (Ethereum)",
            url: "/web3/education/level-2-guide-4-que-es-ethereum#referencias",
          },
          {
            label: "Fuentes de la Guía 5 (Web 3.0 y DApps)",
            url: "/web3/education/level-2-guide-5-web3-y-dapps#referencias",
          },
          {
            label: "Fuentes de la Guía 6 (NFTs)",
            url: "/web3/education/level-2-guide-6-nfts#referencias",
          },
          {
            label: "Fuentes de la Guía 7 (Metaverso)",
            url: "/web3/education/level-2-guide-7-metaverso#referencias",
          },
          {
            label: "Fuentes de la Guía 8 (Stablecoins y CBDCs)",
            url: "/web3/education/level-2-guide-8-stablecoins-cbdcs#referencias",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-10-identidad-digital-web3",
    level: 2,
    title: "Guía 10: Identidad digital en la Web 3.0",
    description: "DIDs, trustless, ZKP, SBTs y adaptación de identidad digital en el entorno Web3.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Introduccion+Identidad+Digital+Web3",
        paragraphs: [
          "La identidad digital es un pilar de la nueva etapa de la web y se relaciona directamente con NFTs, metaverso y aplicaciones descentralizadas.",
          "Su propósito es devolver a las personas el control de su información: qué comparten, con quién, en qué contexto y bajo qué consentimiento.",
          "También abre una pregunta de fondo: si la identidad personal es íntima, ¿hasta dónde deben administrarla gobiernos o grandes empresas?",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos",
        paragraphs: [
          "La identidad digital en Web3 busca separar autenticación de vigilancia masiva, con credenciales verificables y controladas por el usuario.",
        ],
      },
      {
        title: "Decentralized Identifications (DIDs)",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=DIDs",
        paragraphs: [
          "Los DIDs son identificadores descentralizados, únicos y verificables que pueden almacenarse en blockchain [1].",
          "Permiten acreditar identidad en servicios digitales sin revelar más información de la necesaria, reforzando privacidad y soberanía digital.",
        ],
        bullets: [
          "Mayor privacidad y seguridad contra robo de identidad.",
          "Verificación de personas físicas para reducir bots y manipulación en redes.",
          "Creación de múltiples DIDs para distintos contextos (personal, laboral, financiero, etc.).",
          "Menor recopilación de datos por plataformas y cookies [2].",
          "Reducción de puntos únicos de fallo mediante arquitectura descentralizada.",
          "Mejor experiencia de usuario al disminuir dependencia de contraseñas tradicionales.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Desarrollo",
        paragraphs: [
          "La identidad digital en Web3 se apoya en criptografía, contratos inteligentes e interoperabilidad entre redes.",
          "A partir de esta base surgen tecnologías como trustless systems, ZKP y SBTs, cada una con un rol distinto en autenticación y privacidad.",
        ],
      },
      {
        title: "¿Qué es la tecnología trustless?",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Trustless",
        paragraphs: [
          "Trustless significa reducir la necesidad de confiar en intermediarios humanos, usando reglas verificables en código.",
          "En puentes interoperables entre blockchains, contratos inteligentes validan origen y destino de operaciones [3].",
          "Sus principales riesgos suelen concentrarse en contratos mal diseñados o puentes vulnerables.",
        ],
      },
      {
        title: "Zero knowledge proof (ZKP)",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=ZKP",
        paragraphs: [
          "ZKP permite demostrar que una afirmación es verdadera sin revelar la información sensible subyacente [4].",
          "Es especialmente útil para identidad digital, porque segmenta lo público de lo privado y minimiza exposición de datos personales.",
        ],
      },
      {
        title: "¿Qué son los soulbound tokens (SBTs)?",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=SBTs",
        paragraphs: [
          "Los SBTs son tokens intransferibles asociados a una identidad digital [5].",
          "Se proponen como credenciales para historial académico, laboral, médico o validaciones equivalentes a pasaporte/carnet, bajo control granular de datos.",
          "La iniciativa fue popularizada por Vitalik Buterin y se conecta con identidad y reputación en ecosistemas Web3.",
        ],
      },
      {
        title: "Diferencias entre los SBTs y los DIDs",
        imageUrl: "https://placehold.co/1200x630/0b1324/fca5a5?text=SBTs+vs+DIDs",
        paragraphs: [
          "SBTs y DIDs no son excluyentes; pueden complementarse dentro de una arquitectura de identidad digital [6].",
        ],
        bullets: [
          "SBTs: tokens intransferibles centrados en credenciales y reputación.",
          "DIDs: identificadores descentralizados para autenticación e interoperabilidad.",
          "SBTs: enfoque en trazabilidad de atributos asociados a una identidad.",
          "DIDs: enfoque en acceso a servicios sin fricción de usuario/contraseña.",
        ],
      },
      {
        title: "Worldcoin",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Worldcoin",
        paragraphs: [
          "Worldcoin propone verificar humanidad con biometría (iris) mediante un dispositivo físico y recompensas en su propio ecosistema [7].",
          "A diferencia de modelos descentralizados, concentra verificación en una infraestructura privada, lo que abre debate sobre privacidad y gobernanza [8].",
          "El punto crítico es el manejo de datos biométricos sensibles y el riesgo de filtraciones o usos no transparentes.",
        ],
      },
      {
        title: "Cómo las compañías de tech se tendrán que adaptar a esto.",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Adaptacion+Big+Tech",
        paragraphs: [
          "Las big tech han construido gran parte de su modelo sobre extracción y monetización de datos de usuarios.",
          "Si identidad autosoberana y privacidad por diseño avanzan, estas compañías tendrán que adaptar sus productos y su economía de datos [9].",
          "El cambio esperado es pasar de vigilancia comercial a servicios con consentimiento granular y transparencia verificable.",
        ],
      },
      {
        title: "Relación del entorno Crypto y la IA",
        imageUrl: "https://placehold.co/1200x630/172554/86efac?text=Crypto+e+IA",
        paragraphs: [
          "Con el crecimiento de IA generativa, distinguir humanos de agentes automatizados se volvió una necesidad operativa.",
          "Por eso se impulsan enfoques como Proof of Humanity y Proof of Personhood, con distintos métodos de verificación.",
          "Este frente también abre riesgos de secuestro digital, discriminación algorítmica y reputación condicionada por puntuaciones en plataformas.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "La identidad digital en Web3 combina oportunidades reales de privacidad, seguridad y control de datos con nuevos riesgos técnicos, sociales y éticos.",
          "Implementarla bien requiere diseño responsable, educación de usuario y criterios claros de gobernanza tecnológica.",
          "Esta es la décima guía del programa y, según el material original, marca el inicio de la tercera fase con ejemplos actuales del ecosistema.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Loggear: ingresar correctamente a un sitio web.",
          "2. En sistemas automatizados, la aprobación puede ejecutarse sin intervención humana directa.",
          "3. Twitter ahora se denomina X.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Merodio, J. Identidad Digital Web 3 [Qué es y Casos de Uso Reales]. Linked In. Recuperado el 30 de junio de 2023, de: https://www.linkedin.com/pulse/identidad-digital-web3-qué-es-y-casos-de-uso-reales-juan-merodio/?originalSubdomain=es",
            url: "https://www.linkedin.com/pulse/identidad-digital-web3-qué-es-y-casos-de-uso-reales-juan-merodio/?originalSubdomain=es",
          },
          {
            label: "[2] Riaño D., Molero-Castillo G., Barcenas E., Aldeco R. Algorithm for Identification and Analysis of Targeted Advertising used in Trending Topics. An Approach to Automatic Recognition of Web Advertising Focused on Different Languages. LACCEI International Multi-Conference of Engineering, Education and Technology, Boca Ratón, Florida, EUA, 2022. Disponible en: https://www.laccei.org/LACCEI2022-BocaRaton/full_papers/FP57.pdf",
            url: "https://www.laccei.org/LACCEI2022-BocaRaton/full_papers/FP57.pdf",
          },
          {
            label: "[3] Clark, A. Seguridad en DeFi: cómo los puentes trustless pueden ayudar a proteger a los usuarios. Cointelegraph en español. Recuperado el 5 de agosto de 2023, de: https://es.cointelegraph.com/news/defi-security-how-trustless-bridges-can-help-protect-users",
            url: "https://es.cointelegraph.com/news/defi-security-how-trustless-bridges-can-help-protect-users",
          },
          {
            label: "[4] Li, K. ¿Qué es Zero-Knowledge Proof y cómo afecta a la blockchain? Binance. Recuperado el 6 de agosto de 2021, de: https://academy.binance.com/es/articles/what-is-zero-knowledge-proof-and-how-does-it-impact-blockchain",
            url: "https://academy.binance.com/es/articles/what-is-zero-knowledge-proof-and-how-does-it-impact-blockchain",
          },
          {
            label: "[5] ¿Qué son los Soulbound Tokens (SBT)? Binance. Recuperado el 2 de agosto de 2023, de: https://academy.binance.com/es/articles/what-are-soulbound-tokens-sbt",
            url: "https://academy.binance.com/es/articles/what-are-soulbound-tokens-sbt",
          },
          {
            label: "[6] Soulbound Tokens vs Self-Sovereign Identity: Web3’s Search for a Digital ID Solution. Cryptonews. Recuperado el 3 de agosto de 2023, de: https://cryptonews.com/exclusives/soulbound-tokens-vs-self-sovereign-identity-web3s-search-for-a-digital-id-solution.htm",
            url: "https://cryptonews.com/exclusives/soulbound-tokens-vs-self-sovereign-identity-web3s-search-for-a-digital-id-solution.htm",
          },
          {
            label: "[7] Worldcoin llega a México con la promesa de criptomonedas a cambio de datos biométricos. Red en defensa de los derechos digitales. Recuperado el 6 de agosto de 2023, de: https://r3d.mx/2023/08/02/worldcoin-llega-a-mexico-con-la-promesa-de-criptomonedas-a-cambio-de-datos-biometricos/",
            url: "https://r3d.mx/2023/08/02/worldcoin-llega-a-mexico-con-la-promesa-de-criptomonedas-a-cambio-de-datos-biometricos/",
          },
          {
            label: "[8] Fortis, S. Worldcoin permitirá a gobiernos y empresas utilizar su sistema de identificación: Informe. Cointelegraph en español. Recuperado el 6 de agosto de 2023, de: https://es.cointelegraph.com/news/worldcoin-to-allow-government-and-businesses-to-use-id-system",
            url: "https://es.cointelegraph.com/news/worldcoin-to-allow-government-and-businesses-to-use-id-system",
          },
          {
            label: "[9] Peralta, L. Web3: la revancha de los usuarios contra las empresas ‘big tech’. Cinco días. Recuperado el 7 de agosto de 2023, de: https://cincodias.elpais.com/cincodias/2021/12/24/companias/1640338509_178295.html",
            url: "https://cincodias.elpais.com/cincodias/2021/12/24/companias/1640338509_178295.html",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-11-criptomonedas-2",
    level: 3,
    title: "Guía 11: Qué son las Criptomonedas 2",
    description: "Altcoins de tercera generación, interoperabilidad y comparativo técnico de redes relevantes del ecosistema.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+11+Introduccion",
        paragraphs: [
          "En esta guía se retoma la evolución de las criptomonedas para entrar a protocolos más allá de Bitcoin, con foco en interoperabilidad, gobernanza y escalabilidad.",
          "Esta guía marca el inicio de la Fase 3 y abre la transición hacia ejemplos actuales de uso real en el ecosistema.",
        ],
      },
      {
        title: "Altcoins",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Altcoins",
        paragraphs: [
          "Las altcoins (alternative coins) son criptomonedas distintas a Bitcoin, creadas para ofrecer nuevas soluciones técnicas y económicas.",
          "Su objetivo es ampliar opciones y reducir dependencia de un solo protocolo.",
          "Una clasificación práctica por generaciones es:",
        ],
        bullets: [
          "Primera generación: transferencia de valor sin intermediarios (Bitcoin).",
          "Segunda generación: contratos inteligentes y dApps (ej. Ethereum).",
          "Tercera generación: interoperabilidad entre redes, escalabilidad y gobernanza más flexible (ej. Polkadot, Cardano y otras).",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo",
        paragraphs: [
          "Además de Polkadot y Cardano, en esta guía se incorpora un comparativo técnico de redes relevantes: Algorand, Solana, Ripple (XRPL), Polygon, BNB Chain y Avalanche.",
          "Los datos de market cap y máximo histórico se reportan con corte al 23 de marzo de 2026 (CoinGecko).",
        ],
      },
      {
        title: "Polkadot",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Polkadot",
        paragraphs: [
          "Polkadot es un protocolo Layer 0 enfocado en interoperabilidad entre blockchains a través de su Relay Chain y parachains.",
          "Su consenso es Nominated Proof of Stake (NPoS), y su gobernanza es on-chain (OpenGov) con participación de titulares de DOT.",
          "Su arquitectura permite crear redes especializadas que comparten seguridad y se comunican mediante XCM.",
          "Documentación oficial: https://docs.polkadot.com/reference/polkadot-hub/consensus-and-security/relay-chain/",
        ],
      },
      {
        title: "Cardano",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Cardano",
        paragraphs: [
          "Cardano es una red de tercera generación basada en investigación académica y consenso Proof of Stake (Ouroboros).",
          "Su roadmap histórico prioriza descentralización, escalabilidad y gobernanza, con participación de su comunidad y entidades del ecosistema.",
          "Organismos relevantes del ecosistema: Emurgo, IOG (antes IOHK) y Cardano Foundation.",
          "Documentación oficial: https://docs.cardano.org/",
        ],
      },
      {
        title: "Algorand",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Algorand",
        paragraphs: [
          "Algorand usa Pure Proof of Stake (PPoS) y está diseñado para finalización rápida y baja fricción operativa.",
        ],
        bullets: [
          "Interoperabilidad: Sí, con herramientas de bridging y arquitectura enfocada en integración institucional.",
          "TPS (referencia): Alto rendimiento; la cifra efectiva depende de configuración y carga de red.",
          "Gobernanza: Sí. Evolucionó desde periodos de governance hacia esquema de staking rewards con participación de operadores.",
          "Market cap (23-mar-2026): USD 773,688,027.",
          "Máximo histórico (ATH): USD 3.56.",
          "Consenso: Pure Proof of Stake (PPoS).",
          "Casos de uso: tokenización de activos, pagos, identidad y aplicaciones financieras.",
          "Documentación oficial: https://dev.algorand.co/ y https://algorand.co/technology",
        ],
      },
      {
        title: "Solana",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Solana",
        paragraphs: [
          "Solana combina Proof of Stake con Proof of History para optimizar ordenamiento temporal y throughput.",
        ],
        bullets: [
          "Interoperabilidad: Parcial/nativa limitada entre cadenas; suele apoyarse en puentes y protocolos externos.",
          "TPS (referencia oficial histórica): más de 50,000 TPS sostenidas en pruebas de red (entorno testnet).",
          "Gobernanza: Sí, con participación de validadores y stake (modelo en evolución comunitaria).",
          "Market cap (23-mar-2026): USD 52,307,618,592.",
          "Máximo histórico (ATH): USD 293.31.",
          "Consenso: PoS + PoH.",
          "Documentación oficial: https://solana.com/news/proof-of-history--a-clock-for-blockchain y https://solana.com/docs",
        ],
      },
      {
        title: "Ripple",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Ripple+XRPL",
        paragraphs: [
          "Ripple se refiere a la empresa; la red pública es XRP Ledger (XRPL), con consenso propio entre validadores.",
        ],
        bullets: [
          "Interoperabilidad: Sí, mediante herramientas de puentes y expansión de capacidades cross-chain del ecosistema XRPL.",
          "TPS (referencia común de ecosistema): alrededor de 1,500 TPS; varía por condiciones de red.",
          "Gobernanza: Sí, mediante sistema de amendments y apoyo de validadores.",
          "Market cap (23-mar-2026): USD 87,582,059,499.",
          "Máximo histórico (ATH): USD 3.65.",
          "Consenso: XRP Ledger Consensus Protocol (familia BFT/federated).",
          "Documentación oficial: https://xrpl.org/docs/concepts/consensus-protocol/consensus-structure y https://xrpl.org/docs/references/protocol/ledger-data/ledger-entry-types/amendments",
        ],
      },
      {
        title: "Polygon",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Polygon",
        paragraphs: [
          "Polygon PoS opera como sidechain EVM-compatible para escalar el ecosistema Ethereum y reducir costos.",
        ],
        bullets: [
          "Interoperabilidad: Sí, con diseño multi-chain y capa de interoperabilidad (AggLayer).",
          "TPS (referencia): no hay una cifra única oficial estable; depende de condiciones de red y diseño de capa.",
          "Gobernanza: Sí, con evolución del rol del token POL en staking y gobernanza del ecosistema.",
          "Market cap (23-mar-2026): USD 1,018,879,602 (token POL).",
          "Máximo histórico (ATH): USD 1.29 (token POL).",
          "Consenso: PoS (Heimdall/Bor; arquitectura conectada a Ethereum).",
          "Documentación oficial: https://docs.polygon.technology/pos/overview/ y https://docs.polygon.technology/interoperability/agglayer/",
        ],
      },
      {
        title: "Binance Chain",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=BNB+Chain",
        paragraphs: [
          "BNB Chain incluye BNB Smart Chain y componentes complementarios enfocados en aplicaciones EVM y expansión de ecosistema.",
        ],
        bullets: [
          "Interoperabilidad: Sí, con guías y rutas de puente para mover activos entre cadenas.",
          "TPS (referencia): variable por red y condiciones; no se publica una cifra única oficial para todos los componentes.",
          "Gobernanza: Sí, con sistema de validadores y staking en infraestructura del ecosistema.",
          "Market cap (23-mar-2026): USD 86,960,679,194.",
          "Máximo histórico (ATH): USD 1,369.99.",
          "Consenso: Proof of Staked Authority (PoSA) en BNB Smart Chain.",
          "Documentación oficial: https://docs.bnbchain.org/bnb-smart-chain/cross-chain-bridge/ y https://docs.bnbchain.org/bc-fusion/developers/staking/",
        ],
      },
      {
        title: "Avalanche",
        imageUrl: "https://placehold.co/1200x630/172554/86efac?text=Avalanche",
        paragraphs: [
          "Avalanche se organiza con cadenas especializadas y usa familia de consensos Avalanche/Snowman para alto rendimiento y finalidad rápida.",
        ],
        bullets: [
          "Interoperabilidad: Sí, mediante arquitectura de subredes/L1s y herramientas de conexión entre entornos.",
          "TPS (referencia): variable por cadena/subred y configuración.",
          "Gobernanza: Sí, con evolución técnica abierta mediante ACPs y participación de validadores.",
          "Market cap (23-mar-2026): USD 4,117,637,431.",
          "Máximo histórico (ATH): USD 144.96.",
          "Consenso: PoS con familia Avalanche/Snowman.",
          "Documentación oficial: https://build.avax.network/docs/primary-network/platformvm-architecture y https://github.com/avalanche-foundation/ACPs",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "Las altcoins de tercera generación amplían la propuesta cripto hacia interoperabilidad, gobernanza y escalabilidad aplicada.",
          "No existe una sola red óptima para todo: cada protocolo prioriza diferentes trade-offs entre rendimiento, descentralización, costos y experiencia de desarrollo.",
          "Esta guía es la primera entrega de la Fase 3 y establece base comparativa para los siguientes temas avanzados.",
        ],
      },
      {
        title: "Agradecimientos",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Agradecimientos",
        paragraphs: [
          "Gracias por continuar este recorrido guía por guía. El objetivo es mantener una ruta práctica y clara para comprender el ecosistema sin caer en sobrecarga técnica innecesaria.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original y documentación técnica consultada.",
        ],
        references: [
          {
            label: "[4] Morales, J. Sobre Cardano, EMURGO y IOHK. Criptoticker. Recuperado el 25 de mayo de 2023, de: https://cryptoticker.io/es/sobre-cardano-emurgo-y-iohk/",
            url: "https://cryptoticker.io/es/sobre-cardano-emurgo-y-iohk/",
          },
          {
            label: "[2] Historia del Dinero. Banco de México. Recuperado el 3 de marzo de 2023, de: https://www.banxico.org.mx/mibanxico//_pdfs/historia-del-dinero.pdf",
            url: "https://www.banxico.org.mx/mibanxico//_pdfs/historia-del-dinero.pdf",
          },
          {
            label: "[3] Nieto, A. El número de bitcoins es finito, no podrá haber más de 21 millones: ¿qué se espera que suceda entonces? Xataka. Recuperado el 30 de mayo de 2021, de: https://cutt.ly/NncK3a2",
            url: "https://cutt.ly/NncK3a2",
          },
          {
            label: "[4] Definición de seguridad informática. Recuperado el 17 de febrero de 2023, de:https://definicion.de/seguridad-informatica/",
            url: "https://definicion.de/seguridad-informatica/",
          },
          {
            label: "[5] Collado, l. VisaNet: el poder de conectar al mundo. Recuperado el 17 de febrero de 2023, de:https://www.visa.com.mx/la-diferencia-visa/impacto-global/visanet-poder-conectar-mundo.html#:~:text=En%20t%C3%A9rminos%20de%20su%20capacidad,con%20un%20rendimiento%20sin%20igual",
            url: "https://www.visa.com.mx/la-diferencia-visa/impacto-global/visanet-poder-conectar-mundo.html#:~:text=En%20t%C3%A9rminos%20de%20su%20capacidad,con%20un%20rendimiento%20sin%20igual",
          },
          {
            label: "[6] García P. El Bitcoin y las criptomonedas: ¿El dinero del futuro? ENAE. Recuperado el 1 de marzo de 2021, de: https://www.enae.es/blog/el-bitcoin-y-las-criptomonedas-el-dinero-del-futuro?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF9yUjoyckdK976ETlowm1hblGHr6-du54K4wHN833Tf9l9_Q9nrof4aAsJdEALw_wcB&_adin=11551547647",
            url: "https://www.enae.es/blog/el-bitcoin-y-las-criptomonedas-el-dinero-del-futuro?gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF9yUjoyckdK976ETlowm1hblGHr6-du54K4wHN833Tf9l9_Q9nrof4aAsJdEALw_wcB&_adin=11551547647",
          },
          {
            label: "[7] Brooks, D. Criptomonedas: qué es el \"problema de los generales bizantinos” y por qué explica el origen del bitcoin. BBC News Mundo. Recuperado el 1 de marzo de 2022, de: https://www.bbc.com/mundo/noticias-51380491",
            url: "https://www.bbc.com/mundo/noticias-51380491",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-12-que-es-una-dao",
    level: 3,
    title: "Guía 12: Qué es una DAO",
    description: "Gobernanza en blockchain, modelos de decisión y funcionamiento de organizaciones autónomas descentralizadas.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+12+Introduccion",
        paragraphs: [
          "Muchas soluciones de blockchain nacen de modelos del mundo real y los adaptan con reglas programables, trazabilidad y ejecución automática.",
          "Así como las IPOs representan emisión de acciones en mercados tradicionales, en cripto surgieron las ICOs como mecanismo de financiamiento de proyectos.",
          "Este entorno también trajo prácticas de alto riesgo y estafas, por lo que entender gobernanza y evaluación de proyectos es clave para no caer en promesas irreales.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+DAO",
        paragraphs: [
          "Una DAO (Decentralized Autonomous Organization) propone una evolución de la organización empresarial tradicional: decisiones verificables, reglas transparentes y participación distribuida [1][2].",
          "La idea central es que usuarios, inversores y equipos participen en la toma de decisiones a través de mecanismos definidos en blockchain.",
        ],
      },
      {
        title: "Votos y tokens",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Votos+y+Tokens",
        paragraphs: [
          "En gobernanza cripto, los derechos de voto se modelan con tokens o NFTs, retomando analogías con clases y tipos de acciones del mundo corporativo [3][4].",
        ],
        bullets: [
          "Acciones ordinarias: voto y participación en decisiones.",
          "Acciones preferentes: prioridad económica y condiciones especiales.",
          "Acciones convertibles: cambian de tipo o derechos bajo ciertas reglas.",
          "Acciones sin voto: rendimiento económico sin poder de decisión.",
          "Clase A/B: distintas ponderaciones de voto y niveles de control según diseño de la organización.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Desarrollo+DAO",
        paragraphs: [
          "La gobernanza en blockchain define cómo se proponen, votan y ejecutan cambios en protocolos o dApps.",
          "Su complejidad crece cuando se combinan intereses de comunidad, fundadores, validadores, inversores y regulaciones externas.",
        ],
      },
      {
        title: "¿Qué es la Gobernanza?",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Que+es+la+Gobernanza",
        paragraphs: [
          "La gobernanza es el proceso de toma de decisiones sobre reglas, mejoras y dirección de una red o aplicación [5].",
          "En la práctica suelen coexistir dos capas:",
        ],
        bullets: [
          "Gobernanza en blockchain/protocolo: decisiones sobre red base mediante votos de holders o participantes.",
          "Gobernanza en dApps: decisiones sobre producto, tesorería o roadmap usando tokens, NFTs o modelos híbridos.",
        ],
      },
      {
        title: "Gobernanza en proyectos robustos",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Modelos+de+Gobernanza",
        paragraphs: [
          "No existe un único modelo; muchos proyectos usan configuraciones híbridas para balancear eficiencia y descentralización [6].",
        ],
        bullets: [
          "Gobernanza centralizada: una entidad principal decide.",
          "Gobernanza descentralizada: la comunidad toma decisiones distribuidas.",
          "Gobernanza híbrida: equipo núcleo + comunidad, con separación de funciones.",
        ],
      },
      {
        title: "Política en la Blockchain",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Politica+en+Blockchain",
        paragraphs: [
          "Toda gobernanza necesita reglas, participantes, mecanismos de validación y responsabilidades.",
          "En algunas redes esto se formaliza con constituciones, comités técnicos y marcos de voto; en otras, evoluciona de forma más orgánica [7].",
        ],
      },
      {
        title: "Forks",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Forks",
        paragraphs: [
          "Un fork es una bifurcación de código. En blockchain suele aparecer cuando hay desacuerdos técnicos, políticos o económicos sobre el rumbo de la red.",
          "Hard forks crean reglas incompatibles con versiones anteriores; soft forks mantienen compatibilidad parcial.",
          "Los forks son también una expresión de gobernanza: reflejan consenso, conflicto o divergencia de visión en una comunidad.",
        ],
      },
      {
        title: "Gobernanza on-chain y off-chain",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Onchain+Offchain",
        paragraphs: [
          "On-chain: el voto y la ejecución ocurren dentro de blockchain, con resultados auditables y automatizables.",
          "Off-chain: deliberación y decisiones fuera de cadena, por equipos, fundaciones o foros de coordinación [8].",
          "La mayoría de ecosistemas combina ambos enfoques para equilibrar agilidad operativa y transparencia.",
        ],
      },
      {
        title: "Ejemplos de gobernanza",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Ejemplos+de+Gobernanza",
        paragraphs: [
          "Distintas redes implementan modelos de gobernanza con estructuras propias.",
        ],
        bullets: [
          "NEAR: marco de constitución, órganos de coordinación y mecanismos de participación [9].",
          "Polkadot: consejo/comités técnicos, referendos públicos y votación on-chain [10].",
          "Cardano: dReps, SPOs y cuerpos de gobernanza con enfoque en delegación y evolución constitucional [11].",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "La gobernanza es uno de los temas más complejos del ecosistema blockchain porque une tecnología, incentivos, política y coordinación social.",
          "Entender DAO y gobernanza permite leer mejor la calidad institucional de un protocolo y anticipar riesgos de captura, centralización o mala ejecución.",
          "Esta guía continúa la Fase 3 con una base clave para estudiar tesorerías, pools, staking y modelos avanzados de participación.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Roose K. ¿Qué es una DAO? La guía cripto para despistados, New York Times en español. Recuperado el 20 de marzo de 2024, de: https://www.nytimes.com/es/interactive/2022/03/29/espanol/dao-que-es.html",
            url: "https://www.nytimes.com/es/interactive/2022/03/29/espanol/dao-que-es.html",
          },
          {
            label: "[2] ¿Qué es DAO? Cointelegraph en español. Recuperado el 20 de marzo de 2024, de: https://es.cointelegraph.com/learn/what-is-a-decentralized-autonomous-organization-and-how-does-a-dao-work",
            url: "https://es.cointelegraph.com/learn/what-is-a-decentralized-autonomous-organization-and-how-does-a-dao-work",
          },
          {
            label: "[3] Acciones de una empresa: Definición, tipos y ventajas. GBM academy. Recuperado el 20 de marzo de 2024, de: https://gbm.com/academy/que-son-las-acciones-definicion-tipos-y-ventajas/",
            url: "https://gbm.com/academy/que-son-las-acciones-definicion-tipos-y-ventajas/",
          },
          {
            label: "[4] Acciones Clase B frente a Clase A diferencias y consideraciones clave. Faster Capital. Recuperado el 20 de marzo de 2024, de: https://fastercapital.com/es/contenido/Acciones-Clase-B-frente-a--Clase-A--diferencias-y-consideraciones-clave.html",
            url: "https://fastercapital.com/es/contenido/Acciones-Clase-B-frente-a--Clase-A--diferencias-y-consideraciones-clave.html",
          },
          {
            label: "[5] Garay A.  Gobernanza de la Blockchain. Aprende enseñando, Linked In. Recuperado el 20 de marzo de 2024, de:  https://www.linkedin.com/pulse/gobernanza-de-la-blockchain-%C3%A1lvaro-garay-i2j8f/?originalSubdomain-es https://es.cointelegraph.com/explained/governance-the-key-to-decentralization-and-development-of-blockchain-projects",
            url: "https://www.linkedin.com/pulse/gobernanza-de-la-blockchain-%C3%A1lvaro-garay-i2j8f/?originalSubdomain-es",
          },
          {
            label: "[6] Explorando modelos de gobernanza dentro de Ethereum Enterprise Alliance EEE. Faster Capital. Recuperado el 20 de marzo de 2024, de: https://fastercapital.com/es/contenido/Explorando-modelos-de-gobernanza-dentro-de-Ethereum-Enterprise-Alliance--EEE.html",
            url: "https://fastercapital.com/es/contenido/Explorando-modelos-de-gobernanza-dentro-de-Ethereum-Enterprise-Alliance--EEE.html",
          },
          {
            label: "[7] Jimenez, R. Labitconf: \"La Constitución Mínima Viable protagoniza debates sobre el futuro gobierno de Cardano\", afirma experto. Cointelegraph en español. Recuperado el 20 de marzo, de:   https://es.cointelegraph.com/news/labitconf-minimum-viable-constitution-at-the-center-of-debate-on-cardanos-future-governance-says-expert",
            url: "https://es.cointelegraph.com/news/labitconf-minimum-viable-constitution-at-the-center-of-debate-on-cardanos-future-governance-says-expert",
          },
          {
            label: "[8] Juarros, S. Gestión y gobernanza de blockchains. Ripio. Recuperado el 20 de marzo de 2024, de: https://launchpad.ripio.com/guias-capitulos/gestion-y-gobernanza-de-blockchains",
            url: "https://launchpad.ripio.com/guias-capitulos/gestion-y-gobernanza-de-blockchains",
          },
          {
            label: "[9] NEAR y su Constitución: La Revolución de la Gobernanza en el Mundo de las Criptomonedas. Crypto news. Recuperado el 20 de marzo de 2024, de: https://cripteros.com/near-protocol-y-su-constitucion/",
            url: "https://cripteros.com/near-protocol-y-su-constitucion/",
          },
          {
            label: "[10] Gobernanza de Polkadot. Polkadot en español. Recuperado el 20 de marzo de 2024, de: https://polkadot.network/blog/gobernanza-de-polkadot",
            url: "https://polkadot.network/blog/gobernanza-de-polkadot",
          },
          {
            label: "[11] Favio, A. Votación y toma de decisiones (vista rápida). Forum Cardano. Recuperado el 20 de marzo de 2024, de: https://forum.cardano.org/t/votacion-y-toma-de-decisiones-vista-rapida/46562",
            url: "https://forum.cardano.org/t/votacion-y-toma-de-decisiones-vista-rapida/46562",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-13-pools-liquidez-defi",
    level: 3,
    title: "Guía 13: Pools de liquidez y ejecución en DeFi",
    description:
      "Funcionamiento de pools de liquidez, yield farming, liquidity mining y riesgos operativos en protocolos DeFi.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+13+Introduccion",
        paragraphs: [
          "Las pools de liquidez son una pieza central de DeFi porque sustituyen el libro de órdenes tradicional por mercados automatizados.",
          "Esta guía aterriza cómo funcionan, cómo se generan incentivos y cuáles son los riesgos reales al proveer liquidez.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Pools",
        paragraphs: [
          "Una pool de liquidez es una reserva de activos depositados por usuarios para facilitar intercambios dentro de un protocolo.",
          "A cambio, los proveedores de liquidez reciben comisiones, y en algunos casos recompensas adicionales en tokens.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo",
        paragraphs: [
          "La ejecución en DeFi depende de contratos inteligentes, reglas de mercado automatizadas y mecanismos de incentivos para mantener profundidad de liquidez.",
        ],
      },
      {
        title: "¿Qué son las pools de liquidez?",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Pools+de+Liquidez",
        paragraphs: [
          "En lugar de casar compradores y vendedores en un libro de órdenes, AMMs como Uniswap usan fórmulas matemáticas para determinar precios y ejecución.",
          "Mientras más liquidez haya en una pool, menor suele ser el impacto de deslizamiento en operaciones de tamaño similar.",
        ],
      },
      {
        title: "Yield farming, staking y liquidity mining",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Yield+Farming+Staking+Liquidity+Mining",
        paragraphs: [
          "Yield farming suele implicar mover capital entre protocolos para optimizar rendimientos.",
          "Staking y liquidity mining comparten la lógica de incentivos, pero difieren en riesgo operativo, exposición a volatilidad y dependencia de la mecánica de cada protocolo.",
        ],
      },
      {
        title: "Protocolos relevantes",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Protocolos+Relevantes",
        paragraphs: [
          "Entre protocolos de referencia se encuentran Uniswap, Aave, SushiSwap, PancakeSwap y Curve, además de agregadores como 1inch.",
          "Cada uno presenta modelos de liquidez, incentivos y gobernanza distintos, por lo que la comparación debe ser técnica y no solo por APY.",
        ],
      },
      {
        title: "Riesgos operativos y de mercado",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Riesgos+Operativos",
        paragraphs: [
          "Los riesgos clave incluyen pérdida impermanente, riesgo de contrato inteligente, hacks de protocolo, variación abrupta de incentivos y ejecución en mercados de baja liquidez.",
          "No basta con mirar rendimiento: hay que evaluar seguridad del contrato, historial del protocolo, composición de la pool y profundidad real.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "Proveer liquidez en DeFi puede ser una estrategia útil, pero exige entender mecánica de mercado, incentivos y exposición de riesgo antes de ejecutar.",
          "La prioridad no es perseguir el APY más alto, sino operar con metodología y gestión de riesgo.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias del material original.",
        ],
        bullets: [
          "1. Pignoración es la acción de dejar en prenda un objeto de valor por parte de los prestatarios en garantía hacia la casa de empeño.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base del material original.",
        ],
        references: [
          {
            label: "[1] Finanzas descentralizadas: Guía de principiantes para obtener ingresos pasivos con DeFi. Cointelegraph en español. Recuperado el 20 de marzo de 2024, de: https://es.cointelegraph.com/learn/decentralized-finance-a-beginners-guide-to-earning-passive-income-with-defi",
            url: "https://es.cointelegraph.com/learn/decentralized-finance-a-beginners-guide-to-earning-passive-income-with-defi",
          },
          {
            label: "[2] ¿Qué son las pools de liquidez? Metlabs desarrollo Blockchain. Linked In. Recuperado el 20 de marzo de 2024, de: https://www.linkedin.com/pulse/qué-son-las-pools-de-liquidez-metlabsdesarrolloblockchain-pdbvf/?trk=news-guest_share-article",
            url: "https://www.linkedin.com/pulse/qué-son-las-pools-de-liquidez-metlabsdesarrolloblockchain-pdbvf/?trk=news-guest_share-article",
          },
          {
            label: "[3] Adams, H. Uniswap v3 Core. Uniswap. Recuperado el 20 de marzo de 2024, de: https://uniswap.org/whitepaper-v3.pdf",
            url: "https://uniswap.org/whitepaper-v3.pdf",
          },
          {
            label: "[4] ¿Qué es el Yield Farming? Bit 2 me academy. Recuperado el 20 de marzo de 2024, de: https://academy.bit2me.com/que-es-el-yield-farming/",
            url: "https://academy.bit2me.com/que-es-el-yield-farming/",
          },
          {
            label: "[4] Yield farming vs. Staking vs. Liquidity mining. Phemex. Recuperado el 20 de marzo de 2024, de: https://phemex.com/es/academy/yield-farming-vs-staking-vs-liquidity-mining",
            url: "https://phemex.com/es/academy/yield-farming-vs-staking-vs-liquidity-mining",
          },
          {
            label: "[5] Liquidity mining: Conozca los mejores proyectos de minería de liquidez en 2023. Be in Crypto. Recuperado el 20 de marzo de 2024, de:  https://es.beincrypto.com/liquidity-mining-mejores-proyectos-2023/",
            url: "https://es.beincrypto.com/liquidity-mining-mejores-proyectos-2023/",
          },
          {
            label: "[6]  ¿Qué es el Liquidity Mining o Minería con Liquidez o Capital? Crypto plaza. Recuperado el 20 de marzo de 2024, de: https://cryptoplaza.es/que-es-el-liquidity-mining-o-mineria-con-liquidez-o-capital/#:~:text=La%20definición%20de%20Liquidity%20Mining,entre%20todo%20el%20capital%20aportado",
            url: "https://cryptoplaza.es/que-es-el-liquidity-mining-o-mineria-con-liquidez-o-capital/#:~:text=La%20definición%20de%20Liquidity%20Mining,entre%20todo%20el%20capital%20aportado",
          },
          {
            label: "[7] Maldonado, J. ¿Qué es AAVE y cómo funciona? Cointelegraph en español. Recuperado el 20 de marzo de 2024, de:  https://es.cointelegraph.com/explained/what-is-aave-and-how-does-it-work",
            url: "https://es.cointelegraph.com/explained/what-is-aave-and-how-does-it-work",
          },
          {
            label: "[8]  Maldonado, J. ¿Qué es Uniswap y cómo funciona? Cointelegraph en español. Recuperado el 20 de marzo de 2024, de:  https://es.cointelegraph.com/explained/what-is-uniswap-and-how-does-it-work",
            url: "https://es.cointelegraph.com/explained/what-is-uniswap-and-how-does-it-work",
          },
          {
            label: "[9] Maldonado, J.  ¿Qué es SushiSwap y cómo funciona? Cointelegraph en español. Recuperado el 20 de marzo de 2024, de: https://es.cointelegraph.com/explained/what-is-sushiswap-and-how-does-it-work",
            url: "https://es.cointelegraph.com/explained/what-is-sushiswap-and-how-does-it-work",
          },
          {
            label: "[10] ¿Qué es y cómo funciona Pancake Swap? Bit 2 me academy. Recuperado el 20 de marzo de 2024, de: https://academy.bit2me.com/que-es-como-funciona-pancakeswap/",
            url: "https://academy.bit2me.com/que-es-como-funciona-pancakeswap/",
          },
          {
            label: "[11] Maldonado, J.  ¿Qué es Curve Finance y cómo funciona? Cointelegraph en español. Recuperado el 20 de marzo de 2024, de:  https://es.cointelegraph.com/explained/what-is-curve-finance-and-how-does-it-work",
            url: "https://es.cointelegraph.com/explained/what-is-curve-finance-and-how-does-it-work",
          },
          {
            label: "[12] Acerca de 1 inch. Coinbase. Recuperado el 20 de marzo de 2024, de: https://www.coinbase.com/es/price/1inch#:~%E2%84%A2:text=11NCH%2520es%2520un%2520token%2520de,entre%25201os%2520DEX%25",
            url: "https://www.coinbase.com/es/price/1inch#:~%E2%84%A2:text=11NCH%2520es%2520un%2520token%2520de,entre%25201os%2520DEX%25",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-14-papel-ia-entorno-cripto",
    level: 3,
    title: "Guía 14: El papel de la Inteligencia Artificial en el entorno Cripto",
    description:
      "Convergencia entre IA y cripto: agentes, datos, wallets inteligentes, riesgos operativos y casos de uso prácticos.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+14+Introduccion",
        paragraphs: [
          "La Inteligencia Artificial (IA) y el ecosistema cripto se están integrando a gran velocidad. Esta convergencia no es una moda aislada: responde a necesidades reales de automatización, análisis de datos y ejecución de procesos en mercados abiertos y 24/7.",
          "Mientras la IA mejora la capacidad de detectar patrones, optimizar decisiones y operar flujos complejos, blockchain aporta transparencia, trazabilidad y mecanismos programables de ejecución.",
          "En esta guía se explica, de forma práctica, dónde sí agrega valor esta combinación, dónde hay sobrepromesas, y cómo evaluar sus riesgos desde una perspectiva técnica y operativa.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+IA+Crypto",
        paragraphs: [
          "Cuando hablamos de IA en cripto, normalmente nos referimos a sistemas que clasifican, predicen, priorizan o automatizan decisiones sobre datos financieros y on-chain.",
          "No toda automatización es IA, y no toda IA implica autonomía total. En la práctica, lo más útil hoy es una arquitectura híbrida: modelos asistiendo decisiones humanas con controles claros de riesgo.",
        ],
        bullets: [
          "IA analítica: detección de anomalías, clasificación de riesgo y lectura de señales de mercado.",
          "IA generativa: asistencia en documentación, explicación técnica, soporte de usuario y generación de estrategias iniciales.",
          "Agentes: programas que ejecutan tareas en cadena y fuera de cadena bajo reglas definidas.",
          "Blockchain: capa de ejecución verificable para registrar acciones, pagos y estados de proceso.",
        ],
      },
      {
        title: "¿Por qué converge la IA con cripto?",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Convergencia+IA+Cripto",
        paragraphs: [
          "La IA necesita datos, cómputo e incentivos económicos para escalar; cripto aporta estructuras de mercado abiertas para coordinar esos tres elementos.",
          "Por su lado, cripto necesita mejores herramientas para filtrar ruido, gestionar riesgo y automatizar operaciones complejas en tiempo real.",
          "Esta complementariedad explica el crecimiento de infraestructuras descentralizadas de cómputo, redes de agentes y mercados de datos para IA [1][2][3].",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Desarrollo",
        paragraphs: [
          "La integración IA + cripto no ocurre en un solo bloque. Se construye por capas: infraestructura, datos, ejecución, seguridad y gobernanza.",
          "A continuación se resumen las capas más relevantes con ejemplos reales del ecosistema y sus implicaciones prácticas para builders e inversionistas técnicos.",
        ],
      },
      {
        title: "Infraestructura descentralizada para IA",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Infraestructura+Descentralizada",
        paragraphs: [
          "Una primera capa es la infraestructura que permite producir y evaluar trabajo de IA en redes abiertas.",
          "Bittensor, por ejemplo, organiza subredes donde participantes aportan inferencia, entrenamiento u otros commodities digitales con incentivos tokenizados [2].",
          "En paralelo, ecosistemas de datos como Ocean impulsan mercados para publicar, descubrir y monetizar activos de datos y modelos de forma programable [3][4].",
        ],
      },
      {
        title: "Agentes autónomos on-chain y off-chain",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Agentes+Autonomos",
        paragraphs: [
          "Un agente no es magia: es software con reglas, memoria de contexto y capacidad de actuar en distintos sistemas.",
          "En plataformas como Fetch.ai, los agentes pueden coordinarse, intercambiar mensajes y ejecutar tareas económicas con pagos programables [1].",
          "La clave operativa está en límites y permisos: qué puede hacer el agente, con qué presupuesto, bajo qué condiciones y con qué posibilidad de rollback o bloqueo.",
        ],
      },
      {
        title: "El rol de los datos: oráculos, calidad y trazabilidad",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Datos+Oraculos+Trazabilidad",
        paragraphs: [
          "Ningún modelo de IA supera la calidad de sus datos. En cripto, este punto es crítico porque una señal defectuosa puede activar transacciones irreversibles.",
          "Chainlink Functions es una referencia útil para entender cómo conectar contratos inteligentes con APIs externas y cómputo off-chain en un entorno descentralizado [5].",
          "Sin control de calidad de fuentes, latencia y licenciamiento de datos, la automatización se vuelve frágil. La trazabilidad y la validación cruzada no son opcionales: son parte del sistema.",
        ],
      },
      {
        title: "Wallets inteligentes y automatización (Account Abstraction)",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Account+Abstraction",
        paragraphs: [
          "Una pieza central para agentes en Web3 es la cuenta programable. ERC-4337 permite wallets más flexibles sin cambios al consenso base de Ethereum [6][7].",
          "Esto habilita políticas como límites de gasto, recuperación social, firmas múltiples, patrocinio de gas y flujos automáticos más seguros.",
          "En términos prácticos, la Account Abstraction acerca la experiencia de usuario a productos financieros modernos y reduce fricción para casos de uso con IA.",
        ],
      },
      {
        title: "Riesgos reales del cruce IA + cripto",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Riesgos+IA+Cripto",
        paragraphs: [
          "El mayor error es pensar que IA significa certeza. La IA puede amplificar errores si hay mala gobernanza de datos, controles débiles o incentivos mal diseñados.",
          "A nivel operativo, los riesgos principales son: alucinación de modelos, automatización sin límites, dependencia de APIs inestables, ataques de manipulación de datos y exceso de apalancamiento algorítmico.",
          "A nivel de usuario, también crecen las estafas asistidas por IA (suplantación, ingeniería social, promesas automatizadas de rendimientos). Reguladores y entidades de protección al consumidor ya alertan sobre estos patrones [8][9][10].",
          "Marco recomendado: gobernanza de riesgo desde diseño (risk-by-design), siguiendo estándares como NIST AI RMF y su perfil para IA generativa [8][9].",
        ],
      },
      {
        title: "Aplicaciones prácticas para LATAM",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Aplicaciones+LATAM",
        paragraphs: [
          "En LATAM, la oportunidad no está en perseguir tendencias, sino en resolver fricción real: educación financiera, remesas, pagos transfronterizos, antifraude y análisis de riesgo para usuarios sin historial bancario tradicional.",
          "Una estrategia madura combina: automatización asistida (no ciega), capas de seguridad operativa, y formación del usuario para reducir errores humanos.",
          "Para equipos pequeños, la ruta más eficiente es construir pilotos acotados con métricas claras de impacto antes de escalar a producción.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "La IA en cripto no sustituye criterio humano, lo potencia cuando existe un marco técnico sólido y disciplina de riesgo.",
          "El valor real aparece cuando se alinea tecnología con ejecución: datos confiables, cuentas programables, reglas auditables y objetivos de negocio medibles.",
          "La tesis central de esta guía es simple: primero arquitectura y control, después automatización. Sin ese orden, la complejidad se convierte en vulnerabilidad.",
          "Aclaración: este material es educativo y no constituye recomendación de inversión.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias de la guía.",
        ],
        bullets: [
          "1. Un agente autónomo no implica autonomía ilimitada; debe operar con políticas de permiso, presupuesto y supervisión.",
          "2. La trazabilidad on-chain no reemplaza la validación de calidad de datos de origen.",
          "3. Los modelos de IA pueden fallar aun con alta precisión histórica, especialmente en eventos extremos de mercado.",
          "4. El uso de IA para trading o ejecución automatizada no elimina riesgo financiero ni operacional.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base para la guía y para profundizar en implementación técnica.",
        ],
        references: [
          {
            label: "[1] Fetch.ai. (2026). Documentation: Concepts and agents infrastructure. Recuperado el 23 de marzo de 2026, de: https://fetch.ai/docs/concepts",
            url: "https://fetch.ai/docs/concepts",
          },
          {
            label: "[2] Bittensor. (2026). Official documentation. Recuperado el 23 de marzo de 2026, de: https://docs.learnbittensor.org/",
            url: "https://docs.learnbittensor.org/",
          },
          {
            label: "[3] Ocean Protocol Foundation. (2026). Official documentation. Recuperado el 23 de marzo de 2026, de: https://docs.oceanprotocol.com/",
            url: "https://docs.oceanprotocol.com/",
          },
          {
            label: "[4] Ocean Protocol Foundation. (2026). OCEAN token and decentralized AI context. Recuperado el 23 de marzo de 2026, de: https://docs.oceanprotocol.com/discover/ocean-token",
            url: "https://docs.oceanprotocol.com/discover/ocean-token",
          },
          {
            label: "[5] Chainlink Labs. (2026). Chainlink Functions documentation. Recuperado el 23 de marzo de 2026, de: https://docs.chain.link/chainlink-functions",
            url: "https://docs.chain.link/chainlink-functions",
          },
          {
            label: "[6] Ethereum Foundation. (2026). EIP-4337: Account abstraction using alt mempool. Recuperado el 23 de marzo de 2026, de: https://eips.ethereum.org/EIPS/eip-4337",
            url: "https://eips.ethereum.org/EIPS/eip-4337",
          },
          {
            label: "[7] ERC-4337 Community. (2026). ERC-4337 core standard overview. Recuperado el 23 de marzo de 2026, de: https://docs.erc4337.io/core-standards/erc-4337",
            url: "https://docs.erc4337.io/core-standards/erc-4337",
          },
          {
            label: "[8] National Institute of Standards and Technology (NIST). (2026). AI Risk Management Framework resources. Recuperado el 23 de marzo de 2026, de: https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-resources",
            url: "https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-resources",
          },
          {
            label: "[9] National Institute of Standards and Technology (NIST). (2023). AI RMF 1.0 (NIST AI 100-1). Recuperado el 23 de marzo de 2026, de: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
            url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
          },
          {
            label: "[10] National Institute of Standards and Technology (NIST). (2024). Generative AI Profile (NIST AI 600-1). Recuperado el 23 de marzo de 2026, de: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
            url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
          },
          {
            label: "[11] Federal Trade Commission (FTC). (2026). Consumer advice: What to know about cryptocurrency and scams. Recuperado el 23 de marzo de 2026, de: https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams",
            url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams",
          },
          {
            label: "[12] Federal Trade Commission (FTC). (2022). Press release: Losses in cryptocurrency scams. Recuperado el 23 de marzo de 2026, de: https://www.ftc.gov/news-events/news/press-releases/2022/06/new-analysis-finds-consumers-reported-losing-more-1-billion-cryptocurrency-scams-2021",
            url: "https://www.ftc.gov/news-events/news/press-releases/2022/06/new-analysis-finds-consumers-reported-losing-more-1-billion-cryptocurrency-scams-2021",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-15-estafas-cripto-modo-preventivo",
    level: 3,
    title: "Guía 15: Mayores estafas en modo preventivo del entorno Cripto",
    description:
      "Panorama preventivo de fraudes cripto: tipologías más comunes, señales de alerta, controles operativos y protocolo de respuesta.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+15+Introduccion",
        paragraphs: [
          "Una de las barreras más grandes de adopción en cripto no es la tecnología, es el fraude. El ecosistema avanzó en herramientas, pero también avanzaron los métodos de estafa.",
          "Por eso esta guía está redactada en modo preventivo: no para generar miedo, sino para que tengas criterios concretos antes de firmar transacciones, depositar fondos o seguir señales de terceros.",
          "La regla central es simple: en cripto la seguridad no es un módulo aparte, es parte de la operación diaria.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Fraude+Cripto",
        paragraphs: [
          "Una estafa cripto es cualquier esquema que utiliza promesas falsas, manipulación emocional o engaño técnico para transferir tus activos a direcciones controladas por atacantes.",
          "No todas las estafas son sofisticadas. Muchas funcionan por velocidad, presión psicológica y desinformación del usuario.",
        ],
        bullets: [
          "Ingeniería social: manipularte para que tú mismo entregues acceso o fondos.",
          "Compromiso técnico: enlaces maliciosos, contratos trampa, software adulterado.",
          "Falsa legitimidad: logos, sitios clonados, perfiles verificados o testimonios fabricados.",
          "Punto ciego operativo: ausencia de controles antes de aprobar, firmar o enviar.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo",
        paragraphs: [
          "A continuación se presentan las tipologías de fraude con mayor impacto, su lógica de operación y las medidas preventivas mínimas para reducir exposición.",
          "Estas categorías se repiten en distintos ciclos de mercado y plataformas. Cambia la narrativa, pero el mecanismo de estafa suele ser el mismo [1][2][3].",
        ],
      },
      {
        title: "Estafas de inversión y plataformas falsas",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Plataformas+Falsas",
        paragraphs: [
          "Es el esquema más recurrente: promesa de rendimiento alto, riesgo mínimo y supuesta trazabilidad en un panel falso.",
          "Normalmente inicia en redes sociales, grupos de mensajería o contactos directos. Después te mueven a una web/app que simula operaciones, pero no hay trading real [3][4][5].",
          "Señales rojas inmediatas: rendimiento garantizado, presión por depositar rápido, penalización por retirar, y solicitud de “impuestos” o “desbloqueo” para liberar fondos.",
        ],
      },
      {
        title: "Phishing, drainer y robo de llaves",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Phishing+y+Drainers",
        paragraphs: [
          "Aquí el atacante busca que firmes una autorización maliciosa o entregues credenciales de acceso (seed phrase, private key o códigos de recuperación).",
          "Un drainer suele funcionar con permisos amplios aprobados por el usuario en un contrato. El robo no siempre es instantáneo: puede ejecutarse horas o días después.",
          "Regla de oro: una seed phrase nunca se escribe en formularios web, chats, soporte técnico ni bots. Si la compartes, la wallet deja de ser tuya.",
        ],
      },
      {
        title: "Rug pulls, honeypots y contratos maliciosos",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Rugpulls+Honeypots",
        paragraphs: [
          "En un rug pull, el equipo o insiders retiran liquidez o manipulan el proyecto, dejando a los usuarios sin salida razonable.",
          "En un honeypot puedes comprar el token, pero no venderlo por restricciones ocultas en el contrato.",
          "Prevención base: revisar contrato, permisos de propietario, concentración de tenencia, lock de liquidez y auditoría independiente antes de exponerte.",
        ],
      },
      {
        title: "Suplantación, soporte falso y recuperación fraudulenta",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Suplantacion+y+Soporte+Falso",
        paragraphs: [
          "Otra estafa frecuente es suplantar exchanges, wallets, reguladores o supuestos “equipos de recovery”.",
          "Después de un fraude inicial, los mismos atacantes regresan como “ayuda”, pidiendo más pagos para recuperar fondos. Esto suele llamarse re-victimización.",
          "Valida siempre canales oficiales y evita resolver incidentes por mensajes directos de cuentas no verificadas [6][7][8].",
        ],
      },
      {
        title: "Estafas P2P y OTC",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=P2P+y+OTC",
        paragraphs: [
          "En P2P y OTC el riesgo principal es de contraparte: comprobantes falsos, triangulación de pagos, cuentas robadas y chargebacks.",
          "Nunca liberes activos por presión o por “capturas de pantalla”. Solo por confirmación efectiva en tu cuenta y bajo reglas claras de liquidación.",
          "Si operas montos altos, utiliza escrow confiable, contratos claros y segmentación por tramos para reducir impacto en caso de fraude.",
        ],
      },
      {
        title: "Checklist preventivo antes de mover fondos",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Checklist+Preventivo",
        paragraphs: [
          "La prevención efectiva no depende de una sola herramienta; depende de disciplina operativa repetible.",
        ],
        bullets: [
          "Verifica dominio, app y canal oficial antes de cualquier conexión.",
          "Usa wallet separada por función: una para operación y otra para resguardo.",
          "Limita aprobaciones de gasto y revoca permisos periódicamente.",
          "Activa 2FA robusto en correo, exchange y dispositivos vinculados.",
          "No operes bajo urgencia, FOMO o promesas de rendimiento garantizado.",
          "Haz una transacción de prueba antes de mover montos relevantes.",
          "Documenta hashes, direcciones y evidencia en cada operación sensible.",
          "Define un límite máximo de pérdida por operación y por plataforma.",
        ],
      },
      {
        title: "Qué hacer si ya fuiste víctima",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Respuesta+a+Incidentes",
        paragraphs: [
          "Si ocurrió un incidente, el tiempo importa. Tu objetivo inmediato es contener daño y preservar evidencia.",
        ],
        bullets: [
          "Aísla la wallet comprometida y detén nuevas interacciones.",
          "Revoca permisos en contratos donde aún tengas control.",
          "Mueve activos restantes a una wallet limpia desde dispositivo seguro.",
          "Cambia credenciales y 2FA de correo, exchange y servicios críticos.",
          "Reporta en canales oficiales (IC3, reguladores, exchange, autoridades locales) [4][6][9].",
          "Guarda evidencia completa: TX hashes, URLs, capturas, IDs de usuario y cronología del evento.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "Las mayores estafas cripto no viven en una sola plataforma; viven en hábitos inseguros repetidos.",
          "El enfoque preventivo correcto combina criterio técnico, control emocional y protocolos operativos simples pero estrictos.",
          "Si algo promete rentabilidad sin riesgo, urgencia para depositar o recuperación milagrosa, no estás frente a una oportunidad: estás frente a un vector de fraude.",
          "Aclaración: esta guía es educativa y no constituye asesoría legal ni recomendación de inversión.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias de la guía.",
        ],
        bullets: [
          "1. FOMO: Fear Of Missing Out; sesgo de urgencia por no “quedarte fuera”.",
          "2. Drainer: contrato o script diseñado para extraer activos tras una firma/aprobación del usuario.",
          "3. Rug pull: retiro abrupto de liquidez o abandono malicioso del proyecto por insiders.",
          "4. Recovery scam: fraude de “recuperación de fondos” posterior a una estafa inicial.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes base para prevención y análisis de fraude en entorno cripto.",
        ],
        references: [
          {
            label: "[1] Federal Trade Commission (FTC). (2026). Consumer advice: What to know about cryptocurrency and scams. Recuperado el 23 de marzo de 2026, de: https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams",
            url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-scams",
          },
          {
            label: "[2] Federal Trade Commission (FTC). (2022). Press release: Consumers reported losing more than $1 billion in crypto scams since 2021. Recuperado el 23 de marzo de 2026, de: https://www.ftc.gov/news-events/news/press-releases/2022/06/new-analysis-finds-consumers-reported-losing-more-1-billion-cryptocurrency-scams-2021",
            url: "https://www.ftc.gov/news-events/news/press-releases/2022/06/new-analysis-finds-consumers-reported-losing-more-1-billion-cryptocurrency-scams-2021",
          },
          {
            label: "[3] U.S. Securities and Exchange Commission (SEC). (2023). Investor alert: 5 ways fraudsters may lure victims into scams involving crypto asset securities. Recuperado el 23 de marzo de 2026, de: https://www.sec.gov/oiea/investor-alert-5-ways-fraudsters-may-lure-victims-scams-involving-crypto-asset",
            url: "https://www.sec.gov/oiea/investor-alert-5-ways-fraudsters-may-lure-victims-scams-involving-crypto-asset",
          },
          {
            label: "[4] Investor.gov (SEC). (2024). Group chats as a gateway to investment scams. Recuperado el 23 de marzo de 2026, de: https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/gateway-to-investment-scams",
            url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/gateway-to-investment-scams",
          },
          {
            label: "[5] Commodity Futures Trading Commission (CFTC) & U.S. Securities and Exchange Commission (SEC). (2024). Investor alert: Watch out for fraudulent digital asset and “crypto” trading websites. Recuperado el 23 de marzo de 2026, de: https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/watch_out_for_digital_fraud.html",
            url: "https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/watch_out_for_digital_fraud.html",
          },
          {
            label: "[6] Federal Bureau of Investigation (FBI) - Internet Crime Complaint Center (IC3). (2026). Annual reports portal. Recuperado el 23 de marzo de 2026, de: https://www.ic3.gov/AnnualReport",
            url: "https://www.ic3.gov/AnnualReport",
          },
          {
            label: "[7] Federal Bureau of Investigation (FBI) - IC3. (2024). Public service announcement: Annual report and fraud flyer. Recuperado el 23 de marzo de 2026, de: https://www.ic3.gov/PSA/2024/PSA240318",
            url: "https://www.ic3.gov/PSA/2024/PSA240318",
          },
          {
            label: "[8] Financial Crimes Enforcement Network (FinCEN). (2023). Alert: Virtual currency investment scam (“Pig Butchering”). Recuperado el 23 de marzo de 2026, de: https://www.fincen.gov/news/news-releases/fincen-issues-alert-prevalent-virtual-currency-investment-scam-commonly-known",
            url: "https://www.fincen.gov/news/news-releases/fincen-issues-alert-prevalent-virtual-currency-investment-scam-commonly-known",
          },
          {
            label: "[9] U.S. Securities and Exchange Commission (SEC). (2024). Press release 2024-134: Relationship investment scams with fake crypto platforms. Recuperado el 23 de marzo de 2026, de: https://www.sec.gov/newsroom/press-releases/2024-134",
            url: "https://www.sec.gov/newsroom/press-releases/2024-134",
          },
          {
            label: "[10] U.S. Securities and Exchange Commission (SEC). (2025). Press release 2025-144: Scheme targeting retail investors on social media. Recuperado el 23 de marzo de 2026, de: https://www.sec.gov/newsroom/press-releases/2025-144-sec-charges-three-purported-crypto-asset-trading-platforms-four-investment-clubs-scheme-targeted",
            url: "https://www.sec.gov/newsroom/press-releases/2025-144-sec-charges-three-purported-crypto-asset-trading-platforms-four-investment-clubs-scheme-targeted",
          },
          {
            label: "[11] U.S. Department of Justice (DOJ). (2025). Civil forfeiture complaint against $225M linked to cryptocurrency confidence scams. Recuperado el 23 de marzo de 2026, de: https://www.justice.gov/opa/pr/united-states-files-civil-forfeiture-complaint-against-225m-funds-involved-cryptocurrency",
            url: "https://www.justice.gov/opa/pr/united-states-files-civil-forfeiture-complaint-against-225m-funds-involved-cryptocurrency",
          },
          {
            label: "[12] TRM Labs. (2026). Crypto Crime Report 2026. Recuperado el 23 de marzo de 2026, de: https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report",
            url: "https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report",
          },
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-16-principios-regulacion-criptomonedas",
    level: 3,
    title: "Guía 16: Principios de regulación de las Criptomonedas",
    description:
      "Marco regulatorio comparado: MiCA en Europa, GENIUS y CLARITY en EE.UU., postura de China y panorama LATAM con foco en México.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Guia+16+Introduccion",
        paragraphs: [
          "Hablar de regulación cripto ya no es opcional. Si quieres operar, construir o invertir con visión de largo plazo, necesitas entender el marco legal donde vive cada protocolo, exchange o producto.",
          "Esta guía cierra la fase 3 con un enfoque comparado y práctico: qué regulan realmente las normas, cuál es su estatus al 23 de marzo de 2026 y qué implica para usuarios y proyectos.",
          "La premisa central es clara: regulación no es sinónimo de freno. Bien diseñada, reduce fraude, mejora confianza y permite que el mercado madure con reglas de juego más transparentes.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Regulacion",
        paragraphs: [
          "No existe una sola “ley cripto” global. Existen capas regulatorias: mercado de valores, pagos, prevención de lavado, protección al consumidor, custodia y reglas prudenciales para intermediarios.",
          "Por eso dos países pueden hablar de “regular cripto” y estar regulando cosas distintas.",
        ],
        bullets: [
          "Regulación de emisores: quién puede emitir y bajo qué respaldo.",
          "Regulación de intermediarios: licencias para exchanges, custodios y brokers.",
          "Regulación de conducta: publicidad, disclosure, conflictos de interés y segregación de activos.",
          "Regulación de estabilidad financiera: reservas, liquidez y gestión de riesgo sistémico.",
          "Regulación AML/CFT: prevención de lavado, trazabilidad y reporte de operaciones sospechosas.",
        ],
      },
      {
        title: "Principios de regulación en cripto",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Principios+de+Regulacion",
        paragraphs: [
          "Aunque cambie la jurisdicción, hay principios que se repiten en marcos serios.",
        ],
        bullets: [
          "Misma actividad, mismo riesgo, misma regulación: evitar arbitraje regulatorio.",
          "Separación de fondos de clientes y fondos propios del intermediario.",
          "Gobernanza y controles internos auditables.",
          "Transparencia de reservas, riesgos y políticas de redención.",
          "Supervisión proporcional: no todo actor tiene el mismo riesgo sistémico.",
          "Coordinación transfronteriza: el mercado es global, la supervisión no puede ser aislada.",
        ],
      },
      {
        title: "MiCA en Europa: alcance y estatus",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=MiCA+Europa",
        paragraphs: [
          "MiCA (Regulation (EU) 2023/1114) es el primer marco integral de alcance regional para criptoactivos en la Unión Europea [1].",
          "Sus reglas para ART y EMT (stablecoins referenciadas) aplican desde el 30 de junio de 2024, y el régimen completo aplica desde el 30 de diciembre de 2024 [1][2].",
          "Al 23 de marzo de 2026, MiCA está en fase de consolidación supervisora: ESMA mantiene registros y despliegue operativo (interim register hasta integración total prevista a mediados de 2026) [2].",
          "Punto clave: MiCA cubre principalmente emisores e intermediarios; no cierra todos los vacíos de DeFi puro o ciertos modelos NFT, por eso el debate de evolución regulatoria sigue abierto.",
        ],
      },
      {
        title: "Estados Unidos: Ley GENIUS y Ley CLARITY",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=GENIUS+y+CLARITY",
        paragraphs: [
          "En EE.UU. el debate avanzó por carriles separados: stablecoins por un lado y estructura de mercado (market structure) por otro.",
          "GENIUS Act: en el 119th Congress, S.1582 aparece con estatus de ley (Public Law No: 119-27) con fecha 18 de julio de 2025 [3].",
          "CLARITY Act: H.R.3633 (Digital Asset Market Clarity Act of 2025) pasó la Cámara el 17 de julio de 2025 y al 23 de marzo de 2026 figura remitida al Senado, sin convertirse en ley aún [4].",
          "Lectura práctica: EE.UU. muestra avance parcial. Hay mayor certidumbre relativa en stablecoins frente al mercado cripto en general, donde sigue en construcción la arquitectura final.",
        ],
      },
      {
        title: "China continental y Hong Kong: dos vías regulatorias",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=China+vs+Hong+Kong",
        paragraphs: [
          "China continental mantiene una postura restrictiva desde 2021: el marco oficial considera ilegales múltiples actividades de trading y especulación con criptomonedas [5].",
          "Hong Kong, bajo régimen propio, tomó una ruta de licenciamiento supervisado para plataformas de activos virtuales con listas públicas de operadores autorizados o en trámite [6].",
          "Además, Hong Kong activó su régimen para emisores de stablecoins el 1 de agosto de 2025 bajo lineamientos de la HKMA [7].",
          "Conclusión regional: mismo país, marcos distintos por jurisdicción. El análisis legal debe ser local, no por titulares globales.",
        ],
      },
      {
        title: "Latinoamérica: panorama regulatorio comparado",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Latam+Comparado",
        paragraphs: [
          "LATAM avanza de manera heterogénea: algunos países priorizan AML y registro, otros avanzan hacia licenciamiento operativo más completo.",
        ],
        bullets: [
          "Brasil: Ley 14.478/2022 estableció directrices de servicios de activos virtuales y el Decreto 11.563/2023 asignó al Banco Central la competencia regulatoria principal [8][9].",
          "Argentina: la CNV creó el Registro PSAV (RG 994/2024), dejando explícito que el registro inicial no equivale a licencia integral de actividad [10][11].",
          "El Salvador: la Asamblea reformó la Ley Bitcoin (Decreto 199, 29 de enero de 2025) y el uso pasó a esquema más acotado/voluntario según el nuevo marco; en paralelo, el programa EFF del FMI señaló ajuste de riesgos ligados a Bitcoin [12][13].",
          "Chile: la Ley Fintec 21.521 y su implementación por la CMF incorporaron registro/autorización para nuevos prestadores financieros tecnológicos, elevando estándares de supervisión y operación [14].",
        ],
      },
      {
        title: "México: estatus actual",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Mexico+Estatus",
        paragraphs: [
          "México no reconoce a los criptoactivos como moneda de curso legal. La Ley Fintech (LITF) define activos virtuales y permite operación bajo condiciones y autorizaciones específicas del Banco de México para ITF [15].",
          "El comunicado conjunto SHCP-Banxico-CNBV del 28 de junio de 2021 reiteró que las instituciones financieras no están autorizadas a ofrecer al público operaciones con activos virtuales en la forma amplia promovida por muchas plataformas [16].",
          "En la práctica, el ecosistema mexicano opera con una separación: actividad de plataformas cripto fuera del perímetro bancario tradicional y reglas prudenciales más estrictas para entidades financieras reguladas.",
          "Implicación operativa: para usuarios y empresas en México, compliance legal, fiscal y de prevención de fraude no es accesorio; es requisito mínimo de continuidad.",
        ],
      },
      {
        title: "Checklist regulatorio para proyectos y usuarios",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Checklist+Regulatorio",
        paragraphs: [
          "Si lanzas un producto, operas una comunidad o administras portafolio, este checklist te evita errores básicos de diseño regulatorio.",
        ],
        bullets: [
          "Identifica jurisdicción principal y jurisdicciones de usuarios.",
          "Define si tu actividad es emisión, intermediación, custodia, asesoría o pagos.",
          "Valida obligaciones AML/KYC y políticas de monitoreo transaccional.",
          "Separa legal y operativamente fondos de clientes.",
          "Documenta disclosures de riesgo y términos de servicio sin ambigüedad.",
          "Evita marketing con promesas de rendimiento garantizado.",
          "Mantén trazabilidad de decisiones de gobernanza y cambios de producto.",
          "Consulta asesoría legal local antes de escalar operaciones internacionales.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "La regulación cripto global no está terminada, pero ya no está en etapa cero: Europa consolidó un marco regional, EE.UU. avanzó parcialmente, Asia muestra modelos opuestos y LATAM evoluciona por capas.",
          "Para navegar este entorno, el criterio clave no es adivinar el próximo titular, sino operar con disciplina jurídica y técnica por jurisdicción.",
          "Esta guía cierra el programa con una idea base: en cripto, soberanía sin cumplimiento se vuelve fragilidad; innovación con cumplimiento se vuelve ventaja.",
          "Aclaración: este contenido es educativo y no constituye asesoría legal ni recomendación de inversión.",
        ],
      },
      {
        title: "Notas al pie",
        imageUrl: "https://placehold.co/1200x630/0f172a/e2e8f0?text=Notas+al+Pie",
        paragraphs: [
          "Aclaraciones complementarias de la guía.",
        ],
        bullets: [
          "1. ART y EMT son categorías específicas de MiCA para tokens referenciados a activos o moneda fiduciaria.",
          "2. “Status de ley” en EE.UU. se valida en Congress.gov por tracker legislativo y número de Public Law.",
          "3. Registro regulatorio no siempre equivale a licencia de operación integral.",
          "4. En mercados cripto transfronterizos, la carga de cumplimiento se acumula por jurisdicción.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes oficiales para estatus y principios regulatorios al 23 de marzo de 2026.",
        ],
        references: [
          {
            label: "[1] European Union. (2023). Regulation (EU) 2023/1114 on Markets in Crypto-assets (MiCA). Recuperado el 23 de marzo de 2026, de: https://eur-lex.europa.eu/EN/legal-content/summary/european-crypto-assets-regulation-mica.html",
            url: "https://eur-lex.europa.eu/EN/legal-content/summary/european-crypto-assets-regulation-mica.html",
          },
          {
            label: "[2] European Securities and Markets Authority (ESMA). (2026). Markets in Crypto-Assets Regulation (MiCA) and interim register. Recuperado el 23 de marzo de 2026, de: https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
            url: "https://www.esma.europa.eu/esmas-activities/digital-finance-and-innovation/markets-crypto-assets-regulation-mica",
          },
          {
            label: "[3] United States Congress. (2025). S.1582 GENIUS Act (Public Law No: 119-27). Recuperado el 23 de marzo de 2026, de: https://www.congress.gov/bill/119th-congress/senate-bill/1582",
            url: "https://www.congress.gov/bill/119th-congress/senate-bill/1582",
          },
          {
            label: "[4] United States Congress. (2025). H.R.3633 Digital Asset Market Clarity Act of 2025. Recuperado el 23 de marzo de 2026, de: https://www.congress.gov/bill/119th-congress/house-bill/3633",
            url: "https://www.congress.gov/bill/119th-congress/house-bill/3633",
          },
          {
            label: "[5] Library of Congress. (2021). China: Central bank issues new regulatory document on cryptocurrency trading. Recuperado el 23 de marzo de 2026, de: https://www.loc.gov/item/global-legal-monitor/2021-10-13/china-central-bank-issues-new-regulatory-document-on-cryptocurrency-trading/",
            url: "https://www.loc.gov/item/global-legal-monitor/2021-10-13/china-central-bank-issues-new-regulatory-document-on-cryptocurrency-trading/",
          },
          {
            label: "[6] Securities and Futures Commission (SFC) Hong Kong. (2026). Lists of virtual asset trading platforms. Recuperado el 23 de marzo de 2026, de: https://www.sfc.hk/en/Welcome-to-the-Fintech-Contact-Point/Virtual-assets/Virtual-asset-trading-platforms-operators/Lists-of-virtual-asset-trading-platforms",
            url: "https://www.sfc.hk/en/Welcome-to-the-Fintech-Contact-Point/Virtual-assets/Virtual-asset-trading-platforms-operators/Lists-of-virtual-asset-trading-platforms",
          },
          {
            label: "[7] Hong Kong Monetary Authority (HKMA). (2025). Implementation of regulatory regime for stablecoin issuers. Recuperado el 23 de marzo de 2026, de: https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/07/20250729-4/",
            url: "https://www.hkma.gov.hk/eng/news-and-media/press-releases/2025/07/20250729-4/",
          },
          {
            label: "[8] Presidência da República do Brasil. (2022). Lei 14.478/2022. Recuperado el 23 de marzo de 2026, de: https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/Lei/L14478.htm",
            url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/Lei/L14478.htm",
          },
          {
            label: "[9] Banco Central do Brasil. (2024). BCB details rules on virtual assets (Resolutions 519, 520, 521). Recuperado el 23 de marzo de 2026, de: https://www.bcb.gov.br/en/pressdetail/2639/nota",
            url: "https://www.bcb.gov.br/en/pressdetail/2639/nota",
          },
          {
            label: "[10] Comisión Nacional de Valores (Argentina). (2024). Resolución General 994/2024 (Registro PSAV). Recuperado el 23 de marzo de 2026, de: https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-994-2024-397598/texto",
            url: "https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-994-2024-397598/texto",
          },
          {
            label: "[11] Comisión Nacional de Valores (Argentina). (2024). Creación del Registro PSAV. Recuperado el 23 de marzo de 2026, de: https://www.argentina.gob.ar/noticias/la-cnv-crea-el-registro-de-proveedores-de-servicios-de-activos-virtuales-psav",
            url: "https://www.argentina.gob.ar/noticias/la-cnv-crea-el-registro-de-proveedores-de-servicios-de-activos-virtuales-psav",
          },
          {
            label: "[12] Asamblea Legislativa de El Salvador. (2025). Decretos por año 2025 (incluye Decreto 199: reforma Ley Bitcoin). Recuperado el 23 de marzo de 2026, de: https://www.asamblea.gob.sv/leyes-y-decretos/decretos-por-anios/2025/0disponible",
            url: "https://www.asamblea.gob.sv/leyes-y-decretos/decretos-por-anios/2025/0disponible",
          },
          {
            label: "[13] International Monetary Fund (IMF). (2025). Press Release 25/043: EFF El Salvador and Bitcoin risk treatment. Recuperado el 23 de marzo de 2026, de: https://www.imf.org/en/News/Articles/2025/02/26/pr25043-el-salvador-imf-approves-new-40-month-us1-bn-eff-arr",
            url: "https://www.imf.org/en/News/Articles/2025/02/26/pr25043-el-salvador-imf-approves-new-40-month-us1-bn-eff-arr",
          },
          {
            label: "[14] Comisión para el Mercado Financiero (Chile). (2025). Implementación Ley Fintec y registro/autorización de prestadores. Recuperado el 23 de marzo de 2026, de: https://www.cmfchile.cl/portal/prensa/615/w3-article-77135.html",
            url: "https://www.cmfchile.cl/portal/prensa/615/w3-article-77135.html",
          },
          {
            label: "[15] Diario Oficial de la Federación (México). (2018). Ley para Regular las Instituciones de Tecnología Financiera. Recuperado el 23 de marzo de 2026, de: https://www.dof.gob.mx/nota_detalle.php?codigo=5515623&fecha=09/03/2018",
            url: "https://www.dof.gob.mx/nota_detalle.php?codigo=5515623&fecha=09/03/2018",
          },
          {
            label: "[16] Secretaría de Hacienda y Crédito Público (SHCP), Banco de México y CNBV. (2021). Comunicado sobre riesgos de activos virtuales. Recuperado el 23 de marzo de 2026, de: https://www.gob.mx/shcp/prensa/banco-de-mexico-shcp-y-cnbv-advierten-sobre-riesgos-de-utilizar-activos-virtuales-275819",
            url: "https://www.gob.mx/shcp/prensa/banco-de-mexico-shcp-y-cnbv-advierten-sobre-riesgos-de-utilizar-activos-virtuales-275819",
          },
          {
            label: "[17] Banco de México. (2026). Sobre los activos virtuales: riesgos y posicionamiento. Recuperado el 23 de marzo de 2026, de: https://www.banxico.org.mx/sistemas-de-pago/sobre-activos-virtuales-rie.html",
            url: "https://www.banxico.org.mx/sistemas-de-pago/sobre-activos-virtuales-rie.html",
          },
        ],
      },
    ],
  },
];

export function getGuideBySlug(slug: string) {
  return educationGuides.find((guide) => guide.slug === slug);
}

export function getGuideIndex(slug: string) {
  return educationGuides.findIndex((guide) => guide.slug === slug);
}
