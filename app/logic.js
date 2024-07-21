const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

function checkWinner(board) {
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return board.includes('') ? null : 'Tie';
}

function updateStatus(winner) {
    if (winner === 'Tie') {
        status.textContent = "It's a tie!";
    } else if (winner) {
        status.textContent = `${winner} wins!`;
    } else {
        status.textContent = `${currentPlayer}'s turn`;
    }
}

function minimax(board, depth, isMaximizing) {
    const winner = checkWinner(board);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (winner === 'Tie') return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                let score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                let score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function aiMove() {
    let bestScore = -Infinity;
    let bestMove;
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = 'O';
            let score = minimax(gameBoard, 0, false);
            gameBoard[i] = '';
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    gameBoard[bestMove] = 'O';
    cells[bestMove].textContent = 'O';
    currentPlayer = 'X';
    const winner = checkWinner(gameBoard);
    updateStatus(winner);
    if (winner) gameActive = false;
}

function handleCellClick(e) {
    const cellIndex = e.target.getAttribute('data-index');
    if (gameBoard[cellIndex] !== '' || !gameActive || currentPlayer !== 'X') return;

    gameBoard[cellIndex] = 'X';
    e.target.textContent = 'X';
    const winner = checkWinner(gameBoard);
    if (winner) {
        updateStatus(winner);
        gameActive = false;
        return;
    }

    currentPlayer = 'O';
    updateStatus(null);
    setTimeout(aiMove, 500);
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    updateStatus(null);
}

board.addEventListener('click', handleCellClick);
resetButton.addEventListener('click', resetGame);

updateStatus(null);
