const angulo1 = 90;
const angulo2 = 20;
const angulo3 = 70;

if (angulo1 + angulo2 + angulo3 === 180){
    console.log(true);
} else if (angulo1 + angulo2 + angulo3 > 180 || angulo1 + angulo2 + angulo3 < 180) {
    console.log(false);
} else {
    console.log('error 404');
};