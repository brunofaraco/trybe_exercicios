let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // exercício 1

// for (let index1 = 0; index1 < numbers.length; index1 += 1) {
//     console.log('Resposta do exercício 1:', numbers[index1]);
// };

// console.log('');

// // exercício 2

// let sumNumbersFirstWay = 0;

// for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     sumNumbersFirstWay = sumNumbersFirstWay + numbers[index2];
// };

// console.log('Resposta do exercício 2, 1º forma:', sumNumbersFirstWay);

// let sumNumbersSecondWay = 0;

// for (let number2 of numbers) {
//     sumNumbersSecondWay = sumNumbersSecondWay + number2;
// };

// console.log('Resposta do exercício 2, 2º forma:', sumNumbersSecondWay);
// console.log('');

// // exercício 3

// let sumNumbersThirdWay = 0;

// for (let number3 of numbers) {
//     sumNumbersThirdWay = sumNumbersThirdWay + number3;
// };

// let arithmeticAverage = sumNumbersThirdWay / numbers.length

// console.log('Resposta do exercício 3:', arithmeticAverage);
// console.log('');

// // exercício 4

// if (arithmeticAverage > 20) {
//     console.log('Resposta do exercício 4: Valor maior que 20.');
// } else {
//     console.log('Resposta do exercício 4: Valor menor ou igual a 20.');
// }
// console.log('');

// // exercício 5

// let highestNumber = 0;

// for (let index5 = 0; index5 < numbers.length; index5 += 1) {
//     if (highestNumber < numbers[index5]) {
//         highestNumber = numbers[index5];
//     }
// }

// console.log('Resposta do exercício 5:', highestNumber);
// console.log('');

// // exercício 6

// let oddCounter = 0
// let oddNumbers = []
// let haveOddNumber = 'negative';

// for (let index6 = 0; index6 < numbers.length; index6 += 1) {
//     if (numbers[index6] % 2 !== 0 ) {
//         oddCounter +=1;
//         oddNumbers.push(numbers[index6]);
//         haveOddNumber = 'positve';
//     };
// };

// if (haveOddNumber === 'negative') {
//     console.log('Nenhum valor ímpar encontrado.');
// } else {
//     console.log('Resposta do exercício 6: Existem ' + oddCounter + ' números ímpares no Array e eles são:', oddNumbers + '.');
// }
// console.log('');

// // exercício 7

let lowestNumber = 1000;

for (let index7 = 0; index7 < numbers.length; index7 += 1) {
    if (lowestNumber > numbers[index7]) {
        lowestNumber = numbers[index7];
    };
};

console.log('Resposta do exercício 7:', lowestNumber);
console.log('');