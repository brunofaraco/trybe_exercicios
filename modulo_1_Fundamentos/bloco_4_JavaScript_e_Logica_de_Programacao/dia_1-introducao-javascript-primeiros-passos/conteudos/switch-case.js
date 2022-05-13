let estadoDoCandidato = 'não apliquei';

switch (estadoDoCandidato){
    case 'aprovado': console.log('Parabéns, você foi aprovado(a)');
    break;
    case 'lista': console.log('Você está na lista de espera!');
    break;
    case 'recusado': console.log('Sentimos muito, você foi reprovado(a).');
    break;
    default: console.log('Não se aplica!');
};