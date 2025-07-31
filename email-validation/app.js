const inputContainer = document.getElementById("email");
const result = document.getElementById("result");

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

inputContainer.addEventListener("keydown", () => {
  const value = inputContainer.value;
  if (value === "") {
    result.className = "result";
    result.textContent = "";
  } else if (isValidEmail(value)) {
    result.className = "result visible";
    result.textContent = "✔";
  } else {
    result.className = "result visible invalid";
    result.textContent = "X";
  }
});
