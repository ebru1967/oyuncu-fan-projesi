import React, { useState, useEffect } from 'react';

function AytekBulmaca() {
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  const [targetCard, setTargetCard] = useState(1); 
  const [positions, setPositions] = useState([0, 1, 2]); 
  const [shuffleSpeed, setShuffleSpeed] = useState(500);

  const startRound = () => {
    setGameState('showing');
    const newTarget = Math.floor(Math.random() * 3);
    setTargetCard(newTarget);
    setPositions([0, 1, 2]); 

    setTimeout(() => {
      setGameState('shuffling');
      startShuffling();
    }, 1500);
  };

  const startShuffling = () => {
    let shuffleCount = 0;
    const maxShuffles = 5 + Math.floor(score / 2); 
    const currentSpeed = Math.max(150, 500 - (score * 30)); 
    setShuffleSpeed(currentSpeed);

    const interval = setInterval(() => {
      setPositions((prev) => {
        const newPos = [...prev];
        const idx1 = Math.floor(Math.random() * 3);
        let idx2 = Math.floor(Math.random() * 3);
        while (idx1 === idx2) {
          idx2 = Math.floor(Math.random() * 3);
        }
        const temp = newPos[idx1];
        newPos[idx1] = newPos[idx2];
        newPos[idx2] = temp;
        return newPos;
      });

      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(interval);
        setGameState('guessing');
      }
    }, currentSpeed);
  };

  const handleCardClick = (cardId) => {
    if (gameState !== 'guessing') return;

    if (cardId === targetCard) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
      
      setGameState('showing');
      setTimeout(() => {
        startRound();
      }, 1000);
    } else {
      setGameState('gameover');
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameState('idle');
  };

  return (
    <div className="game-container animate-fade" style={{ 
      textAlign: 'center', 
      padding: '2rem 1rem', 
      backgroundColor: 'var(--bg-main)', 
      color: 'var(--text-main)', 
      fontFamily: 'var(--font-heading)',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="section-header-editorial" style={{ marginBottom: '1.5rem', width: '100%' }}>
        <span className="archive-badge">// İNTERAKTİF ARENA</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>GÖRSEL ODAK TESTİ</h2>
        <p className="editorial-subtitle" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>
          Hedef portreyi gözlerinle takip et. En yüksek konsantrasyon rekorunu kırana kadar devam!
        </p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2.5rem', fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>
        <div style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '1px' }}>SKOR: <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>{score}</span></div>
        <div style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '1px', color: 'var(--accent-dark)' }}>EN İYİ: <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>{highScore}</span></div>
      </div>

      {/* MOBİL UYUMLU KART ALANI */}
      <div style={{ position: 'relative', height: 'var(--card-h)', width: '100%', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
        {[0, 1, 2].map((cardId) => {
          const currentPosIndex = positions.indexOf(cardId);
          
          return (
            <div
              key={cardId}
              onClick={() => handleCardClick(cardId)}
              style={{
                position: 'absolute',
                width: 'var(--card-w)',
                height: 'var(--card-h)',
                left: `calc(50% - var(--card-half-w) + (var(--card-gap) * ${currentPosIndex - 1}))`, 
                transition: `left ${shuffleSpeed / 1000}s ease-in-out, transform 0.2s ease`,
                backgroundColor: 'var(--bg-card)',
                border: '2px solid var(--accent-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: gameState === 'guessing' ? 'pointer' : 'default',
                overflow: 'hidden',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.15)', // Retro gölge eklendi
                borderRadius: '4px'
              }}
            >
              {(gameState === 'showing' || gameState === 'gameover') && cardId === targetCard ? (
                <img 
                  src="/gallery/h1 (114).jpeg"
                  alt="Hedef" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                /* Gizli Dosya (Dossier) Arka Yüzü */
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(84,107,65,0.05) 0px, rgba(84,107,65,0.05) 2px, transparent 2px, transparent 8px)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center'
                }}>
                  <span style={{ 
                    border: '2px solid var(--accent-dark)', 
                    color: 'var(--accent-dark)', 
                    padding: '2px 8px', 
                    transform: 'rotate(-15deg)', 
                    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', 
                    fontWeight: '900', 
                    letterSpacing: '2px',
                    opacity: 0.8
                  }}>
                    GİZLİ
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ minHeight: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        {gameState === 'idle' && (
          <button onClick={startRound} className="editorial-link" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)', backgroundColor: 'var(--text-main)', color: 'var(--bg-main)', cursor: 'pointer', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
            TESTİ BAŞLAT
          </button>
        )}

        {gameState === 'shuffling' && <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '2px', animation: 'pulse 1s infinite' }}>GÖZÜNÜ AYIRMA...</p>}
        
        {gameState === 'guessing' && <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', fontWeight: 'bold' }}>HEDEF PORTRE HANGİSİNDE?</p>}

        {gameState === 'gameover' && (
          <div className="animate-fade">
            <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', fontWeight: 'bold', marginBottom: '1.5rem', opacity: 0.8 }}>YANLIŞ SEÇİM. ODAK KAYBEDİLDİ.</p>
            <button onClick={resetGame} className="editorial-link" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)', backgroundColor: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
              YENİDEN DENE
            </button>
          </div>
        )}
      </div>
      
      {/* İÇE GÖMÜLÜ MOBİL CSS (Media Queries) */}
      <style dangerouslySetInnerHTML={{__html: `
        .game-container {
          --card-w: 120px;
          --card-h: 160px;
          --card-gap: 140px;
          --card-half-w: 60px;
        }

        /* Tabletler ve Büyük Telefonlar İçin */
        @media (max-width: 500px) {
          .game-container {
            --card-w: 95px;
            --card-h: 130px;
            --card-gap: 110px;
            --card-half-w: 47.5px;
          }
        }

        /* Küçük Ekranlı Telefonlar İçin */
        @media (max-width: 360px) {
          .game-container {
            --card-w: 80px;
            --card-h: 110px;
            --card-gap: 95px;
            --card-half-w: 40px;
          }
        }

        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}} />
    </div>
  );
}

export default AytekBulmaca;