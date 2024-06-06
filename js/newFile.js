document.addEventListener('DOMContentLoaded', function () {
    // Modal login
    var modal = document.getElementById("login");
    var btn = document.querySelector(".btn-login");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Fetch products from a mock API
    fetch()
        .then(response => response.json())
        .then(data => {
            let productHTML = '';
            data.forEach(product => {
                productHTML += `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p>Precio: $${product.price}</p>
                    </div>
                `;
            });
            document.getElementById('productos-list').innerHTML = productHTML;
        })
        .catch(error => console.log('Error fetching products:', error));
});
