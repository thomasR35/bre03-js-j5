document.addEventListener("DOMContentLoaded", () => {
  let pierre = document.getElementById("pierre");
  let feuille = document.getElementById("feuille");
  let ciseau = document.getElementById("ciseau");
  let joueur = document.getElementById("joueur");
  let ordinateur = document.getElementById("ordinateur");
  let resultat = document.getElementById("resultat");

  function getComputerChoice() {
    let choices = ["Pierre", "Feuille", "Ciseau"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function getResult(joueur, ordinateur) {
    if (joueur === ordinateur) {
      return "Egalité";
    } else if (
      (joueur === "Pierre" && ordinateur === "Ciseau") ||
      (joueur === "Feuille" && ordinateur === "Pierre") ||
      (joueur === "Ciseau" && ordinateur === "Feuille")
    ) {
      return "Vous avez gagné !";
    } else {
      return "Vous avez perdu !";
    }
  }

  function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice);

    joueur.textContent = `Joueur : ${playerChoice}`;
    ordinateur.textContent = `Ordinateur : ${computerChoice}`;
    resultat.textContent = result;
  }

  pierre.addEventListener("click", () => playRound("Pierre"));
  feuille.addEventListener("click", () => playRound("Feuille"));
  ciseau.addEventListener("click", () => playRound("Ciseau"));
});
