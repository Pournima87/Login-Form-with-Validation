const form = document.getElementById("auth-form");
const title = document.getElementById("form-title");
const toggleLink = document.getElementById("toggle-link");
const confirmGroup = document.getElementById("confirm-group");
let isRegistering = false;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isRegistering = !isRegistering;
  title.textContent = isRegistering ? "Register" : "Login";
  toggleLink.textContent = isRegistering ? "Login" : "Register";
  confirmGroup.style.display = isRegistering ? "block" : "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (!validateEmail(email)) {
    alert("Invalid email format ❗");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters ❗");
    return;
  }

  if (isRegistering && password !== confirmPassword) {
    alert("Passwords do not match ❗");
    return;
  }

  alert(isRegistering ? "Registered Successfully ✔️" : "Logged in Successfully ✔️");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

