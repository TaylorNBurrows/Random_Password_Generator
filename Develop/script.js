//need to prompt user for input


//need to create a variable that holds all of the possible password characters 
//needs to be alphanumeric and allow special characters. !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

var generateBtn = document.querySelector("#generate")
var copyBtn = document.querySelector("#copy")

var passValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-?/";

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