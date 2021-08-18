const assert = require('assert');
const { uppercase } = require('../src/script');

describe('A função "uppercase":', () => {
  test('Transforma as letras em letras maiúsculas?', (done) => {
    uppercase('minusculas', (result) => {
      try {
        expect(result).toBe('MINUSCULAS');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});