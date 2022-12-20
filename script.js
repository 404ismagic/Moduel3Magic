// Assignment code here

// Have some global variables here
// Following are some booleans
var includeLowerCase;
var includeUpperCase;
var includeNumbers;
var includeSpecial;

// gloabal variables to hold different valid characters sets 
var lower = 'abcdefgijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers= '0123456789'
var special = '!@#$%^&*()_+=-?><,.';

function generatePassword() {
  console.log("some one clicked generate Password  button");

  var passwordLength = parseInt(prompt("give password length between 8 - 128"));
  console.log("password Length = ", passwordLength);

  if (passwordLength < 8 || passwordLength >128) {
    alert("please  choose length between 8 and 128");
    generatePassword();
  }

  // Ask for remakining password criteria
  getPasswordCriteria();

  //Now first build the valid char set from which  to  draw the password from
  var validChars = '';
  if (includeLowerCase === true) {
    validChars += lower;
    console.log ( 'validChars = ', validChars);
  }
  if (includeUpperCase === true) {
    validChars += upper;
    console.log ( 'validChars = ', validChars);
  }
  if (includeNumbers === true) {
    validChars += numbers;
    console.log ( 'validChars = ', validChars);
  }
  if (includeSpecial === true) {
    validChars += special;
    console.log ( 'validChars = ', validChars);
  }
}

function  getPasswordCriteria() {
  includeLowerCase = confirm('Confirm OK to include lowercase chars in password');
  includeUpperCase = confirm('Confirm OK to include uppercase chars in password');
  includeNumbers = confirm('Confirm OK to include numbers in password');
  includeSpecial = confirm('Confirm OK to include special chars in password')

  if (includeLowerCase === false  &&
        includeUpperCase === false && 
        includeNumbers === false &&
        includeSpecial === false)   {
          alert(" atleast one type should be selected, please retry");
          getPasswordCriteria();
        }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
