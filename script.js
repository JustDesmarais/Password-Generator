// global variables
const letters = "abcdefghijklmnopqrstuvwxyz"; // letters available to for password
var lettersArray = letters.split(''); // letters as an array

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperLettersArray = upperLetters.split('');

const specChar = ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~"; // List of special characters.  Concatenated to inlude single and double quotation marks
var specCharArray = specChar.split(''); // specChar as an array

const digits = "0123456789"
var digitsArray = digits.split('');

var passLength = null; // variable for length of characters of password

var lower = true; // boolean to include lowercase characters in password
var upper = true; // boolean to include upperchase characters in password
var digitsOpt = true; // boolean to include numbers in password
var specCharOpt = true; // boolean to include special characters in password
var review = false; // boolean to allow user to review criteria options


// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passRun = "";
  var charSet = []; 
  if (lower === true) {
    charSet.push(lettersArray);
  }
  if (upper === true) {
    charSet.push(upperLettersArray);
  }
  if (digitsOpt === true) {
    charSet.push(digitsArray);
  }
  if (specCharOpt === true) {
    charSet.push(specCharArray);
  }
  for (var i, i = 0; i < charSet.length; i++) {
    var charString = "" + charSet[i];
    console.log(charString);
  }
  for (var i, i = 0; i < passLength; i++) {
    passRun += charString.charAt(Math.floor(Math.random() * charString.length))
  }
  if (lower === true && passRun.includes(letters) === false) {
    generatePassword();
  }
  if (upper === true && passRun.includes(letters.toUpperCase) === false) {
    generatePassword();
  }
  if (digitsOpt === true && passRun.includes(digits) === false) {
    generatePassword();
  }
  if (specCharOpt === true && passRun.includes(specChar) === false) {
    generatePassword();
  }
  console.log(passRun);
}



// Write password to the #password input
function writePassword() {
  passLength = window.prompt("Set number of characters between 8 and 128");
  if (passLength === null) {
    return; // exits prompts if user hits cancel
  } else if (passLength < 8 || passLength > 128) {
    window.alert("Please enter a number between 8 and 128");
    writePassword()
  } else {
    lower = window.confirm("Do you want your password to include lowercase characters?");
    upper = window.confirm("Do you want your password to include UPPERCASE characters?");
    
    if (lower === false && upper === false) {
      window.alert("The password must contain uppercase characters, lowercase characters, or both!");
      writePassword(); // forces user to include uppercase, lowercase, or both
    } 

    digitsOpt = window.confirm("Do you want your password to include numbers?");
    specCharOpt = window.confirm("Do you want your password to include special characters?");
    review = window.confirm("Does this look correct?\nCharacter Length: " + passLength + "\nLowercase Characters:" + lower + "\nUPPERCASE Characters: " + upper + "\nInclude Numbers: " + digitsOpt + "\nSpecial Characters: " + specCharOpt);
    
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




/** click event = begin prompt functions
 * PROMPT for character length
 *   if length does not fall between 8 and 128, add ALERT to remind user of criteria and restart function
 * CONFIRM for lowercase characters
 * CONFIRM for uppercase characters
 * CONFIRM for special characters
 * CONFIRM all criteria is correct
 *   if true, continue to password generator function, if false restart function
 */

/** must build generator function
 * add lowercase array if lower === true
 * add uppercase array if lower === true
 * add numbers array if digits === true
 * add special characters if specChar === true
 * 
 * function generatePassword() {
 * var characters = function
 * for (var i, i=0; i < passLength; i++){
 *   password_string += characters.charAt(math.floor(math.random() * characters.lenght))}}
 */

