const imgSemafaro = document.getElementById('imgSemafaro');
const buttons = document.getElementById('btns');
let coresIndex = 0;
let IntervalId = null;

const semafaro = (evento) => {
   /*  console.log(evento.target.id); */
   /* ligar['amarelo'](); */
   pararAutomatico();
   ligar[evento.target.id]();   
}

const proximoIndex = () => {

    coresIndex = coresIndex < 2 ? ++coresIndex : 0;

    /* if(coresIndex < 2){
        coresIndex++
    }else{
        coresIndex = 0;
    } */
}

const trocarCores = () => {
    const cores = ['vermelho', 'amarelo', 'verde'];
    const cor = cores[coresIndex];
    ligar[cor]();
    proximoIndex();
}

const pararAutomatico = () => {
    clearInterval(IntervalId);
}

const ligar = {
    'vermelho': () => imgSemafaro.src = './images/vermelho.png',
    'amarelo': () => imgSemafaro.src = './images/amarelo.png',
    'verde': () => imgSemafaro.src = './images/verde.png',
    'automatico': () => IntervalId = setInterval(trocarCores, 750)
}

buttons.addEventListener('click', semafaro);

/*
    Colocar um botão para parar o semáforo automático e voltar para o automático
    Estilo o da Lampada - 

    function lampada_ligadaDesligada(){
    if(ligarDesligar_lampada.textContent == 'Ligar'){
        lampada_ligada();
        ligarDesligar_lampada.textContent = 'Desligar';
    }else{
        lampada_desligada();
        lampada_ligadaDesligada.textContent = 'Ligar';
    }
}
*/