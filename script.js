// global variables
const letters = "abcdefghijklmnopqrstuvwxyz"; // letters available to for password
var lettersArray = letters.split(''); // letters as an array

const specChar = ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~"; // List of special characters.  Concatenated to inlude single and double quotation marks
var specCharArray = specChar.split(''); // specChar as an array

var passLength = null; // variable for length of characters of password

var lower = true; // boolean to include lowercase characters in password
var upper = true; // boolean to include upperchase characters in password
var digits = true; // boolean to include numbers in password
var specCharOpt = true; // boolean to include special characters in password
var review = false; // boolean to allow user to review criteria options

console.log(specCharArray);
console.log(lettersArray);

// Assignment Code
var generateBtn = document.querySelector("#generate");

console.log(passLength);

// Write password to the #password input
function writePassword() {
  passLength = window.prompt("Set number of characters between 8 and 128");
  if (passLength === null) {
    return;
  } else if (passLength < 8 || passLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    writePassword()
  } else {
    lower = window.confirm("Do you want your password to include lowercase characters?");
    upper = window.confirm("Do you want your password to include UPPERCASE characters?");
    
    if (lower === false && upper === false) {
      window.alert("The password must contain uppercase characters, lowercase characters, or both!");
      writePassword();
    } 

    digits = window.confirm("Do you want your password to include numbers?");
    specCharOpt = window.confirm("Do you want your password to include special characters?");
    review = window.confirm("Does this look correct?\nCharacter Length: " + passLength + "\nLowercase Characters:" + lower + "\nUPPERCASE Characters: " + upper + "\nInclude Numbers: " + digits + "\nSpecial Characters: " + specCharOpt);
    
    if (review === true) {
      generatePassword();
    } else {
      writePassword();
    }
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.getElementsByTagName("textarea").InnerHTML = password

/** click event = begin prompt functions
 * PROMPT for character length
 *   if length does not fall between 8 and 128, add ALERT to remind user of criteria and restart function
 * CONFIRM for lowercase characters
 * CONFIRM for uppercase characters
 * CONFIRM for special characters
 * CONFIRM all criteria is correct
 *   if true, continue to password generator function, if false restart function
 */