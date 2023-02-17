const contenedor_servicios = document.getElementById("contenedor_servicios")


const servicio = [
    { id: 10, nombre: "Psicología Organizacional y del Trabajo", imagen: "./S_1",  precio: 4000, cantidad: 1 },
    { id: 11, nombre: "Psicología y Educación", imagen: "./imagenes/P_2_Agenda espacio.png", precio: 350, cantidad: 1 },
    { id: 12, nombre: "Psicología Social", imagen: "./imagenes/P_2_Agenda espacio.png", precio: 350, cantidad: 1 },
    { id: 13, nombre: "Psicología Clínica", imagen: "./imagenes/P_2_Agenda espacio.png", precio: 350, cantidad: 1 },
    { id: 14, nombre: "Psicoterapia", imagen: "./imagenes/P_2_Agenda espacio.png", precio: 350, cantidad: 1 },
]



servicio.forEach (item => {
    contenedor_servicios.innerHTML += 
    `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div class="flip-card-back">
                <h3 class>servicio ${item.nombre}</h3>
                <p>Precio: $${item.precio}</p>
                <button id="servicio${item.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
})