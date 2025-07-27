const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", function () {
    const p = this.querySelector(".content");
    const isOpen = p.classList.contains("show");

    items.forEach((i) => {
      const para = i.querySelector(".content");
      if (para) para.classList.remove("show");
    });

    if (!isOpen && p) {
      p.classList.add("show");
    }
  });
});
