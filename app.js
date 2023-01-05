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

// an AI that randomly returns either r, p, or s (rock, paper, and scissor accordingly).
// eslint-disable-next-line consistent-return
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

const player = createPlayers("player");
const computer = createPlayers("computer");

function algorithm(arr) {
  const str = arr.sort().join('')
  switch (str) {
    case "rs": return "r";
    case "ps": return "s";
    case "pr": return "p";
    default: return null;
  }
};

// called to plays a single round game and returns a string that determines the winner
function play(playerOne, playerTwo) {
  const result = algorithm([playerOne.choice, playerTwo.choice]);
  if (playerOne.choice === result) {
    playerOne.win();
  }
  if (playerTwo.choice === result) {
    playerTwo.win();
  }
}

// called to plays five games in the condition of three wins first to win, and returns a string that determines the final winner
// eslint-disable-next-line no-unused-vars
function game() {
  // for loop play five rounds
  player.choice = prompt("...");
  computer.choice = getComputerChoice();
  play(player, computer)

  // if (player.winCount >= 3) {
  //   return player;
  // }
  // if (computer.winCount >= 3) {
  //   return computer;
  // }
  // // ---

  // if (player.winCount > computer.winCount) {
  //   return player
  // }
  // if (player.winCount < computer.winCount) {
  //   return computer
  // } 
  // if (player.winCount === computer.winCount) {
  //   return "DRAW"
  // }
}
