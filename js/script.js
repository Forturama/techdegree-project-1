// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// an array called "quotes" including JavaScript objects which hold the data for my quotes
var quotes = [
  {quote: "Don't cry because it's over, smile because it happened.", source: "Dr. Seuss" },
  {quote: "Politics have no relation to morals.", source: "Niccolò Machiavelli" },
  {quote: "In my mind, I'm always the best. I think that this is key for all people that want to be the best.", source: "Cristiano Ronaldo", year: 2015},
  {quote: "Politics determine who has the power, not who has the truth.", source: "Paul Krugman", citation: "The Australian Financial Review", year: 2010},
  {quote: "You don't have to wait till your party's in power to have an impact on life at home and around the world.", source: "Bill Clinton", citation: "speech at Campus Progress National Student Conference", year: 2005}
]

console.log(quotes);
