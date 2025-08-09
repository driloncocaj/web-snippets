const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

app.get("./assets", (req, res) => {
  fs.readdir("./assets", (err, files) => {
    if (err) return res.status(500).send(err);
    res.json(files.map((file) => `./assets/${file}`));
  });
});

app.listen(3000);

fetch("./assets")
  .then((res) => res.json())
  .then((images) => {
    let index = 0;
    document.body.style.backgroundImage = `url(${images[index]})`;
    backward.addEventListener("click", () => {
      index = (index + 1) % images.length;
      document.body.style.backgroundImage = `url(${images[index]})`;
    });
  });
