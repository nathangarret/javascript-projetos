const ligarDesligar_lampada = document.getElementById('btn-ligar');
const ligar_lampada = document.getElementById('btn-ligar');
/* const desligar_lampada = document.getElementById('btn-desligar'); */
const lamp = document.getElementById('lamp');

function lampada_ligada(){
    if(!lampadaIsquebrada () ){
        lamp.src = './images/ligada.jpg';
    }
}

function lampada_desligada(){
    if(!lampadaIsquebrada () ){
        lamp.src = './images/desligada.jpg';
    }
}

function lampada_quebrada(){
    lamp.src = './images/quebrada.jpg';
}

function lampadaIsquebrada(){
    return lamp.src.indexOf('quebrada') > -1; // retorna verdadeiro ou falsa!
}

function lampada_ligadaDesligada(){
    if(ligarDesligar_lampada.textContent == 'Ligar'){
        lampada_ligada();
        ligarDesligar_lampada.textContent = 'Desligar';
    }else{
        lampada_desligada();
        lampada_ligadaDesligada.textContent = 'Ligar';
    }
}

ligarDesligar_lampada.addEventListener('click', lampada_ligadaDesligada);
/* ligar_lampada.addEventListener('click', lampada_ligada); */
lamp.addEventListener('mouseover', lampada_ligada);

/* desligar_lampada.addEventListener('click', lampada_desligada); */

lamp.addEventListener('mouseleave', lampada_desligada);

lamp.addEventListener('dblclick', lampada_quebrada);

