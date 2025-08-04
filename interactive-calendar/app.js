const month = document.querySelector(".month");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const year = document.querySelector(".year");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  const now = new Date();

  month.textContent = `${months[now.getMonth()]}`;
  day.textContent = `${days[now.getDay()]}`;
  date.textContent = `${now.getDate()}`;
  year.textContent = `${now.getFullYear()}`;
}, 1000);
