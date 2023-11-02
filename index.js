let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cell) {
    if (gameActive && board[cell] === "") {
        board[cell] = currentPlayer;
        document.getElementsByClassName("cell")[cell].innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById("result").innerText = `Player ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.indexOf("") === -1) {
            document.getElementById("result").innerText = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("result").innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combo of winCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    document.getElementById("result").innerText = "Player X's turn";

    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}