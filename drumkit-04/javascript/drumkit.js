'use-strict';

const sons = {
    'W': 'boom.wav',
    'A': 'clap.wav',
    'S': 'hihat.wav',
    'D': 'kick.wav',
    'E': 'openhat.wav',
    'F': 'ride.wav',
    'G': 'snare.wav',
    'H': 'tink.wav',
    'I': 'tom.wav'
}

const criardiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key'); 
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) => Object.keys(sons).forEach(criardiv); 

const tocarsom = (letra) => {
    const audio = new Audio(`./sounds/${sons[letra]}`);
    audio.play();
} 

const adicionarefeito = (letra) => document.getElementById(letra)
                                            .classList.add('active');
                                            
const removerefeito = (letra) => {
    const div = document.getElementById(letra);
    const removeacao = () => div.classList.remove('active');
    div.addEventListener('transitionend', removeacao);
}

const ativardiv = (evento) => {
    let letra = '';

    if(evento.type == 'click'){
        letra = evento.target.id;
    }else{
        letra = evento.key.toUpperCase();
    }

    const letrapermitida = sons.hasOwnProperty(letra);
    if(letrapermitida){
        adicionarefeito(letra);
        tocarsom(letra);
        removerefeito(letra);
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativardiv);

window.addEventListener('keydown', ativardiv); 