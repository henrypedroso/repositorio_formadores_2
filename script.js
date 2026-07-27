

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

  if (document.body.classList.contains('modo-escuro')) {
    botao.textContent = "Modo Claro"; // Texto para voltar ao claro
  } else {
    botao.textContent = "Modo Escuro"; // Texto para ir ao escuro
  }
}


botao.addEventListener('click', alternaModoEscuro);