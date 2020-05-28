let computerScore = 0;
let userScore = 0;
let userChoise;
let computerChoise;

const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");
const piedra_div = document.getElementById("piedra");

const CHOICES = {
    papel: 'papel',
    piedra: 'piedra',
    tijeras: 'tijeras'
};

const WAITING_TIME = 1000;

function getComputerChoise() {
    const Choise = [CHOICES.piedra, CHOICES.papel, CHOICES.tijeras];
    const randomNumber = Math.floor(Math.random() * 3)
    return Choise[randomNumber];
}


function ChangeClass(status) {
    const htmlElement = document.getElementById(userChoise);

    switch (status) {
        case "win":
            htmlElement.classList.add('geenWin');
            setTimeout(() => htmlElement.classList.remove('geenWin'), WAITING_TIME);

            break;
        case "lose":
            htmlElement.classList.add('redLose');
            setTimeout(() => htmlElement.classList.remove('redLose'), WAITING_TIME);

            break;
        case "draw":
            htmlElement.classList.add('blueDraw');
            setTimeout(() => htmlElement.classList.remove('blueDraw'), WAITING_TIME);
            break;
    }
}


function win() {
    setResult("you win");
    userScore++;
    setScore();
    ChangeClass("win");
}


function lose() {
    let result = "you lose";
    setResult(result);
    computerScore++;
    setScore()
    ChangeClass("lose")
}


function draw() {
    let result = "tri"
    setResult(result);
    ChangeClass("draw")
}


function setScore() {
    userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
}


function setResult(result) {
    result_div.innerHTML = result;
}


//(2.1)funcion con logica de cada jugada
function gameLogic(userSelection) {
    userChoise = userSelection;
    const computerChoise = getComputerChoise();
    const result = userSelection + computerChoise;

    if (userSelection === computerChoise) {
        draw();
    } else {
        switch (result) {
            case CHOICES.tijeras+CHOICES.papel:
            case "piedratijeras":
            case "papelpiedra":
                win();
                break;
            case "papeltijeras":
            case "piedrapapel":
            case "tijeraspiedra":
                lose();
                break;
        }
    }
}

// (1.1) encapsulo los lisener en una funcion
function main() {
    papel_div.addEventListener('click', () => {
        //(2.2)se utiliza la funcion con logica enviandole jugada de cada evento
        gameLogic(CHOICES.papel);
    })
    piedra_div.addEventListener('click', () => {
        gameLogic(CHOICES.piedra);
    })
    tijeras_div.addEventListener('click', () => {
        gameLogic(CHOICES.tijeras);
    });
}
//(1.2) llamo a la funcion para que los listeners esten disponibles
main()