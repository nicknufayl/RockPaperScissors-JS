let playerScore = 0
let compScore = 0

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')

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

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
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