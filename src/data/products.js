export const products = [
  // Masajeador Facial
  {
    id: 1,
    name: "Masajeador Facial de Delfín",
    price: 63000,
    originalPrice: 89000,
    category: "belleza",
    image: "/assets/images/masajeador-delfin.webp",
    description: "Masajeador facial con función de calor, 3 intensidades de masaje, batería de 650mAh",
    longDescription: "Masajeador de cuello con función de calor. El calor magnético de 45±5℃ calienta la piel, combinado con un masaje 3D para promover la absorción de los productos para el cuidado de la piel. Puede promover la síntesis de proteínas y colágeno, activar la piel, tensar la piel flácida y reducir los poros.",
    inStock: true,
    discount: 29,
    sku: "masajeador-delfin",
    specifications: [
      "Material: ABS premium",
      "Carga USB incluida",
      "Batería de litio 650mAh",
      "Tiempo de carga: 2 horas",
      "3 intensidades de masaje",
      "Función de calor magnético 45±5℃",
      "Tamaño: 4.7 x 3.5 x 1.9 pulgadas"
    ],
    includes: [
      "1 Masajeador facial",
      "1 Cable USB",
      "1 Paño de limpieza",
      "1 Manual de instrucciones"
    ],
    benefits: [
      "Elimina arrugas del cuello y cara",
      "Promueve circulación sanguínea",
      "Estimula puntos de acupuntura",
      "Mejora absorción de productos",
      "Reduce poros y flacidez"
    ]
  },

  // Set Utensilios Cocina - PRODUCTO ÚNICO CON VARIANTES DE COLOR
  {
    id: 2,
    name: "Set Utensilios Cocina 12pcs",
    price: 35500,
    originalPrice: 48000,
    category: "cocina",
    image: "/assets/images/utensilios.webp",
    description: "Set de 12 utensilios de silicona con mango de madera, resistente al calor, incluye contenedor",
    longDescription: "Juego completo de utensilios de cocina de silicona de grado alimenticio con mangos de madera premium. Resistente al calor, fácil de limpiar y con contenedor organizador incluido. Disponible en 4 colores elegantes.",
    inStock: true,
    discount: 26,
    sku: "utensilios-cocina-12pcs",
    hasVariants: true,
    variants: [
      {
        id: "negro",
        name: "Negro",
        color: "#1f2937",
        image: "/assets/images/utensilios.webp",
        sku: "utensilios-negro"
      },
      {
        id: "verde",
        name: "Verde",
        color: "#059669",
        image: "/assets/images/utensilios.webp", 
        sku: "utensilios-verde"
      },
      {
        id: "gris",
        name: "Gris",
        color: "#6b7280",
        image: "/assets/images/utensilios.webp",
        sku: "utensilios-gris"
      },
      {
        id: "rosado",
        name: "Rosado",
        color: "#ec4899",
        image: "/assets/images/utensilios.webp",
        sku: "utensilios-rosado"
      }
    ],
    specifications: [
      "Material: Silicona grado alimenticio",
      "Mango: Madera premium",
      "Resistente al calor hasta 230°C",
      "Sin BPA",
      "12 piezas + contenedor",
      "Fácil limpieza",
      "4 colores disponibles"
    ],
    includes: [
      "11 Utensilios de silicona",
      "1 Contenedor organizador",
      "Manual de cuidado"
    ],
    benefits: [
      "Resistente al calor",
      "No raya superficies antiadherentes",
      "Mango ergonómico",
      "Fácil almacenamiento",
      "Duradero y seguro",
      "Múltiples colores disponibles"
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

  // Maleta Deportiva T60
  {
    id: 4,
    name: "Maleta Deportiva T60",
    price: 78000,
    originalPrice: null,
    category: "deportes",
    image: "/assets/images/maleta-deportiva.webp",
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
        image: "/assets/images/maleta-verde.webp",
        sku: "BL-611-verde",
        inStock: true,
        stock: 98
      },
      {
        id: "lila",
        name: "Lila",
        color: "#a855f7",
        image: "/assets/images/maleta-lila.webp",
        sku: "BL-611-lila",
        inStock: false,
        stock: 0
      },
      {
        id: "rojo",
        name: "Rojo",
        color: "#dc2626",
        image: "/assets/images/maleta-roja.webp",
        sku: "BL-611-rojo",
        inStock: true,
        stock: 40
      },
      {
        id: "gris",
        name: "Gris",
        color: "#6b7280",
        image: "/assets/images/maleta-gris.webp",
        sku: "BL-611-gris",
        inStock: false,
        stock: 0
      },
      {
        id: "rosado",
        name: "Rosado",
        color: "#ec4899",
        image: "/assets/images/maleta-rosada.webp",
        sku: "BL-611-rosado",
        inStock: true,
        stock: 47
      },
      {
        id: "azul",
        name: "Azul",
        color: "#2563eb",
        image: "/assets/images/maleta-azul.webp",
        sku: "BL-611-azul",
        inStock: true,
        stock: 48
      },
      {
        id: "negro",
        name: "Negro",
        color: "#1f2937",
        image: "/assets/images/maleta-negra.webp",
        sku: "BL-611-negro",
        inStock: false,
        stock: 0
      },
      {
        id: "vinotinto",
        name: "Vinotinto",
        color: "#7c2d12",
        image: "/assets/images/maleta-vinotinto.webp",
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

  // Lámpara Base LED Millonarios FC
  {
    id: 5,
    name: "Lámpara Base LED Millonarios FC V284",
    price: 45000,
    originalPrice: 60000,
    category: "tecnologia",
    image: "/assets/images/lampara-millonarios.webp",
    description: "Lámpara LED con escudo de Millonarios FC, acrílico de alta calidad, luz cálida y control táctil",
    longDescription: "La Lámpara Base LED Escudo Millonarios FC V284 es el accesorio perfecto para los verdaderos hinchas del club. Con un diseño exclusivo del escudo del equipo, esta lámpara captura la esencia del club y la lleva directamente a tu hogar, oficina o cualquier espacio que desees iluminar con pasión azul. Fabricada con acrílico de alta calidad, asegura durabilidad superior y excelente resistencia al paso del tiempo.",
    inStock: true,
    discount: 25,
    sku: "Did-V284",
    specifications: [
      "Material: Plástico de alta calidad",
      "Fuente de luz: LED",
      "Apoyo regulador de voltaje: Sí",
      "Modo de alimentación: Recarga USB",
      "Control táctil",
      "Temperatura de color: 3500K (cálida)",
      "Flujo luminoso: 80 lm",
      "Vida útil: 10000 horas"
    ],
    includes: [
      "1 Lámpara LED Millonarios FC",
      "1 Cable USB",
      "Manual de instrucciones"
    ],
    benefits: [
      "Diseño exclusivo del escudo",
      "Luz cálida y relajante",
      "Control táctil fácil",
      "Recargable por USB",
      "Larga vida útil",
      "Perfecto para hinchas"
    ]
  },

  // Concentrador USB Hub
  {
    id: 6,
    name: "Concentrador de Red Hub USB Multipuertos",
    price: 50000,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/hub-usb.webp",
    description: "Hub USB de 7 puertos con interruptores independientes, alta velocidad USB 2.0/3.0",
    longDescription: "Concentrador USB de alta calidad con 7 puertos independientes. Cada puerto cuenta con su propio interruptor, evitando la compresión entre dispositivos USB grandes. Compatible con Windows XP/Vista/7/8 y MAC. Ligero, fácil de llevar y extremadamente práctico para expandir la conectividad de tu computador.",
    inStock: true,
    discount: 0,
    sku: "1138",
    specifications: [
      "7 puertos USB 2.0/3.0",
      "Interruptores independientes",
      "Color: Negro",
      "Interface: Puerto macho tipo B USB2.0",
      "Compatible: Windows XP/Vista/7/8 y MAC",
      "Alta velocidad de transferencia"
    ],
    includes: [
      "1 Hub USB de 7 puertos",
      "1 Cable USB",
      "Manual de instrucciones"
    ],
    benefits: [
      "Puertos independientes con switch",
      "Evita compresión de dispositivos",
      "Ligero y portátil",
      "Alta velocidad",
      "Compatible múltiples sistemas",
      "Práctico y conveniente"
    ]
  },

  // Estante Organizador de Zapatos
  {
    id: 7,
    name: "Estante Organizador de Zapatos 5 Niveles",
    price: 76900,
    originalPrice: null,
    category: "hogar",
    image: "/assets/images/organizador-zapatos.webp",
    description: "Organizador vertical de zapatos para 12 pares, 5 niveles, fácil instalación sin herramientas",
    longDescription: "Descubre la solución perfecta para mantener tus zapatos organizados y al alcance de la mano. Nuestro Organizador de Zapatos de 5 Niveles es un sistema innovador diseñado para maximizar el espacio de tu hogar, permitiendo el almacenamiento vertical de hasta 12 pares de zapatos de manera ordenada y elegante. Su diseño compacto no solo duplica tu espacio de almacenamiento, sino que también aporta un toque moderno y minimalista a tu decoración.",
    inStock: true,
    discount: 0,
    sku: "Estante Organizador De Zapatos 5 Niveles",
    specifications: [
      "Dimensiones: 67 x 57 x 20 cm",
      "Capacidad: 12 pares de zapatos",
      "Material: Tubo de acero, junta de plástico",
      "Altura: 65 cm",
      "Largo: 57 cm",
      "Fondo: 20 cm",
      "Sin herramientas para instalación"
    ],
    includes: [
      "1 Organizador de 5 niveles",
      "Piezas de ensamble",
      "Manual de instalación"
    ],
    benefits: [
      "Maximiza el espacio vertical",
      "Diseño práctico y funcional",
      "Ligero y fácil de mover",
      "Se adapta a botas altas",
      "Instalación sin herramientas",
      "Material resistente"
    ]
  },

  // Audífonos Inalámbricos
  {
    id: 8,
    name: "Audífonos Inalámbricos 2da Generación",
    price: 85000,
    originalPrice: null,
    category: "tecnologia",
    image: "/assets/images/audifonos-inalambricos.webp",
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

  // Taladro 24V
  {
    id: 9,
    name: "Taladro en Estuche 24 Voltios 2 Baterías",
    price: 160000,
    originalPrice: null,
    category: "herramientas",
    image: "/assets/images/taladro-24v.webp",
    description: "Taladro inalámbrico 24V con 2 baterías, estuche completo con herramientas y accesorios",
    longDescription: "Potente taladro de 24V con batería de litio, equipado con luz LED que se acciona al presionar el gatillo y un eje flexible para los lugares más difíciles. Cuenta con un práctico estuche de alta resistencia con herramientas indispensables para todas las tareas. Ideal para carpintería, estructuras de yeso y reparaciones automotrices.",
    inStock: true,
    discount: 0,
    sku: "123",
    specifications: [
      "Potencia: 24V",
      "Batería: Litio (LI-ION) 24V",
      "Tiempo de carga: 3-5 horas",
      "Apertura máxima: 10mm (3/8\")",
      "Torque: 28 NM",
      "18 niveles de torque",
      "2 controles de velocidad"
    ],
    includes: [
      "1 Taladro inalámbrico",
      "2 Baterías recargables 24V",
      "1 Adaptador CA para carga",
      "9 Copas (5-13mm)",
      "6 Puntas de destornillador",
      "6 Brocas para madera y yeso",
      "1 Eje flexible",
      "2 Accesorios para eje flexible",
      "1 Estuche de alta resistencia"
    ],
    benefits: [
      "Doble batería incluida",
      "Luz LED integrada",
      "Eje flexible incluido",
      "Kit completo de herramientas",
      "Control de reversa",
      "Diseño ergonómico"
    ]
  },

  // Combo Reloj + Audífonos + Maleta
  {
    id: 10,
    name: "Combo: Reloj D18 + Audífonos M10 + Maleta",
    price: 75900,
    originalPrice: null,
    category: "combos",
    image: "/assets/images/combo-reloj-audifonos.webp",
    description: "Combo 3 productos: Reloj inteligente D18, Audífonos M10 y Maleta (Antirrobo o Canguro)",
    longDescription: "Combo completo que incluye 3 productos esenciales: Reloj inteligente D18 circular, Audífonos M10 de alta calidad y una maleta funcional. Disponible en dos variantes: con maleta antirrobo o maleta tipo canguro. Perfecto para quienes buscan tecnología y funcionalidad en un solo paquete.",
    inStock: true,
    discount: 0,
    sku: "IMPLECONCANGMAL",
    hasVariants: true,
    variants: [
      {
        id: "antirrobo",
        name: "Con Maleta Antirrobo",
        image: "/assets/images/combo-antirrobo.webp",
        sku: "COMBO-antirrobo",
        inStock: true,
        stock: 79
      },
      {
        id: "canguro",
        name: "Con Maleta Canguro",
        image: "/assets/images/combo-canguro.webp",
        sku: "COMBO-canguro", 
        inStock: true,
        stock: 70
      }
    ],
    specifications: [
      "Reloj D18 circular inteligente",
      "Audífonos M10 inalámbricos",
      "Maleta funcional incluida",
      "2 variantes de maleta disponibles",
      "Combo de 3 productos"
    ],
    includes: [
      "1 Reloj inteligente D18",
      "1 Par audífonos M10",
      "1 Maleta (según variante)",
      "Cables de carga",
      "Manuales de instrucciones"
    ],
    benefits: [
      "Combo completo 3 en 1",
      "Ahorro en compra conjunto",
      "Productos complementarios",
      "Tecnología y funcionalidad",
      "Dos opciones de maleta",
      "Excelente relación precio-valor"
    ]
  },

  // Kit Destornilladores 37 Piezas
  {
    id: 11,
    name: "Juego 37 Piezas Destornilladores y Puntas",
    price: 90000,
    originalPrice: null,
    category: "herramientas",
    image: "/assets/images/kit-destornilladores.webp",
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
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: '🛍️' },
  { id: 'belleza', name: 'Belleza y Cuidado', icon: '💄' },
  { id: 'hogar', name: 'Hogar y Oficina', icon: '🏠' },
  { id: 'cocina', name: 'Cocina y Comedor', icon: '🍴' },
  { id: 'vape', name: 'Vapes', icon: '💨' },
  { id: 'deportes', name: 'Deportes', icon: '⚽' },
  { id: 'tecnologia', name: 'Tecnología', icon: '📱' },
  { id: 'herramientas', name: 'Herramientas', icon: '🔧' },
  { id: 'combos', name: 'Combos', icon: '📦' }
];