const salarioBruto = 30000;

let aliquotaINSS = 0;
let aliquotaIR = 0;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
};

const salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98){
    aliquotaIR = 0
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

let salarioLiquido = salarioBase - aliquotaIR;

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