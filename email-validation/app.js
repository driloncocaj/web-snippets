const inputContainer = document.getElementById("email");

function checkEmail() {
  const email = document.getElementById("email").value;
  const result = document.getElementById("result");
  if (isValidEmail(email)) {
    result.innerHTML = `<svg width="20" height="20" fill="green" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.285 6.708l-11.62 11.621-5.657-5.657 1.414-1.415 4.243 4.243 10.206-10.206z"/>
    </svg>`;
    result.style.color = "green";
  } else {
    result.textContent = "X";
    result.style.color = "red";
  }
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

inputContainer.addEventListener("keydown", () => {
  checkEmail();
});
