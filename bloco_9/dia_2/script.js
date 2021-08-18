// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const apend = (jokeObject) => {
  const jokeString = jokeObject.joke;
  const textElement = document.createElement('p');
  document.body.appendChild(textElement);
  textElement.innerText = jokeString;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
        .then(apend);
};

window.onload = () => fetchJoke();