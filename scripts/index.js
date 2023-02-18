const contenedor_productos = document.getElementById("contenedor_productos")


const producto = [
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

producto.forEach (item => {
    contenedor_productos.innerHTML +=
    `
    <div class="card" style="width: 18rem;">
    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h3 class="card-title">${item.nombre}</h3>
            <p>Precio: $ ${item.precio}</p>
            <button class="btn btn-primary" id="producto${item.id}">Agregar al carrito</button>
        </div>
</div>
    `
})

const agregarAlcarrito = (productoSeleccionado, carrito) => {
    carritoDecompras.push (productoSeleccionado, carrito)
    console.log ("Se agregó al carrito". carrito);
}

agregarAlCarrito (producto , carritoDeCompras)