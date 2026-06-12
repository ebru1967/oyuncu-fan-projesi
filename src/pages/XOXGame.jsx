import React, { useState, useEffect } from 'react';

function XOXGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserNext, setIsUserNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (currentBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    return currentBoard.every(cell => cell !== null) ? 'Berabere' : null;
  };

  const findBestMove = (currentBoard) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    // 1. Kazanacak hamle var mı?
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] === 'O' && currentBoard[b] === 'O' && !currentBoard[c]) return c;
      if (currentBoard[a] === 'O' && currentBoard[c] === 'O' && !currentBoard[b]) return b;
      if (currentBoard[b] === 'O' && currentBoard[c] === 'O' && !currentBoard[a]) return a;
    }
    // 2. Engelleme hamlesi
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] === 'X' && currentBoard[b] === 'X' && !currentBoard[c]) return c;
      if (currentBoard[a] === 'X' && currentBoard[c] === 'X' && !currentBoard[b]) return b;
      if (currentBoard[b] === 'X' && currentBoard[c] === 'X' && !currentBoard[a]) return a;
    }
    // 3. Merkeze odaklan
    if (!currentBoard[4]) return 4;
    // 4. Rastgele hamle
    const emptyIndices = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  };

  useEffect(() => {
    if (!isUserNext && !winner) {
      const timer = setTimeout(() => {
        const newBoard = [...board];
        const move = findBestMove(newBoard);
        if (move !== undefined) {
          newBoard[move] = 'O';
          setBoard(newBoard);
          const gameResult = checkWinner(newBoard);
          if (gameResult) setWinner(gameResult);
          else setIsUserNext(true);
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isUserNext, board, winner]);

  const handleClick = (idx) => {
    if (board[idx] || !isUserNext || winner) return;
    const newBoard = [...board];
    newBoard[idx] = 'X';
    setBoard(newBoard);
    
    const gameResult = checkWinner(newBoard);
    if (gameResult) setWinner(gameResult);
    else setIsUserNext(false);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserNext(true);
    setWinner(null);
  };

  return (
    <div className="xox-container">
      <h3>{winner ? (winner === 'Berabere' ? 'SONUÇ: BERABERE!' : (winner === 'X' ? 'TEBRİKLER, KAZANDIN!' : 'ŞERİF KAZANDI!')) : 'ŞERİF vs SEN'}</h3>
      <div className="grid">
        {board.map((cell, idx) => (
          <button 
            key={idx} 
            onClick={() => handleClick(idx)} 
            className="cell" 
            disabled={!!winner || cell !== null}
            style={{
              backgroundImage: cell === 'X' ? "url('/gallery/h1 (160).jpeg')" : 
                               cell === 'O' ? "url('/gallery/h1 (165).jpeg')" : "none",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
          </button>
        ))}
      </div>
      {winner && <button onClick={resetGame} className="reset-btn">YENİ OYUN</button>}
    </div>
  );
}

export default XOXGame;