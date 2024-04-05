const formFeedback = document.querySelector(".feedback-form");
const button = document.querySelector("button[type='submit']");
button.className = "button";

const emailInput = document.querySelector('input[type="email"]');
emailInput.className = "input-email";

const messageInput = document.querySelector("textarea[name='message']");
messageInput.className = "input-message";

const label = document.querySelector("label");
label.className = "label";

const user = {
  email: "",
  message: ""
};

const dataFromLocalStorage = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(dataFromLocalStorage);
if (parsedData !== null) {
  formFeedback.elements.email.value = parsedData.email;
  formFeedback.elements.message.value = parsedData.message;
}

function onFormSubmit(event) {
  event.preventDefault();
  if (emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  console.log(localStorage.getItem("feedback-form-state"));
  formFeedback.reset();
  localStorage.removeItem("feedback-form-state");
}

function onFormInput(event) {
  if (event.target === emailInput) {
    user.email = emailInput.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
  }
  if (event.target === messageInput) {
    user.message = messageInput.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(user));
  }
}

formFeedback.addEventListener("input", onFormInput);
formFeedback.addEventListener("submit", onFormSubmit);

