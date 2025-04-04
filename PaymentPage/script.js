document.addEventListener("DOMContentLoaded", () => {
    console.log("Payment Page Loaded");
  
    // Fetch cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("Loaded cart items from storage:", cartItems);
  
    const modalBody = document.querySelector(".modal-body");
    const modalBody2 = document.querySelector(".modal-body-2");
  
    // Clear previous content
    modalBody.innerHTML = "";
    modalBody2.innerHTML = "";
  
    if (cartItems.length === 0) {
      console.log("No items in cart.");
      modalBody.innerHTML = "<p>No items in cart.</p>";
      modalBody2.innerHTML = "<p>Total price: $0</p>";
      return;
    }
  
    // Display cart items in Payment Page
    cartItems.forEach((product, index) => {
      console.log(`Displaying item ${index + 1}:`, product);
  
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
  
    // Calculate total price
    let totalPrice = cartItems.reduce((sum, product) => sum + parseFloat(product.price), 0);
    totalPrice = Math.round(totalPrice * 100) / 100;
  
    console.log("Total price calculated:", totalPrice);
  
    // Display total price
    const totalPriceHTML = `
      <div class="d-flex justify-content-between">
        <h5 class="text-uppercase">Total price:</h5>
        <h5>$${totalPrice}</h5>
      </div>
    `;
    modalBody2.innerHTML = totalPriceHTML;
  });
  