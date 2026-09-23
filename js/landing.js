/**
 * ============================================================
 * LANDING — lógica principal de la página (catálogo)
 * ============================================================
 * La galería/carrusel de un solo producto y la barra fija con
 * un solo precio se reemplazaron por el catálogo (js/catalogo.js)
 * y el carrito (js/carrito.js). Este archivo solo maneja lo que
 * es transversal a toda la página.
 * ============================================================
 */
document.addEventListener("DOMContentLoaded", function () {

  Pixels.inicializar();
  Pedidos.registrarEvento("page_view");

  Pixels.dispararEvento("ViewContent", "ViewContent", {
    content_id: "catalogo-madrid-industrias",
    content_name: CONFIG.TIENDA_NOMBRE,
    currency: "PEN",
  });

  // ----------------------------------------------------------
  // BOTONES QUE ABREN EL CHECKOUT (ej: "Continuar pedido" del carrito)
  // ----------------------------------------------------------
  document.querySelectorAll("[data-abrir-checkout]").forEach(function (boton) {
    boton.addEventListener("click", function () {
      Pedidos.registrarEvento("click_continuar_pedido");
      Pixels.dispararEvento("InitiateCheckout", "InitiateCheckout", {
        content_id: "checkout",
        value: window.Carrito ? Carrito.calcularSubtotal() : 0,
        currency: "PEN",
      });
      if (window.CheckoutModal) {
        window.CheckoutModal.abrir();
      }
    });
  });

  // ----------------------------------------------------------
  // BOTÓN FLOTANTE DE WHATSAPP (contacto directo, fuera del checkout)
  // ----------------------------------------------------------
  const whatsappFlotante = document.getElementById("whatsapp-flotante");
  if (whatsappFlotante) {
    whatsappFlotante.addEventListener("click", function () {
      Pedidos.registrarEvento("click_whatsapp_flotante");
    });
  }

});
