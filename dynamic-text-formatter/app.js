let input = document.getElementById("text");
let buttons = document.querySelectorAll("div button");
let output = document.querySelector(".output");

let inputContent = "";
input.addEventListener("input", () => {
  inputContent = input.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const clickedButton = event.currentTarget;
    if (clickedButton.id === "uppercase") {
      output.innerHTML = `<div style="text-transform: uppercase;">${inputContent}</div>`;
    } else if (clickedButton.id === "lowercase") {
      output.innerHTML = `<div style="text-transform: lowercase;"> ${inputContent} </div>`;
    } else if (clickedButton.id === "startUppercase") {
      output.innerHTML = `<div style="text-transform: capitalize;"> ${inputContent} </div>`;
    } else if (clickedButton.id === "bold") {
      output.innerHTML = `<div style="font-weight: bold;"> ${inputContent} </div>`;
    } else if (clickedButton.id === "italic") {
      output.innerHTML = `<div style="font-weight: italic;"> ${inputContent} </div>`;
    } else {
      output.innerHTML = `<div style="text-decoration: underline;"> ${inputContent} </div>`;
    }
  });
});
