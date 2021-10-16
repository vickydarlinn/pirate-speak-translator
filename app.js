const btntranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("something wrong with server! try again after some time");
}

function clickHandler() {
  // outputDiv.innerHTML = "hhjh"+txtInput.nodeValue;
  const inputText = txtInput.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      const tText = json.contents.translated;
      outputDiv.innerText = tText;
    })
    .catch(errorHandler);
}

btntranslate.addEventListener("click", clickHandler);
