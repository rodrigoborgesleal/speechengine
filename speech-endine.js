const utterance = new SpeechSynthesisUtterance()


utterance.lang = "pt-BR"




function speak() {
    speechSynthesis.speak(utterance)
}

function stop() {
    speechSynthesis.cancel()
}

function setText(event) {
    utterance.text = event.target.innerText
}
