// Assignment Code
var generateBtn = document.querySelector("#generateBtn");
var upperLetter = confirm("Do you want upper case letters?");
var lowerLetter = confirm("Do you want lower case letters?");
var num = confirm("Do you want numbers?");
var special = confirm("Do you want special characters?");
var passwordLength = prompt("Choose a password length between 8 and 128 characters.");
var passwordLen = parseInt(passwordLength)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

if (passwordLen >= 7 && passwordLen <= 128) {
  function generatePassword() {
    var emptyString = "";
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
    if (upperLetter === true) {
      emptyString += uppercase
    };
  
    if (lowerLetter === true) {
      emptyString += lowercase
    };
  
    if (num === true) {
      emptyString += numbers
    };
  
    if (special === true) {
      emptyString += symbols
    };
  
    var password = '';
    for (var i = 0; i < passwordLen; i++) {
      password += emptyString.charAt(Math.floor(Math.random() * emptyString.length));
         
    }
    console.log(password)
    return password;
  }
} else {
  alert("Password must be between 8 and 128 characters.")
}
  




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}