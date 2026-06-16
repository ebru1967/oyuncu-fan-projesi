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
    <div className="xox-wrapper animate-fade">
      
      {/* OYUN İÇİN ÖZEL CSS BLOĞU */}
      <style>{`
        .xox-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 2rem auto;
          max-width: 400px;
          padding: 2rem 1rem;
          background: rgba(84, 107, 65, 0.02);
          border: 1px solid rgba(84, 107, 65, 0.15);
          border-radius: 8px;
        }

        .xox-header {
          font-family: var(--font-heading);
          color: var(--accent-dark);
          margin-bottom: 2rem;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-align: center;
        }

        .xox-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1 / 1; /* Oyun tahtasının daima tam kare olmasını sağlar */
          margin-bottom: 2rem;
        }

        .xox-cell {
          background-color: rgba(84, 107, 65, 0.05);
          border: 1px dashed rgba(84, 107, 65, 0.3);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          background-repeat: no-repeat;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
        }

        .xox-cell:hover:not(:disabled) {
          background-color: rgba(84, 107, 65, 0.15);
          border-style: solid;
          transform: scale(1.02);
        }

        .xox-cell:disabled {
          cursor: not-allowed;
          border-style: solid;
        }

        .xox-reset-btn {
          background-color: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.8rem 2.5rem;
          font-family: var(--font-heading);
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
        }

        .xox-reset-btn:hover {
          background-color: var(--accent-dark);
          color: var(--bg-main);
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.2);
        }
      `}</style>

      <div className="xox-container">
        <h3 className="xox-header">
          {winner ? (winner === 'Berabere' ? 'SONUÇ: BERABERE!' : (winner === 'X' ? 'TEBRİKLER, KAZANDIN!' : 'ŞERİF KAZANDI!')) : 'ŞERİF vs SEN'}
        </h3>
        
        <div className="xox-grid">
          {board.map((cell, idx) => (
            <button 
              key={idx} 
              onClick={() => handleClick(idx)} 
              className="xox-cell" 
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
        
        {winner && <button onClick={resetGame} className="xox-reset-btn">YENİ OYUN ⟲</button>}
      </div>
    </div>
  );
}

export default XOXGame;