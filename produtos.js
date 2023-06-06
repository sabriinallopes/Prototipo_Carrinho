var cartCount = document.getElementById('cart-count');
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Função para atualizar o contador do carrinho
function updateCartCount() {
    cartCount.innerText = cartItems.length;
}

// Função para adicionar um produto ao carrinho
function addToCart(name, value) {
    var product = {
        name: name,
        value: value
    };

    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
}

function updateCartCount() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    var cartCount = document.getElementById('cart-count');
    cartCount.innerText = cartItems.length.toString();
  }

// Função para redirecionar para a página carrinho.html
function goToCart() {
    if (cartItems.length > 0) {
        window.location.href = "carrinho.html";
    }
}
