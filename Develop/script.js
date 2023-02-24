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
  
  // if they say no to specChar && upperCase etc
  // alert them the choose at least one
  // stop the app
  // return '';
  // do a thing

  var allNumbers = [0, 1, 2, 3, 4]
  var allLowercase = ['a', 'b', 'c']
  
  var chosenOption = []

  //if the user chooses nums
  // -- dump allNumbers array into the chosenOptions


  // for each char the user wants
  // -- pick a random number
  // -- use that number to grab a rand char out of the chosenOptions
  // -- add that char to a string


  // return that string
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// generateBtn.querySelector('#bgnBtn').addEventListener('click', promptMe);


// function promptMe() {
//     var userAdjective = prompt("Please provide an Adjective");
//     alert (userAdjective);
// }