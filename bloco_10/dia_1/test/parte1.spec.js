const assert = require('assert');
const { sum } = require('../src/parte1');

describe('A função sum', () => {
  test('soma corretamente?', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('NÃO soma strings', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
});