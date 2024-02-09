const button = document.getElementById("submit");

const handleForm = (e) => {
  e.preventDefault();
  const email = document.getElementById("i1").value;
  const password = document.getElementById("i2").value;

  const errorOne = document.getElementById("errorOnee");
  const error = document.getElementById("errorTwoo");
  if (!email) {
    errorOne.textContent = "Please enter an email";
  }
  if (!password) {
    error.textContent = "Please enter your password";
  }

  console.log;
};
button.addEventListener("click", handleForm);
