let roundsDone = 0
let roundsMax = 5
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    r = Math.random();

    if (r > 0.8) 
        { roboChoice = "rock" }
    else if (r <= 0.5) 
        { roboChoice = "paper" }
    else 
        { roboChoice = "scissors" }
        
    console.log("Computer Was: "+ roboChoice);
    return roboChoice

}

function getHumanChoice() {

    let validChoice = null
    let playerChoice = null
    while(validChoice != true)
    {
        playerChoice = prompt("What is your Choice? \n0: rock 1: paper 2: scissors","");
       
        if(playerChoice == "0")
            {playerChoice = "rock"; validChoice = true;}
        else if (playerChoice == '1')
            {playerChoice = "paper"; validChoice = true;}
        else if (playerChoice == "2")
            {playerChoice = "scissors"; validChoice = true;}
        else
            { console.log("Please try again!");}
    }
    
    if(validChoice == true)
        {
            console.log("Player Was: "+ playerChoice);
            return playerChoice;

        }
    
    
}

function playRound(humanChoice, computerChoice)
{
    if(computerChoice == "rock")
        {
            switch(humanChoice)
            {
                case "rock": console.log("Tie!"); break;
                case "paper": console.log("Player Won Round!"); humanScore++; break;
                case "scissors": console.log("Computer Won Round!"); computerScore++; break;
            }
        }
 
    if(computerChoice == "paper")
        {
            switch(humanChoice)
            {
                case "rock": console.log("Computer Won Round!"); computerScore++; break;
                case "paper": console.log("Tie!"); break;
                case "scissors": console.log("Player Won Round!"); humanScore++; break;
            }
        }
   
    if(computerChoice == "scissors")
        {
            switch(humanChoice)
            {
                case "rock": console.log("Player Won Round!"); humanScore++; break;
                case "paper": console.log("Computer Won Round!"); computerScore++; break;
                case "scissors": console.log("Tie!"); break;
            }
        }
    roundsDone++;
    console.log("Player Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
}


function playGame()
{
    while(roundsDone < roundsMax)
        {
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection)
        }
    if(roundsDone >= roundsMax)
        {
            console.log("Game Complete! The Winner is...");
            if(humanScore > computerScore)
                { console.log("The Player!")}
            else if (computerScore)
                { console.log("The Computer!")}
            else
                { console.log("A Tie!")}
        }
}

playGame();
