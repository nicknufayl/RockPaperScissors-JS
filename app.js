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
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }

    if (playerScore > compScore) {
        return 'VICTORY!'
    } else if (playerScore < compScore) {
        return 'DEFEATED!'
    } else {
        return 'TIED? HOW?'
    }
}

console.log(game())