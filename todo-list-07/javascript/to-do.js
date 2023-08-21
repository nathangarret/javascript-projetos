'use-strict';

/*
    <label class="todo__item">
        <input type="checkbox">
        <div>Teste de item 1</div>
        <input type="button" value="X">
    </label>
*/

/* 
let bancoDeDados = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'Netflix', 'status': 'checked'},
    {'tarefa': 'Prime Video', 'status': 'checked'}
] */

const pegarBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

const setBancoDeDados = (bancoDeDados) => localStorage.setItem('todoList',JSON.stringify(bancoDeDados));

const criarItem = (tarefa, status='', indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X"}>
    `

    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    const bancoDeDados = pegarBanco();
    bancoDeDados.forEach((item, indice) => criarItem (item.tarefa, item.status, indice));
}

const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if(tecla === 'Enter'){
        const bancoDeDados = pegarBanco();
        bancoDeDados.push(
            { 'tarefa': texto, 'status': '' }   // evento.target => target - onde foi digitado
        );
        setBancoDeDados(bancoDeDados);
        atualizarTela(); 
        evento.target.value = '';
    }
}

const removerItem = (indice) => {
    const bancoDeDados = pegarBanco();
    bancoDeDados.splice(indice, 1); // "Recortar | Modificar um array"
    setBancoDeDados(bancoDeDados);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const bancoDeDados = pegarBanco();
    bancoDeDados[indice].status = bancoDeDados[indice].status == '' ? 'checked' : '';
    /* bancoDeDados[indice].status; // Modificar apenas o status não o conteúdo | Marcado - Desmarcado */
    setBancoDeDados(bancoDeDados);
    atualizarTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if(elemento.type == 'button'){
        const indice = elemento.dataset.indice;
        removerItem(indice);
    }else if(elemento.type == 'checkbox'){
        const indice= elemento.dataset.indice;
        atualizarItem(indice);
    }
    console.log(elemento);
}

document.getElementById('novoItem').addEventListener('keypress', inserirItem);
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();