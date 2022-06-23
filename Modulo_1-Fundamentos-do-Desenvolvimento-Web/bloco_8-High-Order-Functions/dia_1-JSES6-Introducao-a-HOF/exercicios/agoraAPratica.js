// 1
const myFunc = (completeName) => {
    const email = completeName.toLowerCase().split(' ').join('_');
    return {
        nomeCompleto: completeName,
        email: email + '@trybe.com',
    };
};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(myFunc));

// 2

const randomNumber = () => (Math.floor(Math.random() * 5) + 1);

const draw = (choseNumber, callback) => {
    const random = callback()
    if (choseNumber === random) { return 'Parabéns você ganhou!'; }
    if (choseNumber !== random) { return 'Tente novamente :('; }
};

console.log(draw(4, randomNumber));

// 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const finalGrade = (gab, answer) => {
    let grade = 0

    for (let i = 0; i < answer.length; i += 1) {
        if (gab[i] === answer[i]) grade += 1;
        else if (answer[i] === 'N.A') grade += 0;
        else grade -= 0.5;
    }
    return grade;
};

const gabCheck = (gabarito, studentAnswers, callback) => {
    const gab = gabarito;
    const answer = studentAnswers;

    return callback(gab, answer);
};

const check = gabCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, finalGrade);
console.log(check);