let playerScore = 0
let compScore = 0

function computerPlay() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return compChoice = arrOfChoices[randomNum]
}

function playRound(playerSelection, computerSelection) {
    //
    if (playerSelection === computerSelection) {
        return `You tied! You both picked ${playerSelection}` 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You LOST! Paper covers rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You WON! Rock crushes scissors'
    //
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You LOST! Scissors cuts paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You WON! Paper covers rock'
    //
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You LOST! Rock crushes scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You WON! Scissors cuts paper'
    }
}

function game() {
   /* for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase()
        const computerSelection = computerPlay()
    } */

    if (playerScore > compScore) {
        return 'VICTORY!'
    } else if (playerScore < compScore) {
        return 'DEFEATED!'
    } else {
        return 'TIED? HOW?'
    }
}

game()