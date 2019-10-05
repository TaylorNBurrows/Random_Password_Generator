// window.onload = function() {}
//     //run js code here that you want to load after the page.... this isn't working.

//need to prompt user for input. Want it to load after the page loads
    //First Question (prompt): How many characters would you like your password to contain? 
    var charPrompt = prompt("How many characters would you like your password to contain (**Must be between 8 and 128 characters**)?")
    
    //Second Question (confirm): Special Characters? Yes or No / Boolean
    var specialCharConfirm = confirm("Click OK to confirm including special characters")

    //Third Question (confirm): Numberic Values? yes or no / boolean
    var numericCharConfirm = confirm("Click OK to confirm including numeric characters")

    //Fourth Question (confirm) Lowercase Values? yes or no / boolean
    var lowerCharConfirm = confirm("Click OK to confirm including lowercase characters")

    //Fourth Question (confirm) uppercase Values? yes or no / boolean
    var upperCharConfirm = confirm("Click OK to confirm including uppercase characters")







//need to create a variable that holds all of the possible password characters 
//needs to be alphanumeric and allow special characters. !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var specialCharValues = "!@#$%^&*()_+-?/"
var numberOptions = "1234567890"

// var passValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-?/";

//select html elements/classes to use later. 
var generateBtn = document.querySelector("#generate")
var copyBtn = document.querySelector("#copy")
var passwordResult = "";

var pwdPlaceholder = document.querySelector("#password")

//need to generate a random password that ranges between 8 and 128 characters

function generate () {
    for(var i = 8; i <= 65; i++){
        passwordResult = passwordResult + passValues.charAt(Math.floor(Math.random()*Math.floor(passValues.length-1)));
    }

    pwdPlaceholder.value = passwordResult
}

console.log("my password is " + generate())


pwdPlaceholder.addEventListener("click")



//validate user input make sure at least one "type" is selected by the user. 