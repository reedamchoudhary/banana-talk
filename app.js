var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");
function clickHandler(){
    outputText.innerText = "jgsbhkjgnje "+txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);

