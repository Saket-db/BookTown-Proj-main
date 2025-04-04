document.addEventListener("DOMContentLoaded", () => {
  console.log("Cart Page Loaded");

  // Load cart items from localStorage or create an empty array if none exist
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  console.log("Cart Items from Storage:", cartItems);

  const productItemsList = document.getElementById("productItemsList");

  // Function to display items in the cart
  function renderCartItems() {
    productItemsList.innerHTML = ""; // Clear previous items

    if (cartItems.length === 0) {
      productItemsList.innerHTML = "<tr><td colspan='2'>Your cart is empty.</td></tr>";
      return;
    }

    cartItems.forEach((product, index) => {
      console.log(`Rendering cart item ${index + 1}:`, product);
      const row = `
        <tr>
          <td>${product.name}</td>
          <td>$${product.price}</td>
        </tr>
      `;
      productItemsList.innerHTML += row;
    });
  }

  // Function to add a book to cart
  function addToCart(book) {
    cartItems.push(book);
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Save updated cart
    console.log("Cart updated:", cartItems);
    renderCartItems();
  }

  // Listen for clicks on "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const book = {
        name: event.target.getAttribute("data-name"),
        price: event.target.getAttribute("data-price"),
        cover: event.target.getAttribute("data-cover"),
      };
      addToCart(book);
    });
  });

  // Render cart on page load
  renderCartItems();
});
