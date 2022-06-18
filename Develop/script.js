// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars for password type
let passwordLength, uppercaseIncluded, lowercaseIncluded, numericIncluded, specialIncluded;
// Possible character arrays
const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`', '|', ';', ':', '<', ',','>','.','?','/'];

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
	let all = [];
	all = Array.of(all.concat(letters, numbers, specials));
	return (all)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
