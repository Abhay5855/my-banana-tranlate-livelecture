
var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input");


var outDiv = document.querySelector("#output");

// outDiv.innerText = "Abhay patil";

console.log(txtInput);

function clickHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
    console.log("output", outDiv.value);
};

btnTranslate.addEventListener("click", clickHandler)