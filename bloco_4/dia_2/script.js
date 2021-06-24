let array = [];

let metadeDosNumeros = [];

for (let index = 0; index < 25; index++) {

    array.push(index+1);

    metadeDosNumeros.push(array[index]/2);
}

console.log(array);
console.log(metadeDosNumeros);