const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) =>{
event.preventDefault();
const element = event.target.elements;
if(element.email.value === "" || element.password.value === ""){
    alert('All form fields must be filled in')
}
const resolt = {
    email: element.email.value.trim(),
    password: element.password.value.trim(),
}
console.log(resolt);
event.target.reset();
})

