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
  var length = parseInt(prompt("How many characters do you want? You can choose any number between 8 & 128"));
  
//password length validation- if nothing is typed, try again
if (isNaN(length) || length < 8 || length > 128) {
  alert("Please enter a valid password length between 8 and 128 characters.");
  return null;

}
  var includeUppercase = confirm("Include uppercase letters?");
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one password criteria.");
    // return null;
  }
  var passwordOptions = {
    length: length,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars
};

return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;

}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  //create empty array
  var currentArr = new Array()
  //conditional statement that concatenates new array
  if(options.includeUppercase) {
    currentArr= currentArr.concat(upperCasedCharacters)
  }

  if(options.includeLowercase) {
    currentArr= currentArr.concat(lowerCasedCharacters)
  }

  if(options.includeNumbers) {
    currentArr= currentArr.concat(numericCharacters)
  }

  if(options.includeSpecialChars) {
    currentArr= currentArr.concat(specialCharacters)
  }
  // console.log(currentArr);
  //generate random password
  let finalPassword = ""
  for (let i = 0; i <options.length; i++){
    let randomIndex =[Math.floor(Math.random() * currentArr.length)];
      finalPassword = finalPassword + currentArr[randomIndex];
  }
  return finalPassword;
  };

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
