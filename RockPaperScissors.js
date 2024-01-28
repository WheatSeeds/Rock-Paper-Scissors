const choices = ['rock', 'paper', 'scissors']
const score = document.querySelector('#total-score');
let computerScore = 0;
let playerScore = 0;
function returnScore() {
    score.innerHTML = ` Player ${playerScore} - ${computerScore} Computer`;
}
function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

let playerChoice = " ";

rock.onclick = (event) =>{
    removeClass()
    rock.classList.add("itemMain")
    playerChoice = choices[0];
}
paper.onclick = (event) =>{
    removeClass()
    paper.classList.add("itemMain")
    playerChoice = choices[1];
}
scissors.onclick = (event) =>{
    removeClass()
    scissors.classList.add("itemMain")
    playerChoice = choices[2];
}

function removeClass(){
    rock.classList.remove("itemMain")
    paper.classList.remove("itemMain")
    scissors.classList.remove("itemMain")
}

function playRound(){
    let computerChoice = computerPlay();
    if(playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock"){
        return computerScore++;
    }
    else if(playerChoice == computerScore){
        return computerScore+0;
    }
    else{
        return playerScore++;
    }
}

let confirm = document.getElementById("confirm")
confirm.onclick = (event) =>{
    if(playerScore === 5 || computerScore === 5){
        if(playerScore === 5){
            score.innerHTML = `You win!`
        }
        else{
            score.innerHTML = `You lose`
        }
    }
    else if(playerChoice == " "){
        score.innerHTML = `You need to choose`
    }
    else{
        playRound();
        returnScore();
    }
}

let restart = document.getElementById("restart")
restart.onclick = (event) =>{
    removeClass();
    playerChoice = " "
    playerScore = 0;
    computerScore = 0;
    returnScore();
}
