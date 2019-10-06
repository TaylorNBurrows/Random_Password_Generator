document.querySelector("#generate").addEventListener("click", function() {
    var numberOfChar = prompt("How many characters do you want the password to be?")
    var hasSpecialChar = confirm("Do you want special characters in the password?")
    var hasNumericChar = confirm("Do you want numbers in the password?")
    var hasUpperChar = confirm("Do you want upper case letters in the password?")
    var hasLowerChar = confirm("Do you want lower case letters in the password?")
    genPassword(numberOfChar, hasSpecialChar, hasNumericChar, hasUpperChar, hasLowerChar)
})
var special = "!@#$%^&*()+=.~".split("");
var numbers = "1234567890".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
function getRandomValue(arr) {
    var randomIndex = Math.floor((Math.random) * arr.length)
    return arr[randomIndex]
}
function genPassword(numberOfChar, hasSpecialChar, hasNumericChar, hasUpperChar, hasLowerChar) {
    var randomSpecialChar;
    var randomNumericChar;
    var randomUpperChar;
    var randomLowerChar;
    if (hasSpecialChar) {
        randomSpecialChar = getRandomValue(special)
    }
    if (hasNumericChar) {
        randomNumericChar = getRandomValue(numbers)
    }
    if (hasUpperChar) {
        randomUpperChar = getRandomValue(upper)
    }
    if (hasLowerChar) {
        randomLowerChar = getRandomValue(lower)
    }
    }
}