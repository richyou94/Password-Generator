// setting variables with array of characters
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

//btn variable
var generateBtn = document.querySelector("#generate");

//   error message variables
var errorMin = document.querySelector("#minMessage");
var errorMax = document.querySelector("#maxMessage");
var errorCheckbox = document.querySelector("#checkboxMessage");

function errorPop(element, text) {
  element.innerText = text;
  element.classList.remove("hide");
  setTimeout(() => {
    element.classList.add("hide");
    element.innerText = "*required";
  }, 3000);
}
const password = () => {
  // reset the password finalArray
  const finalArray = [];

  // variables for inputs
  const minCharacter = Number(document.querySelector("#min-character").value);
  const maxCharacter = Number(document.querySelector("#max-character").value);
  const isSelectedUpper = document.querySelector("#uppercase").checked;
  const isSelectedLower = document.querySelector("#lowercase").checked;
  const isSelectedNum = document.querySelector("#numeric").checked;
  const isSelectedSpecial = document.querySelector("#special").checked;

  //password length calculated through min and max numbers of characters.
  var passwordLength =
    Math.floor(Math.random() * (maxCharacter - minCharacter) + 1) +
    minCharacter;

  // Ask user for Minimum number
  // check if value is exist

  if (minCharacter === 0 || minCharacter === "0") {
    errorPop(errorMin, "*required");
  }
  if (maxCharacter === 0 || maxCharacter === "0") {
    errorPop(errorMax, "*required");
  }
  if (
    !isSelectedUpper &&
    !isSelectedLower &&
    !isSelectedNum &&
    !isSelectedSpecial
  ) {
    errorPop(errorCheckbox, "*required")
  }

  // check min-character to be greater than 8, lower than 128
  // check max-character to be greater than 8, lower than 128
  if (minCharacter > maxCharacter) {
    errorPop(errorMin, "min-character needs to be lower than max-character")
    errorPop(errorMax, "max-character needs to be greater than max-character")
  }

// add set of characters into final array. depends on checkedbox

  // Randomize the password by creating length of password and randomize the index of final array

    let resultPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      resultPassword += finalArray[Math.floor(Math.random() * finalArray.length)];
    }
    console.log(`The result of the generated password is ${resultPassword}.`);
    return resultPassword;
};

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", password);
