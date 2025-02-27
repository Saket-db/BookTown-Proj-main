// Existing JavaScript code

// Function to update modal content
function updateModalContent() {
  const modalBody = document.querySelector(".modal-body");
  const modalBody2 = document.querySelector(".modal-body-2");

  // Clear existing content
  modalBody.innerHTML = '';
  modalBody2.innerHTML = '';

  // Populate modal body with product details
  parsedData.forEach((product) => {
    const productBody1 = `
      <div class="d-flex justify-content-between align-items-center py-3 pe-4">
        <div class="d-flex align-items-center">
          <img src="${product.cover}" class="img-fluid rounded-3" style="width: 120px" alt="Book" />
          <div class="flex-column ms-4">
            <p class="mb-2 d-none d-sm-inline fs-10">${product.name}</p>
          </div>
        </div>
        <div class="align-middle">
          <strike class="text-secondary">${product.lastprice || ""}</strike>
          <p class="mb-0" style="font-weight: 500">$${product.price}</p>
        </div>
      </div>
    `;
    modalBody.innerHTML += productBody1;
  });

  // Calculate total price
  let totalPrice = parsedData.reduce((sum, product) => sum + parseFloat(product.price), 0);
  totalPrice = Math.round(totalPrice * 100) / 100;

  // Populate modal body 2 with total price
  const productBody2 = `
    <div class="mb-5">
      <div class="form-floating">
        <input type="number" class="form-control border border-danger border-opacity-25" id="form3Examplea2" placeholder="v" />
        <label class="form-label" for="form3Examplea2">Enter your discount code (e.g., 1-70)</label>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <h5 class="text-uppercase">Total price:</h5>
      <h5>$${totalPrice}</h5>
    </div>
  `;
  modalBody2.innerHTML = productBody2;
}

// Call the function to update modal content
updateModalContent();
