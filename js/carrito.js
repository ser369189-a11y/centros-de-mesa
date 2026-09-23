/**
 * ============================================================
 * CARRITO DE COMPRAS — Madrid Industrias
 * ============================================================
 * Carrito simple: el cliente puede agregar varios productos
 * (con su color elegido) al mismo pedido antes de pasar al
 * checkout. Todo vive en localStorage del navegador del
 * cliente (no hay backend ni base de datos).
 * ============================================================
 */

const Carrito = (function () {
  const CLAVE_STORAGE = "carrito_madrid_industrias";

  let items = cargarDeStorage();
  let listeners = [];

  function cargarDeStorage() {
    try {
      const crudo = localStorage.getItem(CLAVE_STORAGE);
      return crudo ? JSON.parse(crudo) : [];
    } catch (error) {
      return [];
    }
  }

  function guardarEnStorage() {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(items));
    } catch (error) {
      console.warn("[Carrito] No se pudo guardar el carrito:", error);
    }
    notificarCambio();
  }

  function notificarCambio() {
    listeners.forEach(function (fn) {
      fn(items.slice());
    });
  }

  // Se llama cada vez que el carrito cambia (para refrescar badge, drawer, etc.)
  function alCambiar(fn) {
    listeners.push(fn);
  }

  function claveItem(productoId, colorId) {
    return productoId + "::" + (colorId || "default");
  }

  function buscarProducto(productoId) {
    return (window.PRODUCTOS || []).find(function (p) {
      return p.id === productoId;
    });
  }

  // ----------------------------------------------------------
  // Agregar un producto (con su color elegido) al carrito.
  // Si ya existe la misma combinación producto+color, suma la
  // cantidad en vez de crear una línea nueva.
  // ----------------------------------------------------------
  function agregar(productoId, colorId, cantidad) {
    const producto = buscarProducto(productoId);
    if (!producto) return null;

    cantidad = Math.max(1, parseInt(cantidad, 10) || 1);
    const color = (producto.colores || []).find(function (c) {
      return c.id === colorId;
    });

    const key = claveItem(productoId, colorId);
    const existente = items.find(function (it) {
      return claveItem(it.productoId, it.colorId) === key;
    });

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      items.push({
        productoId: productoId,
        nombre: producto.nombre,
        colorId: colorId || null,
        colorNombre: color ? color.nombre : null,
        precio: producto.precio,
        imagen: producto.imagen,
        medida: producto.medida,
        cantidad: cantidad,
      });
    }

    guardarEnStorage();
    return items;
  }

  function actualizarCantidad(productoId, colorId, cantidad) {
    const key = claveItem(productoId, colorId);
    const item = items.find(function (it) {
      return claveItem(it.productoId, it.colorId) === key;
    });
    if (!item) return;

    cantidad = parseInt(cantidad, 10) || 1;
    if (cantidad <= 0) {
      quitar(productoId, colorId);
      return;
    }
    item.cantidad = cantidad;
    guardarEnStorage();
  }

  function quitar(productoId, colorId) {
    const key = claveItem(productoId, colorId);
    items = items.filter(function (it) {
      return claveItem(it.productoId, it.colorId) !== key;
    });
    guardarEnStorage();
  }

  function vaciar() {
    items = [];
    guardarEnStorage();
  }

  function obtenerItems() {
    return items.slice();
  }

  function contarUnidades() {
    return items.reduce(function (total, it) {
      return total + it.cantidad;
    }, 0);
  }

  function calcularSubtotal() {
    return items.reduce(function (total, it) {
      return total + it.precio * it.cantidad;
    }, 0);
  }

  function estaVacio() {
    return items.length === 0;
  }

  return {
    agregar: agregar,
    actualizarCantidad: actualizarCantidad,
    quitar: quitar,
    vaciar: vaciar,
    obtenerItems: obtenerItems,
    contarUnidades: contarUnidades,
    calcularSubtotal: calcularSubtotal,
    estaVacio: estaVacio,
    alCambiar: alCambiar,
  };
})();

window.Carrito = Carrito;
