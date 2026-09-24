/**
 * ============================================================
 * CATÁLOGO DE PRODUCTOS — Madrid Industrias
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
    id: "repisa-cocina",
    nombre: "Repisa Multiespacio para Cocina",
    categorias: ["cocina"],
    medida: "120 × 60 × 30 cm",
    descripcionCorta: "3 niveles para organizar y decorar tu cocina.",
    caracteristicas: [
      "3 niveles de almacenamiento",
      "Estructura metálica + malla electrosoldada",
      "Tableros Melamine 18 mm de alta durabilidad",
      "Semi armado, fácil y rápido de instalar",
      "Ideal para cocina, sala, oficina y más",
    ],
    colores: [
      { id: "actues", nombre: "Actués (Roble claro)" },
      { id: "amaderado", nombre: "Amaderado" },
    ],
    precio: 249.0,
    precioTachado: 320.0,
    imagen: "assets/images/productos/repisa-cocina-multiespacio.jpg",
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/repisa-cocina-multiespacio.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-cocina-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-cocina-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-cocina-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-cocina-ejemplo-4.jpg"],
  },
  {
    id: "repisa-bano-3niveles",
    nombre: "Repisa Multiespacios para Baño",
    categorias: ["bano"],
    medida: "60 × 57 × 18 cm",
    descripcionCorta: "3 niveles, estilo industrial, ideal para baño y más.",
    caracteristicas: [
      "Estructura metálica de alta resistencia",
      "Malla electrosoldada, diseño moderno",
      "Multiespacios: orden y estilo en 3 niveles",
      "Fácil instalación",
      "Ideal para baño, cocina, sala y más",
    ],
    colores: [
      { id: "amaderado-claro", nombre: "Amaderado claro" },
      { id: "amaderado", nombre: "Amaderado" },
    ],
    precio: 179.0,
    precioTachado: 230.0,
    imagen: "assets/images/productos/repisa-bano-3niveles.jpg",
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/repisa-bano-3niveles.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-3niveles-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-3niveles-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-3niveles-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-3niveles-ejemplo-4.jpg"],
  },
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
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/repisa-bano-toallero.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/repisa-bano-toallero-ejemplo-4.jpg"],
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
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/estante-multiespacios-76.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-multiespacios-76-ejemplo-4.jpg"],
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
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/mesa-noche.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/mesa-noche-ejemplo-4.jpg"],
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
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
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
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/mueble-auxiliar.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/mueble-auxiliar-ejemplo-4.jpg"],
  },
  {
    id: "estante-alto-150",
    nombre: "Estante Multiespacios Alto",
    categorias: ["sala", "oficina", "dormitorio"],
    medida: "50 × 30 × 1.50 m",
    descripcionCorta: "6 niveles de almacenamiento, diseño industrial moderno.",
    caracteristicas: [
      "Melamine Pelikano 18 mm, mayor resistencia y durabilidad",
      "Semiarmable, fácil de armar",
      "Estructura sólida con refuerzo en cada nivel",
      "Estructura metálica + malla electrosoldada",
      "Ideal para sala, dormitorio, oficina, cocina y lavandería",
    ],
    colores: [{ id: "amaderado", nombre: "Amaderado" }],
    precio: 349.0,
    precioTachado: 430.0,
    imagen: "assets/images/productos/estante-alto-150.jpg",
    // Imágenes de ejemplo del carrusel: reemplázalas por tus fotos reales cuando quieras.
    imagenes: ["assets/images/productos/estante-alto-150.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-alto-150-ejemplo-1.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-alto-150-ejemplo-2.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-alto-150-ejemplo-3.jpg",
      "assets/images/productos/ejemplos-carrusel/estante-alto-150-ejemplo-4.jpg"],
  },
];

// Etiquetas visibles para cada categoría (usadas en los filtros del catálogo)
const CATEGORIAS = [
  { id: "todos", nombre: "Todos" },
  { id: "cocina", nombre: "Cocina" },
  { id: "bano", nombre: "Baño" },
  { id: "sala", nombre: "Sala" },
  { id: "dormitorio", nombre: "Dormitorio" },
  { id: "oficina", nombre: "Oficina" },
];

window.PRODUCTOS = PRODUCTOS;
window.CATEGORIAS = CATEGORIAS;
