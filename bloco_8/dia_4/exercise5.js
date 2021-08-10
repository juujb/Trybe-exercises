const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const countA = (count, peopleName) => {
    peopleName.toUpperCase();
    peopleName.forEach(element => {
      if (element === 'A') {
        count += 1;
      }
    });
    return count;
  }

  return names.reduce(countA, 0);
}

assert.deepStrictEqual(containsA(), 20);