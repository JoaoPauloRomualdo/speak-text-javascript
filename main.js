const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-br";
utterance.rate = 1;
function speak() {
    speechSynthesis.speak(utterance);
}

function stop() {
    speechSynthesis.cancel();
}

function setText(event) {
    utterance.text = event.target.innerText;
}