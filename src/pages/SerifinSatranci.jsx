import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

// Şerif'in psikolojik baskı replikleri
const serifQuotes = [
  "Duyguların seni zayıf yapıyor.",
  "Sonraki üç hamleni biliyorum.",
  "Çırpınışların sadece sonu geciktiriyor.",
  "Bana karşı kazanabileceğini mi sandın?",
  "Oyun bittiğinde masadan kalkan ben olacağım.",
  "Vezirini korumak için neleri feda edeceksin?",
  "Şah çekildiğinde gerçek karakter ortaya çıkar.",
  "Hata yapmanı beklemiyorum, yapmaya zorluyorum."
];

function SerifinSatranci() {
  const [game, setGame] = useState(new Chess());
  const [quote, setQuote] = useState("Hamleni yap. Sadece sonucu geciktireceksin.");
  const [isThinking, setIsThinking] = useState(false);
  const [gameStatus, setGameStatus] = useState("playing"); // playing, checkmate, draw

  // Şerif'in (Siyah) Hamlesi (Basit Yapay Zeka)
  useEffect(() => {
    // Oyun bitmişse veya sıra beyazdaysa çık
    if (game.isGameOver() || game.turn() === 'w') {
      checkGameEnd();
      return;
    }

    setIsThinking(true);

    // Psikolojik etki: Şerif 1 saniye düşünür
    const timer = setTimeout(() => {
      const possibleMoves = game.moves();
      
      // Eğer hamle yoksa oyun biter
      if (possibleMoves.length === 0) {
        checkGameEnd();
        setIsThinking(false);
        return;
      }

      // Şerif rastgele (ama geçerli) bir hamle seçer. 
      // Not: Bunu Stockfish API'sine bağlayarak "yenilmez" yapabiliriz ama tarayıcıda bu haliyle hızlıdır.
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIndex];

      const gameCopy = new Chess(game.fen());
      gameCopy.move(move);
      
      setGame(gameCopy);
      setQuote(serifQuotes[Math.floor(Math.random() * serifQuotes.length)]);
      setIsThinking(false);
      checkGameEnd();

    }, 1000);

    return () => clearTimeout(timer);
  }, [game]);

  // Oyunun bitip bitmediğini kontrol et
  const checkGameEnd = () => {
    if (game.isCheckmate()) {
      setGameStatus("checkmate");
      setQuote(game.turn() === 'w' ? "Mat. Duygular her zaman kaybettirir." : "Bir hata yaptım... İmkansız.");
    } else if (game.isDraw() || game.isStalemate() || game.isThreefoldRepetition()) {
      setGameStatus("draw");
      setQuote("Berabere. Beklediğimden daha inatçısın.");
    } else if (game.inCheck()) {
      setQuote("Şah. Çember daralıyor.");
    }
  };

  // Oyuncunun (Beyaz) Hamlesi
  const onDrop = (sourceSquare, targetSquare) => {
    if (gameStatus !== "playing" || game.turn() === 'b') return false;

    try {
      const gameCopy = new Chess(game.fen());
      // Terfi (promotion) durumu varsa otomatik vezir ('q') yapar
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', 
      });

      // Geçersiz hamleyse reddet
      if (move === null) return false;

      // Geçerliyse tahtayı güncelle
      setGame(gameCopy);
      checkGameEnd();
      return true;
    } catch (e) {
      return false; // Hatalı hamle girişini engelle
    }
  };

  // Oyunu Sıfırla
  const resetGame = () => {
    setGame(new Chess());
    setGameStatus("playing");
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
          Tam teşekküllü satranç düellosu. Şerif Furtuna (Siyah) sana karşı.
        </p>
      </div>

      {/* Şerif'in Replik Kutusu */}
      <div style={{
        backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-dark)', padding: '1rem 2rem',
        margin: '1rem 0 2rem 0', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        maxWidth: '500px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '600', fontSize: '1.1rem', color: 'var(--accent-dark)' }}>
          "{isThinking ? 'Şerif hamlesini hesaplıyor...' : quote}"
        </p>
      </div>

      {/* KLASİK SATRANÇ TAHTASI (react-chessboard) */}
      <div style={{
        width: '100%', maxWidth: '400px', margin: '0 auto 2rem auto', 
        border: '4px solid var(--accent-dark)', padding: '4px', backgroundColor: 'var(--bg-card)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          boardOrientation="white"
          customDarkSquareStyle={{ backgroundColor: 'var(--accent-dark)' }}
          customLightSquareStyle={{ backgroundColor: 'var(--bg-card)' }}
        />
      </div>

      {gameStatus !== "playing" && (
        <div className="animate-fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: gameStatus === "checkmate" && game.turn() === 'w' ? '#b22222' : 'var(--text-main)' }}>
            {gameStatus === "checkmate" ? (game.turn() === 'w' ? 'ŞERİF KAZANDI.' : 'İMKANSIZI BAŞARDIN.') : 'BERABERLİK.'}
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