// Assignment code here



// Get references to the #generate element
// reach int the html, grab the button w/ the id of generate. put it in a variable called generateBtn
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordEl = document.querySelector("#password");
  // sanity check
  console.log(passwordEl)
  console.dir(passwordEl)
  passwordEl.value = password;

}

function generatePassword() {
  // asked the user for the data
  var numOfChars = window.prompt("Please Choose The Length of password between 8 and 128 characters")
  // convert the string into number
  numOfChars = parseInt(numOfChars);

  var specChars = window.confirm("Would You Like Special Characters?");
  var upperCase = window.confirm("Would You Like to Include UpperCase Characters?");
  var lowerCase = window.confirm("Would You Like to Include Lowercase Characters?");
  var nums = window.confirm("Would You Like to Include Numbers?");

  // sanity check
  console.log(numOfChars)
  console.log(specChars)
  console.log(upperCase)
  console.log(nums)
  console.log(lowerCase)

if (!specChars && !upperCase && !lowerCase){alert("You must choose at least one criteria!")};
  // if they say no to specChar && upperCase etc
  // alert them the choose at least one
  // stop the app
  // return '';
  // do a thing

  var allSpecChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];
  var allUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var allLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



  var chosenOption = []

  if (specChars === true) {(specChars[Math.floor(Math.random() * specChars.length)]);
  chosenOption=chosenOption.concat(specChars)};

  if (allUpperCase === true) {(allUpperCase[Math.floor(Math.random() * allUpperCase.length)])
    chosenOption=chosenOption.concat(allUpperCase)
   };

  if (allLowercase === true) {(allLowercase[Math.floor(Math.random() * allLowercase.length)])
  chosenOption=chosenOption.concat(allLowercase) };

  if (allNumbers === true) {(allNumbers[Math.floor(Math.random() * allNumbers.length)])
  chosenOption=chosenOption.concat(allNumbers) };

  //if the user chooses nums
  // -- dump allNumbers array into the chosenOptions


  for (var i = 0; i < chosenOption; i++){
  }

  // for each char the user wants
  // -- pick a random number
  // -- use that number to grab a rand char out of the chosenOptions
  // -- add that char to a string


  // return that string
  return chosenOption;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// generateBtn.querySelector('#bgnBtn').addEventListener('click', promptMe);


// function promptMe() {
//     var userAdjective = prompt("Please provide an Adjective");
//     alert (userAdjective);
// }