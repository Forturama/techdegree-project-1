// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var RandomNumber;
var RandomQuote;

// an array called "quotes" including JavaScript objects which hold the data for my quotes
var quotes = [
  {quote: "Don't cry because it's over, smile because it happened.", source: "Dr. Seuss"},
  {quote: "Politics have no relation to morals.", source: "Niccolò Machiavelli" },
  {quote: "In my mind, I'm always the best. I think that this is key for all people that want to be the best.", source: "Cristiano Ronaldo", year: 2015},
  {quote: "Politics determine who has the power, not who has the truth.", source: "Paul Krugman", citation: "The Australian Financial Review", year: 2010},
  {quote: "You don't have to wait till your party's in power to have an impact on life at home and around the world.", source: "Bill Clinton", citation: "speech at Campus Progress National Student Conference", year: 2005}
]

// a function called "getRandomQuote" which returns one quote from the "quotes" array
function getRandomQuote () {
  RandomNumber = Math.floor(Math.random() * quotes.length); // creates a random number between 0 and 4 which will determine which quote-object from the "quotes"-array will be selected
  return quotes[RandomNumber];  // returns one quote-object from the "quotes"-array
}

// a function called "printQuote" which stores the quotes-array selected in the "getRandomQuote"-function in the variable "RandomQuote" and constructs a string containing the different properties of the quote object
function printQuote () {
  RandomQuote = getRandomQuote ();  // stores the quote-object in the "RandomQuote"-variable
  html = '<p class="quote">' + RandomQuote.quote + '</p>'; // start of the construction of the string including all key variables from the object stored in the "randomQuote"-variable
  html += '<p class="source">' + RandomQuote.source;
  if (RandomQuote.citation) {
    html += '<span class="citation">' + [RandomQuote.citation] + '</span>';
  }
  if (RandomQuote.year) {
    html += '<span class="year">' + [RandomQuote.year] + '</span>';
  }
  var div = document.getElementById('quote-box').innerHTML = html;

  return html;
}
