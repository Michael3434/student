////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

  if (move === null) {
    move = getInput();
    return move;
  } else {
    return move;
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
  if (move === null) {
    move = randomPlay();
    return move;
  } else {
    return move;
  }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    var winner;
      if (( playerMove === "rock" ) && ( computerMove === "scissors") {
       winner = "player";
    } else if (( playerMove === "rock" ) && ( computerMove === "paper") {
       winner = "computer";
    } else if (( playerMove === "Paper" ) && ( computerMove === "rock") {
      winner = "player";
    } else if (( playerMove === "paper" ) && ( computerMove === "scissors") {
      winner = "computer";
    } else if (( playerMove === "scissors" ) && ( computerMove === "paper") {
       winner = "player";
    } else if (( playerMove === "scissors" ) && ( computerMove === "rock") {
      winner = "computer";
    } else {
      winner = "tie";
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
     while ((playerWins < 5) || (computerWins < 5)) {
       var playerMove = getPlayerMove(getInput());
       var computerMove = getComputerMove(randomPlay());
       var winner = getWinner(playerMove,computerMove);
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

       if (winner === "player") {
        var playerWins += 1;

      } else if (winner === "computer") {
       var computerWins += 1;
     } else {
       console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n')

     } }

     if ((playerWins === 5) {
       console.log('Player WON !!!')
     } else if (computerWins === 5) {
       console.log('Computer WON !!!')
     }

    return [playerWins, computerWins];
}