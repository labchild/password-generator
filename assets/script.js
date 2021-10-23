// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// include upper case, lowercase, numeric, special characters
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// use window.confirm()
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// use prompt, parseInt response
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// display resulting string by creating element .card-body text-area (replace placeholder text)

// Assignment code here
var passwordLength = function () {
  var length = window.prompt(
    "How long would you like your password to be, between 8 and 128 characters? Choose any number, 8 - 128."
  );
  // check for valid password length
  if (length < 8 || length > 128) {
    window.confirm("Please choose a number 8 - 128!");
    passwordLength();
  } else {
    console.log(length);
    return length;
  }
};

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
var userCharacters = [];
passwordArray = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate a password
var generatePassword = function () {
  // get user options
  var lowerConfirm = window.confirm("Would you like to include lowercase characters in your password?");
  var upperConfirm = window.confirm("Would you like to include uppercase characters in your password?");
  var numberComfirm = window.confirm("Would you like to include numeric characters (numbers) in your password?");
  var specialConfirm = window.confirm("Would you like to include special characters in your password?");
  

  // set string length to user selected value (parse it!)
  userLength = parseInt(Math.floor(passwordLength()));

  // loop to fill each empty position in password (length set by user)
  // if user confirmed lower case, include lower case
  if (lowerConfirm) {
    userCharacters = userCharacters.push(lowerCasedCharacters);
    console.log("lower case");
  };

  // if user confirmed upper case, include upper case
 /* if (upperConfirm) {
    userCharacters = userCharacters.concat(upperCasedCharacters);
    console.log("upper case");
  }; */

  // if user confirmed numbers, include numbers
  if (numberComfirm) {
    userCharacters = userCharacters.push(numericCharacters);
    console.log("number");
  };

  // if user confirmed special, include special
  if (specialConfirm) {
    userCharacters = userCharacters.push(specialCharacters);
    console.log("special");
  };

  // loop randomly through userCharacters to fill
  for (var i = 0; i < userLength; i++) {
    var random = Math.floor(Math.random() * userCharacters.length);
    passwordArray = passwordArray.push(passwordArray[random]);
    console.log(passwordArray);
    // return passwordArray.toString();
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.getElementById("#password").textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
