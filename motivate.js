const BASE_URL = 'https://type.fit/api/quotes';

const getMotivated = () => {

  fetch(`${BASE_URL}`)
    .then((res) => { return res.json() })
    .then((resJSON) => {

      quoteList(resJSON);

  })
    .catch((err) => {
    console.error(`ERROR: ${err}`)
  })
  console.log(quoteList);
}

const quoteList = (showQuotes) => {
  const display = document.querySelector('.output');
  display.innerHTML = " ";
  
  for (let i = 0; i < showQuotes.length; i++) {
    
    const quote = document.createElement('h3');
    quote.innerText = showQuotes[i].text;
    document.querySelector('.output').appendChild(quote)

    const authors = document.createElement('h4');
    authors.innerText = showQuotes[i].author;
    document.querySelector('.output').appendChild(authors)

  }
  
}

const submitButton = document.querySelector('#submit');
// console.log(submitButton);

submitButton.addEventListener('click', (ev) => {
  
  ev.preventDefault();
  console.log('CLICKED');

  let clicked = document.querySelector('#submit').value;

  getMotivated(clicked);
  document.querySelector('#submit').value = ''

});


