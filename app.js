const selects = document.querySelectorAll('button');
const result = document.querySelector('.result');
const playerScore = document.querySelector('#score-player');
const computerScore = document.querySelector('#score-computer');

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
    const outcome = algorithm(playerOne.choice, playerTwo.choice);
    if (playerOne.choice === outcome) {
      playerOne.win();
      return`${playerOne.id.charAt(0).toUpperCase() + playerOne.id.slice(1)} won!`;
    }
    if (playerTwo.choice === outcome) {
      playerTwo.win();
      return`${playerTwo.id.charAt(0).toUpperCase() + playerTwo.id.slice(1)} won!`;
    }
    if (!outcome) {
      return "Draw!"
    }
  }

  function game() {
    const temp = this.dataset.id.charAt(0);
    player.choice = temp;
    computer.choice = getComputerChoice();
    result.textContent = play(player, computer);
  
    playerScore.textContent = player.winCount;
    computerScore.textContent = computer.winCount;

    if (player.winCount >= 5) {
      const winner = player.id.charAt(0).toUpperCase() + player.id.slice(1);
      player.winCount = 0;
      computer.winCount = 0;
      alert(`${winner} is the final winner!`)
    }
    if (computer.winCount >= 5) {
      const winner = computer.id.charAt(0).toUpperCase() + computer.id.slice(1);
      player.winCount = 0;
      computer.winCount = 0;
      alert(`${winner} is the final winner!`)
    }
  }
  
  selects.forEach(select => {
    select.addEventListener('click', game)
  })