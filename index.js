function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  const playerChoice = prompt(
    "Please type out your choice of either rock, paper or scissors."
  );
  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    getPlayerChoice();
  } else {
    return playerChoice;
  }
}

function getResult(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "You Tied!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

function playGame() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const result = getResult(computerChoice, playerChoice);
  alert(result);
}

playGame();
