/**
 * ============================================================
 * CATÁLOGO — grid, filtros, modal de producto y carrito drawer
 * ============================================================
 */
document.addEventListener("DOMContentLoaded", function () {
  function $(selector, contexto) {
    return (contexto || document).querySelector(selector);
  }
  function $all(selector, contexto) {
    return Array.from((contexto || document).querySelectorAll(selector));
  }
  function formatearMoneda(numero) {
    return "S/ " + Number(numero).toFixed(2);
  }
  function calcularDescuentoPct(precio, precioTachado) {
    if (!precioTachado || precioTachado <= precio) return null;
    return Math.round(((precioTachado - precio) / precioTachado) * 100);
  }

  let filtroActivo = "todos";
  let productoAbiertoId = null;
  let colorSeleccionadoId = null;
  let cantidadSeleccionada = 1;

  // ----------------------------------------------------------
  // FILTROS
  // ----------------------------------------------------------
  function renderizarFiltros() {
    const cont = $("#catalogo-filtros");
    if (!cont) return;
    cont.innerHTML = "";
    (window.CATEGORIAS || []).forEach(function (cat) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "catalogo__filtro" + (cat.id === filtroActivo ? " activo" : "");
      btn.textContent = cat.nombre;
      btn.setAttribute("data-filtro", cat.id);
      btn.addEventListener("click", function () {
        filtroActivo = cat.id;
        renderizarFiltros();
        renderizarGrid();
      });
      cont.appendChild(btn);
    });
  }

  // ----------------------------------------------------------
  // GRID DE PRODUCTOS
  // ----------------------------------------------------------
  function productosFiltrados() {
    const lista = window.PRODUCTOS || [];
    if (filtroActivo === "todos") return lista;
    return lista.filter(function (p) {
      return p.categorias.indexOf(filtroActivo) !== -1;
    });
  }

  function renderizarGrid() {
    const cont = $("#catalogo-grid");
    if (!cont) return;
    cont.innerHTML = "";

    productosFiltrados().forEach(function (p) {
      const descuento = calcularDescuentoPct(p.precio, p.precioTachado);

      const card = document.createElement("article");
      card.className = "catalogo__card";
      card.setAttribute("data-producto-id", p.id);

      card.innerHTML =
        '<div class="catalogo__card-img-wrap">' +
          '<img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy" />' +
          (descuento ? '<span class="catalogo__card-badge">-' + descuento + '%</span>' : "") +
        '</div>' +
        '<div class="catalogo__card-cuerpo">' +
          '<h3 class="catalogo__card-nombre">' + p.nombre + '</h3>' +
          '<div class="catalogo__card-medida">📐 ' + p.medida + '</div>' +
          '<p class="catalogo__card-desc">' + p.descripcionCorta + '</p>' +
          '<div class="catalogo__card-precios">' +
            '<span class="catalogo__card-precio">' + formatearMoneda(p.precio) + '</span>' +
            (p.precioTachado ? '<span class="catalogo__card-precio-tachado">' + formatearMoneda(p.precioTachado) + '</span>' : "") +
          '</div>' +
          '<button type="button" class="catalogo__card-btn" data-ver-producto="' + p.id + '">Ver detalle</button>' +
        '</div>';

      cont.appendChild(card);
    });

    $all("[data-ver-producto]", cont).forEach(function (btn) {
      btn.addEventListener("click", function () {
        abrirModalProducto(btn.getAttribute("data-ver-producto"));
      });
    });

    // Toda la tarjeta es clickeable, no solo el botón
    $all(".catalogo__card", cont).forEach(function (card) {
      card.addEventListener("click", function (evento) {
        if (evento.target.closest("[data-ver-producto]")) return;
        abrirModalProducto(card.getAttribute("data-producto-id"));
      });
    });
  }

  // ----------------------------------------------------------
  // MODAL DE PRODUCTO (detalle + selector de color + cantidad)
  // ----------------------------------------------------------
  function abrirModalProducto(productoId) {
    const producto = (window.PRODUCTOS || []).find(function (p) {
      return p.id === productoId;
    });
    if (!producto) return;

    productoAbiertoId = productoId;
    colorSeleccionadoId = producto.colores[0] ? producto.colores[0].id : null;
    cantidadSeleccionada = 1;

    $("#producto-modal-img").src = producto.imagen;
    $("#producto-modal-img").alt = producto.nombre;
    $("#producto-modal-nombre").textContent = producto.nombre;
    $("#producto-modal-medida").textContent = "📐 " + producto.medida;
    $("#producto-modal-precio").textContent = formatearMoneda(producto.precio);

    const tachadoEl = $("#producto-modal-precio-tachado");
    const descuento = calcularDescuentoPct(producto.precio, producto.precioTachado);
    if (producto.precioTachado && descuento) {
      tachadoEl.textContent = formatearMoneda(producto.precioTachado);
      tachadoEl.style.display = "";
      $("#producto-modal-descuento-badge").textContent = "-" + descuento + "%";
      $("#producto-modal-descuento-badge").style.display = "";
    } else {
      tachadoEl.style.display = "none";
      $("#producto-modal-descuento-badge").style.display = "none";
    }

    // Características
    const listaCaract = $("#producto-modal-caracteristicas");
    listaCaract.innerHTML = "";
    (producto.caracteristicas || []).forEach(function (texto) {
      const li = document.createElement("li");
      li.textContent = texto;
      listaCaract.appendChild(li);
    });

    // Colores
    const contColores = $("#producto-modal-colores");
    const bloqueColores = $("#producto-modal-colores-bloque");
    if (producto.colores && producto.colores.length > 1) {
      bloqueColores.style.display = "";
      contColores.innerHTML = "";
      producto.colores.forEach(function (color) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "producto-modal__color" + (color.id === colorSeleccionadoId ? " activo" : "");
        btn.textContent = color.nombre;
        btn.setAttribute("data-color-id", color.id);
        btn.addEventListener("click", function () {
          colorSeleccionadoId = color.id;
          $all(".producto-modal__color", contColores).forEach(function (b) {
            b.classList.toggle("activo", b === btn);
          });
        });
        contColores.appendChild(btn);
      });
    } else {
      bloqueColores.style.display = "none";
    }

    $("#producto-modal-cantidad-valor").textContent = cantidadSeleccionada;

    const overlay = $("#modal-producto-overlay");
    overlay.classList.add("abierto");
    document.body.style.overflow = "hidden";
  }

  function cerrarModalProducto() {
    $("#modal-producto-overlay").classList.remove("abierto");
    document.body.style.overflow = "";
  }

  function inicializarModalProducto() {
    $all("[data-cerrar-producto]").forEach(function (el) {
      el.addEventListener("click", cerrarModalProducto);
    });
    $("#modal-producto-overlay").addEventListener("click", function (evento) {
      if (evento.target === evento.currentTarget) cerrarModalProducto();
    });

    $("#btn-cantidad-menos").addEventListener("click", function () {
      cantidadSeleccionada = Math.max(1, cantidadSeleccionada - 1);
      $("#producto-modal-cantidad-valor").textContent = cantidadSeleccionada;
    });
    $("#btn-cantidad-mas").addEventListener("click", function () {
      cantidadSeleccionada = Math.min(20, cantidadSeleccionada + 1);
      $("#producto-modal-cantidad-valor").textContent = cantidadSeleccionada;
    });

    $("#btn-agregar-carrito").addEventListener("click", function () {
      if (!productoAbiertoId) return;
      Carrito.agregar(productoAbiertoId, colorSeleccionadoId, cantidadSeleccionada);
      Pedidos.registrarEvento("agregar_al_carrito", {
        producto: productoAbiertoId,
        color: colorSeleccionadoId,
        cantidad: cantidadSeleccionada,
      });
      if (window.Pixels) {
        Pixels.dispararEvento("AddToCart", "AddToCart", {
          content_id: productoAbiertoId,
          quantity: cantidadSeleccionada,
          currency: "PEN",
        });
      }
      cerrarModalProducto();
      abrirCarrito();
    });
  }

  // ----------------------------------------------------------
  // CARRITO (drawer lateral)
  // ----------------------------------------------------------
  function renderizarCarrito() {
    const items = Carrito.obtenerItems();
    const lista = $("#carrito-lista");
    const vacio = $("#carrito-vacio");
    const footer = $("#carrito-footer");

    lista.innerHTML = "";

    if (items.length === 0) {
      vacio.style.display = "";
      footer.style.display = "none";
    } else {
      vacio.style.display = "none";
      footer.style.display = "";

      items.forEach(function (item) {
        const fila = document.createElement("div");
        fila.className = "carrito-item";
        fila.innerHTML =
          '<img src="' + item.imagen + '" alt="' + item.nombre + '" class="carrito-item__img" />' +
          '<div class="carrito-item__info">' +
            '<div class="carrito-item__nombre">' + item.nombre + '</div>' +
            (item.colorNombre ? '<div class="carrito-item__color">Color: ' + item.colorNombre + '</div>' : "") +
            '<div class="carrito-item__precio">' + formatearMoneda(item.precio) + '</div>' +
            '<div class="carrito-item__cantidad">' +
              '<button type="button" data-carrito-menos>−</button>' +
              '<span>' + item.cantidad + '</span>' +
              '<button type="button" data-carrito-mas>+</button>' +
            '</div>' +
          '</div>' +
          '<button type="button" class="carrito-item__quitar" data-carrito-quitar aria-label="Quitar producto">✕</button>';

        fila.querySelector("[data-carrito-menos]").addEventListener("click", function () {
          Carrito.actualizarCantidad(item.productoId, item.colorId, item.cantidad - 1);
        });
        fila.querySelector("[data-carrito-mas]").addEventListener("click", function () {
          Carrito.actualizarCantidad(item.productoId, item.colorId, item.cantidad + 1);
        });
        fila.querySelector("[data-carrito-quitar]").addEventListener("click", function () {
          Carrito.quitar(item.productoId, item.colorId);
        });

        lista.appendChild(fila);
      });
    }

    $("#carrito-subtotal-valor").textContent = formatearMoneda(Carrito.calcularSubtotal());

    // Badge del botón flotante y de la barra
    const unidades = Carrito.contarUnidades();
    $all("[data-carrito-contador]").forEach(function (el) {
      el.textContent = unidades;
    });
    $all("[data-carrito-badge-wrap]").forEach(function (el) {
      el.style.display = unidades > 0 ? "" : "none";
    });
  }

  function abrirCarrito() {
    $("#carrito-overlay").classList.add("abierto");
    document.body.style.overflow = "hidden";
  }
  function cerrarCarrito() {
    $("#carrito-overlay").classList.remove("abierto");
    document.body.style.overflow = "";
  }

  function inicializarCarritoUI() {
    $all("[data-abrir-carrito]").forEach(function (el) {
      el.addEventListener("click", abrirCarrito);
    });
    $all("[data-cerrar-carrito]").forEach(function (el) {
      el.addEventListener("click", cerrarCarrito);
    });
    $("#carrito-overlay").addEventListener("click", function (evento) {
      if (evento.target === evento.currentTarget) cerrarCarrito();
    });

    Carrito.alCambiar(renderizarCarrito);
    renderizarCarrito();
  }

  // ----------------------------------------------------------
  // INIT
  // ----------------------------------------------------------
  renderizarFiltros();
  renderizarGrid();
  inicializarModalProducto();
  inicializarCarritoUI();
});
