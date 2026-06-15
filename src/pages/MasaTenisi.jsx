import React, { useState, useEffect, useRef, useCallback } from 'react';

function MasaTenisi() {
  const [gameState, setGameState] = useState('idle');
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const gameAreaRef = useRef(null);
  const requestRef = useRef(null);

  // --- EKRAN YENİLEME HIZI DENGELEYİCİSİ ---
  // Bilgisayarlar (144Hz) çok hızlı, telefonlar (60Hz) daha yavaş çalıştığı için
  // iki cihaza özel hız profilleri oluşturuyoruz.
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const initialSpeed = isMobile ? 1.4 : 0.7; // Mobilde 2 kat hızlı başlat
  const maxSpeed = isMobile ? 3.2 : 2.0;     // Mobilde üst hız limitini artır
  const speedInc = isMobile ? 0.2 : 0.12;    // Çarpışma başı hızlanma ivmesi
  const botStep = isMobile ? 0.9 : 0.5;      // Botun hareket hızı

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
      speed: initialSpeed // Sayı olunca hız o cihaza uygun şekilde sıfırlanır
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

    // BOT YAPAY ZEKASI (Cihaza özel hız)
    const botCenter = state.current.botY;
    const target = ball.y;
    
    if (botCenter < target - 2) state.current.botY += botStep;
    else if (botCenter > target + 2) state.current.botY -= botStep;

    if (state.current.botY < paddleHeight / 2) state.current.botY = paddleHeight / 2;
    if (state.current.botY > 100 - paddleHeight / 2) state.current.botY = 100 - paddleHeight / 2;

    // OYUNCU (SOL) ÇARPIŞMASI
    if (ball.x <= 5 + paddleWidth && ball.x >= 4) {
      if (ball.y >= state.current.playerY - paddleHeight / 2 && ball.y <= state.current.playerY + paddleHeight / 2) {
        ball.dx *= -1;
        ball.x = 5 + paddleWidth;
        ball.speed = Math.min(ball.speed + speedInc, maxSpeed); // Cihaza özel limit
        let hitPoint = (ball.y - state.current.playerY) / (paddleHeight / 2);
        ball.dy = hitPoint * 0.8;
      }
    }

    // BOT (SAĞ) ÇARPIŞMASI
    if (ball.x >= 95 - paddleWidth && ball.x <= 96) {
      if (ball.y >= state.current.botY - paddleHeight / 2 && ball.y <= state.current.botY + paddleHeight / 2) {
        ball.dx *= -1;
        ball.x = 95 - paddleWidth;
        ball.speed = Math.min(ball.speed + speedInc, maxSpeed); // Cihaza özel limit
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

    // DOM GÜNCELLEMESİ
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
      <div className="section-header-editorial" style={{ marginBottom: '1rem', width: '100%' }}>
        <span className="archive-badge" style={{ color: 'var(--accent-dark)' }}>// NOSTALJİK REFLEKS TESTİ</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>RETRO MASA TENİSİ</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', margin: '1rem 0', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', fontFamily: 'monospace', color: 'var(--accent-dark)' }}>
        <div>SEN<br/><span style={{ fontSize: '3rem', color: 'var(--text-main)' }}>{playerScore}</span></div>
        <div style={{ alignSelf: 'center', opacity: 0.3 }}>VS</div>
        <div>AYTEK BOT<br/><span style={{ fontSize: '3rem', color: 'var(--text-main)' }}>{botScore}</span></div>
      </div>

      <div 
        ref={gameAreaRef}
        onMouseMove={(e) => handleMove(e.clientY)}
        onTouchMove={(e) => { e.preventDefault(); handleMove(e.touches[0].clientY); }}
        style={{ position: 'relative', width: '100%', maxWidth: '600px', height: 'clamp(250px, 50vh, 400px)', backgroundColor: 'var(--bg-card)', border: '4px solid var(--accent-dark)', overflow: 'hidden', cursor: 'none', touchAction: 'none' }}
      >
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', marginLeft: '-2px', borderLeft: '4px dashed var(--accent-dark)', opacity: 0.3 }} />
        <div ref={playerRef} style={{ position: 'absolute', left: '5%', top: '50%', width: '12px', height: `${state.current.paddleHeight}%`, backgroundColor: 'var(--text-main)', transform: 'translate(-50%, -50%)', borderRadius: '4px' }} />
        <div ref={botRef} style={{ position: 'absolute', left: '95%', top: '50%', width: '12px', height: `${state.current.paddleHeight}%`, backgroundColor: 'var(--accent-dark)', transform: 'translate(-50%, -50%)', borderRadius: '4px' }} />
        <div ref={ballRef} style={{ position: 'absolute', left: '50%', top: '50%', width: '16px', height: '16px', backgroundColor: 'var(--text-main)', transform: 'translate(-50%, -50%)', borderRadius: '50%', display: gameState === 'idle' ? 'none' : 'block' }} />

        {gameState === 'idle' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' }}>
            <button onClick={startGame} className="editorial-link" style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', border: '2px solid var(--accent-dark)', cursor: 'pointer', fontWeight: 'bold' }}>TURNUVAYI BAŞLAT</button>
          </div>
        )}

        {gameState === 'gameover' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: winner === 'Sen' ? '#4caf50' : '#f44336' }}>{winner === 'Sen' ? 'KAZANDIN!' : 'AYTEK BOT KAZANDI!'}</h3>
            <button onClick={startGame} className="editorial-link" style={{ padding: '0.8rem 2rem', backgroundColor: '#fff', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>RÖVANŞ İSTE</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MasaTenisi;