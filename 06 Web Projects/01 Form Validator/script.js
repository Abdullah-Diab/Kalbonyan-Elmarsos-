const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

// Show Input Error Massage
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check Email Is Valid
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check Input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `Must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Check Password Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password do not match`);
  }
}

// Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (confirm.value === "") {
    showError(confirm, "Confirming is required");
  } else {
    showSuccess(confirm);
  }

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(confirm, 6, 25);
  checkPasswordMatch(password, confirm);
});
