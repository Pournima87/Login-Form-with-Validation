document.addEventListener("DOMContentLoaded", () => {
    const inputs = [
      { id: "first-name", validate: val => val.trim().length > 0 },
      { id: "last-name", validate: val => val.trim().length > 0 },
      { id: "reg-email", validate: val => /^\S+@\S+\.\S+$/.test(val) },
      { id: "password", validate: val => val.length >= 6 },
      {
        id: "confirm-password",
        validate: () => document.getElementById("confirm-password").value === document.getElementById("password").value
      }
    ];

    inputs.forEach(inputObj => {
      const input = document.getElementById(inputObj.id);
      const feedback = document.getElementById(inputObj.id + "-feedback");

      input.addEventListener("input", () => {
        if (inputObj.validate(input.value)) {
          feedback.textContent = "✅";
          feedback.style.color = "green";
        } else {
          feedback.textContent = "❌ Invalid input";
          feedback.style.color = "red";
        }
      });
    });
  });