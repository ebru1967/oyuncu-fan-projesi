import React, { useState, useEffect } from 'react';

const SIZE = 5; 
const serifQuotes = [
  "Daha fazlasını düşünmelisin.",
  "Zayıflığın hareketlerinde belli.",
  "Bu oyunun kurallarını ben yazdım.",
  "Duygusuzluk en iyi stratejidir.",
  "Hata payın kalmadı.",
  "Satrançta piyonlar her zaman feda edilir."
];

function SerifinSatranci() {
  const createBoard = () => {
    let board = Array(SIZE * SIZE).fill(null);
    for (let i = 0; i < SIZE; i++) { board[i] = 'S'; board[SIZE * (SIZE - 1) + i] = 'P'; }
    return board;
  };

  const [board, setBoard] = useState(createBoard());
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [quote, setQuote] = useState("Hamleni yap. Sadece sonucu geciktireceksin.");

  const getMoves = (currBoard, player) => {
    const moves = [];
    for (let i = 0; i < SIZE * SIZE; i++) {
      if (currBoard[i] === player) {
        const row = Math.floor(i / SIZE);
        const col = i % SIZE;
        const dir = player === 'P' ? -1 : 1; 

        if (currBoard[i + dir * SIZE] === null) moves.push({ from: i, to: i + dir * SIZE });
        if (col > 0 && currBoard[i + dir * SIZE - 1] && currBoard[i + dir * SIZE - 1] !== player) moves.push({ from: i, to: i + dir * SIZE - 1 });
        if (col < SIZE - 1 && currBoard[i + dir * SIZE + 1] && currBoard[i + dir * SIZE + 1] !== player) moves.push({ from: i, to: i + dir * SIZE + 1 });
      }
    }
    return moves;
  };

  const checkWinner = (currBoard) => {
    if (currBoard.slice(0, SIZE).includes('P')) return 'P';
    if (currBoard.slice(SIZE * (SIZE - 1)).includes('S')) return 'S';
    if (getMoves(currBoard, 'P').length === 0) return 'S';
    if (getMoves(currBoard, 'S').length === 0) return 'P';
    return null;
  };

  const minimax = (currBoard, depth, alpha, beta, isMaximizing) => {
    const win = checkWinner(currBoard);
    if (win === 'S') return 100 + depth;
    if (win === 'P') return -100 - depth;
    if (depth === 5) return 0;

    if (isMaximizing) {
      let maxEval = -Infinity;
      for (let m of getMoves(currBoard, 'S')) {
        const next = [...currBoard];
        next[m.to] = next[m.from]; next[m.from] = null;
        let evalVal = minimax(next, depth + 1, alpha, beta, false);
        maxEval = Math.max(maxEval, evalVal);
        alpha = Math.max(alpha, evalVal);
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      let minEval = Infinity;
      for (let m of getMoves(currBoard, 'P')) {
        const next = [...currBoard];
        next[m.to] = next[m.from]; next[m.from] = null;
        let evalVal = minimax(next, depth + 1, alpha, beta, true);
        minEval = Math.min(minEval, evalVal);
        beta = Math.min(beta, evalVal);
        if (beta <= alpha) break;
      }
      return minEval;
    }
  };

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      setIsThinking(true);
      setTimeout(() => {
        const moves = getMoves(board, 'S');
        let bestScore = -Infinity;
        let bestMove = null;
        for (let m of moves) {
          const next = [...board];
          next[m.to] = next[m.from]; next[m.from] = null;
          let score = minimax(next, 0, -Infinity, Infinity, false);
          if (score > bestScore) { bestScore = score; bestMove = m; }
        }
        if (bestMove) {
          const next = [...board];
          next[bestMove.to] = next[bestMove.from]; next[bestMove.from] = null;
          setBoard(next);
          setQuote(serifQuotes[Math.floor(Math.random() * serifQuotes.length)]);
          const gameWinner = checkWinner(next);
          if (gameWinner) setWinner(gameWinner);
          else setIsPlayerTurn(true);
        }
        setIsThinking(false);
      }, 800);
    }
  }, [isPlayerTurn]);

  const handleCellClick = (idx) => {
    if (winner || !isPlayerTurn || isThinking) return;
    if (board[idx] === 'P') {
      setSelectedPiece(idx);
      setValidMoves(getMoves(board, 'P').filter(m => m.from === idx).map(m => m.to));
    } else if (selectedPiece !== null && validMoves.includes(idx)) {
      const next = [...board];
      next[idx] = 'P'; next[selectedPiece] = null;
      setBoard(next); setSelectedPiece(null); setValidMoves([]);
      const gameWinner = checkWinner(next);
      if (gameWinner) setWinner(gameWinner); else setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setBoard(createBoard());
    setIsPlayerTurn(true);
    setWinner(null);
    setSelectedPiece(null);
    setValidMoves([]);
  };

  return (
    <div className="game-container" style={{ padding: '3rem 1rem', textAlign: 'center', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', minHeight: '80vh' }}>
      <div className="section-header-editorial">
        <span className="archive-badge">// ŞERİF FURTUNA ALGORİTMASI</span>
        <h2 className="editorial-title">KUSURSUZ ZİHİN</h2>
        <p className="editorial-subtitle">Piyonları hedef hatlarına taşı. Şerif asla hata yapmaz.</p>
      </div>

      <div style={{ backgroundColor: 'var(--bg-card)', padding: '1rem', margin: '2rem auto', maxWidth: '400px', borderLeft: '4px solid var(--accent-dark)' }}>
        <p style={{ fontStyle: 'italic', color: 'var(--accent-dark)', fontWeight: 'bold' }}>
          {winner ? (winner === 'S' ? 'Mat. Duygular her zaman kaybettirir.' : 'İmkansız. Kazandın.') : isThinking ? 'Şerif hesaplıyor...' : quote}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${SIZE}, 1fr)`, width: '300px', margin: 'auto', border: '5px solid var(--accent-dark)' }}>
        {board.map((cell, i) => (
          <div key={i} onClick={() => handleCellClick(i)} style={{ 
            aspectRatio: '1/1', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', cursor: (!winner && isPlayerTurn) ? 'pointer' : 'default',
            backgroundColor: validMoves.includes(i) ? 'var(--accent-light)' : (Math.floor(i/SIZE)+i)%2===0 ? 'var(--bg-card)' : 'var(--bg-main)'
          }}>
            {cell === 'S' ? '♟' : cell === 'P' ? '♙' : ''}
          </div>
        ))}
      </div>

      {winner && <button onClick={resetGame} className="editorial-link" style={{ marginTop: '2rem' }}>YENİDEN YÜZLEŞ</button>}
    </div>
  );
}

export default SerifinSatranci;