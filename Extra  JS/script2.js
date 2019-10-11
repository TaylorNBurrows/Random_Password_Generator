var numberOfChar;
var hasSpecialChar;
var hasNumericChar;
var hasUpperChar;
var hasLowerChar;

document.querySelector("#generateBtn").addEventListener("click", function() {
    numberOfChar = prompt("How many characters do you want the password to be?")
    hasSpecialChar = confirm("Do you want special characters in the password?")
    hasNumericChar = confirm("Do you want numbers in the password?")
    hasUpperChar = confirm("Do you want upper case letters in the password?")
    hasLowerChar = confirm("Do you want lower case letters in the password?")
    generate(numberOfChar, hasSpecialChar, hasNumericChar, hasUpperChar, hasLowerChar)
})

var special = "!@#$%^&*()+=.~".split("");
var numbers = "1234567890".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");


function getRandomValue(arr) {
    var randomIndex = Math.floor((Math.random) * arr.length)
    return arr[randomIndex]
}


var passwordResult = ""

function generate(numberOfChar, hasSpecialChar, hasNumericChar, hasUpperChar, hasLowerChar) {
    var randomSpecialChar;
    var randomNumericChar;
    var randomUpperChar;
    var randomLowerChar;
    // if(numberOfChar<8 || numberOfChar >128){
    //     alert("HEY! Your Password needs to be within 8 and 128 characters")
    //     return
    // }
    
    if (hasSpecialChar) {
        randomSpecialChar = getRandomValue(special)
    }
    if (hasNumericChar) {
        randomNumericChar = getRandomValue(numbers)
    }
    if (hasUpperChar) {
        randomUpperChar= getRandomValue(upper)
    }
    if (hasLowerChar) {
        randomLowerChar = getRandomValue(lower)
    }
    
    passwordResult = randomSpecialChar + randomNumericChar + randomUpperChar + randomLowerChar

    document.querySelector("#password").textContent = passwordResult;
    

    }
    
//copy to clipboard
function copyBtn() {
    document.getElementById("password").select();

    document.execCommand("Copy");

    alert("Your password " + generatedPassword + "has been successfully copied to the clipboard")
}