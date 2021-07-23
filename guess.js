
const display = document.getElementById('display');
const displayTwo = document.getElementById('display-two');
const showGuesses = document.getElementById('show-guesses');
const tryCount = document.getElementById('try-count');
const inputGuess = document.getElementById('input-guess');
const guessBtn = document.getElementById('guess-btn');
const warningSection = document.getElementById('warning-section');
const warningMsg = document.getElementById('warning-msg');

displayTwo.innerText = "I've select a number, Can you guess it ?";

function getRandom(num) {
    let randomNum = Math.round(Math.random() * num + 1);
    return randomNum;
}

let randomNumber = getRandom(4);
let counter = 1;
let maxCounter = 2;

function guessCheck() {
    let userGuess = parseInt(inputGuess.value);
    if (counter === 1 && maxCounter === 2) {
        showGuesses.innerText = "Your Guesses: ";
    }
    showGuesses.innerText += " " + userGuess;
    tryCount.innerText = `${maxCounter} Left`;

    if (userGuess === randomNumber) {
        display.innerText = "Good Job. You Guessed it Correctly";
        displayTwo.innerText = `It took only ${counter} tries. Press F5 to Play Again`;
        gameOver();
    } else if (counter >= 3 && maxCounter <= 0) {
        display.innerText = "Game Over. You Lose!";
        displayTwo.innerText = `You've reached your limit. Press F5 to Play Again`;
        gameOver();
    } else {
        // display.innerText = "Try Again. The number was- ", randomNumber;
        if (userGuess < randomNumber) {
            display.innerText = `Try a higher number. The number was ${randomNumber}`;
        } else if (userGuess > randomNumber) {
            display.innerText = `Try a lower number. The number was ${randomNumber}`;
        }
    }

    counter++;
    maxCounter--;
    inputGuess.value = '';
    inputGuess.focus();
}


function gameOver() {
    inputGuess.disabled = true;
    guessBtn.disabled = true;
}

// guessBtn.addEventListener('click', guessCheck);
guessBtn.addEventListener('click', function () {
    displayTwo.innerText = '';
    let userGuess = parseInt(inputGuess.value);
    if (userGuess != 0 && userGuess != '' && userGuess < 6) {
        warningSection.style.display = 'none';
        guessCheck();
    }
    else {
        warningSection.style.display = 'block';
        inputGuess.value = '';
        warningMsg.innerText = 'That is not a valid number.';
    }
})









