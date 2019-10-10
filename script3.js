var password;
document.querySelector("#generateBtn").addEventListener("click", function () {
    // here we initiate a choices string
    var choices = "";
    var numberOfChar = prompt("How many characters do you want the password to be?");
    var hasSpecialChar = confirm("Do you want special characters in the password?");
    var hasNumericChar = confirm("Do you want numbers in the password?");
    var hasUpperChar = confirm("Do you want upper case letters in the password?");
    var hasLowerChar = confirm("Do you want lower case letters in the password?");

    var special = "!@#$%^&*()+=.~";
    var numbers = "1234567890";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";

    // in this logic, we are generating a choices string that consists of all possible characters that we may generate a password from
    if (hasSpecialChar) {
        choices = choices.concat(special);
    }
    if (hasNumericChar) {
        choices = choices.concat(numbers);
    }
    if (hasUpperChar) {
        choices = choices.concat(upper);
    }
    if (hasLowerChar) {
        choices = choices.concat(lower);
    }
    generatePassword(choices, numberOfChar);
})
// this function will accept a string instead
function getRandomValue(str) {
    var randomIndex = Math.floor((Math.random() * str.length)); // Math.random() is a method
    return str.charAt(randomIndex);
}
// this function will take the choices string as an argument and accordingly generate the password
function generatePassword(choices, numberOfChar) {
    password = "";
    for (let i = 0; i < numberOfChar; i++) {
        password += getRandomValue(choices);
    }
    document.querySelector("#password").textContent = password;
    return password;
}
//copy to clipboard
document.querySelector("#copyBtn").addEventListener("click", function (event) {
    console.log("event is: ", event)
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Your password   " + event.view.password + "   has been successfully copied to the clipboard");

});