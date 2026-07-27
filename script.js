JavaScript

const botao = document.getElementById('botao-tema');

function alternaModoEscuro(){
    document.body.classList.toggle(modo-escuro);
    botao.addEventListener('click', alternaModoEscuro);
}


function verificaIdade() {
    let idade = prompt("Qual é a sua idade?");
    
    if(idade >= 18) {
        alert("já pode dirigir");
    } else {
        alert("não pode dirigir");
    }
}