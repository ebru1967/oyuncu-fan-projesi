import React, { useState, useEffect, useRef, useCallback } from 'react';

function MasaTenisi() {
  const [gameState, setGameState] = useState('idle');
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [winner, setWinner] = useState(null);

  const gameAreaRef = useRef(null);
  const requestRef = useRef(null);
  
  // OYUN MOTORU (Hız ve Koordinatlar)
  const state = useRef({
    ball: { x: 50, y: 50, dx: 1, dy: 0.5, speed: 1.2 }, 
    playerY: 50,
    botY: 50,
    paddleHeight: 20, // Raket yüksekliği (%)
    paddleWidth: 2
  });

  const ballRef = useRef(null);
  const playerRef = useRef(null);
  const botRef = useRef(null);

  const WINNING_SCORE = 5;

  // Topu sıfırla ve hızı başlangıca döndür
  const resetBall = (scorer) => {
    state.current.ball = {
      x: 50,
      y: 50,
      dx: scorer === 'player' ? 1 : -1,
      dy: (Math.random() > 0.5 ? 1 : -1) * 0.6,
      speed: 1.2 // Her sayıda hız sıfırlanır
    };
  };

  const updateGame = useCallback(() => {
    if (gameState !== 'playing') return;

    const { ball, paddleHeight, paddleWidth } = state.current;

    // TOPUN HAREKETİ
    ball.x += ball.dx * ball.speed;
    ball.y += ball.dy * ball.speed;

    // Üst ve Alt duvar çarpışması
    if (ball.y <= 0 || ball.y >= 100) { 
      ball.dy *= -1; 
      ball.y = ball.y <= 0 ? 0 : 100;
    }

    // AYTEK BOT YAPAY ZEKASI (Top hızlandıkça o da hızlanır)
    const botSpeed = 0.8 + (ball.speed * 0.15); 
    if (state.current.botY < ball.y - 2) state.current.botY += botSpeed;
    else if (state.current.botY > ball.y + 2) state.current.botY -= botSpeed;

    // Raketlerin dışarı taşmasını engelle
    if (state.current.botY < paddleHeight / 2) state.current.botY = paddleHeight / 2;
    if (state.current.botY > 100 - paddleHeight / 2) state.current.botY = 100 - paddleHeight / 2;

    const checkCollision = (paddleY) => {
      return (ball.y >= paddleY - paddleHeight / 2 && ball.y <= paddleY + paddleHeight / 2);
    };

    // SENİN (SOL) VURUŞUN
    if (ball.x <= 5 + paddleWidth && ball.x >= 4) {
      if (checkCollision(state.current.playerY)) {
        ball.dx = 1; // Topu sağa yolla
        ball.speed *= 1.1; // HER VURUŞTA %10 HIZLANIR!
        // Top raketin neresine çarptıysa ona göre falso alır
        ball.dy = ((ball.y - state.current.playerY) / (paddleHeight / 2)) * 1.2;
      }
    }

    // BOTUN (SAĞ) VURUŞU
    if (ball.x >= 95 - paddleWidth && ball.x <= 96) {
      if (checkCollision(state.current.botY)) {
        ball.dx = -1; // Topu sola yolla
        ball.speed *= 1.1; // HER VURUŞTA %10 HIZLANIR!
        ball.dy = ((ball.y - state.current.botY) / (paddleHeight / 2)) * 1.2;
      }
    }

    // GOL KONTROLÜ
    if (ball.x < 0) { 
      setBotScore(p => {
        if (p + 1 >= WINNING_SCORE) endGame('Aytek Bot');
        return p + 1;
      }); 
      resetBall('bot'); 
    }
    else if (ball.x > 100) { 
      setPlayerScore(p => {
        if (p + 1 >= WINNING_SCORE) endGame('Sen');
        return p + 1;
      }); 
      resetBall('player'); 
    }

    // DOM GÜNCELLEMESİ (Ekranı çizdir)
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

  // FARE VE PARMAK HAREKETİ (Mobil için kusursuz)
  const handleMove = (clientY) => {
    if (!gameAreaRef.current || gameState !== 'playing') return;
    const rect = gameAreaRef.current.getBoundingClientRect();
    let y = ((clientY - rect.top) / rect.height) * 100;
    
    // Raket dışarı taşmasın
    const halfPaddle = state.current.paddleHeight / 2;
    state.current.playerY = Math.max(halfPaddle, Math.min(100 - halfPaddle, y));
  };

  const onMouseMove = (e) => handleMove(e.clientY);
  const onTouchMove = (e) => {
    e.preventDefault(); // Telefondaysa ekranın aşağı kaymasını engeller
    handleMove(e.touches[0].clientY);
  };

  return (
    <div className="game-container animate-fade" style={{
      textAlign: 'center', padding: '2rem 1rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)',
      fontFamily: 'var(--font-heading)', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center'
    }}>
      <div className="section-header-editorial" style={{ marginBottom: '1rem', width: '100%' }}>
        <span className="archive-badge" style={{ color: 'var(--accent-dark)' }}>// NOSTALJİK REFLEKS TESTİ</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>RETRO MASA TENİSİ</h2>
        <p className="editorial-subtitle" style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>
          Aytek Bot'a karşı 5 sayıya ilk ulaşan kazanır. Dikkat: Top her vuruşta hızlanır.
        </p>
      </div>

      {/* SKOR TABLOSU */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', margin: '1rem 0', fontSize: 'clamp(1.5rem, 5vw, 2rem)', fontWeight: '900', fontFamily: 'monospace', color: 'var(--accent-dark)' }}>
        <div>SEN<br/><span style={{ fontSize: '3rem', color: 'var(--text-main)' }}>{playerScore}</span></div>
        <div style={{ alignSelf: 'center', opacity: 0.3 }}>VS</div>
        <div>AYTEK BOT<br/><span style={{ fontSize: '3rem', color: 'var(--text-main)' }}>{botScore}</span></div>
      </div>

      {/* OYUN ALANI (Mobil Uyumlu: clamp kullanıldı) */}
      <div 
        ref={gameAreaRef}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        style={{
          position: 'relative', width: '100%', maxWidth: '600px', 
          height: 'clamp(250px, 50vh, 400px)', // Telefondaysa daralır, pc'deyse genişler
          backgroundColor: 'var(--bg-card)', border: '4px solid var(--accent-dark)',
          overflow: 'hidden', cursor: 'none', touchAction: 'none',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
        }}
      >
        {/* ORTA ÇİZGİ */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', marginLeft: '-2px', borderLeft: '4px dashed var(--accent-dark)', opacity: 0.3 }} />

        {/* RAKETLER VE TOP */}
        <div ref={playerRef} style={{ position: 'absolute', left: '5%', top: '50%', width: '12px', height: '20%', backgroundColor: 'var(--text-main)', transform: 'translate(-50%, -50%)', borderRadius: '4px' }} />
        <div ref={botRef} style={{ position: 'absolute', left: '95%', top: '50%', width: '12px', height: '20%', backgroundColor: 'var(--accent-dark)', transform: 'translate(-50%, -50%)', borderRadius: '4px' }} />
        <div ref={ballRef} style={{ position: 'absolute', left: '50%', top: '50%', width: '16px', height: '16px', backgroundColor: 'var(--text-main)', transform: 'translate(-50%, -50%)', borderRadius: '50%', display: gameState === 'idle' ? 'none' : 'block' }} />

        {/* BAŞLANGIÇ EKRANI */}
        {gameState === 'idle' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)' }}>
            <button onClick={startGame} className="editorial-link" style={{ padding: '1rem 2.5rem', backgroundColor: 'var(--bg-main)', color: 'var(--text-main)', border: '2px solid var(--accent-dark)', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem', borderRadius: '4px' }}>
              TURNUVAYI BAŞLAT
            </button>
          </div>
        )}

        {/* BİTİŞ EKRANI */}
        {gameState === 'gameover' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', color: '#fff', backdropFilter: 'blur(4px)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: winner === 'Sen' ? '#4caf50' : '#f44336' }}>
              {winner === 'Sen' ? 'KAZANDIN!' : 'AYTEK BOT KAZANDI!'}
            </h3>
            <button onClick={startGame} className="editorial-link" style={{ padding: '0.8rem 2rem', backgroundColor: '#fff', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
              RÖVANŞ İSTE
            </button>
          </div>
        )}
      </div>

      <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
        * Kontrol etmek için bilgisayarda fareyi oynatın, telefonda ekrana dokunup sürükleyin.
      </p>
    </div>
  );
}

export default MasaTenisi;