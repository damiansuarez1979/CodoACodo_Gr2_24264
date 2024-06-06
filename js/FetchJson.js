document.addEventListener("DOMContentLoaded", () => {
    const containerProductos = document.getElementById("containerProductos");
  
    const renderProductos = (data) => {
      data.forEach(item => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${item.Nombre}</h3>
          <p>${item.marca}</p>
          <p>${item.Cuadro}</p>
           <p>${item.Suspension}</p>
            <p>${item.Ruedas}</p>
             <p>${item.Frenos}</p>
             <p>${item.Cambios}</p>
             <p>${item.Peso}</p>
             <p>${item.Rodado}</p>
          <p>${item.Precio}</p>`;
        containerProductos.appendChild(article);
      });
    };
  
    fetch("https://github.com/damiansuarez1979/TP1_CaC_Grupo2/blob/main/data.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        renderProductos(data);
      })
      .catch(error => console.log("Algo salio mal! " + error));
  });