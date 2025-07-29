const getQuoteButton = document.querySelector(".get-quote");

function getQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".quote").textContent = `${data.quote}`;
      document.querySelector(".quote-author").textContent = `${data.author}`;
    })
    .catch((error) => {
      document.querySelector(".quote").textContent =
        "Oops, something went wrong!";
      document.querySelector(".quote-author").textContent = "Your Beloved API";
      console.error("Error fetching quote: ", error);
    });
}

getQuoteButton.addEventListener("click", () => {
  getQuote();
});

getQuote();
