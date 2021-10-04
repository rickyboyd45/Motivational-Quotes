const BASE_URL = 'https://type.fit/api/quotes';

let text = document.querySelector('.text');
let author = document.querySelector('.author');
let submitButton = document.querySelector('#submit');
let no, rem;



const newQuote = () => {
  no = rem;
  rem = Math.floor(Math.random() * 1600);

  fetch(`${BASE_URL}`)
    .then((res) => { return res.json() })
    .then((data) => {
      
      text.innerHTML = data[rem].text;
      author.innerHTML = data[rem].author;
  })
    .catch((err) => {
    console.error(`ERROR: ${err}`)
  })
  
}

submitButton.addEventListener("click", newQuote);


