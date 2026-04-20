// usando o  getElementById
var botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "O texto deste h2 foi alterado!";
    paragrafo.style.color = "red";
});

const paragrafos = document.getElementsByTagName('p');
if (paragrafos.length > 0) {
    paragrafos[0].style.fontFamily = 'Courier New'; 
}

var btnConta = document.getElementById("btnContar");
var divResultado = document.getElementById("resultado-contagem");

btnConta.addEventListener("click", function() {
    var paragrafos = document.querySelectorAll("body > p"); // Conta apenas os parágrafos diretamente dentro do body
    divResultado.innerText = "Número de parágrafos: " + paragrafos.length;
});

btnlimpar.addEventListener("click", function() {
    var divConteudo = document.querySelector("body");
    var paragrafos = divConteudo.getElementsByTagName("p");
    for (var i = 0; i < paragrafos.length; i++) {
        paragrafos[i].remove();
    }
    divResultado.innerText = "Parágrafos removidos!";
});

const botaoCor = document.getElementById('btnAlterarCor');
const paragrafo = document.getElementById('meuParagrafo');

botaoCor.addEventListener('click', function() {
  paragrafo.style.backgroundColor = 'lightblue';
});



