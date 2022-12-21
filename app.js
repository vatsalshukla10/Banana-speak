var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputdiv = document.querySelector("#output");



function clickHandler() {
    outputdiv.innerText = "The output is!!" +  txtInput.value;
}; 

btnTranslate.addEventListener("click", clickHandler) 