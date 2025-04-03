document.getElementById("email-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const errorIcon = document.getElementById("error-icon");
  const emailValue = emailInput.value.trim();

  // Prosty regex do weryfikacji e-maila
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("invalid");
    errorMessage.style.display = "block";
    errorIcon.style.display = "block";
  } else {
    emailInput.classList.remove("invalid");
    errorMessage.style.display = "none";
    errorIcon.style.display = "none";
    alert("Email is valid!");
  }
});
