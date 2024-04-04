const formEl = document.querySelector("form");

const user = {
  email: "",
  password: ""
};
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    formEl.elements.email.value.trim().length !== 0 ||
    formEl.elements.email.value.trim().length !== 0
  ) {
    user.email = formEl.elements.email.value;
    user.password = formEl.elements.password.value;
    console.log(user);
    formEl.reset();
    alert("User created");
  } else {
    alert("All form fields must be filled in");
  }
}
const emailInput = document.querySelector('input[type="email"]');
emailInput.className = "input-email";
const passwordInput = document.querySelector('input[type="password"]');
passwordInput.className = "input-password";

const button = document.querySelector("button");
button.className = "button";

const label = document.querySelector("label");
label.className = "label";
