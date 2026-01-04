const form = document.getElementById("myForm");
const successMsg = document.getElementById("successMsg");

function handleSubmit(e){
    e.preventDefault();
    showMessage("Form submitted successfully!");
    form.reset();
}

function showMessage(message){
    successMsg.textContent = message;
    setTimeout(() => {
    successMsg.textContent = "";
}, 3000);

}
form.addEventListener("submit", handleSubmit)