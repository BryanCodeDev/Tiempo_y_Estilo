import { 
  Watch, 
  Gem, 
  Diamond, 
  ShoppingBag 
} from 'lucide-react';

export const products = [
  // 1. Reloj Clásico para Hombre
  {
    id: 1,
    name: "Reloj Clásico Ejecutivo para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj1.webp",
    images: ["/assets/images/reloj1.webp", "/assets/images/reloj2.webp"],
    description: "Elegante reloj ejecutivo con correa de cuero genuino, resistente al agua y perfecto para ocasiones formales",
    longDescription: "Reloj clásico de alta calidad con diseño ejecutivo sofisticado. Caja de acero inoxidable de 42mm con acabado pulido. Correa de cuero genuino italiano ajustable. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 3ATM (30 metros). Perfecto para el hombre moderno que valora la elegancia y funcionalidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-HOM-001",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-rayones",
      "Correa: Cuero genuino italiano",
      "Resistencia al agua: 3ATM (30m)",
      "Esfera: Números romanos",
      "Cierre: Hebilla de acero",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico ejecutivo",
      "Estuche premium de presentación",
      "Manual de usuario",
      "Certificado de garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Diseño atemporal y elegante",
      "Movimiento preciso y confiable",
      "Correa de cuero premium",
      "Resistente al uso diario",
      "Ideal para trabajo y eventos",
      "Garantía de 3 meses"
    ]
  },

  // 2. Reloj Deportivo Digital
  {
    id: 2,
    name: "Reloj Deportivo Digital Multifunción",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj3.webp",
    images: ["/assets/images/reloj3.webp", "/assets/images/reloj4.webp"],
    description: "Reloj digital deportivo con cronómetro, alarma, luz LED, resistente al agua 5ATM",
    longDescription: "Reloj deportivo digital de última generación. Caja robusta de resina con acabado mate. Pantalla LCD de alto contraste con retroiluminación LED. Múltiples funciones: cronómetro, temporizador, alarma dual, calendario completo. Resistencia al agua 5ATM (50 metros). Correa de silicona deportiva ultra cómoda. Ideal para running, natación, gym y actividades outdoor. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-002",
    stock: 100,
    specifications: [
      "Caja: Resina ultra resistente 45mm",
      "Pantalla: LCD con luz LED",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona deportiva",
      "Batería: 3 años de duración",
      "Funciones: Cronómetro, alarma, calendario",
      "Peso: 52 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo digital",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Resistente a golpes y agua",
      "Múltiples funciones deportivas",
      "Batería de larga duración",
      "Ligero y cómodo",
      "Perfecto para deportes",
      "Garantía de 3 meses"
    ]
  },

  // 3. Collar de Plata 925
  {
    id: 3,
    name: "Collar Cadena Plata 925 con Dije Corazón",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj5.webp",
    images: ["/assets/images/reloj5.webp"],
    description: "Hermoso collar de plata 925 con dije de corazón, ideal para regalo, diseño elegante y delicado",
    longDescription: "Elegante collar fabricado en plata ley 925 de alta pureza. Cadena tipo singapur de 45cm con ajuste a 40cm. Dije en forma de corazón con detalles grabados y acabado brillante. Cierre tipo mosquetón con argollas de seguridad. Hipoalergénico, no causa irritación. Viene en estuche de regalo premium. Perfecto para uso diario o ocasiones especiales. El regalo ideal para expresar amor y cariño. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-COL-003",
    stock: 100,
    specifications: [
      "Material: Plata ley 925 certificada",
      "Longitud cadena: 40-45cm ajustable",
      "Tipo cadena: Singapur delicada",
      "Dije: Corazón 15mm x 12mm",
      "Peso: 3.5 gramos",
      "Cierre: Mosquetón con seguridad",
      "Acabado: Brillante espejo",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Collar de plata 925",
      "Estuche premium de regalo",
      "Certificado de autenticidad",
      "Paño de limpieza",
      "Garantía 3 meses",
      "Tarjeta de regalo personalizable"
    ],
    benefits: [
      "Plata 925 auténtica certificada",
      "Hipoalergénico y seguro",
      "Diseño elegante y versátil",
      "Longitud ajustable",
      "Estuche de regalo incluido",
      "Garantía de 3 meses"
    ]
  },

  // 4. Aretes de Cristal Swarovski
  {
    id: 4,
    name: "Aretes Elegantes Cristal Swarovski",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj6.webp",
    images: ["/assets/images/reloj6.webp"],
    description: "Aretes con cristales Swarovski auténticos, base de plata, brillo espectacular, para toda ocasión",
    longDescription: "Hermosos aretes confeccionados con cristales Swarovski auténticos de corte brillante. Base de plata 925 con baño de rodio para mayor durabilidad y brillo. Diseño tipo solitario con engaste de seguridad. Los cristales reflejan la luz de manera espectacular creando un efecto deslumbrante. Cierre tipo presión con seguro. Hipoalergénicos. Perfectos para bodas, fiestas o uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-ARE-004",
    stock: 100,
    specifications: [
      "Cristales: Swarovski auténticos",
      "Base: Plata 925 con baño de rodio",
      "Tamaño cristal: 6mm de diámetro",
      "Cierre: Presión con seguro",
      "Peso: 2 gramos el par",
      "Hipoalergénicos",
      "Corte: Brillante facetado",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Par de aretes Swarovski",
      "Estuche de joyería elegante",
      "Certificado Swarovski",
      "Paño de limpieza premium",
      "Garantía 3 meses"
    ],
    benefits: [
      "Cristales Swarovski originales",
      "Brillo espectacular duradero",
      "Base de plata 925",
      "Hipoalergénicos certificados",
      "Versátiles para toda ocasión",
      "Garantía de 3 meses"
    ]
  },

  // 5. Set de Joyería Completo
  {
    id: 5,
    name: "Set Completo: Collar, Aretes y Pulsera Plata 925",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj7.webp",
    images: ["/assets/images/reloj7.webp", "/assets/images/reloj8.webp"],
    description: "Set completo de joyería en plata 925 con cristales, incluye collar, aretes y pulsera elegantes",
    longDescription: "Set completo de joyería fina en plata ley 925. Incluye collar (45cm), pulsera (18cm ajustable) y aretes a juego. Diseño con cristales incrustados que brillan con la luz. Acabado en baño de rodio para mayor resistencia y mantener el brillo. Cada pieza es hipoalergénica. Viene en elegante estuche de presentación. El regalo perfecto para ocasiones especiales: cumpleaños, aniversarios, bodas o Navidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-SET-005",
    stock: 100,
    specifications: [
      "Material: Plata 925 certificada",
      "Collar: 45cm con cristales",
      "Pulsera: 16-18cm ajustable",
      "Aretes: Tipo gota con cristales",
      "Acabado: Baño de rodio",
      "Peso total: 12 gramos",
      "Hipoalergénico",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Collar de plata 925",
      "1 Pulsera de plata 925",
      "1 Par de aretes de plata 925",
      "Estuche de presentación premium",
      "Certificado de autenticidad",
      "2 Paños de limpieza",
      "Garantía 3 meses"
    ],
    benefits: [
      "Set completo coordinado",
      "Ahorro vs compra individual",
      "Plata 925 en todas las piezas",
      "Perfecto como regalo",
      "Estuche de lujo incluido",
      "Garantía de 3 meses"
    ]
  },

  // 6. Reloj para Mujer Elegante
  {
    id: 6,
    name: "Reloj Elegante para Mujer Correa Metálica",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-mujer",
    image: "/assets/images/reloj9.webp",
    images: ["/assets/images/reloj9.webp", "/assets/images/reloj10.webp"],
    description: "Reloj femenino elegante con correa metálica, esfera decorada, resistente al agua, muy elegante",
    longDescription: "Reloj para mujer de diseño sofisticado y elegante. Caja de 32mm en acero inoxidable con acabado pulido. Esfera con índices de cristal y manecillas doradas. Correa metálica tipo milanés magnética, ajustable sin herramientas. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente. Resistencia al agua 3ATM. Perfecto para la mujer moderna y elegante que busca estilo y funcionalidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-MUJ-006",
    stock: 100,
    specifications: [
      "Caja: 32mm acero inoxidable",
      "Movimiento: Cuarzo japonés",
      "Correa: Metálica tipo milanés",
      "Cierre: Magnético ajustable",
      "Cristal: Mineral resistente",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con detalles de cristal",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj elegante para mujer",
      "Estuche de presentación",
      "Ajustador de correa incluido",
      "Garantía 3 meses",
      "Manual de usuario",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño elegante y femenino",
      "Correa ajustable sin herramientas",
      "Movimiento preciso japonés",
      "Resistente al agua",
      "Versátil para toda ocasión",
      "Garantía de 3 meses"
    ]
  },

  // 7. Anillo de Compromiso Plata con Circón
  {
    id: 7,
    name: "Anillo de Compromiso Plata 925 con Circón",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj11.webp",
    images: ["/assets/images/reloj11.webp"],
    description: "Hermoso anillo de compromiso en plata 925 con piedra de circón cúbico brillante tipo diamante",
    longDescription: "Elegante anillo de compromiso fabricado en plata ley 925 de máxima pureza. Piedra central de circón cúbico AAA+ de 6mm con corte brillante que simula diamante natural. Engaste tipo solitario de 6 pernos para máxima seguridad. Aro con micro pavé de circonios en los laterales. Acabado en baño de rodio blanco para mayor brillo y durabilidad. Disponible en múltiples tallas. Incluye certificado de autenticidad y estuche de terciopelo. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-ANI-007",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "talla-6",
        name: "Talla 6 (46mm)",
        color: "#E8E8E8",
        sku: "JOY-ANI-007-T6",
        inStock: true,
        stock: 100
      },
      {
        id: "talla-7",
        name: "Talla 7 (47mm)",
        color: "#D8D8D8",
        sku: "JOY-ANI-007-T7",
        inStock: true,
        stock: 100
      },
      {
        id: "talla-8",
        name: "Talla 8 (48mm)",
        color: "#C8C8C8",
        sku: "JOY-ANI-007-T8",
        inStock: true,
        stock: 100
      },
      {
        id: "talla-9",
        name: "Talla 9 (49mm)",
        color: "#B8B8B8",
        sku: "JOY-ANI-007-T9",
        inStock: true,
        stock: 100
      }
    ],
    specifications: [
      "Material: Plata 925 certificada",
      "Piedra: Circón cúbico AAA+ 6mm",
      "Engaste: Solitario 6 pernos",
      "Laterales: Micro pavé circonios",
      "Acabado: Baño de rodio blanco",
      "Peso: 4.5 gramos",
      "Tallas disponibles: 6, 7, 8, 9",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Anillo de compromiso",
      "Estuche de terciopelo premium",
      "Certificado de autenticidad",
      "Guía de tallas",
      "Garantía 3 meses",
      "Servicio de cambio de talla"
    ],
    benefits: [
      "Plata 925 de alta pureza",
      "Piedra brillante tipo diamante",
      "Diseño clásico atemporal",
      "Múltiples tallas disponibles",
      "Estuche elegante incluido",
      "Garantía de 3 meses"
    ]
  },

  // 8. Reloj Inteligente Smartwatch
  {
    id: 8,
    name: "Smartwatch Reloj Inteligente Multifunción",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj12.webp",
    images: ["/assets/images/reloj12.webp", "/assets/images/reloj13.webp"],
    description: "Reloj inteligente con monitor cardíaco, notificaciones, GPS, resistente al agua IP68",
    longDescription: "Smartwatch de última generación con pantalla táctil AMOLED de 1.4 pulgadas. Monitor de frecuencia cardíaca 24/7, oxígeno en sangre, calidad de sueño. Más de 100 modos deportivos. GPS integrado. Notificaciones de llamadas, mensajes y apps. Batería de 7 días de duración. Resistencia al agua IP68 (natación). Compatible con iOS y Android. Correa de silicona intercambiable. Ideal para fitness y vida smart. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-SMART-008",
    stock: 100,
    specifications: [
      "Pantalla: AMOLED 1.4\" táctil",
      "Sensores: Cardíaco, SpO2, acelerómetro",
      "GPS: Integrado de alta precisión",
      "Batería: 7 días de uso",
      "Resistencia: IP68 sumergible",
      "Compatibilidad: iOS y Android",
      "Correa: Silicona 20mm intercambiable",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch multifunción",
      "Cable de carga magnético",
      "Manual en español",
      "Correa adicional de regalo",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Monitoreo de salud 24/7",
      "100+ modos deportivos",
      "Batería de larga duración",
      "Resistente al agua para natación",
      "Notificaciones inteligentes",
      "Garantía de 3 meses"
    ]
  },

  // 9. Pulsera Infinito Plata 925
  {
    id: 9,
    name: "Pulsera Símbolo Infinito Plata 925",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj14.webp",
    images: ["/assets/images/reloj14.webp"],
    description: "Pulsera delicada con símbolo del infinito en plata 925, ajustable, regalo perfecto de amor eterno",
    longDescription: "Hermosa pulsera en plata ley 925 con dije del símbolo infinito. Cadena delicada tipo cable de 17-19cm ajustable. El símbolo infinito representa amor eterno, amistad infinita y lazos inquebrantables. Acabado pulido brillante. Cierre tipo mosquetón con argollas de ajuste. Hipoalergénica. Viene en elegante estuche de regalo. Perfecta para regalar a personas especiales o uso personal diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-PUL-009",
    stock: 100,
    specifications: [
      "Material: Plata 925 pura",
      "Longitud: 17-19cm ajustable",
      "Dije infinito: 12mm x 25mm",
      "Tipo cadena: Cable delicada",
      "Peso: 2.8 gramos",
      "Cierre: Mosquetón con ajuste",
      "Acabado: Pulido brillante",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Pulsera símbolo infinito",
      "Estuche de regalo elegante",
      "Certificado de plata 925",
      "Paño de limpieza",
      "Tarjeta con significado del infinito",
      "Garantía 3 meses"
    ],
    benefits: [
      "Símbolo de amor eterno",
      "Plata 925 auténtica",
      "Ajustable a cualquier muñeca",
      "Hipoalergénica",
      "Regalo con significado especial",
      "Garantía de 3 meses"
    ]
  },

  // 10. Reloj de Lujo Cronógrafo
  {
    id: 10,
    name: "Reloj Cronógrafo de Lujo para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj15.webp",
    images: ["/assets/images/reloj15.webp", "/assets/images/reloj16.webp"],
    description: "Reloj cronógrafo de lujo con movimiento automático, caja de acero, zafiro, sumergible 10ATM",
    longDescription: "Reloj cronógrafo de alta gama con diseño deportivo-elegante. Caja de 44mm en acero inoxidable 316L. Cristal de zafiro sintético anti-reflejante, prácticamente indestructible. Movimiento automático de 21 rubíes con reserva de marcha de 42 horas. 3 sub-esferas: cronómetro, segundero y fecha. Bisel taquimétrico. Correa de acero con cierre desplegable de seguridad. Resistencia al agua 10ATM (100m). Edición limitada con numeración individual. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-LUX-010",
    stock: 100,
    specifications: [
      "Caja: Acero 316L de 44mm",
      "Movimiento: Automático 21 rubíes",
      "Cristal: Zafiro anti-reflejante",
      "Funciones: Cronógrafo, fecha",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Acero inoxidable",
      "Bisel: Taquimétrico grabado",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj cronógrafo de lujo",
      "Estuche de madera premium",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Herramienta de ajuste",
      "Paño de microfibra"
    ],
    benefits: [
      "Movimiento automático premium",
      "Cristal de zafiro indestructible",
      "Diseño de lujo exclusivo",
      "Sumergible hasta 100 metros",
      "Edición limitada numerada",
      "Garantía de 3 meses"
    ]
  },

  // 11. Cadena Gruesa Hombre Plata 925
  {
    id: 11,
    name: "Cadena Gruesa Barbada para Hombre Plata 925",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-hombre",
    image: "/assets/images/reloj17.webp",
    images: ["/assets/images/reloj17.webp"],
    description: "Cadena gruesa tipo barbada en plata 925, 60cm, 8mm ancho, estilo urbano masculino robusto",
    longDescription: "Impresionante cadena masculina en plata ley 925 de máxima pureza. Diseño tipo barbada (figaro) de 8mm de ancho que proyecta fuerza y masculinidad. Longitud de 60cm ideal para uso sobre o bajo la ropa. Eslabones sólidos con peso de 52 gramos. Cierre de seguridad tipo mosquetón reforzado. Acabado pulido brillante. Resistente y duradera para uso diario. Estilo urbano moderno que combina con cualquier outfit casual o elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-CAD-011",
    stock: 100,
    specifications: [
      "Material: Plata 925 maciza",
      "Longitud: 60cm",
      "Ancho: 8mm eslabones",
      "Tipo: Barbada (Figaro)",
      "Peso: 52 gramos",
      "Cierre: Mosquetón reforzado",
      "Acabado: Pulido brillante",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Cadena barbada plata 925",
      "Estuche rígido de protección",
      "Certificado de autenticidad",
      "Paño de limpieza",
      "Garantía 3 meses",
      "Bolsa de terciopelo"
    ],
    benefits: [
      "Plata 925 maciza 100%",
      "Diseño masculino robusto",
      "Peso sustancial de calidad",
      "Estilo urbano versátil",
      "Resistente al uso diario",
      "Garantía de 3 meses"
    ]
  },

  // 12. Juego de Dijes Intercambiables
  {
    id: 12,
    name: "Set Pulsera con 5 Dijes Intercambiables Plata",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj18.webp",
    images: ["/assets/images/reloj18.webp"],
    description: "Pulsera tipo pandora con 5 dijes intercambiables en plata 925, personalizable y única",
    longDescription: "Sistema de pulsera con dijes intercambiables en plata 925. Incluye pulsera base tipo serpiente de 18-20cm ajustable con cierre de seguridad. 5 dijes temáticos incluidos: corazón, estrella, flor, infinito y árbol de la vida. Cada dije se coloca y quita fácilmente. Compatible con dijes estándar del mercado. Crea tu combinación única. Plata 925 en todos los componentes. Sistema antioxidante con baño de rodio. Regalo perfecto para expresar personalidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-SET-012",
    stock: 100,
    specifications: [
      "Pulsera: Plata 925 tipo serpiente",
      "Longitud: 18-20cm ajustable",
      "Dijes incluidos: 5 unidades",
      "Material dijes: Plata 925",
      "Cierre: Sistema de seguridad dual",
      "Acabado: Baño de rodio",
      "Compatible: Dijes estándar",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Pulsera base de plata 925",
      "5 Dijes intercambiables variados",
      "Estuche organizador",
      "Certificado de autenticidad",
      "Guía de combinaciones",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Sistema 100% personalizable",
      "5 dijes incluidos para empezar",
      "Plata 925 en todo el set",
      "Compatible con más dijes",
      "Cuenta tu historia personal",
      "Garantía de 3 meses"
    ]
  },

  // 13. Reloj Deportivo Clásico
  {
    id: 13,
    name: "Reloj Deportivo Clásico para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj19.webp",
    images: ["/assets/images/reloj19.webp", "/assets/images/reloj20.webp", "/assets/images/reloj21.webp"],
    description: "Reloj deportivo elegante con diseño clásico, resistente al agua, perfecto para uso diario",
    longDescription: "Reloj deportivo con diseño clásico y funcional. Caja de acero inoxidable de 40mm con acabado deportivo. Correa de silicona resistente y cómoda. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 5ATM (50 metros). Esfera con números luminosos para fácil lectura. Perfecto para actividades deportivas y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-013",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Silicona deportiva",
      "Resistencia al agua: 5ATM (50m)",
      "Esfera: Números luminosos",
      "Peso: 45 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo clásico",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño deportivo elegante",
      "Resistente al agua",
      "Números luminosos",
      "Cómodo para uso diario",
      "Movimiento preciso",
      "Garantía de 3 meses"
    ]
  },

  // 14. Reloj Elegante para Mujer con Variantes
  {
    id: 14,
    name: "Reloj Elegante para Mujer con Correa de Cuero",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-mujer",
    image: "/assets/images/reloj22.webp",
    images: ["/assets/images/reloj22.webp", "/assets/images/reloj23.webp"],
    description: "Elegante reloj femenino con correa de cuero genuino, diseño clásico y sofisticado",
    longDescription: "Hermoso reloj para mujer con diseño clásico y elegante. Caja delgada de 28mm en acero inoxidable con acabado pulido. Correa de cuero genuino italiano en colores variados. Esfera minimalista con índices delicados. Movimiento de cuarzo suizo de alta precisión. Cristal de zafiro resistente a rayones. Resistencia al agua 3ATM. Perfecto para la mujer que busca elegancia discreta. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-MUJ-014",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "negro",
        name: "Correa Negra",
        color: "#000000",
        sku: "REL-MUJ-014-NEG",
        inStock: true,
        stock: 100
      },
      {
        id: "cafe",
        name: "Correa Café",
        color: "#8B4513",
        sku: "REL-MUJ-014-CAF",
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Correa Azul",
        color: "#1E40AF",
        sku: "REL-MUJ-014-AZU",
        inStock: true,
        stock: 100
      }
    ],
    specifications: [
      "Caja: Acero inoxidable 28mm",
      "Movimiento: Cuarzo suizo",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Minimalista",
      "Colores disponibles: Negro, Café, Azul",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj elegante para mujer",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño elegante y discreto",
      "Cristal de zafiro",
      "Correa de cuero premium",
      "Múltiples colores disponibles",
      "Movimiento suizo preciso",
      "Garantía de 3 meses"
    ]
  },

  // 15. Set de Joyería Plata Básico
  {
    id: 15,
    name: "Set Básico de Plata 925: Aretes y Collar",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj24.webp",
    images: ["/assets/images/reloj24.webp", "/assets/images/reloj25.webp"],
    description: "Set básico de joyería en plata 925, incluye aretes y collar a juego, diseño clásico",
    longDescription: "Set básico de joyería fabricado en plata ley 925 de alta pureza. Incluye collar delicado de 42cm y aretes a juego. Diseño clásico y versátil perfecto para uso diario. Acabado pulido brillante. Cierre de seguridad en todas las piezas. Hipoalergénico y resistente a la oxidación. Viene en elegante estuche de regalo. El complemento perfecto para cualquier ocasión. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-SET-015",
    stock: 100,
    specifications: [
      "Material: Plata 925 certificada",
      "Collar: 42cm delicado",
      "Aretes: Diseño clásico",
      "Acabado: Pulido brillante",
      "Cierre: Seguridad en todas piezas",
      "Hipoalergénico",
      "Peso total: 8 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Collar de plata 925",
      "1 Par de aretes de plata 925",
      "Estuche de regalo elegante",
      "Certificado de autenticidad",
      "Paño de limpieza",
      "Garantía 3 meses"
    ],
    benefits: [
      "Plata 925 auténtica",
      "Set coordinado",
      "Diseño versátil",
      "Hipoalergénico",
      "Estuche de regalo incluido",
      "Garantía de 3 meses"
    ]
  },

  // 16. Reloj Deportivo con Variantes de Color
  {
    id: 16,
    name: "Reloj Deportivo Colorido para Jóvenes",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj26.webp",
    images: ["/assets/images/reloj26.webp", "/assets/images/reloj27.webp", "/assets/images/reloj28.webp"],
    description: "Reloj deportivo juvenil con colores vibrantes, resistente al agua, perfecto para actividades",
    longDescription: "Reloj deportivo diseñado para jóvenes activos. Caja de resina resistente de 42mm con colores vibrantes. Correa de silicona suave y cómoda. Pantalla digital con múltiples funciones: hora, fecha, alarma, cronómetro. Resistencia al agua 5ATM perfecta para natación y deportes acuáticos. Batería de larga duración. Diseño moderno y juvenil que combina funcionalidad con estilo. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-016",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "rojo",
        name: "Rojo Vibrante",
        color: "#DC2626",
        sku: "REL-DEP-016-ROJ",
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Azul Eléctrico",
        color: "#2563EB",
        sku: "REL-DEP-016-AZU",
        inStock: true,
        stock: 100
      },
      {
        id: "verde",
        name: "Verde Lima",
        color: "#16A34A",
        sku: "REL-DEP-016-VER",
        inStock: true,
        stock: 100
      }
    ],
    specifications: [
      "Caja: Resina 42mm resistente",
      "Pantalla: Digital LCD",
      "Correa: Silicona suave",
      "Resistencia: 5ATM (50m)",
      "Funciones: Hora, fecha, alarma, cronómetro",
      "Batería: Larga duración",
      "Colores: Rojo, Azul, Verde",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo colorido",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Diseño juvenil y moderno",
      "Colores vibrantes",
      "Resistente al agua",
      "Múltiples funciones",
      "Batería duradera",
      "Garantía de 3 meses"
    ]
  },

  // 17. Pulsera Tennis Plata con Circonios
  {
    id: 17,
    name: "Pulsera Tennis Plata 925 con Circonios",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj29.webp",
    images: ["/assets/images/reloj29.webp"],
    description: "Elegante pulsera tennis en plata 925 con circonios brillantes, cierre de seguridad",
    longDescription: "Pulsera tipo tennis fabricada en plata ley 925 de máxima pureza. Diseño con circonios cúbicos engastados que crean un efecto de brillo continuo. Longitud de 18cm con extensión a 20cm. Cierre de seguridad tipo caja con figura de 8. Acabado en baño de rodio para mayor durabilidad. Hipoalergénica y resistente al uso diario. Perfecta para ocasiones especiales o uso elegante diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-PUL-017",
    stock: 100,
    specifications: [
      "Material: Plata 925 certificada",
      "Piedras: Circonios cúbicos",
      "Longitud: 18-20cm ajustable",
      "Cierre: Seguridad tipo caja",
      "Acabado: Baño de rodio",
      "Hipoalergénica",
      "Peso: 12 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Pulsera tennis plata 925",
      "Estuche de joyería",
      "Certificado de autenticidad",
      "Paño de limpieza premium",
      "Garantía 3 meses"
    ],
    benefits: [
      "Brillo espectacular",
      "Plata 925 auténtica",
      "Cierre de seguridad",
      "Ajustable a diferentes muñecas",
      "Hipoalergénica",
      "Garantía de 3 meses"
    ]
  },

  // 18. Reloj Clásico Automático
  {
    id: 18,
    name: "Reloj Clásico Automático para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj30.webp",
    images: ["/assets/images/reloj30.webp", "/assets/images/reloj31.webp"],
    description: "Reloj automático clásico con movimiento mecánico, caja de acero, reserva de marcha 40 horas",
    longDescription: "Reloj automático de alta calidad con movimiento mecánico japonés. Caja de acero inoxidable de 40mm con acabado pulido. Movimiento automático de 21 rubíes con reserva de marcha de 40 horas. Ventana de fecha a las 3 en punto. Correa de cuero genuino con cierre de hebilla. Cristal mineral resistente. Fondo transparente para ver el movimiento. Perfecto para el caballero que aprecia la relojería tradicional. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-AUT-018",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Automático 21 rubíes",
      "Reserva de marcha: 40 horas",
      "Correa: Cuero genuino",
      "Cristal: Mineral resistente",
      "Funciones: Hora, fecha",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj automático clásico",
      "Estuche premium",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Movimiento automático premium",
      "Reserva de marcha 40 horas",
      "Fondo transparente elegante",
      "Correa de cuero genuino",
      "Relojería tradicional",
      "Garantía de 3 meses"
    ]
  },

  // 19. Collar Elegante Plata con Perlas
  {
    id: 19,
    name: "Collar Elegante Plata 925 con Perlas Cultivadas",
    price: 100000,
    originalPrice: 142857,
    category: "joyeria-mujer",
    image: "/assets/images/reloj32.webp",
    images: ["/assets/images/reloj32.webp"],
    description: "Hermoso collar de plata 925 con perlas cultivadas naturales, diseño sofisticado y elegante",
    longDescription: "Exquisito collar fabricado en plata ley 925 con perlas cultivadas de agua dulce. Diseño clásico con cadena veneciana de 45cm y perla central de 8mm. Las perlas tienen excelente lustre y forma redonda perfecta. Cierre tipo mosquetón con extensión para ajuste. Acabado en baño de rodio para mayor durabilidad. Perfecto para ocasiones especiales y uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "JOY-COL-019",
    stock: 100,
    specifications: [
      "Material: Plata 925 certificada",
      "Perlas: Cultivadas agua dulce 8mm",
      "Longitud: 45cm con extensión",
      "Tipo cadena: Veneciana delicada",
      "Acabado: Baño de rodio",
      "Cierre: Mosquetón con seguridad",
      "Lustre: Alto brillo natural",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Collar con perlas cultivadas",
      "Estuche de joyería premium",
      "Certificado de autenticidad",
      "Paño de limpieza especial para perlas",
      "Garantía 3 meses",
      "Certificado de origen de perlas"
    ],
    benefits: [
      "Perlas naturales cultivadas",
      "Plata 925 de alta pureza",
      "Diseño clásico elegante",
      "Versátil para toda ocasión",
      "Mantenimiento fácil",
      "Garantía de 3 meses"
    ]
  },

  // 20. Reloj Deportivo Premium
  {
    id: 20,
    name: "Reloj Deportivo Premium Sumergible",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj33.webp",
    images: ["/assets/images/reloj33.webp"],
    description: "Reloj deportivo premium resistente al agua 10ATM, con bisel giratorio y cronógrafo",
    longDescription: "Reloj deportivo de alta gama diseñado para profesionales y entusiastas de los deportes extremos. Caja de acero inoxidable de 44mm con tratamiento PVD negro. Bisel giratorio unidireccional con escala de 60 minutos. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente con tratamiento anti-reflejante. Correa de silicona reforzada con cierre de seguridad. Resistencia al agua 10ATM (100 metros). Perfecto para buceo, natación y deportes acuáticos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-020",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 44mm PVD",
      "Movimiento: Cuarzo japonés premium",
      "Cristal: Mineral anti-reflejante",
      "Bisel: Giratorio unidireccional",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Funciones: Cronógrafo, bisel de buceo",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo premium",
      "Herramienta de ajuste de bisel",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses",
      "Certificado de profundidad"
    ],
    benefits: [
      "Resistente al agua 100m",
      "Bisel profesional de buceo",
      "Movimiento de alta precisión",
      "Diseño robusto y duradero",
      "Ideal para deportes extremos",
      "Garantía de 3 meses"
    ]
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: ShoppingBag },
  { id: 'relojes-hombre', name: 'Relojes Hombre', icon: Watch },
  { id: 'relojes-mujer', name: 'Relojes Mujer', icon: Watch },
  { id: 'relojes-deportivos', name: 'Relojes Deportivos', icon: Watch },
  { id: 'joyeria-mujer', name: 'Joyería Mujer', icon: Gem },
  { id: 'joyeria-hombre', name: 'Joyería Hombre', icon: Diamond }
];