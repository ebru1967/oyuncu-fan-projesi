import React, { useState, useEffect } from 'react';

// Şerif'in psikolojik baskı replikleri
const serifQuotes = [
  "Duyguların seni zayıf yapıyor.",
  "Sonraki üç hamleni biliyorum.",
  "Çırpınışların sadece sonu geciktiriyor.",
  "Bana karşı kazanabileceğini mi sandın?",
  "Oyun bittiğinde masadan kalkan ben olacağım.",
  "Satrançta piyonlar her zaman ilk feda edilenlerdir."
];

function SerifinSatranci() {
  // P = Sen (Beyaz Piyonlar), S = Şerif (Siyah Piyonlar)
  const initialBoard = ['S', 'S', 'S', null, null, null, 'P', 'P', 'P'];
  
  const [board, setBoard] = useState(initialBoard);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [quote, setQuote] = useState("Hamleni yap. Sadece sonucu geciktireceksin.");
  const [isThinking, setIsThinking] = useState(false);
  const [selectedPiece, setSelectedPiece] = useState(null); // Seçilen piyonun index'i
  const [validMoves, setValidMoves] = useState([]); // Seçilen piyonun gidebileceği yerler

  // Olası hamleleri hesaplayan fonksiyon
  const getMoves = (currBoard, player) => {
    const moves = [];
    for (let i = 0; i < 9; i++) {
      if (currBoard[i] === player) {
        const c = i % 3;
        if (player === 'P') {
          // İleri gitme (Boşsa)
          if (i - 3 >= 0 && currBoard[i - 3] === null) moves.push({ from: i, to: i - 3 });
          // Çapraz yeme (Sol)
          if (c > 0 && currBoard[i - 4] === 'S') moves.push({ from: i, to: i - 4 });
          // Çapraz yeme (Sağ)
          if (c < 2 && currBoard[i - 2] === 'S') moves.push({ from: i, to: i - 2 });
        } else {
          // Şerif'in hamleleri ('S')
          if (i + 3 <= 8 && currBoard[i + 3] === null) moves.push({ from: i, to: i + 3 });
          if (c > 0 && currBoard[i + 2] === 'P') moves.push({ from: i, to: i + 2 });
          if (c < 2 && currBoard[i + 4] === 'P') moves.push({ from: i, to: i + 4 });
        }
      }
    }
    return moves;
  };

  // Kazananı veya oyunun bitip bitmediğini kontrol eden fonksiyon
  const checkWinner = (currBoard, nextPlayer) => {
    // Karşı tarafa ulaşma durumu
    if (currBoard[0] === 'P' || currBoard[1] === 'P' || currBoard[2] === 'P') return 'P';
    if (currBoard[6] === 'S' || currBoard[7] === 'S' || currBoard[8] === 'S') return 'S';

    // Sıradaki oyuncunun hamlesi kalmadıysa, diğeri kazanır
    const moves = getMoves(currBoard, nextPlayer);
    if (moves.length === 0) return nextPlayer === 'P' ? 'S' : 'P';

    return null;
  };

  // MİNİMAX ALGORİTMASI: Şerif tüm ihtimalleri hesaplar
  const minimax = (currBoard, isMaximizing, depth) => {
    const currentWinner = checkWinner(currBoard, isMaximizing ? 'S' : 'P');
    if (currentWinner === 'S') return 10 - depth;
    if (currentWinner === 'P') return depth - 10;

    if (isMaximizing) {
      let bestScore = -Infinity;
      const moves = getMoves(currBoard, 'S');
      for (let m of moves) {
        const newBoard = [...currBoard];
        newBoard[m.to] = newBoard[m.from];
        newBoard[m.from] = null;
        bestScore = Math.max(bestScore, minimax(newBoard, false, depth + 1));
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      const moves = getMoves(currBoard, 'P');
      for (let m of moves) {
        const newBoard = [...currBoard];
        newBoard[m.to] = newBoard[m.from];
        newBoard[m.from] = null;
        bestScore = Math.min(bestScore, minimax(newBoard, true, depth + 1));
      }
      return bestScore;
    }
  };

  // Şerif'in Hamlesi (AI)
  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      setIsThinking(true);
      
      // Psikolojik etki: Şerif 1 saniye hesaplama yapar
      setTimeout(() => {
        const moves = getMoves(board, 'S');
        let bestScore = -Infinity;
        let bestMove = null;

        for (let m of moves) {
          const newBoard = [...board];
          newBoard[m.to] = newBoard[m.from];
          newBoard[m.from] = null;
          let score = minimax(newBoard, false, 1);
          if (score > bestScore) {
            bestScore = score;
            bestMove = m;
          }
        }

        if (bestMove) {
          const newBoard = [...board];
          newBoard[bestMove.to] = newBoard[bestMove.from];
          newBoard[bestMove.from] = null;
          
          setBoard(newBoard);
          setQuote(serifQuotes[Math.floor(Math.random() * serifQuotes.length)]);
          
          const gameWinner = checkWinner(newBoard, 'P');
          if (gameWinner) setWinner(gameWinner);
          else setIsPlayerTurn(true);
        }
        setIsThinking(false);
      }, 1000);
    }
  }, [isPlayerTurn, board, winner]);

  // Oyuncunun piyon seçmesi veya hareket ettirmesi
  const handleCellClick = (index) => {
    if (winner || !isPlayerTurn || isThinking) return;

    // Kendi piyonumuzu seçiyoruz
    if (board[index] === 'P') {
      const moves = getMoves(board, 'P').filter(m => m.from === index);
      setSelectedPiece(index);
      setValidMoves(moves.map(m => m.to));
    } 
    // Seçilen piyonu geçerli bir kareye hareket ettiriyoruz
    else if (selectedPiece !== null && validMoves.includes(index)) {
      const newBoard = [...board];
      newBoard[index] = 'P';
      newBoard[selectedPiece] = null;
      
      setBoard(newBoard);
      setSelectedPiece(null);
      setValidMoves([]);

      const gameWinner = checkWinner(newBoard, 'S');
      if (gameWinner) setWinner(gameWinner);
      else setIsPlayerTurn(false);
    } 
    // Boş veya geçersiz bir yere tıklandıysa seçimi iptal et
    else {
      setSelectedPiece(null);
      setValidMoves([]);
    }
  };

  // Oyunu Sıfırla
  const resetGame = () => {
    setBoard(initialBoard);
    setIsPlayerTurn(true);
    setWinner(null);
    setSelectedPiece(null);
    setValidMoves([]);
    setQuote("Yeniden denemek cesaret ister. Hamleni yap.");
  };

  return (
    <div className="game-container animate-fade" style={{
      textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)',
      fontFamily: 'var(--font-heading)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <div className="section-header-editorial" style={{ marginBottom: '1rem', width: '100%' }}>
        <span className="archive-badge" style={{ color: 'var(--accent-dark)' }}>// ŞERİF FURTUNA ALGORİTMASI</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>KUSURSUZ ZİHİN</h2>
        <p className="editorial-subtitle" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>
          3x3 Piyon Satrancı. Piyonlar ileri veya çapraz (yiyerek) hareket eder. Karşı köşeye ilk ulaşan veya rakibini kilitleyen kazanır. Şerif'i yenmek imkansızdır.
        </p>
      </div>

      {/* Şerif'in Replik Kutusu */}
      <div style={{
        backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-dark)', padding: '1rem 2rem',
        margin: '1rem 0 2rem 0', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        maxWidth: '500px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '600', fontSize: '1.1rem', color: 'var(--accent-dark)' }}>
          "{winner === 'S' ? 'Mat. Duygular her zaman kaybettirir.' : winner === 'P' ? 'Bir hata yaptım... İmkansız.' : isThinking ? 'Şerif hamlesini hesaplıyor...' : quote}"
        </p>
      </div>

      {/* 3x3 Satranç Tahtası */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', width: '100%', maxWidth: '350px',
        margin: '0 auto 2rem auto', border: '4px solid var(--accent-dark)', backgroundColor: 'var(--accent-dark)', padding: '4px'
      }}>
        {board.map((cell, index) => {
          // Satranç tahtası kare (siyah-beyaz) görünümü
          const row = Math.floor(index / 3);
          const col = index % 3;
          const isDarkSquare = (row + col) % 2 === 1;
          const isSelected = selectedPiece === index;
          const isValidMove = validMoves.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleCellClick(index)}
              style={{
                aspectRatio: '1/1',
                backgroundColor: isSelected ? 'rgba(84, 107, 65, 0.5)' : isValidMove ? 'rgba(153, 173, 122, 0.6)' : isDarkSquare ? 'var(--bg-card)' : 'var(--bg-main)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3.5rem', cursor: (!winner && isPlayerTurn) ? 'pointer' : 'default',
                transition: 'all 0.2s ease', position: 'relative'
              }}
            >
              {cell === 'S' && <span style={{ color: '#000', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>♟</span>}
              {cell === 'P' && <span style={{ color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>♙</span>}
              
              {/* Geçerli hamle noktası göstergesi */}
              {isValidMove && <div style={{ position: 'absolute', width: '15px', height: '15px', borderRadius: '50%', backgroundColor: 'var(--accent-dark)', opacity: 0.5 }} />}
            </div>
          );
        })}
      </div>

      {winner && (
        <div className="animate-fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: winner === 'S' ? '#b22222' : 'var(--text-main)' }}>
            {winner === 'S' ? 'ŞERİF KAZANDI.' : 'İMKANSIZI BAŞARDIN.'}
          </h3>
          <button onClick={resetGame} className="editorial-link" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)', backgroundColor: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold' }}>
            YENİDEN YÜZLEŞ
          </button>
        </div>
      )}
    </div>
  );
}

export default SerifinSatranci;