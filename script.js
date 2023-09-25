// global variables
const letters = "abcdefghijklmnopqrstuvwxyz"; // letters available to for password
var lettersArray = letters.split(''); // letters as an array

const specChar = ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~"; // List of special characters.  Concatenated to inlude single and double quotation marks
var specCharArray = specChar.split(''); // specChar as an array

var passLength = 8; // variable for length of characters of password

var lower = true; // boolean to include lowercase characters in password
var upper = true; // boolean to include upperchase characters in password
var digits = true; // boolean to include numbers in password
var specCharOpt = true; // boolean to include special characters in password

console.log(specCharArray);
console.log(lettersArray);

// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.getElementsByTagName("textarea").InnerHTML = password