const assert = require('assert');
const { uppercase } = require('../src/script');
const { getUserName } = require('../src/script');
const { findUserById } = require('../src/script');

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

describe('A função "getUserName":', () => {
  test('Encontra o usuario correto', (done) => {
    getUserName(1).then((user) => {
      expect(user).toBe('Marki');
      done();
    });
  });
  test('NÃO encontra o usuario correto', () => {
    
  });
});