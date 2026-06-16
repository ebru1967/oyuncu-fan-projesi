import React, { useState, useEffect, useRef, useCallback } from 'react';

function MasaTenisi() {
  const [gameState, setGameState] = useState('idle');
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const gameAreaRef = useRef(null);
  const requestRef = useRef(null);

  // --- EKRAN YENİLEME HIZI DENGELEYİCİSİ ---
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialSpeed = isMobile ? 1.4 : 0.7; 
  const maxSpeed = isMobile ? 3.2 : 2.0;     
  const speedInc = isMobile ? 0.2 : 0.12;    
  const botStep = isMobile ? 0.9 : 0.5;      

  const state = useRef({
    ball: { x: 50, y: 50, dx: 0.8, dy: 0.5, speed: initialSpeed },
    playerY: 50,
    botY: 50,
    paddleHeight: isMobile ? 15 : 20,
    paddleWidth: 2
  });

  const ballRef = useRef(null);
  const playerRef = useRef(null);
  const botRef = useRef(null);
  const WINNING_SCORE = 5;

  const resetBall = (scorer) => {
    state.current.ball = {
      x: 50, y: 50,
      dx: scorer === 'player' ? 0.8 : -0.8,
      dy: (Math.random() > 0.5 ? 1 : -1) * 0.5,
      speed: initialSpeed 
    };
  };

  const updateGame = useCallback(() => {
    if (gameState !== 'playing') return;
    const { ball, paddleHeight, paddleWidth } = state.current;

    ball.x += ball.dx * ball.speed;
    ball.y += ball.dy * ball.speed;

    if (ball.y <= 0 || ball.y >= 100) {
      ball.dy *= -1;
      ball.y = ball.y <= 0 ? 0 : 100;
    }

    const botCenter = state.current.botY;
    const target = ball.y;
    
    if (botCenter < target - 2) state.current.botY += botStep;
    else if (botCenter > target + 2) state.current.botY -= botStep;

    if (state.current.botY < paddleHeight / 2) state.current.botY = paddleHeight / 2;
    if (state.current.botY > 100 - paddleHeight / 2) state.current.botY = 100 - paddleHeight / 2;

    if (ball.x <= 5 + paddleWidth && ball.x >= 4) {
      if (ball.y >= state.current.playerY - paddleHeight / 2 && ball.y <= state.current.playerY + paddleHeight / 2) {
        ball.dx *= -1;
        ball.x = 5 + paddleWidth;
        ball.speed = Math.min(ball.speed + speedInc, maxSpeed); 
        let hitPoint = (ball.y - state.current.playerY) / (paddleHeight / 2);
        ball.dy = hitPoint * 0.8;
      }
    }

    if (ball.x >= 95 - paddleWidth && ball.x <= 96) {
      if (ball.y >= state.current.botY - paddleHeight / 2 && ball.y <= state.current.botY + paddleHeight / 2) {
        ball.dx *= -1;
        ball.x = 95 - paddleWidth;
        ball.speed = Math.min(ball.speed + speedInc, maxSpeed); 
        let hitPoint = (ball.y - state.current.botY) / (paddleHeight / 2);
        ball.dy = hitPoint * 0.8;
      }
    }

    if (ball.x < 0) {
      setBotScore(prev => {
        if (prev + 1 >= WINNING_SCORE) endGame('Aytek Bot');
        return prev + 1;
      });
      resetBall('bot');
    } else if (ball.x > 100) {
      setPlayerScore(prev => {
        if (prev + 1 >= WINNING_SCORE) endGame('Sen');
        return prev + 1;
      });
      resetBall('player');
    }

    if (ballRef.current) {
      ballRef.current.style.left = `${ball.x}%`;
      ballRef.current.style.top = `${ball.y}%`;
    }
    if (playerRef.current) playerRef.current.style.top = `${state.current.playerY}%`;
    if (botRef.current) botRef.current.style.top = `${state.current.botY}%`;

    requestRef.current = requestAnimationFrame(updateGame);
  }, [gameState]);

  useEffect(() => {
    if (gameState === 'playing') requestRef.current = requestAnimationFrame(updateGame);
    return () => cancelAnimationFrame(requestRef.current);
  }, [gameState, updateGame]);

  const endGame = (winnerName) => {
    setGameState('gameover');
    setWinner(winnerName);
  };

  const startGame = () => {
    setPlayerScore(0);
    setBotScore(0);
    setWinner(null);
    resetBall('player');
    setGameState('playing');
  };

  const handleMove = (clientY) => {
    if (!gameAreaRef.current || gameState !== 'playing') return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    let y = ((clientY - rect.top) / rect.height) * 100;
    const halfPaddle = state.current.paddleHeight / 2;
    state.current.playerY = Math.max(halfPaddle, Math.min(100 - halfPaddle, y));
  };

  return (
    <div className="game-container animate-fade" style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', fontFamily: 'var(--font-heading)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* 🚀 DİNAMİK TEMA MOTORU */}
      <style>{`
        /* Oyun alanını sitenin genelinden izole et */
        .game-container {
          user-select: none;
        }

        .pp-board {
          background-color: #1b5e20 !important;
          border-color: #fff !important;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15) !important;
        }

        /* RAKETLER FARE İMLECİ İLE ÇAKIŞMASIN */
        .pp-player, .pp-bot {
          pointer-events: none; 
        }

        .pp-center-line { border-left-color: rgba(255,255,255,0.7) !important; }
        .pp-player { background-color: #d32f2f !important; box-shadow: 2px 2px 6px rgba(0,0,0,0.4) !important; }
        .pp-bot { background-color: #111 !important; box-shadow: -2px 2px 6px rgba(0,0,0,0.4) !important; }
        .pp-ball { background-color: #ffb300 !important; box-shadow: 0 2px 5px rgba(0,0,0,0.4) !important; }

        /* KARANLIK MOD - Her türlü durumu kapsayan seçiciler */
        .dark .pp-board, [data-theme="dark"] .pp-board, [data-mode="dark"] .pp-board {
          background-color: #0a0a0a !important;
          border-color: var(--accent-dark) !important;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3), 0 0 15px var(--accent-dark) !important;
        }
        .dark .pp-player, [data-theme="dark"] .pp-player, [data-mode="dark"] .pp-player { background-color: #fff !important; box-shadow: 0 0 12px rgba(255,255,255,0.6) !important; }
        .dark .pp-bot, [data-theme="dark"] .pp-bot, [data-mode="dark"] .pp-bot { background-color: var(--accent-dark) !important; box-shadow: 0 0 12px var(--accent-dark) !important; }
        .dark .pp-ball, [data-theme="dark"] .pp-ball, [data-mode="dark"] .pp-ball { background-color: #fff !important; box-shadow: 0 0 15px rgba(255,255,255,0.9) !important; }
      `}</style>

      {/* ÜST BAŞLIK */}
      <div className="section-header-editorial" style={{ marginBottom: '2rem', width: '100%' }}>
        <span className="archive-badge" style={{ color: 'var(--accent-dark)', letterSpacing: '2px' }}>// REFLEKS VE ZİHİN</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.8rem, 5vw, 3rem)', textShadow: '0px 2px 10px rgba(0,0,0,0.1)' }}>MASA TENİSİ</h2>
      </div>

      {/* SKOR TABELASI */}
      <div style={{ 
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(1.5rem, 4vw, 4rem)', 
        margin: '0 0 2rem 0', padding: '1rem 2.5rem', backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--accent-dark)', borderRadius: '12px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.08), inset 0 0 10px rgba(0,0,0,0.02)',
        fontFamily: 'monospace', position: 'relative'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-dark)', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '0.5rem' }}>SEN</span>
          <span style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1' }}>{playerScore}</span>
        </div>
        <div style={{ fontSize: '1.2rem', color: 'var(--accent-dark)', opacity: 0.5, fontStyle: 'italic', marginTop: '1.5rem' }}>VS</div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-dark)', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '0.5rem' }}>AYTEK BOT</span>
          <span style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1' }}>{botScore}</span>
        </div>
      </div>

      {/* OYUN ALANI */}
      <div 
        ref={gameAreaRef}
        className="pp-board" // CSS motoruna bağlandı
        onMouseMove={(e) => handleMove(e.clientY)}
        onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientY); }}
        style={{ 
          position: 'relative', width: '100%', maxWidth: '700px', height: 'clamp(300px, 50vh, 450px)', 
          borderWidth: '3px', borderStyle: 'solid', borderRadius: '12px',
          overflow: 'hidden', cursor: 'none', touchAction: 'none', transition: 'all 0.3s ease'
        }}
      >
        {/* ORTA ÇİZGİ */}
        <div className="pp-center-line" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', marginLeft: '-2px', borderLeftWidth: '4px', borderLeftStyle: 'dashed', transition: 'all 0.3s ease' }} />
        
        {/* OYUNCU RAKETİ (SOL) */}
        <div ref={playerRef} className="pp-player" style={{ 
          position: 'absolute', left: '5%', top: '50%', width: '12px', height: `${state.current.paddleHeight}%`, 
          transform: 'translate(-50%, -50%)', borderRadius: '6px', transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }} />
        
        {/* BOT RAKETİ (SAĞ) */}
        <div ref={botRef} className="pp-bot" style={{ 
          position: 'absolute', left: '95%', top: '50%', width: '12px', height: `${state.current.paddleHeight}%`, 
          transform: 'translate(-50%, -50%)', borderRadius: '6px', transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }} />
        
        {/* TOP */}
        <div ref={ballRef} className="pp-ball" style={{ 
          position: 'absolute', left: '50%', top: '50%', width: '18px', height: '18px', 
          transform: 'translate(-50%, -50%)', borderRadius: '50%', display: gameState === 'idle' ? 'none' : 'block',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease'
        }} />

        {/* BAŞLANGIÇ EKRANI */}
        {gameState === 'idle' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: 10 }}>
            <button onClick={startGame} className="editorial-link" style={{ 
              padding: '1.2rem 3rem', backgroundColor: '#fff', color: '#111', 
              border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', 
              fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>TURNUVAYI BAŞLAT</button>
          </div>
        )}

        {/* BİTİŞ EKRANI */}
        {gameState === 'gameover' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)', zIndex: 10, color: '#fff' }}>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem', fontWeight: '900', textShadow: '0 2px 10px rgba(0,0,0,0.5)', color: winner === 'Sen' ? '#4caf50' : '#f44336' }}>
              {winner === 'Sen' ? 'KAZANDIN!' : 'AYTEK BOT KAZANDI!'}
            </h3>
            <button onClick={startGame} className="editorial-link" style={{ 
              padding: '1rem 2.5rem', backgroundColor: '#fff', color: '#111', 
              border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', 
              fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px'
            }}>RÖVANŞ İSTE</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MasaTenisi;