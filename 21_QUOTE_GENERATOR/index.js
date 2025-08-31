const quotes = [
    { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { content: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { content: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  ];

const quotess=document.querySelector('#quotes');
const authorr =document.querySelector('#author')
const btn=document.querySelector('#new-quote');
 btn.addEventListener('click',()=>{
    const randomIndex=Math.floor(Math.random()*quotes.length);
    const randomQuote=quotes[randomIndex];
    quotess.textContent=`"${randomQuote.content}"`;
    authorr.textContent=`- ${randomQuote.author}`




    // this is my way of thinking logic but this will overwrite the things so intstead of doing this
    // for(let i=0; i<quotes.length;i++){
    //   quotess.textContent=quotes[i].content;
    //   authorr.textContent=quotes[i].author
    // }

    //do this but no fayda
    
    // let randomQuote;
    // for (let i = 0; i < quotes.length; i++) {
    //     randomQuote = quotes[i]; // Store the quote in a temporary variable
    // }
    // quotess.textContent = `"${randomQuote.content}"`;
    // authorr.textContent = `- ${randomQuote.author}`;
  
    

 })


//  function getRandomQuote() {
//     // Pick a random quote from the array
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     const randomQuote = quotes[randomIndex];
  
//     // Update DOM elements with the random quote and author
//     quoteElement.textContent = `"${randomQuote.content}"`;
//     authorElement.textContent = `- ${randomQuote.author}`;
//   }
  
//   // Add event listener to the button for new quotes
//   newQuoteButton.addEventListener("click", getRandomQuote);

