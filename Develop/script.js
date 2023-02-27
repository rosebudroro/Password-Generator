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



  var askSpecChars = window.confirm("Confirm if You Would Like to Include Special Characters?");
  var askUpperCase = window.confirm("Confirm if You Would Like to Include UpperCase Characters?");
  var askLowerCase = window.confirm("Confirm if You Would Like to Include Lowercase Characters?");
  var askNums = window.confirm("Confirm if You Would Like to Include Numbers?");

  // sanity check
  console.log(numOfChars)
  console.log(askSpecChars)
  console.log(askUpperCase)
  console.log(askNums)
  console.log(askLowerCase)

if (!askSpecChars && !askUpperCase && !askLowerCase){alert("You must choose at least one criteria!")};
  // if they say no to specChar && upperCase etc
  // alert them the choose at least one
  // stop the app
  // return '';
  // do a thing

  var specChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];
  var allUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var allLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



  var chosenOption = []

  if (askSpecChars) {
    chosenOption = chosenOption.concat(specChars)};

  if (askUpperCase) {
    chosenOption = chosenOption.concat(allUpperCase)};

  if (askLowerCase) {
    chosenOption = chosenOption.concat(allLowercase)};

  if (askNums) {
    chosenOption = chosenOption.concat(allNumbers)};

  console.log(chosenOption);

var ranPassword = "";

  for (var i = 0; i < numOfChars; i++) {
    var randomize = Math.floor(Math.random() * chosenOption.length);
    ranPassword += chosenOption[randomize]
    console.log(ranPassword);
  }

  // for each char the user wants
  // -- pick a random number
  // -- use that number to grab a rand char out of the chosenOptions
  // -- add that char to a string


  // return that string
  return ranPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// generateBtn.querySelector('#bgnBtn').addEventListener('click', promptMe);


// function promptMe() {
//     var userAdjective = prompt("Please provide an Adjective");
//     alert (userAdjective);
// }