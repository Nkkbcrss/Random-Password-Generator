// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

let passwordGenerator = document.getElementById("btnPassword")
let inputOne = document.getElementById("randomPasswordOne")
let inputTwo = document.getElementById("randomPasswordTwo")
let lengthInput = document.getElementById("lengthInput")
let statusMessage = document.getElementById("message-el")
let includeNumbers = document.getElementById("includeNumbers")
let includeSymbols = document.getElementById("includeSymbols")


passwordGenerator.addEventListener("click", function() {
   
    let length = parseInt(lengthInput.value);
    let minLength = 10
    let passwordOne = ""
    let passwordTwo = ""
    
    setTimeout(function(){
        inputOne.style.visibility = "visible";
        inputTwo.style.visibility = "visible";
    })
    
    if (length < minLength) {
                statusMessage.textContent = `Password length must be at least ${minLength} characters.`;
                setTimeout(function() {
                statusMessage.style.visibility = "hidden";
                }, 1000)
                 statusMessage.style.visibility = "visible";
                return;
            } 
            
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (includeNumbers.checked) {
       letters += '0123456789';
    }
    
    if (includeSymbols.checked) {
       letters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    for (let i = 0 ; i < length ; i++){
        let randomIndexOne = Math.floor(Math.random()*letters.length)
        passwordOne += letters[randomIndexOne]
        inputOne.value = passwordOne
        console.log(passwordOne)
    }
     for (let i = 0 ; i < length ; i++){
        let randomIndexTwo = Math.floor(Math.random()*letters.length)
        passwordTwo += letters[randomIndexTwo]
        inputTwo.value = passwordTwo
        console.log(passwordTwo)
    }
     return
})

inputOne.addEventListener("click", function() {
    inputOne.select()
    if (inputOne.value === "" ) {
        statusMessage.textContent = ""
    } else {
    document.execCommand("copy")
    statusMessage.textContent = "Copied"
     setTimeout(function() {
    statusMessage.style.visibility = "hidden";
    inputTwo.style.visibility = "hidden";
  }, 1000);
    }
   statusMessage.style.visibility = "visible";
  return
})

inputTwo.addEventListener("click", function(){
    inputTwo.select()
    if (inputTwo.value === "") {
        statusMessage.textContent = ""
    } else {
    document.execCommand("copy")
    statusMessage.textContent = "Copied"
    setTimeout(function() {
    statusMessage.style.visibility = "hidden";
    inputOne.style.visibility = "hidden";
  }, 1000);
    }
  statusMessage.style.visibility = "visible";
  return
})

