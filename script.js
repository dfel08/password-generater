// Assignment Code
var generateBtn = document.querySelector("#generateBtn");


var upperLetter = confirm("Do you want upper case letters?");
var lowerLetter = confirm("Do you want lower case letters?");
var num = confirm("Do you want numbers?");
var special = confirm("Do you want special characters?");
var passwordLength = prompt("Choose a password length between 8 and 128 characters.");

function generatePassword(passwordLength, special, num, lowerLetter, upperLetter) {
  var emptyString = "";
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
  if (upperLetter === true) {
    emptyString.concat(uppercase)
  };

  if (lowerLetter === true) {
    emptyString.concat(lowercase)
  };

  if (num === true) {
    emptyString.concat(numbers)
  };

  if (special === true) {
    emptyString.concat(symbols)
  };
console.log(emptyString);
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password += emptyString.charAt(Math.floor(Math.random() * emptyString.length));
       
  }
  console.log(password)
  // return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
