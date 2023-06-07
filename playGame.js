import getComputerChoice from "./getComputerChoice";
import getPlayerChoice from "./getPlayerChoice";
import getResult from "./getResult";

function playGame() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice();
  const result = getResult(computerChoice, playerChoice);
  alert(result);
}

export default playGame;
