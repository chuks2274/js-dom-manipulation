let items = ["Apple", "Banana", "Orange"];

const listEl = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

function renderList (){
    listEl.innerHTML = "";

    items.forEach((item, index) => {
        const li = document.createElement("li")
        li.textContent = `${index + 1}. ${item}`;
        li.dataset.key = index;
        listEl.appendChild(li);
    });
}
 function addItem(){
    items.push("Mango")
    renderList();
 }

 function removeItem(){
    items.pop();
    renderList();
 }
 renderList();

 addBtn.addEventListener("click", addItem);
 removeBtn.addEventListener("click", removeItem);