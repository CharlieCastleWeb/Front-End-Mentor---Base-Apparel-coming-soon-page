
let emailInput = document.getElementById("email-input");
const submitButton = document.getElementById("submit-button");
const emailValidation = document.getElementsByClassName("email-validation");
const exclamation = document.getElementsByClassName("exclamation");
const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

submitButton.addEventListener("click", validate);

function showValidationMessage() {
    emailValidation[0].classList.add("show");
    exclamation[0].classList.add("show");
    emailInput.classList.add("input-invalid");
}

function removeValidationMessage() {
    emailValidation[0].classList.remove("show");
    exclamation[0].classList.remove("show");
    emailInput.classList.remove("input-invalid");
}

function validate(e) {
    e.preventDefault();
    if(!emailInput.value) {
        emailValidation[0].innerText = "You need to provide an email";
        showValidationMessage();
        console.log("You need to provide an email");
    } else if(!emailInput.value.match(regex)) {
        emailValidation[0].innerText = "Please provide a valid email";
        showValidationMessage();
        console.log("Please provide a valid email");
    } else {
        removeValidationMessage();
        console.log("Valid email");
    }
}