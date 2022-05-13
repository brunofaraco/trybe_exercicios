const angulo1 = 90;
const angulo2 = -10;
const angulo3 = 100;

let somaDosAngulos = angulo1 + angulo2 + angulo3;
let angulosSaoPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosSaoPositivos === true) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('error 404: ângulo inválido');
}