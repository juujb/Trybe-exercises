const assert = require('assert');
const { uppercase } = require('../src/script');
const { getUserName } = require('../src/script');
const { getRepos } = require('../src/script');

const url = 'https://api.github.com/orgs/tryber/repos';

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

describe('A função "getUserName" Async/Await:', () => {
  test('Encontra o usuario correto?', async () => {
    const user = await getUserName(1);
    expect(user).toBe('Mark');
  });
  test('Retorna o erro correto quando NÃO encontra o usuario?', async () => {
    try {
      await getUserName(3);
    } catch(error) {
      expect(error.message).toMatch('User with 3 not found.');
    }
  });
});

describe('A função "getRepos":', () => {
  test('Encontra o repositório "sd-01-week4-5-project-todo-list"?', () => (
    getRepos(url).then((array) => {
      expect(array.includes('sd-01-week4-5-project-todo-list')).toBe(true);
    })
  ));
  test('Encontra o repositório "sd-01-week4-5-project-meme-generator"?', () => (
    getRepos(url).then((array) => {
      expect(array.includes('sd-01-week4-5-project-meme-generator')).toBe(true);
    })
  ))
});