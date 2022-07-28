let playerScore = 0
let compScore = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const compScoreSpan = document.querySelector('.comp-score')

function computerPlay() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * arrOfChoices.length)
    return compChoice = arrOfChoices[randomNum]
}

function playRound(playerSelection, computerSelection) {
    //
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = `You tied! You both picked ${playerSelection}`
        outcomeDiv.appendChild(p)
    // 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You LOST! Paper covers rock'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You WON! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    //
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You LOST! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You WON! Paper covers rock'
        outcomeDiv.appendChild(p)
    //
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        const p = document.createElement('p')
        p.innerText = 'You LOST! Rock crushes scissors'
        outcomeDiv.appendChild(p)
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p')
        p.innerText = 'You WON! Scissors cuts paper'
        outcomeDiv.appendChild(p)
    }
}

const checkWinner = (playerScore, compScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You WON! ${playerScore} to ${compScore}`
        outcomeDiv.appendChild(h2)
    }

    if (compScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('comp-won')
        h2.innerText = `You LOST! ${playerScore} to ${compScore}`
        outcomeDiv.appendChild(h2)
    }
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerText = `${playerScore}`
    compScoreSpan.innerText = `${compScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, compScore)
    checkWinner(playerScore, compScore)
})

// function game() {
    // for (let i = 0; i < 5; i++) {
        //     const playerSelection = prompt('Rock, Paper or Scissors?', '').toLowerCase()
        //     const computerSelection = computerPlay()
        // } 
        
        
        
        //     if (playerScore > compScore) {
            //         return 'VICTORY!'
//     } else if (playerScore < compScore) {
//         return 'DEFEATED!'
//     } else {
//         return 'TIED? HOW?'
//     }
// }