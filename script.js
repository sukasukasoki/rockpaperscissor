// Making Sure JS is working
console.log("Hello, World!")

//Making computerChoice
function computerChoice(){
    let a = Math.random()

    let choice = (a>=0 && a<=0.33)?"rock":(a>0.33 && a<=0.66)?"paper":"scissor";
    return choice
}
// Checking functiin's running
// console.log(computerChoice());