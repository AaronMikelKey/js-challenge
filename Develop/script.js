// Assignment Code
var generateBtn = document.querySelector("#generate");
// vars for password characters
let passwordLength, uppercaseIncluded, lowercaseIncluded, numericIncluded, specialIncluded;
// Possible character arrays
const lowercaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const uppercaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '~', '`', '|', ';', ':', '<', ',', '>', '.', '?', '/'];

// Password Length validation
const checkPasswordLength = (passwordLength) => {
	return passwordLength > 8 && passwordLength < 128 ? true : new Error('Password length must be 8-128 characters.')
}

// One type of character selected validation
const checkCharactersSelected = () => {
	//undefined so falsy
	let bool;
	if (uppercaseIncluded || lowercaseIncluded || numericIncluded || specialIncluded) {
		bool = true;
	}
	return bool;
}

// Write password to the #password input
function writePassword() {
	passwordLength = Number(window.prompt('Enter desired password length (8-128): '));
	if (passwordLength < 8 || passwordLength > 128) {
		alert('Password must be 8-128 characters.');
		writePassword()
	} else {
		uppercaseIncluded = window.confirm('Include uppercase characters?');
		lowercaseIncluded = window.confirm('Include lowercase characters?');
		numericIncluded = window.confirm('Include numeric characters?');
		specialIncluded = window.confirm('Include special characters?');
		checkCharactersSelected() ? null : (alert('One type of character must be included.'), writePassword())
		var password = generatePassword();
		var passwordText = document.querySelector("#password");
		passwordText.value = password;
	}
}

// Generate Password from prompt selections
const generatePassword = () => {
	let passwordArr = [];
	let charactersArr = [];
	// Uppercase included, add letters to character array 
	if (uppercaseIncluded) { charactersArr = charactersArr.concat(uppercaseLetters) };
	// Lowercase included, add lowercase letters to character array
	if (lowercaseIncluded) { charactersArr = charactersArr.concat(lowercaseLetters) };
	// Special included, add specials to character array
	if (specialIncluded) (charactersArr = charactersArr.concat(specials));
	// Numbers included, add numbers to character array
	if (numericIncluded) (charactersArr = charactersArr.concat(numbers));
	// Randomly select character from character array and add to password array
	for (let i = 0; i < passwordLength; i++) {
		let num = Math.floor(Math.random() * charactersArr.length)
		passwordArr.push(charactersArr[num])
	}

	return (passwordArr.join(''))
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
