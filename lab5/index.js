const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const button = document.getElementById("submit");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (password.value != confirmPass.value) {
    alert("Please enter the correct password in confirmation!");
  }
  if (
    confirm(
      `Are these values correct?\n ${name.value}\n ${email.value}\n ${phone.value}`
    )
  ) {
    alert("Data Stored Successfully!!");
    name.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    confirmPass.value = "";
  } else {
    name.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";
    confirmPass.value = "";
  }
});
