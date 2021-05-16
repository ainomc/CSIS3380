/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  {
    quote: "If you're going to do something, do it with style!",
    source: 'Jason Statham',
    citation: 'The Pink Panther',
    year: '2006',
  },
  {
    quote: "Your body is like a piece of dynamite. You can tap it with a pencil all day, but you'll never make it explode. You hit it once with a hammer: Bang! Get serious. Do 40 hard minutes, not an hour and half of nonsense. It's so much more rewarding.",
    source: 'Jason Statham',
    citation: 'Crank: High Voltage',
    year: '2009',
  },
  {
    quote: "Looking good and feeling good go hand in hand. If you have a healthy lifestyle, your diet and nutrition are set, and you're working out, you're going to feel good",
    source: 'Jason Statham',
    citation: 'The Expendables',
    year: '2010',
  },
  {
    quote: "The most frustrating thing about injuries is that they take so bloody long to heal",
    source: 'Jason Statham',
    citation: 'Lock, Stock and Two Smoking Barrels',
    year: '1998',
  },
  {
    quote: "I've come from nowhere, and I'm not shy to go back",
    source: 'Jason Statham',
    citation: 'The Transporter',
    year: '2002',
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
  const randomQuoteNumber = Math.floor(Math.random() * quotes.length);
  randomQuote = quotes[randomQuoteNumber];
  //console.log(randomQuote);
  return randomQuote;
}


/***
 * `printQuote` function
***/
function printQuote () {
  let randomQuote = getRandomQuote();

  let html = "<p class='quote'> " + randomQuote.quote + "</p>";
  html += "<p class='source'> " + randomQuote.source ;

  if ("citation" in randomQuote) {
      html += "<span class='citation'> " + randomQuote.citation + "</span>";
  }

  if ("year" in randomQuote) {
      html += "<span class='year'> " + randomQuote.year + "</span>";
  }
  document.getElementById("quote-box").innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);