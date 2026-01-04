
let count = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function updateUI() {
  countEl.textContent = count;
}

function increment() {
  count++;
  updateUI();
}

function decrement() {
  count = Math.max(count - 1, 0);
  updateUI();
}

function reset() {
  count = 0;
  updateUI();
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

updateUI();
