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

export default getPlayerChoice;
