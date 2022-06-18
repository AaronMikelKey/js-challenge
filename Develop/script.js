// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars for password type
let passwordLength, uppercaseIncluded, lowercaseIncluded, numericIncluded, specialIncluded;

// Write password to the #password input
function writePassword() {
	passwordLength = Number(window.prompt('Enter desired password length (8-128): '));
	uppercaseIncluded = window.confirm('Include uppercase characters?');
	if (uppercaseIncluded == false) {
		lowercaseIncluded = true;
	} else {
		lowercaseIncluded = window.confirm('Include lowercase characters?');
	}
	
	numericIncluded = window.confirm('Include numeric characters?');
	specialIncluded = window.confirm('Include special characters?');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

	console.log(passwordLength)

}

// Generate Password from prompts

const generatePassword = () => {
	
	return (passwordLength + ' ' + uppercaseIncluded + ' ' + lowercaseIncluded + ' ' + numericIncluded + ' ' + specialIncluded)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
