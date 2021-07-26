const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui


assert.strictEqual(sum(4, 5), 9 , '4 mais 5 é igual a 9');
assert.strictEqual(sum(0, 0), 0 , '0 mais 0 é igual a 0');

//

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }

  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
assert.notStrictEqual(myRemove([1,2,3,4], -3), [1,2,3,4]);
assert.deepStrictEqual(myRemove([1,2,3,4], ), [1,2,3,4]);
assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4]);

//

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],5), [1,2,3,4]);



