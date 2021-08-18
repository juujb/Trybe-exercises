const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const addArray = (newArray, array) => {
    array.forEach(element => {
      newArray.push(element);
    });
    return newArray;
  };

  return arrays.reduce(addArray, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
