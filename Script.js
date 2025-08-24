/*quotes to use for the get free quote button*/

const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Opportunities don't happen. You create them.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];

// Target buttons by ID
document.getElementById('free-quote-btn').addEventListener('click', function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
});

document.getElementById('contact-btn').addEventListener('click', function() {
    alert('Contacting the team...');
});


/**the toggle menu */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

/**when link cliked closes menu */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});