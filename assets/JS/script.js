document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  // Reset errors
  document
    .querySelectorAll("input, select")
    .forEach((input) => input.classList.remove("error"));

  // Validation rules
  const firstName = document.getElementById("firstName");
  const middleName = document.getElementById("middleName");
  const lastName = document.getElementById("lastName");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const batch = document.getElementById("batch");
  const technology = document.getElementById("technology");
  const idNumber = document.getElementById("idNumber");

  if (firstName.value.trim() === "") {
    firstName.classList.add("error");
    isValid = false;
  }
  if (middleName.value.trim() === "") {
    middleName.classList.add("error");
    isValid = false;
  }
  if (lastName.value.trim() === "") {
    lastName.classList.add("error");
    isValid = false;
  }

  if (!/^\d{10,15}$/.test(contact.value)) {
    contact.classList.add("error");
    isValid = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add("error");
    isValid = false;
  }

  // ✅ Batch format: Number-Letters (e.g., 33-G, 101-AB)
  if (!/^\d+-[A-Z]+$/.test(batch.value)) {
    batch.classList.add("error");
    isValid = false;
  }

  if (technology.value === "") {
    technology.classList.add("error");
    isValid = false;
  }
  if (!/^\d{4}-\d{2}-\d{3}$/.test(idNumber.value)) {
    idNumber.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful!");
    this.reset();
  } else {
    alert("Please correct the highlighted fields.");
  }
});
