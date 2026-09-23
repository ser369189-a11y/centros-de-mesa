# Landing Madrid Industrias — Catálogo + carrito (pedidos a WhatsApp)

Landing 100% estática (sin base de datos). Muestra un **catálogo de varios
productos** (repisas, estantes, mesas), permite armar un **carrito con más
de un producto** y, al confirmar, abre **WhatsApp de la tienda** con todo
el pedido ya escrito, listo para enviar.

---

## 1. Qué cambió respecto a la landing de "1 solo producto"

| | Landing de 1 producto | Esta landing |
|---|---|---|
| Productos | Uno solo, precio fijo en `config.js` | Catálogo de varios, cada uno en `js/productos.js` |
| Selección | Un botón "Comprar" | Grid con filtros por ambiente + modal de detalle/color |
| Pedido | Siempre 1 unidad de 1 producto | Carrito: varios productos, colores y cantidades en el mismo pedido |
| Checkout | Resumen de un solo producto | Resumen con la lista completa del carrito |

---

## 2. Lo que tienes que editar para tus datos reales

### `js/productos.js` — el catálogo
Cada producto es un objeto con: `id`, `nombre`, `categorias`, `medida`,
`descripcionCorta`, `caracteristicas`, `colores`, `precio`, `precioTachado`
e `imagen`. Para agregar o quitar un producto, agrega o quita un objeto de
este array — el catálogo, el modal de detalle y el carrito se generan solos.

⚠️ **Los precios actuales son de referencia.** Ajusta `precio` y
`precioTachado` de cada producto a tus precios reales antes de publicar.

### `js/config.js` — datos generales de la tienda
```js
WHATSAPP_NUMERO: "51923757221",   // ← número de la TIENDA (con 51 + número, sin +, sin espacios)
TIENDA_NOMBRE:   "Madrid Industrias",
COSTO_ENVIO_LIMA: 0.00,
ABRIR_WHATSAPP_AUTOMATICO: true,
```

### `assets/images/productos/`
Ahí están las 8 fotos de producto (una por mueble, tal como las
compartiste). Si consigues fotos limpias adicionales (sin texto
superpuesto) puedes reemplazarlas manteniendo el mismo nombre de archivo,
o agregar más imágenes y referenciarlas en `js/productos.js`.

---

## 3. Cómo funciona el flujo de compra

1. El cliente navega el catálogo (con filtro por ambiente: Cocina, Baño,
   Sala, Dormitorio, Oficina) y toca un producto.
2. En el modal elige color (si aplica) y cantidad, y lo agrega al pedido.
3. Puede seguir agregando más productos — el botón flotante 🛒 muestra
   cuántas unidades lleva.
4. Al tocar "Continuar pedido", completa el formulario (Lima o Provincia,
   igual que antes).
5. Se arma un mensaje de WhatsApp con **todos los productos del carrito**
   (nombre, color, cantidad, subtotal) + los datos de entrega + el total.
6. Se abre WhatsApp de la tienda con el mensaje ya escrito. El cliente solo
   tiene que presionar "Enviar".
7. El carrito se vacía automáticamente después de confirmar el pedido.

> Igual que antes: ningún sitio web puede enviar el mensaje de WhatsApp
> solo — el cliente siempre tiene que tocar "Enviar" desde su WhatsApp.

---

## 4. Ver los pedidos guardados en el navegador

Los respaldos son locales al navegador del cliente. En tu propio equipo,
abriendo la consola del navegador (F12):

```js
Pedidos.leerPedidosGuardados()   // lista de pedidos
Pedidos.descargarCSV()           // descarga pedidos.csv
```

---

## 5. Desplegar

Es un sitio 100% estático: sirve cualquier hosting.

- **Render**: New → Static Site → conecta el repo → Publish directory `./`
  (o usa `render.yaml`).
- **Netlify / Vercel / GitHub Pages**: arrastra la carpeta o conecta el
  repo. Sin build.
