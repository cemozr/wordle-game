import { WORDS } from "./words.js";
const gameBoard = document.getElementById("game-board");
let totalGuesses = 6;
let remainingGuesses = totalGuesses;
let playerGuess = [];
let letterOrder = 0;
let rightGuess = WORDS[Math.floor(Math.random() * WORDS.length)];

console.log(rightGuess);
function initGameBoard() {
  for (let i = 0; i < totalGuesses; i++) {
    let letterRow = document.createElement("div");
    letterRow.className = "letter-row";
    gameBoard.appendChild(letterRow);
    for (let j = 0; j < 5; j++) {
      let letterBox = document.createElement("div");
      letterBox.className = "letter-box";
      letterRow.appendChild(letterBox);
    }
  }
}
initGameBoard();

document.addEventListener("keyup", (event) => {
  let pressedKey = String(event.key);
  console.log(pressedKey);
  if (remainingGuesses == 0) {
    console.log(1);
    return;
  }
  if (pressedKey === "Backspace" && letterOrder !== 0) {
    console.log(2);
    removeLetter();
    return;
  }
  if (pressedKey === "Enter") {
    console.log(3);
    tryToGuess();
  }

  if (event.keyCode >= 65 && event.keyCode <= 90) {
    addLetter(pressedKey);
  }
});

function removeLetter() {}

function tryToGuess() {}

function addLetter(pressedKey) {
  if (letterOrder == 5) {
    return;
  }
  pressedKey = pressedKey.toLowerCase();
  let row = document.getElementsByClassName("letter-row")[6 - remainingGuesses];
  let box = row.children[letterOrder];
  box.textContent = pressedKey;
  playerGuess.push(pressedKey);
  letterOrder += 1;
  console.log(playerGuess);
}
