var origBoard;
const huPlayer = "O";
const aiPlayer = "X";
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];

const cells = document.querySelectorAll(".cell");
startGame();

// Game start and reset
function startGame() {
	clearWin();
//See quote.js for quote generator the utilizes json, Local memory, and API request (Rubric).
	quote();
	document.querySelector(".endgame").style.display = "none";
	origBoard = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = "";
		cells[i].style.removeProperty("background-color");
		cells[i].addEventListener("click", turnClick, false);
	}
}

function turnClick(square) {
	if (typeof origBoard[square.target.id] == "number") {
		turn(square.target.id, huPlayer);
		if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer);
	}
}

function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerText = player;
	let gameWon = checkWin(origBoard, player);
	if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every((elem) => plays.indexOf(elem) > -1)) {
			gameWon = {
				index: index,
				player: player
			};
			break;
		}
	}
	return gameWon;
}

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "blue" : "red";
	}
	for (var i = 0; i < cells.length; i++) {
		cells[i].removeEventListener("click", turnClick, false);
	}
	declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose.");
}

//create element for win loose or tie animation
function declareWinner(who) {
	var win = document.createElement("DIV");
	var text = document.createElement("DIV");
	win.classList.add("end-animate");
	text.classList.add("text");
	win.appendChild(text);

	document.body.appendChild(win);
	document.querySelector(".endgame").style.display = "block";
	document.querySelector(".text").innerText = who;
}

// Clear Winner
function clearWin() {
	var text = document.getElementsByClassName("text");
	while (text[0]) {
		text[0].parentNode.removeChild(text[0]);
	}

	var win = document.getElementsByClassName("end-animate");
	while (win[0]) {
		win[0].parentNode.removeChild(win[0]);
	}
}


function emptySquares() {
	return origBoard.filter((s) => typeof s == "number");
}
// very bad IA for Tic Tac Toe but I wanted it to be easy to see the functions
function bestSpot() {
	return emptySquares()[0];
}

function checkTie() {
	let gameWon = null;
	if (emptySquares().length == 0) {
		gameWon = checkWin(origBoard, huPlayer);
		if (gameWon) {
			gameOver(gameWon);
			return true;
		} else {
			for (var i = 0; i < cells.length; i++) {
				cells[i].style.backgroundColor = "green";
				cells[i].removeEventListener('click', turnClick, false);
			}
			declareWinner("Tie Game!");
			return true;
		}
	}
	return false;
}