const toggleBtn = document.querySelector(".toggleBtn");
const items = document.querySelectorAll(".item");

items.forEach(item => item.style.backgroundColor = "green");

function toggleColor() {
  items.forEach(item => {
    item.style.backgroundColor = item.style.backgroundColor === "green"
      ? "black"
      : "green";
  });
}

toggleBtn.addEventListener("click", toggleColor);