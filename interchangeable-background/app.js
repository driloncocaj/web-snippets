const box = document.querySelectorAll(".box");

box.forEach((box) => {
  box.addEventListener("click", () => {
    document.body.style.backgroundColor = box.id;
  });
});
