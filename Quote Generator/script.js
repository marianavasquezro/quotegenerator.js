document.addEventListener('DOMContentLoaded', getNewQuote);

async function getNewQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    const author = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    newQuoteBtn.disabled = true;
    quoteText.textContent = 'Loading...';

    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();

        if (response.ok) {
            quoteText.textContent = data.content;
            author.textContent = `- ${data.author}`;
        } else {
            throw new Error('Failed to fetch quote');
        }
    } catch (error) {
        console.error('Error fetching quote:', error.message);
        quoteText.textContent = 'Failed to fetch quote. Please try again later.';
        author.textContent = '';
    } finally {
        newQuoteBtn.disabled = false;
    }
}
