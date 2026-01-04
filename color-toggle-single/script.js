let color = "Red";

const box = document.getElementById("box");
const colorText = document.getElementById("colorText");
const button = document.getElementById("toggleBtn");

function toggleColor(){
    color = color === "Red"? "Green" : "Red" ;
    box.style.backgroundColor = color;
    colorText.textContent = color;
}
button.addEventListener("click", toggleColor);