/** @format */
const $quotes = document.querySelector('#quotes span:first-child');
const $author = document.querySelector('#quotes span:last-child');

const quote = [
  {
    Quotes:
      'When something is important enough, you do it even if the odds are not in your favor.',
    Author: 'Elon musk',
  },
  {
    Quotes:
      "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it's not.",
    Author: 'Elon musk',
  },
  {
    Quotes:
      "There have to be reasons that you get up in the morning and you want to live. Why do you want to live? What's the point? What inspires you? What do you love about the future?",
    Author: 'Elon musk',
  },
  {
    Quotes:
      "When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked.",
    Author: 'Elon musk',
  },
  {
    Quotes:
      'Persistence is very important. You should not give up unless you are forced to give up.',
    Author: 'Elon musk',
  },
  {
    Quotes:
      "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
    Author: 'Elon musk',
  },
  {
    Quotes: 'I could either watch it happen or be a part of it.',
    Author: 'Elon musk',
  },
  {
    Quotes:
      "We're going to make it happen. As God is my bloody witness, I'm hell-bent on making it work.",
    Author: 'Elon musk',
  },
  {
    Quotes:
      'The first step is to establish that something is possible; then probability will occur.',
    Author: 'Elon musk',
  },
  {
    Quotes:
      'I think it is possible for ordinary people to choose to be extraordinary.',
    Author: 'Elon musk',
  },
];

const todayQuote = quote[Math.floor(Math.random() * quote.length)].Quotes;
const todayAuthor = quote[Math.floor(Math.random() * quote.length)].Author;

$quotes.innerText = todayQuote;
$author.innerText = todayAuthor;
