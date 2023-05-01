//dark mode and light mode
const modeChange = document.querySelector('#mode-change');
const body = document.querySelector('body');
modeChange.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeChange.textContent = 'Light Mode';
      } else {
        modeChange.textContent = 'Dark Mode';
      }
});

//scroll the number 
const rangeinput = document.getElementById('pas-lenth-range');
const passinput = document.getElementById('pas-length');
rangeinput.addEventListener('input',()=>{
passinput.value = rangeinput.value;
});
passinput.addEventListener('input',()=>{
  rangeinput.value = passinput.value;
});

//generate random lowercase alphabets
function randvariable(){
    let randomAlphabet = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return randomAlphabet;
  }

//generte for uppercase
function randalpha(){
  let randomAlphabet = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  return randomAlphabet;
}

// generate random number
function randnumber(){
  let randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
 }

// generate random symbol
function generateRandomSymbol() {
  const symbols = ["#", "@", "$", "*", "&", "%", "+", "-", "!"];
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
 }
// check the toggle value 
var hasCharacter = {
  lowercase: true,
  uppercase: false,
  numbers: false,
  symbols: false
}
function toggleValueChange(toggleValue) {
  switch(toggleValue){
      case "lowercase":
          hasCharacter.lowercase = !hasCharacter.lowercase;
          break;
      case "uppercase":
          hasCharacter.uppercase = !hasCharacter.uppercase;
          break;
      case "number":
          hasCharacter.numbers = !hasCharacter.numbers;
          break;
      case "symbol":
          hasCharacter.symbols = !hasCharacter.symbols;
          break;
  }
  //generate lowercase as default
  if(CharacterTypes().length === 0){
    hasCharacter.lowercase = true;
    var lowercaseToggle = document.getElementById("lowercase-toggle");
    lowercaseToggle.checked = true;
}
}
//lowercase toggle remains on as default
var lowercaseToggle = document.getElementById("lowercase-toggle");
lowercaseToggle.checked = true;
//get characters acc. to the toggled value
function CharacterTypes(){
  var charactersIncluded = [];
  Object.entries(hasCharacter).forEach(entry => {
      const [key, value] = entry;
      if (value) {
        charactersIncluded.push(key);
      }
    });
    return charactersIncluded;
}
//get atleast one toggled type at random
function getACharacter(PCharacterTypes){
  randomCharacterTypeIndex = Math.floor(Math.random() * PCharacterTypes.length);
  randomCharacterType = PCharacterTypes[randomCharacterTypeIndex];
  switch(randomCharacterType){
      case "lowercase":
          return randvariable();
      case "uppercase":
          return randalpha();
      case "numbers":
          return randnumber();
      case "symbols":
          return generateRandomSymbol();
      default:
          break;
  }
}
//function to generate password
function generatePassword() {
  var password = "";
  var PCharacterTypes = CharacterTypes();
  var length = document.getElementById('pas-length').value;
  if(length<4){
    length=4;
    passinput.value=4;
  }
  if(length>30){
    length=30;
    passinput.value=30;
  }
  for(var i = 0; i < length; i++){ 
      password += getACharacter(PCharacterTypes);
  }
  displayPasswordToUsers(password);
}
//display password
function displayPasswordToUsers(password){
  var displayBoard = document.getElementById("pass-display");
  var passwordText = document.getElementById("password-text");
  passwordText.innerText = password;
  displayBoard.style.display = "block";
}
function copyPassword(){
  var passwordText = document.getElementById("password-text");
  var copiedNotification = document.getElementById('copied-notify-text');

  var range = document.createRange();
  window.getSelection().removeAllRanges();
  range.selectNode(passwordText);
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  copiedNotification.style.display = "block";
  setTimeout(function(){ 
    copiedNotification.style.display = "none";
}, 1000);
}


