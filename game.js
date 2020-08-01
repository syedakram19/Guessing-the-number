const $submitButton = document.getElementById("submit");
const message = document.getElementById("message");
const $lives = document.getElementById("lives");
console.log($submitButton)
var lives = 10;
var mess;
var guessNumber = Math.round(Math.random() * 100);
$submitButton.onclick = () => {
 

    console.log(guessNumber)
    let userInput = document.getElementById("number-input").value;
    lives--;
    console.log($submitButton)
    if (userInput == guessNumber) {
        location.href = "./win.html";
    } else if (lives == 0) {
        location.href = "./lose.html";
    } else if (userInput > guessNumber) {
        document.getElementById("message").innerHTML= "Guess is too high. you have "+lives+" lives remaining.";
    } else if (userInput < guessNumber) {
        console.log("Guess is too low. you have "+lives+" lives remaining.");
        document.getElementById("message").innerHTML= "Guess is too low. you have "+lives+" lives remaining.";
       
    }
   
}
// $message.style.display = "inherit";
// message.innerHTML = message;
// message.innerHTML = mess;
// $lives.innerHTML = lives;