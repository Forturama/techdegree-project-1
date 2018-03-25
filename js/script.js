// two event listener which respond to clicks on the button "Show another quote"
// when user clicks anywhere on the button, the "printQuote" and "backgroundColor" fuctions are called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", backgroundColor, false);


// an array called "quotes" including JavaScript objects. Each object holds information about quotes
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

// function called "backupQuotes" which stores a copy of the array "quotes" when the page is opened for the first time
var backupQuotes = quotes.slice(0);

// function called "getRandomQuote" which returns one quote from the var "backupQuotes"
function getRandomQuote () {

// condition that reviews whether the var "backupQuotes" holds any objects.
// if var "backupQuotes" holds no objects, a copy of the array "quotes" is stored in "backupQuotes"
  if (backupQuotes.length === 0) {
      backupQuotes = quotes.slice(0)
  }

// var "RandomNumber" creates a random number. The random has a value between 0 (first element) and the max-length (last element) of the array
  let RandomNumber = Math.floor(Math.random() * backupQuotes.length);

// function returns and removes one element stored in "backupQuotes"
  return backupQuotes.splice(RandomNumber, 1)[0];
}

// function "printQuote" which builds a paragraph based on all information given for each quote that is returned by the function "getRandomQuote"
function printQuote () {
  var RandomQuote = getRandomQuote();
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


  // function called "backgroundColor" that generates a raondom color. This color is applied to the body's background-color
function backgroundColor () {
  r = Math.floor(Math.random()*16).toString(16);
  g = Math.floor(Math.random()*16).toString(16);
  b = Math.floor(Math.random()*16).toString(16);
  // inside the Back-Ticks (``) are template-strings. These strings are filled with a random hexadecimal number each time the function runs
  var color = `#${r}${g}${b}`;
  // the random hexadecimal number stored in var "color" is applied to the page
  document.body.style.backgroundColor = color;
  console.log(color);
}

// function "changeQuoteAutomatically" which calls the "printQuote()" and "backgroundColor()" every 10 seconds automatically
function changeQuoteAutomatically () {
  setInterval(function() {
    printQuote ();
    backgroundColor ()
  }, 10000);
}

// call for "changeQuoteAutomatically"
changeQuoteAutomatically();
