JavaScript

function verificaIdade() {
    let idade = prompt("Qual é a sua idade?");
    
    if(idade >= 18) {
        alert("já pode dirigir");
    } else {
        alert("não pode dirigir");
    }
}

const botao = document.getElementById('botao-tema');

function alternaModoEscuro() {
  document.body.classList.toggle('modo-escuro');
}

// Adiciona o ouvinte de clique fora da função
botao.addEventListener('click', alternaModoEscuro);