let input = document.getElementById("search");
let text = document.getElementById("text");
let searchButton = document.getElementById("search-button");
const words = text.textContent.split(" ");

searchButton.addEventListener("click", () => {
  const regex = new RegExp(`\\b(${input.value})\\b`, "gi");
  text.innerHTML = text.textContent.replace(
    regex,
    `<span class="highlight">${input.value}</span>`
  );
});
