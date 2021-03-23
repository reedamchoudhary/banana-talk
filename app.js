var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");


console.log(txtInput)
function clickHandler(){
    console.log("new clicked!");
    console.log("input was-->", txtInput.value);
};

btnTranslate.addEventListener("click", clickHandler);

