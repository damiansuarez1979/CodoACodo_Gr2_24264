document.addEventListener("DOMContentLoaded", function() {
    let original = document.querySelector("#Desarrolladores");
    let contenedor = document.querySelector("#Contenedor");

    let botonAgregar = document.querySelector("#Agregar");
    let botonQuitar = document.querySelector("#Quitar");

    let referencia = original.cloneNode(true);
    original.remove(); 

  
    let currentIndex = 0;
    let integrantesData = [];

    // Cargar los datos del JSON al cargar la página
    fetch("https://github.com/damiansuarez1979/CodoACodo_Gr2_24264/blob/main/data.json")
        .then(response => response.json())
        .then(data => {
            // Guardar los datos recibidos
            desarroladoresData = data.desarroladores;
            console.log("Datos recibidos:", desarroladoresData); // Ver los datos completos
        })
        .catch(error => console.log("Algo salio mal " + error));

    function AgregarArticulo() {
        // Verificar que haya más desarroladores por agregar
        if (currentIndex < desarroladoresData.length) {
            let desarrolador = desarroladoresData[currentIndex];

            console.log("Nombre:", desarrolador.nombre);
            console.log("Apellido:", desarrolador.apellido);
            console.log("Foto Perfil:", desarrolador.foto_perfil);

            let nuevaPersona = referencia.cloneNode(true);
            nuevaPersona.querySelector("img").src = desarrolador.foto_perfil;
            nuevaPersona.querySelector("img").alt = "Foto Desarrollador";
            nuevaPersona.querySelector(".nombre").innerHTML = desarrolado.nombre + " " + desarrolador.apellido;
            nuevaPersona.querySelector(".edad").innerHTML = desarrolador.edad + " años";
            nuevaPersona.querySelector(".residencia").innerHTML = integrante.residencia;

            contenedor.appendChild(nuevaPersona);

            // Incrementar el índice del desarrollador actual
            currentIndex++;
        } else {
            console.log("No hay más Desarrolladores para agregar.");
        }
    }

    function QuitarArticulo() {
        if (contenedor.childElementCount > 0) {
            contenedor.removeChild(contenedor.lastChild);
            // Decrementar el índice del desarrollador actual para poder agregarlo de nuevo si es necesario
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
    }

    // Eventos
    botonAgregar.addEventListener("click", function() {
        AgregarArticulo();
    });

    botonQuitar.addEventListener("click", function() {
        QuitarArticulo();
    });
});