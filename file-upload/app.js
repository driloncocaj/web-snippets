const fileInput = document.getElementById("file-input");
const button = document.getElementById("file-button");
const preview = document.querySelector(".file-container");

button.addEventListener("click", () => {
  fileInput.click();
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    preview.src = e.target.result;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);
});
