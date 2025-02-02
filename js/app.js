const $passwordLength = document.querySelector("#length");

const $currentPasswordLength = document.querySelector(".selected-length");

const $submitButton = document.querySelector("#submit");

const $generatedPassword = document.querySelector(".generated-password");

let currentLength = 10;




$passwordLength.addEventListener("input", function (e) {
    $currentPasswordLength.textContent = e.target.value
    currentLength = e.target.value;
})


function generatePassword(length) {

    let result = "";
    let parameters = "";

    const characters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    parameters += characters
    parameters += uppercaseCharacters
    parameters += numbers
    parameters += symbols

    let counter = 0;

    while (counter < length) {
        result += parameters.charAt(Math.floor(Math.random() * parameters.length));
        counter += 1;
    }
    $generatedPassword.textContent = result;
}

$submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    generatePassword(currentLength);
});
