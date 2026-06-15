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
    <div className="game-container" style={{ 
      textAlign: 'center', 
      padding: '3rem 1rem', 
      backgroundColor: 'var(--bg-main)', 
      color: 'var(--text-main)', 
      fontFamily: 'var(--font-heading)',
      minHeight: '70vh'
    }}>
      <div className="section-header-editorial" style={{ marginBottom: '2rem' }}>
        <span className="archive-badge">// İNTERAKTİF ARENA</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem' }}>GÖRSEL ODAK TESTİ</h2>
        <p className="editorial-subtitle" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Hedef portreyi gözlerinle takip et. En yüksek konsantrasyon rekorunu kırana kadar devam!
        </p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem', fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>
        <div style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>SKOR: <span style={{ fontSize: '1.4rem' }}>{score}</span></div>
        <div style={{ fontSize: '1.1rem', letterSpacing: '1px', color: 'var(--accent-dark)' }}>EN İYİ: <span style={{ fontSize: '1.4rem' }}>{highScore}</span></div>
      </div>

      <div style={{ position: 'relative', height: '220px', width: '100%', maxWidth: '420px', margin: '0 auto 3rem auto' }}>
        {[0, 1, 2].map((cardId) => {
          const currentPosIndex = positions.indexOf(cardId);
          
          return (
            <div
              key={cardId}
              onClick={() => handleCardClick(cardId)}
              style={{
                position: 'absolute',
                width: '120px',
                height: '160px',
                // Responsive olması için yüzde hesabı kullandım
                left: `calc(50% - 60px + ${(currentPosIndex - 1) * 140}px)`, 
                transition: `left ${shuffleSpeed / 1000}s ease-in-out`,
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--accent-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: gameState === 'guessing' ? 'pointer' : 'default',
                overflow: 'hidden',
                boxShadow: gameState === 'guessing' ? '0 4px 15px rgba(0,0,0,0.1)' : 'none'
              }}
            >
              {(gameState === 'showing' || gameState === 'gameover') && cardId === targetCard ? (
                <img 
                  src="/portre_tw.jpeg" 
                  alt="Hedef" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                <div style={{ fontSize: '3rem', opacity: 0.3, color: 'var(--accent-dark)' }}>?</div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ minHeight: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {gameState === 'idle' && (
          <button onClick={startRound} className="editorial-link" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)', backgroundColor: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold' }}>
            TESTİ BAŞLAT
          </button>
        )}

        {gameState === 'shuffling' && <p style={{ fontSize: '1.1rem', letterSpacing: '2px', animation: 'pulse 1s infinite' }}>KARTLAR KARIŞTIRILIYOR...</p>}
        
        {gameState === 'guessing' && <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>HEDEF PORTRE HANGİSİNDE?</p>}

        {gameState === 'gameover' && (
          <div className="animate-fade">
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', opacity: 0.8 }}>YANLIŞ SEÇİM. ODAK KAYBEDİLDİ.</p>
            <button onClick={resetGame} className="editorial-link" style={{ padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)', backgroundColor: 'var(--text-main)', color: 'var(--bg-main)', cursor: 'pointer', fontWeight: 'bold' }}>
              YENİDEN DENE
            </button>
          </div>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
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