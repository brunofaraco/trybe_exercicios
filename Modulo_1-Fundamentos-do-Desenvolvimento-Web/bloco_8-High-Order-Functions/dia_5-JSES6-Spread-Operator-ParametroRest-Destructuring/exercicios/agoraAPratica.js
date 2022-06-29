// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle))
// });

// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0)

// console.log(sum(1, 2, 3, 4, 5));

// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
// };

// const gunnar = {
//     name: 'Gunnar',
//     age: 30,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
// };

// const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:

// const people = [
//     {
//         name: 'Nicole',
//         bornIn: 1992,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Harry',
//         bornIn: 2008,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Toby',
//         bornIn: 1901,
//         nationality: 'Australian',
//     },
//     {
//         name: 'Frida',
//         bornIn: 1960,
//         nationality: 'Dannish',
//     },
//     {
//         name: 'Fernando',
//         bornIn: 2001,
//         nationality: 'Brazilian',
//     },
// ];

// const filterPeople = (people) => people.filter(( {nationality, bornIn}) => bornIn > 1900 && bornIn < 2001 && nationality === 'Australian');

// console.log(filterPeople(people));

// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

// const myList = [1, 2, 3];

// const swap = ([one, two, three]) => [three, two, one]

// console.log(swap(myList));

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = ([name, brand, releaseYear]) => ( { name, brand, releaseYear, } )

// console.log(toObject(palio));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

// const ships = [
//     {
//         name: 'Titanic',
//         length: 269.1,
//         measurementUnit: 'meters',
//     },
//     {
//         name: 'Queen Mary 2',
//         length: 1132,
//         measurementUnit: 'feet',
//     },
//     {
//         name: 'Yamato',
//         length: 256,
//         measurementUnit: 'meters',
//     },
// ];

// const shipLength = () => {

// }

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'