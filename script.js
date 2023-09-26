// global variables
const letters = "abcdefghijklmnopqrstuvwxyz"; // letters available to for password
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specChar = ' !"#$%&' + "()*+,-./:;<=>?@[\]^_`{|}~"; // List of special characters.  Concatenated to inlude single and double quotation marks
const digits = "0123456789"

var passLength = null; // variable for length of characters of password

var lower = true; // boolean to include lowercase characters in password
var upper = true; // boolean to include upperchase characters in password
var digitsOpt = true; // boolean to include numbers in password
var specCharOpt = true; // boolean to include special characters in password
var review = false; // boolean to allow user to review criteria options


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword); // Event listener to generate button

// user selections for password criteria
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
    review = window.confirm("Does this look correct?\nCharacter Length: " + passLength + "\nLowercase Characters: " + lower + "\nUPPERCASE Characters: " + upper + "\nInclude Numbers: " + digitsOpt + "\nSpecial Characters: " + specCharOpt);
    
    if (review === true) {
      generatePassword();
    } else {
      writePassword();
    }
  }
};

// password randomizer based on selected user criteria
function generatePassword() {
  var password = '';
  var charSet = '';
  if (lower) charSet += letters;
  if (upper) charSet += upperLetters;
  if (digitsOpt) charSet += digits;
  if (specCharOpt) charSet += specChar;
  
  console.log(charSet);
  
  // for loop adapted from @MelvinAdekanye on Youtube
  for (var i, i = 0; i < passLength; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length))
  }
  console.log(password);

  
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
};





