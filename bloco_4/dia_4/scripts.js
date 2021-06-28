let array = [2, 3, 6, 7, 10, 1];

function maiorNumero(array) {
    
    let indiceDoNumero;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index+1]){
            indiceDoNumero = index
        }
    }
    return console.log(indiceDoNumero)
}

maiorNumero(array)