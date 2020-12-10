
var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input");


var outDiv = document.querySelector("#output");



var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "? " + "text= " + text
}

// function errorHandler(error) {
//     console.log("error occured",error);
//     alert("something wrong!try again later")
// }




function clickHandler() {
    var Inputtext = txtInput.value; //taking input


     //calling server for url

    fetch(getTranslationURL(Inputtext))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outDiv.innerText = translatedText;
    })

    // .catch(errorHandler)
   


};




btnTranslate.addEventListener("click", clickHandler)