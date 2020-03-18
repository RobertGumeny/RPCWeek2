let choices = ['rock', 'paper', 'scissors']

// NOTE 
// Main game, receive human choice and run it against randomly generate computer choice to determine a winner
function playGame(choices){
  let humanSelection = choices
  let computerSelection = computerChoice()
  if (humanSelection == 'rock'){ // Decide who wins if human chooses Rock
    if (computerSelection == 'rock'){
      tieGame()
    }
    if (computerSelection == 'paper'){
      humanLoses()
    }
    if (computerSelection == 'scissors'){
      humanWins()
    }
  }
  if (humanSelection == 'paper'){ // Decide who wins if human chooses Paper
    if (computerSelection == 'rock'){
      humanWins()
    }
    if (computerSelection == 'paper'){
      tieGame()
    }
    if (computerSelection == 'scissors'){
      humanLoses()
    }
  }
  if (humanSelection == 'scissors'){ // Decide who wins if human chooses Scissors
    if (computerSelection == 'rock'){
      humanLoses()
    }
    if (computerSelection == 'paper'){
      humanWins()
    }
    if (computerSelection == 'scissors'){
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
  console.log("You win!!!")
}
// NOTE 
// Run this function if the Computer wins
function humanLoses(){
  console.log("The Computer wins...")
}
// NOTE 
// Run this function if it is a tie
function tieGame(){
  console.log("It's a draw!")
}

