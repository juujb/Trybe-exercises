const assert = require('assert');
const { sum } = require('../src/parte1');
const { myRemove } = require('../src/parte1');

describe('A função sum', () => {
  test('soma corretamente?', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('NÃO soma strings?', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
  test('retorna "parameters must be numbers" como erro?', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  })
});

describe('A função myRemove', () => {
  test('remove o elemento esperado?', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('não altera o array passado(sem um elemento a ser removido)?', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  test('caso o elemento a ser removido não exista, retorna o array esperado?', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});