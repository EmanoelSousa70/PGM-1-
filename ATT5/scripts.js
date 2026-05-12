function mostrarErro(mensagem, idElemento) {
  var elementoErro = document.querySelector(`#${idElemento}`);
  elementoErro.textContent = mensagem;
  elementoErro.classList.remove('oculto');
  setTimeout(function() {
    elementoErro.classList.add('oculto');
  }, 3000);
}






// QUESTÃO 1 E 2

document.querySelector('#botaoErro').addEventListener('click', function() {
  mostrarErro('O campo deve ser preenchido', 'mensagemErro');
});

document.querySelector('#botaoExibir').addEventListener('click', exibirConteudo);



function exibirConteudo() {
  var caixa = document.querySelector('#caixaDeTexto');
  var texto = caixa.value.trim();
  if (!texto) {
    mostrarErro('O campo não pode estar vazio', 'mensagemErro');
    return;
  }
  document.querySelector('#conteudo').innerHTML = texto;
}







// QUESTÃO 3

document.querySelector('#calcularEngajamento').addEventListener('click', calcularEngajamento);



function calcularEngajamento() {
  var interacoes = document.querySelector('#interacoes').value;
  var visualizacoes = document.querySelector('#visualizacoes').value;
  if (
    isNaN(interacoes) ||
    isNaN(visualizacoes) ||
    interacoes.trim() === '' ||
    visualizacoes.trim() === ''
  ) {
    mostrarErro('Digite apenas números válidos', 'erroEngajamento');
    return;
  }
  var taxa = (Number(interacoes) / Number(visualizacoes)) * 100;
  document.querySelector('#resultadoEngajamento').innerHTML =
    'Taxa de Engajamento: ' + taxa.toFixed(2) + '%';
}







// QUESTÃO 4

document.querySelector('#carregarImagem')
.addEventListener('click', carregarImagem);



function carregarImagem() {
  var uploadImagem = document.querySelector('#uploadImagem');
  var arquivoSelecionado = uploadImagem.files[0];
  if (!arquivoSelecionado) {
    return;
  }
  var img = document.createElement('img');
  img.src = URL.createObjectURL(arquivoSelecionado);
  var resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  resultado.appendChild(img);
}







// QUESTÃO 5

document.querySelector('#selectImagem')
.addEventListener('change', trocarImagem);



function trocarImagem() {
  var endereco = document.querySelector('#selectImagem').value;
  var div = document.querySelector('#imagemSelecionada');
  div.innerHTML = '';
  if (endereco === '') {
    return;
  }
  var img = document.createElement('img');
  img.src = endereco;
  div.appendChild(img);
}







// QUESTÃO 6

document.querySelector('#enviarBtn')
.addEventListener('click', enviarRedes);



function enviarRedes(){

var redes =
document.querySelectorAll(
'input[name="redesSociais"]'
);

var selecionadas = [];

redes.forEach(function(rede){

if(rede.checked){

selecionadas.push(rede.value);

}

});

if(selecionadas.length === 0){

mostrarErro(
'Selecione pelo menos uma rede social',
'erroRedes'
);

return;

}

document.querySelector('#redesSelecionadas')
.innerHTML =
selecionadas.join(', ');

}








// QUESTÃO 7 8 9

document.querySelector('#adicionarHashtag')
.addEventListener('click', adicionarHashtag);

document.querySelector('#removerHashtag')
.addEventListener('click', removerHashtag);



function adicionarHashtag(){

var input =
document.querySelector('#hashtagInput');

var texto =
input.value.trim();

var select =
document.querySelector('#listaHashtags');

if(texto === ''){

mostrarErro(
'Hashtag vazia',
'erroHashtag'
);

return;

}

if(texto.length < 2){

mostrarErro(
'Hashtag muito curta',
'erroHashtag'
);

return;

}

if(select.options.length >= 5){

mostrarErro(
'Máximo de 5 hashtags',
'erroHashtag'
);

return;

}

for(var i=0; i<select.options.length; i++){

if(
select.options[i].value.toLowerCase()
=== texto.toLowerCase()
){

mostrarErro(
'Hashtag repetida',
'erroHashtag'
);

return;

}

}

var option =
document.createElement('option');

option.value = texto;

option.textContent = texto;

select.appendChild(option);

input.value = '';

}



function removerHashtag(){

var select =
document.querySelector('#listaHashtags');

var selecionada =
select.selectedOptions[0];

if(selecionada){

select.removeChild(selecionada);

}

}








// QUESTÃO 10 E 11

document.querySelector('#moverDireita')
.addEventListener('click', function(){

moverItens(
'ativosDisponiveis',
'carteiraInvestimentos'
);

});


document.querySelector('#moverEsquerda')
.addEventListener('click', function(){

moverItens(
'carteiraInvestimentos',
'ativosDisponiveis'
);

});

function moverItens(origemId, destinoId){

var origem =
document.querySelector(`#${origemId}`);

var destino =
document.querySelector(`#${destinoId}`);

var selecionados =
Array.from(origem.selectedOptions);

if(selecionados.length === 0){

mostrarErro(
'Selecione pelo menos um item',
'erroCarteira'
);

return;

}

selecionados.forEach(function(item){

destino.appendChild(item);

});

atualizarBotoes();

}

function atualizarBotoes(){
var disponiveis =
document.querySelector('#ativosDisponiveis');

var carteira =
document.querySelector('#carteiraInvestimentos');

document.querySelector('#moverDireita')
.disabled =
disponiveis.options.length === 0;

document.querySelector('#moverEsquerda')
.disabled =
carteira.options.length === 0;

}

atualizarBotoes();