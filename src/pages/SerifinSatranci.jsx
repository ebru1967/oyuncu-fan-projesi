import React, { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

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
  const [gameStatus, setGameStatus] = useState("playing");

  // Güncel oyun durumunu kontrol eden fonksiyon
  const checkGameEnd = (currentGame) => {
    if (currentGame.isCheckmate()) {
      setGameStatus("checkmate");
      setQuote(currentGame.turn() === 'w' ? "Mat. Duygular her zaman kaybettirir." : "Bir hata yaptım... İmkansız.");
    } else if (currentGame.isDraw() || currentGame.isStalemate() || currentGame.isThreefoldRepetition()) {
      setGameStatus("draw");
      setQuote("Berabere. Beklediğimden daha inatçısın.");
    } else if (currentGame.inCheck()) {
      setQuote("Şah. Çember daralıyor.");
    }
  };

  useEffect(() => {
    if (gameStatus !== "playing" || game.turn() === 'w') return;

    setIsThinking(true);
    const timer = setTimeout(() => {
      const possibleMoves = game.moves();
      
      if (possibleMoves.length === 0) {
        setIsThinking(false);
        return;
      }

      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIndex];

      const gameCopy = new Chess(game.fen());
      try { gameCopy.move(move); } catch(e) {}
      
      setGame(gameCopy);
      setQuote(serifQuotes[Math.floor(Math.random() * serifQuotes.length)]);
      setIsThinking(false);
      checkGameEnd(gameCopy);

    }, 800);

    return () => clearTimeout(timer);
  }, [game, gameStatus]);

  // SÜRÜKLE BIRAK MANTIĞI TAMAMEN GÜVENLİ HALE GETİRİLDİ
  const onDrop = (sourceSquare, targetSquare) => {
    if (gameStatus !== "playing" || game.turn() === 'b') return false;

    const gameCopy = new Chess(game.fen());
    let move = null;
    
    try {
      move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', // Piyon sona gelirse otomatik Vezir
      });
    } catch (error) {
      // Geçersiz hamle yapıldığında kütüphane hata fırlatırsa yakala
      return false;
    }

    if (move === null) return false;

    setGame(gameCopy);
    checkGameEnd(gameCopy);
    return true;
  };

  const resetGame = () => {
    setGame(new Chess());
    setGameStatus("playing");
    setQuote("Yeniden denemek cesaret ister. Hamleni yap.");
  };

  return (
    <div className="game-container animate-fade" style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="section-header-editorial" style={{ marginBottom: '1rem', width: '100%' }}>
        <span className="archive-badge" style={{ color: 'var(--accent-dark)' }}>// ŞERİF FURTUNA ALGORİTMASI</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>KUSURSUZ ZİHİN</h2>
        <p className="editorial-subtitle" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>
          Tam teşekküllü satranç düellosu. Şerif Furtuna (Siyah) sana karşı.
        </p>
      </div>

      <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '4px solid var(--accent-dark)', padding: '1rem 2rem', margin: '1rem 0 2rem 0', minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '500px', width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <p style={{ margin: 0, fontStyle: 'italic', fontWeight: '600', fontSize: '1.1rem', color: 'var(--accent-dark)' }}>
          "{isThinking ? 'Şerif hamlesini hesaplıyor...' : quote}"
        </p>
      </div>

      <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto 2rem auto', border: '4px solid var(--accent-dark)', padding: '4px', backgroundColor: 'var(--bg-card)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <Chessboard 
          position={game.fen()} 
          onPieceDrop={onDrop}
          boardOrientation="white"
          arePiecesDraggable={true}
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