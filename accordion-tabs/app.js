// let list = document.querySelector(".list");
let items = document.querySelectorAll("li");
// let paragraph = document.querySelector("p");

items.forEach((item) => {
  item.addEventListener("click", function () {
    items.forEach((i) => {
      const p = i.querySelector(".content");
      if (p) p.classList.remove("show");
    });

    const p = this.querySelector(".content");
    if (p) p.classList.add("show");
  });
});
