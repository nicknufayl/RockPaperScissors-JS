let playerScore = 0
let compScore = 0

function computerPlay() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    //
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied! You both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! You both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! You both picked scissors'
    //
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You LOST! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You WON! Rock crushes scissors'
    //
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You LOST! Scissors cuts paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You WON! Paper covers rock'
    //
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You LOST! Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You WON! Scissors cuts paper'
    }
}

function playRound(playerSelection, computerSelection) {
    // your code here!
}

const playerSelection = "rock"

function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()