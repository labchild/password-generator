// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// user selections
// var userCharacters = [];
// passwordArray = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate a password
var generatePassword = function () {
  // get user options
  var lowerConfirm = window.confirm("Would you like to include lowercase characters in your password?");
  var upperConfirm = window.confirm("Would you like to include uppercase characters in your password?");
  var numberComfirm = window.confirm("Would you like to include numeric characters (numbers) in your password?");
  var specialConfirm = window.confirm("Would you like to include special characters in your password?");
  var length = window.prompt("How long would you like our password to be? Choose any number 8 - 128.");

  var userCharacters = [];
  var passwordArray = [];

  // check for valid password length
  if (length < 8 || length > 128) {
      window.confirm("Please choose a number 8 - 128!");
      length = window.prompt("How long would you like our password to be? Choose any number 8 - 128.");
      console.log(length);
  } else {
      console.log(length);
  }

  userLength = parseInt(length);

  if (!lowerConfirm && !upperConfirm && !numberComfirm && !specialConfirm) {
      window.alert("You must select at least one character set to use. Please try again.");
      lowerConfirm = window.confirm("Would you like to include lowercase characters in your password?");
      upperConfirm = window.confirm("Would you like to include uppercase characters in your password?");
      numberComfirm = window.confirm("Would you like to include numeric characters (numbers) in your password?");
      specialConfirm = window.confirm("Would you like to include special characters in your password?");
  }

  // if user confirmed lower case, include lower case
  if (lowerConfirm) {
      userCharacters = userCharacters.concat(lowerCasedCharacters);
      console.log("include lower case " + lowerConfirm);
      // console.log(userCharacters);
  }

  // if user confirmed special, include special
  if (specialConfirm) {
      userCharacters = userCharacters.concat(specialCharacters);
      console.log("include special " + specialConfirm);
  }

  // if user confirmed upper case, include upper case
  if (upperConfirm) {
      userCharacters = userCharacters.concat(upperCasedCharacters);
      console.log("include upper case " + upperConfirm);
  }

  // if user confirmed numbers, include numbers
  if (numberComfirm) {
      userCharacters = userCharacters.concat(numericCharacters);
      console.log("include numbers " + numberComfirm);
  }

  // log userCharacters array
  console.log(userCharacters);

  // loop randomly through userCharacters to fill password array
  for (var i = 0; i < userLength; i++) {
      var random = Math.floor(Math.random() * userCharacters.length);
      passwordArray.push(userCharacters[random]);
  }
  console.log(passwordArray);
  return passwordArray.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);