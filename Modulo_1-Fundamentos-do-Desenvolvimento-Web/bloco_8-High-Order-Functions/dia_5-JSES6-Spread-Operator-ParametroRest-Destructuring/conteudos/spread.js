// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Maçã', 'Mamão'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));