function verificaValorDoChute(chute) {
    const numero = +chute

    if (numeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return
    } 
    if (numeroMaiorQueMil(numero)) {
        elementoChute.innerHTML += `<div> VALOR INVALIDO! Escolha um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="acertou">PARABENS VOCE ACERTOU O NUMERO SECRETO</h2>
        <h3 class="numero">O número secreto era ${numeroSecreto}</h3>
        <h3 class="jogarDeNovo">Para jogar de novo só clicar no botão ;)</h3>
        <button id="jogar-novamente" class="btn__jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else{
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }

}

function numeroInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorQueMil(numero) {
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente' ){
        window.location.reload()
    }
})