(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault(); // Prevent page refresh

          // Collect form data
          const userData = {
            firstName: document.querySelectorAll("input")[0].value,
            lastName: document.querySelectorAll("input")[1].value,
            userName: document.querySelectorAll("input")[2].value,
            cityName: document.querySelectorAll("input")[3].value,
            address: document.querySelectorAll("input")[4].value,
            agreement: document.querySelector('input[type="checkbox"]').checked,
          };

          // Log form data to the console
          console.log("User Data:", userData);

          // Display success message
          showSuccessMessage(userData.firstName);
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  function showSuccessMessage(firstName) {
    document.querySelector(".needs-validation").innerHTML = `
      <div class="text-center w-100 h-100 d-flex align-items-center justify-content-center fs-2">
        <span>You have successfully signed up, ${firstName}!</span>
        <i role="button" title="Edit Information" class="edit-btn btn btn-outline-danger bi bi-pencil-square m-2 px-3 fs-2 border-0"></i>
      </div>`;

    // Add event listener to edit button
    document.querySelector(".edit-btn").addEventListener("click", () => {
      location.reload();
    });
  }
})();
