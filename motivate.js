const BASE_URL = 'https://type.fit/api/quotes';

let text = document.querySelector('.text');
let author = document.querySelector('.author');
let submitButton = document.querySelector('#submit');
let no, rem;



const newQuote = () => {
  no = rem;
  rem = Math.floor(Math.random() * 100);

  fetch(`${BASE_URL}`)
    .then((res) => { return res.json() })
    .then((data) => {
      // quoteList(resJSON);
      text.innerHTML = data[rem].text;
      author.innerHTML = data[rem].author;
  })
    .catch((err) => {
    console.error(`ERROR: ${err}`)
  })
  // console.log(quoteList);
}

submitButton.addEventListener("click", newQuote)
// const quoteList = (showQuotes) => {
//   const display = document.querySelector('.output');
//   display.innerHTML = " ";
  
//   for (let i = 0; i < 5; i++) {
    
//     const quote = document.createElement('h3');
//     quote.innerText = showQuotes[i].text;
//     document.querySelector('.output').appendChild(quote)

//     const authors = document.createElement('h4');
//     authors.innerText = showQuotes[i].author;
//     document.querySelector('.output').appendChild(authors)

//   }
  
// }

// const submitButton = document.querySelector('#submit');
// // console.log(submitButton);

// submitButton.addEventListener('click', (ev) => {
  
//   ev.preventDefault();
//   console.log('CLICKED');

//   let clicked = document.querySelector('#submit').value;

//   getMotivated(clicked);
//   document.querySelector('#submit').value = ''

// });


