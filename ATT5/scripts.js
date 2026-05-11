function mostrarErro(mensagem, idElemento) {
    var elementoErro = document.querySelector(`#${idElemento}`);
    elementoErro.textContent = mensagem;
    elementoErro.classList.remove('oculto');
    setTimeout(function() {
        elementoErro.classList.add('oculto');
    }, 3000);
}

var botaoExibir = document.querySelector('#botaoExibir');

function exibirConteudo() {
    var caixaDeTexto = document.querySelector('#caixaDeTexto');
    var conteudo = caixaDeTexto.value.trim(); 

    if (!conteudo) {
        mostrarErro('O campo não pode estar vazio', 'mensagemErro');
        return;
    }

    document.querySelector('#conteudo').innerHTML = conteudo;
}

botaoExibir.addEventListener('click', exibirConteudo);

document.querySelector('#botaoErro').addEventListener('click', function() {
    mostrarErro('O campo deve ser preenchido', 'mensagemErro');
});