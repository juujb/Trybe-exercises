const assert = require('assert');
const { uppercase } = require('../src/script');
const { getUserName } = require('../src/script');

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
  test('Encontra o usuario correto?', () => (
    getUserName(1).then((user) => {
      expect(user).toBe('Mark');
    })
  ));
  test('Retorna o erro correto quando NÃO encontra o usuario?', () => (
    getUserName(3).catch((error) => (
      expect(error.message).toMatch('User with 3 not found.')
    ))
  ));
});