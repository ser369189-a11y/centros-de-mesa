/**
 * ============================================================
 * CONFIGURACIÓN DEL PROYECTO — Madrid Industrias
 * ============================================================
 * Esta landing NO usa base de datos (no hay Supabase).
 * Al confirmar el pedido:
 *   1. El pedido se guarda localmente en el navegador (respaldo).
 *   2. Se abre WhatsApp de la TIENDA con TODOS los datos del
 *      cliente y de los productos del carrito ya escritos en
 *      el mensaje. El cliente decide si lo envía o no — ninguna
 *      web puede enviarlo sola.
 *
 * Los PRODUCTOS (nombre, medidas, colores, precios, imágenes)
 * ya NO viven aquí: están en js/productos.js. Este archivo solo
 * tiene los datos generales de la tienda.
 * ============================================================
 */

const CONFIG = {

  // ----------------------------------------------------------
  // 1. WHATSAPP DE LA TIENDA
  // ----------------------------------------------------------
  // Número donde llegarán los pedidos.
  // Formato: código de país + número, SIN "+", espacios ni guiones.
  WHATSAPP_NUMERO: "51923757221",

  // Nombre de la tienda (aparece en el mensaje de WhatsApp)
  TIENDA_NOMBRE: "Madrid Industrias",

  // ----------------------------------------------------------
  // 2. COSTO DE DELIVERY (solo Lima)
  // ----------------------------------------------------------
  // No se suma ningún costo extra en Lima (se paga contraentrega,
  // junto con el producto). A Provincia tampoco se suma nada aquí:
  // el flete va vía Shalom con un pequeño adelanto por WhatsApp y
  // la diferencia se paga al recoger.
  COSTO_ENVIO_LIMA: 0.00,

  // ----------------------------------------------------------
  // 3. OPCIONES DEL CHECKOUT
  // ----------------------------------------------------------
  // Abrir WhatsApp automáticamente al confirmar el pedido.
  // El cliente siempre tiene que tocar "enviar" en WhatsApp: eso
  // no se puede saltar. Esta opción solo controla si el chat se
  // le abre solo o si tiene que tocar el botón verde de la
  // pantalla de éxito.
  ABRIR_WHATSAPP_AUTOMATICO: true,

  // ----------------------------------------------------------
  // 4. ANALYTICS / TRACKING (opcional)
  // ----------------------------------------------------------
  // Déjalos vacíos ("") si todavía no los usas. Los de la landing
  // anterior (Elevador de Drywall) NO se copiaron aquí a propósito:
  // son tiendas distintas y mezclar los pixeles ensuciaría tus datos.
  META_PIXEL_ID: "",
  TIKTOK_PIXEL_ID: "",

};
