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
    price: 185000,
    originalPrice: 250000,
    category: "relojes-hombre",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&h=600&q=80",
    description: "Reloj elegante con correa de cuero genuino, resistente al agua, perfecto para ocasiones formales",
    longDescription: "Reloj clásico de alta calidad con diseño ejecutivo sofisticado. Caja de acero inoxidable de 42mm con acabado pulido. Correa de cuero genuino italiano ajustable. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 3ATM (30 metros). Perfecto para el hombre moderno que valora la elegancia y funcionalidad.",
    inStock: true,
    discount: 26,
    sku: "REL-HOM-001",
    stock: 45,
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-rayones",
      "Correa: Cuero genuino italiano",
      "Resistencia al agua: 3ATM (30m)",
      "Esfera: Números romanos",
      "Cierre: Hebilla de acero"
    ],
    includes: [
      "1 Reloj clásico ejecutivo",
      "Estuche premium de presentación",
      "Manual de usuario",
      "Certificado de garantía 1 año",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Diseño atemporal y elegante",
      "Movimiento preciso y confiable",
      "Correa de cuero premium",
      "Resistente al uso diario",
      "Ideal para trabajo y eventos",
      "Garantía de 1 año"
    ]
  },

  // 2. Reloj Deportivo Digital
  {
    id: 2,
    name: "Reloj Deportivo Digital Multifunción",
    price: 95000,
    originalPrice: 135000,
    category: "relojes-deportivos",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&h=600&q=80",
    description: "Reloj digital deportivo con cronómetro, alarma, luz LED, resistente al agua 5ATM",
    longDescription: "Reloj deportivo digital de última generación. Caja robusta de resina con acabado mate. Pantalla LCD de alto contraste con retroiluminación LED. Múltiples funciones: cronómetro, temporizador, alarma dual, calendario completo. Resistencia al agua 5ATM (50 metros). Correa de silicona deportiva ultra cómoda. Ideal para running, natación, gym y actividades outdoor.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-002",
    stock: 78,
    specifications: [
      "Caja: Resina ultra resistente 45mm",
      "Pantalla: LCD con luz LED",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona deportiva",
      "Batería: 3 años de duración",
      "Funciones: Cronómetro, alarma, calendario",
      "Peso: 52 gramos"
    ],
    includes: [
      "1 Reloj deportivo digital",
      "Manual de instrucciones",
      "Garantía 6 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Resistente a golpes y agua",
      "Múltiples funciones deportivas",
      "Batería de larga duración",
      "Ligero y cómodo",
      "Perfecto para deportes",
      "Excelente relación calidad-precio"
    ]
  },

  // 3. Collar de Plata 925
  {
    id: 3,
    name: "Collar Cadena Plata 925 con Dije Corazón",
    price: 145000,
    originalPrice: 195000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
    description: "Hermoso collar de plata 925 con dije de corazón, ideal para regalo, diseño elegante y delicado",
    longDescription: "Elegante collar fabricado en plata ley 925 de alta pureza. Cadena tipo singapur de 45cm con ajuste a 40cm. Dije en forma de corazón con detalles grabados y acabado brillante. Cierre tipo mosquetón con argollas de seguridad. Hipoalergénico, no causa irritación. Viene en estuche de regalo premium. Perfecto para uso diario o ocasiones especiales. El regalo ideal para expresar amor y cariño.",
    inStock: true,
    discount: 26,
    sku: "JOY-COL-003",
    stock: 62,
    specifications: [
      "Material: Plata ley 925 certificada",
      "Longitud cadena: 40-45cm ajustable",
      "Tipo cadena: Singapur delicada",
      "Dije: Corazón 15mm x 12mm",
      "Peso: 3.5 gramos",
      "Cierre: Mosquetón con seguridad",
      "Acabado: Brillante espejo"
    ],
    includes: [
      "1 Collar de plata 925",
      "Estuche premium de regalo",
      "Certificado de autenticidad",
      "Paño de limpieza",
      "Garantía 6 meses",
      "Tarjeta de regalo personalizable"
    ],
    benefits: [
      "Plata 925 auténtica certificada",
      "Hipoalergénico y seguro",
      "Diseño elegante y versátil",
      "Longitud ajustable",
      "Estuche de regalo incluido",
      "Regalo perfecto para ella"
    ]
  },

  // 4. Aretes de Cristal Swarovski
  {
    id: 4,
    name: "Aretes Elegantes Cristal Swarovski",
    price: 125000,
    originalPrice: 175000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
    description: "Aretes con cristales Swarovski auténticos, base de plata, brillo espectacular, para toda ocasión",
    longDescription: "Hermosos aretes confeccionados con cristales Swarovski auténticos de corte brillante. Base de plata 925 con baño de rodio para mayor durabilidad y brillo. Diseño tipo solitario con engaste de seguridad. Los cristales reflejan la luz de manera espectacular creando un efecto deslumbrante. Cierre tipo presión con seguro. Hipoalergénicos. Perfectos para bodas, fiestas o uso diario elegante.",
    inStock: true,
    discount: 29,
    sku: "JOY-ARE-004",
    stock: 55,
    specifications: [
      "Cristales: Swarovski auténticos",
      "Base: Plata 925 con baño de rodio",
      "Tamaño cristal: 6mm de diámetro",
      "Cierre: Presión con seguro",
      "Peso: 2 gramos el par",
      "Hipoalergénicos",
      "Corte: Brillante facetado"
    ],
    includes: [
      "1 Par de aretes Swarovski",
      "Estuche de joyería elegante",
      "Certificado Swarovski",
      "Paño de limpieza premium",
      "Garantía 6 meses"
    ],
    benefits: [
      "Cristales Swarovski originales",
      "Brillo espectacular duradero",
      "Base de plata 925",
      "Hipoalergénicos certificados",
      "Versátiles para toda ocasión",
      "Excelente inversión en joyería"
    ]
  },

  // 5. Set de Joyería Completo
  {
    id: 5,
    name: "Set Completo: Collar, Aretes y Pulsera Plata 925",
    price: 285000,
    originalPrice: 420000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
    description: "Set completo de joyería en plata 925 con cristales, incluye collar, aretes y pulsera elegantes",
    longDescription: "Set completo de joyería fina en plata ley 925. Incluye collar (45cm), pulsera (18cm ajustable) y aretes a juego. Diseño con cristales incrustados que brillan con la luz. Acabado en baño de rodio para mayor resistencia y mantener el brillo. Cada pieza es hipoalergénica. Viene en elegante estuche de presentación. El regalo perfecto para ocasiones especiales: cumpleaños, aniversarios, bodas o Navidad.",
    inStock: true,
    discount: 32,
    sku: "JOY-SET-005",
    stock: 28,
    specifications: [
      "Material: Plata 925 certificada",
      "Collar: 45cm con cristales",
      "Pulsera: 16-18cm ajustable",
      "Aretes: Tipo gota con cristales",
      "Acabado: Baño de rodio",
      "Peso total: 12 gramos",
      "Hipoalergénico"
    ],
    includes: [
      "1 Collar de plata 925",
      "1 Pulsera de plata 925",
      "1 Par de aretes de plata 925",
      "Estuche de presentación premium",
      "Certificado de autenticidad",
      "2 Paños de limpieza",
      "Garantía 1 año completo"
    ],
    benefits: [
      "Set completo coordinado",
      "Ahorro vs compra individual",
      "Plata 925 en todas las piezas",
      "Perfecto como regalo",
      "Estuche de lujo incluido",
      "Versatilidad de uso"
    ]
  },

  // 6. Reloj para Mujer Elegante
  {
    id: 6,
    name: "Reloj Elegante para Mujer Correa Metálica",
    price: 165000,
    originalPrice: 225000,
    category: "relojes-mujer",
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&h=600&fit=crop",
    description: "Reloj femenino elegante con correa metálica, esfera decorada, resistente al agua, muy elegante",
    longDescription: "Reloj para mujer de diseño sofisticado y elegante. Caja de 32mm en acero inoxidable con acabado pulido. Esfera con índices de cristal y manecillas doradas. Correa metálica tipo milanés magnética, ajustable sin herramientas. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente. Resistencia al agua 3ATM. Perfecto para la mujer moderna y elegante que busca estilo y funcionalidad.",
    inStock: true,
    discount: 27,
    sku: "REL-MUJ-006",
    stock: 52,
    specifications: [
      "Caja: 32mm acero inoxidable",
      "Movimiento: Cuarzo japonés",
      "Correa: Metálica tipo milanés",
      "Cierre: Magnético ajustable",
      "Cristal: Mineral resistente",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con detalles de cristal"
    ],
    includes: [
      "1 Reloj elegante para mujer",
      "Estuche de presentación",
      "Ajustador de correa incluido",
      "Garantía 1 año",
      "Manual de usuario",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño elegante y femenino",
      "Correa ajustable sin herramientas",
      "Movimiento preciso japonés",
      "Resistente al agua",
      "Versátil para toda ocasión",
      "Excelente calidad-precio"
    ]
  },

  // 7. Anillo de Compromiso Plata con Circón
  {
    id: 7,
    name: "Anillo de Compromiso Plata 925 con Circón",
    price: 195000,
    originalPrice: 275000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
    description: "Hermoso anillo de compromiso en plata 925 con piedra de circón cúbico brillante tipo diamante",
    longDescription: "Elegante anillo de compromiso fabricado en plata ley 925 de máxima pureza. Piedra central de circón cúbico AAA+ de 6mm con corte brillante que simula diamante natural. Engaste tipo solitario de 6 pernos para máxima seguridad. Aro con micro pavé de circonios en los laterales. Acabado en baño de rodio blanco para mayor brillo y durabilidad. Disponible en múltiples tallas. Incluye certificado de autenticidad y estuche de terciopelo.",
    inStock: true,
    discount: 29,
    sku: "JOY-ANI-007",
    stock: 35,
    hasVariants: true,
    variants: [
      {
        id: "talla-6",
        name: "Talla 6 (46mm)",
        color: "#E8E8E8",
        sku: "JOY-ANI-007-T6",
        inStock: true,
        stock: 8
      },
      {
        id: "talla-7",
        name: "Talla 7 (47mm)",
        color: "#D8D8D8",
        sku: "JOY-ANI-007-T7",
        inStock: true,
        stock: 12
      },
      {
        id: "talla-8",
        name: "Talla 8 (48mm)",
        color: "#C8C8C8",
        sku: "JOY-ANI-007-T8",
        inStock: true,
        stock: 10
      },
      {
        id: "talla-9",
        name: "Talla 9 (49mm)",
        color: "#B8B8B8",
        sku: "JOY-ANI-007-T9",
        inStock: true,
        stock: 5
      }
    ],
    specifications: [
      "Material: Plata 925 certificada",
      "Piedra: Circón cúbico AAA+ 6mm",
      "Engaste: Solitario 6 pernos",
      "Laterales: Micro pavé circonios",
      "Acabado: Baño de rodio blanco",
      "Peso: 4.5 gramos",
      "Tallas disponibles: 6, 7, 8, 9"
    ],
    includes: [
      "1 Anillo de compromiso",
      "Estuche de terciopelo premium",
      "Certificado de autenticidad",
      "Guía de tallas",
      "Garantía 1 año",
      "Servicio de cambio de talla"
    ],
    benefits: [
      "Plata 925 de alta pureza",
      "Piedra brillante tipo diamante",
      "Diseño clásico atemporal",
      "Múltiples tallas disponibles",
      "Estuche elegante incluido",
      "Perfecto para propuesta"
    ]
  },

  // 8. Reloj Inteligente Smartwatch
  {
    id: 8,
    name: "Smartwatch Reloj Inteligente Multifunción",
    price: 215000,
    originalPrice: 310000,
    category: "relojes-deportivos",
    image: "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?w=600&h=600&fit=crop",
    description: "Reloj inteligente con monitor cardíaco, notificaciones, GPS, resistente al agua IP68",
    longDescription: "Smartwatch de última generación con pantalla táctil AMOLED de 1.4 pulgadas. Monitor de frecuencia cardíaca 24/7, oxígeno en sangre, calidad de sueño. Más de 100 modos deportivos. GPS integrado. Notificaciones de llamadas, mensajes y apps. Batería de 7 días de duración. Resistencia al agua IP68 (natación). Compatible con iOS y Android. Correa de silicona intercambiable. Ideal para fitness y vida smart.",
    inStock: true,
    discount: 31,
    sku: "REL-SMART-008",
    stock: 68,
    specifications: [
      "Pantalla: AMOLED 1.4\" táctil",
      "Sensores: Cardíaco, SpO2, acelerómetro",
      "GPS: Integrado de alta precisión",
      "Batería: 7 días de uso",
      "Resistencia: IP68 sumergible",
      "Compatibilidad: iOS y Android",
      "Correa: Silicona 20mm intercambiable"
    ],
    includes: [
      "1 Smartwatch multifunción",
      "Cable de carga magnético",
      "Manual en español",
      "Correa adicional de regalo",
      "App móvil gratuita",
      "Garantía 1 año"
    ],
    benefits: [
      "Monitoreo de salud 24/7",
      "100+ modos deportivos",
      "Batería de larga duración",
      "Resistente al agua para natación",
      "Notificaciones inteligentes",
      "Compatible con tu smartphone"
    ]
  },

  // 9. Pulsera Infinito Plata 925
  {
    id: 9,
    name: "Pulsera Símbolo Infinito Plata 925",
    price: 89000,
    originalPrice: 125000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
    description: "Pulsera delicada con símbolo del infinito en plata 925, ajustable, regalo perfecto de amor eterno",
    longDescription: "Hermosa pulsera en plata ley 925 con dije del símbolo infinito. Cadena delicada tipo cable de 17-19cm ajustable. El símbolo infinito representa amor eterno, amistad infinita y lazos inquebrantables. Acabado pulido brillante. Cierre tipo mosquetón con argollas de ajuste. Hipoalergénica. Viene en elegante estuche de regalo. Perfecta para regalar a personas especiales o uso personal diario.",
    inStock: true,
    discount: 29,
    sku: "JOY-PUL-009",
    stock: 92,
    specifications: [
      "Material: Plata 925 pura",
      "Longitud: 17-19cm ajustable",
      "Dije infinito: 12mm x 25mm",
      "Tipo cadena: Cable delicada",
      "Peso: 2.8 gramos",
      "Cierre: Mosquetón con ajuste",
      "Acabado: Pulido brillante"
    ],
    includes: [
      "1 Pulsera símbolo infinito",
      "Estuche de regalo elegante",
      "Certificado de plata 925",
      "Paño de limpieza",
      "Tarjeta con significado del infinito",
      "Garantía 6 meses"
    ],
    benefits: [
      "Símbolo de amor eterno",
      "Plata 925 auténtica",
      "Ajustable a cualquier muñeca",
      "Hipoalergénica",
      "Regalo con significado especial",
      "Elegante y minimalista"
    ]
  },

  // 10. Reloj de Lujo Cronógrafo
  {
    id: 10,
    name: "Reloj Cronógrafo de Lujo para Hombre",
    price: 425000,
    originalPrice: 650000,
    category: "relojes-hombre",
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop",
    description: "Reloj cronógrafo de lujo con movimiento automático, caja de acero, zafiro, sumergible 10ATM",
    longDescription: "Reloj cronógrafo de alta gama con diseño deportivo-elegante. Caja de 44mm en acero inoxidable 316L. Cristal de zafiro sintético anti-reflejante, prácticamente indestructible. Movimiento automático de 21 rubíes con reserva de marcha de 42 horas. 3 sub-esferas: cronómetro, segundero y fecha. Bisel taquimétrico. Correa de acero con cierre desplegable de seguridad. Resistencia al agua 10ATM (100m). Edición limitada con numeración individual.",
    inStock: true,
    discount: 35,
    sku: "REL-LUX-010",
    stock: 15,
    specifications: [
      "Caja: Acero 316L de 44mm",
      "Movimiento: Automático 21 rubíes",
      "Cristal: Zafiro anti-reflejante",
      "Funciones: Cronógrafo, fecha",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Acero inoxidable",
      "Bisel: Taquimétrico grabado"
    ],
    includes: [
      "1 Reloj cronógrafo de lujo",
      "Estuche de madera premium",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía internacional 2 años",
      "Herramienta de ajuste",
      "Paño de microfibra"
    ],
    benefits: [
      "Movimiento automático premium",
      "Cristal de zafiro indestructible",
      "Diseño de lujo exclusivo",
      "Sumergible hasta 100 metros",
      "Edición limitada numerada",
      "Inversión en relojería fina"
    ]
  },

  // 11. Cadena Gruesa Hombre Plata 925
  {
    id: 11,
    name: "Cadena Gruesa Barbada para Hombre Plata 925",
    price: 245000,
    originalPrice: 340000,
    category: "joyeria-hombre",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
    description: "Cadena gruesa tipo barbada en plata 925, 60cm, 8mm ancho, estilo urbano masculino robusto",
    longDescription: "Impresionante cadena masculina en plata ley 925 de máxima pureza. Diseño tipo barbada (figaro) de 8mm de ancho que proyecta fuerza y masculinidad. Longitud de 60cm ideal para uso sobre o bajo la ropa. Eslabones sólidos con peso de 52 gramos. Cierre de seguridad tipo mosquetón reforzado. Acabado pulido brillante. Resistente y duradera para uso diario. Estilo urbano moderno que combina con cualquier outfit casual o elegante.",
    inStock: true,
    discount: 28,
    sku: "JOY-CAD-011",
    stock: 38,
    specifications: [
      "Material: Plata 925 maciza",
      "Longitud: 60cm",
      "Ancho: 8mm eslabones",
      "Tipo: Barbada (Figaro)",
      "Peso: 52 gramos",
      "Cierre: Mosquetón reforzado",
      "Acabado: Pulido brillante"
    ],
    includes: [
      "1 Cadena barbada plata 925",
      "Estuche rígido de protección",
      "Certificado de autenticidad",
      "Paño de limpieza",
      "Garantía 1 año",
      "Bolsa de terciopelo"
    ],
    benefits: [
      "Plata 925 maciza 100%",
      "Diseño masculino robusto",
      "Peso sustancial de calidad",
      "Estilo urbano versátil",
      "Resistente al uso diario",
      "Inversión en joyería de hombre"
    ]
  },

  // 12. Juego de Dijes Intercambiables
  {
    id: 12,
    name: "Set Pulsera con 5 Dijes Intercambiables Plata",
    price: 175000,
    originalPrice: 245000,
    category: "joyeria-mujer",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop",
    description: "Pulsera tipo pandora con 5 dijes intercambiables en plata 925, personalizable y única",
    longDescription: "Sistema de pulsera con dijes intercambiables en plata 925. Incluye pulsera base tipo serpiente de 18-20cm ajustable con cierre de seguridad. 5 dijes temáticos incluidos: corazón, estrella, flor, infinito y árbol de la vida. Cada dije se coloca y quita fácilmente. Compatible con dijes estándar del mercado. Crea tu combinación única. Plata 925 en todos los componentes. Sistema antioxidante con baño de rodio. Regalo perfecto para expresar personalidad.",
    inStock: true,
    discount: 29,
    sku: "JOY-SET-012",
    stock: 48,
    specifications: [
      "Pulsera: Plata 925 tipo serpiente",
      "Longitud: 18-20cm ajustable",
      "Dijes incluidos: 5 unidades",
      "Material dijes: Plata 925",
      "Cierre: Sistema de seguridad dual",
      "Acabado: Baño de rodio",
      "Compatible: Dijes estándar"
    ],
    includes: [
      "1 Pulsera base de plata 925",
      "5 Dijes intercambiables variados",
      "Estuche organizador",
      "Certificado de autenticidad",
      "Guía de combinaciones",
      "Garantía 1 año",
      "Paño de limpieza"
    ],
    benefits: [
      "Sistema 100% personalizable",
      "5 dijes incluidos para empezar",
      "Plata 925 en todo el set",
      "Compatible con más dijes",
      "Cuenta tu historia personal",
      "Regalo único y significativo"
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