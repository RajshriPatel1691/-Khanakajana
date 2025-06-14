// Add this to your add.js file

function addToCart(foodName, price) {
  // You can store cart items in localStorage or just display a message
  alert(`${foodName} added to cart! Price: ₹${price}`);

  // Optional: Update a cart count badge (if you create one later)
  let cartCount = document.getElementById("cart-count");
  if (cartCount) {
    let count = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = count + 1;
  }

  // Optional: Save to localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name: foodName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
}
