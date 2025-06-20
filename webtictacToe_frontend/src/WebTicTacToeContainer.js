import React, { useState } from "react";
import "./WebTicTacToeContainer.css";

// PUBLIC_INTERFACE
function WebTicTacToeContainer() {
  /**
   * Main Container for WebTicTacToe game.
   * - Real-time updates (local, extendable to sockets)
   * - Responsive, light theme
   * - Custom color scheme (primary/secondary/accent)
   * - Simple grid, header, reset
   */

  // Board state: Array of 9 (3x3), "X", "O", or null
  const [board, setBoard] = useState(Array(9).fill(null));
  // X starts
  const [xIsNext, setXIsNext] = useState(true);
  // Track if game is over and winner (null/ "X"/"O"/"Draw")
  const winner = calculateWinner(board);

  function handleClick(idx) {
    if (board[idx] || winner) return; // Already filled or game over
    const newBoard = board.slice();
    newBoard[idx] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    // (Online: Would also emit move to server here)
  }

  function handleReset() {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  function renderSquare(idx) {
    return (
      <button
        className="ttt-square"
        onClick={() => handleClick(idx)}
        aria-label={"Square " + (idx + 1)}
      >
        {board[idx]}
      </button>
    );
  }

  let status;
  if (winner === "Draw") status = "It's a draw!";
  else if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="ttt-container">
      <header className="ttt-header">
        <h2>WebTicTacToe</h2>
        <button
          className="ttt-reset-btn"
          style={{ backgroundColor: "var(--color-secondary)", color: "#222" }}
          onClick={handleReset}
        >
          Reset Game
        </button>
      </header>
      <div className="ttt-status">{status}</div>
      <div className="ttt-board">
        {[0, 1, 2].map((row) => (
          <div className="ttt-row" key={row}>
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
      </div>
      <footer className="ttt-footer">
        <span>
          <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>X</span>
          &nbsp;vs&nbsp;
          <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>O</span>
        </span>
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
function calculateWinner(squares) {
  // Returns "X", "O", "Draw", or null
  const lines = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],
    [0, 3, 6],[1, 4, 7],[2, 5, 8],
    [0, 4, 8],[2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  if (squares.every((x) => x)) return "Draw";
  return null;
}

export default WebTicTacToeContainer;
