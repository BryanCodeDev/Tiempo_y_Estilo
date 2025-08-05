export const products = [
  // Abarrotes - Granos y Cereales
  {
    id: 1,
    name: "Arroz Diana 500g",
    price: 2800,
    originalPrice: 3200,
    category: "abarrotes",
    image: "/assets/images/arroz-diana.webp",
    description: "Arroz de primera calidad, grano largo, bolsa de 500g",
    inStock: true,
    discount: 12
  },
  {
    id: 2,
    name: "Frijol Cargamanto 500g",
    price: 4200,
    category: "abarrotes",
    image: "/assets/images/frijol-cargamanto.webp",
    description: "Frijol cargamanto premium, bolsa de 500g",
    inStock: true
  },
  {
    id: 3,
    name: "Lenteja 500g",
    price: 3800,
    category: "abarrotes",
    image: "/assets/images/lenteja.webp",
    description: "Lenteja seleccionada, bolsa de 500g",
    inStock: true
  },
  {
    id: 4,
    name: "Pasta Doria 500g",
    price: 2900,
    category: "abarrotes",
    image: "/assets/images/pasta-doria.webp",
    description: "Pasta espagueti, paquete de 500g",
    inStock: true
  },
  {
    id: 5,
    name: "Aceite Gourmet 1L",
    price: 9800,
    category: "abarrotes",
    image: "/assets/images/aceite-gourmet.webp",
    description: "Aceite vegetal premium, botella de 1 litro",
    inStock: true
  },
  {
    id: 6,
    name: "Azúcar Incauca 1kg",
    price: 3400,
    category: "abarrotes",
    image: "/assets/images/azucar-incauca.webp",
    description: "Azúcar blanca refinada, bolsa de 1kg",
    inStock: true
  },
  {
    id: 7,
    name: "Sal Refisal 500g",
    price: 1200,
    category: "abarrotes",
    image: "/assets/images/sal-refisal.webp",
    description: "Sal marina refinada, paquete de 500g",
    inStock: true
  },
  {
    id: 8,
    name: "Avena Quaker 500g",
    price: 4800,
    category: "abarrotes",
    image: "/assets/images/avena-quaker.webp",
    description: "Avena en hojuelas, paquete de 500g",
    inStock: true
  },

  // Carnes y Embutidos
  {
    id: 9,
    name: "Pollo Entero x Kg",
    price: 7200,
    category: "carnes",
    image: "/assets/images/pollo-entero.webp",
    description: "Pollo criollo fresco, precio por kilogramo",
    inStock: true
  },
  {
    id: 10,
    name: "Pechuga de Pollo x Kg",
    price: 12500,
    category: "carnes",
    image: "/assets/images/pechuga-pollo.webp",
    description: "Pechuga de pollo sin hueso, precio por kilogramo",
    inStock: true
  },
  {
    id: 11,
    name: "Carne de Res x Kg",
    price: 18000,
    category: "carnes",
    image: "/assets/images/carne-res.webp",
    description: "Carne de res para sancocho, precio por kilogramo",
    inStock: true
  },
  {
    id: 12,
    name: "Carne Molida x Kg",
    price: 15500,
    category: "carnes",
    image: "/assets/images/carne-molida.webp",
    description: "Carne molida de res, precio por kilogramo",
    inStock: true
  },
  {
    id: 13,
    name: "Salchichón Zenú 250g",
    price: 8900,
    category: "carnes",
    image: "/assets/images/salchichon-zenu.webp",
    description: "Salchichón premium, paquete de 250g",
    inStock: true
  },
  {
    id: 14,
    name: "Jamón de Cerdo 200g",
    price: 7800,
    category: "carnes",
    image: "/assets/images/jamon-cerdo.webp",
    description: "Jamón de cerdo rebanado, paquete de 200g",
    inStock: true
  },
  {
    id: 15,
    name: "Salchicha Americana x6",
    price: 5200,
    category: "carnes",
    image: "/assets/images/salchicha-americana.webp",
    description: "Salchichas americanas, paquete de 6 unidades",
    inStock: true
  },

  // Lácteos
  {
    id: 16,
    name: "Leche Alquería 1L",
    price: 4200,
    category: "lacteos",
    image: "/assets/images/leche-alqueria.webp",
    description: "Leche entera ultrapasteurizada, cartón de 1 litro",
    inStock: true
  },
  {
    id: 17,
    name: "Queso Campesino 500g",
    price: 12500,
    category: "lacteos",
    image: "/assets/images/queso-campesino.webp",
    description: "Queso campesino fresco, paquete de 500g",
    inStock: true
  },
  {
    id: 18,
    name: "Queso Doble Crema 400g",
    price: 9800,
    category: "lacteos",
    image: "/assets/images/queso-doble-crema.webp",
    description: "Queso doble crema, paquete de 400g",
    inStock: true
  },
  {
    id: 19,
    name: "Mantequilla Rama 250g",
    price: 7200,
    category: "lacteos",
    image: "/assets/images/mantequilla-rama.webp",
    description: "Mantequilla con sal, barra de 250g",
    inStock: true
  },
  {
    id: 20,
    name: "Yogurt Alpina 1L",
    price: 5800,
    category: "lacteos",
    image: "/assets/images/yogurt-alpina.webp",
    description: "Yogurt natural cremoso, envase de 1 litro",
    inStock: true
  },
  {
    id: 21,
    name: "Huevos AA x30",
    price: 14500,
    originalPrice: 16000,
    category: "lacteos",
    image: "/assets/images/huevos-aa.webp",
    description: "Huevos frescos AA, cartón de 30 unidades",
    inStock: true,
    discount: 9
  },

  // Bebidas
  {
    id: 22,
    name: "Coca Cola 2.5L",
    price: 8500,
    originalPrice: 9200,
    category: "bebidas",
    image: "/assets/images/coca-cola-2-5l.webp",
    description: "Coca Cola familiar, botella de 2.5 litros",
    inStock: true,
    discount: 8
  },
  {
    id: 23,
    name: "Agua Cristal 6x600ml",
    price: 6200,
    category: "bebidas",
    image: "/assets/images/agua-cristal-6pack.webp",
    description: "Agua purificada, six pack de 600ml",
    inStock: true
  },
  {
    id: 24,
    name: "Jugo Hit Mango 1L",
    price: 4500,
    category: "bebidas",
    image: "/assets/images/jugo-hit-mango.webp",
    description: "Jugo de mango Hit, tetra pack de 1 litro",
    inStock: true
  },
  {
    id: 25,
    name: "Cerveza Aguila 6x330ml",
    price: 19800,
    category: "bebidas",
    image: "/assets/images/cerveza-aguila-6pack.webp",
    description: "Cerveza Aguila, six pack de 330ml",
    inStock: true
  },
  {
    id: 26,
    name: "Gaseosa Postobón 2L",
    price: 5800,
    category: "bebidas",
    image: "/assets/images/postobon-2l.webp",
    description: "Gaseosa Postobón sabor naranja, botella de 2 litros",
    inStock: true
  },

  // Aseo Personal
  {
    id: 27,
    name: "Shampoo Head & Shoulders 400ml",
    price: 18500,
    category: "aseo-personal",
    image: "/assets/images/shampoo-head-shoulders.webp",
    description: "Shampoo anticaspa, botella de 400ml",
    inStock: true
  },
  {
    id: 28,
    name: "Jabón Protex 3x125g",
    price: 8200,
    category: "aseo-personal",
    image: "/assets/images/jabon-protex-3pack.webp",
    description: "Jabón antibacterial, paquete de 3 unidades",
    inStock: true
  },
  {
    id: 29,
    name: "Crema Dental Colgate 150ml",
    price: 6800,
    category: "aseo-personal",
    image: "/assets/images/crema-dental-colgate.webp",
    description: "Crema dental triple acción, tubo de 150ml",
    inStock: true
  },
  {
    id: 30,
    name: "Desodorante Rexona 150ml",
    price: 9200,
    category: "aseo-personal",
    image: "/assets/images/desodorante-rexona.webp",
    description: "Desodorante en aerosol, 150ml",
    inStock: true
  },
  {
    id: 31,
    name: "Papel Higiénico Scott 4x",
    price: 12500,
    category: "aseo-personal",
    image: "/assets/images/papel-higienico-scott.webp",
    description: "Papel higiénico extra suave, paquete de 4 rollos",
    inStock: true
  },

  // Aseo del Hogar
  {
    id: 32,
    name: "Detergente Fab 1kg",
    price: 14800,
    category: "aseo-hogar",
    image: "/assets/images/detergente-fab.webp",
    description: "Detergente en polvo, bolsa de 1kg",
    inStock: true
  },
  {
    id: 33,
    name: "Suavitel 1L",
    price: 8900,
    category: "aseo-hogar",
    image: "/assets/images/suavitel-1l.webp",
    description: "Suavizante para ropa, botella de 1 litro",
    inStock: true
  },
  {
    id: 34,
    name: "Limpido Pisos 1L",
    price: 6500,
    category: "aseo-hogar",
    image: "/assets/images/limpido-pisos.webp",
    description: "Limpiador multipisos, botella de 1 litro",
    inStock: true
  },
  {
    id: 35,
    name: "Varsol 500ml",
    price: 4200,
    category: "aseo-hogar",
    image: "/assets/images/varsol-500ml.webp",
    description: "Desengrasante multiusos, botella de 500ml",
    inStock: true
  },
  {
    id: 36,
    name: "Esponja Scotch Brite x3",
    price: 3800,
    category: "aseo-hogar",
    image: "/assets/images/esponja-scotch-brite.webp",
    description: "Esponjas para trastes, paquete de 3 unidades",
    inStock: true
  },

  // Snacks y Dulces
  {
    id: 37,
    name: "Papas Margarita Grande",
    price: 3500,
    category: "snacks",
    image: "/assets/images/papas-margarita.webp",
    description: "Papas fritas sabor natural, bolsa grande",
    inStock: true
  },
  {
    id: 38,
    name: "Choclitos Super Ricas",
    price: 2800,
    category: "snacks",
    image: "/assets/images/choclitos-super-ricas.webp",
    description: "Choclitos de maíz, bolsa familiar",
    inStock: true
  },
  {
    id: 39,
    name: "Chocolatina Jet",
    price: 1800,
    category: "snacks",
    image: "/assets/images/chocolatina-jet.webp",
    description: "Chocolatina con maní, 65g",
    inStock: true
  },
  {
    id: 40,
    name: "Galletas Festival",
    price: 4200,
    category: "snacks",
    image: "/assets/images/galletas-festival.webp",
    description: "Galletas de chocolate, paquete familiar",
    inStock: true
  },
  {
    id: 41,
    name: "Maní Salado 200g",
    price: 3200,
    category: "snacks",
    image: "/assets/images/mani-salado.webp",
    description: "Maní tostado y salado, bolsa de 200g",
    inStock: true
  },

  // Verduras y Frutas
  {
    id: 42,
    name: "Papa Criolla x Kg",
    price: 2800,
    category: "verduras",
    image: "/assets/images/papa-criolla.webp",
    description: "Papa criolla fresca, precio por kilogramo",
    inStock: true
  },
  {
    id: 43,
    name: "Cebolla Cabezona x Kg",
    price: 3200,
    category: "verduras",
    image: "/assets/images/cebolla-cabezona.webp",
    description: "Cebolla cabezona blanca, precio por kilogramo",
    inStock: true
  },
  {
    id: 44,
    name: "Tomate x Kg",
    price: 4500,
    category: "verduras",
    image: "/assets/images/tomate.webp",
    description: "Tomate chonto fresco, precio por kilogramo",
    inStock: true
  },
  {
    id: 45,
    name: "Banano x Kg",
    price: 2400,
    category: "verduras",
    image: "/assets/images/banano.webp",
    description: "Banano criollo, precio por kilogramo",
    inStock: true
  },
  {
    id: 46,
    name: "Plátano Verde x Kg",
    price: 2200,
    category: "verduras",
    image: "/assets/images/platano-verde.webp",
    description: "Plátano verde para cocinar, precio por kilogramo",
    inStock: true
  },
  {
    id: 47,
    name: "Yuca x Kg",
    price: 2600,
    category: "verduras",
    image: "/assets/images/yuca.webp",
    description: "Yuca fresca, precio por kilogramo",
    inStock: true
  },
  {
    id: 48,
    name: "Limón x Kg",
    price: 3800,
    category: "verduras",
    image: "/assets/images/limon.webp",
    description: "Limón común, precio por kilogramo",
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'Todos los productos', icon: '🛒' },
  { id: 'abarrotes', name: 'Abarrotes', icon: '🌾' },
  { id: 'carnes', name: 'Carnes y Embutidos', icon: '🥩' },
  { id: 'lacteos', name: 'Lácteos y Huevos', icon: '🥛' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
  { id: 'aseo-personal', name: 'Aseo Personal', icon: '🧴' },
  { id: 'aseo-hogar', name: 'Aseo del Hogar', icon: '🧽' },
  { id: 'snacks', name: 'Snacks y Dulces', icon: '🍿' },
  { id: 'verduras', name: 'Verduras y Frutas', icon: '🥕' }
];