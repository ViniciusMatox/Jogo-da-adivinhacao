const elementoChute = document.getElementById('chute')


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;


const recognition = new SpeechRecognition()
recognition.lang = "pt-br"
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChute(chute)
    verificaValorDoChute(chute)
}

function exibeChute(chute) {
    elementoChute.innerHTML = `
    <div>Voce disse</div>
    <span class="box">${chute}</span>`
}

recognition.addEventListener('end', ()  => recognition.start())
