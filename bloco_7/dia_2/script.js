const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurnToObject = (object, key, value) => object[key] = value;

const listKeys = (object) => {for(const key in object){console.log(key)}};

const objectLength = (object) => console.log(Object.keys(object).length);

const listValues = (object) => {for(let index of Object.values(object)){console.log(index)}};

let allLessons = {};

const key1 = Object.assign(allLessons, lesson1);

Object.assign(allLessons, lesson2);

Object.assign(allLessons, lesson3);

addTurnToObject(lesson2, 'turno', 'manhã');

listKeys(lesson1);

objectLength(lesson3);

listValues(lesson2);

console.log(allLessons);
