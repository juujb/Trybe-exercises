let array = [2, 4, 6, 7, 10, 0, -3];

function menorNumero(array) {
    
    let indiceDoNumero;
    for (let index = 0; index < array.length; index++) {
        if (array[index] < array[index-1]){
            indiceDoNumero = index
        }
    }
    return console.log(indiceDoNumero)
}

menorNumero(array)