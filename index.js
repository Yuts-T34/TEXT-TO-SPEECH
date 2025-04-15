let speech = new SpeechSynthesisUtterance();

let play_btn = document.querySelector("#play-listening");

let vioces = [];
let vioces_select = document.querySelector("#select-leng");

window.speechSynthesis.onvoiceschanged = () => {
    vioces = window.speechSynthesis.getVoices();
    vioces.forEach((vioce, i) => {
        vioces_select.options[i] = new Option(vioce.name, i);
    });
};

play_btn.addEventListener('click', () => {
    speech.text = document.querySelector("#text-box").value;
    let option_get_value = document.querySelector("#select-leng").value;
    console.log(option_get_value);
    speech.voice = vioces[option_get_value];
    window.speechSynthesis.speak(speech);
});