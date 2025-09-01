document.getElementById("regForm").addEventListener("submit", function (e) {
  let isValid = true;

  // Reset errors
  document
    .querySelectorAll("input, select")
    .forEach((input) => input.classList.remove("error"));

  const firstName = document.getElementById("firstName");
  const middleName = document.getElementById("middleName");
  const lastName = document.getElementById("lastName");
  const suffix = document.getElementById("suffix");
  const contact = document.getElementById("contact");
  const email = document.getElementById("email");
  const batch = document.getElementById("batch");
  const technology = document.getElementById("technology");
  const idNumber = document.getElementById("idNumber");

  // Letters only for names
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(firstName.value.trim())) {
    firstName.classList.add("error");
    isValid = false;
  }
  if (!nameRegex.test(middleName.value.trim())) {
    middleName.classList.add("error");
    isValid = false;
  }
  if (!nameRegex.test(lastName.value.trim())) {
    lastName.classList.add("error");
    isValid = false;
  }

  // Suffix: optional, but if filled → must be letters + dot
  const suffixRegex = /^[A-Za-z.]*$/;
  if (suffix.value.trim() !== "" && !suffixRegex.test(suffix.value.trim())) {
    suffix.classList.add("error");
    isValid = false;
  }

  // Contact: 10–15 digits
  if (!/^\d{10,15}$/.test(contact.value)) {
    contact.classList.add("error");
    isValid = false;
  }

  // Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    email.classList.add("error");
    isValid = false;
  }

  // Batch: Number-Letters (e.g., 33-G, 101-AB)
  if (!/^\d+-[A-Z]+$/.test(batch.value)) {
    batch.classList.add("error");
    isValid = false;
  }

  // Technology must be chosen
  if (technology.value === "") {
    technology.classList.add("error");
    isValid = false;
  }

  // ID Number: YYYY-NN-NNN
  if (!/^\d{4}-\d{2}-\d{3}$/.test(idNumber.value)) {
    idNumber.classList.add("error");
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
    alert("Please correct the highlighted fields.");
  }
});

