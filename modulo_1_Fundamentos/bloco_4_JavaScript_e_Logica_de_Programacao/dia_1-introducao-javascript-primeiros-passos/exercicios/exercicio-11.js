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