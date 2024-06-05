const isWinner = (gameBoard) => {
    const WIN_LINES = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12]
    ];
  
    for (let i = 0; i < WIN_LINES.length; i++) {
      const [pos1, pos2, pos3, pos4] = WIN_LINES[i];
      if (
        gameBoard[pos1] > 0 &&
        gameBoard[pos1] === gameBoard[pos2] &&
        gameBoard[pos2] === gameBoard[pos3] &&
        gameBoard[pos3] === gameBoard[pos4]
      ) {
        return gameBoard[pos1]; // Return the player who won
      }
    }
    return false; // No winner
  }
  
  export default isWinner;
  