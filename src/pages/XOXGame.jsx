import React, { useState, useEffect, useCallback } from 'react';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

// Web Audio API ile anlık ses üretimi (harici dosya gerekmez)
function playTone(frequency, duration, type = 'sine', volume = 0.15) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = frequency;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    setTimeout(() => {
      osc.stop();
      ctx.close();
    }, duration);
  } catch (e) {
    // Ses API'si desteklenmiyorsa sessizce geç
  }
}

function XOXGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserNext, setIsUserNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  const [difficulty, setDifficulty] = useState('zor'); // 'kolay' | 'zor'
  const [scores, setScores] = useState({ user: 0, bot: 0, draw: 0 });

  const checkWinner = (currentBoard) => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return { result: currentBoard[a], line: pattern };
      }
    }
    if (currentBoard.every(cell => cell !== null)) {
      return { result: 'Berabere', line: null };
    }
    return { result: null, line: null };
  };

  const findBestMove = (currentBoard) => {
    // Kolay modda %35 ihtimalle bot bilerek zayıf/rastgele oynar
    if (difficulty === 'kolay' && Math.random() < 0.35) {
      const emptyIndices = currentBoard.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
      return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    }

    // 1. Kazanacak hamle var mı?
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (currentBoard[a] === 'O' && currentBoard[b] === 'O' && !currentBoard[c]) return c;
      if (currentBoard[a] === 'O' && currentBoard[c] === 'O' && !currentBoard[b]) return b;
      if (currentBoard[b] === 'O' && currentBoard[c] === 'O' && !currentBoard[a]) return a;
    }
    // 2. Engelleme hamlesi
    for (let pattern of WIN_PATTERNS) {
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

  const registerResult = useCallback((result) => {
    if (result === 'X') {
      setScores(prev => ({ ...prev, user: prev.user + 1 }));
      playTone(660, 400, 'sine', 0.18);
    } else if (result === 'O') {
      setScores(prev => ({ ...prev, bot: prev.bot + 1 }));
      playTone(150, 400, 'sawtooth', 0.18);
    } else if (result === 'Berabere') {
      setScores(prev => ({ ...prev, draw: prev.draw + 1 }));
      playTone(380, 300, 'triangle', 0.15);
    }
  }, []);

  useEffect(() => {
    if (!isUserNext && !winner) {
      const timer = setTimeout(() => {
        const newBoard = [...board];
        const move = findBestMove(newBoard);
        if (move !== undefined) {
          newBoard[move] = 'O';
          setBoard(newBoard);
          const { result, line } = checkWinner(newBoard);
          if (result) {
            setWinner(result);
            setWinningLine(line);
            registerResult(result);
          } else {
            setIsUserNext(true);
          }
        }
      }, 600);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserNext, board, winner, difficulty]);

  const handleClick = (idx) => {
    if (board[idx] || !isUserNext || winner) return;
    const newBoard = [...board];
    newBoard[idx] = 'X';
    setBoard(newBoard);
    playTone(500, 60, 'square', 0.1);

    const { result, line } = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      setWinningLine(line);
      registerResult(result);
    } else {
      setIsUserNext(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserNext(true);
    setWinner(null);
    setWinningLine(null);
  };

  // Klavye desteği: 1-9 tuşlarıyla hücre seçimi
  useEffect(() => {
    function handleKeyDown(e) {
      const num = Number(e.key);
      if (num >= 1 && num <= 9) {
        handleClick(num - 1);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, isUserNext, winner]);

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
          margin-bottom: 1rem;
          font-size: 1.5rem;
          letter-spacing: 2px;
          text-align: center;
        }

        .xox-difficulty {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .xox-difficulty-btn {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--accent-dark);
          background: transparent;
          color: var(--accent-dark);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .xox-difficulty-btn.active {
          background: var(--accent-dark);
          color: var(--bg-main);
        }

        .xox-scoreboard {
          display: flex;
          gap: 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .xox-scoreboard span strong {
          display: block;
          font-size: 1.3rem;
          color: var(--accent-dark);
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

        .xox-cell.winning-cell {
          border-color: #4F772D;
          border-style: solid;
          border-width: 2px;
          box-shadow: 0 0 0 3px rgba(79, 119, 45, 0.25);
          animation: xoxWinPulse 0.8s ease-in-out infinite;
        }

        @keyframes xoxWinPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
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

        .xox-key-hint {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          opacity: 0.45;
          margin-top: 1rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .xox-cell.winning-cell {
            animation: none;
          }
        }
      `}</style>

      <div className="xox-container">
        <h3 className="xox-header">
          {winner ? (winner === 'Berabere' ? 'SONUÇ: BERABERE!' : (winner === 'X' ? 'TEBRİKLER, KAZANDIN!' : 'ŞERİF KAZANDI!')) : 'ŞERİF vs SEN'}
        </h3>

        <div className="xox-difficulty">
          <button
            className={`xox-difficulty-btn ${difficulty === 'kolay' ? 'active' : ''}`}
            onClick={() => setDifficulty('kolay')}
          >
            KOLAY
          </button>
          <button
            className={`xox-difficulty-btn ${difficulty === 'zor' ? 'active' : ''}`}
            onClick={() => setDifficulty('zor')}
          >
            ZOR
          </button>
        </div>

        <div className="xox-scoreboard">
          <span>SEN <strong>{scores.user}</strong></span>
          <span>BERABERE <strong>{scores.draw}</strong></span>
          <span>ŞERİF <strong>{scores.bot}</strong></span>
        </div>
        
        <div className="xox-grid">
          {board.map((cell, idx) => (
            <button 
              key={idx} 
              onClick={() => handleClick(idx)} 
              className={`xox-cell ${winningLine?.includes(idx) ? 'winning-cell' : ''}`}
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

        <div className="xox-key-hint">KLAVYE: 1-9 tuşlarıyla hücre seç</div>
      </div>
    </div>
  );
}

export default XOXGame;