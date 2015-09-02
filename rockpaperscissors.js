
function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {

  if (move === null) {
    move = getInput();
    return move;
  } else {
    return move;
  }
}

function getComputerMove(move) {
  if (move === null) {
    move = randomPlay();
    return move;
  } else {
    return move;
  }
}

function getWinner(playerMove,computerMove) {
    var winner;
      if (( playerMove === "rock" ) && ( computerMove === "scissors")) {
       winner = "player";
    } else if (( playerMove === "rock" ) && ( computerMove === "paper")) {
       winner = "computer";
    } else if (( playerMove === "paper" ) && ( computerMove === "rock")) {
      winner = "player";
    } else if (( playerMove === "paper" ) && ( computerMove === "scissors")) {
      winner = "computer";
    } else if (( playerMove === "scissors" ) && ( computerMove === "paper")) {
       winner = "player";
    } else if (( playerMove === "scissors" ) && ( computerMove === "rock")) {
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

     while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove,computerMove);


      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);

       if (winner === "player") {
        playerWins += 1;

      } else if (winner === "computer") {
       computerWins += 1;
     }
       console.log('Player score : ' + playerWins + '\n' +
                    'Computer score : ' + computerWins);


     }

     if (playerWins === 5) {
       console.log('Player WON !!!');
     } else if (computerWins === 5) {
       console.log('Computer WON !!!');
     }

    return [playerWins, computerWins];
}
playToFive();
