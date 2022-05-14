// exercício 8

let arrayPrimario = [];

for (let index = 1; index <= 25; index +=1) {
    arrayPrimario.push(index);
}

console.log('Esse é o Array de 1 ao 25:', arrayPrimario);
console.log('');

// exercício 9

let arrayPrimarioDividido = [];

for (let index = 0; index < arrayPrimario.length; index += 1) {
    arrayPrimarioDividido.push(arrayPrimario[index] / 2);
}

console.log('Esse é o Array de 1 ao 25 dividido por 2:', arrayPrimarioDividido);
console.log('');