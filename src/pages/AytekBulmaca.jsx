import React, { useState, useEffect, useRef, useCallback } from 'react';

const LEVELS = [
  { min: 0, label: 'ÇAYLAK GÖZLEMCİ' },
  { min: 3, label: 'DENEYİMLİ AJAN' },
  { min: 6, label: 'KIDEMLİ DEDEKTİF' },
  { min: 10, label: 'USTA İZLEYİCİ' },
  { min: 15, label: 'EFSANEVİ GÖZ' },
];

function getLevelLabel(score) {
  let label = LEVELS[0].label;
  for (const lvl of LEVELS) {
    if (score >= lvl.min) label = lvl.label;
  }
  return label;
}

function AytekBulmaca() {
  const [gameState, setGameState] = useState('idle'); // idle | countdown | showing | shuffling | guessing | correct | gameover
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [wrongCard, setWrongCard] = useState(null);

  const [targetCard, setTargetCard] = useState(1);
  const [positions, setPositions] = useState([0, 1, 2]);
  const [shuffleSpeed, setShuffleSpeed] = useState(500);

  const shuffleIntervalRef = useRef(null);
  const timeoutsRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    if (shuffleIntervalRef.current) {
      clearInterval(shuffleIntervalRef.current);
      shuffleIntervalRef.current = null;
    }
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const setTrackedTimeout = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  // Her şeyi temizle: bileşen kaldırıldığında sızıntı kalmasın
  useEffect(() => {
    return () => clearAllTimers();
  }, [clearAllTimers]);

  const startShuffling = useCallback((currentScore) => {
    let shuffleCount = 0;
    const maxShuffles = 5 + Math.floor(currentScore / 2);
    const currentSpeed = Math.max(150, 500 - currentScore * 30);
    setShuffleSpeed(currentSpeed);

    shuffleIntervalRef.current = setInterval(() => {
      setPositions((prev) => {
        const newPos = [...prev];
        const idx1 = Math.floor(Math.random() * 3);
        let idx2 = Math.floor(Math.random() * 3);
        while (idx1 === idx2) {
          idx2 = Math.floor(Math.random() * 3);
        }
        [newPos[idx1], newPos[idx2]] = [newPos[idx2], newPos[idx1]];
        return newPos;
      });

      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(shuffleIntervalRef.current);
        shuffleIntervalRef.current = null;
        setGameState('guessing');
      }
    }, currentSpeed);
  }, []);

  const startRound = useCallback((currentScore) => {
    clearAllTimers();
    setWrongCard(null);
    setGameState('countdown');
    setCountdown(3);
  }, [clearAllTimers]);

  // Geri sayım: 3-2-1 sonra hedefi göster
  useEffect(() => {
    if (gameState !== 'countdown') return;
    if (countdown === 0) {
      const newTarget = Math.floor(Math.random() * 3);
      setTargetCard(newTarget);
      setPositions([0, 1, 2]);
      setGameState('showing');
      setTrackedTimeout(() => {
        setGameState('shuffling');
        startShuffling(score);
      }, 1200);
      return;
    }
    const id = setTrackedTimeout(() => setCountdown((c) => c - 1), 500);
    return () => clearTimeout(id);
  }, [gameState, countdown, score, startShuffling, setTrackedTimeout]);

  const handleStart = () => {
    setScore(0);
    setStreak(0);
    startRound(0);
  };

  const handleCardClick = (cardId) => {
    if (gameState !== 'guessing') return;

    if (cardId === targetCard) {
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newScore > highScore) setHighScore(newScore);
      if (newStreak > bestStreak) setBestStreak(newStreak);

      setGameState('correct');
      setTrackedTimeout(() => startRound(newScore), 900);
    } else {
      setWrongCard(cardId);
      setStreak(0);
      setGameState('gameover');
    }
  };

  const handleKeyDown = (e, cardId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(cardId);
    }
  };

  const resetGame = () => {
    setScore(0);
    setStreak(0);
    setWrongCard(null);
    setGameState('idle');
  };

  const levelLabel = getLevelLabel(score);

  return (
    <div
      className="game-container animate-fade"
      style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        backgroundColor: 'var(--bg-main)',
        color: 'var(--text-main)',
        fontFamily: 'var(--font-heading)',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div className="section-header-editorial" style={{ marginBottom: '1.5rem', width: '100%' }}>
        <span className="archive-badge">// İNTERAKTİF ARENA</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>
          GÖRSEL ODAK TESTİ
        </h2>
        <p
          className="editorial-subtitle"
          style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}
        >
          Hedef portreyi gözlerinle takip et. En yüksek konsantrasyon rekorunu kırana kadar devam!
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '0.75rem',
          fontFamily: 'var(--font-body)',
          fontWeight: 'bold',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '1px' }}>
          SKOR: <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>{score}</span>
        </div>
        <div style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '1px', color: 'var(--accent-dark)' }}>
          EN İYİ: <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>{highScore}</span>
        </div>
        <div style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '1px' }}>
          SERİ: <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)' }}>{streak}</span>
          {bestStreak > 0 && (
            <span style={{ opacity: 0.6, fontSize: '0.75em', marginLeft: '0.4rem' }}>(rekor: {bestStreak})</span>
          )}
        </div>
      </div>

      {/* Rütbe göstergesi: skora göre değişen unvan */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.7rem, 2.2vw, 0.85rem)',
          letterSpacing: '2px',
          opacity: 0.65,
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
        }}
        aria-live="polite"
      >
        RÜTBE: {levelLabel}
      </div>

      <div
        style={{
          position: 'relative',
          height: 'var(--card-h)',
          width: '100%',
          maxWidth: '500px',
          margin: '0 auto 3rem auto',
        }}
      >
        {[0, 1, 2].map((cardId) => {
          const currentPosIndex = positions.indexOf(cardId);
          const isTargetReveal = (gameState === 'showing' || gameState === 'gameover') && cardId === targetCard;
          const isWrongPick = gameState === 'gameover' && cardId === wrongCard;
          const isCorrectFlash = gameState === 'correct' && cardId === targetCard;

          return (
            <div
              key={cardId}
              role="button"
              tabIndex={gameState === 'guessing' ? 0 : -1}
              aria-label={`Kart ${cardId + 1}`}
              onClick={() => handleCardClick(cardId)}
              onKeyDown={(e) => handleKeyDown(e, cardId)}
              style={{
                position: 'absolute',
                width: 'var(--card-w)',
                height: 'var(--card-h)',
                left: `calc(50% - var(--card-half-w) + (var(--card-gap) * ${currentPosIndex - 1}))`,
                transition: `left ${shuffleSpeed / 1000}s ease-in-out, transform 0.2s ease, box-shadow 0.2s ease`,
                backgroundColor: 'var(--bg-card)',
                border: isWrongPick ? '2px solid #b3392c' : '2px solid var(--accent-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: gameState === 'guessing' ? 'pointer' : 'default',
                overflow: 'hidden',
                boxShadow: isCorrectFlash
                  ? '0 0 0 3px var(--accent-dark), 4px 4px 0px rgba(0,0,0,0.15)'
                  : '4px 4px 0px rgba(0,0,0,0.15)',
                borderRadius: '4px',
                transform: isWrongPick ? 'scale(0.97) rotate(-1deg)' : 'scale(1)',
                outline: 'none',
              }}
            >
              {isTargetReveal ? (
                <img
                  src="/gallery/h1 (114).jpeg"
                  alt="Hedef"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                      'repeating-linear-gradient(45deg, rgba(84,107,65,0.05) 0px, rgba(84,107,65,0.05) 2px, transparent 2px, transparent 8px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      border: '2px solid var(--accent-dark)',
                      color: 'var(--accent-dark)',
                      padding: '2px 8px',
                      transform: 'rotate(-15deg)',
                      fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                      fontWeight: '900',
                      letterSpacing: '2px',
                      opacity: 0.8,
                    }}
                  >
                    {isWrongPick ? 'YANLIŞ' : 'GİZLİ'}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        style={{
          minHeight: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
        aria-live="assertive"
      >
        {gameState === 'idle' && (
          <button
            onClick={handleStart}
            className="editorial-link"
            style={{
              padding: '0.8rem 2rem',
              border: '1px solid var(--accent-dark)',
              backgroundColor: 'var(--text-main)',
              color: 'var(--bg-main)',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
            }}
          >
            TESTİ BAŞLAT
          </button>
        )}

        {gameState === 'countdown' && (
          <p style={{ fontSize: 'clamp(1.8rem, 6vw, 2.4rem)', fontWeight: '900', letterSpacing: '3px' }}>
            {countdown > 0 ? countdown : 'BAŞLA!'}
          </p>
        )}

        {gameState === 'showing' && (
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '2px' }}>HEDEFİ EZBERLE...</p>
        )}

        {gameState === 'shuffling' && (
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', letterSpacing: '2px', animation: 'pulse 1s infinite' }}>
            GÖZÜNÜ AYIRMA...
          </p>
        )}

        {gameState === 'guessing' && (
          <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', fontWeight: 'bold' }}>HEDEF PORTRE HANGİSİNDE?</p>
        )}

        {gameState === 'correct' && (
          <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', fontWeight: 'bold', color: 'var(--accent-dark)' }}>
            DOĞRU! SIRADAKİ TUR HAZIRLANIYOR...
          </p>
        )}

        {gameState === 'gameover' && (
          <div className="animate-fade">
            <p style={{ fontSize: 'clamp(1.1rem, 4.5vw, 1.3rem)', fontWeight: 'bold', marginBottom: '1.5rem', opacity: 0.8 }}>
              YANLIŞ SEÇİM. ODAK KAYBEDİLDİ.
            </p>
            <button
              onClick={resetGame}
              className="editorial-link"
              style={{
                padding: '0.8rem 2rem',
                border: '1px solid var(--accent-dark)',
                backgroundColor: 'transparent',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
              }}
            >
              YENİDEN DENE
            </button>
          </div>
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .game-container {
          --card-w: 120px;
          --card-h: 160px;
          --card-gap: 140px;
          --card-half-w: 60px;
        }

        @media (max-width: 500px) {
          .game-container {
            --card-w: 95px;
            --card-h: 130px;
            --card-gap: 110px;
            --card-half-w: 47.5px;
          }
        }

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

        .game-container [role="button"]:focus-visible {
          box-shadow: 0 0 0 3px var(--accent-dark), 4px 4px 0px rgba(0,0,0,0.15) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .game-container * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `,
        }}
      />
    </div>
  );
}

export default AytekBulmaca;
