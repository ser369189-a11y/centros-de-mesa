/**
 * ============================================================
 * CATÁLOGO DE PRODUCTOS — PRACTI HOME
 * ============================================================
 * Este es el ÚNICO archivo que necesitas editar para agregar,
 * quitar o modificar productos (nombre, medidas, colores,
 * precios, imágenes). El catálogo, los modales de producto y
 * el carrito se generan automáticamente desde este array: no
 * hace falta tocar el HTML para editar un producto existente.
 *
 * ⚠️ PRECIOS: son de REFERENCIA. Ajusta "precio" y
 * "precioTachado" de cada producto a tus precios reales antes
 * de publicar la landing.
 *
 * Estructura de cada producto:
 *   id              -> identificador único (no lo repitas, no uses espacios)
 *   nombre          -> nombre visible del producto
 *   categorias      -> array de ambientes, usado por los filtros del catálogo
 *                      (valores válidos: "cocina", "bano", "sala", "dormitorio", "oficina")
 *   medida          -> texto corto de medidas (se muestra en la tarjeta y el detalle)
 *   descripcionCorta-> 1 línea, se muestra en la tarjeta del catálogo
 *   caracteristicas -> lista de bullets, se muestra en el detalle del producto
 *   colores         -> array de { id, nombre }. Si el producto no tiene
 *                      variantes de color, deja el array con un solo color.
 *   precio          -> precio final en soles (número, sin "S/")
 *   precioTachado   -> precio tachado para mostrar el descuento (opcional)
 *   imagen          -> ruta de la imagen principal (tarjeta + detalle)
 * ============================================================
 */

const PRODUCTOS = [
  {
    id: "repisa-bano-toallero",
    nombre: "Repisa para Baño con Toallero",
    categorias: ["bano"],
    medida: "76 × 20 cm",
    descripcionCorta: "Melamine resistente a la humedad + toallero integrado.",
    caracteristicas: [
      "Melamine RH: resistente a la humedad",
      "Toallero integrado, práctico y funcional",
      "Estructura metálica color negro de alta resistencia",
      "Diseño moderno y minimalista",
      "Ideal para baños",
    ],
    colores: [{ id: "blanco", nombre: "Blanco" }],
    precio: 159.0,
    precioTachado: 199.0,
    imagen: "assets/images/productos/repisa-bano-toallero.jpg",
    // Carrusel: ficha del producto + fotos reales y detalles.
    imagenes: ["assets/images/productos/repisa-bano-toallero.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-3.jpg"],
  },
  {
    id: "estante-multiespacios-76",
    nombre: "Estante Multiespacios",
    categorias: ["sala", "oficina"],
    medida: "76 × 57 × 19 cm",
    descripcionCorta: "3 niveles, diseño que eleva tus espacios.",
    caracteristicas: [
      "Diseño moderno, estructura sólida",
      "Multiusos: hogar, oficina o estudio",
      "Tableros Melamine Pelikano 18 mm",
      "Estructura metálica resistente",
    ],
    colores: [
      { id: "claro", nombre: "Color claro" },
      { id: "madera", nombre: "Color madera" },
    ],
    precio: 209.0,
    precioTachado: 260.0,
    imagen: "assets/images/productos/estante-multiespacios-76.jpg",
    // Carrusel: ficha del producto + fotos reales y detalles.
    imagenes: ["assets/images/productos/estante-multiespacios-76.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-3.jpg"],
  },
  {
    id: "mesa-noche",
    nombre: "Mesa de Noche",
    categorias: ["dormitorio"],
    medida: "45 × 60 × 36 cm",
    descripcionCorta: "El complemento perfecto para tu dormitorio.",
    caracteristicas: [
      "Diseño moderno, estructura sólida",
      "Multiusos, ideal para dormitorios",
      "Melamine Pelikano 18 mm",
      "Estructura metálica + malla electrosoldada",
      "Patas niveladoras antideslizantes",
    ],
    colores: [{ id: "amaderado", nombre: "Amaderado" }],
    precio: 189.0,
    precioTachado: 240.0,
    imagen: "assets/images/productos/mesa-noche.jpg",
    // Carrusel: ficha del producto + fotos reales y detalles.
    imagenes: ["assets/images/productos/mesa-noche.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-3.jpg"],
  },
  {
    id: "mesa-recibidora-sala",
    nombre: "Mesa Recibidora / Sala",
    categorias: ["sala"],
    medida: "90 × 85 × 30 cm",
    descripcionCorta: "Diseño industrial, práctico y versátil.",
    caracteristicas: [
      "Melamine Pelikano 18 mm",
      "Pata niveladora enroscable",
      "Estructura sólida con refuerzo",
      "Estructura metálica + malla electrosoldada",
      "Ideal para sala, dormitorio, oficina y estudio",
    ],
    colores: [{ id: "amaderado", nombre: "Amaderado" }],
    precio: 299.0,
    precioTachado: 380.0,
    imagen: "assets/images/productos/mesa-recibidora-sala.jpg",
    // Carrusel: ficha del producto + fotos reales y detalles.
    imagenes: ["assets/images/productos/mesa-recibidora-sala.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-recibidora-sala-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-recibidora-sala-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-recibidora-sala-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-recibidora-sala-ejemplo-4.jpg"],
  },
  {
    id: "mueble-auxiliar",
    nombre: "Mueble Auxiliar Multiespacios",
    categorias: ["sala"],
    medida: "70 × 45 × 40 cm",
    descripcionCorta: "Diseño industrial, práctico y versátil, sobre ruedas.",
    caracteristicas: [
      "Melamine Pelikano 18 mm",
      "Pata niveladora enroscable",
      "Estructura sólida con refuerzo",
      "Estructura metálica + malla electrosoldada",
      "Ideal para hogar y oficina",
    ],
    colores: [{ id: "amaderado", nombre: "Amaderado" }],
    precio: 259.0,
    precioTachado: 330.0,
    imagen: "assets/images/productos/mueble-auxiliar.jpg",
    // Carrusel: ficha del producto + fotos reales y detalles.
    imagenes: ["assets/images/productos/mueble-auxiliar.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-4.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-5.jpg"],
  },
];

// Etiquetas visibles para cada categoría (usadas en los filtros del catálogo)
const CATEGORIAS = []; // Filtros por ambiente desactivados

window.PRODUCTOS = PRODUCTOS;
window.CATEGORIAS = CATEGORIAS;
