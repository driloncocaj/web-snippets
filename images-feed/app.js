const imgContainer = document.querySelector(".img-container");

for (let i = 0; i < 18; i++) {
  const img = document.createElement("img");
  img.src = `https://picsum.photos/id/${Math.floor(
    Math.random() * 500
  )}/400/400`;
  img.alt = "Random Image";
  img.classList.add("gallery-img");
  imgContainer.appendChild(img);
}
