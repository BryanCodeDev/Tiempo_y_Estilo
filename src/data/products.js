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
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: '🛒' },
  { id: 'belleza', name: 'Belleza y Cuidado', icon: '💄' },
  { id: 'hogar', name: 'Hogar y Oficina', icon: '🏠' },
  { id: 'cocina', name: 'Cocina y Comedor', icon: '🍴' },
  { id: 'vape', name: 'Vapes', icon: '💨' }
];