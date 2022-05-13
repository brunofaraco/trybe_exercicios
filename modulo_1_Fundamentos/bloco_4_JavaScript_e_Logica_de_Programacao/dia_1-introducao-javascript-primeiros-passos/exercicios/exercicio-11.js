const salarioBruto = 3000;

let aliquotaINSS = 0;
let valorINSS = 0;
let salarioDescontadoINSS = 0;
let aliquotaIR = 0;
let irAPagar = 0;

if (salarioBruto <= 5189,82){
    if (salarioBruto <= 1556.94) {
        aliquotaINSS = 0.08;
        valorINSS = salarioBruto * aliquotaINSS;
    } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
        aliquotaINSS = 0.09;
        valorINSS = salarioBruto * aliquotaINSS;
    } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
        aliquotaINSS = 0.11;
        valorINSS = salarioBruto * aliquotaINSS;
    } else {
        valorINSS = 570.88;
    };
};

salarioDescontadoINSS = salarioBruto - valorINSS;

if (salarioDescontadoINSS <= 4664.68){
    if (salarioDescontadoINSS <= 1903.98){
        irAPagar = 0
    } else if (salarioDescontadoINSS >= 1903.99 && salarioDescontadoINSS <= 2826.65) {
        aliquotaIR = 0.075
        irAPagar = (salarioDescontadoINSS * aliquotaIR) - 142.80;
    } else if (salarioDescontadoINSS >= 2826.66 && salarioDescontadoINSS <= 3751.05) {
        aliquotaIR = 0.15
        irAPagar = (salarioDescontadoINSS * aliquotaIR) - 354.80;
    } else if (salarioDescontadoINSS >= 3751.06 && salarioDescontadoINSS <= 4664.68) {
        aliquotaIR = 0.225
        irAPagar = (salarioDescontadoINSS * aliquotaIR) - 636.13;
    };
};

let salarioLiquido = salarioDescontadoINSS - irAPagar;

console.log(salarioLiquido);


// let aliquotINSS;
// let aliquotIR;

// const grossSalary = 2000.00;

// if (grossSalary <= 1556.94) {
//   aliquotINSS = grossSalary * 0.08;
// } else if (grossSalary <= 2594.92) {
//   aliquotINSS = grossSalary * 0.09;
// } else if (grossSalary <= 5189.82) {
//   aliquotINSS = grossSalary * 0.11;
// } else {
//   aliquotINSS = 570.88;
// }

// const baseSalary = grossSalary - aliquotINSS;

// if (baseSalary <= 1903.98) {
//   aliquotIR = 0;
// } else if (baseSalary <= 2826.65) {
//   aliquotIR = (baseSalary * 0.075) - 142.80;
// } else if (baseSalary <= 3751.05) {
//   aliquotIR = (baseSalary * 0.15) - 354.80;
// } else if (baseSalary <= 4664.68) {
//   aliquotIR = (baseSalary * 0.225) - 636.13;
// } else {
//   aliquotIR = (baseSalary * 0.275) - 869.36;
// };

// console.log("Salário: " + (baseSalary - aliquotIR));