
    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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



// Manejar envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const newMessage = { name, email, message };
    saveMessage(newMessage);
    
    alert('Gracias por contactarnos, ' + name + '. Hemos recibido tu mensaje.');
    this.reset();
});


// Guardar el mensaje en localStorage (simulando guardar en JSON)
function saveMessage(message) {
let messages = JSON.parse(localStorage.getItem('messages')) || [];
messages.push(message);
localStorage.setItem('messages', JSON.stringify(messages));
displayMessages(messages);
}
