var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("textarea");
var translator = document.querySelector("input[name='translator']")
btnTranslate.addEventListener("click", function clickEventHandler(){
    console.log("clicked");
    console.log("You typed --> "+txtArea.value);
    console.log("input wala--> "+translator.value)
})