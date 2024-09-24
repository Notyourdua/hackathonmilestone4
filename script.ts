
//category products

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
      if (category === 'All' || product.getAttribute('data-category') === category) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
//cart
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalP = document.getElementById('total');
    cartItemsDiv.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        // Display item name and price
        itemDiv.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        cartItemsDiv.appendChild(itemDiv);

        total += item.price;
    });

    totalP.textContent = `Total: $${total.toFixed(2)}`;
}

function simulateAddToCart() {
    addToCart('Product 1', 19.99);
    addToCart('Product 2', 29.99);
    addToCart('Product 3', 39.99);
}
simulateAddToCart();

// Reviews 
let reviews = [];

function addReview() {
    const reviewInput = document.getElementById('review-input');
    const reviewList = document.getElementById('review-list');

    if (reviewInput.value) {
        reviews.push(reviewInput.value);
        reviewList.innerHTML = '';
        reviews.forEach((review) => {
            const reviewItem = document.createElement('p');
            reviewItem.textContent = review;
            reviewList.appendChild(reviewItem);
        });
        reviewInput.value = '';
    }
}

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const authMessage = document.getElementById('auth-message');

    if (username === 'user' && password === 'pass') {
        authMessage.textContent = 'Login successful!';
        authMessage.style.color = 'green';
    } else {
        authMessage.textContent = 'Invalid username or password.';
        authMessage.style.color = 'red';
    }
}