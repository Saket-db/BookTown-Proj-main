// Cart items stored in memory only (no localStorage)
let cartItems = [];

document.addEventListener("DOMContentLoaded", () => {
  console.log("Cart System Loaded");

  // Select necessary elements
  const productItemsList = document.getElementById("productItemsList");
  const modalBody = document.querySelector(".modal-body");
  const modalBody2 = document.querySelector(".modal-body-2");

  // Function to render cart items
  function renderCartItems() {
    console.log("Rendering cart items:", cartItems);

    productItemsList.innerHTML = "";

    if (cartItems.length === 0) {
      console.log("Cart is empty.");
      productItemsList.innerHTML = "<tr><td colspan='2'>Your cart is empty.</td></tr>";
      return;
    }

    cartItems.forEach((product, index) => {
      console.log(`Item ${index + 1}:`, product);
      const row = `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${product.cover}" class="img-fluid rounded-3" style="width: 80px" alt="Book" />
              <div class="ms-3">
                <p class="mb-0">${product.name}</p>
              </div>
            </div>
          </td>
          <td>$${product.price}</td>
        </tr>
      `;
      productItemsList.innerHTML += row;
    });
  }

  // Function to update modal content
  function updateModalContent() {
    console.log("Updating modal content...");

    modalBody.innerHTML = "";
    modalBody2.innerHTML = "";

    if (cartItems.length === 0) {
      console.log("No items in cart.");
      modalBody.innerHTML = "<p>No items in cart.</p>";
      modalBody2.innerHTML = "<p>Total price: $0</p>";
      return;
    }

    cartItems.forEach((product, index) => {
      console.log(`Modal Item ${index + 1}:`, product);

      const productHTML = `
        <div class="d-flex justify-content-between align-items-center py-3 pe-4">
          <div class="d-flex align-items-center">
            <img src="${product.cover}" class="img-fluid rounded-3" style="width: 120px" alt="Book" />
            <div class="flex-column ms-4">
              <p class="mb-2 d-none d-sm-inline fs-10">${product.name}</p>
            </div>
          </div>
          <div class="align-middle">
            <p class="mb-0" style="font-weight: 500">$${product.price}</p>
          </div>
        </div>
      `;
      modalBody.innerHTML += productHTML;
    });

    let totalPrice = cartItems.reduce((sum, product) => sum + parseFloat(product.price), 0);
    totalPrice = Math.round(totalPrice * 100) / 100;
    console.log("Total price calculated:", totalPrice);

    modalBody2.innerHTML = `
      <div class="d-flex justify-content-between">
        <h5 class="text-uppercase">Total price:</h5>
        <h5>$${totalPrice}</h5>
      </div>
    `;
  }

  // Click event for adding items to cart
  document.addEventListener("click", (event) => {
    if (event.target.innerText.trim() === "Add to Cart") {
      let productElement = event.target.closest(".product-card");
      if (!productElement) return;

      let product = {
        cover: productElement.querySelector("img").src,
        name: productElement.querySelector(".product-name").innerText,
        price: productElement.querySelector(".product-price").innerText.replace("$", ""),
      };

      cartItems.push(product);

      console.log("Item added to cart:", product);
      console.log("Updated cart:", cartItems);

      alert(`${product.name} added to cart!`);
    }
  });

  // Call functions to display cart items
  renderCartItems();
  updateModalContent();
});
