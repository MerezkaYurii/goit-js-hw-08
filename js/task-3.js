const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", handlerInput);
function handlerInput(event){
     if(textInput.value.trim() === "") 
     {
       return textOutput.innerHTML = "Anonymous";
     }
     return textOutput.innerHTML = textInput.value.trim();
    }