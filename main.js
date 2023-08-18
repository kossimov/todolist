var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elList = document.querySelector(".list");

var num = [];
function mainResult() {
    for(var word of num) {
    var elNewWord = document.createElement("li");
    elList.appendChild(elNewWord);
    elNewWord.textContent = word;   
}
}

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    elList.innerHTML = "";


    var elInputVal = capitalCase(elInput.value);
    num.push(`${num.length+1}. ${elInputVal}`);
    elInput.value = '';
    mainResult();
})

function capitalCase(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
};