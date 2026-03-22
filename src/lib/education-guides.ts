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
            label: "Instituto Nacional de Estadística y Geografía (INEGI). (2026). Índice Nacional de Precios al Consumidor (INPC). Recuperado el 21 de marzo de 2026, de: https://www.inegi.org.mx/temas/inpc/",
            url: "https://www.inegi.org.mx/temas/inpc/",
          },
          {
            label: "Banco de México. (2026). Sistema de Información Económica (SIE). Recuperado el 21 de marzo de 2026, de: https://www.banxico.org.mx/SieInternet/",
            url: "https://www.banxico.org.mx/SieInternet/",
          },
          {
            label: "Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Educación financiera. Recuperado el 21 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "Malkiel, B. G. (2019). A Random Walk Down Wall Street (12th ed.). W. W. Norton & Company.",
            url: "https://wwnorton.com/books/9780393358384",
          },
          {
            label: "Bogle, J. C. (2017). The Little Book of Common Sense Investing (Updated ed.). Wiley.",
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
            label: "Cetesdirecto. (2026). Sitio oficial y operación de instrumentos gubernamentales. Recuperado el 21 de marzo de 2026, de: https://www.cetesdirecto.com/sites/portal/inicio",
            url: "https://www.cetesdirecto.com/sites/portal/inicio",
          },
          {
            label: "Instituto para la Protección al Ahorro Bancario (IPAB). (2026). Seguro de depósitos bancarios. Recuperado el 21 de marzo de 2026, de: https://www.gob.mx/ipab",
            url: "https://www.gob.mx/ipab",
          },
          {
            label: "Comisión Nacional Bancaria y de Valores (CNBV). (2026). Entidades supervisadas y marco regulatorio. Recuperado el 21 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "Servicio de Administración Tributaria (SAT). (2026). Régimen fiscal e ISR para personas físicas. Recuperado el 21 de marzo de 2026, de: https://www.sat.gob.mx/",
            url: "https://www.sat.gob.mx/",
          },
          {
            label: "Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Educación financiera y alertas al usuario. Recuperado el 21 de marzo de 2026, de: https://www.condusef.gob.mx/",
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
            label: "Bodie, Z., Kane, A., & Marcus, A. J. (2021). Investments (12th ed.). McGraw-Hill Education.",
            url: "https://www.mheducation.com/highered/product/investments-bodie-kane/M9781260772166.html",
          },
          {
            label: "Malkiel, B. G. (2019). A Random Walk Down Wall Street (12th ed.). W. W. Norton & Company.",
            url: "https://wwnorton.com/books/9780393358384",
          },
          {
            label: "CFA Institute. (2026). Asset allocation resources. Recuperado el 21 de marzo de 2026, de: https://www.cfainstitute.org/",
            url: "https://www.cfainstitute.org/",
          },
          {
            label: "CONDUSEF. (2026). Educación financiera para usuarios. Recuperado el 21 de marzo de 2026, de: https://www.condusef.gob.mx/",
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
            label: "Bolsa Mexicana de Valores (BMV). (2026). Mercado de capitales. Recuperado el 21 de marzo de 2026, de: https://www.bmv.com.mx/",
            url: "https://www.bmv.com.mx/",
          },
          {
            label: "S&P Dow Jones Indices. (2026). S&P 500. Recuperado el 21 de marzo de 2026, de: https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
            url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
          },
          {
            label: "Nasdaq. (2026). Nasdaq Composite Index. Recuperado el 21 de marzo de 2026, de: https://www.nasdaq.com/market-activity/index/comp",
            url: "https://www.nasdaq.com/market-activity/index/comp",
          },
          {
            label: "FTSE Russell. (2026). Russell US Indexes. Recuperado el 21 de marzo de 2026, de: https://www.ftserussell.com/products/indices/russell-us",
            url: "https://www.ftserussell.com/products/indices/russell-us",
          },
          {
            label: "Vanguard. (2026). VOO y VTI ETF profiles. Recuperado el 21 de marzo de 2026, de: https://investor.vanguard.com/investment-products/etfs",
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
            label: "S&P Dow Jones Indices. (2026). S&P 500 methodology and constituents. Recuperado el 21 de marzo de 2026, de: https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
            url: "https://www.spglobal.com/spdji/en/indices/equity/sp-500/",
          },
          {
            label: "State Street Global Advisors. (2026). Sector SPDR ETFs (XLK, XLF, XLE, etc.). Recuperado el 21 de marzo de 2026, de: https://www.ssga.com/us/en/intermediary/etfs/capabilities/sector-investing",
            url: "https://www.ssga.com/us/en/intermediary/etfs/capabilities/sector-investing",
          },
          {
            label: "Bogle, J. C. (2017). The Little Book of Common Sense Investing (Updated ed.). Wiley.",
            url: "https://www.wiley.com/en-us/The+Little+Book+of+Common+Sense+Investing%2C+Updated+and+Revised-p-9781119404507",
          },
          {
            label: "Damodaran, A. (2024). Equity Risk Premiums (Data update). New York University. Recuperado el 21 de marzo de 2026, de: https://pages.stern.nyu.edu/~adamodar/",
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
            label: "Comisión Nacional Bancaria y de Valores (CNBV). (2026). Entidades autorizadas y supervisión. Recuperado el 21 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "Bolsa Mexicana de Valores (BMV). (2026). Información de mercados y horarios. Recuperado el 21 de marzo de 2026, de: https://www.bmv.com.mx/",
            url: "https://www.bmv.com.mx/",
          },
          {
            label: "CONDUSEF. (2026). Recomendaciones de seguridad para usuarios financieros. Recuperado el 21 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "U.S. Securities and Exchange Commission (SEC). (2026). Investor.gov: Basics. Recuperado el 21 de marzo de 2026, de: https://www.investor.gov/",
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
            label: "Murphy, J. J. (1999). Technical Analysis of the Financial Markets. New York Institute of Finance.",
            url: "https://www.penguinrandomhouse.com/books/57463/technical-analysis-of-the-financial-markets-by-john-j-murphy/",
          },
          {
            label: "Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.",
            url: "https://us.macmillan.com/books/9780374533557/thinkingfastandslow",
          },
          {
            label: "Yahoo Finance. (2026). Herramientas de mercado y seguimiento de activos. Recuperado el 21 de marzo de 2026, de: https://finance.yahoo.com/",
            url: "https://finance.yahoo.com/",
          },
          {
            label: "TradingView. (2026). Plataforma de gráficos y análisis. Recuperado el 21 de marzo de 2026, de: https://www.tradingview.com/",
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
            label: "Bodie, Z., Kane, A., & Marcus, A. J. (2021). Investments (12th ed.). McGraw-Hill Education.",
            url: "https://www.mheducation.com/highered/product/investments-bodie-kane/M9781260772166.html",
          },
          {
            label: "World Gold Council. (2026). Gold as a strategic asset. Recuperado el 21 de marzo de 2026, de: https://www.gold.org/",
            url: "https://www.gold.org/",
          },
          {
            label: "SPDR. (2026). SPDR Gold Shares (GLD). Recuperado el 21 de marzo de 2026, de: https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-gold-shares-gld",
            url: "https://www.ssga.com/us/en/intermediary/etfs/funds/spdr-gold-shares-gld",
          },
          {
            label: "iShares. (2026). iShares Gold Trust (IAU). Recuperado el 21 de marzo de 2026, de: https://www.ishares.com/us/products/239561/ishares-gold-trust-fund",
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
            label: "Damodaran, A. (2024). Investment Valuation (data and teaching resources). New York University. Recuperado el 21 de marzo de 2026, de: https://pages.stern.nyu.edu/~adamodar/",
            url: "https://pages.stern.nyu.edu/~adamodar/",
          },
          {
            label: "Servicio de Administración Tributaria (SAT). (2026). Guías y obligaciones de personas físicas. Recuperado el 21 de marzo de 2026, de: https://www.sat.gob.mx/",
            url: "https://www.sat.gob.mx/",
          },
          {
            label: "Comisión Nacional Bancaria y de Valores (CNBV). (2026). Marco regulatorio del mercado de valores. Recuperado el 21 de marzo de 2026, de: https://www.gob.mx/cnbv",
            url: "https://www.gob.mx/cnbv",
          },
          {
            label: "Brealey, R. A., Myers, S. C., & Allen, F. (2019). Principles of Corporate Finance (13th ed.). McGraw-Hill.",
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
            label: "Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2026). Alertas y prevención de fraudes. Recuperado el 21 de marzo de 2026, de: https://www.condusef.gob.mx/",
            url: "https://www.condusef.gob.mx/",
          },
          {
            label: "Cybersecurity and Infrastructure Security Agency (CISA). (2026). Use strong passwords and multi-factor authentication. Recuperado el 21 de marzo de 2026, de: https://www.cisa.gov/secure-our-world",
            url: "https://www.cisa.gov/secure-our-world",
          },
          {
            label: "U.S. Securities and Exchange Commission (SEC). (2026). Investor alerts and bulletins. Recuperado el 21 de marzo de 2026, de: https://www.investor.gov/",
            url: "https://www.investor.gov/",
          },
          {
            label: "Comisión Nacional Bancaria y de Valores (CNBV). (2026). Recomendaciones de seguridad para usuarios financieros. Recuperado el 21 de marzo de 2026, de: https://www.gob.mx/cnbv",
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
    description: "Introducción a dinero, bancos, blockchain y fundamentos de cripto.",
    sourceUrl:
      "https://docs.google.com/document/d/1o8mbXkChaBfir6pTLAuV5dTHDbFIOw-pO_YfuqNRymI/edit?tab=t.0",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/18181b/a78bfa?text=Introduccion+Criptomonedas",
        paragraphs: [
          "Las criptomonedas son activos digitales que, a través de su cifrado criptográfico, brindan confianza y seguridad en las transacciones, integridad sin intermediarios, rapidez en los pagos y bajas tasas al momento de realizar operaciones.",
          "Antes de entrar en materia, hay que remontarnos un poco hacia la historia del dinero.",
        ],
      },
      {
        title: "¿Qué es el dinero?",
        imageUrl: "https://placehold.co/1200x630/0f172a/93c5fd?text=Que+es+el+Dinero",
        paragraphs: [
          "El dinero es un medio de cambio para la adquisición de bienes y servicios, o incluso la herramienta que utilizamos para el pago de obligaciones.",
          "Todos los días asociamos un precio a los objetos de acuerdo con su valor intrínseco y a otros factores como su disponibilidad (oferta) y las necesidades de las personas (demanda) [1].",
        ],
      },
      {
        title: "Historia del dinero y los bancos",
        imageUrl: "https://placehold.co/1200x630/1e293b/fde68a?text=Historia+del+Dinero+y+los+Bancos",
        paragraphs: [
          "A lo largo de la historia se tuvieron distintas herramientas de cambio para la adquisición de productos [2].",
          "La importancia de las instituciones financieras es tan grande que, apenas hace pocos años, con el avance de la tecnología, estas tuvieron grandes hitos para poder manejar el dinero: cheques, tarjetas de crédito y débito, banca por internet y aplicaciones para transferencias y pago de servicios.",
          "Como parte del progreso tecnológico y naciendo como alternativa a los bancos, surgen las criptomonedas, resolviendo problemas de disposición del dinero, altos cobros, tiempos de espera en sucursales y envíos largos y costosos.",
        ],
        bullets: [
          "El trueque (8000-4000 A.C).",
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
          "Satoshi Nakamoto es el pseudónimo del creador o creadores de Bitcoin y pioneros de Blockchain, cuyo objetivo fue que se aceptara como cualquier otra moneda para la compra de bienes y servicios.",
          "Su valor yace en la oferta y demanda de sí misma, dependiendo de su escasez y especulación. Solo se crearán 21 millones [3] y, conforme pasa el tiempo, nos acercamos a llenar esta cifra. La acción consistente en la creación de estos se denomina minar.",
          "Desde inicios de 2021, la moneda tuvo un repunte enorme, lo cual impulsó a compañías y personas a invertir en ella, incluyendo nombres como Jack Dorsey, Elon Musk con Tesla y la propia Mastercard.",
          "Pero no todo es favorable: el funcionamiento de las criptomonedas en general (Bitcoin, Ethereum, Litecoin, XRP, etc.) recae en la descentralización. Sus transacciones no circulan por bancos o gobiernos, y se creó un sistema para transferir y operar dinero sin intermediarios, reduciendo tiempos y comisiones. También es cierto que, en un primer momento, casi no había restricciones y la regulación era escasa.",
        ],
      },
      {
        title: "Trilema de la escalabilidad",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Trilema+de+la+Escalabilidad",
        paragraphs: [
          "Las criptomonedas trabajan con el trilema de la escalabilidad, compuesto por seguridad, descentralización y escalabilidad. Para que el trilema se satisfaga, se sacrifica una de las tres aristas para que la criptomoneda pueda funcionar.",
        ],
        bullets: [
          "Seguridad: ausencia de peligro o riesgo; en informática, proteger la integridad y privacidad de la información de un sistema [4]. Ningún sistema es completamente seguro.",
          "Descentralización: desacoplo de bancos o entidades gubernamentales.",
          "Escalabilidad: capacidad de realizar y asentar múltiples transacciones por segundo. Bitcoin permite alrededor de 7 transacciones por segundo, mientras Visa alrededor de 65,000 [5].",
        ],
      },
      {
        title: "Creación de las criptomonedas",
        imageUrl: "https://placehold.co/1200x630/111827/fca5a5?text=Creacion+de+las+Criptomonedas",
        paragraphs: [
          "Cada criptomoneda tiene un funcionamiento único. Pueden compartir similitudes, pero tienen propósitos distintos, por lo que es importante revisar sus whitepapers para conocer sus metas.",
          "En el caso de Bitcoin, la creación se realiza mediante “minado”: a una computadora se le plantea un problema matemático complejo y, al resolverlo, recibe un bitcoin o una fracción. Conforme se acerca al límite de 21 millones, la recompensa se vuelve cada vez menor (halving).",
        ],
      },
      {
        title: "Asentamiento de registros",
        imageUrl: "https://placehold.co/1200x630/0b1324/67e8f9?text=Asentamiento+de+Registros",
        paragraphs: [
          "Los registros de las transacciones se efectúan de forma similar a un registro contable: activos y pasivos donde se registra la operación entre dos o más partes; alguien tiene un gasto y alguien un ingreso. Estos libros son públicos y los asentamientos son accesibles para todos.",
          "Es muy difícil hackear un protocolo de criptomonedas porque funcionan con tecnología Peer to Peer (P2P). Como en Ares, los usuarios pueden actuar como clientes y servidores al mismo tiempo.",
          "En esa arquitectura, la información puede estar distribuida en múltiples equipos del mundo. Si una canción estaba en varios servidores, podías cambiar de uno a otro según velocidad o disponibilidad. Al descargarla, te convertías también en servidor para otros.",
          "La red de servidores de las criptomonedas está descentralizada y distribuida globalmente. Para alterar un sistema así, un atacante tendría que comprometer más del 51% de los equipos enlazados; de otra forma, los nodos honestos reemplazan registros alterados al sincronizarse.",
        ],
      },
      {
        title: "Cómo funciona Blockchain",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Como+Funciona+Blockchain",
        paragraphs: [
          "Blockchain funciona como un sistema distribuido de consenso y registro, donde múltiples nodos verifican y replican la información para mantener integridad y disponibilidad.",
        ],
      },
      {
        title: "Analogía del problema de los generales bizantinos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Generales+Bizantinos+y+Consenso",
        paragraphs: [
          "Durante la pelea por mantener Constantinopla como parte del imperio Romano contra los turcos-otomanos, un grupo de generales romanos se auto-organizó para hacer frente a la batalla.",
          "Los generales necesitaban confiar entre sí y coordinar cuándo atacar o replegarse. Esta analogía ayuda a entender por qué los nodos en una red distribuida necesitan compartir información rápida, confiable y consistente para llegar a acuerdos [7].",
          "Ese principio está en el núcleo del desempeño de Bitcoin y de monedas basadas en prueba de trabajo (PoW, Proof of Work).",
        ],
      },
      {
        title: "Cadenas Blockchain",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Cadenas+Blockchain",
        paragraphs: [
          "Las bases de datos tradicionales tienen propiedades CRUD (Create, Read, Update y Delete). En contraste, las bases de datos blockchain son más restringidas: esencialmente leer y escribir, siendo escribir una sola vez.",
          "Cuando un registro queda asentado, no se puede borrar ni modificar. El asentamiento debe replicarse entre servidores distribuidos globalmente y, una vez confirmado por la red, se concreta la transacción.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/f9a8d4?text=Conclusion",
        paragraphs: [
          "En resumen, la tecnología avanza de forma acelerada y muchas veces no avisa cuándo ya cambió todo. No se sabe exactamente a qué se debió la creación de las criptomonedas, pero su impacto y adopción son innegables.",
          "Como toda revolución, se cierran negocios y empleos para abrir otros nuevos. Como parte de la evolución, resistirse al cambio es normal, pero también lo es adaptarse y aprender continuamente.",
          "No todas son buenas noticias: por el anonimato, las criptomonedas también pueden facilitar respaldo de actividades ilícitas o corrupción.",
          "Si deseas profundizar en el funcionamiento de cada criptomoneda, los whitepapers explican métodos de transacción, minado y registro con fundamentos matemático-criptográficos para demostrar seguridad y utilidad.",
          "Esta es la primera entrega de estas guías, complementando paso por paso. Para dudas, sugerencias o aprendizaje visual en video corto, puedes contactarnos en redes sociales como Facebook, Instagram y TikTok.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "¿Para qué sirve el dinero? (Santander)",
            url: "https://www.santander.com/es/stories/para-que-sirve-el-dinero",
          },
          {
            label: "Historia del Dinero (Banco de México)",
            url: "https://www.banxico.org.mx/mibanxico//_pdfs/historia-del-dinero.pdf",
          },
          {
            label: "El número de bitcoins es finito, no podrá haber más de 21 millones (Xataka)",
            url: "https://cutt.ly/NncK3a2",
          },
          {
            label: "Definición de seguridad informática",
            url: "https://definicion.de/seguridad-informatica/",
          },
          {
            label: "VisaNet: el poder de conectar al mundo",
            url: "https://www.visa.com.mx/la-diferencia-visa/impacto-global/visanet-poder-conectar-mundo.html",
          },
          {
            label: "El Bitcoin y las criptomonedas: ¿El dinero del futuro? (ENAE)",
            url: "https://www.enae.es/blog/el-bitcoin-y-las-criptomonedas-el-dinero-del-futuro",
          },
          {
            label: "Criptomonedas: qué es el problema de los generales bizantinos y por qué explica el origen del bitcoin (BBC News Mundo)",
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
    description: "Tipos de wallets, claves, custodia y buenas prácticas de seguridad.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/93c5fd?text=Introduccion+a+Wallets",
        paragraphs: [
          "Una wallet (del inglés, cartera) es el lugar donde una persona o entidad puede alojar activos de distintas criptomonedas. Existen wallets exclusivas para ciertos activos y otras que permiten resguardar múltiples monedas.",
          "Para comprar criptomonedas normalmente se usa dinero fiduciario (emitido por bancos centrales), mediante transferencias bancarias hacia la app o sitio de la empresa de la wallet.",
          "La criptografía proviene del griego y significa “el arte de ocultar mensajes” [1]. Su propósito no es impedir por completo que exista un intruso en el canal de comunicación, sino hacer que leer o alterar el mensaje sea extremadamente difícil.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/c4b5fd?text=Conceptos+Basicos+de+Wallets",
        paragraphs: [
          "Las wallets pueden verse como empresas que, por medio de aplicaciones o sitios web, resguardan activos digitales con la metáfora de “carteras digitales”.",
          "Las criptomonedas se basan en algoritmos criptográficos que funcionan como candados de seguridad. Los dos grupos principales son simétricos y asimétricos [2].",
          "Una metáfora de criptografía asimétrica es la de un departamento: la llave pública permite acceder al edificio y la llave privada al cuarto personal. Si no tienes ambas, no puedes acceder a tus pertenencias.",
          "Los algoritmos asimétricos ofrecen alto nivel de seguridad, aunque suelen ser más lentos en el cifrado.",
          "Los algoritmos simétricos usan una sola llave para cifrar y descifrar información. Son más rápidos, aunque menos robustos que los asimétricos, y suelen emplearse en mecanismos como autenticación de dos pasos o recuperación de contraseñas [3].",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo+Tipos+de+Wallets",
        paragraphs: [
          "Existen distintos tipos de wallets y cada una implica ventajas y desventajas según nivel de custodia, facilidad de uso y seguridad.",
        ],
      },
      {
        title: "Wallets calientes y wallets frías",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Hot+Wallets+vs+Cold+Wallets",
        paragraphs: [
          "Una clasificación común divide wallets en calientes (hot) y frías (cold). Igual que en otros sistemas, cada enfoque tiene tradeoffs entre practicidad y control.",
        ],
      },
      {
        title: "Wallets calientes",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Wallets+Calientes",
        paragraphs: [
          "Las hot wallets son las más comunes y la forma más sencilla de acceder a criptoactivos. Su característica crítica es que, en la mayoría de casos, no eres dueño directo de tus llaves privadas.",
          "Muchas operan como exchanges: permiten cambiar dinero fiduciario por criptomonedas rápidamente, actuando como intermediarios.",
          "El riesgo principal es de custodia: si la empresa controla tus llaves, controla el acceso a tus activos. Casos como FTX muestran que una plataforma puede quebrar o desaparecer [4].",
          "Algunas opciones reguladas pueden ofrecer mayor protección local (por ejemplo, Bitso en México bajo marcos regulatorios aplicables).",
        ],
        bullets: [
          "Ventaja: compra y resguardo de activos desde smartphone de forma sencilla.",
          "Ventaja: transferencias rápidas entre personas con comisiones bajas respecto a alternativas tradicionales.",
          "Ventaja: facilidad para fondeo desde bancos e incluso pagos en establecimientos físicos según proveedor.",
          "Ejemplos: Binance, Coinbase, Trust Wallet, Coinomi.",
        ],
      },
      {
        title: "Wallets frías",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Wallets+Frias",
        paragraphs: [
          "Las cold wallets son carteras offline. Aquí tú tienes control de tus llaves y, por lo tanto, control directo de tus activos.",
          "El costo de esa soberanía es la responsabilidad completa de administración y resguardo. Si pierdes tus llaves o respaldos, perder acceso puede ser irreversible.",
          "Con el auge de almacenamiento digital y nube, se discutieron ampliamente factores de pérdida de información y recuperación [6]. También hay casos famosos de pérdida de discos con Bitcoin [5].",
        ],
        bullets: [
          "Ventaja: control total del dinero al ser dueño de tus llaves.",
          "Ventaja: posibilidad de respaldar archivos en múltiples medios físicos.",
          "Ventaja: al estar offline, menor superficie ante fraudes o ciberataques remotos.",
          "Ejemplo: dispositivos Ledger con autenticación avanzada [7].",
        ],
      },
      {
        title: "Wallets de un solo protocolo",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Wallets+de+Un+Solo+Protocolo",
        paragraphs: [
          "Estas wallets se enfocan en activos de una blockchain específica y surgieron desde etapas tempranas del ecosistema.",
          "Su principal ventaja es la especialización para gestionar el flujo de una sola red y sus activos.",
        ],
        bullets: [
          "Ejemplos: Bitcoin Wallet (Bitcoin), MetaMask (Ethereum), Phantom (Solana), Yoroi (Cardano).",
        ],
      },
      {
        title: "Wallets de distintos protocolos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Wallets+Multicadena",
        paragraphs: [
          "Estas carteras permiten almacenar y gestionar múltiples activos y redes desde una misma interfaz.",
          "Suelen facilitar intercambio entre activos y, en muchos casos, la custodia de llaves recae en la empresa (modelo hot wallet).",
          "Algunas plataformas han ofrecido rendimiento por mantener fondos, aunque estos programas pueden cambiar por condiciones del mercado.",
          "También hay integraciones interesantes en navegadores y fabricantes de hardware móviles [8][9].",
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
          "Todo sistema tiene ventajas y desventajas, y elegir wallet implica balancear comodidad, control y riesgo.",
          "Esta guía resume opciones para adquirir y alojar criptomonedas de forma clara, permitiendo tomar decisiones con base en necesidades e intereses propios.",
          "Una sociedad mejor informada reduce fraudes, mejora hábitos de ciberseguridad y puede impulsar cultura de ahorro e inversión.",
          "Esta es la segunda guía del recorrido cripto; en siguientes entregas se profundizará en cómo adquirir activos en distintos tipos de wallets.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/0f172a/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "Criptografía: el arte de cifrar mensajes (Becas Santander)",
            url: "https://www.becas-santander.com/es/blog/criptografia.html",
          },
          {
            label: "Todo sobre criptografía: algoritmos de clave simétrica y asimétrica (Redes Zone)",
            url: "https://www.redeszone.net/tutoriales/seguridad/criptografia-algoritmos-clave-simetrica-asimetrica/",
          },
          {
            label: "Encriptación simétrica y asimétrica: conoce sus diferencias (GB Advisors)",
            url: "https://www.gb-advisors.com/es/encriptacion-simetrica-y-asimetrica-conoce-sus-diferencias/",
          },
          {
            label: "¿Qué pasó con FTX? Esto es lo que tienes que saber (New York Times)",
            url: "https://www.nytimes.com/es/2022/11/14/espanol/ftx-criptomonedas-que-paso.html",
          },
          {
            label: "315 millones de euros en bitcoins: buscando un disco duro en un vertedero (Xataka)",
            url: "https://www.xataka.com/criptomonedas/315-millones-euros-bitcoins-hombre-que-lleva-anos-buscando-disco-duro-vertedero-1",
          },
          {
            label: "Principales factores que causan una pérdida de información (Recovery Labs)",
            url: "https://www.recoverylabs.com/ayuda-y-soporte/data-recovery-white-papers/informes/principales-factores-que-causan-una-perdida-de-informacion/",
          },
          {
            label: "Ledger Nano S: Secure multi-currency hardware wallet (Ledger)",
            url: "https://www.ledger.com/ledger-nano-s-secure-multi-currency-hardware-wallet",
          },
          {
            label: "Opera Crypto Browser y mundo dApps, NFTs y criptomonedas (Xataka)",
            url: "https://www.xataka.com/aplicaciones/vistazo-a-opera-crypto-browser-navegador-web3-que-nos-prepara-para-mundo-dapps-nfts-criptomonedas",
          },
          {
            label: "Samsung apuesta por criptomonedas y blockchain en Galaxy (Andro4all)",
            url: "https://andro4all.com/samsung/samsung-apuesta-por-las-criptomonedas-y-el-blockchain-en-la-ultima-actualizacion-de-sus-moviles-galaxy",
          },
        ],
      },
    ],
  },
  {
    slug: "level-1-guide-3-bitcoin-blockchain-smart-contracts",
    level: 1,
    title: "Guía 3: Bitcoin, Blockchain y Smart Contracts",
    description: "Valor de BTC, Lightning Network, SHA-256 y contratos inteligentes.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Introduccion+Bitcoin",
        paragraphs: [
          "Bitcoin nace en 2008 por una persona o equipo con el pseudónimo de Satoshi Nakamoto. Existen distintas teorías sobre su origen, pero su impacto abrió un sinfín de nuevos caminos en el ecosistema digital.",
          "Esta alternativa busca consolidarse como moneda de cambio con el paso del tiempo.",
          "La primera transacción oficial de Bitcoin fue la compra de dos pizzas en 2010 por alrededor de 10,000 BTC, un hecho histórico conocido como Bitcoin Pizza Day [1].",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+BTC",
        paragraphs: [
          "Antes de profundizar, es clave comprender cómo se representa Bitcoin en mercados, qué factores influyen en su valor y cómo el ecosistema condiciona su comportamiento.",
        ],
      },
      {
        title: "Abreviación de Bitcoin",
        imageUrl: "https://placehold.co/1200x630/172554/c4b5fd?text=Abreviacion+de+Bitcoin",
        paragraphs: [
          "De la misma forma que las divisas tradicionales usan abreviaciones (USD, EUR, GBP, MXN), Bitcoin usa la abreviación BTC.",
          "Su par más analizado es BTC/USD, referencia principal para observar precio, tendencia y volatilidad.",
        ],
      },
      {
        title: "Cómo se determina el valor de BTC",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Valor+de+BTC",
        paragraphs: [
          "En general, el valor de las criptomonedas puede explicarse por tres factores principales [2]: oferta y demanda, percepción/especulación, y ecosistema.",
          "En oferta y demanda, Bitcoin tiene un límite máximo de 21 millones de monedas. Además, 1 BTC equivale a 100 millones de satoshis. La escasez progresiva impacta su precio por ley de oferta y demanda [3].",
          "En percepción y especulación, Bitcoin marca tendencia sobre el mercado cripto por ser el primer activo del sector, y su precio se mueve por noticias, narrativas y expectativas.",
          "En ecosistema, grandes tenedores (ballenas), ataques cibernéticos y fraudes/hackeos en exchanges pueden afectar confianza, liquidez y precio [4].",
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
          "Para entender mejor Bitcoin, conviene revisar su escalabilidad, base tecnológica y mecanismos criptográficos que le dan seguridad y funcionamiento.",
        ],
      },
      {
        title: "Qué es Lighting Network",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Lighting+Network",
        paragraphs: [
          "Bitcoin procesa alrededor de 7 transacciones por segundo, lo que puede ser insuficiente para escala global. Por ello surge Lighting Network como capa externa para aumentar capacidad [5].",
          "Su objetivo es desahogar transacciones de la capa base con confirmaciones más rápidas y costos más bajos.",
          "Entre sus limitaciones, las partes deben operar dentro de canales compatibles y la liquidez disponible puede restringir operaciones.",
        ],
      },
      {
        title: "Qué es Blockchain",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Que+es+Blockchain",
        paragraphs: [
          "Blockchain recibe su nombre por la forma en que registra operaciones: bloques enlazados entre sí, donde cada transacción nueva se apoya en la información previa.",
          "Cada operación valida emisor, receptor, monto e integridad de datos. Si la red acepta el registro, se confirma la transacción.",
          "Si existe un error en el proceso, la operación se revierte y los fondos regresan al emisor. Si el bloque actual está saturado, la transacción puede esperar al siguiente.",
        ],
      },
      {
        title: "Importancia del algoritmo SHA-256",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=SHA-256",
        paragraphs: [
          "SHA significa Secure Hash Algorithm y es el algoritmo de hash usado por Bitcoin para proteger la integridad de la información [6].",
          "Un hash mantiene longitud fija de salida sin importar el tamaño de entrada. Un pequeño cambio en el mensaje original genera una salida completamente distinta.",
          "Es un componente clave de seguridad y confianza en la red. También existe interés en analizar su robustez frente al avance del cómputo cuántico.",
        ],
      },
      {
        title: "Qué son los smart contracts",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Smart+Contracts",
        paragraphs: [
          "Los contratos inteligentes son una abstracción digital de acuerdos entre partes. A medida que se cumplen condiciones pactadas, el contrato se ejecuta automáticamente [7].",
          "En términos prácticos, cumplen un rol parecido al de validación y garantía entre partes, reduciendo fricción y aumentando trazabilidad.",
        ],
      },
      {
        title: "Proceso de los contratos inteligentes",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Proceso+Smart+Contracts",
        paragraphs: [
          "En cadenas blockchain, el flujo usa firmas criptográficas y validaciones sucesivas: se firma, se verifica y se replica por participantes de la red.",
          "Enviar mensaje original y mensaje cifrado permite detectar alteraciones por no maleabilidad. Si hay incompatibilidad, la operación se detiene por seguridad.",
          "Esta lógica preserva fe, legalidad técnica e integridad del proceso transaccional.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Conclusion",
        paragraphs: [
          "Con esta tercera guía se cierra la primera faceta del programa fundamental, enfocada en introducir conceptos base de criptomonedas con ejemplos simples y efectivos.",
          "Muchos conceptos complejos fueron resumidos para facilitar su comprensión y motivar aprendizaje continuo.",
          "La siguiente fase abordará temas más profundos y técnicos, acompañando el proceso paso a paso.",
          "Si deseas ampliar sobre Bitcoin, puedes revisar su whitepaper en español. Para dudas o sugerencias, también puedes contactar en redes sociales.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "Bitcoin Pizza Day: así se compró la pizza más cara de la historia (Milenio Negocios)",
            url: "https://www.milenio.com/negocios/bitcoin-pizza-day-compro-pizza-cara-historia",
          },
          {
            label: "3 factores clave que determinan el valor de las criptomonedas (Expansión MX)",
            url: "https://expansion.mx/mercados/2022/02/22/3-factores-clave-que-determinan-el-valor-de-las-criptomonedas",
          },
          {
            label: "Ley de oferta y demanda (Economipedia)",
            url: "https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html",
          },
          {
            label: "Grandes criptoestafas: fraudes y hackeos en la era del bitcoin (GQ)",
            url: "https://www.revistagq.com/noticias/articulo/estafas-criptomoneda-bitcoin-fraude-hackeo",
          },
          {
            label: "¿Qué es y cómo funciona la Lightning Network? (Bit2Me Academy)",
            url: "https://academy.bit2me.com/lightning-network/",
          },
          {
            label: "¿Qué es un hash y cómo funciona? (Kaspersky)",
            url: "https://latam.kaspersky.com/blog/que-es-un-hash-y-como-funciona/2806/",
          },
          {
            label: "Smart contracts: qué son y para qué sirven (Santander)",
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
    description: "Plataforma Ethereum, EVM, ETH, fees, tokens y evolución a Ethereum 2.0.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+Ethereum",
        paragraphs: [
          "Ethereum es un cambia reglas. Es uno de los inventos más adelantados de la era cripto por la amplitud de casos de uso que abrió en tecnología y finanzas.",
          "A lo largo de esta guía se explican paso a paso sus conceptos clave y el impacto que ha tenido en nuevas propuestas de software descentralizado.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Ethereum",
        paragraphs: [
          "Para entender Ethereum es necesario separar plataforma, moneda nativa, ejecución de contratos y arquitectura de aplicaciones.",
        ],
      },
      {
        title: "Que es Ethereum",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Que+es+Ethereum",
        paragraphs: [
          "Vitalik Buterin es su principal creador. Ethereum no es una criptomoneda: es una plataforma de aplicaciones descentralizadas.",
          "Esto permite construir software (apps móviles, web, escritorio, etc.) con información alojada en una base de datos descentralizada.",
          "En términos de arquitectura, Ethereum fortalece el back-end y lógica distribuida, mientras equipos de producto se enfocan en front-end y experiencia de usuario.",
          "En la práctica se parece al cómputo en la nube, pero con modelo de red blockchain donde el costo operativo se refleja en comisiones por transacción.",
        ],
        bullets: [
          "Vista: interfaz y solicitud del usuario.",
          "Modelo: datos, reglas y persistencia.",
          "Controlador: lógica de ejecución y respuestas al usuario.",
        ],
      },
      {
        title: "Que es Ethereum Virtual Machine (EVM)",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=EVM",
        paragraphs: [
          "La EVM es el entorno donde se implementan y ejecutan smart contracts [2].",
          "Su mayor ventaja es la compatibilidad: abstrae diferencias de sistemas operativos y entornos, similar al concepto de una máquina virtual.",
          "Su principal desventaja es el consumo de recursos, ya que este tipo de entornos puede ser pesado en cómputo.",
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
          "Ether (ETH) es la moneda nativa de la red Ethereum.",
          "No debe confundirse red (Ethereum) con moneda (ETH).",
          "A diferencia de BTC, ETH no tiene un límite fijo equivalente a los 21 millones. Su valor depende fuertemente de adopción, especulación y actividad del ecosistema.",
          "El tiempo típico de confirmación en Ethereum es mucho menor al de Bitcoin (segundos vs minutos en condiciones normales) [3].",
          "Un Gwei es una subdivisión de ETH: 1 ETH equivale a 1,000,000,000 Gwei.",
        ],
      },
      {
        title: "Qué son los gases o fees",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Gases+o+Fees",
        paragraphs: [
          "Los gases o fees son tarifas de red por ejecutar transacciones u operaciones de contratos.",
          "Su costo varía según demanda de red, complejidad de operación y prioridad de confirmación.",
        ],
      },
      {
        title: "Bifurcación de Ethereum y Ethereum Classic",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Ethereum+vs+Ethereum+Classic",
        paragraphs: [
          "Ethereum levantó inversión temprana con fuerte apoyo de comunidad. Tras el incidente de seguridad asociado al contexto DAO, se produjo una bifurcación de la red [4][5].",
          "El resultado fue la continuidad de dos rutas: Ethereum Classic (visión original) y Ethereum (rama que priorizó cambios de seguridad).",
          "Ambas redes comparten origen, pero su trayectoria técnica y de gobernanza fue divergiendo con el tiempo.",
        ],
      },
      {
        title: "Ethereum 2.0",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Ethereum+2.0",
        paragraphs: [
          "A finales de 2022, Ethereum completó The Merge: migración de Proof of Work (PoW) a Proof of Stake (PoS) [6].",
          "Con PoS, participantes bloquean capital para validar red y recibir recompensas, en lugar de minar con cómputo intensivo [7].",
          "Este cambio mejoró eficiencia energética y permitió mejoras en capacidad de evolución del protocolo.",
        ],
        bullets: [
          "Menor costo energético.",
          "Base para mayor escalabilidad.",
          "Mejoras progresivas en eficiencia de red y experiencia.",
        ],
      },
      {
        title: "Qué son los tokens nativos y los tokens no nativos",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Tokens+Nativos+y+No+Nativos",
        paragraphs: [
          "Token nativo: activo originario de una red (ETH, SOL, ADA, etc.).",
          "Token no nativo: activo emitido sobre la infraestructura de otra red principal [8][9].",
          "Este modelo permite lanzar proyectos con menor fricción técnica, aprovechando seguridad y herramientas del protocolo anfitrión.",
          "Un ejemplo de adopción empresarial es el caso de Polygon en iniciativas corporativas como el programa de Disney [10].",
        ],
      },
      {
        title: "¿Cuál es la importancia de Ethereum?",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Importancia+de+Ethereum",
        paragraphs: [
          "Ethereum es un pilar para nuevas capas de innovación: NFTs, DeFi, GameFi y componentes clave del metaverso y la evolución de Web3.",
          "Su mayor aporte es cambiar el paradigma del desarrollo y de las finanzas al introducir modelos descentralizados programables.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/111827/e5e7eb?text=Conclusion",
        paragraphs: [
          "Ethereum exige una curva de aprendizaje mayor sobre la base de Bitcoin, pero abre una siguiente era para desarrollo de software descentralizado.",
          "Esta guía cierra la introducción al proyecto y abre la segunda faceta del programa intermedio, enfocada en propuestas vigentes que cambian el status quo tecnológico.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "El patrón modelo-vista-controlador: arquitectura y frameworks explicados (freeCodeCamp)",
            url: "https://www.freecodecamp.org/espanol/news/el-modelo-de-arquitectura-view-controller-pattern/",
          },
          {
            label: "Ethereum Virtual Machine, el corazón de la bestia (Ripio)",
            url: "https://launchpad.ripio.com/blog/ethereum-virtual-machine-el-corazon-de-la-bestia",
          },
          {
            label: "¿Cuánto tarda una transacción de criptomonedas? (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/explained/how-long-does-a-cryptocurrency-transaction-take",
          },
          {
            label: "Ethereum vs. Ethereum Classic (CoinMarketCap Alexandria)",
            url: "https://coinmarketcap.com/alexandria/es/article/ethereum-vs-ethereum-classic",
          },
          {
            label: "Qué es una DAO (Ripio)",
            url: "https://launchpad.ripio.com/blog/que-es-una-dao",
          },
          {
            label: "Qué es Ethereum 2.0 y The Merge (Xataka)",
            url: "https://www.xataka.com/criptomonedas/que-ethereum-2-0-criptodivisa-renace-nueva-cadena-bloques-transacciones-adios-a-mineria-gpus",
          },
          {
            label: "¿Qué es Proof of Stake (PoS)? (Binance Academy)",
            url: "https://academy.binance.com/es/articles/proof-of-stake-explained",
          },
          {
            label: "¿Qué es un token? (Coinbase Learn)",
            url: "https://www.coinbase.com/es-LA/learn/crypto-basics/what-is-a-token",
          },
          {
            label: "¿Qué son los tokens nativos? (24 Noticias Bitcoin)",
            url: "https://24noticiasbitcoin.com/que-son-los-tokens-nativos/",
          },
          {
            label: "MATIC surges as Disney chooses Polygon for accelerator program (CoinDesk)",
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
          "La web ha evolucionado en ciclos claramente diferenciados: primera etapa de navegación y sitios, segunda de redes sociales y nube, y tercera orientada a descentralización, mayor soberanía digital e integración de nuevas tecnologías.",
          "Hoy estamos en una transición de Web 2 hacia Web 3, con foco en privacidad del usuario, nuevas arquitecturas de aplicaciones y modelos descentralizados.",
          "Esta guía explica el contexto, el propósito de Web 3.0 y su relación con DApps.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos+Web",
        paragraphs: [
          "La web es un sistema de transmisión de información sobre Internet [2], mientras que Internet es la red informática global descentralizada que interconecta equipos [3].",
          "Desde el origen de la web, se buscaba un entorno abierto, accesible e indexado para todos. Sin embargo, múltiples prácticas corporativas concentraron poder y datos en pocas plataformas.",
          "En este contexto surge la propuesta de Web 3.0 para recuperar control de identidad, datos y trazabilidad de servicios digitales.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo+Web3",
        paragraphs: [
          "Una idea útil para entender el salto de paradigma es: Web 2 es ver Internet; Web 3 es vivir Internet.",
          "Web 3 retoma el objetivo original de descentralización e indexación, ahora con mayor poder de cómputo, redes blockchain, criptografía aplicada y nuevos modelos de propiedad digital.",
          "También busca reducir dependencia de intermediarios centralizados en búsqueda, publicación, monetización e identidad.",
        ],
      },
      {
        title: "¿Qué son las aplicaciones descentralizadas (DApps)?",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=DApps",
        paragraphs: [
          "Las DApps son aplicaciones construidas sobre redes blockchain mediante contratos inteligentes, en lugar de depender de servidores centralizados [5].",
          "Su propuesta central es mayor resiliencia, trazabilidad y menor dependencia de un único operador.",
          "Existen DApps en redes sociales, intercambio, metaversos y economía digital programable.",
        ],
        bullets: [
          "Redes sociales descentralizadas: propuestas como Damus, Phaver, Bluesky y Mastodon.",
          "Intercambio descentralizado: Uniswap.",
          "Entornos virtuales: Decentraland.",
        ],
      },
      {
        title: "¿Qué pretende la Web 3.0?",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Objetivos+Web3",
        paragraphs: [
          "Web 3.0 busca integrarse con otras capas tecnológicas como NFTs y metaverso para habilitar identidad digital, autenticación avanzada y propiedad de activos en línea.",
          "Su objetivo no es solo tecnológico: también redefine gobernanza de datos, distribución de valor y responsabilidades del usuario.",
        ],
        bullets: [
          "Descentralización de servicios y menor concentración de poder.",
          "Modelos passwordless y nuevas formas de autenticación.",
          "Creación de perfiles únicos de usuario e identidad digital.",
          "Control del dato por parte del usuario.",
          "Integración de NFTs con metaverso y activos interoperables.",
          "Mayor demanda de cultura de ciberseguridad para mitigar secuestros digitales, fraudes e ingeniería social [7].",
        ],
      },
      {
        title: "Cómo acceder a los inicios del internet descentralizado",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Como+Acceder+a+Web3",
        paragraphs: [
          "El acceso temprano al ecosistema Web3 se logra mediante wallets, navegadores preparados para integración cripto y uso directo de DApps [8].",
          "La experiencia mejora cuando el navegador, wallet y aplicación comparten estándares de conexión y firma.",
        ],
        bullets: [
          "Wallets cripto para custodia e interacción con servicios.",
          "Navegadores Web3 (por ejemplo, Opera con capacidades integradas).",
          "Interacción directa con DApps para uso de activos y servicios descentralizados.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Conclusion",
        paragraphs: [
          "La convergencia entre Web 3, criptomonedas, NFTs, IA, ciberseguridad y metaverso marca una transición tecnológica profunda que exige aprender nuevos conceptos y prácticas.",
          "Ethereum aparece como plataforma clave en este proceso, pero el valor real está en comprender la arquitectura completa y en desarrollar hábitos de seguridad digital.",
          "Esta guía abre camino para profundizar en NFTs, metaverso e identidad digital en las siguientes entregas.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "Web3: la evolución de Internet que está cada vez más cerca (Grupo 5)",
            url: "https://www.grupo5.com/noticia/586_web3-la-evolucion-de-internet-que-esta-cada-vez-mas-cerca.htm",
          },
          {
            label: "Significado de Web (Significados.com)",
            url: "https://www.significados.com/web/",
          },
          {
            label: "Significado de Internet (Significados.com)",
            url: "https://www.significados.com/internet/",
          },
          {
            label: "Qué es la indexación web o indexar un contenido (InboundCycle)",
            url: "https://www.inboundcycle.com/blog-de-inbound-marketing/que-es-la-indexacion-o-indexar-un-contenido",
          },
          {
            label: "Qué son las aplicaciones descentralizadas (DApps) (Binance Academy)",
            url: "https://academy.binance.com/es/articles/what-are-decentralized-applications-dapps",
          },
          {
            label: "Web 3.0 y blockchain: el futuro de Internet (Santander X)",
            url: "https://www.santanderx.com/es/blog/web-3-0.html",
          },
          {
            label: "Estudio sobre vulnerabilidad de mexicanos a ciberataques (Wired)",
            url: "https://es.wired.com/articulos/ciberataques-contra-mexicanos-estudio",
          },
          {
            label: "Qué es la web 3 (Binance)",
            url: "https://www.binance.com/es/blog/ecosystem/qu%C3%A9-es-la-web-3-7726791091349681472",
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
          "Los Non-Fungible Tokens (NFTs) representan una abstracción digital del valor que los seres humanos asignamos a objetos y pertenencias.",
          "Esta guía recorre su origen conceptual, su componente tecnológico y su utilidad real en el ecosistema Web3.",
        ],
      },
      {
        title: "¿Qué son los NFTs? Desde sus remotos antecedentes",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Antecedentes+NFTs",
        paragraphs: [
          "Los NFTs pueden entenderse desde la lógica del valor percibido por escasez y demanda [1].",
          "En términos simples, existen objetos de baja escasez (acceso común), alta escasez (coleccionables) y objetos únicos (irrepetibles).",
          "Los NFTs nacen en la intersección de escasez digital verificable, propiedad demostrable y trazabilidad pública.",
        ],
        bullets: [
          "Objetos con baja escasez: amplia disponibilidad, menor precio.",
          "Objetos con alta escasez: acceso limitado, mayor precio.",
          "Objetos únicos: irrepetibles, usualmente de alto valor.",
        ],
      },
      {
        title: "Comparación con el arte",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=NFTs+y+Arte",
        paragraphs: [
          "La analogía con arte ayuda a comprender NFTs: una obra original requiere autenticidad verificable y certificación de procedencia.",
          "En blockchain, esa certificación se traslada al activo digital y a su registro público, con historial de propiedad visible.",
          "Además, en muchos modelos, cada reventa puede incluir regalías programables para el creador original.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Desarrollo",
        paragraphs: [
          "Desde lo técnico hasta lo económico, NFTs combinan contratos inteligentes, protocolos de tokenización y mercados especializados.",
        ],
      },
      {
        title: "¿Qué son los NFTs? Desde el punto de vista tecnológico",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=NFTs+desde+lo+Tecnologico",
        paragraphs: [
          "Tecnológicamente, un NFT es un token no fungible emitido mediante smart contracts sobre una red blockchain.",
          "Ese contrato define reglas de propiedad, transferencias, metadatos, escasez y comportamiento económico del activo.",
        ],
      },
      {
        title: "Tecnicismo de los NFTs",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Tecnicismo+NFT",
        paragraphs: [
          "El proceso de creación suele llamarse acuñación o minteo (mint): se genera el activo digital y se registra su token en la blockchain.",
          "No todos los estándares son iguales; cada protocolo define capacidades distintas para colecciones y lógica de activos.",
          "En Ethereum destacan estándares ampliamente usados [2].",
        ],
        bullets: [
          "ERC-721: estándar clásico para NFTs únicos.",
          "ERC-20: estándar fungible, útil en utilidades limitadas híbridas.",
          "ERC-1155: multi-token (fungibles y no fungibles en un mismo contrato).",
          "ERC-998: composabilidad para activos tokenizados complejos.",
        ],
      },
      {
        title: "Utilidad",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Utilidad+de+los+NFTs",
        paragraphs: [
          "La utilidad de NFTs va más allá de imágenes: pueden habilitar acceso, membresías, identidad, certificación y experiencias digitales/mixtas.",
          "También existen variantes como POAP para comprobar asistencia a eventos sin costo elevado [5].",
          "Su relevancia en Web3 incluye identidad digital, autenticación y acceso a ecosistemas interoperables.",
        ],
        bullets: [
          "Arte y coleccionables.",
          "Boletos y accesos exclusivos.",
          "Activos para videojuegos y metaverso.",
          "Certificados de autenticidad para productos físicos [3][4].",
        ],
      },
      {
        title: "¿Qué determina sus precios? y ejemplos",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Precios+y+Ejemplos+NFT",
        paragraphs: [
          "El precio de un NFT depende de múltiples variables: red/protocolo, reputación del artista/proyecto, rareza, utilidad, demanda de comunidad, contexto de mercado y precio del activo base.",
          "También influye si el NFT es único o parte de una colección y si su creación fue algorítmica o manual.",
          "Casos populares de colección y mercado incluyen CryptoKitties, CryptoPunks, BAYC y obras icónicas como Beeple.",
        ],
      },
      {
        title: "Dónde comprarlos",
        imageUrl: "https://placehold.co/1200x630/111827/f9a8d4?text=Donde+Comprar+NFTs",
        paragraphs: [
          "Los NFTs se adquieren principalmente en marketplaces especializados, siendo OpenSea uno de los más conocidos.",
          "La custodia suele realizarse en wallets compatibles con la red del NFT, por lo que seguridad de llaves y frase de recuperación es crítica.",
          "Visualización y gestión dependen del protocolo de emisión y del soporte de tu billetera o herramienta de portfolio.",
        ],
      },
      {
        title: "Otras cosas que también debes saber de los NFTs",
        imageUrl: "https://placehold.co/1200x630/0b1324/d8b4fe?text=Ecosistema+NFT",
        paragraphs: [
          "Grandes plataformas sociales han experimentado con NFTs (perfil verificado, visualización de coleccionables), aunque con cambios de estrategia según mercado.",
          "El ecosistema NFT es multi-chain: no se limita a Ethereum y también existe actividad en redes como Cardano, Avalanche, Solana, BNB Chain y Polygon.",
          "Adopción y utilidad siguen evolucionando con rapidez, por lo que aprendizaje continuo es indispensable.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1f2937/fbcfe8?text=Conclusion",
        paragraphs: [
          "Los NFTs son una capa clave de propiedad digital en Web3 y metaverso, pero también implican responsabilidad alta en seguridad operativa.",
          "Esta guía cubre fundamentos, utilidad y riesgos iniciales para tomar decisiones informadas en un entorno que aún está madurando.",
          "El mejor enfoque es combinar curiosidad, criterio técnico y prácticas sólidas de protección de cuentas y activos.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "El ser humano y el valor de las cosas (Listín Diario)",
            url: "https://listindiario.com/la-vida/2018/01/11/498170/saber-cual-es-el-valor-de-las-cosas",
          },
          {
            label: "Protocolos NFT de Ethereum y aplicaciones prácticas (Binance)",
            url: "https://www.binance.com/es-LA/blog/nft/todo-sobre-los-nft-de-utilidad-los-tokens-%C3%BAnicos-con-aplicaciones-pr%C3%A1cticas-897687675250973294",
          },
          {
            label: "Coca-Cola, Alibaba y Correos apuestan por NFT tangibles (Reason Why)",
            url: "https://www.reasonwhy.es/actualidad/coca-cola-alibaba-correos-apuestan-nft",
          },
          {
            label: "Coachella Key Collection: NFT canjeables por boletos de por vida (El Financiero)",
            url: "https://www.elfinanciero.com.mx/entretenimiento/2022/02/05/coachella-key-collection-festival-subasta-nft-canjeables-por-boletos-de-por-vida/",
          },
          {
            label: "Qué es un POAP (Cryptoconexión)",
            url: "https://cryptoconexion.com/que-es-un-poap/",
          },
          {
            label: "BAYC crea su propia criptomoneda (iProUP)",
            url: "https://www.iproup.com/economia-digital/30214-bored-ape-yacht-club-crea-su-propia-criptomoneda",
          },
          {
            label: "Beeple, artista de la era digital (GQ México)",
            url: "https://www.gq.com.mx/entretenimiento/articulo/beeple-artista-digital-quien-es",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-7-metaverso",
    level: 2,
    title: "Guía 7: Que es el metaverso",
    description: "Conceptos del metaverso, plataformas, videojuegos, multiverso e implicaciones filosóficas.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/111827/c4b5fd?text=Introduccion+Metaverso",
        paragraphs: [
          "Imagina ser repartidor de pizza durante el día y por la noche convertirte, con auriculares y gafas, en un avatar dentro de una realidad totalmente digital. Esa imagen resume bien el punto de partida del metaverso.",
          "Snow Crash, de Neal Stephenson, es una referencia clave para entender este concepto: una sociedad interconectada en mundos virtuales con consecuencias reales [1].",
          "La idea central de esta guía es aterrizar el metaverso desde sus bases, su estado actual y sus posibles impactos sociales.",
        ],
      },
      {
        title: "¿Qué es el Metaverso?",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Que+es+el+Metaverso",
        paragraphs: [
          "Metaverso combina la idea de ir mas alla con universo: un entorno tridimensional donde personas interactúan mediante avatares [2].",
          "En ese entorno pueden hacerse actividades del mundo físico: aprender, trabajar, comprar, jugar, asistir a eventos, convivir y construir experiencias inmersivas.",
          "Un avatar es la representación digital del usuario dentro de ese universo virtual.",
          "No existe un solo metaverso; hay múltiples plataformas con reglas, economías y niveles de inmersión distintos.",
          "El debate de fondo es que, si pocas empresas controlan esos ecosistemas, también podrían concentrar datos, poder y capacidad de influencia sobre la vida digital de sus usuarios [3].",
        ],
      },
      {
        title: "Principales Metaversos",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Principales+Metaversos",
        paragraphs: [
          "Meta apostó fuerte desde la compra de Oculus en 2014 y después con el cambio de Facebook a Meta en 2021. Su ecosistema Horizon depende en gran parte de hardware dedicado como Quest [4][5].",
          "Además de Meta, compañías como Google, Microsoft, Amazon, Sony y Apple han acelerado desarrollos de realidad extendida y entornos inmersivos [6][7].",
          "Aunque ninguna plataforma domina de forma total, la carrera tecnológica ya está en marcha y se conecta con IA, economía digital, identidad y contenido inmersivo.",
          "La adopción masiva todavía enfrenta barreras: costo de dispositivos, rendimiento, comodidad de uso y claridad de valor para usuarios finales.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/0f172a/86efac?text=Desarrollo",
        paragraphs: [
          "Para vivir experiencias inmersivas, el metaverso requiere visores, sensores, potencia de cómputo gráfica y conectividad estable de baja latencia.",
          "También han crecido experiencias híbridas y holográficas en eventos de entretenimiento, donde lo físico y lo digital se combinan en tiempo real [8].",
          "Después de la pandemia aumentó el interés por entornos remotos inmersivos para educación, trabajo y ocio.",
          "El reto no es solo técnico; también es de usabilidad y costo, porque aún no todos pueden acceder a dispositivos especializados.",
        ],
      },
      {
        title: "Metaversos",
        imageUrl: "https://placehold.co/1200x630/1f2937/fca5a5?text=Metaversos+y+Videojuegos",
        paragraphs: [
          "Los videojuegos son hoy la vía más directa para adoptar dinámicas de metaverso: avatares, economías virtuales, mundos persistentes e interacción social [9][10].",
          "Minecraft, Fortnite y Sims muestran preámbulos claros: creación de escenarios, personalización de identidad y participación en mundos con reglas propias.",
          "Roblox consolidó una lógica de plataforma donde usuarios crean múltiples juegos y experiencias dentro de un mismo entorno [12].",
          "The Sandbox y Decentraland añaden una capa diferencial al integrar criptomonedas y NFTs para propiedad digital, monetización y economía programable [13][14].",
          "Esta convergencia entre gaming, finanzas digitales y propiedad virtual suele agruparse como GameFi, con el enfoque play-to-earn.",
        ],
      },
      {
        title: "Multiverso en el Metaverso",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Multiverso+en+el+Metaverso",
        paragraphs: [
          "Con tantas plataformas activas, el escenario más probable es un multiverso de metaversos.",
          "Para que eso funcione, se necesitan estándares abiertos que permitan interoperabilidad de identidad, activos y conexión entre plataformas [15].",
          "La identidad digital de Web3 puede ser una capa transversal para autenticarse y moverse entre distintos mundos sin crear un perfil nuevo en cada uno.",
          "Sin estandarización, la experiencia será fragmentada; con estándares, puede emerger un ecosistema más abierto y portable.",
        ],
      },
      {
        title: "Metaverso desde un punto de vista filosófico",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Metaverso+Filosofico",
        paragraphs: [
          "El metaverso no solo es tecnología; también plantea preguntas éticas y filosóficas sobre identidad, convivencia, ley, trabajo, salud mental y sentido de realidad.",
          "Si gran parte de la vida social, educativa y laboral migra a mundos virtuales, aparecen riesgos de dependencia, desigualdad digital y captura de identidad.",
          "La discusión también incluye qué instituciones existirán en esos entornos: normas, seguridad, propiedad, justicia y responsabilidad de plataformas.",
          "Pensar estos escenarios no es exageración; es prevención para diseñar mejor la adopción tecnológica.",
        ],
        bullets: [
          "Personas ricas en la vida virtual y en la vida real.",
          "Personas ricas en la vida virtual y pobres en la vida real.",
          "Personas pobres en la vida virtual y ricas en la vida real.",
          "Personas pobres en la vida virtual y en la vida real.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Conclusion",
        paragraphs: [
          "El metaverso es uno de los pilares más complejos de esta transición por la mezcla de factores técnicos, económicos, sociales y culturales.",
          "Aún faltan mejoras en rendimiento, accesibilidad y madurez de hardware para una adopción amplia y sostenible.",
          "Aprender desde ahora sobre seguridad, identidad digital y uso responsable permite aprovechar sus ventajas y reducir riesgos.",
          "Esta guía cierra la séptima entrega del recorrido y prepara la transición hacia contenidos más avanzados sobre integración Web3, activos digitales y nuevos modelos de interacción.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "Snow Crash, la novela que predijo el metaverso (El Universo)",
            url: "https://www.eluniverso.com/larevista/tecnologia/snow-crash-la-novela-que-predijo-el-metaverso-la-tecnologia-que-algunas-empresas-ya-usan-nota/",
          },
          {
            label: "Metaverso: todo lo que necesitas saber (Santander)",
            url: "https://www.santander.com/es/stories/metaverso-todo-lo-que-necesitas-saber-para-aprovechar-el-nuevo-mundo",
          },
          {
            label: "Regular Expressions for Web Advertising Detection (Springer)",
            url: "https://link.springer.com/article/10.1134%2FS0361768820080162",
          },
          {
            label: "El metaverso de Zuckerberg y sus retos de adopción (El Economista)",
            url: "https://www.eleconomista.es/tecnologia/noticias/12175676/03/23/El-Metaverso-es-un-fiasco-y-Zuckerberg-no-puede-esconderlo-ya-no-sabe-como-hacer-que-compres-sus-gafas.html",
          },
          {
            label: "Meta Quest 2 (Meta)",
            url: "https://www.meta.com/quest/products/quest-2/",
          },
          {
            label: "Mocopi de Sony (20bits)",
            url: "https://www.20minutos.es/tecnologia/moviles-dispositivos/sony-lanza-un-dispositivo-que-te-convierte-en-un-personaje-de-anime-en-movimiento-5081567/",
          },
          {
            label: "RealityOS y metaverso de Apple (Xataka)",
            url: "https://www.xataka.com/realidad-virtual-aumentada/apple-finaliza-desarrollo-interno-realityos-prepara-su-propio-metaverso-gurman",
          },
          {
            label: "HOLO en Ultra Music Festival (The Groove Cartel)",
            url: "https://thegroovecartel.com/news/eric-prydz-holo-ultra-music-festival-miami-2023/",
          },
          {
            label: "Videojuegos y metaverso (The New York Times)",
            url: "https://www.nytimes.com/es/2022/01/25/espanol/microsoft-meta-activision-blizzard.html",
          },
          {
            label: "Gaming y adopción cripto (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/gaming-opportunity-crypto-mass-adoption-polygon-sandeep-nailwal",
          },
          {
            label: "Cierre de Crayta (Medium)",
            url: "https://medium.com/crayta/a-message-for-the-crayta-community-7c9ec53126f2",
          },
          {
            label: "Qué es Roblox y cómo funciona (Xataka Basics)",
            url: "https://www.xataka.com/basics/que-roblox-que-se-diferencia-como-funciona",
          },
          {
            label: "Qué es The Sandbox (Planeta NFT)",
            url: "https://planetanft.com/que-es-the-sandbox/",
          },
          {
            label: "Decentraland: qué es y cómo entrar (El Grupo Informático)",
            url: "https://www.elgrupoinformatico.com/tutoriales/decentraland-que-como-entrar-comprar-mas-t82865.html",
          },
          {
            label: "Sobre los estándares abiertos (Universidad de Zaragoza)",
            url: "https://osluz.unizar.es/content/sobre-los-estandares-abiertos",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-8-stablecoins-cbdcs",
    level: 2,
    title: "Guía 8: Que son las Stable Coin y las CBDCs",
    description: "Stablecoins, CBDCs, casos en LATAM y diferencias clave de diseño monetario.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Introduccion+Stablecoins+y+CBDCs",
        paragraphs: [
          "Desde la evolución histórica del dinero hasta las criptomonedas, la humanidad ha ido transformando cómo intercambia valor y cómo paga bienes y servicios.",
          "Las criptomonedas abrieron un cambio de paradigma: más control del dinero para las personas y menos dependencia de intermediarios.",
          "Ante ese cambio, los gobiernos respondieron con regulación, restricciones, análisis y, en muchos casos, con planes para crear sus propias monedas digitales.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos",
        paragraphs: [
          "Las CBDCs (Central Bank Digital Currencies) son versiones digitales del dinero emitidas por bancos centrales [1].",
          "A diferencia del efectivo, una CBDC opera en formato digital y bajo la gobernanza directa del Estado emisor.",
          "Una preocupación frecuente es que, si el control operativo se centraliza demasiado, también aumenta la capacidad de vigilancia o bloqueo financiero por parte del gobierno.",
          "Las criptomonedas, en cambio, nacen con una lógica menos censurable y más distribuida.",
          "Si la emisión y gestión de saldos migra hacia bancos centrales, la banca tradicional podría cambiar su rol hacia custodia, seguros y servicios complementarios.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Desarrollo",
        paragraphs: [
          "Como se explicó en la guía 4, los tokens no nativos permiten crear activos sobre infraestructuras blockchain ya existentes sin construir una cadena desde cero.",
          "Ese enfoque reduce costos y tiempos de salida para nuevos proyectos monetarios.",
          "Stablecoin combina stable (estable) y coin (moneda): son activos digitales diseñados para reducir volatilidad frente a criptomonedas como BTC o ETH.",
          "La estabilidad normalmente se logra con respaldos en monedas fiduciarias, otros activos o mecanismos algorítmicos de equilibrio.",
        ],
      },
      {
        title: "Distintos tipos de criptomonedas",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Tipos+de+Criptomonedas",
        paragraphs: [
          "El ecosistema cripto se diversificó en múltiples categorías con riesgos, usos y niveles de adopción distintos.",
        ],
        bullets: [
          "Memecoins: nacen de tendencias y cultura de internet; ejemplos: Dogecoin [2] y Pepecoin [3].",
          "Shitcoins: proyectos con propuesta poco clara, alto riesgo y fuerte especulación.",
          "Monedas de utilidad relevante: diseñadas para resolver un problema concreto dentro de un protocolo o producto.",
          "Flatcoins: buscan mantener poder adquisitivo ajustado a inflación [4].",
          "CBDCs: monedas digitales emitidas por bancos centrales, con control centralizado del emisor.",
          "Criptomonedas como curso legal: casos como El Salvador o República Centroafricana [8].",
          "Altcoins: protocolos alternativos a Bitcoin, por ejemplo Ether, Cardano, Algorand o Solana.",
        ],
      },
      {
        title: "Ejemplos de proyectos de Stablecoins",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Proyectos+de+Stablecoins",
        paragraphs: [
          "La diferencia central entre stablecoins y CBDCs está en la capa de control.",
          "Las CBDCs son emitidas por bancos centrales y, por diseño, responden a una autoridad nacional.",
          "Las stablecoins suelen emitirse como tokens sobre blockchains públicas y, en muchos casos, se integran en ecosistemas más abiertos y globales.",
          "Esa diferencia impacta privacidad, censura, gobernanza, trazabilidad y capacidad de innovación.",
        ],
      },
      {
        title: "Principales ejemplos de CBDCs",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Ejemplos+de+CBDCs",
        paragraphs: [
          "Uno de los casos más visibles es el yuan digital en China, pionero entre grandes economías.",
          "También hay procesos de diseño, discusión regulatoria o pruebas en regiones como la Unión Europea, Estados Unidos y Japón.",
          "La adopción de CBDCs no es solo tecnológica; también redefine comercio internacional, interoperabilidad y reglas financieras para países con infraestructuras menos modernizadas.",
        ],
      },
      {
        title: "Principales ejemplos de stablecoins",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Ejemplos+de+Stablecoins",
        paragraphs: [
          "Entre las stablecoins más citadas están USDT (Tether) [5], DAI [6] y EUROC [7].",
          "En modelos respaldados 1:1, cada token busca mantener equivalencia con una unidad de moneda fiduciaria.",
          "Para empresas que operan entre países, estas herramientas pueden reducir fricciones de pagos internacionales y costos operativos frente a sistemas tradicionales.",
        ],
      },
      {
        title: "Situación de Latinoamérica con respecto a las CBDCs y Stablecoins",
        imageUrl: "https://placehold.co/1200x630/0b1324/fca5a5?text=LATAM+CBDCs+y+Stablecoins",
        paragraphs: [
          "En LATAM, la conversación sobre CBDCs y stablecoins está marcada por inclusión financiera, inflación, costos de remesas y rezago tecnológico.",
          "Muchos países enfrentan barreras de infraestructura, bancarización y confianza institucional, lo que acelera la búsqueda de alternativas digitales [9].",
        ],
      },
      {
        title: "Las bahamas",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Las+Bahamas",
        paragraphs: [
          "Bahamas lanzó el Sand Dollar el 20 de octubre de 2020, considerado de los primeros despliegues CBDC a escala nacional [9].",
          "Su esquema incluye niveles de uso y límites transaccionales según requisitos de KYC.",
          "El modelo prioriza estabilidad financiera, integridad del sistema y ciberseguridad.",
        ],
      },
      {
        title: "Jamaica",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Jamaica",
        paragraphs: [
          "Jamaica avanzó con su CBDC desde 2021 y lanzó su implementación en 2022.",
          "Sus objetivos incluyeron mejorar seguridad y eficiencia de pagos, reducir costos operativos del sistema financiero y ampliar instrumentos de pago para la población.",
          "También incorporó rutas de onboarding para usuarios no bancarizados mediante identificación oficial y validación local.",
        ],
        bullets: [
          "Mayor relevancia, eficiencia y seguridad en pagos.",
          "Reducción de costos de manejo de dinero y cuentas.",
          "Más alternativas de pago para la sociedad.",
          "Interoperabilidad con otros sistemas de pago.",
        ],
      },
      {
        title: "Perú",
        imageUrl: "https://placehold.co/1200x630/172554/86efac?text=Peru",
        paragraphs: [
          "Perú enfrenta retos estructurales: gran parte de su población históricamente no ha estado plenamente bancarizada [9].",
          "Antes de una CBDC masiva, se han señalado prioridades de alfabetización digital, infraestructura, inclusión financiera y mejores condiciones de privacidad.",
        ],
        bullets: [
          "Alfabetización digital y financiera.",
          "Mejoras en infraestructura de telecomunicaciones.",
          "Promoción de cultura financiera y reducción de informalidad.",
          "Evaluación de sueldos, carga fiscal y acceso tecnológico en zonas remotas.",
        ],
      },
      {
        title: "Latinoamérica (LATAM)",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Latinoamerica",
        paragraphs: [
          "En general, la región comparte obstáculos de entrada pero también necesidades urgentes de modernización monetaria [9].",
          "México, Uruguay, Argentina y Chile han mostrado análisis y seguimiento; Brasil destaca por señales de avance técnico y regulatorio [10].",
          "Cuando una economía grande de la región consolide una CBDC funcional, puede acelerar aprendizaje y adopción en países vecinos.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/f9a8d4?text=Conclusion",
        paragraphs: [
          "La digitalización monetaria ya está en marcha: algunos países están en pruebas y otros ya operan con monedas digitales oficiales.",
          "El conflicto central en los próximos años será equilibrio entre innovación financiera, libertad económica, privacidad y capacidad de supervisión estatal.",
          "En LATAM, las necesidades reales de la población suelen empujar adopciones más rápido que la regulación formal.",
          "Entender diferencias entre CBDCs y stablecoins es clave para tomar decisiones informadas en inversión, pagos y gestión de riesgo.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "¿Qué es una CBDC y cuáles son sus características? (Muy Financiero)",
            url: "https://muyfinanciero.com/conceptos/cbdc/",
          },
          {
            label: "Qué es Dogecoin y por qué se hizo popular (Xataka Basics)",
            url: "https://www.xataka.com/basics/que-dogecoin-como-funciona-que-se-ha-hecho-popular",
          },
          {
            label: "Qué es PEPE y su contexto frente a memecoins (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/what-is-pepe-coin-flip-memecoin-dogecoin-shiba-inu",
          },
          {
            label: "Flatcoins indexadas a inflación en Base (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/coinbase-wants-devs-to-build-inflation-pegged-flatcoins-on-its-new-base-network",
          },
          {
            label: "¿Qué es Tether (USDT)? (Criptonoticias)",
            url: "https://www.criptonoticias.com/criptopedia/que-es-tether-usdt-stablecoin/",
          },
          {
            label: "¿Qué es DAI? (Bit2Me Academy)",
            url: "https://academy.bit2me.com/que-es-dai/",
          },
          {
            label: "¿Qué es EUROC y cómo se utiliza? (Escrypto)",
            url: "https://www.escrypto.com/es/blog/what-is-euro-coin-euroc-and-how-do-i-use-it",
          },
          {
            label: "Implantación de Bitcoin como moneda de curso legal (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/the-implementation-of-bitcoin-as-legal-tender",
          },
          {
            label: "Crypto Assets and CBDCs in LATAM and the Caribbean (IMF)",
            url: "https://www.imf.org/en/Publications/WP/Issues/2023/02/17/Crypto-Assets-and-CBDCs-in-Latin-America-and-the-Caribbean-Opportunities-and-Risks-529717",
          },
          {
            label: "CBDC en Brasil y debate sobre real digital (BeInCrypto)",
            url: "https://es.beincrypto.com/cbdc-brasil-real-digital-realmente-stablecoin/",
          },
          {
            label: "Comprendiendo monedas digitales de bancos centrales (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/cbdc-understanding-a-little-more-about-central-bank-digital-currencies",
          },
        ],
      },
    ],
  },
  {
    slug: "level-2-guide-9-identidad-digital-web3",
    level: 2,
    title: "Guía 9: Identidad digital en la Web 3.0",
    description: "DIDs, SBTs, ZKP, trustless tech y adaptación de la identidad digital en Web3.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Introduccion+Identidad+Digital",
        paragraphs: [
          "La identidad digital es un pilar de la Web 3 y se conecta directamente con NFTs, metaverso y aplicaciones descentralizadas.",
          "El objetivo es que cada persona administre su propia información y decida qué comparte, con quién y bajo qué contexto.",
          "La discusión de fondo es soberanía digital: no depender totalmente de gobiernos o corporaciones para validar quién eres en internet.",
          "Web3 propone una identidad más portable, verificable y privada, reduciendo la extracción masiva de datos por plataformas centralizadas.",
        ],
      },
      {
        title: "Conceptos básicos",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Conceptos+Basicos",
        paragraphs: [
          "La identidad digital en Web3 se basa en credenciales criptográficas que permiten verificar atributos sin exponer toda la información personal.",
          "Este enfoque busca mejorar privacidad, seguridad y control del usuario sobre su huella digital.",
          "A diferencia de la web tradicional, donde múltiples servicios centralizan datos, la identidad Web3 promueve mínima divulgación y comprobación selectiva.",
        ],
      },
      {
        title: "Decentralized Identifications (DIDs)",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=DIDs",
        paragraphs: [
          "Los DIDs son identificadores descentralizados: únicos, verificables y resistentes a dependencia de una sola autoridad [1].",
          "Permiten autenticarse en distintos servicios sin repetir procesos tradicionales de usuario/contraseña.",
          "Su valor principal está en verificar identidad o atributos concretos sin exponer información innecesaria.",
          "Con DIDs se habilita la segmentación de identidades por propósito: laboral, financiera, académica, social o privada.",
        ],
        bullets: [
          "Mayor privacidad y seguridad frente a robo de identidad.",
          "Verificación de personas físicas para reducir bots y cuentas falsas.",
          "Posibilidad de crear múltiples DIDs según contexto.",
          "Reducción de recopilación masiva de datos por cookies y plataformas [2].",
          "Menos puntos únicos de fallo al usar arquitectura descentralizada.",
          "Mejor experiencia de usuario al disminuir dependencia de contraseñas.",
        ],
      },
      {
        title: "Desarrollo",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Desarrollo",
        paragraphs: [
          "La identidad digital en Web3 combina criptografía, contratos inteligentes e interoperabilidad entre protocolos.",
          "El objetivo no es solo autenticar acceso, sino permitir reputación verificable y control granular de datos.",
          "En esta capa aparecen tecnologías complementarias como trustless systems, ZKP y tokens de identidad no transferibles.",
        ],
      },
      {
        title: "¿Qué es la tecnología trustless?",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Trustless+Technology",
        paragraphs: [
          "Trustless no significa ausencia total de confianza humana, sino minimizar necesidad de confiar en intermediarios mediante reglas verificables en código.",
          "En entornos interoperables y puentes entre blockchains, contratos inteligentes validan operaciones de origen a destino [3].",
          "Sus riesgos principales suelen concentrarse en contratos mal diseñados y vulnerabilidades de los puentes entre redes.",
        ],
      },
      {
        title: "Zero knowledge proof (ZKP)",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/a5b4fc?text=Zero+Knowledge+Proof",
        paragraphs: [
          "Zero-Knowledge Proof permite demostrar que una afirmación es verdadera sin revelar información sensible subyacente [4].",
          "Es clave para identidad digital porque facilita pruebas selectivas: demostrar mayoría de edad, residencia o acreditación sin exponer datos completos.",
          "Esta técnica eleva privacidad y reduce superficie de exposición de información personal en servicios digitales.",
        ],
      },
      {
        title: "¿Qué son los soulbound tokens (SBTs)?",
        imageUrl: "https://placehold.co/1200x630/312e81/c4b5fd?text=Soulbound+Tokens",
        paragraphs: [
          "Los SBTs son tokens intransferibles vinculados a una identidad digital específica [5].",
          "A diferencia de un NFT tradicional, no están diseñados para comprarse o venderse, sino para representar atributos o credenciales.",
          "Pueden usarse para historiales académicos, trayectoria laboral, membresías, certificaciones o registros de reputación.",
          "La idea fue popularizada en el ecosistema Ethereum y se conecta con modelos de identidad autosoberana.",
        ],
      },
      {
        title: "Diferencias entre los SBTs y los DIDs",
        imageUrl: "https://placehold.co/1200x630/0b1324/fca5a5?text=SBTs+vs+DIDs",
        paragraphs: [
          "SBT y DID no compiten necesariamente; pueden coexistir en una arquitectura de identidad.",
          "El DID funciona como identificador descentralizado reusable entre sistemas.",
          "El SBT funciona como credencial intransferible asociada a una identidad.",
          "En términos prácticos, DID identifica y SBT acredita propiedades específicas de esa identidad [6].",
        ],
        bullets: [
          "DID: identificador portable para autenticación e interoperabilidad.",
          "SBT: prueba/credencial no transferible ligada a una wallet o identidad.",
          "DID: enfocado en acceso y resolución de identidad.",
          "SBT: enfocado en reputación, pertenencia o historial verificable.",
        ],
      },
      {
        title: "Worldcoin",
        imageUrl: "https://placehold.co/1200x630/111827/fde68a?text=Worldcoin",
        paragraphs: [
          "Worldcoin propone verificar humanidad mediante biometría (iris) a través de un dispositivo físico y otorgar incentivos en su propio ecosistema [7].",
          "Su planteamiento se diferencia de modelos más descentralizados al concentrar fuerte infraestructura de verificación en una iniciativa privada [8].",
          "El debate principal gira en torno a privacidad biométrica, gobernanza, consentimiento informado y riesgo de filtración de datos sensibles.",
        ],
      },
      {
        title: "Cómo las compañías de tech se tendrán que adaptar a esto.",
        imageUrl: "https://placehold.co/1200x630/1f2937/93c5fd?text=Adaptacion+Big+Tech",
        paragraphs: [
          "Las big tech han construido su negocio sobre captación y monetización de datos.",
          "Si identidad autosoberana y verificación selectiva escalan, el modelo de extracción masiva de información pierde eficiencia.",
          "Las plataformas deberán adaptarse a experiencias donde el usuario controle permisos y comparta solo lo estrictamente necesario [9].",
          "La competencia pasará de capturar datos a ofrecer confianza, utilidad y transparencia.",
        ],
      },
      {
        title: "Relación del entorno Crypto y la IA",
        imageUrl: "https://placehold.co/1200x630/172554/86efac?text=Crypto+y+IA",
        paragraphs: [
          "Con el crecimiento de IA generativa y automatización, distinguir humanos de agentes sintéticos se vuelve un problema central.",
          "Por eso surgen iniciativas como Proof of Humanity y Proof of Personhood para validar presencia humana real en entornos digitales.",
          "Esta capa de verificación impacta redes sociales, reputación, fraude, acceso a servicios financieros y gobernanza de comunidades.",
          "También abre riesgos de discriminación algorítmica o sesgos reputacionales si no se diseñan métricas justas y auditables.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/082f49/7dd3fc?text=Conclusion",
        paragraphs: [
          "La identidad digital en Web3 representa un cambio estructural: pasar de cuentas centralizadas a credenciales verificables bajo control del usuario.",
          "Tecnologías como DIDs, ZKP y SBTs pueden mejorar privacidad, seguridad y experiencia de navegación si se implementan con buena gobernanza.",
          "El reto no es solo técnico: también es legal, ético y cultural.",
          "La clave será equilibrar descentralización, protección de datos, usabilidad y responsabilidad individual en el manejo de la información personal.",
        ],
      },
      {
        title: "Referencias",
        imageUrl: "https://placehold.co/1200x630/111827/d1d5db?text=Referencias",
        paragraphs: [
          "Fuentes consultadas para esta guía.",
        ],
        references: [
          {
            label: "Identidad Digital Web3 y casos de uso (LinkedIn)",
            url: "https://www.linkedin.com/pulse/identidad-digital-web3-qué-es-y-casos-de-uso-reales-juan-merodio/?originalSubdomain=es",
          },
          {
            label: "Algorithm for Identification and Analysis of Targeted Advertising (LACCEI)",
            url: "https://www.laccei.org/LACCEI2022-BocaRaton/full_papers/FP57.pdf",
          },
          {
            label: "Seguridad en DeFi y puentes trustless (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/defi-security-how-trustless-bridges-can-help-protect-users",
          },
          {
            label: "What is Zero-Knowledge Proof? (Binance Academy)",
            url: "https://academy.binance.com/es/articles/what-is-zero-knowledge-proof-and-how-does-it-impact-blockchain",
          },
          {
            label: "What are Soulbound Tokens (SBT)? (Binance Academy)",
            url: "https://academy.binance.com/es/articles/what-are-soulbound-tokens-sbt",
          },
          {
            label: "Soulbound Tokens vs Self-Sovereign Identity (Cryptonews)",
            url: "https://cryptonews.com/exclusives/soulbound-tokens-vs-self-sovereign-identity-web3s-search-for-a-digital-id-solution.htm",
          },
          {
            label: "Worldcoin en México y datos biométricos (R3D)",
            url: "https://r3d.mx/2023/08/02/worldcoin-llega-a-mexico-con-la-promesa-de-criptomonedas-a-cambio-de-datos-biometricos/",
          },
          {
            label: "Worldcoin y uso de su sistema de identificación (Cointelegraph en Español)",
            url: "https://es.cointelegraph.com/news/worldcoin-to-allow-government-and-businesses-to-use-id-system",
          },
          {
            label: "Web3 y la revancha de usuarios frente a big tech (Cinco Días)",
            url: "https://cincodias.elpais.com/cincodias/2021/12/24/companias/1640338509_178295.html",
          },
        ],
      },
    ],
  },
  {
    slug: "glossary-guide-10-defi-web3",
    level: 2,
    isGlossary: true,
    title: "Guía 10: Glosario de Finanzas Descentralizadas",
    description: "Glosario clave de conceptos de crypto, Web3, DeFi, identidad y mercado.",
    fallbackSections: [
      {
        title: "Introducción",
        imageUrl: "https://placehold.co/1200x630/0f172a/c4b5fd?text=Glosario+DeFi+Web3",
        paragraphs: [
          "Este glosario reúne términos esenciales que se usan a lo largo del programa de finanzas descentralizadas.",
          "La idea es que sea un punto de consulta rápido para reforzar conceptos técnicos, financieros y de identidad digital.",
        ],
      },
      {
        title: "Términos fundamentales",
        imageUrl: "https://placehold.co/1200x630/1e293b/93c5fd?text=Terminos+Fundamentales",
        paragraphs: [
          "Conceptos base para empezar en crypto y Web3.",
        ],
        bullets: [
          "Blockchain: base de datos distribuida e inmutable donde se registran transacciones.",
          "Bitcoin (BTC): primera criptomoneda de adopción global y referencia del mercado.",
          "Altcoin: criptomoneda alternativa a Bitcoin.",
          "Stablecoin: token diseñado para mantener valor estable frente a una referencia (como USD).",
          "CBDC: moneda digital emitida y gestionada por un banco central.",
          "Wallet: cartera digital para almacenar y gestionar activos.",
          "Llave privada: credencial secreta que da control sobre una wallet.",
          "Llave pública: identificador para recibir fondos.",
          "Fee/Gas: comisión pagada a la red por ejecutar una transacción.",
          "Token nativo: activo principal de una blockchain (ej. ETH en Ethereum).",
          "Token no nativo: activo emitido sobre una red que no es su cadena base.",
        ],
      },
      {
        title: "Términos de Ethereum y Web3",
        imageUrl: "https://placehold.co/1200x630/172554/fde68a?text=Ethereum+y+Web3",
        paragraphs: [
          "Términos clave para entender aplicaciones descentralizadas y nueva identidad digital.",
        ],
        bullets: [
          "Ethereum: plataforma descentralizada para ejecutar contratos inteligentes.",
          "EVM: máquina virtual donde se ejecuta la lógica de smart contracts en Ethereum.",
          "DApp: aplicación descentralizada que corre sobre blockchain.",
          "Smart contract: programa autoejecutable con reglas definidas en cadena.",
          "Web 3.0: enfoque de internet con propiedad digital, descentralización e identidad autosoberana.",
          "NFT: token no fungible que representa unicidad y propiedad digital.",
          "Metaverso: entorno virtual inmersivo con identidad digital y economía propia.",
          "GameFi: convergencia entre videojuegos y finanzas descentralizadas.",
        ],
      },
      {
        title: "Términos de identidad y seguridad",
        imageUrl: "https://placehold.co/1200x630/1f2937/86efac?text=Identidad+y+Seguridad",
        paragraphs: [
          "Conceptos avanzados para privacidad, autenticación y reputación digital.",
        ],
        bullets: [
          "DID (Decentralized Identifier): identificador descentralizado verificable.",
          "SBT (Soulbound Token): token intransferible para reputación o credenciales.",
          "ZKP (Zero-Knowledge Proof): prueba criptográfica sin revelar datos sensibles.",
          "Trustless: sistema que minimiza confianza en intermediarios usando verificación en código.",
          "Proof of Humanity/Personhood: métodos para probar que una identidad corresponde a un humano real.",
          "Phishing: fraude digital que busca robar credenciales o llaves.",
          "2FA: autenticación en dos factores para elevar seguridad de acceso.",
          "Custodia: responsabilidad de resguardo de llaves y activos.",
        ],
      },
      {
        title: "Términos financieros y de mercado",
        imageUrl: "https://placehold.co/1200x630/082f49/67e8f9?text=Mercado+y+Finanzas",
        paragraphs: [
          "Términos para análisis de inversión, riesgo y operación.",
        ],
        bullets: [
          "Volatilidad: grado de variación del precio en un periodo.",
          "Liquidez: facilidad para comprar/vender sin afectar fuertemente el precio.",
          "Market cap: valor de mercado total de un activo.",
          "Diversificación: distribución de capital entre activos para reducir riesgo.",
          "Perfil de riesgo: tolerancia personal ante pérdidas y fluctuaciones.",
          "Rendimiento: ganancia o pérdida de una inversión en un periodo.",
          "Arbitraje: aprovechamiento de diferencias de precio entre mercados.",
          "DeFi: servicios financieros sobre blockchain sin intermediarios tradicionales.",
        ],
      },
      {
        title: "Conclusión",
        imageUrl: "https://placehold.co/1200x630/1e1b4b/f9a8d4?text=Conclusion",
        paragraphs: [
          "Este glosario queda como sección extra del programa para consulta transversal entre niveles.",
          "Conforme avancemos en nuevas guías, se puede ampliar con términos y definiciones adicionales.",
        ],
      },
    ],
  },
  {
    slug: "level-3-guide-1-coming-soon",
    level: 3,
    title: "Guía 1: Nivel Avanzado (Próximamente)",
    description: "Estamos migrando este contenido al sitio para lectura directa.",
    sourceUrl:
      "https://drive.google.com/drive/u/3/folders/1pjhPPEFJd4HUgXIs3pUraydEFSlCp9IE?hl=es_419",
    fallbackSections: [
      {
        title: "Migración En Progreso",
        paragraphs: [
          "El contenido avanzado se publicará en esta misma sección para que todo quede dentro del sitio.",
          "Cuando esté listo, aparecerá aquí con índice lateral y navegación continua entre guías.",
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
