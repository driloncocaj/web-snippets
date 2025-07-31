const time = document.getElementById("time");

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  time.innerText = `${hours} : ${minutes} : ${seconds}`;
  setTimeout(updateClock, 1000);
}

updateClock();
