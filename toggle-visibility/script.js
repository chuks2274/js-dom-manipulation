 let showMessage = true;

const messageEl = document.getElementById("message");
const button = document.getElementById("toggleBtn");

function toggleMessage(){
    showMessage = !showMessage;
    messageEl.style.display = showMessage ? "block" : "none";
}
button.addEventListener("click", toggleMessage);