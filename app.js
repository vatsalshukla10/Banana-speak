var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputdiv = document.querySelector("#output");
//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text 
}



function clickHandler() {
    outputdiv.innerText = "The output is!!" +  txtInput.value;
var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}; 

btnTranslate.addEventListener("click", clickHandler) 