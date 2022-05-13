const cost = 50;
const sell = 112;
const tax = (20 / 100);

let totalCost = cost + tax
let profit = 1000 * (sell - totalCost);

if (cost < 0 || sell < 0) {
    console.log('Erro: valores negativos não são aceitos.');
} else {
    console.log(profit);
}