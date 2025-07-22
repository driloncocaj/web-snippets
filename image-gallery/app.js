let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("full-img");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.jpg`);
  });
});

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});

function openModal(picture) {
  wrapper.style.display = "flex";
  imgWrapper.src = picture;
}
