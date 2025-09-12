import { 
  Smartphone, 
  Home, 
  Zap, 
  Sparkles, 
  Dumbbell, 
  Wrench, 
  ShoppingBag 
} from 'lucide-react';

export const products = [
  // Soporte Celular Moto Impermeable
  {
    id: 1,
    name: "Soporte Celular Moto Impermeable",
    price: 35000,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/Soporte_Celular.webp",
    description: "Soporte impermeable para celular en moto, rotación 360°, fácil instalación, hasta 6 pulgadas",
    longDescription: "Soporte para celular 100% impermeable diseñado específicamente para motocicletas. Permite rotación completa de 360 grados y desmontaje del celular sin quitar el soporte. Incluye almohadillas de ajuste para proteger la pantalla. Compatible con equipos de hasta 6 pulgadas (ancho 10.5 cm, alto 16.5 cm).",
    inStock: true,
    discount: 0,
    sku: "00033",
    stock: 882,
    specifications: [
      "100% Impermeable",
      "Rotación 360 grados",
      "Fácil instalación",
      "Compatible hasta 6 pulgadas",
      "Dimensiones: 10.5 x 16.5 cm",
      "Incluye almohadillas protectoras"
    ],
    includes: [
      "1 Soporte impermeable",
      "Almohadillas de ajuste",
      "Kit de instalación",
      "Manual de instrucciones"
    ],
    benefits: [
      "100% resistente al agua",
      "Instalación sin herramientas",
      "Protección total del dispositivo",
      "Acceso completo a la pantalla",
      "Desmontaje rápido",
      "Compatible con la mayoría de celulares"
    ]
  },

  // Adaptador Audífono Convertidor Plug 3.5
  {
    id: 2,
    name: "Adaptador Audífono Convertidor Plug 3.5",
    price: 39000,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/Adaptador_Audifono.webp",
    description: "Adaptador de audífonos 3.5mm a Lightning para iPhone, diseño compacto y conexión estable",
    longDescription: "Adaptador genérico de alta calidad ideal para conectar audífonos con jack de 3.5mm a dispositivos iPhone con puerto Lightning. Ofrece una conexión estable y segura con diseño minimalista en color blanco. Su tamaño compacto de 5 cm de cable lo hace fácil de transportar.",
    inStock: true,
    discount: 0,
    sku: "Ip45",
    stock: 5,
    specifications: [
      "Entrada: Jack 3.5mm hembra",
      "Salida: Conector Lightning",
      "Longitud del cable: 5 cm",
      "Color: Blanco",
      "Diseño compacto y portable",
      "Requiere Bluetooth activado"
    ],
    includes: [
      "1 Adaptador Lightning a 3.5mm",
      "Manual de instrucciones"
    ],
    benefits: [
      "Conexión estable y segura",
      "Diseño minimalista",
      "Fácil de transportar",
      "Compatible con iPhone",
      "Alta calidad de audio",
      "Construcción duradera"
    ]
  },

  // Vape Recargable
  {
    id: 3,
    name: "Vape Recargable 15000 Puffs",
    price: 60000,
    originalPrice: 75000,
    category: "vape",
    image: "/assets/images/vape.webp",
    secondaryImage: "/assets/images/vape1.webp",
    description: "Vape recargable de alta duración, 15k puffs modo normal, 10k puffs modo turbo, disponible en 2 sabores",
    longDescription: "Vape recargable de última generación con doble modo de uso. Disfruta de hasta 15,000 puffs en modo normal para una experiencia prolongada, o activa el modo turbo para 10,000 puffs de vapor intenso. Batería recargable de larga duración y disponible en deliciosos sabores.",
    inStock: true,
    discount: 20,
    sku: "vape-recargable-15k",
    specifications: [
      "15,000 puffs en modo normal",
      "10,000 puffs en modo turbo",
      "Batería recargable",
      "Puerto de carga USB-C",
      "2 sabores disponibles",
      "Diseño ergonómico",
      "Indicador LED de batería"
    ],
    includes: [
      "1 Vape recargable",
      "1 Cable USB-C",
      "1 Manual de instrucciones"
    ],
    benefits: [
      "Doble modo de uso",
      "Larga duración",
      "Recargable y reutilizable",
      "Vapor denso y suave",
      "Fácil de usar",
      "Diseño portátil"
    ],
    modes: [
      {
        name: "Modo Normal",
        puffs: "15,000",
        description: "Vapor suave y prolongado"
      },
      {
        name: "Modo Turbo",
        puffs: "10,000", 
        description: "Vapor intenso y denso"
      }
    ],
    flavors: [
      "Sabor 1 - Frutas Tropicales",
      "Sabor 2 - Menta Fresca"
    ]
  },

  // Derma Roller System Agujas
  {
    id: 4,
    name: "Derma Roller System Agujas",
    price: 34990,
    originalPrice: null,
    category: "belleza",
    image: "/assets/images/Derma_Roller.webp",
    description: "Derma roller con 540 micro agujas de titanio de 0.5mm, dermatológicamente comprobado",
    longDescription: "Sistema Derma Roller con tecnología avanzada de micro agujas de titanio. Cuenta con 540 agujas de 0.5mm de tamaño para un tratamiento facial efectivo y seguro. Diseño moderno y tecnológico, dermatológicamente comprobado para estimular la regeneración de la piel.",
    inStock: true,
    discount: 0,
    sku: "lumber008",
    stock: 33,
    specifications: [
      "540 micro agujas de titanio",
      "Tamaño de agujas: 0.5mm",
      "Dermatológicamente comprobado",
      "Diseño moderno tecnológico",
      "Dimensiones del paquete: 158 x 45 x 37mm",
      "Peso: 426g"
    ],
    includes: [
      "1 Derma Roller System",
      "Manual de instrucciones",
      "Guía de uso"
    ],
    benefits: [
      "Estimula regeneración de la piel",
      "Mejora absorción de productos",
      "Tecnología de micro agujas",
      "Materiales de alta calidad",
      "Fácil de usar",
      "Resultados visibles"
    ]
  },

  // Set X2 Almohadas Siliconadas
  {
    id: 5,
    name: "Set X2 Almohadas Siliconadas 45x65",
    price: 56561,
    originalPrice: null,
    category: "hogar",
    image: "/assets/images/Set_X_Almohadas.webp",
    description: "Combo de 2 almohadas ergonómicas 45x65, fibra siliconada, antiálérgicas, 100% colombiano",
    longDescription: "Set de 2 almohadas ergonómicas adaptables en el área cervical. Su estructura interna permite el paso del aire generando un sistema libre de humedad. La limpieza y desinfección se puede realizar de manera fácil incrementando el índice de salubridad. Suavidad y frescura en tela y relleno de excelente calidad para mayor confort.",
    inStock: true,
    discount: 0,
    sku: "almo45x65duo",
    stock: 5996,
    specifications: [
      "Medidas: 45x65 cm (Alto x Ancho)",
      "Relleno: 100% fibra siliconada",
      "Material: Microfibra",
      "Antiálérgicas",
      "100% colombiano",
      "Sistema libre de humedad"
    ],
    includes: [
      "2 Almohadas 45x65 cm",
      "Manual de cuidado"
    ],
    benefits: [
      "Ergonómicas para área cervical",
      "Sistema de ventilación",
      "Fácil limpieza y desinfección",
      "Antiálérgicas",
      "Suavidad y frescura",
      "Alta salubridad"
    ]
  },

  // Mini Humidificador Difusor De Aromas
  {
    id: 6,
    name: "Mini Humidificador Difusor De Aromas 220",
    price: 39000,
    originalPrice: null,
    category: "hogar",
    image: "/assets/images/humificador1.webp",
    description: "Humidificador USB portátil con 7 luces LED, capacidad 220ml, 3.5 horas de funcionamiento",
    longDescription: "Pequeño humidificador USB portátil y ligero que se conecta directamente a la interfaz USB. Libera agua al aire en forma de atomización fina para proporcionar un ambiente húmedo. Incluye 7 tipos de luces de respiración para crear ambiente romántico. Compatible con aceites esenciales para aromaterapia.",
    inStock: true,
    discount: 0,
    sku: "002A",
    stock: 246,
    specifications: [
      "Capacidad: 220ml (7.4 fl oz)",
      "Funcionamiento: 3.5 horas continuas",
      "Alimentación: Puerto USB",
      "7 luces LED de colores",
      "Tecnología ultrasónica",
      "Funcionamiento silencioso"
    ],
    includes: [
      "1 Mini humidificador",
      "1 Cable USB",
      "Manual de instrucciones"
    ],
    benefits: [
      "Portátil y ligero",
      "Humidificación eficiente",
      "Luz nocturna incorporada",
      "Compatible con aceites esenciales",
      "Funcionamiento silencioso",
      "Ahorro de energía"
    ]
  },

  // Airpods Pro 2 Generación
  {
    id: 7,
    name: "Airpods Pro 2 Generación",
    price: 60000,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/Airpods_Pro2.webp",
    description: "Audífonos inalámbricos premium compatibles con AirPods Pro, segunda generación",
    longDescription: "Audífonos inalámbricos de alta calidad compatibles con AirPods Pro de segunda generación. Diseño premium con tecnología avanzada para una experiencia de audio superior. Perfectos para quienes buscan calidad de sonido excepcional y comodidad de uso prolongado.",
    inStock: true,
    discount: 0,
    sku: "50",
    stock: 395,
    specifications: [
      "Segunda generación",
      "Tecnología inalámbrica avanzada",
      "Compatibilidad universal",
      "Calidad de audio premium",
      "Diseño ergonómico",
      "Batería de larga duración"
    ],
    includes: [
      "1 Par de audífonos",
      "Estuche de carga",
      "Cable de carga",
      "Manual de instrucciones"
    ],
    benefits: [
      "Sonido de alta fidelidad",
      "Comodidad prolongada",
      "Conexión estable",
      "Diseño premium",
      "Fácil emparejamiento",
      "Excelente autonomía"
    ]
  },

  // Audífonos Inalámbricos (Producto original diferente)
  {
    id: 8,
    name: "Audífonos Inalámbricos 2da Generación",
    price: 73900,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/audifonos.webp",
    description: "Audífonos Bluetooth Premium compatibles con AirPods Pro, iOS y Android, con micrófono y luz LED",
    longDescription: "Los audífonos Bluetooth Premium compatibles con los AirPods Pro de segunda generación son perfectos para quienes buscan comodidad y calidad de sonido. Estos audífonos intraurales inalámbricos, compatibles con iOS y Android, ofrecen libertad de movimiento y comodidad. Además, tienen un micrófono integrado para llamadas y una luz LED para un aspecto moderno.",
    inStock: true,
    discount: 0,
    sku: "EC25",
    specifications: [
      "Bluetooth de alta calidad",
      "Compatible iOS y Android",
      "Micrófono integrado",
      "Luz LED indicadora",
      "Diseño intraaural",
      "Color: Blanco",
      "Sonido envolvente"
    ],
    includes: [
      "1 Par de audífonos",
      "1 Estuche de carga",
      "1 Cable de carga",
      "Manual de instrucciones"
    ],
    benefits: [
      "Sonido de alta calidad",
      "Libertad de movimiento",
      "Compatibilidad universal",
      "Llamadas manos libres",
      "Diseño moderno con LED",
      "Comodidad prolongada"
    ]
  },

  // Bafle Parlante Charge 4 Recargable
  {
    id: 9,
    name: "Bafle Parlante Charge 4 Recargable Bluetooth",
    price: 59900,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/Bafle_Parlante.webp",
    description: "Parlante Bluetooth recargable 20W, batería 2400mAh, resistente a salpicaduras, 4 colores disponibles",
    longDescription: "Parlante Bluetooth de alta potencia con 20W de salida. Batería de iones de litio de 2400mAh para hasta 4 horas de reproducción. Permite conexión inalámbrica de hasta 2 dispositivos simultáneamente. Resistente a salpicaduras y con puerto USB para cargar otros dispositivos.",
    inStock: true,
    discount: 0,
    sku: "charge4-base",
    hasVariants: true,
    variants: [
      {
        id: "azul",
        name: "Azul",
        color: "#2563eb",
        image: "/assets/images/Bafle_Parlante2.webp",
        sku: "90251",
        inStock: true,
        stock: 5
      },
      {
        id: "rojo",
        name: "Rojo",
        color: "#dc2626",
        image: "/assets/images/Bafle_Parlante3.webp",
        sku: "90250",
        inStock: true,
        stock: 10
      },
      {
        id: "gris",
        name: "Gris",
        color: "#6b7280",
        image: "/assets/images/Bafle_Parlante4.webp",
        sku: "90253",
        inStock: true,
        stock: 12
      },
      {
        id: "negro",
        name: "Negro",
        color: "#1f2937",
        image: "/assets/images/Bafle_Parlante.webp",
        sku: "90252",
        inStock: false,
        stock: 0
      }
    ],
    specifications: [
      "Potencia: 20W",
      "Batería: 2400mAh iones de litio",
      "Reproducción: hasta 4 horas",
      "Tamaño: 22 x 9.5 x 9.3 cm",
      "Peso: 965g",
      "Resistente a salpicaduras",
      "Puerto USB de carga"
    ],
    includes: [
      "1 Parlante Bluetooth",
      "Cable de carga USB",
      "Manual de instrucciones"
    ],
    benefits: [
      "Sonido potente 20W",
      "Batería de larga duración",
      "Conexión de 2 dispositivos",
      "Carga otros dispositivos",
      "Resistente al agua",
      "Diseño portátil"
    ]
  },

  // Maleta Deportiva T60
  {
    id: 10,
    name: "Maleta Deportiva T60",
    price: 78000,
    originalPrice: null,
    category: "deportes",
    image: "/assets/images/maleta.webp",
    description: "Mochila deportiva con amplia capacidad, resistente al agua y múltiples compartimentos organizadores",
    longDescription: "La Mochila Deportiva T60 está diseñada para adaptarse a tu estilo de vida activo. Su amplia capacidad te permite llevar todo lo necesario para tus entrenamientos o actividades deportivas, desde ropa, zapatos, hasta accesorios. Fabricada con materiales duraderos y resistentes al agua, garantiza la protección de tus pertenencias en cualquier condición. Sus múltiples compartimentos permiten una organización óptima, mientras que sus correas ajustables y acolchonadas aseguran comodidad durante el uso.",
    inStock: true,
    discount: 0,
    sku: "BL-611",
    hasVariants: true,
    variants: [
      {
        id: "verde",
        name: "Verde",
        color: "#059669",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-verde",
        inStock: true,
        stock: 98
      },
      {
        id: "lila",
        name: "Lila",
        color: "#a855f7",
        image: "/assets/images/maleta2.webp",
        sku: "BL-611-lila",
        inStock: false,
        stock: 0
      },
      {
        id: "rojo",
        name: "Rojo",
        color: "#dc2626",
        image: "/assets/images/maleta3.webp",
        sku: "BL-611-rojo",
        inStock: true,
        stock: 40
      },
      {
        id: "gris",
        name: "Gris",
        color: "#6b7280",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-gris",
        inStock: false,
        stock: 0
      },
      {
        id: "rosado",
        name: "Rosado",
        color: "#ec4899",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-rosado",
        inStock: true,
        stock: 47
      },
      {
        id: "azul",
        name: "Azul",
        color: "#2563eb",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-azul",
        inStock: true,
        stock: 48
      },
      {
        id: "negro",
        name: "Negro",
        color: "#1f2937",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-negro",
        inStock: false,
        stock: 0
      },
      {
        id: "vinotinto",
        name: "Vinotinto",
        color: "#7c2d12",
        image: "/assets/images/maleta.webp",
        sku: "BL-611-vinotinto",
        inStock: true,
        stock: 84
      }
    ],
    specifications: [
      "Material resistente al agua",
      "Múltiples compartimentos",
      "Correas ajustables y acolchonadas",
      "Amplia capacidad de almacenamiento",
      "Diseño deportivo y funcional",
      "8 colores disponibles"
    ],
    includes: [
      "1 Mochila deportiva T60",
      "Manual de cuidado"
    ],
    benefits: [
      "Resistente al agua",
      "Organización óptima",
      "Comodidad en el uso",
      "Diseño moderno y estilizado",
      "Ideal para gym y deportes",
      "Materiales duraderos"
    ]
  },

  // Kit Destornilladores 37 Piezas
  {
    id: 11,
    name: "Juego 37 Piezas Destornilladores y Puntas",
    price: 90000,
    originalPrice: null,
    category: "herramientas",
    image: "/assets/images/combo_destornilladores2.webp",
    description: "Kit completo de precisión con destornillador de trinquete, 26 puntas y 9 copas intercambiables",
    longDescription: "Kit destornillador diseñado para brindar una amplia variedad de opciones de tornillos y cabezales para satisfacer diferentes necesidades de trabajo. Incluye mango ergonómico antideslizante con mecanismo de trinquete bidireccional. Todas las copas y puntas están hechas de acero de alta calidad para garantizar resistencia y durabilidad.",
    inStock: true,
    discount: 0,
    sku: "128749796",
    specifications: [
      "37 piezas totales",
      "26 puntas intercambiables",
      "9 copas intercambiables",
      "Mango ergonómico antideslizante",
      "Mecanismo de trinquete bidireccional",
      "Estuche: 14.5 x 10 x 3.5 cm",
      "Destornillador: 12.3 x 3 cm"
    ],
    includes: [
      "1 Destornillador con trinquete",
      "26 Puntas intercambiables",
      "9 Copas intercambiables",
      "1 Estuche organizador",
      "Manual de instrucciones"
    ],
    benefits: [
      "Amplia variedad de puntas",
      "Trinquete bidireccional",
      "Mango antideslizante",
      "Estuche organizador incluido",
      "Acero de alta calidad",
      "Ideal para reparaciones de precisión"
    ]
  },

  // Maletín Deportivo Azul Oscuro
  {
    id: 12,
    name: "Maletín Deportivo Azul Oscuro Ref 3",
    price: 90000,
    originalPrice: null,
    category: "deportes",
    image: "/assets/images/Maletin_Deportivo.webp",
    description: "Maletín deportivo azul oscuro de alta calidad, diseño funcional para actividades deportivas",
    longDescription: "Maletín deportivo en color azul oscuro diseñado para satisfacer las necesidades de atletas y deportistas. Fabricado con materiales resistentes y duraderos. Su diseño funcional permite organizar y transportar cómodamente todo el equipo deportivo necesario.",
    inStock: true,
    discount: 0,
    sku: "Maletín Deportivo Azul Oscuro - REF 3",
    stock: 6,
    specifications: [
      "Color: Azul oscuro",
      "Material resistente",
      "Diseño deportivo funcional",
      "Múltiples compartimentos",
      "Correas ajustables",
      "Alta durabilidad"
    ],
    includes: [
      "1 Maletín deportivo",
      "Manual de cuidado"
    ],
    benefits: [
      "Diseño funcional",
      "Material resistente",
      "Organización óptima",
      "Comodidad de transporte",
      "Ideal para deportes",
      "Construcción duradera"
    ]
  },

  // Juego De Destornillador Kit Pro 115 en 1
  {
    id: 13,
    name: "Juego De Destornillador Kit Pro 115 en 1",
    price: 45000,
    originalPrice: null,
    category: "herramientas",
    image: "/assets/images/combo_destornilladores3.webp",
    description: "Kit profesional 115 herramientas en 1, destornilladores CR-V, pinzas, palancas para electrónicos",
    longDescription: "Kit Pro completo de 115 herramientas en 1 diseñado para reparación electrónica profesional. Incluye 98 tipos de puntas y enchufes de destornillador CR-V, además de herramientas funcionales como ventosas, pinzas, palancas y más. Perfecto para reparar teléfonos, tablets, computadoras y otros dispositivos electrónicos.",
    inStock: true,
    discount: 0,
    sku: "141",
    stock: 40,
    specifications: [
      "115 herramientas incluidas",
      "98 puntas CR-V diferentes",
      "Puntas ranuradas, Phillips, triangulares",
      "Mango ergonómico antideslizante",
      "Estuche resistente incluido",
      "Alta dureza y tenacidad"
    ],
    includes: [
      "98 Puntas de destornillador CR-V",
      "Ventosa",
      "Pin expulsor SIM",
      "Paleta triangular",
      "Mango ergonómico",
      "Varilla de extensión",
      "Pinzas especializadas",
      "Magnetizador/Desmagnetizador",
      "Herramientas de palanca",
      "Estuche de almacenamiento",
      "Manual de instrucciones"
    ],
    benefits: [
      "Versatilidad completa",
      "Calidad CR-V confiable",
      "Mango antideslizante",
      "Portátil y organizado",
      "Para cualquier reparación",
      "Herramientas especializadas"
    ]
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: ShoppingBag },
  { id: 'belleza', name: 'Belleza y Cuidado', icon: Sparkles },
  { id: 'hogar', name: 'Hogar y Oficina', icon: Home },
  { id: 'vape', name: 'Vapes', icon: Zap },
  { id: 'deportes', name: 'Deportes', icon: Dumbbell },
  { id: 'tecnologia', name: 'Tecnología', icon: Smartphone },
  { id: 'herramientas', name: 'Herramientas', icon: Wrench }
];