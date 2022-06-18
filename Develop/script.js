// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars for password type
let passwordLength, uppercaseIncluded, lowercaseIncluded, numericIncluded, specialIncluded;
// Possible character arrays
const letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
const numbers = ['1','2','3','4','5','6','7','8','9','0'];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`', '|', ';', ':', '<', ',','>','.','?','/'];

// Password Length validation
const checkPasswordLength = (passwordLength) => {
	return passwordLength > 8 && passwordLength < 128 ? true : new Error('Password length must be 8-128 characters.')
}

// Write password to the #password input
function writePassword() {
	passwordLength = Number(window.prompt('Enter desired password length (8-128): '));
	if (passwordLength < 8 || passwordLength > 128 ) {
		alert('Password must be 8-128 characters.');
		writePassword();
	} else {
	uppercaseIncluded = window.confirm('Include uppercase characters?');
	lowercaseIncluded = window.confirm('Include lowercase characters?');
	
	numericIncluded = window.confirm('Include numeric characters?');
	specialIncluded = window.confirm('Include special characters?');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

	console.log(passwordLength)
	}
}

// Generate Password from prompts

const generatePassword = () => {
	let passwordArr = [];
	let charactersArr = [];
	
	// Uppercase and lowercase included
	if (uppercaseIncluded && lowercaseIncluded) {
		letters.forEach(letter => letters.push(letter.toUpperCase()))
	}

	// All included
	if (uppercaseIncluded && lowercaseIncluded && numericIncluded && specialIncluded) {
		charactersArr = letters.concat(numbers, specials)
		// All but special included
	} else if (uppercaseIncluded && lowercaseIncluded && numericIncluded && !specialIncluded) {
		charactersArr = letters.concat(numbers)
		// All but numbers included
	} else if (uppercaseIncluded && lowercaseIncluded && !numericIncluded && specialIncluded) {
		charactersArr = letters.concat(specials)
		// All letters
	} else if ( uppercaseIncluded && lowercaseIncluded && !numericIncluded && !specialIncluded) {
		charactersArr = letters
	}

	console.log(charactersArr)
	
		for (let i=0; i<passwordLength; i++) {
			let num = Math.floor(Math.random() * charactersArr.length)
			passwordArr.push(charactersArr[num])
			console.log(passwordArr)
		}
	
	return (passwordArr.join(''))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
