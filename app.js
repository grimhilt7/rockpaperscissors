// a factory function to create a player
function createPlayers(name) {
  const id = name;
  return {
    id,
    choice: "",
    winCount : 0,
    win() {
      this.winCount += 1;
    }
  };
}
const player = createPlayers("player");
const computer = createPlayers("computer");

// randomly returns either r, p, or s (rock, paper, and scissor accordingly).
function getComputerChoice() {
  const num = Math.random();
  if (num > 0 && num <= 0.33) {
    return "r";
  }
  if (num > 0.33 && num <= 0.66) {
    return "p";
  }
  if (num > 0.66 && num <= 1) {
    return "s"; }
}

function algorithm(choiceOne, choiceTwo) {
  const str = [choiceOne, choiceTwo].sort().join('')
  switch (str) {
    case "rs": return "r";
    case "ps": return "s";
    case "pr": return "p";
    default: return null;
  }
};

// plays a single round game, and returns a string that determines the winner
function play(playerOne, playerTwo) {
  const result = algorithm(playerOne.choice, playerTwo.choice);
  if (playerOne.choice === result) {
    playerOne.win();
    console.log(`${playerOne.id} won!`);
  }
  if (playerTwo.choice === result) {
    playerTwo.win();
    console.log(`${playerTwo.id} won!`);
  }
}

// plays five games in the condition of three wins first to win, and returns a string that determines the final winner
function game() {
  [player.winCount, computer.winCount] = [0, 0];

  for (let i=0; i <= 4; i++) {
    player.choice = prompt("...");
    computer.choice = getComputerChoice();

    play(player, computer)

    if (player.winCount >= 3) {
      return player;
    }
    if (computer.winCount >= 3) {
      return computer;
    }
  }

  if (player.winCount > computer.winCount) {
    return player
  }
  if (player.winCount < computer.winCount) {
    return computer
  } 
  if (player.winCount === computer.winCount) {
    return "DRAW"
  }
}
