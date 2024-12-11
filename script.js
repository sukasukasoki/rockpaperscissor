// Making Sure JS is working
console.log("Hello, World!")

//Making computerChoice
function computerChoice(){
    let a = Math.random()

    let choice = (a>=0 && a<=0.33)?"rock":(a>0.33 && a<=0.66)?"paper":"scissor";
    return choice
}
// Checking function's running
// console.log(computerChoice());

//Making humanChoice

function humanChoice(){
    let humaninput = prompt("type in between rock paper or scissor :").toLowerCase()

    return humaninput
}

// Checking function's running
// console.log(humanChoice())