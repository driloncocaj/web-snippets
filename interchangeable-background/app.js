const box = document.querySelectorAll(".box");

box.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log(box.id);
    document.body.style.backgroundColor = box.id;
  });
});
