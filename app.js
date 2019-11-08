let computerScore=0;
let userScore = 0;
let userChoise;
let computerChoise;
const userScore_Span = document.getElementById("user-score");
const computerScore_Span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div= document.querySelector(".result");
const papel_div = document.getElementById("papel");
const tijeras_div = document.getElementById("tijeras");
const piedra_div = document.getElementById("piedra");

function getComputerChoise(){
    const Choise =['piedra','papel','tijeras'];
    const randomNumber = Math.floor(Math.random() * 3)
    return Choise[randomNumber];

}
function ChangeClass(status){
  switch(status){
   case "win":
     document.getElementById(userChoise).classList.add('geenWin');
     setTimeout(() => document.getElementById(userChoise).classList.remove('geenWin'), 1000)

     break;
   case "lose":
     document.getElementById(userChoise).classList.add('redLose');
     setTimeout(() => document.getElementById(userChoise).classList.remove('redLose'), 1000)

     break;
   case "draw":
     document.getElementById(userChoise).classList.add('blueDraw');
     setTimeout(() => document.getElementById(userChoise).classList.remove('blueDraw'), 1000)
     break;
  }
}
function win(){
    let result = "you win";
    setResult(result);
    userScore++;
    setScore()
    ChangeClass("win")


}
function lose(){
    let result = "you lose";
    setResult(result);
    computerScore++;
    setScore()
    ChangeClass("lose")

}
function draw(){
    let result = "draw"
    setResult(result);
    ChangeClass("draw")


}
function setScore(){
    userScore_Span.innerHTML = userScore;
    computerScore_Span.innerHTML = computerScore;
}
function setResult(result){
    result_div.innerHTML =  result;
}


//(2.1)funcion con logica de cada jugada
function gameLogic(userSelection){
    const ComputerChoise = getComputerChoise();
    switch(userSelection + ComputerChoise){
        case "tijeraspapel":
        case "piedratijeras":
        case "papelpiedra":
            win();
            break;
        case "papeltijeras":
        case "piedrapapel":
        case "tijeraspiedra":
            lose();
            break;
        case "tijerastijeras":
        case "piedrapiedra":
        case "papelpapel":
            draw();
            break
    }

}
// (1.1) encapsulo los lisener en una funcion
function main (){
papel_div.addEventListener('click',()=> {

    //(2.2)se utiliza la funcion con logica enviandole jugada de cada evento
gameLogic(userChoise)
userChoise="papel"
})
piedra_div.addEventListener('click',()=> {
    userChoise="piedra";
gameLogic(userChoise)
})
tijeras_div.addEventListener('click',()=> {
    userChoise="tijeras"
    gameLogic(userChoise)
})    
}
//(1.2) llamo a la funcion para que los listeners esten disponibles
main()