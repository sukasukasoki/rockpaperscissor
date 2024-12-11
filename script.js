// Making Sure JS is working
console.log("Hello, World!")

//Making computerChoice
function getComputerChoice(){
    let a = Math.random()

    let choice = (a>=0 && a<=0.33)?"rock":(a>0.33 && a<=0.66)?"paper":"scissor";
    return choice
}
// Checking function's running
// console.log(getComputerChoice());

//Making humanChoice

function getHumanChoice(){
    let humaninput = prompt("type in between rock paper or scissor for 5 times :").toLowerCase()

    return humaninput
}

// Checking function's running
// console.log(getHumanChoice())

//Declaring Score
let humanScore = 0;
let computerScore = 0;
let roundmessage;

//Single Round game
// Checking for Single Round
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
function playRound(humanChoice,computerChoice){
    
    if(humanChoice===computerChoice){
        console.log(`it's a Tie! you chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}, and so does the Computer`);
        roundmessage=`it's a Tie! you chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}, and so does the Computer`;
    }else if(
            (humanChoice==="rock"&&computerChoice==="scissor")||
            (humanChoice==="paper"&&computerChoice==="rock")||
            (humanChoice==="scissor"&&computerChoice==="paper")
            ){
                console.log(`You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`)
                humanScore++;
                roundmessage=`You Win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
        }else{
        console.log(`You Lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beaten by ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`)
        computerScore++;
        roundmessage = `You Lose! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beaten by ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!`;
    }
}
//End-Check for Single Round
// console.log(playRound(humanChoice,computerChoice))
// console.log(computerScore)
// console.log(humanScore)

//Five Round Game
let arraymessage=[];
function playGame(){
    for(let round = 1;round<=5;round++){
        let humanChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(humanChoice,computerChoice);
        
        arraymessage.push(roundmessage);
        document.getElementById(`game${round}`).innerHTML = `Game ${round}`;
        document.getElementById(`htmlmessage${round}`).innerHTML = roundmessage;
    }

    if (humanScore > computerScore) {
        console.log(`You win the Game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
        resultmessage = `You win the Game! Final score: You - ${humanScore}, Computer - ${computerScore}`;
      } else if (computerScore > humanScore) {
        console.log(`You lose the Game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
        resultmessage = `You lose the Game! Final score: You - ${humanScore}, Computer - ${computerScore}`
      } else {
        console.log(`It's a tie Game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
        resultmessage = `It's a tie Game! Final score: You - ${humanScore}, Computer - ${computerScore}`;
      }
      document.getElementById(`resultmessage`).innerHTML = resultmessage;
}

//Run the Game
playGame()
console.log(`Summary : \n ${arraymessage}`);
//Finished!
