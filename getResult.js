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

export default getResult;
