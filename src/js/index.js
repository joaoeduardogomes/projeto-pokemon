const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;


// Avançar pro próximo cartão
btnAvancar.addEventListener('click', () => {
    if (cartaoAtual === cartoes.length-1) return; /* O evento só vai até onde é necessário. 
    Podemos substituir 'return' por 'cartaoAtual = -1' pra dar a volta no carrossel */

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});


// Voltar pro cartão anterior
btnVoltar.addEventListener('click', () => {
    if (cartaoAtual === 0) return; // Podemos substituir 'return' por 'cartaoAtual = cartoes.length' pra dar a volta no carrossel

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado'); // O cartão selecionado precisa ser verificado a cada clique.
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[cartaoAtual].classList.add('selecionado');
}