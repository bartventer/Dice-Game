// FUNCTION TO ROLL THE DICE AND RETURN THE ROUNDED INTEGER FROM 1-6
function diceRoll() {
  var randomNumber = 1 + Math.random() * 6;
  randomNumber = Math.floor(randomNumber);
  return randomNumber
}


// #FUNCTION TO UPDATE IMAGES TO MATCH ROLL OF THE DICE
function updateImages(randomNumber1, randomNumber2) {
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
}


// #VARIABLES WHICH WILL UPDATE AFTER EACH ROUND TO KEEP SCORE
var roundNumber = 0;
var player1Wins = 0;
var player2Wins = 0;
var draws = 0;


// #FUNCTION TO UPDATE GAME STATS AFTER EACH ROUND
function updateStats(roundNumber, player1Wins, player2Wins) {
  document.querySelector(".rounds").innerText = "Rounds played: " + roundNumber
  document.querySelectorAll(".dice p")[0].innerText = "Player 1 " + "[" + player1Wins + "W]";
  document.querySelectorAll(".dice p")[1].innerText = "[" + player2Wins + "W]" + " Player 2";
}


// MAIN FUNCTION TO PLAY GAME ON MOUSE CLICK
// WHEN THE USER CLICKS ON THE BUTTON, THE FOLLOWING WILL HAPPEN:
//   DICE VALUES WILL BE UPDATED VIA diceRoll() FUNCTION
//   DICE IMAGES WILL BE UPDATED TO CORRESPOND WITH DICE VALUES VIA updateImages() FUNCTION
//   GAME LOGIC WILL BE RUN TO DETERMINE THE OUTCOME OF THE RESULT VIA FOR LOOP
//   GAME STATS VARIABLES WILL BE UPDATED VIA updateStats() FUNCTION
function playGame() {
  var randomNumber1 = diceRoll();
  var randomNumber2 = diceRoll();
  roundNumber += 1
  document.querySelector(".play_button").innerText = "Play Next Round!";
  document.querySelector(".reset_button").style.display="inline-block";
  updateImages(randomNumber1, randomNumber2);
  // PLAYER 1 WINS
  if (randomNumber1 > randomNumber2) {
    player1Wins += 1;
    document.querySelector(".result").innerHTML = "🏁 Player 1 Wins!";
  }
  // PLAYER 2 WINS
  if (randomNumber1 < randomNumber2) {
    player2Wins += 1;
    document.querySelector(".result").innerHTML = "Player 2 Wins! 🏁";
  }
  // DRAW
  if (randomNumber1 === randomNumber2) {
    draws += 1;
    document.querySelector(".result").innerHTML = "Draw!";
  }
  updateStats(roundNumber, player1Wins, player2Wins);

}


// UPDATE COPYRIGHT INFO AND DATE IN FOOTER
function updateYear(){
  var dateTime = new Date();
  var year = dateTime.getFullYear();
  document.querySelector("footer").innerText = "Copyright Bart Venter " + year;
}
updateYear();


// FUNCTION TO PERFORM HARD RESET
function hardReset(){
  roundNumber = 0;
  player1Wins = 0;
  player2Wins = 0;
  draws = 0;

  document.querySelector(".play_button").innerText = "Let's Play!"
  document.querySelector(".reset_button").style.display="none";
  document.querySelector(".rounds").innerText = "No Rounds played yet."
  document.querySelector(".result").innerHTML = "Let's Play!";
  document.querySelectorAll(".dice p")[0].innerText = "Player 1";
  document.querySelectorAll(".dice p")[1].innerText = "Player 2";
}
