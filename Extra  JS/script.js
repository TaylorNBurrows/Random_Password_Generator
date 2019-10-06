// window.onload = function() {}
//     //run js code here that you want to load after the page.... this isn't working.

var charNumPrompt = prompt("How many characters would you like your password to contain (**Must be between 8 and 128 characters**)?")

var instructions = confirm('Click the "Set Parameters" button to get started')

document.querySelector("#setSearchParameters").addEventListener("click", function () {
    var specialCharConfirm = confirm("Click OK to confirm including special characters")
    var numericCharConfirm = confirm("Click OK to confirm including numeric characters")
    var lowerCharConfirm = confirm("Click OK to confirm including lowercase characters")
    var upperCharConfirm = confirm("Click OK to confirm including uppercase characters")

    generate(charNumPrompt, specialCharConfirm, numericCharConfirm, lowerCharConfirm, upperCharConfirm)
})


var upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(" ");
var lowerCaseValues = "abcdefghijklmnopqrstuvwxyz".split(" ");
var specialCharValues = "!@#$%^&*()_+-?/".split(" ");
var numericValueOpt = "1234567890".split(" ");

var passValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-?/";

//create variable that captures the password Length

// var numParse = parseInt(charNumPrompt);    
var passwordLength = charNumPrompt;

//select html elements/classes to use later. 
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var passwordOptionResult = "";

var pwdPlaceholder = document.querySelector("#password");

var passwordValues = [upperCaseValues, lowerCaseValues, specialCharValues, numericValueOpt]
var passwordOptionResult = ""

function generate() {

    for (let i = 0; i <= passwordLength; i++) {
        passwordOptionResult = passwordOptionResult + passValues.charAt(Math.floor(Math.random() * Math.floor(passValues.length - 1)));
    }

    pwdPlaceholder.value = passwordOptionResult
    generate()
}

console.log("my password is " + generate())


//copy to clipboard
function copyBtn() {
    document.getElementById("password").select();

    document.execCommand("Copy");

    alert("Your password " + generatedPassword + "has been successfully copied to the clipboard")
}

// generateBtn.addEventListener("click", generate())


//need to prompt user for input. Want it to load after the page loads
//First Question (prompt): How many characters would you like your password to contain? 
// var charNumPrompt = prompt("How many characters would you like your password to contain (**Must be between 8 and 128 characters**)?")

//Second Question (confirm): Special Characters? Yes or No / Boolean
// var specialCharConfirm = confirm("Click OK to confirm including special characters")

//Third Question (confirm): Numberic Values? yes or no / boolean
// var numericCharConfirm = confirm("Click OK to confirm including numeric characters")

//Fourth Question (confirm) Lowercase Values? yes or no / boolean
// var lowerCharConfirm = confirm("Click OK to confirm including lowercase characters")

//Fourth Question (confirm) uppercase Values? yes or no / boolean
// var upperCharConfirm = confirm("Click OK to confirm including uppercase characters")

//need to create a variable that holds all of the possible password characters 
//needs to be alphanumeric and allow special characters. !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~. I think you have to separate them out into different groups because of the prmpts above allowing for the different combinations. 
//validate user input make sure at least one "type" is selected by the user. 


//need to generate a random password that ranges between 8 and 128 characters based on the answers above. Need to use a for loop and if/else conditional statements. First we set the characteristics of the password 

// function setCharacteristics() {
//     for (var i = 8; i <= passwordLength; i++) {

//         //password has to be greater than 8 and less than 128 characters. need to add validation point

//         if (passwordLength >= 8 && passwordLength <= 128) {
//             if (specialCharConfirm && numericCharConfirm && lowerCharConfirm && upperCharConfirm) {
//                 passwordOptionResult = passwordOptionResult + specialCharValues + numericValueOpt + lowerCaseValues + upperCaseValues
//             } else if (specialCharConfirm === false) {
//                 passwordOptionResult = passwordOptionResult + numericValueOpt + lowerCaseValues + upperCaseValues
//             } else if (numericCharConfirm === false) {
//                 passwordOptionResult = passwordOptionResult + specialCharValues + lowerCaseValues + upperCaseValues
//             } else if (lowerCharConfirm === false) {
//                 passwordOptionResult = passwordOptionResult + specialCharValues + numericValueOpt + upperCaseValues
//             } else if (upperCharConfirm === false) {
//                 passwordOptionResult = passwordOptionResult + specialCharValues + numericValueOpt + lowerCaseValues
//             } else {
//                 alert("Please select at least one parameter. Refresh page to try again.")
//             }

//         }

//     }
// }


//create password array


// var generatedPassword = passwordOptionResult;

//create random value function

// function getRandomValue(passwordArray) {
//     var randomIndex = passwordArray.charAt(Math.floor(Math.random()*Math.floor(passwordArray.length-1)))
//     return passwordArray[randomIndex]
// }

//next we have to use the loop to choose random password characters. 

// var passwordResult = "";
// function generate(specialCharConfirm,numericCharConfirm,lowerCharConfirm,upperCharConfirm) {
//     var randomSpecial;
//     var randomNumeric;
//     var randomUpper;
//     var randomLower;

//     if(specialCharConfirm) {
//         randomSpecial = getRandomValue(specialCharValues)
//     } 
//     if(numericCharConfirm) {
//         randomNumeric = getRandomValue(numericValueOpt)
//     }
//     if(lowerCharConfirm) {
//         randomLower = getRandomValue(lowerCaseValues)
//     }
//     if(upperCharConfirm) {
//         randomUpper = getRandomValue(upperCaseValues)
//     }

//     passwordResult = passwordResult + randomSpecial + randomNumeric + randomLower + randomUpper
// }