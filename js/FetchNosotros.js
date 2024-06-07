document.addEventListener("DOMContentLoaded", function() {
    let original = document.querySelector("#Desarrolladores");
    let contenedor = document.querySelector("#Contenedor");

    let botonAgregar = document.querySelector("#Agregar");
    let botonQuitar = document.querySelector("#Quitar");

    let referencia = original.cloneNode(true);
    original.remove(); 

  
    let currentIndex = 0;
    let desarroladoresData = [];

     
 
    fetch("https://raw.githubusercontent.com/damiansuarez1979/CodoACodo_Gr2_24264/main/data.json")
        .then(response => response.json())
        .then(data => {
            if (data.desarrolladores && Array.isArray(data.desarrolladores)) {
                desarrolladoresData = data.desarrolladores;
           
            }
           else {
            console.log("Datos recibidos:", desarroladoresData); 
           
           }    
        })
        
        
            .catch(error => {
                console.log("Algo salió mal: " + error);
            });

    
    function AgregarArticulo() {
        if (Array.isArray(desarrolladoresData) && desarrolladoresData.length > 0 && currentIndex < desarrolladoresData.length) {
            let desarrollador = desarrolladoresData[currentIndex];

            console.log("Nombre:", desarrollador.nombre);
            console.log("Apellido:", desarrollador.apellido);
            console.log("Foto Perfil:", desarrollador.foto_perfil);

            let nuevaPersona = referencia.cloneNode(true);
            nuevaPersona.querySelector("img").src = desarrollador.foto_perfil;
            nuevaPersona.querySelector("img").alt = "Foto Desarrollador";
            nuevaPersona.querySelector(".nombre").innerHTML = desarrollador.nombre + " " + desarrollador.apellido;
            nuevaPersona.querySelector(".edad").innerHTML = desarrollador.edad + " años";
            nuevaPersona.querySelector(".residencia").innerHTML = desarrollador.residencia;

            contenedor.appendChild(nuevaPersona);

            currentIndex++;
        } else {
            console.log("No hay más Desarrolladores para agregar o los datos no están disponibles.");
        }
    }

    function QuitarArticulo() {
        if (contenedor.childElementCount > 0) {
            contenedor.removeChild(contenedor.lastChild);
            
            if (currentIndex > 0) {
                currentIndex--;
            }
        }
    }

    // Clicks de Botones
    botonAgregar.addEventListener("click", AgregarArticulo);
    botonQuitar.addEventListener("click", QuitarArticulo);

    /*
    botonAgregar.addEventListener("click", function() {
        AgregarArticulo();
    });

    botonQuitar.addEventListener("click", function() {
        QuitarArticulo();
    });*/
});