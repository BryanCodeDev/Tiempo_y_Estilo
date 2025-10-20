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

  // 3. Reloj Deportivo para Mujer
  {
    id: 3,
    name: "Reloj Deportivo Elegante para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj5.webp",
    images: ["/assets/images/reloj5.webp"],
    description: "Reloj deportivo masculino con diseño elegante, resistente al agua, perfecto para actividades diarias",
    longDescription: "Reloj deportivo diseñado especialmente para hombrees activas. Caja de acero inoxidable de 36mm con acabado pulido. Correa de silicona cómoda y resistente. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 5ATM (50 metros). Esfera con números luminosos para fácil lectura en cualquier condición. Perfecto para deportes, trabajo y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-DEP-HOM-003",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 36mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Silicona deportiva",
      "Resistencia al agua: 5ATM (50m)",
      "Esfera: Números luminosos",
      "Peso: 45 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo para hombre",
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

  // 4. Reloj Clásico para Mujer
  {
    id: 4,
    name: "Reloj Clásico Masculino con Brillantes",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj6.webp",
    images: ["/assets/images/reloj6.webp"],
    description: "Elegante reloj clásico para hombre con detalles brillantes, perfecto para ocasiones especiales",
    longDescription: "Reloj clásico de caballero con diseño sofisticado y detalles brillantes en la esfera. Caja de acero inoxidable de 30mm con acabado pulido. Correa de cuero genuino italiano ajustable. Movimiento de cuarzo suizo de alta precisión. Cristal de zafiro resistente a rayones. Esfera con índices de cristal que reflejan la luz elegantemente. Resistencia al agua 3ATM. Perfecto para la hombre elegante que busca un accesorio refinado para ocasiones especiales y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-CLA-HOM-004",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 30mm",
      "Movimiento: Cuarzo suizo",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con detalles brillantes",
      "Peso: 35 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico para hombre",
      "Estuche de presentación elegante",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño clásico elegante",
      "Cristal de zafiro",
      "Movimiento suizo preciso",
      "Detalles brillantes exclusivos",
      "Correa de cuero premium",
      "Garantía de 3 meses"
    ]
  },

  // 5. Reloj Cronógrafo Deportivo
  {
    id: 5,
    name: "Reloj Cronógrafo Deportivo Multifunción",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj7.webp",
    images: ["/assets/images/reloj7.webp", "/assets/images/reloj8.webp"],
    description: "Reloj cronógrafo deportivo con múltiples funciones, resistente al agua 10ATM, perfecto para atletas",
    longDescription: "Reloj cronógrafo deportivo de alto rendimiento diseñado para atletas profesionales. Caja de acero inoxidable de 45mm con tratamiento PVD negro. Funciones: cronómetro, taquímetro, calendario completo, alarma. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente con tratamiento anti-reflejante. Correa de silicona reforzada con cierre de seguridad. Resistencia al agua 10ATM (100 metros). Bisel giratorio unidireccional. Perfecto para running, natación, ciclismo y entrenamientos intensos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-CRO-DEP-005",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 45mm PVD",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-reflejante",
      "Funciones: Cronógrafo, taquímetro",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Bisel: Giratorio unidireccional",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj cronógrafo deportivo",
      "Herramientas de ajuste",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses"
    ],
    benefits: [
      "Funciones profesionales",
      "Resistente al agua 100m",
      "Movimiento de alta precisión",
      "Diseño robusto y duradero",
      "Ideal para deportes extremos",
      "Garantía de 3 meses"
    ]
  },

  // 6. Reloj para Mujer Elegante
  {
    id: 6,
    name: "Reloj Elegante para Hombre con Correa Metálica",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj9.webp",
    images: ["/assets/images/reloj9.webp", "/assets/images/reloj10.webp"],
    description: "Reloj masculino elegante con correa metálica, esfera decorada, resistente al agua, muy elegante",
    longDescription: "Reloj para hombre de diseño sofisticado y elegante. Caja de 32mm en acero inoxidable con acabado pulido. Esfera con índices de cristal y manecillas doradas. Correa metálica tipo milanés magnética, ajustable sin herramientas. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente. Resistencia al agua 3ATM. Perfecto para la hombre moderna y elegante que busca estilo y funcionalidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-HOM-006",
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
      "1 Reloj elegante para hombre",
      "Estuche de presentación",
      "Ajustador de correa incluido",
      "Garantía 3 meses",
      "Manual de usuario",
      "Paño de limpieza"
    ],
    hasVariants: true,
    variants: [
      {
        id: "metalica",
        name: "Correa Metálica",
        color: "#C0C0C0",
        sku: "REL-HOM-006-MET",
        image: "/assets/images/reloj9.webp",
        images: ["/assets/images/reloj9.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "negro",
        name: "Correa Negra",
        color: "#000000",
        sku: "REL-HOM-006-NEG",
        image: "/assets/images/reloj10.webp",
        images: ["/assets/images/reloj10.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "cafe",
        name: "Correa Café",
        color: "#8B4513",
        sku: "REL-HOM-006-CAF",
        image: "/assets/images/reloj9.webp",
        images: ["/assets/images/reloj9.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Correa Azul",
        color: "#1E40AF",
        sku: "REL-HOM-006-AZU",
        image: "/assets/images/reloj10.webp",
        images: ["/assets/images/reloj10.webp"],
        inStock: true,
        stock: 100
      }
    ],
    benefits: [
      "Diseño elegante y masculino",
      "Correa ajustable sin herramientas",
      "Movimiento preciso japonés",
      "Resistente al agua",
      "Versátil para toda ocasión",
      "Garantía de 3 meses"
    ]
  },

  // 7. Reloj Automático de Lujo
  {
    id: 7,
    name: "Reloj Automático de Lujo para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj11.webp",
    images: ["/assets/images/reloj11.webp"],
    description: "Exclusivo reloj automático con movimiento mecánico, reserva de marcha 40 horas, diseño premium",
    longDescription: "Reloj automático de lujo con movimiento mecánico japonés de alta precisión. Caja de acero inoxidable 316L de 42mm con acabado pulido. Movimiento automático de 21 rubíes con reserva de marcha de 40 horas. Ventana de fecha a las 3 en punto. Correa de cuero genuino italiano con cierre de hebilla. Cristal de zafiro resistente a rayones. Fondo transparente para apreciar el movimiento mecánico. Perfecto para el caballero que valora la relojería tradicional y la artesanía fina. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-AUT-LUX-007",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 316L 42mm",
      "Movimiento: Automático 21 rubíes",
      "Reserva de marcha: 40 horas",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Funciones: Hora, fecha",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj automático de lujo",
      "Estuche premium de madera",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Movimiento automático premium",
      "Reserva de marcha 40 horas",
      "Cristal de zafiro",
      "Fondo transparente elegante",
      "Relojería tradicional",
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
    longDescription: "Smartwatch de última generación con pantalla táctil LCD de 1.3 pulgadas. Monitor de frecuencia cardíaca 24/7, contador de pasos, calorías y distancia. Más de 15 modos deportivos. GPS integrado. Notificaciones de llamadas, mensajes y apps. Batería de 7 días de duración. Resistencia al agua IP67 (lavado de manos). Compatible con iOS y Android. Correa de silicona intercambiable. Ideal para fitness y vida smart. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-SMART-008",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" táctil",
      "Sensores: Cardíaco óptico, acelerómetro",
      "GPS: Integrado",
      "Batería: 7 días de uso",
      "Resistencia: IP67",
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

  // 9. Reloj Deportivo con Monitor Cardíaco
  {
    id: 9,
    name: "Reloj Deportivo con Monitor Cardíaco Integrado",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj14.webp",
    images: ["/assets/images/reloj14.webp"],
    description: "Reloj deportivo avanzado con monitor cardíaco, GPS y múltiples modos deportivos",
    longDescription: "Smartwatch deportivo con funciones avanzadas de fitness. Pantalla LCD de 1.3 pulgadas con retroiluminación. Monitor de frecuencia cardíaca 24/7, contador de pasos, calorías y distancia. Múltiples modos deportivos: running, ciclismo, natación, gym. GPS integrado para rastreo de rutas. Notificaciones de llamadas y mensajes. Batería de hasta 7 días de duración. Correa de silicona ajustable. Resistencia al agua 5ATM. Perfecto para deportistas que buscan seguimiento preciso de su rendimiento. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-FIT-009",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" con luz",
      "Sensores: Cardíaco óptico",
      "GPS: Integrado",
      "Batería: 7 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona ajustable",
      "Modos deportivos: 10+",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo fitness",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Monitoreo cardíaco 24/7",
      "GPS integrado preciso",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Resistente al agua",
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

  // 11. Reloj Deportivo Premium para Hombre
  {
    id: 11,
    name: "Reloj Deportivo Premium Sumergible 200m",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj17.webp",
    images: ["/assets/images/reloj17.webp"],
    description: "Reloj deportivo profesional sumergible 200m, con válvula de helio y bisel cerámico",
    longDescription: "Reloj deportivo profesional diseñado para buceo profundo y deportes extremos. Caja de acero inoxidable 316L de 44mm con tratamiento PVD negro. Bisel giratorio unidireccional con inserto cerámico. Válvula automática de helio para descompresión. Movimiento automático japonés con reserva de marcha de 38 horas. Cristal de zafiro con tratamiento anti-reflejante. Correa de acero inoxidable con extensión para traje de buceo. Resistencia al agua 200 metros (20ATM). Perfecto para buceo profesional, submarinismo y deportes acuáticos extremos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-PRO-011",
    stock: 100,
    specifications: [
      "Caja: Acero 316L 44mm PVD negro",
      "Movimiento: Automático japonés",
      "Cristal: Zafiro anti-reflejante",
      "Bisel: Cerámico giratorio",
      "Resistencia: 200m (20ATM)",
      "Válvula: Helio automática",
      "Correa: Acero con extensión",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo profesional",
      "Herramientas de mantenimiento",
      "Manual técnico de buceo",
      "Estuche resistente al agua",
      "Garantía 3 meses",
      "Certificado de profundidad"
    ],
    benefits: [
      "Sumergible hasta 200 metros",
      "Válvula de helio profesional",
      "Movimiento automático",
      "Bisel cerámico duradero",
      "Ideal para buceo extremo",
      "Garantía de 3 meses"
    ]
  },

  // 12. Reloj Híbrido Inteligente
  {
    id: 12,
    name: "Reloj Híbrido Inteligente con Manecillas Clásicas",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj18.webp",
    images: ["/assets/images/reloj18.webp"],
    description: "Reloj híbrido que combina diseño clásico con funciones inteligentes, notificaciones discretas",
    longDescription: "Reloj híbrido inteligente que combina la elegancia de un reloj clásico con funciones smart discretas. Esfera analógica con manecillas tradicionales y sub-esferas digitales ocultas. Conectividad Bluetooth con smartphone. Notificaciones discretas mediante vibración y movimiento de manecillas. Seguimiento de actividad física, sueño y calorías. Batería de hasta 2 semanas de duración. Caja de acero inoxidable de 40mm con acabado pulido. Correa de cuero intercambiable. Compatible con iOS y Android. Perfecto para quienes buscan tecnología sin sacrificar la elegancia tradicional. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-HIB-SMART-012",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Pantalla: Híbrida analógica/digital",
      "Conectividad: Bluetooth 5.0",
      "Batería: 2 semanas duración",
      "Sensores: Acelerómetro, giroscopio",
      "Correa: Cuero intercambiable",
      "Compatibilidad: iOS y Android",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj híbrido inteligente",
      "Cable de carga USB",
      "Correa adicional de silicona",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Diseño clásico elegante",
      "Funciones inteligentes discretas",
      "Batería de larga duración",
      "Notificaciones silenciosas",
      "Seguimiento de actividad",
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

  // 14. Reloj Automático con Día y Fecha
  {
    id: 14,
    name: "Reloj Automático Ejecutivo con Día y Fecha",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj22.webp",
    images: ["/assets/images/reloj22.webp", "/assets/images/reloj23.webp"],
    description: "Reloj automático elegante con ventana de día y fecha, movimiento mecánico preciso",
    longDescription: "Reloj automático diseñado para el ejecutivo moderno que valora la precisión mecánica. Caja de acero inoxidable de 41mm con acabado pulido. Movimiento automático japonés con ventana de día de la semana y fecha. Reserva de marcha de 38 horas. Correa de cuero genuino italiano con cierre de hebilla. Cristal mineral resistente a rayones. Fondo transparente para apreciar el movimiento mecánico. Resistencia al agua 5ATM. Perfecto para profesionales que buscan la combinación perfecta entre elegancia tradicional y funcionalidad moderna. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-AUT-DIA-014",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 41mm",
      "Movimiento: Automático japonés",
      "Cristal: Mineral resistente",
      "Funciones: Día y fecha",
      "Reserva de marcha: 38 horas",
      "Correa: Cuero genuino italiano",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj automático ejecutivo",
      "Estuche premium de presentación",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Movimiento automático preciso",
      "Ventanas de día y fecha",
      "Reserva de marcha 38 horas",
      "Fondo transparente elegante",
      "Diseño ejecutivo profesional",
      "Garantía de 3 meses"
    ]
  },

  // 15. Reloj Clásico con Calendario
  {
    id: 15,
    name: "Reloj Clásico con Calendario Perpetuo",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj24.webp",
    images: ["/assets/images/reloj24.webp", "/assets/images/reloj25.webp"],
    description: "Reloj clásico elegante con calendario perpetuo, movimiento automático, perfecto para ejecutivos",
    longDescription: "Reloj clásico de alta gama con calendario perpetuo automático. Caja de acero inoxidable de 40mm con acabado pulido. Movimiento automático japonés con calendario completo: día, fecha y mes. Ventanas de calendario a las 12, 3 y 9 horas. Correa de cuero genuino italiano con cierre de hebilla. Cristal de zafiro resistente a rayones. Fondo transparente para ver el movimiento. Resistencia al agua 5ATM. Perfecto para ejecutivos y profesionales que buscan precisión y elegancia. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 24,
    sku: "REL-CLA-CAL-015",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Automático calendario",
      "Cristal: Zafiro resistente",
      "Funciones: Día, fecha, mes",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Cuero genuino",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj con calendario perpetuo",
      "Estuche premium de presentación",
      "Manual de usuario detallado",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Calendario automático completo",
      "Movimiento automático preciso",
      "Cristal de zafiro",
      "Diseño ejecutivo elegante",
      "Fondo transparente",
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
        image: "/assets/images/reloj26.webp",
        images: ["/assets/images/reloj26.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Azul Eléctrico",
        color: "#2563EB",
        sku: "REL-DEP-016-AZU",
        image: "/assets/images/reloj27.webp",
        images: ["/assets/images/reloj27.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "verde",
        name: "Verde Lima",
        color: "#16A34A",
        sku: "REL-DEP-016-VER",
        image: "/assets/images/reloj28.webp",
        images: ["/assets/images/reloj28.webp"],
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

  // 17. Reloj de Aviador Profesional
  {
    id: 17,
    name: "Reloj de Aviador con Ruleta de Cálculo",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj29.webp",
    images: ["/assets/images/reloj29.webp"],
    description: "Reloj de aviador profesional con ruleta de cálculo circular, cronógrafo y diseño clásico",
    longDescription: "Auténtico reloj de aviador con diseño inspirado en la aviación clásica. Caja de acero inoxidable de 46mm con acabado cepillado. Bisel giratorio bidireccional con ruleta de cálculo para conversiones de vuelo. Movimiento automático con cronógrafo y función flyback. Sub-esferas para cronómetro y segundos. Correa de cuero genuino con remaches. Cristal de zafiro con tratamiento anti-reflejante. Resistencia al agua 10ATM. Incluye regla de cálculo para navegación aérea. Perfecto para pilotos y entusiastas de la aviación. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 20,
    sku: "REL-AVI-PRO-017",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 46mm",
      "Movimiento: Automático cronógrafo",
      "Cristal: Zafiro anti-reflejante",
      "Bisel: Ruleta cálculo aviador",
      "Funciones: Cronógrafo flyback",
      "Correa: Cuero genuino",
      "Resistencia: 10ATM (100m)",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj de aviador profesional",
      "Regla de cálculo de navegación",
      "Estuche especial aviador",
      "Manual de funciones",
      "Herramientas de ajuste",
      "Garantía 3 meses"
    ],
    benefits: [
      "Ruleta de cálculo profesional",
      "Diseño auténtico aviador",
      "Cronógrafo flyback preciso",
      "Movimiento automático",
      "Ideal para pilotos",
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

  // 19. Reloj de Lujo con Fase Lunar
  {
    id: 19,
    name: "Reloj de Lujo con Complicación de Fase Lunar",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj32.webp",
    images: ["/assets/images/reloj32.webp"],
    description: "Exclusivo reloj de lujo con fase lunar, movimiento mecánico premium, diseño sofisticado",
    longDescription: "Reloj de lujo excepcional con complicación de fase lunar de alta precisión. Caja de acero inoxidable con tratamiento PVD oro rosa de 42mm con acabado pulido. Movimiento mecánico japonés con módulo de fase lunar. Sub-esfera de fase lunar a las 6 horas con indicador de día/noche. Reserva de marcha de 48 horas. Correa de cuero genuino italiano con cierre desplegable. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente grabado. Resistencia al agua 5ATM. Edición limitada con numeración individual. Perfecto para coleccionistas y amantes de la alta relojería. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 22,
    sku: "REL-LUX-LUN-019",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable PVD oro rosa 42mm",
      "Movimiento: Mecánico japonés",
      "Cristal: Zafiro abombado",
      "Complicación: Fase lunar",
      "Reserva de marcha: 48 horas",
      "Correa: Cuero genuino italiano",
      "Edición: Limitada numerada",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj de lujo con fase lunar",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de complicaciones",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Certificado de edición limitada"
    ],
    benefits: [
      "Complicación de fase lunar",
      "Movimiento mecánico japonés",
      "Acabado premium PVD",
      "Edición limitada exclusiva",
      "Reserva de marcha 48h",
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
  },

  // 21. Reloj Deportivo Juvenil
  {
    id: 21,
    name: "Reloj Deportivo Juvenil con Diseños Divertidos",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj22.webp",
    images: ["/assets/images/reloj22.webp", "/assets/images/reloj23.webp"],
    description: "Reloj deportivo juvenil con diseños modernos y funciones digitales, ideal para adolescentes activos",
    longDescription: "Reloj deportivo diseñado especialmente para jóvenes y adolescentes activos. Caja de resina resistente de 40mm con diseños modernos y acabados de alta calidad. Correa de silicona suave y ergonómica con estampados contemporáneos. Pantalla digital LCD de alto contraste con retroiluminación LED azul. Funciones avanzadas: hora, fecha, alarma dual, cronómetro de precisión, temporizador. Resistencia al agua 5ATM perfecta para natación y actividades acuáticas. Batería de litio de larga duración (hasta 2 años). Diseño juvenil que combina funcionalidad deportiva con estilo urbano moderno. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-JUV-021",
    stock: 100,
    specifications: [
      "Caja: Resina 40mm resistente",
      "Pantalla: Digital LCD con luz LED",
      "Correa: Silicona estampada",
      "Resistencia: 5ATM (50m)",
      "Funciones: Hora, fecha, alarma, cronómetro",
      "Batería: Larga duración",
      "Diseños: Múltiples estampados",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo juvenil",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Diseños divertidos y modernos",
      "Resistente al agua",
      "Múltiples funciones",
      "Batería duradera",
      "Cómodo para uso diario",
      "Garantía de 3 meses"
    ]
  },

  // 22. Reloj Clásico Ejecutivo Premium
  {
    id: 22,
    name: "Reloj Clásico Ejecutivo con Calendario",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj34.webp",
    images: ["/assets/images/reloj34.webp", "/assets/images/reloj35.webp"],
    description: "Reloj clásico ejecutivo con calendario completo, movimiento automático, elegante y sofisticado",
    longDescription: "Reloj clásico de alta gama diseñado para ejecutivos exigentes. Caja de acero inoxidable de 42mm con acabado pulido. Movimiento automático japonés con calendario completo: día, fecha y mes. Ventanas de calendario a las 12, 3 y 9 horas. Correa de cuero genuino italiano con cierre de hebilla. Cristal de zafiro resistente a rayones. Fondo transparente para apreciar el movimiento mecánico. Resistencia al agua 5ATM. Perfecto para el profesional que busca precisión y distinción. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-CLA-EJE-022",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Automático calendario",
      "Cristal: Zafiro resistente",
      "Funciones: Día, fecha, mes",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Cuero genuino italiano",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico ejecutivo",
      "Estuche premium de presentación",
      "Manual de usuario detallado",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Calendario automático completo",
      "Movimiento automático preciso",
      "Cristal de zafiro",
      "Diseño ejecutivo elegante",
      "Fondo transparente",
      "Garantía de 3 meses"
    ]
  },

  // 23. Reloj Deportivo Acuático Profesional
  {
    id: 23,
    name: "Reloj Deportivo Acuático Sumergible 300m",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj36.webp",
    images: ["/assets/images/reloj36.webp"],
    description: "Reloj deportivo profesional para buceo profundo, sumergible 300m con válvula de helio",
    longDescription: "Reloj deportivo profesional diseñado para buceo técnico y actividades acuáticas extremas. Caja de acero inoxidable 316L de 45mm con tratamiento PVD negro. Bisel giratorio unidireccional con escala de 60 minutos. Válvula automática de helio para descompresión. Movimiento automático japonés con reserva de marcha de 40 horas. Cristal de zafiro con tratamiento anti-reflejante. Correa de acero inoxidable con extensión para traje de buceo. Resistencia al agua 300 metros (30ATM). Perfecto para buceo profesional, submarinismo técnico y deportes acuáticos extremos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 20,
    sku: "REL-DEP-ACU-023",
    stock: 100,
    specifications: [
      "Caja: Acero 316L 45mm PVD negro",
      "Movimiento: Automático japonés",
      "Cristal: Zafiro anti-reflejante",
      "Bisel: Giratorio unidireccional",
      "Resistencia: 300m (30ATM)",
      "Válvula: Helio automática",
      "Correa: Acero con extensión",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj acuático profesional",
      "Herramientas de mantenimiento",
      "Manual técnico de buceo",
      "Estuche resistente al agua",
      "Garantía 3 meses",
      "Certificado de profundidad"
    ],
    benefits: [
      "Sumergible hasta 300 metros",
      "Válvula de helio profesional",
      "Movimiento automático",
      "Bisel profesional de buceo",
      "Ideal para buceo extremo",
      "Garantía de 3 meses"
    ]
  },

  // 24. Reloj Elegante para Mujer con Diamantes
  {
    id: 24,
    name: "Reloj Elegante para Mujer con Incrustaciones",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj37.webp",
    images: ["/assets/images/reloj37.webp", "/assets/images/reloj38.webp"],
    description: "Reloj masculino elegante con incrustaciones de cristal, diseño sofisticado y refinado",
    longDescription: "Reloj para hombre de diseño exclusivo y sofisticado. Caja de acero inoxidable de 28mm con acabado pulido. Esfera con incrustaciones de cristal que reflejan la luz elegantemente. Movimiento de cuarzo suizo de alta precisión. Correa de cuero genuino italiano ajustable. Cristal de zafiro resistente a rayones. Resistencia al agua 3ATM. Perfecto para la hombre elegante que busca un accesorio refinado para ocasiones especiales y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-HOM-DIA-024",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 28mm",
      "Movimiento: Cuarzo suizo",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con incrustaciones de cristal",
      "Peso: 32 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj elegante para hombre",
      "Estuche de presentación elegante",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño clásico elegante",
      "Cristal de zafiro",
      "Movimiento suizo preciso",
      "Incrustaciones exclusivas",
      "Correa de cuero premium",
      "Garantía de 3 meses"
    ]
  },

  // 25. Reloj Deportivo Multifunción
  {
    id: 25,
    name: "Reloj Deportivo Multifunción con GPS",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj39.webp",
    images: ["/assets/images/reloj39.webp", "/assets/images/reloj40.webp"],
    description: "Reloj deportivo avanzado con GPS integrado, monitor cardíaco y múltiples modos deportivos",
    longDescription: "Smartwatch deportivo de última generación con funciones avanzadas de fitness. Pantalla LCD de 1.4 pulgadas con retroiluminación. GPS integrado de alta precisión para rastreo de rutas. Monitor de frecuencia cardíaca 24/7, contador de pasos, calorías y distancia. Más de 20 modos deportivos: running, ciclismo, natación, gym, yoga. Notificaciones de llamadas y mensajes. Batería de hasta 10 días de duración. Correa de silicona ajustable. Resistencia al agua 5ATM. Perfecto para deportistas que buscan seguimiento preciso de su rendimiento. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-GPS-025",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.4\" con luz",
      "GPS: Integrado de alta precisión",
      "Sensores: Cardíaco óptico, acelerómetro",
      "Batería: 10 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona ajustable",
      "Modos deportivos: 20+",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo GPS",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "GPS integrado preciso",
      "Monitoreo cardíaco 24/7",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Resistente al agua",
      "Garantía de 3 meses"
    ]
  },

  // 26. Reloj Clásico Automático con Fase Lunar
  {
    id: 26,
    name: "Reloj Clásico Automático con Fase Lunar",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj41.webp",
    images: ["/assets/images/reloj41.webp"],
    description: "Exclusivo reloj automático con complicación de fase lunar, movimiento mecánico premium",
    longDescription: "Reloj automático excepcional con complicación de fase lunar de alta precisión. Caja de acero inoxidable de 40mm con acabado pulido. Movimiento mecánico japonés con módulo de fase lunar. Sub-esfera de fase lunar a las 6 horas con indicador de día/noche. Reserva de marcha de 42 horas. Correa de cuero genuino italiano con cierre desplegable. Cristal de zafiro resistente a rayones. Fondo transparente para ver el movimiento mecánico. Resistencia al agua 5ATM. Perfecto para amantes de la relojería tradicional y las complicaciones clásicas. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 22,
    sku: "REL-AUT-LUN-026",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Automático mecánico",
      "Cristal: Zafiro resistente",
      "Complicación: Fase lunar",
      "Reserva de marcha: 42 horas",
      "Correa: Cuero genuino italiano",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj automático con fase lunar",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de complicaciones",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Complicación de fase lunar",
      "Movimiento automático premium",
      "Cristal de zafiro",
      "Fondo transparente elegante",
      "Relojería tradicional",
      "Garantía de 3 meses"
    ]
  },

  // 27. Reloj Deportivo con Variantes de Color
  {
    id: 27,
    name: "Reloj Deportivo Colorido para Jóvenes",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj42.webp",
    images: ["/assets/images/reloj42.webp", "/assets/images/reloj43.webp", "/assets/images/reloj44.webp"],
    description: "Reloj deportivo juvenil con colores vibrantes y funciones digitales avanzadas, perfecto para actividades",
    longDescription: "Reloj deportivo diseñado para jóvenes activos con estilo único y moderno. Caja de resina resistente de 42mm con colores vibrantes de alta intensidad. Correa de silicona suave y ergonómica con textura antideslizante. Pantalla digital LCD de gran tamaño con retroiluminación LED verde. Funciones avanzadas: hora, fecha, alarma programable, cronómetro de precisión, temporizador regresivo. Resistencia al agua 5ATM perfecta para natación y deportes acuáticos. Batería de litio de larga duración (hasta 18 meses). Diseño moderno y juvenil que combina funcionalidad deportiva con estética urbana contemporánea. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-COL-027",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "amarillo",
        name: "Amarillo Brillante",
        color: "#FDE047",
        sku: "REL-DEP-COL-027-AMA",
        image: "/assets/images/reloj42.webp",
        images: ["/assets/images/reloj42.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "naranja",
        name: "Naranja Vibrante",
        color: "#FB923C",
        sku: "REL-DEP-COL-027-NAR",
        image: "/assets/images/reloj43.webp",
        images: ["/assets/images/reloj43.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "rosa",
        name: "Rosa Fucsia",
        color: "#EC4899",
        sku: "REL-DEP-COL-027-ROS",
        image: "/assets/images/reloj44.webp",
        images: ["/assets/images/reloj44.webp"],
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
      "Colores: Amarillo, Naranja, Rosa",
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

  // 28. Reloj de Lujo Cronógrafo Automático
  {
    id: 28,
    name: "Reloj Cronógrafo Automático de Lujo",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj45.webp",
    images: ["/assets/images/reloj45.webp", "/assets/images/reloj46.webp"],
    description: "Reloj cronógrafo automático de lujo con movimiento mecánico, reserva de marcha 48 horas",
    longDescription: "Reloj cronógrafo de alta gama con movimiento automático mecánico. Caja de acero inoxidable 316L de 44mm con acabado pulido. Movimiento automático de 25 rubíes con reserva de marcha de 48 horas. Funciones: cronógrafo, taquímetro, calendario completo. Sub-esferas para cronómetro, segundero y fecha. Bisel taquimétrico grabado. Correa de acero inoxidable con cierre desplegable de seguridad. Cristal de zafiro con tratamiento anti-reflejante. Fondo transparente para apreciar el movimiento mecánico. Resistencia al agua 10ATM. Perfecto para el caballero que valora la precisión y la artesanía fina. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 20,
    sku: "REL-CRO-AUT-028",
    stock: 100,
    specifications: [
      "Caja: Acero 316L de 44mm",
      "Movimiento: Automático 25 rubíes",
      "Cristal: Zafiro anti-reflejante",
      "Funciones: Cronógrafo, taquímetro",
      "Reserva de marcha: 48 horas",
      "Correa: Acero inoxidable",
      "Bisel: Taquimétrico grabado",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj cronógrafo automático",
      "Estuche de madera premium",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Herramienta de ajuste",
      "Paño de microfibra"
    ],
    benefits: [
      "Movimiento automático premium",
      "Reserva de marcha 48 horas",
      "Cristal de zafiro indestructible",
      "Funciones profesionales",
      "Diseño de lujo exclusivo",
      "Garantía de 3 meses"
    ]
  },

  // 29. Reloj Inteligente Premium
  {
    id: 29,
    name: "Smartwatch Premium con Pantalla AMOLED",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj47.webp",
    images: ["/assets/images/reloj47.webp", "/assets/images/reloj48.webp"],
    description: "Smartwatch premium con pantalla AMOLED, monitor avanzado de salud, GPS y batería de larga duración",
    longDescription: "Smartwatch de última generación con pantalla táctil LCD de 1.4 pulgadas. Monitor avanzado de frecuencia cardíaca 24/7, contador de pasos, calorías y distancia. Más de 20 modos deportivos con GPS integrado. Notificaciones inteligentes de llamadas, mensajes y apps. Batería de hasta 10 días de duración. Resistencia al agua IP67. Compatible con iOS y Android. Correa de silicona premium intercambiable. Perfecto para fitness, salud y vida conectada. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-SMART-PRE-029",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.4\" táctil",
      "Sensores: Cardíaco óptico, acelerómetro",
      "GPS: Integrado",
      "Batería: 10 días de uso",
      "Resistencia: IP67",
      "Compatibilidad: iOS y Android",
      "Correa: Silicona premium 22mm",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch premium",
      "Cable de carga magnético",
      "Manual en español",
      "Correa adicional de regalo",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Pantalla AMOLED brillante",
      "Monitoreo de salud avanzado",
      "100+ modos deportivos",
      "Batería de larga duración",
      "Resistente al agua para natación",
      "Garantía de 3 meses"
    ]
  },

  // 30. Reloj Clásico para Mujer con Perlas
  {
    id: 30,
    name: "Reloj Clásico Femenino con Detalles de Perlas",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj49.webp",
    images: ["/assets/images/reloj49.webp"],
    description: "Elegante reloj clásico para hombre con detalles de perlas cultivadas, diseño sofisticado",
    longDescription: "Reloj clásico de caballero con diseño sofisticado y detalles exclusivos de perlas cultivadas. Caja de acero inoxidable de 30mm con acabado pulido. Esfera con índices de perlas naturales que reflejan la luz elegantemente. Movimiento de cuarzo suizo de alta precisión. Correa de cuero genuino italiano ajustable. Cristal de zafiro resistente a rayones. Resistencia al agua 3ATM. Perfecto para la hombre elegante que busca un accesorio refinado y único para ocasiones especiales. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-CLA-PER-030",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 30mm",
      "Movimiento: Cuarzo suizo",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con perlas cultivadas",
      "Peso: 35 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico con perlas",
      "Estuche de presentación elegante",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño clásico elegante",
      "Perlas cultivadas naturales",
      "Cristal de zafiro",
      "Movimiento suizo preciso",
      "Correa de cuero premium",
      "Garantía de 3 meses"
    ]
  },

  // 31. Reloj Deportivo Ultra Resistente
  {
    id: 31,
    name: "Reloj Deportivo Ultra Resistente para Deportes Extremos",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj50.webp",
    images: ["/assets/images/reloj50.webp", "/assets/images/reloj51.webp"],
    description: "Reloj deportivo ultra resistente para deportes extremos, sumergible 100m con protección reforzada",
    longDescription: "Reloj deportivo diseñado para condiciones extremas y deportes de alto impacto. Caja de acero inoxidable reforzado de 46mm con tratamiento PVD negro. Cristal mineral resistente con tratamiento anti-golpes. Movimiento de cuarzo japonés de alta precisión. Correa de silicona reforzada con cierre de seguridad. Resistencia al agua 10ATM (100 metros). Protección contra golpes, vibraciones y temperaturas extremas. Perfecto para deportes extremos, militares y actividades outdoor intensas. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-EXT-031",
    stock: 100,
    specifications: [
      "Caja: Acero reforzado 46mm PVD",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-golpes",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Protección: Golpes y vibraciones",
      "Peso: 65 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo ultra resistente",
      "Herramientas de ajuste",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses"
    ],
    benefits: [
      "Ultra resistente a golpes",
      "Sumergible hasta 100 metros",
      "Movimiento de alta precisión",
      "Diseño robusto y duradero",
      "Ideal para deportes extremos",
      "Garantía de 3 meses"
    ]
  },

  // 32. Reloj de Aviador con Brújula
  {
    id: 32,
    name: "Reloj de Aviador Profesional con Brújula",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj52.webp",
    images: ["/assets/images/reloj52.webp"],
    description: "Reloj de aviador profesional con brújula integrada, ruleta de cálculo y diseño auténtico",
    longDescription: "Auténtico reloj de aviador con diseño inspirado en la aviación clásica y funciones profesionales. Caja de acero inoxidable de 48mm con acabado cepillado. Bisel giratorio bidireccional con ruleta de cálculo para conversiones de vuelo. Brújula integrada en el bisel interno. Movimiento automático con cronógrafo y función flyback. Sub-esferas para cronómetro y segundos. Correa de cuero genuino con remaches. Cristal de zafiro con tratamiento anti-reflejante. Resistencia al agua 10ATM. Incluye regla de cálculo para navegación aérea. Perfecto para pilotos profesionales y entusiastas de la aviación. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 20,
    sku: "REL-AVI-BRU-032",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 48mm",
      "Movimiento: Automático cronógrafo",
      "Cristal: Zafiro anti-reflejante",
      "Bisel: Ruleta cálculo aviador",
      "Brújula: Integrada",
      "Funciones: Cronógrafo flyback",
      "Correa: Cuero genuino",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj de aviador profesional",
      "Brújula de navegación",
      "Regla de cálculo de vuelo",
      "Estuche especial aviador",
      "Manual de funciones",
      "Herramientas de ajuste",
      "Garantía 3 meses"
    ],
    benefits: [
      "Brújula integrada profesional",
      "Ruleta de cálculo aviador",
      "Diseño auténtico aviador",
      "Cronógrafo flyback preciso",
      "Movimiento automático",
      "Garantía de 3 meses"
    ]
  },

  // 33. Reloj Inteligente Deportivo
  {
    id: 33,
    name: "Reloj Inteligente Deportivo con Monitor Avanzado",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj53.webp",
    images: ["/assets/images/reloj53.webp", "/assets/images/reloj54.webp"],
    description: "Smartwatch deportivo con monitor avanzado de salud, GPS y múltiples sensores",
    longDescription: "Smartwatch deportivo avanzado con tecnología de punta para seguimiento completo de fitness. Pantalla LCD de 1.4 pulgadas con retroiluminación LED. Sensores avanzados: frecuencia cardíaca, oxígeno en sangre, presión arterial, calidad de sueño. GPS integrado para rastreo preciso de rutas. Más de 50 modos deportivos profesionales. Notificaciones inteligentes y control de música. Batería de hasta 12 días de duración. Correa de silicona deportiva ajustable. Resistencia al agua 5ATM. Compatible con iOS y Android. Perfecto para atletas serios y entusiastas del fitness. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 28,
    sku: "REL-SMART-DEP-033",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.4\" con luz LED",
      "Sensores: Cardíaco, SpO2, presión",
      "GPS: Integrado de alta precisión",
      "Batería: 12 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona deportiva",
      "Modos deportivos: 50+",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch deportivo avanzado",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Sensores médicos avanzados",
      "GPS integrado preciso",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Resistente al agua",
      "Garantía de 3 meses"
    ]
  },

  // 34. Reloj de Lujo con Tourbillon
  {
    id: 34,
    name: "Reloj de Lujo con Complicación Tourbillon",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj55.webp",
    images: ["/assets/images/reloj55.webp"],
    description: "Exclusivo reloj de lujo con tourbillon, movimiento mecánico premium, edición limitada",
    longDescription: "Reloj de lujo excepcional con la complicación más prestigiosa de la alta relojería: el tourbillon. Caja de acero inoxidable con tratamiento PVD oro rosa de 44mm con acabado pulido. Movimiento mecánico japonés con tourbillon visible a las 6 horas. Reserva de marcha de 72 horas. Correa de cuero genuino italiano con cierre desplegable. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente para apreciar el tourbillon en funcionamiento. Resistencia al agua 5ATM. Edición limitada numerada individualmente. Perfecto para coleccionistas y amantes de la alta relojería tradicional. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 15,
    sku: "REL-LUX-TOU-034",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable PVD oro rosa 44mm",
      "Movimiento: Mecánico japonés tourbillon",
      "Cristal: Zafiro abombado",
      "Complicación: Tourbillon visible",
      "Reserva de marcha: 72 horas",
      "Correa: Cuero genuino italiano",
      "Edición: Limitada numerada",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj de lujo con tourbillon",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de complicaciones",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Certificado de edición limitada"
    ],
    benefits: [
      "Tourbillon visible prestigioso",
      "Movimiento mecánico japonés",
      "Acabado premium PVD",
      "Edición limitada exclusiva",
      "Reserva de marcha 72h",
      "Garantía de 3 meses"
    ]
  },

  // 35. Reloj Deportivo con Variantes Metálicas
  {
    id: 35,
    name: "Reloj Deportivo Elegante con Correa Metálica",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj56.webp",
    images: ["/assets/images/reloj56.webp", "/assets/images/reloj57.webp"],
    description: "Reloj deportivo elegante con correa metálica, diseño sofisticado para uso diario",
    longDescription: "Reloj deportivo con diseño elegante y correa metálica premium. Caja de acero inoxidable de 42mm con acabado deportivo. Correa metálica tipo milanés ajustable sin herramientas. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 5ATM (50 metros). Esfera con números luminosos para fácil lectura. Perfecto para actividades deportivas y uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-MET-035",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "plateado",
        name: "Plateado Clásico",
        color: "#C0C0C0",
        sku: "REL-DEP-MET-035-PLA",
        image: "/assets/images/reloj56.webp",
        images: ["/assets/images/reloj56.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "dorado",
        name: "Dorado Elegante",
        color: "#D4AF37",
        sku: "REL-DEP-MET-035-DOR",
        image: "/assets/images/reloj57.webp",
        images: ["/assets/images/reloj57.webp"],
        inStock: true,
        stock: 100
      }
    ],
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Metálica milanesa",
      "Resistencia al agua: 5ATM (50m)",
      "Esfera: Números luminosos",
      "Peso: 48 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo metálico",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño deportivo elegante",
      "Correa metálica premium",
      "Resistente al agua",
      "Números luminosos",
      "Cómodo para uso diario",
      "Garantía de 3 meses"
    ]
  },

  // 36. Reloj Clásico para Mujer con Diamantes
  {
    id: 36,
    name: "Reloj Clásico Masculino con Diamantes Naturales",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj58.webp",
    images: ["/assets/images/reloj58.webp"],
    description: "Elegante reloj clásico para hombre con diamantes naturales, diseño exclusivo y sofisticado",
    longDescription: "Reloj clásico de caballero con diseño sofisticado y diamantes naturales en la esfera. Caja de acero inoxidable de 26mm con acabado pulido. Esfera con 12 diamantes naturales que reflejan la luz elegantemente. Movimiento de cuarzo suizo de alta precisión. Correa de cuero genuino italiano ajustable. Cristal de zafiro resistente a rayones. Resistencia al agua 3ATM. Perfecto para la hombre elegante que busca un accesorio refinado y exclusivo para ocasiones especiales. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 20,
    sku: "REL-CLA-DIA-036",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 26mm",
      "Movimiento: Cuarzo suizo",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Con 12 diamantes naturales",
      "Peso: 30 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico con diamantes",
      "Estuche de presentación elegante",
      "Certificado de diamantes",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diamantes naturales certificados",
      "Cristal de zafiro",
      "Movimiento suizo preciso",
      "Diseño exclusivo",
      "Correa de cuero premium",
      "Garantía de 3 meses"
    ]
  },

  // 37. Reloj Deportivo Profesional
  {
    id: 37,
    name: "Reloj Deportivo Profesional para Atletas",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj59.webp",
    images: ["/assets/images/reloj59.webp", "/assets/images/reloj60.webp"],
    description: "Reloj deportivo profesional para atletas de alto rendimiento, con funciones avanzadas",
    longDescription: "Reloj deportivo diseñado para atletas profesionales y entrenadores exigentes. Caja de resina reforzada de 48mm con tratamiento anti-golpes. Pantalla digital grande con retroiluminación LED. Funciones avanzadas: cronómetro profesional, temporizador de intervalos, vuelta automática, memoria de tiempos. Resistencia al agua 10ATM (100 metros). Correa de silicona reforzada con cierre de seguridad. Batería de larga duración. Perfecto para atletismo, natación profesional y entrenamientos intensos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-PRO-037",
    stock: 100,
    specifications: [
      "Caja: Resina reforzada 48mm",
      "Pantalla: Digital grande con LED",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Funciones: Cronómetro profesional",
      "Batería: Larga duración",
      "Peso: 55 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo profesional",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Funciones profesionales",
      "Resistente a golpes extremos",
      "Sumergible hasta 100 metros",
      "Batería de larga duración",
      "Ideal para atletas",
      "Garantía de 3 meses"
    ]
  },

  // 38. Reloj de Lujo Skeleton
  {
    id: 38,
    name: "Reloj de Lujo Skeleton Automático",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj61.webp",
    images: ["/assets/images/reloj61.webp"],
    description: "Exclusivo reloj skeleton automático con movimiento visible, diseño transparente elegante",
    longDescription: "Reloj skeleton de lujo que permite apreciar el movimiento mecánico en funcionamiento. Caja de acero inoxidable de 42mm con acabado pulido. Movimiento automático skeleton de 21 rubíes con reserva de marcha de 40 horas. Esfera transparente que muestra todos los componentes del movimiento. Correa de cuero genuino italiano con cierre de hebilla. Cristal de zafiro resistente a rayones en ambos lados. Fondo transparente para ver el movimiento desde atrás. Resistencia al agua 3ATM. Perfecto para amantes de la relojería que valoran la transparencia mecánica. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-LUX-SKE-038",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Automático skeleton",
      "Cristal: Zafiro ambos lados",
      "Reserva de marcha: 40 horas",
      "Correa: Cuero genuino italiano",
      "Esfera: Transparente",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj skeleton de lujo",
      "Estuche premium de madera",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Movimiento visible elegante",
      "Cristal de zafiro ambos lados",
      "Movimiento automático premium",
      "Diseño transparente exclusivo",
      "Relojería tradicional",
      "Garantía de 3 meses"
    ]
  },

  // 39. Reloj Inteligente con Música
  {
    id: 39,
    name: "Smartwatch con Control de Música Integrado",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj62.webp",
    images: ["/assets/images/reloj62.webp", "/assets/images/reloj63.webp"],
    description: "Smartwatch con control de música, llamadas Bluetooth y funciones inteligentes avanzadas",
    longDescription: "Smartwatch multifunción con características avanzadas para el estilo de vida moderno. Pantalla táctil LCD de 1.3 pulgadas. Control de música integrado. Función de llamadas Bluetooth manos libres. Notificaciones de llamadas, mensajes y redes sociales. Seguimiento de actividad física, sueño y calorías. Más de 15 modos deportivos. Batería de hasta 7 días de duración. Correa de silicona intercambiable. Resistencia al agua IP67. Compatible con iOS y Android. Perfecto para quienes buscan tecnología completa en su muñeca. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-SMART-MUS-039",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" táctil",
      "Música: Control integrado",
      "Llamadas: Bluetooth manos libres",
      "Batería: 7 días de duración",
      "Resistencia: IP67",
      "Compatibilidad: iOS y Android",
      "Correa: Silicona intercambiable",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch con música",
      "Cable de carga USB",
      "Audífonos Bluetooth de regalo",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Control de música integrado",
      "Llamadas manos libres",
      "Pantalla AMOLED brillante",
      "GPS integrado preciso",
      "Batería de larga duración",
      "Garantía de 3 meses"
    ]
  },

  // 40. Reloj Clásico para Mujer Minimalista
  {
    id: 40,
    name: "Reloj Clásico Minimalista para Hombre",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj64.webp",
    images: ["/assets/images/reloj64.webp"],
    description: "Reloj clásico minimalista para hombre, diseño simple y elegante, perfecto para uso diario",
    longDescription: "Reloj clásico con diseño minimalista y elegante para la hombre moderna. Caja de acero inoxidable de 32mm con acabado pulido. Esfera minimalista con índices delgados y manecillas elegantes. Movimiento de cuarzo japonés de alta precisión. Correa de cuero genuino italiano ajustable. Cristal mineral resistente a rayones. Resistencia al agua 3ATM. Perfecto para la hombre que busca simplicidad elegante y funcionalidad en su accesorio diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-CLA-MIN-040",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 32mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Diseño minimalista",
      "Peso: 38 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj clásico minimalista",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño minimalista elegante",
      "Movimiento preciso japonés",
      "Correa de cuero premium",
      "Resistente al uso diario",
      "Versátil para toda ocasión",
      "Garantía de 3 meses"
    ]
  },

  // 41. Reloj Deportivo con Pulsómetro
  {
    id: 41,
    name: "Reloj Deportivo con Pulsómetro Continuo",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj65.webp",
    images: ["/assets/images/reloj65.webp", "/assets/images/reloj66.webp"],
    description: "Reloj deportivo con pulsómetro continuo, funciones avanzadas de fitness y entrenamiento",
    longDescription: "Reloj deportivo avanzado con tecnología de pulsómetro continuo para seguimiento cardíaco 24/7. Pantalla LCD de 1.3 pulgadas con retroiluminación. Monitor de frecuencia cardíaca óptico de alta precisión. Zonas de entrenamiento cardíaco programables. Contador de pasos, distancia y calorías. Modos deportivos específicos con alertas de ritmo. GPS integrado para rutas precisas. Notificaciones de llamadas y mensajes. Batería de hasta 7 días de duración. Correa de silicona ajustable. Resistencia al agua 5ATM. Perfecto para corredores, ciclistas y atletas que buscan optimizar su entrenamiento. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 28,
    sku: "REL-DEP-PUL-041",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" con luz",
      "Pulsómetro: Óptico continuo",
      "GPS: Integrado",
      "Batería: 7 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona ajustable",
      "Modos: Entrenamiento cardíaco",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo pulsómetro",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Pulsómetro continuo preciso",
      "Zonas de entrenamiento",
      "GPS integrado preciso",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Garantía de 3 meses"
    ]
  },

  // 42. Reloj de Lujo con Calendario Perpetuo
  {
    id: 42,
    name: "Reloj de Lujo con Calendario Perpetuo Automático",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj67.webp",
    images: ["/assets/images/reloj67.webp"],
    description: "Exclusivo reloj de lujo con calendario perpetuo automático, movimiento mecánico premium",
    longDescription: "Reloj de lujo excepcional con calendario perpetuo automático que no necesita ajuste hasta el año 2100. Caja de acero inoxidable con tratamiento PVD platino de 40mm con acabado pulido. Movimiento mecánico japonés con calendario completo: día, fecha, mes y año. Ventanas de calendario a las 12, 3 y 9 horas. Reserva de marcha de 55 horas. Correa de cuero genuino italiano con cierre desplegable. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente grabado. Resistencia al agua 5ATM. Edición limitada con numeración individual. Perfecto para coleccionistas y amantes de las complicaciones relojeras. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 18,
    sku: "REL-LUX-PER-042",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable PVD platino 40mm",
      "Movimiento: Mecánico japonés",
      "Cristal: Zafiro abombado",
      "Calendario: Perpetuo automático",
      "Reserva de marcha: 55 horas",
      "Correa: Cuero genuino italiano",
      "Edición: Limitada numerada",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj de lujo calendario perpetuo",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de complicaciones",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Certificado de edición limitada"
    ],
    benefits: [
      "Calendario perpetuo automático",
      "Movimiento mecánico japonés",
      "Acabado premium PVD",
      "Edición limitada exclusiva",
      "Reserva de marcha 55h",
      "Garantía de 3 meses"
    ]
  },

  // 43. Reloj Deportivo Juvenil con Diseños
  {
    id: 43,
    name: "Reloj Deportivo Juvenil con Diseños Animados",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj68.webp",
    images: ["/assets/images/reloj68.webp", "/assets/images/reloj69.webp", "/assets/images/reloj70.webp"],
    description: "Reloj deportivo juvenil con diseños temáticos animados, funciones digitales completas para jóvenes activos",
    longDescription: "Reloj deportivo diseñado especialmente para jóvenes con diseños temáticos animados divertidos y coloridos. Caja de resina resistente de 38mm con estampados únicos de alta calidad. Correa de silicona suave y ergonómica con diseños temáticos exclusivos. Pantalla digital LCD de fácil lectura con retroiluminación LED multicolor. Funciones completas: hora, fecha, alarma programable, cronómetro de precisión, temporizador, señal horaria. Resistencia al agua 5ATM perfecta para actividades diarias y deportes acuáticos. Batería de litio de larga duración (hasta 24 meses). Diseño moderno y juvenil que combina funcionalidad deportiva con entretenimiento visual. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-ANI-043",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "superheroes",
        name: "Superhéroes",
        color: "#3B82F6",
        sku: "REL-DEP-ANI-043-SUP",
        image: "/assets/images/reloj68.webp",
        images: ["/assets/images/reloj68.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "deportes",
        name: "Deportes Extremos",
        color: "#EF4444",
        sku: "REL-DEP-ANI-043-DEP",
        image: "/assets/images/reloj69.webp",
        images: ["/assets/images/reloj69.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "animales",
        name: "Animales Divertidos",
        color: "#10B981",
        sku: "REL-DEP-ANI-043-ANI",
        image: "/assets/images/reloj70.webp",
        images: ["/assets/images/reloj70.webp"],
        inStock: true,
        stock: 100
      }
    ],
    specifications: [
      "Caja: Resina 38mm resistente",
      "Pantalla: Digital LCD con LED",
      "Correa: Silicona estampada",
      "Resistencia: 5ATM (50m)",
      "Funciones: Hora, fecha, alarma, cronómetro",
      "Batería: Larga duración",
      "Diseños: Animados temáticos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo juvenil",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Diseños animados divertidos",
      "Resistente al agua",
      "Múltiples funciones",
      "Batería duradera",
      "Cómodo para jóvenes",
      "Garantía de 3 meses"
    ]
  },

  // 44. Reloj Inteligente Premium con ECG
  {
    id: 44,
    name: "Smartwatch Premium con ECG y Monitor Avanzado",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj71.webp",
    images: ["/assets/images/reloj71.webp"],
    description: "Smartwatch premium con electrocardiograma, monitor avanzado de salud y funciones médicas",
    longDescription: "Smartwatch médico de última generación con funciones avanzadas de salud. Pantalla táctil LCD de 1.3 pulgadas. Monitor de frecuencia cardíaca óptico de alta precisión. Seguimiento de actividad física, sueño y calorías. Más de 20 modos deportivos con GPS integrado. Notificaciones inteligentes y llamadas Bluetooth. Batería de hasta 8 días de duración. Correa de silicona médica hipoalergénica. Resistencia al agua IP67. Compatible con iOS y Android. Perfecto para quienes buscan monitoreo de salud básico. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 22,
    sku: "REL-SMART-ECG-044",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" táctil",
      "Sensores: Cardíaco óptico, acelerómetro",
      "GPS: Integrado",
      "Batería: 8 días de duración",
      "Resistencia: IP67",
      "Compatibilidad: iOS y Android",
      "Correa: Silicona médica",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch médico premium",
      "Cable de carga magnético",
      "Manual médico detallado",
      "App médica gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "ECG médico certificado",
      "Detección de arritmias",
      "Monitoreo de salud 24/7",
      "100+ modos deportivos",
      "Batería de larga duración",
      "Garantía de 3 meses"
    ]
  },

  // 45. Reloj de Lujo Vintage
  {
    id: 45,
    name: "Reloj de Lujo Vintage Estilo Retro",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-hombre",
    image: "/assets/images/reloj72.webp",
    images: ["/assets/images/reloj72.webp"],
    description: "Exclusivo reloj de lujo con diseño vintage, movimiento mecánico, estilo clásico retro",
    longDescription: "Reloj de lujo con diseño vintage inspirado en la relojería clásica de mediados del siglo XX. Caja de acero inoxidable de 38mm con acabado cepillado. Esfera estilo retro con números arábigos vintage y manecillas azuladas. Movimiento mecánico japonés de alta precisión. Correa de cuero genuino italiano con pespunteado clásico. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente para ver el movimiento mecánico. Resistencia al agua 3ATM. Perfecto para caballeros que aprecian el estilo vintage y la elegancia clásica. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-LUX-VIN-045",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 38mm",
      "Movimiento: Mecánico japonés",
      "Cristal: Zafiro abombado",
      "Estilo: Vintage clásico",
      "Correa: Cuero genuino italiano",
      "Esfera: Números arábigos vintage",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj vintage de lujo",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Diseño vintage elegante",
      "Movimiento mecánico preciso",
      "Cristal de zafiro abombado",
      "Estilo retro exclusivo",
      "Relojería tradicional",
      "Garantía de 3 meses"
    ]
  },

  // 46. Reloj Deportivo Ultra Ligero
  {
    id: 46,
    name: "Reloj Deportivo Ultra Ligero de Titanio",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-deportivos",
    image: "/assets/images/reloj73.webp",
    images: ["/assets/images/reloj73.webp"],
    description: "Reloj deportivo ultra ligero de titanio, resistente al agua 200m, perfecto para atletas",
    longDescription: "Reloj deportivo de alta tecnología fabricado en titanio ultra ligero y resistente. Caja de titanio de 44mm con acabado mate. Peso total de solo 45 gramos. Movimiento de cuarzo japonés de alta precisión. Cristal de zafiro resistente a rayones. Correa de silicona deportiva ajustable. Resistencia al agua 20ATM (200 metros). Bisel giratorio unidireccional con escala de minutos. Perfecto para atletas profesionales que buscan ligereza extrema sin sacrificar durabilidad. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "REL-DEP-TIT-046",
    stock: 100,
    specifications: [
      "Caja: Titanio 44mm ultra ligero",
      "Movimiento: Cuarzo japonés",
      "Cristal: Zafiro resistente",
      "Peso: Solo 45 gramos",
      "Resistencia: 20ATM (200 metros)",
      "Correa: Silicona deportiva",
      "Bisel: Giratorio unidireccional",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj deportivo de titanio",
      "Herramientas de ajuste",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses"
    ],
    benefits: [
      "Ultra ligero 45 gramos",
      "Materiales premium titanio",
      "Sumergible hasta 200 metros",
      "Movimiento de alta precisión",
      "Ideal para atletas",
      "Garantía de 3 meses"
    ]
  },

  // 47. Reloj Curren Deportivo Clásico
  {
    id: 47,
    name: "Reloj Curren Deportivo Acero Inoxidable",
    price: 120000,
    originalPrice: 180000,
    category: "curren",
    image: "/assets/images/reloj74.webp",
    images: ["/assets/images/reloj74.webp", "/assets/images/reloj75.webp", "/assets/images/reloj76.webp"],
    description: "Reloj Curren deportivo con caja de acero inoxidable, movimiento japonés, resistente al agua",
    longDescription: "Reloj Curren de la línea deportiva con diseño elegante y funcional. Caja de acero inoxidable de 42mm con acabado pulido. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Correa de acero inoxidable con cierre de seguridad. Resistencia al agua 5ATM (50 metros). Esfera con números luminosos para fácil lectura en condiciones de poca luz. Perfecto para uso diario y actividades deportivas. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 33,
    sku: "CUR-DEP-001",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 42mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Acero inoxidable",
      "Resistencia al agua: 5ATM (50m)",
      "Esfera: Números luminosos",
      "Peso: 48 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren deportivo",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Marca reconocida internacionalmente",
      "Movimiento preciso japonés",
      "Resistente al agua",
      "Diseño deportivo elegante",
      "Acabados premium",
      "Garantía de 3 meses"
    ]
  },

  // 48. Reloj Curren Elegante con Cuero
  {
    id: 48,
    name: "Reloj Curren Elegante con Correa de Cuero",
    price: 110000,
    originalPrice: 160000,
    category: "curren",
    image: "/assets/images/reloj77.webp",
    images: ["/assets/images/reloj77.webp", "/assets/images/reloj78.webp"],
    description: "Reloj Curren elegante con correa de cuero genuino, diseño clásico y sofisticado",
    longDescription: "Reloj Curren de la línea clásica con diseño elegante y correa de cuero premium. Caja de acero inoxidable de 40mm con acabado pulido. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Correa de cuero genuino italiano ajustable. Resistencia al agua 3ATM (30 metros). Esfera con números romanos elegantes. Perfecto para ocasiones formales y uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 31,
    sku: "CUR-CLA-002",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Esfera: Números romanos",
      "Peso: 42 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren elegante",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Marca Curren reconocida",
      "Correa de cuero premium",
      "Diseño clásico elegante",
      "Movimiento preciso",
      "Acabados de calidad",
      "Garantía de 3 meses"
    ]
  },

  // 49. Reloj Curren Deportivo con Cronógrafo
  {
    id: 49,
    name: "Reloj Curren Cronógrafo Deportivo",
    price: 130000,
    originalPrice: 190000,
    category: "curren",
    image: "/assets/images/reloj79.webp",
    images: ["/assets/images/reloj79.webp", "/assets/images/reloj80.webp", "/assets/images/reloj81.webp"],
    description: "Reloj Curren con cronógrafo deportivo, múltiples funciones, resistente al agua 10ATM",
    longDescription: "Reloj Curren deportivo avanzado con funciones de cronógrafo profesional. Caja de acero inoxidable de 44mm con tratamiento PVD negro. Movimiento de cuarzo japonés con cronógrafo. Sub-esferas para cronómetro, segundero y ventana de fecha. Cristal mineral resistente con tratamiento anti-reflejante. Correa de silicona reforzada. Resistencia al agua 10ATM (100 metros). Bisel taquimétrico. Perfecto para deportes y actividades al aire libre. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "CUR-CRO-003",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 44mm PVD",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-reflejante",
      "Funciones: Cronógrafo, fecha",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Bisel: Taquimétrico",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren cronógrafo",
      "Herramientas de ajuste",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses"
    ],
    benefits: [
      "Funciones de cronógrafo",
      "Resistente al agua 100m",
      "Marca Curren de calidad",
      "Movimiento preciso japonés",
      "Diseño deportivo robusto",
      "Garantía de 3 meses"
    ]
  },

  // 50. Reloj Curren Automático Premium
  {
    id: 50,
    name: "Reloj Curren Automático Premium",
    price: 150000,
    originalPrice: 220000,
    category: "curren",
    image: "/assets/images/reloj82.webp",
    images: ["/assets/images/reloj82.webp", "/assets/images/reloj83.webp"],
    description: "Reloj Curren automático premium con movimiento mecánico, reserva de marcha 40 horas",
    longDescription: "Reloj Curren automático de alta gama con movimiento mecánico japonés. Caja de acero inoxidable 316L de 42mm con acabado pulido. Movimiento automático de 21 rubíes con reserva de marcha de 40 horas. Ventana de fecha a las 3 en punto. Correa de cuero genuino italiano con cierre de hebilla. Cristal de zafiro resistente a rayones. Fondo transparente para apreciar el movimiento mecánico. Resistencia al agua 5ATM. Perfecto para amantes de la relojería tradicional. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "CUR-AUT-004",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 316L 42mm",
      "Movimiento: Automático 21 rubíes",
      "Reserva de marcha: 40 horas",
      "Cristal: Zafiro resistente",
      "Correa: Cuero genuino italiano",
      "Funciones: Hora, fecha",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren automático",
      "Estuche premium de madera",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Movimiento automático premium",
      "Cristal de zafiro",
      "Reserva de marcha 40 horas",
      "Fondo transparente elegante",
      "Marca Curren reconocida",
      "Garantía de 3 meses"
    ]
  },

  // 51. Reloj Curren Deportivo Juvenil
  {
    id: 51,
    name: "Reloj Curren Deportivo Juvenil",
    price: 95000,
    originalPrice: 140000,
    category: "curren",
    image: "/assets/images/reloj84.webp",
    images: ["/assets/images/reloj84.webp", "/assets/images/reloj85.webp", "/assets/images/reloj86.webp"],
    description: "Reloj Curren juvenil deportivo con colores vibrantes, funciones digitales completas",
    longDescription: "Reloj Curren diseñado para jóvenes activos con estilo moderno. Caja de resina resistente de 42mm con colores vibrantes. Correa de silicona suave y ergonómica. Pantalla digital LCD con retroiluminación LED. Funciones: hora, fecha, alarma, cronómetro, temporizador. Resistencia al agua 5ATM perfecta para natación. Batería de larga duración. Diseño juvenil que combina funcionalidad y estilo. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "CUR-DEP-JUV-005",
    stock: 100,
    hasVariants: true,
    variants: [
      {
        id: "rojo",
        name: "Rojo Vibrante",
        color: "#DC2626",
        sku: "CUR-DEP-JUV-005-ROJ",
        image: "/assets/images/reloj84.webp",
        images: ["/assets/images/reloj84.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Azul Eléctrico",
        color: "#2563EB",
        sku: "CUR-DEP-JUV-005-AZU",
        image: "/assets/images/reloj85.webp",
        images: ["/assets/images/reloj85.webp"],
        inStock: true,
        stock: 100
      },
      {
        id: "verde",
        name: "Verde Lima",
        color: "#16A34A",
        sku: "CUR-DEP-JUV-005-VER",
        image: "/assets/images/reloj86.webp",
        images: ["/assets/images/reloj86.webp"],
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
      "1 Reloj Curren juvenil",
      "Manual de instrucciones",
      "Garantía 3 meses",
      "Caja de almacenamiento"
    ],
    benefits: [
      "Diseño juvenil moderno",
      "Colores vibrantes",
      "Múltiples funciones",
      "Resistente al agua",
      "Batería duradera",
      "Garantía de 3 meses"
    ]
  },

  // 52. Reloj Rolex Clásico Submariner
  {
    id: 52,
    name: "Reloj Rolex Submariner Clásico",
    price: 850000,
    originalPrice: 1200000,
    category: "rolex",
    image: "/assets/images/reloj95.webp",
    images: ["/assets/images/reloj95.webp", "/assets/images/reloj96.webp", "/assets/images/reloj97.webp"],
    description: "Reloj Rolex Submariner clásico, sumergible 300m, movimiento automático, diseño icónico",
    longDescription: "El legendario reloj Rolex Submariner con diseño clásico e inconfundible. Caja de acero inoxidable 904L de 41mm con acabado pulido y cepillado. Movimiento automático calibre 3135 con reserva de marcha de 48 horas. Bisel giratorio unidireccional con inserto de cerámica. Cristal de zafiro con tratamiento anti-reflejante. Correa de acero inoxidable con cierre de seguridad. Resistencia al agua 300 metros (30ATM). Ventana de fecha con lente cyclops. Perfecto para buceo profesional y uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 29,
    sku: "ROL-SUB-001",
    stock: 100,
    specifications: [
      "Caja: Acero 904L 41mm",
      "Movimiento: Automático calibre 3135",
      "Cristal: Zafiro anti-reflejante",
      "Bisel: Cerámica giratorio",
      "Resistencia: 300m (30ATM)",
      "Correa: Acero inoxidable",
      "Reserva de marcha: 48 horas",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Rolex Submariner",
      "Estuche premium Rolex",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Herramientas de ajuste"
    ],
    benefits: [
      "Marca Rolex legendaria",
      "Sumergible hasta 300 metros",
      "Movimiento automático premium",
      "Bisel cerámico profesional",
      "Diseño icónico reconocible",
      "Garantía de 3 meses"
    ]
  },

  // 53. Reloj Rolex Datejust Elegante
  {
    id: 53,
    name: "Reloj Rolex Datejust con Diamantes",
    price: 950000,
    originalPrice: 1350000,
    category: "rolex",
    image: "/assets/images/reloj98.webp",
    images: ["/assets/images/reloj98.webp", "/assets/images/reloj99.webp"],
    description: "Reloj Rolex Datejust elegante con diamantes naturales, movimiento automático premium",
    longDescription: "Reloj Rolex Datejust de lujo con diseño elegante y sofisticado. Caja de acero inoxidable 904L de 36mm con acabado pulido. Movimiento automático calibre 3135 con reserva de marcha de 48 horas. Esfera con diamantes naturales como índices horarios. Ventana de fecha con lente cyclops. Bisel estriado característico. Correa de acero inoxidable con cierre desplegable. Cristal de zafiro resistente a rayones. Resistencia al agua 100 metros (10ATM). Perfecto para ocasiones especiales y uso diario elegante. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "ROL-DAT-002",
    stock: 100,
    specifications: [
      "Caja: Acero 904L 36mm",
      "Movimiento: Automático calibre 3135",
      "Cristal: Zafiro resistente",
      "Esfera: Con diamantes naturales",
      "Resistencia: 100m (10ATM)",
      "Correa: Acero inoxidable",
      "Bisel: Estriado clásico",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Rolex Datejust",
      "Estuche premium Rolex",
      "Certificado de diamantes",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diamantes naturales certificados",
      "Movimiento automático Rolex",
      "Cristal de zafiro",
      "Diseño elegante clásico",
      "Marca de lujo reconocida",
      "Garantía de 3 meses"
    ]
  },

  // 54. Reloj Rolex Daytona Cronógrafo
  {
    id: 54,
    name: "Reloj Rolex Daytona Cronógrafo",
    price: 1200000,
    originalPrice: 1800000,
    category: "rolex",
    image: "/assets/images/reloj100.webp",
    images: ["/assets/images/reloj100.webp", "/assets/images/reloj101.webp", "/assets/images/reloj102.webp"],
    description: "Reloj Rolex Daytona cronógrafo profesional, movimiento automático, taquímetro, edición especial",
    longDescription: "El legendario cronógrafo Rolex Daytona diseñado para pilotos profesionales. Caja de acero inoxidable 904L de 40mm con acabado pulido. Movimiento automático calibre 4130 con reserva de marcha de 72 horas. Funciones de cronógrafo con escala taquimétrica. Sub-esferas para cronómetro de 30 minutos y 12 horas. Ventana de fecha pequeña. Bisel de cerámica con escala taquimétrica. Correa de acero inoxidable con cierre de seguridad. Cristal de zafiro resistente. Resistencia al agua 100 metros (10ATM). Perfecto para carreras y deportes de motor. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 33,
    sku: "ROL-DAY-003",
    stock: 100,
    specifications: [
      "Caja: Acero 904L 40mm",
      "Movimiento: Automático calibre 4130",
      "Cristal: Zafiro resistente",
      "Funciones: Cronógrafo, taquímetro",
      "Reserva de marcha: 72 horas",
      "Correa: Acero inoxidable",
      "Bisel: Cerámica taquimétrica",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Rolex Daytona",
      "Estuche premium Rolex",
      "Certificado de autenticidad",
      "Manual técnico detallado",
      "Garantía 3 meses",
      "Herramientas especiales"
    ],
    benefits: [
      "Cronógrafo profesional",
      "Movimiento automático avanzado",
      "Bisel cerámico premium",
      "Reserva de marcha 72 horas",
      "Marca Rolex legendaria",
      "Garantía de 3 meses"
    ]
  },

  // 55. Reloj Samoa Deportivo Acuático
  {
    id: 55,
    name: "Reloj Samoa Deportivo Acuático",
    price: 110000,
    originalPrice: 160000,
    category: "samoa",
    image: "/assets/images/reloj115.webp",
    images: ["/assets/images/reloj115.webp", "/assets/images/reloj116.webp", "/assets/images/reloj117.webp"],
    description: "Reloj Samoa deportivo acuático, sumergible 200m, movimiento japonés, diseño robusto",
    longDescription: "Reloj Samoa diseñado especialmente para deportes acuáticos y actividades náuticas. Caja de acero inoxidable de 44mm con tratamiento PVD negro. Movimiento de cuarzo japonés de alta precisión. Bisel giratorio unidireccional con escala de minutos. Cristal mineral resistente con tratamiento anti-reflejante. Correa de silicona reforzada con cierre de seguridad. Resistencia al agua 200 metros (20ATM). Válvula automática de helio para buceo profesional. Perfecto para buceo, snorkel y deportes acuáticos extremos. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 31,
    sku: "SAM-DEP-ACU-001",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 44mm PVD",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-reflejante",
      "Bisel: Giratorio unidireccional",
      "Resistencia: 200m (20ATM)",
      "Correa: Silicona reforzada",
      "Válvula: Helio automática",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Samoa acuático",
      "Herramientas de mantenimiento",
      "Manual técnico de buceo",
      "Estuche resistente al agua",
      "Garantía 3 meses",
      "Certificado de profundidad"
    ],
    benefits: [
      "Sumergible hasta 200 metros",
      "Válvula de helio profesional",
      "Movimiento preciso japonés",
      "Diseño robusto para deportes",
      "Bisel profesional de buceo",
      "Garantía de 3 meses"
    ]
  },

  // 56. Reloj Samoa Elegante con Cuero
  {
    id: 56,
    name: "Reloj Samoa Elegante con Correa de Cuero",
    price: 100000,
    originalPrice: 150000,
    category: "samoa",
    image: "/assets/images/reloj118.webp",
    images: ["/assets/images/reloj118.webp", "/assets/images/reloj119.webp"],
    description: "Reloj Samoa elegante con correa de cuero genuino, diseño clásico y movimiento automático",
    longDescription: "Reloj Samoa de la línea clásica con diseño elegante y sofisticado. Caja de acero inoxidable de 40mm con acabado pulido. Movimiento automático japonés con reserva de marcha de 38 horas. Ventana de fecha a las 3 en punto. Correa de cuero genuino italiano ajustable. Cristal mineral resistente a rayones. Fondo transparente para apreciar el movimiento mecánico. Resistencia al agua 5ATM (50 metros). Perfecto para profesionales y ocasiones formales. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 33,
    sku: "SAM-CLA-002",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 40mm",
      "Movimiento: Automático japonés",
      "Cristal: Mineral resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 5ATM (50m)",
      "Funciones: Hora, fecha",
      "Fondo: Transparente",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Samoa elegante",
      "Estuche de presentación",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza microfibra"
    ],
    benefits: [
      "Movimiento automático preciso",
      "Fondo transparente elegante",
      "Correa de cuero premium",
      "Diseño clásico sofisticado",
      "Marca Samoa reconocida",
      "Garantía de 3 meses"
    ]
  },

  // 57. Reloj Samoa Deportivo con GPS
  {
    id: 57,
    name: "Reloj Samoa Deportivo con GPS Integrado",
    price: 140000,
    originalPrice: 200000,
    category: "samoa",
    image: "/assets/images/reloj120.webp",
    images: ["/assets/images/reloj120.webp", "/assets/images/reloj121.webp", "/assets/images/reloj122.webp"],
    description: "Reloj Samoa deportivo avanzado con GPS integrado, monitor cardíaco y múltiples modos deportivos",
    longDescription: "Smartwatch Samoa deportivo de última generación con funciones avanzadas de fitness. Pantalla LCD de 1.4 pulgadas con retroiluminación LED. GPS integrado de alta precisión para rastreo de rutas. Monitor de frecuencia cardíaca 24/7, contador de pasos, calorías y distancia. Más de 20 modos deportivos profesionales. Notificaciones de llamadas y mensajes. Batería de hasta 10 días de duración. Correa de silicona deportiva ajustable. Resistencia al agua 5ATM. Compatible con iOS y Android. Perfecto para deportistas que buscan seguimiento preciso de su rendimiento. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 30,
    sku: "SAM-DEP-GPS-003",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.4\" con luz LED",
      "GPS: Integrado de alta precisión",
      "Sensores: Cardíaco óptico, acelerómetro",
      "Batería: 10 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona deportiva",
      "Modos deportivos: 20+",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Samoa deportivo GPS",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "GPS integrado preciso",
      "Monitoreo cardíaco 24/7",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Resistente al agua",
      "Garantía de 3 meses"
    ]
  },

  // 58. Reloj Curren Minimalista
  {
    id: 58,
    name: "Reloj Curren Minimalista Ultra Delgado",
    price: 105000,
    originalPrice: 155000,
    category: "curren",
    image: "/assets/images/reloj87.webp",
    images: ["/assets/images/reloj87.webp", "/assets/images/reloj88.webp"],
    description: "Reloj Curren minimalista ultra delgado, diseño elegante y discreto para uso profesional",
    longDescription: "Reloj Curren de diseño minimalista ultra delgado perfecto para el profesional moderno. Caja de acero inoxidable de 38mm con grosor de solo 6mm. Movimiento de cuarzo japonés de alta precisión. Esfera minimalista con índices delgados. Correa de cuero genuino italiano ajustable. Cristal mineral resistente a rayones. Resistencia al agua 3ATM (30 metros). Perfecto para uso diario elegante y discreto. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "CUR-MIN-006",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable 38mm",
      "Grosor: Solo 6mm",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral resistente",
      "Correa: Cuero genuino italiano",
      "Resistencia: 3ATM (30m)",
      "Estilo: Minimalista",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren minimalista",
      "Estuche de presentación",
      "Manual de usuario",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño ultra delgado",
      "Estilo minimalista elegante",
      "Movimiento preciso japonés",
      "Cómodo para uso diario",
      "Marca Curren reconocida",
      "Garantía de 3 meses"
    ]
  },

  // 59. Reloj Curren Deportivo con Pulsómetro
  {
    id: 59,
    name: "Reloj Curren Deportivo con Pulsómetro",
    price: 125000,
    originalPrice: 185000,
    category: "curren",
    image: "/assets/images/reloj89.webp",
    images: ["/assets/images/reloj89.webp", "/assets/images/reloj90.webp", "/assets/images/reloj91.webp"],
    description: "Reloj Curren deportivo con pulsómetro integrado, funciones avanzadas de fitness",
    longDescription: "Reloj Curren deportivo avanzado con tecnología de pulsómetro integrado. Pantalla LCD de 1.3 pulgadas con retroiluminación. Monitor de frecuencia cardíaca óptico continuo. Zonas de entrenamiento cardíaco programables. Contador de pasos, distancia y calorías. Modos deportivos específicos. GPS integrado para rutas precisas. Notificaciones inteligentes. Batería de hasta 7 días de duración. Correa de silicona ajustable. Resistencia al agua 5ATM. Perfecto para corredores y atletas que buscan optimizar su entrenamiento. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "CUR-DEP-PUL-007",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.3\" con luz",
      "Pulsómetro: Óptico continuo",
      "GPS: Integrado",
      "Batería: 7 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona ajustable",
      "Modos: Entrenamiento cardíaco",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Curren pulsómetro",
      "Cable de carga USB",
      "Manual de usuario",
      "App móvil gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Pulsómetro continuo preciso",
      "Zonas de entrenamiento",
      "GPS integrado preciso",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Garantía de 3 meses"
    ]
  },

  // 60. Reloj Rolex GMT-Master II
  {
    id: 60,
    name: "Reloj Rolex GMT-Master II Profesional",
    price: 1100000,
    originalPrice: 1650000,
    category: "rolex",
    image: "/assets/images/reloj103.webp",
    images: ["/assets/images/reloj103.webp", "/assets/images/reloj104.webp"],
    description: "Reloj Rolex GMT-Master II para viajeros, doble zona horaria, movimiento automático premium",
    longDescription: "El legendario reloj Rolex GMT-Master II diseñado para pilotos y viajeros internacionales. Caja de acero inoxidable 904L de 40mm con acabado pulido. Movimiento automático calibre 3285 con reserva de marcha de 70 horas. Función GMT con aguja independiente para segundo huso horario. Bisel giratorio bidireccional con inserto de cerámica bicolor. Ventana de fecha con lente cyclops. Correa de acero inoxidable con cierre de seguridad. Cristal de zafiro resistente. Resistencia al agua 100 metros (10ATM). Perfecto para profesionales que viajan frecuentemente. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 33,
    sku: "ROL-GMT-004",
    stock: 100,
    specifications: [
      "Caja: Acero 904L 40mm",
      "Movimiento: Automático calibre 3285",
      "Cristal: Zafiro resistente",
      "Función: GMT doble zona horaria",
      "Reserva de marcha: 70 horas",
      "Correa: Acero inoxidable",
      "Bisel: Cerámica bicolor",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Rolex GMT-Master II",
      "Estuche premium Rolex",
      "Certificado de autenticidad",
      "Manual técnico detallado",
      "Garantía 3 meses",
      "Herramientas especiales"
    ],
    benefits: [
      "Doble zona horaria precisa",
      "Movimiento automático avanzado",
      "Bisel cerámica premium",
      "Reserva de marcha 70 horas",
      "Marca Rolex legendaria",
      "Garantía de 3 meses"
    ]
  },

  // 61. Reloj Rolex Yacht-Master
  {
    id: 61,
    name: "Reloj Rolex Yacht-Master de Lujo",
    price: 1050000,
    originalPrice: 1550000,
    category: "rolex",
    image: "/assets/images/reloj105.webp",
    images: ["/assets/images/reloj105.webp", "/assets/images/reloj106.webp", "/assets/images/reloj107.webp"],
    description: "Reloj Rolex Yacht-Master de lujo, diseño náutico elegante, movimiento automático premium",
    longDescription: "Reloj Rolex Yacht-Master con diseño inspirado en el mundo náutico de lujo. Caja de acero inoxidable 904L y platino de 40mm con acabado pulido. Movimiento automático calibre 3135 con reserva de marcha de 48 horas. Bisel giratorio bidireccional con inserto de platino. Esfera con números luminosos de gran tamaño. Ventana de fecha con lente cyclops. Correa de acero inoxidable con cierre de seguridad. Cristal de zafiro resistente. Resistencia al agua 100 metros (10ATM). Perfecto para amantes de la navegación y el lujo. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "ROL-YAC-005",
    stock: 100,
    specifications: [
      "Caja: Acero 904L y platino 40mm",
      "Movimiento: Automático calibre 3135",
      "Cristal: Zafiro resistente",
      "Bisel: Platino giratorio",
      "Resistencia: 100m (10ATM)",
      "Correa: Acero inoxidable",
      "Esfera: Números luminosos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Rolex Yacht-Master",
      "Estuche premium Rolex",
      "Certificado de autenticidad",
      "Manual de usuario detallado",
      "Garantía 3 meses",
      "Paño de limpieza"
    ],
    benefits: [
      "Diseño náutico elegante",
      "Materiales premium",
      "Movimiento automático Rolex",
      "Bisel de platino exclusivo",
      "Marca de lujo reconocida",
      "Garantía de 3 meses"
    ]
  },

  // 62. Reloj Samoa Ultra Resistente
  {
    id: 62,
    name: "Reloj Samoa Ultra Resistente para Deportes Extremos",
    price: 115000,
    originalPrice: 170000,
    category: "samoa",
    image: "/assets/images/reloj123.webp",
    images: ["/assets/images/reloj123.webp", "/assets/images/reloj124.webp"],
    description: "Reloj Samoa ultra resistente para deportes extremos, sumergible 100m con protección reforzada",
    longDescription: "Reloj Samoa diseñado para condiciones extremas y deportes de alto impacto. Caja de acero inoxidable reforzado de 46mm con tratamiento PVD negro. Cristal mineral resistente con tratamiento anti-golpes. Movimiento de cuarzo japonés de alta precisión. Correa de silicona reforzada con cierre de seguridad. Resistencia al agua 10ATM (100 metros). Protección contra golpes, vibraciones y temperaturas extremas. Perfecto para deportes extremos, militares y actividades outdoor intensas. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 32,
    sku: "SAM-DEP-EXT-004",
    stock: 100,
    specifications: [
      "Caja: Acero reforzado 46mm PVD",
      "Movimiento: Cuarzo japonés",
      "Cristal: Mineral anti-golpes",
      "Resistencia: 10ATM (100 metros)",
      "Correa: Silicona reforzada",
      "Protección: Golpes y vibraciones",
      "Peso: 65 gramos",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Samoa ultra resistente",
      "Herramientas de ajuste",
      "Manual técnico detallado",
      "Estuche resistente al agua",
      "Garantía 3 meses"
    ],
    benefits: [
      "Ultra resistente a golpes",
      "Sumergible hasta 100 metros",
      "Movimiento de alta precisión",
      "Diseño robusto y duradero",
      "Ideal para deportes extremos",
      "Garantía de 3 meses"
    ]
  },

  // 63. Reloj Samoa Inteligente
  {
    id: 63,
    name: "Reloj Samoa Inteligente con Funciones Avanzadas",
    price: 135000,
    originalPrice: 195000,
    category: "samoa",
    image: "/assets/images/reloj125.webp",
    images: ["/assets/images/reloj125.webp", "/assets/images/reloj126.webp", "/assets/images/reloj127.webp"],
    description: "Smartwatch Samoa con funciones inteligentes avanzadas, monitor de salud completo",
    longDescription: "Smartwatch Samoa de última generación con funciones avanzadas de salud y fitness. Pantalla táctil LCD de 1.4 pulgadas con retroiluminación LED. Sensores avanzados: frecuencia cardíaca, oxígeno en sangre, presión arterial, calidad de sueño. Más de 25 modos deportivos profesionales. GPS integrado para rastreo preciso de rutas. Notificaciones inteligentes y control de música. Batería de hasta 12 días de duración. Correa de silicona médica hipoalergénica. Resistencia al agua 5ATM. Compatible con iOS y Android. Perfecto para quienes buscan monitoreo completo de salud. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 31,
    sku: "SAM-SMART-005",
    stock: 100,
    specifications: [
      "Pantalla: LCD 1.4\" táctil",
      "Sensores: Cardíaco, SpO2, presión",
      "GPS: Integrado de alta precisión",
      "Batería: 12 días de duración",
      "Resistencia: 5ATM (50 metros)",
      "Correa: Silicona médica",
      "Modos deportivos: 25+",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Smartwatch Samoa avanzado",
      "Cable de carga USB",
      "Manual médico detallado",
      "App médica gratuita",
      "Garantía 3 meses"
    ],
    benefits: [
      "Sensores médicos avanzados",
      "GPS integrado preciso",
      "Múltiples modos deportivos",
      "Batería de larga duración",
      "Resistente al agua",
      "Garantía de 3 meses"
    ]
  },

  // 64. Reloj Samoa de Lujo Automático
  {
    id: 64,
    name: "Reloj Samoa de Lujo Automático con Calendario",
    price: 160000,
    originalPrice: 240000,
    category: "samoa",
    image: "/assets/images/reloj128.webp",
    images: ["/assets/images/reloj128.webp", "/assets/images/reloj129.webp"],
    description: "Reloj Samoa de lujo automático con calendario completo, movimiento mecánico premium",
    longDescription: "Reloj Samoa de lujo excepcional con calendario automático completo. Caja de acero inoxidable con tratamiento PVD oro de 42mm con acabado pulido. Movimiento mecánico japonés con calendario perpetuo: día, fecha, mes y año. Ventanas de calendario a las 12, 3 y 9 horas. Reserva de marcha de 50 horas. Correa de cuero genuino italiano con cierre desplegable. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente grabado. Resistencia al agua 5ATM. Edición limitada con numeración individual. Perfecto para coleccionistas y amantes de las complicaciones relojeras. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 33,
    sku: "SAM-LUX-CAL-006",
    stock: 100,
    specifications: [
      "Caja: Acero inoxidable PVD oro 42mm",
      "Movimiento: Mecánico japonés",
      "Cristal: Zafiro abombado",
      "Calendario: Perpetuo automático",
      "Reserva de marcha: 50 horas",
      "Correa: Cuero genuino italiano",
      "Edición: Limitada numerada",
      "Garantía: 3 meses"
    ],
    includes: [
      "1 Reloj Samoa de lujo calendario",
      "Estuche premium de madera",
      "Certificado de autenticidad",
      "Manual de complicaciones",
      "Herramientas de ajuste",
      "Garantía 3 meses",
      "Certificado de edición limitada"
    ],
    benefits: [
      "Calendario perpetuo automático",
      "Movimiento mecánico japonés",
      "Acabado premium PVD",
      "Edición limitada exclusiva",
      "Reserva de marcha 50h",
      "Garantía de 3 meses"
    ]
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: ShoppingBag },
  { id: 'relojes-hombre', name: 'Relojes Hombre', icon: Watch },
  { id: 'relojes-deportivos', name: 'Relojes Deportivos', icon: Watch },
  { id: 'curren', name: 'Relojes Curren', icon: Watch },
  { id: 'rolex', name: 'Relojes Rolex', icon: Watch },
  { id: 'samoa', name: 'Relojes Samoa', icon: Watch }
];