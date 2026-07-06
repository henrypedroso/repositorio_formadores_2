<button onclick = "verificaAprovacao()">Coletar nota</button>

function verificaAprovacao() {
    let nota = prompt ("Qual é a nota?");

    if(nota >= 7){
        alert("Aprovado")
    }else{
         alert("Reprovado")
    }
    
}