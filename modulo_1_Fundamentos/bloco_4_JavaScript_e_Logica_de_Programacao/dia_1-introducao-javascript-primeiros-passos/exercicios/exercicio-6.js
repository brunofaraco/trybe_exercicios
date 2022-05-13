const chessPiece = 'REINHA';

if (chessPiece.toLowerCase() === 'peão') {
    console.log('Peão -> Uma casa pra frente, exceto o primeiro movimento podendo ser duas casas');
} else if (chessPiece.toLowerCase() === 'cavalo') {
    console.log('Cavalo -> Em forma de "L", podendo pular sobre as peças');
} else if (chessPiece.toLowerCase() === 'bispo') {
    console.log('Bispo -> Na diagonal');
} else if (chessPiece.toLowerCase() === 'torre') {
    console.log('Torre -> Horizontal ou vertical');
} else if (chessPiece.toLowerCase() === 'rainha') {
    console.log('Rainha -> Vertical, horizontal ou diagonal');
} else if (chessPiece.toLowerCase() === 'rei') {
    console.log('Rei -> Uma casa em qualquer direção');
} else {
    console.log('Erro: Está peça é inválida.');
};


//         RESPOSTA DO GABARITO

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };