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

// Prompt function used to ask the user to enter the desired length of the password.
function getPasswordOptions() {
  // parseInt is used to convert the input into an integer.
  var length = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
  
//password length validation: The function checks if the entered length is a valid number and falls within the range of 8 to 128
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  return null;

    var includeUppercase = confirm("Include uppercase letters?");
    var includeLowercase = confirm("Include lowercase letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special characters?");

    // Validate that at least one criteria is selected
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
        alert("Please select at least one password criteria.");
        return null;
    }

    // Return an object with password options
    return {
        length: length,
        includeUppercase: includeUppercase,
        includeLowercase: includeLowercase,
        includeNumbers: includeNumbers,
        includeSpecialChars: includeSpecialChars
    };
}
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);