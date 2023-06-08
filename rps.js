const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return(choices[Math.floor(Math.random()*choices.length)]);
}

function getPlayerChoice() {
    let playerSelection; 
    do {
        playerSelection = prompt('Enter move?').toLowerCase();
    }
    while (!choices.includes(playerSelection))
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection+computerSelection) {
        case 'rockpaper':
            console.log('You lose!, paper beats rock');
            return computerScore++;
        case 'paperscissors':
            console.log('You lose! scissors beats paper');
            return computerScore++;
        case 'scissorsrock':
            console.log('You lose!, rock beats scissors');
            return computerScore++;
        
        case 'paperrock':
            console.log('You win!, paper beats rock');
            return playerScore++;
        case 'scissorspaper':
            console.log('You win! scissors beats paper');
            return playerScore++;
        case 'rockscissors':
            console.log('You win!, rock beats scissors');
            return playerScore++;
        default:
            console.log('Draw!')
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(),getComputerChoice());
        console.log(playerScore + ' ' + computerScore);
    }    
    if (playerScore > computerScore) {
        console.log('You win the game!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose the game!');
    }
    else {
        console.log('Game is a draw');
    }
}
game();

