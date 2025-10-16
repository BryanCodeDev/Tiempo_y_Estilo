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
    name: "Reloj Deportivo Elegante para Mujer",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-mujer",
    image: "/assets/images/reloj5.webp",
    images: ["/assets/images/reloj5.webp"],
    description: "Reloj deportivo femenino con diseño elegante, resistente al agua, perfecto para actividades diarias",
    longDescription: "Reloj deportivo diseñado especialmente para mujeres activas. Caja de acero inoxidable de 36mm con acabado pulido. Correa de silicona cómoda y resistente. Movimiento de cuarzo japonés de alta precisión. Cristal mineral resistente a rayones. Resistencia al agua 5ATM (50 metros). Esfera con números luminosos para fácil lectura en cualquier condición. Perfecto para deportes, trabajo y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-DEP-MUJ-003",
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
      "1 Reloj deportivo para mujer",
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
    name: "Reloj Clásico Femenino con Brillantes",
    price: 100000,
    originalPrice: 142857,
    category: "relojes-mujer",
    image: "/assets/images/reloj6.webp",
    images: ["/assets/images/reloj6.webp"],
    description: "Elegante reloj clásico para mujer con detalles brillantes, perfecto para ocasiones especiales",
    longDescription: "Reloj clásico de dama con diseño sofisticado y detalles brillantes en la esfera. Caja de acero inoxidable de 30mm con acabado pulido. Correa de cuero genuino italiano ajustable. Movimiento de cuarzo suizo de alta precisión. Cristal de zafiro resistente a rayones. Esfera con índices de cristal que reflejan la luz elegantemente. Resistencia al agua 3ATM. Perfecto para la mujer elegante que busca un accesorio refinado para ocasiones especiales y uso diario. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 25,
    sku: "REL-CLA-MUJ-004",
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
      "1 Reloj clásico para mujer",
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
    name: "Reloj Elegante para Mujer con Correa Metálica",
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
      "Correa: Metálica, cuero o silicona",
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
    hasVariants: true,
    variants: [
      {
        id: "metalica",
        name: "Correa Metálica",
        color: "#C0C0C0",
        sku: "REL-MUJ-006-MET",
        inStock: true,
        stock: 100
      },
      {
        id: "negro",
        name: "Correa Negra",
        color: "#000000",
        sku: "REL-MUJ-006-NEG",
        inStock: true,
        stock: 100
      },
      {
        id: "cafe",
        name: "Correa Café",
        color: "#8B4513",
        sku: "REL-MUJ-006-CAF",
        inStock: true,
        stock: 100
      },
      {
        id: "azul",
        name: "Correa Azul",
        color: "#1E40AF",
        sku: "REL-MUJ-006-AZU",
        inStock: true,
        stock: 100
      }
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
    longDescription: "Reloj de lujo excepcional con complicación de fase lunar de alta precisión. Caja de oro rosa de 42mm con acabado pulido. Movimiento mecánico suizo con módulo de fase lunar. Sub-esfera de fase lunar a las 6 horas con indicador de día/noche. Reserva de marcha de 48 horas. Correa de cuero de aligátor genuino con cierre desplegable. Cristal de zafiro abombado con tratamiento anti-reflejante. Fondo transparente grabado. Resistencia al agua 5ATM. Edición limitada con numeración individual. Perfecto para coleccionistas y amantes de la alta relojería. Garantía de 3 meses incluida.",
    inStock: true,
    discount: 22,
    sku: "REL-LUX-LUN-019",
    stock: 100,
    specifications: [
      "Caja: Oro rosa 42mm",
      "Movimiento: Mecánico suizo",
      "Cristal: Zafiro abombado",
      "Complicación: Fase lunar",
      "Reserva de marcha: 48 horas",
      "Correa: Aligátor genuino",
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
      "Movimiento mecánico suizo",
      "Materiales premium",
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
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: ShoppingBag },
  { id: 'relojes-hombre', name: 'Relojes Hombre', icon: Watch },
  { id: 'relojes-mujer', name: 'Relojes Mujer', icon: Watch },
  { id: 'relojes-deportivos', name: 'Relojes Deportivos', icon: Watch }
];