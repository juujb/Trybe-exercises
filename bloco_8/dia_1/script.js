const createEmail = (name) => { 
  const id = { Nome: name, }
  id.Email = `${name.replace(' ','_').toLowerCase()}@trybe.com`;
  return id;
};

const newEmployees = (callBack) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  employees.id1 = callBack('Pedro Guerra');
  employees.id2 = callBack('Luiza Drummond');
  employees.id3 = callBack('Carla Paiva');

  return employees;
};

console.log(newEmployees(createEmail));

const randomNum = () => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const isEqual = (number) => randomNum() === number? true:false ;


const fortuneResult = (luck, callBack) => {
  if (callBack(luck) === true) {
    console.log(callBack(luck));
    return 'Parabéns você ganhou';
  } else {
    
    return 'Tente novamente';
  }
}

console.log(fortuneResult(3,isEqual));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countAnswers = (rightAnswers, studentAnswers, callBack) => callBack(rightAnswers, studentAnswers);

const checkAnswers = (rightAnswers, studentAnswers) => {
  let points = 0;
  for (let index = 0; index < rightAnswers.length; index++) {
    if (studentAnswers[index] === rightAnswers[index]) {
      points += 1;
    } else
    if (studentAnswers[index] !== rightAnswers[index] && studentAnswers[index] !== 'N.A') {
      points -= 0.5;
    }
  }
  return points;
}

console.log(countAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
