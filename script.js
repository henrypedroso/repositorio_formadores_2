JavaScript
function verificaIdade() {
    let idade = prompt("Qual é a sua idade?");
    
    if(idade >= 18) {
        console.log("já pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
}