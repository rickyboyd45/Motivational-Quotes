const BASE_URL = 'https://type.fit/api/quotes';

let text = document.querySelector('.text');
let author = document.querySelector('.author');
let submitButton = document.querySelector('#submit');
let quotes, mix;



const makeQuote = () => {
  quotes = mix;
  mix = Math.floor(Math.random() * 1600);

  fetch(`${BASE_URL}`)
    .then((res) => { return res.json() })
    .then((data) => {
      
      text.innerHTML = data[mix].text;
      author.innerHTML = data[mix].author;
  })
    .catch((err) => {
    console.error(`ERROR: ${err}`)
  })
  
}

submitButton.addEventListener("click", makeQuote);


