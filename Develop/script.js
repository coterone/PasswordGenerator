// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// This is the function that generates the PW 

function generatePassword() {
  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()-_=+[]{}|;:',.<>?";

  var passwordLength = prompt("Desired password length (between 8 and 128 characters):");
  passwordLength = parseInt(passwordLength);

  // This validates the inputed value is a number & that it is betweeen 8 & 128 characters long)

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

  // This confirms which character types to include

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // This code validates that at least one character type is selected among the prompts

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type for the password to successfully generate.");
    return;
  }

  // This generates the full set of characters from which the password will be randomly generated based on the user's chosen preferences.

  var allCharacters = "";
  if (includeLowercase) allCharacters += lowercaseCharacters;
  if (includeUppercase) allCharacters += uppercaseCharacters;
  if (includeNumeric) allCharacters += numericCharacters;
  if (includeSpecial) allCharacters += specialCharacters;

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  // This displays the generated password on console & on screen
  console.log(password);
  return password;

}
