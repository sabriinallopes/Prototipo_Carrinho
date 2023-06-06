var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Função para exibir os produtos selecionados
function displayCartItems() {
    var cartItemsDiv = document.getElementById('cart-items');
    var totalDiv = document.getElementById('total');
    var totalValue = 0;

    // Limpar conteúdo anterior
    cartItemsDiv.innerHTML = '';

    if (cartItems && cartItems.length > 0) {
        for (var i = 0; i < cartItems.length; i++) {
            var product = cartItems[i];
            var productDiv = document.createElement('div');
            productDiv.classList.add('product');

            var productName = document.createElement('span');
            productName.innerText = product.name;
            productDiv.appendChild(productName);

            cartItemsDiv.appendChild(productDiv);

            totalValue += product.value;
        }
    }

    totalDiv.innerText = 'Total: R$ ' + totalValue.toFixed(2);
}

// Função para limpar o carrinho
function clearCart() {
    cartItems = [];
    localStorage.removeItem('cartItems');
    displayCartItems();
}

// Função para finalizar a compra
function finishOrder() {
    clearCart();
    alert('Pedido realizado com sucesso');
    window.location.href = 'index.html'; // Redirecionar para a página inicial
}

// Chamar a função para exibir os produtos selecionados
displayCartItems();
