import { WORDS } from "./words.js";
const gameBoard = document.getElementById("game-board");
let totalGuesses = 6;
let remainingGuesses = totalGuesses;
let playerGuess = [];
let letterOrder = 0;
let answer = WORDS[Math.floor(Math.random() * WORDS.length)];

console.log(answer);
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
  if (pressedKey === "Backspace" && playerGuess.length != 0) {
    console.log(2);
    removeLetter(playerGuess);
  }
  if (pressedKey === "Enter") {
    console.log(3);
    check(remainingGuesses);
  }

  console.log(event.code);
  if (event.code.startsWith("Key") || event.code == "Quote") {
    addLetter(pressedKey, remainingGuesses);
  }
});

function removeLetter(playerGuess) {
  let row = document.getElementsByClassName("letter-row")[6 - remainingGuesses];
  let box = row.children[playerGuess.length - 1];
  box.classList.remove("filled-box");
  box.textContent = "";
  playerGuess.pop();
  console.log(playerGuess);
  console.log("removedLetterOrder: " + playerGuess.length);
}

function check() {
  let row = document.getElementsByClassName("letter-row")[6 - remainingGuesses];
  let i;

  for (i = 0; i < answer.length; i++) {
    let box = row.children[i];
    if (answer[i] == playerGuess[i]) {
      box.classList.add("bg-green");
      console.log(5);
      continue;
    }
    let checkLetter = answer[i].localeCompare(playerGuess[i]);
    let checkLetterYellow = answer.includes(playerGuess[i]);
    if (checkLetterYellow) {
      box.classList.add("bg-yellow");
      console.log(6);
    }
    if (checkLetter !== 0) {
      box.classList.add("bg-gray");
      console.log(5);
    }
  }
  // console.log(playerGuess);
  let checkWord = String(answer).localeCompare(playerGuess.join(""));
  // console.log(answer);
  if (checkWord == 0) {
    console.log("Tebrikler!");
  } else {
    console.log("Tekrar Dene!");
    // remainingGuesses -= 1;
  }
}

function addLetter(pressedKey) {
  if (playerGuess.length == 5) {
    return;
  }

  pressedKey = pressedKey.toLowerCase();
  let row = document.getElementsByClassName("letter-row")[6 - remainingGuesses];
  let box = row.children[playerGuess.length];
  box.classList.add("filled-box");
  box.textContent = pressedKey;
  playerGuess.push(pressedKey);
  // if (removeLetter() == true) {
  //   letterOrder -= 1;
  // } else {
  console.log("addedLetterOrder: " + playerGuess.length);
  // }

  console.log(playerGuess);
}
