const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const choices = ["rock", "paper", "scissors"];

const TIE = 0;
const WIN = 1;
const LOST = 2;

let numberYou = 0;
let numberIA = 0;

let isPlaying = false;

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
const counterYou = document.getElementById("you");
const counterIA = document.getElementById("IA");

buttonRock.addEventListener("click", () => {
    play(ROCK);
});
buttonPaper.addEventListener("click", () => {
    play(PAPER);
});
buttonScissors.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption) {
    if(isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Chossing!";

    const interval = setInterval(function(){
        const machineOption = calculateMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 150);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calculateMachineOption();
        const result = calculateResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        

        switch (result) {
            case TIE:
                resultText.innerHTML = "You have tied! 🤔";
                break;
            case WIN:
                resultText.innerHTML = "You win! 👏";
                numberYou++;
                counterYou.innerHTML = "YOU: " + numberYou;
                break;
            case LOST:
                resultText.innerHTML = "You lost! 😭";
                numberIA++;
                counterIA.innerHTML = "IA: " + numberIA;
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calculateMachineOption() {
    const number = Math.floor(Math.random() * choices.length);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calculateResult(userOption, machineOption) {

    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
    }
}

