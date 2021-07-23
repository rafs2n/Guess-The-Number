
const display = document.getElementById('display');
const displayTwo = document.getElementById('display-two');
const showGuesses = document.getElementById('show-guesses');
const tryCount = document.getElementById('try-count');
const inputGuess = document.getElementById('input-guess');
const guessBtn = document.getElementById('guess-btn');
const warningSection = document.getElementById('warning-section');
const warningMsg = document.getElementById('warning-msg');


// console.log(randomNumber);
// warningSection.style.display = 'none';

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
        display.innerText = "Good Job. You Win";
        displayTwo.innerText = `It took only ${counter} tries`;
        gameOver();
    } else if (counter >= maxCounter) {
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
    inputGuess.value = '';
    inputGuess.focus();
}


function gameOver() {
    inputGuess.disabled = true;
    guessBtn.disabled = true;
}

// guessBtn.addEventListener('click', guessCheck);
guessBtn.addEventListener('click', function () {
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









