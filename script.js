

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

  if(document.body.classList.contains(modo-escuro)){
    botao.textContent = "modo-claro"
  }else{
    botao.textContent = "modo-escuro"
  }
}


botao.addEventListener('click', alternaModoEscuro);