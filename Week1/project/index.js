// your code goes in here
const quote = [
{
  content: "You miss 100% of the shots you don’t take.",
  author: "- Wayne Gretzky"
},
 {
    content: "Build your own dreams, or someone else will hire you to build theirs.",
    author: "- Farrah Gray"
  },
{
  content: "Success is the ability to go from failure to failure without losing your enthusiasm.",
  author: "- Winston Churchill"
},
{
  content: "Nothing is impossible, the word itself says, I’m possible!",
  author: "- Audrey Hepburn"
},
{
  content: "Knowledge is power.",
  author: "- Sir Francis Bacon"
},
{
  content: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  author: "- Mahatma Gandhi"
}
]

let changeQuote = document.getElementById('button');
let stringQuote = document.getElementById('quote');
let stringAuthor = document.getElementById('author');


function newQuote(event) {
  
  let randomNumber = Math.floor(Math.random() * (quote.length));
  stringQuote.textContent = quote[randomNumber].content;
  stringAuthor.textContent = quote[randomNumber].author;
  
}
changeQuote.addEventListener('click', newQuote);
newQuote();