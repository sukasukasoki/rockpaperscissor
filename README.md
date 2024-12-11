# rockpaperscissor

[Here's the Publication](https://sukasukasoki.github.io/rockpaperscissor/)

## rock paper scissor console game!
## Pseudocode :
Write a logic to get Computer Choice. -> computerChoice
    Since I'll be using Math.Random, which output between 0 and 1I'll be making a range :
    0-0.33 -> Rock
    0.33-0.66 -> Paper
    0.66-1 -> Scissor
Write a logic for Human Choice. ->humanChoice
    I'll be using prompt, Human have to type between rock, paper, scissor
    it'll be case-sensitive, so I'll use .toLowerCase() function to make 
    all input lower case.
Declare the Scores:
    Declare HumanScore and ComputerScore variables.
    Both Var will start at 0 and will increment later.
Declare the function to play a single round :
    I'll name the function as singleRound(comptuerChoice,humanChoice){}
    the function will write the result of PRS, and then increment the humanScore and computerScore.
Declare the function to play 5 rounds.
    I'll name the function as singleGame()
    where I'll use looping to play 5 games.
    After that i'll declare the winner here using conditionals between humanScore and computerScore.