/*quotes to use for the get free quote button*/

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Opportunities don't happen. You create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];

const btns = document.querySelectorAll('.btns button'); /**checking all the buttons */

/**since the buttons arent named checking first and second button by index */

btns[0].addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
});


btns[1].addEventListener('click', function() {
    alert('Contacting the team...');
});