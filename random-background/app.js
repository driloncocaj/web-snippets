const btn = document.getElementById("btn");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");

btn.textContent = btn.textContent.toUpperCase();

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.body.style.backgroundColor = randomColor();

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  rgb.textContent = document.body.style.backgroundColor;
  hex.innerHTML = randomColor();
  // Left to fix, the hex code doesn't correlate to the background color since the function is called independely (however it is written)
});
