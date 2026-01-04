
let word = "Hello World!"

const wordEl = document.getElementById("word");
const button = document.getElementById("togglebtn");

function toggleword () {
    word = word === "Hello World!" ? "Goodbye" : "Hello World!";
    wordEl.textContent = word
}
button.addEventListener("click", toggleword);