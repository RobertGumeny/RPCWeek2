let choices = ['rock', 'paper', 'scissors']
let displays = [
  {rock: ""},
  {paper: ""},
  {scissors: ""} 
]

// NOTE 
// Main game, receive human choice and run it against randomly generate computer choice to determine a winner
function playGame(choices){
  let humanSelection = choices
  let computerSelection = computerChoice()
  if (humanSelection == 'rock'){  // Decide who wins if human chooses Rock
    document.getElementById("viewport-player").className = "far fa-hand-rock fa-7x viewport-bg"
    document.getElementById("viewport-player-text").innerText = "Rock"
    if (computerSelection == 'rock'){
      computerViewRock()
      tieGame()
    }
    if (computerSelection == 'paper'){
      computerViewPaper()
      humanLoses()
    }
    if (computerSelection == 'scissors'){
      computerViewScissors()
      humanWins()
    }
  }
  if (humanSelection == 'paper'){ // Decide who wins if human chooses Paper
    document.getElementById("viewport-player").className = "far fa-hand-paper fa-7x viewport-bg"
    document.getElementById("viewport-player-text").innerText = "Paper"
    if (computerSelection == 'rock'){
      computerViewRock()
      humanWins()
    }
    if (computerSelection == 'paper'){
      computerViewPaper()
      tieGame()
    }
    if (computerSelection == 'scissors'){
      computerViewScissors()
      humanLoses()
    }
  }
  if (humanSelection == 'scissors'){ // Decide who wins if human chooses Scissors
    document.getElementById("viewport-player").className = "far fa-hand-scissors fa-7x viewport-bg"
    document.getElementById("viewport-player-text").innerText = "Scissors"
    if (computerSelection == 'rock'){
      computerViewRock()
      humanLoses()
    }
    if (computerSelection == 'paper'){
      computerViewPaper()
      humanWins()
    }
    if (computerSelection == 'scissors'){
      computerViewScissors()
      tieGame()
    }
  }
}

// NOTE 
// Have computer pick a random number and assign an item selection based on that number
function computerChoice(){
  return choices[Math.floor(Math.random() * 3)]
}

// NOTE 
// Run this function if the Human player wins
function humanWins(){
  document.getElementById("declare-winner").innerText = "You win!!!"
  document.getElementById("declare-winner").className = "human-winner"
}
// NOTE 
// Run this function if the Computer wins
function humanLoses(){
  document.getElementById("declare-winner").innerText = "The Computer wins..."
  document.getElementById("declare-winner").className = "computer-winner"
}
// NOTE 
// Run this function if it is a tie
function tieGame(){
  document.getElementById("declare-winner").innerText = "It's a draw"
  document.getElementById("declare-winner").className = "tie-game"
}
// NOTE
// Change Computer Viewport when Rock is selected
function computerViewRock(){
  document.getElementById("viewport-computer").className = "far fa-hand-rock fa-7x viewport-bg"
  document.getElementById("viewport-computer-text").innerText = "Rock"
}
// NOTE 
// Change Computer Viewport when Paper is selected
function computerViewPaper(){
  document.getElementById("viewport-computer").className = "far fa-hand-paper fa-7x viewport-bg"
  document.getElementById("viewport-computer-text").innerText = "Paper"
}
// NOTE
// Change Computer Viewport when Scissors is selected
function computerViewScissors(){
  document.getElementById("viewport-computer").className = "far fa-hand-scissors fa-7x viewport-bg"
  document.getElementById("viewport-computer-text").innerText = "Scissors"
}