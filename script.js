// setting variables with array of characters
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseLetters = lowerCaseLetters.map((element) => {
  return element.toUpperCase();
});
var numericLetters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialLetters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "`",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  ";",
  ":",
  "'",
  "[",
  "]",
  "{",
  "}",
  "-",
  "_",
  "=",
  "+",
  '"',
];

var finalArray = [];
console.log(`Current list of characters that we can use is "${finalArray}".`);

function generatePassword() {
  // reset the password finalArray
  finalArray = [];

  // Ask user for Minimum number
  var verifyLeastNum = Number(
    window.prompt(
      "Enter the minimum number of the password length. (It can't be lower than 8 characters.)",
      "8"
    )
  );
  if (!verifyLeastNum) {
    console.log(
      "Error: User has canceled the selection. Please check if user entered valid numbers."
    );
    window.alert(
      "Error: Generating password has been canceled. Please check if you entered valid numbers."
    );
    return;
  } else if (verifyLeastNum < "8") {
    window.alert("Minimum number can't be lower than 8 characters.");
    console.log("User has selected invalid number.");
    return;
  } else if (verifyLeastNum > "128") {
    window.alert(
      "You can not select minimum number more than 128 characters. Please try it again."
    );
    console.log("User has selected invalid number.");
    return;
  } else {
    console.log("User has selected minimum number of characters.");
  }

  // Ask user for maximum number
  var verifyMaxNum = Number(
    window.prompt(
      "Enter the maximum number of the password length. (It can't exceed 128)",
      `${verifyLeastNum}`
    )
  );
  if (!verifyMaxNum) {
    console.log("User has canceled the selection.");
    window.alert("Generating password has been canceled.");
    return;
  } else if (typeof verifyMaxNum !== "number") {
    window.alert("This is not valid number please try it again");
    console.log("User has selected invalid number.");
    return;
  } else if (verifyMaxNum < verifyLeastNum) {
    window.alert(
      "Maximum number is lower than minimum number. Please try it again."
    );
    console.log("User has selected invalid number.");
    return;
  } else if (verifyMaxNum > "128") {
    window.alert(
      "Maximum number can not be more than 128 characters. Please try it again."
    );
    console.log("User has selected invalid number.");
    return;
  } else {
    console.log("User has selected maximum number of characters.");
  }

  // Ask user to use lowercase or not
  var verifyLowercase = window.prompt(
    "Do you want to include lowercase?",
    "Yes / No"
  );
  if (!verifyLowercase) {
    console.log("User has canceled the selection.");
    window.alert("Generating password has been canceled.");
    return;
  } else if (verifyLowercase.toLowerCase() === `yes`) {
    finalArray = finalArray.concat(lowerCaseLetters);
    console.log(
      "User has included the lowercase letters into the final array."
    );
  } else if (verifyLowercase.toLowerCase() === `no`) {
    console.log(
      "User has not included the lowercase letters into the final array."
    );
  } else {
    window.alert(`This is invalid answer, please try again`);
    console.log("User has selected invalid answer.");
    return;
  }

  // Ask user to use uppercase or not
  var verifyUppercase = window.prompt(
    "Do you want to include uppercase?",
    "Yes / No"
  );
  if (!verifyUppercase) {
    console.log("User has canceled the selection.");
    window.alert("Generating password has been canceled.");
    return;
  } else if (verifyUppercase.toLowerCase() === `yes`) {
    finalArray = finalArray.concat(upperCaseLetters);
    console.log(
      "User has included the uppercase letters into the final array."
    );
  } else if (verifyUppercase.toLowerCase() === `no`) {
    console.log(
      "User has not included the uppercase letters into the final array."
    );
  } else {
    window.alert(`This is invalid answer, please try again`);
    console.log("User has selected invalid answer.");
    return;
  }

  // Ask user to use Numeric numbers or not
  var verifyNumeric = window.prompt(
    "Do you want to include numeric characters?",
    "Yes / No"
  );
  if (!verifyNumeric) {
    console.log("User has canceled the selection.");
    window.alert("Generating password has been canceled.");
    return;
  } else if (verifyNumeric.toLowerCase() === `yes`) {
    finalArray = finalArray.concat(numericLetters);
    console.log(
      "User has included the numeric characters into the final array."
    );
  } else if (verifyNumeric.toLowerCase() === `no`) {
    console.log(
      "User has not included the numeric characters into the final array."
    );
  } else {
    window.alert(`This is invalid answer, please try again`);
    console.log("User has selected invalid answer.");
    return;
  }

  // ASK USER TO USE SPECIAL CHARACTERS OR NOT
  var verifySpecial = window.prompt(
    "Do you want to include special characters?",
    "Yes / No"
  );
  if (!verifySpecial) {
    console.log("User has canceled the selection.");
    window.alert("Generating password has been canceled.");
    return;
  } else if (verifySpecial.toLowerCase() === `yes`) {
    finalArray = finalArray.concat(specialLetters);
    console.log("User has included the special characters into the array.");
  } else if (verifySpecial.toLowerCase() === `no`) {
    console.log("User has not included the special characters into the array.");
  } else {
    window.alert(`This is invalid answer, please try again`);
    console.log("User has selected invalid answer.");
    return;
  }

  // Make alert message that gives error when none of the characters were selected

  if (finalArray.length < 1) {
    window.alert(
      "Please select at least one type of characters to include it in password."
    );
    return;
  }

  // Randomize the password by creating length of password and randomize the index of final array
  var passwordLength =
    Math.floor(Math.random() * (verifyMaxNum - verifyLeastNum)) +
    verifyLeastNum;
  console.log(`The length of the password has ${passwordLength} characters.`);

  let resultPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    resultPassword += finalArray[Math.floor(Math.random() * finalArray.length)];
  }
  console.log(`The result of the generated password is ${resultPassword}.`);
  return resultPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
