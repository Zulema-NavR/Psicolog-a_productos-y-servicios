const contenedor_servicios = document.getElementById("contenedor_servicios")


const servicios = [ 
    {id:10, nombre: "➱Consultoría, ➱Desarrollo Organizacional, ➱Recursos Humanos.", imagen:"./imagenes/S_1.png", precio: 5000, cantidad: 1},
    {id:11, nombre: "➱Orientación Vocacional, ➱Metodología de la Enseñanza, ➱Problemas de aprendizaje.", imagen:"./imagenes/S_2.png", precio: 3800, cantidad: 1},
    {id:12, nombre: "➱Gestión de Proyectos Sociales, ➱Investigación, ➱Publicaciones.", imagen:"./imagenes/S_3.png", precio: 4000, cantidad: 1},
    {id:13, nombre: "➱Atención Trastornos Mentales, ➱Manejo de estrés y ansiedad, ➱Diagnósticos.", imagen:"./imagenes/S_4.png", precio: 3800, cantidad: 1},
    {id:14, nombre: "En Psicoterapia➱Individual, ➱Pareja, ➱Familiar, ➱Grupo.", imagen:"./imagenes/S_5.png", precio: 400, cantidad: 1}

]

servicios.forEach (item => {
    contenedor_servicios.innerHTML += 
    `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div class="flip-card-back">
                <h3 class="tituloCard">Servicios: ${item.nombre}</h3>
                <p>PRECIO: $${item.precio}</p>
                <button id="servicios${item.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
})