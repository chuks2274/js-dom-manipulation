const items = ["Apple", "Banana", "Orange"];

const listEl = document.getElementById("itemList")

items.forEach((item, index) =>{
    const li = document.createElement("li");
    li.textContent = item;
    li.dataset.key = index;
    listEl.appendChild(li);
})