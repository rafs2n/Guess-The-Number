
const display = document.getElementById('display');
const showGuesses = document.getElementById('show-guesses');
const tryCount = document.getElementById('try-count');
const inputGuess = document.getElementById('input-guess');
const guessBtn = document.getElementById('guess-btn');
const warningSection = document.getElementById('warning-section');
const warningMsg = document.getElementById('warning-msg');


// console.log(randomNumber);
warningSection.style.display = 'none';

function getRandom(num) {
    let randomNum = Math.round(Math.random() * num + 1);
    return randomNum;
}

let randomNumber = getRandom(4);
let counter = 1;
let maxCounter = 3;

function guessCheck() {
    let userGuess = parseInt(inputGuess.value);
    if (counter === 1) {
        showGuesses.innerText = "Your Guesses: ";
    }
    showGuesses.innerText += " " + userGuess;
    tryCount.innerText = `Tries: ${counter}`;

    if (userGuess === randomNumber) {
        display.innerText = "Good Job. You Win!";
        gameOver();
    } else if (counter > maxCounter) {
        display.innerText = "Game Over. You Loss!"
        gameOver();
    } else {
        display.innerText = "Try Again. The number was- ", randomNumber;
        if (userGuess < randomNumber) {
            display.innerText = "Try a higher number";
        } else if (userGuess > randomNumber) {
            display.innerText = "Try a lower number";
        }
    }

    counter++;
    maxCounter--;
    inputGuess.value = '';
    inputGuess.focus();
}

guessBtn.addEventListener('click', guessCheck);



function gameOver() {
    inputGuess.disabled = true;
    guessBtn.disabled = true;
}

