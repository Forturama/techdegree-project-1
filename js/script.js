// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", backgroundColor, false);


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

var backupQuotes = quotes.slice(0);

function getRandomQuote () {

  if (backupQuotes.length === 0) {
      backupQuotes = quotes.slice(0)
  }

  let RandomNumber = Math.floor(Math.random() * backupQuotes.length);
  return backupQuotes.splice(RandomNumber, 1)[0];
}



function printQuote () {
  RandomQuote = getRandomQuote();
  html = '<p class="quote">' + RandomQuote.quote + '</p>';
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
