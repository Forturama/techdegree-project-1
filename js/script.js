// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", backgroundColor, false);

var RandomNumber;
var RandomQuote;

// an array called "quotes" including JavaScript objects which hold the data for my quotes
var quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss",
    tag: "#philosophy"
  },
  {
    quote: "Politics have no relation to morals.",
    source: "Niccolò Machiavelli",
    tag: "#statement"
  },
  {
    quote: "In my mind, I'm always the best. I think that this is key for all people that want to be the best.",
    source: "Cristiano Ronaldo",
    year: 2015,
    tag: "#advice, #motivation"
  },
  {
    quote: "Politics determine who has the power, not who has the truth.",
    source: "Paul Krugman",
    citation: "The Australian Financial Review",
    year: 2010,
    tag: "#philosophy"
  },
  {
    quote: "You don't have to wait till your party's in power to have an impact on life at home and around the world.",
    source: "Bill Clinton",
    citation: "speech at Campus Progress National Student Conference",
    year: 2005,
    tag:"#motivation"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    source: "Charles R. Swindoll",
    tag: "#philosophy, #motivation"
  }
];

var backupQuotes = [];

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
  if (RandomQuote.tag) {
    html +='<span class="tag">' + [RandomQuote.tag] + '</span>';
  }
  var div = document.getElementById('quote-box').innerHTML = html;
  return html;
backupQuotes.push(RandomQuote);                       // Quotes are stored in the var "backupQuotes" as soon as they appeared on the page
var quoteIndex = quotes.indexOf(RandomQuote);         // Index of used quotes is stored in the var "quoteIndex"

if (quoteIndex = -1) {                                // Quote will be removed from var "quotes" if it is contained in "quotes"
quotes.splice(quoteIndex, 1);
}

if (quotes.length = 0) {                              // If 0 quotes are left in var "quotes", all objects stored in var "backupQuotes" are transfered to var "quotes"
  for (var i = 0; i < backupQuotes.length; i++) {
  quotes.push(backupQuotes[i]);
    }
  }
}


// a function called "backgroundColor" that generates a raondom color. This color is applied to the body's background-color
function backgroundColor () {

r = Math.floor(Math.random()*16).toString(16);
g = Math.floor(Math.random()*16).toString(16);
b = Math.floor(Math.random()*16).toString(16);
color = `#${r}${g}${b}`;                        // Inside the Back-Ticks (``) are template-strings. These template are filled with a random hexadecimal number each time the function runs.
document.body.style.backgroundColor = color;
console.log(color);
}


function changeQuoteAutomatically () {
setInterval(function() {
  printQuote ();
  backgroundColor ()
}, 5000);
}

changeQuoteAutomatically();
