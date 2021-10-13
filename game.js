
//input & button

const inputField = document.getElementById('input');
const button = document.getElementById('button');
//guesses
let guessesLeft = 5;
let guessesDisplay = document.querySelector('.guesses');
//events container (47 was too high!)
let eventsContainer = document.querySelector('.event-container');

let randomNumber = Math.floor(Math.random() * 100) + 1;

//win lose

let lose = false;
let win = false;
//get userInput

function getUserInput() {
    
    const userInput = document.getElementById('input').value;

    //logic
    if(userInput > 100 || userInput < 1) {
        alert('Only Numbers From 1 to 100!')
    }
    else if (userInput > randomNumber) {
        guessesLeft--;
        guessesDisplay.textContent = guessesLeft
        eventsContainer.innerHTML += '<h1>' + userInput + " is too high!</h1>";
    }
    else if (userInput < randomNumber) {
        guessesLeft--;
        guessesDisplay.textContent = guessesLeft
        eventsContainer.innerHTML += '<h1>' + userInput + " is too low!</h1>";
    }
    else if (userInput == randomNumber && guessesLeft > 0) {
        win = true;
        eventsContainer.innerHTML = "You Win! It was " + randomNumber + "!";
    }

    //guesses logic
    if(guessesLeft === 0 && !win) {
        lose = true;
        eventsContainer.innerHTML = "<h1>You Lose! The number was " + randomNumber + "! </h1>";
    }
    if(win || lose) {
        eventsContainer.innerHTML += "<p>RESTARTING IN 3 SECONDS</p>"
        setTimeout(()=>{
            restartGame();
        }, 3000)
    }
   
    
    inputField.value = '';
    
}

inputField.addEventListener('keypress', e=>{
    
    if(e.key === 'Enter') {
        getUserInput();
    }
    if(win || lose) {
        e.preventDefault();
    }
})

button.addEventListener('click', () => {
    getUserInput();
    
})

//game

function restartGame() {
   
    console.log("trying to restart")
    eventsContainer.innerHTML = '';
    win = false;
    lose = false;
    guessesLeft = 5;
    guessesDisplay.textContent = guessesLeft;
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

