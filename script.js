function validateLoginForm() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Simple validation
    if (email === "bardhhyseni28@gmail.com" && password === "bardhi123") {
        document.getElementById('loginError').innerHTML = "";
        document.getElementById('loginSuccess').innerHTML = "Ju jeni kyçur me sukses!";
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
        } else {
        document.getElementById('loginError').innerHTML = "Email ose passwordi i dhene eshte gabim!";
        document.getElementById('loginSuccess').innerHTML = "";
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

function validateSignupForm() {
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    // Simple validation
    if (email === "bardhhyseni28@gmail.com" && password === "bardhi123") {
        document.getElementById('signupError').innerHTML = "";
        document.getElementById('signupSuccess').innerHTML = "Ju jeni regjistruar me sukses!";
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    } else {
        document.getElementById('signupError').innerHTML = "Email ose passwordi i dhene eshte gabim!";
        document.getElementById('signupSuccess').innerHTML = "";
    }

    // Prevent the form from submitting and refreshing the page
    return false;
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});

const cart = [];

    // Function to add an item to the cart
    function addToCart(product, price) {
      cart.push({ product, price });
      updateCart();
      openCartModal();
    }

    // Function to update the cart display
    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');

      // Clear existing cart items
      cartItems.innerHTML = '';

      // Populate cart items
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
      });

      // Calculate and display total
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartTotal.textContent = total;
    }

    // Function to open the cart modal
    function openCartModal() {
      const modal = document.getElementById('cart-modal');
      modal.style.display = 'block';
    }

    // Function to close the cart modal
    function closeCartModal() {
      const modal = document.getElementById('cart-modal');
      modal.style.display = 'none';
    }
