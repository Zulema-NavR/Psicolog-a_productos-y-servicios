const contenedor_productos = document.getElementById("contenedor_productos");
const contadorCarrito = document.getElementById("contadorCarrito");
const carritoOffcanvas = document.getElementById("carritoOffcanvas");
const contenedorContadorCarrito = document.getElementById("contenedorContadorCarrito");
const precioTotalCarrito = document.getElementById("precioTotalCarrito");
const terminarCompra = document.getElementById("terminarCompra");
const contador = document.createElement("p");

const carritoDeCompras = [];

const libretas = [
    { id: 1, nombre: "Agenda Naturaleza", imagen: "./imagenes/P_1_Agenda flores.png", precio: 350, cantidad: 1 },
    { id: 2, nombre: "Agenda Espacio", imagen: "./imagenes/P_2_Agenda espacio.png", precio: 350, cantidad: 1 },
    { id: 3, nombre: "Agenda Minimalista", imagen: "./imagenes/P_3_Agenda minimalista.png", precio: 350, cantidad: 1 },
    { id: 4, nombre: "Registro Terapia Naturaleza", imagen: "./imagenes/P_4_Registro Terapia Floresa.png", precio: 300, cantidad: 1 },
    { id: 5, nombre: "Registro Terapia Espacio", imagen: "./imagenes/P_5_Registro Terapia Espacio.png", precio: 300, cantidad: 1 },
    { id: 6, nombre: "Registro Terapia Minimalista", imagen: "./imagenes/P_6_Registro Terapia Minimalista.png", precio: 300, cantidad: 1 },
    { id: 7, nombre: "Regulación Emocional niños", imagen: "./imagenes/P_7_Regulación emocional niños.png", precio: 280, cantidad: 1 },
    { id: 8, nombre: "Regulación Emocional adultos", imagen: "./imagenes/P_8_Regulación emocional Adultos.png", precio: 280, cantidad: 1 },
    { id: 9, nombre: "Regulación Emocional adolescentes", imagen: "./imagenes/P_9_Regulación emocional Adolescentes.png", precio: 280, cantidad: 1 },
]

libretas.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML +=
        `
    <div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            <p>Precio: $ ${item.precio}</p>
            <button id="libreta${item.id}">Agregar al carrito</button>
        </div>
    </div>
    `
    contenedor_productos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`libreta${item.id}`);
    botonAgregarCarrito.addEventListener("click", () => {
        agregarAlCarrito(item.id, carritoDeCompras);
        agregarContadorCarrito();
        mostrarCarrito();
    })
})

const agregarAlCarrito = (productoSeleccionado, carrito) => {
    const existeProducto = carritoDeCompras.some(libreta => libreta.id === productoSeleccionado);
    const productoElegido = libretas.find(libreta => libreta.id === productoSeleccionado);
    if (existeProducto) {
        let precioInicial = productoElegido.precio;
        productoElegido.cantidad++;
        productoElegido.nuevoPrecio = productoElegido.cantidad * precioInicial;
    } else {
        carrito.push(productoElegido);
        console.log("Se agregó al carrito");
        console.log(carrito);
    }
}

const agregarContadorCarrito = () => {
    if (carritoDeCompras.length !== 0) {
        contenedorContadorCarrito.appendChild(contador);
        contador.textContent = carritoDeCompras.length;
        contador.classList.add("contadorCarrito");
    } else {
        contador.textContent = "";
        contador.classList.remove("contadorCarrito");
    }
}

const mostrarCarrito = () => {
    carritoOffcanvas.innerHTML = "";
    carritoDeCompras.forEach(producto => {
        const tr = document.createElement("tr");
        tr.classList.add("tablaProductos");
        tr.innerHTML +=
            `
        <td>
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </td>
            <td class="infoProducto">Libreta ${producto.nombre}</td>
            <td class="infoProducto">${producto.cantidad}</td>
            <td class="infoProducto">${producto.precio}</td>
            <td class="infoProducto eliminarProducto">
                <iconify-icon icon="bytesize:trash" class="deleteIconify" id="eliminar${producto.id}"></iconify-icon>
            </td>
        `
        carritoOffcanvas.appendChild(tr);

        const botonEliminar = document.getElementById(`eliminar${producto.id}`);
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(producto.id)
        })
    })
    const totalCarrito = carritoDeCompras.reduce((acumulador, productos) => acumulador + productos.precio, 0);
    precioTotalCarrito.innerText = `Precio Total: $${totalCarrito}`;
}


const eliminarProducto = (productoClickeado) => {
    const productoEliminado = carritoDeCompras.find(libreta => libreta.id === productoClickeado);
    const index = carritoDeCompras.indexOf(productoEliminado);
    carritoDeCompras.splice(index, 1);
    agregarContadorCarrito();
    mostrarCarrito();
}

const vaciarCarrito = () => {
    carritoDeCompras.innerHTML = [];
    carritoOffcanvas.innerHTML = [];
    contador.textContent = "";
    contador.classList.remove ("contadorCarrito");
}

terminarCompra.addEventListener("click", () => {
    alert ("¡Compra realizada exitosamente!");
    carritoDeCompras.innerText="";
    carritoOffcanvas.innerText="";
})