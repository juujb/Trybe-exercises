const randomNumber = () => {
  const min = Math.ceil(1);
  const max = Math.floor(50);
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number * number;
};

const randomNumberArray = () => {
  const array = [];
  for (let index = 0; index < 10; index++) {
    const number = randomNumber();
    array.push(number);
  }
  console.log(array);
  return array;
};

const promisse = new Promise((resolve, reject) => {
  const array = randomNumberArray();
  const total = array.reduce((acc, number) => {
    acc += number;
    return acc;
  }, 0);

  console.log(total);
  if (total > 8000) {
    return reject('Promise rejeitada');
  }
  resolve('Promise resolvida');
})
.then(message => console.log(message))
.catch(message => console.log(message));