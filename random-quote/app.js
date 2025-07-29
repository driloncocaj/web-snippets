const getQuoteButton = document.querySelector(".get-quote");
const quoteContainer = document.querySelector(".quote-container");

function getQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".quote").textContent = `${data.quote}`;
      document.querySelector(".quote-author").textContent = `${data.author}`;
      quoteContainer.classList.remove("fade-out");
      quoteContainer.classList.add("fade-in");
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
