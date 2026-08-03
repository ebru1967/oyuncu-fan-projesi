import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaFutbol, FaTrophy, FaRedo } from 'react-icons/fa';

const TOTAL_ZONES = 6;

function AytekPenalty() {
  const [score, setScore] = useState({ player: 0, gk: 0 });
  const [message, setMessage] = useState('Aytek sahnede! Hedefi seç ve şutunu çek.');
  const [isShooting, setIsShooting] = useState(false);

  // OYUNCUNUN ŞUT GEÇMİŞİNİ TUTAN VERİ DİZİSİ
  const [shotHistory, setShotHistory] = useState([0, 0, 0, 0, 0, 0]);

  const [ballPos, setBallPos] = useState('initial');
  const [gkPos, setGkPos] = useState('initial');
  const [lastResult, setLastResult] = useState(null); // 'goal' | 'save' | null

  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  const timeoutsRef = useRef([]);

  const setTrackedTimeout = useCallback((fn, ms) => {
    const id = setTimeout(fn, ms);
    timeoutsRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    return () => timeoutsRef.current.forEach(clearTimeout);
  }, []);

  const coordinates = {
    initial: { x: 50, y: 92 },
    gkInitial: { x: 50, y: 65 },
    0: { x: 20, y: 48 },
    1: { x: 50, y: 48 },
    2: { x: 80, y: 48 },
    3: { x: 20, y: 80 },
    4: { x: 50, y: 80 },
    5: { x: 80, y: 80 },
  };

  const shoot = (targetIndex) => {
    if (isShooting) return;
    setIsShooting(true);
    setLastResult(null);
    setMessage('Top ağlara doğru süzülüyor...');

    setBallPos(targetIndex);

    const newHistory = [...shotHistory];
    newHistory[targetIndex] += 1;
    setShotHistory(newHistory);

    // --- AKILLI KALECİ ALGORİTMASI ---
    // Aytek'in serisi uzadıkça Jim Carrey daha dikkatli okumaya başlıyor:
    // taban ihtimal %60, her seri golünde biraz daha artıyor (üst sınır %85).
    const readChance = Math.min(0.85, 0.6 + streak * 0.05);

    let predictedGkMove = Math.floor(Math.random() * TOTAL_ZONES);

    if (Math.random() < readChance) {
      const maxHits = Math.max(...newHistory);
      const favoriteSpots = newHistory.reduce((acc, count, idx) => {
        if (count === maxHits && count > 0) acc.push(idx);
        return acc;
      }, []);

      if (favoriteSpots.length > 0) {
        predictedGkMove = favoriteSpots[Math.floor(Math.random() * favoriteSpots.length)];
      }
    }

    setGkPos(predictedGkMove);

    setTrackedTimeout(() => {
      const isExactMatch = targetIndex === predictedGkMove;
      const isSameColumn = Math.abs(targetIndex - predictedGkMove) === 3;

      setRoundsPlayed((r) => r + 1);

      if (isExactMatch) {
        setMessage('TAM ÜSTÜNE! Jim Carrey zihnini okudu!');
        setScore((prev) => ({ ...prev, gk: prev.gk + 1 }));
        setStreak(0);
        setLastResult('save');
      } else if (isSameColumn) {
        setMessage('KÖŞEYİ BİLDİ! Jim Carrey uzanarak topu çıkardı!');
        setScore((prev) => ({ ...prev, gk: prev.gk + 1 }));
        setStreak(0);
        setLastResult('save');
      } else {
        setMessage('GOOOOL! Aytek, idolünü ters köşeye yatırdı!');
        setScore((prev) => ({ ...prev, player: prev.player + 1 }));
        setStreak((s) => {
          const next = s + 1;
          setBestStreak((b) => Math.max(b, next));
          return next;
        });
        setLastResult('goal');
      }

      setTrackedTimeout(() => {
        resetPositions();
      }, 2000);
    }, 600);
  };

  const resetPositions = () => {
    setBallPos('initial');
    setGkPos('initial');
    setLastResult(null);
    setMessage('Sıradaki Şut! İdolüne acıma.');
    setIsShooting(false);
  };

  const resetGame = () => {
    setScore({ player: 0, gk: 0 });
    setShotHistory([0, 0, 0, 0, 0, 0]);
    setStreak(0);
    setRoundsPlayed(0);
    resetPositions();
    setMessage('Yeni Maç Başladı! Göster kendini Aytek.');
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      shoot(index);
    }
  };

  const winRate = roundsPlayed > 0 ? Math.round((score.player / roundsPlayed) * 100) : null;

  return (
    <div className="container animate-fade" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      <style>{`
        .stadium-bg {
          background-color: rgba(84, 107, 65, 0.05);
          border: 2px solid var(--accent-dark);
          border-radius: 12px;
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
        }

        .score-board {
          display: flex;
          justify-content: space-around;
          background: linear-gradient(135deg, #7b113a 0%, #1a2942 100%);
          color: #fff;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          align-items: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          border: 2px solid rgba(255,255,255,0.1);
        }

        .stat-strip {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-size: 0.85rem;
          opacity: 0.75;
          margin-bottom: 1.5rem;
        }

        .stat-strip strong {
          color: var(--accent-dark);
          font-size: 1rem;
        }

        .game-area {
          position: relative;
          width: 100%;
          height: 350px;
          background: linear-gradient(180deg, 
            rgba(135, 206, 235, 0.6) 0%, 
            rgba(135, 206, 235, 0.6) 45%, 
            rgba(84, 107, 65, 0.7) 45%, 
            rgba(84, 107, 65, 1) 100%);
          border: 4px solid var(--accent-dark);
          border-radius: 8px;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .goal-post {
          position: absolute;
          bottom: 20px;
          left: 10%;
          width: 80%;
          height: 55%;
          border: 6px solid #fff;
          border-bottom: none;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 25px 25px;
          z-index: 2;
          box-shadow: inset 0 15px 20px rgba(0,0,0,0.1);
        }

        .target-grid {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          z-index: 10;
        }

        .target-zone {
          cursor: crosshair;
          transition: background 0.2s;
          position: relative;
        }

        .target-zone:hover,
        .target-zone:focus-visible {
          background: rgba(231, 76, 60, 0.3);
          border: 1px dashed rgba(231, 76, 60, 0.7);
          outline: none;
        }

        .football {
          position: absolute;
          font-size: 2rem;
          color: #fff;
          filter: drop-shadow(0 8px 8px rgba(0,0,0,0.5));
          z-index: 5;
          transform: translate(-50%, -50%);
          transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .goalkeeper {
          position: absolute;
          z-index: 4;
          transform: translate(-50%, -50%);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .gk-body {
          height: 120px; 
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0px 10px 10px rgba(0,0,0,0.6)); 
        }

        .gk-name {
          font-size: 0.8rem;
          background: #e74c3c;
          color: #fff;
          padding: 2px 8px;
          border-radius: 4px;
          font-family: var(--font-heading);
          margin-top: 5px; 
          letter-spacing: 1px;
          z-index: 2;
        }

        .message-box {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          color: var(--accent-dark);
          height: 30px;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .streak-badge {
          display: inline-block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          letter-spacing: 1px;
          background: var(--accent-dark);
          color: #fff;
          padding: 2px 10px;
          border-radius: 20px;
          margin-bottom: 1rem;
          opacity: 0.9;
        }
        
        .reset-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 2px solid var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.6rem 2rem;
          border-radius: 30px;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          background: var(--accent-dark);
          color: #fff;
        }

        @keyframes flash-goal {
          0% { background: rgba(46, 204, 113, 0); }
          30% { background: rgba(46, 204, 113, 0.35); }
          100% { background: rgba(46, 204, 113, 0); }
        }

        @keyframes flash-save {
          0% { background: rgba(231, 76, 60, 0); }
          30% { background: rgba(231, 76, 60, 0.35); }
          100% { background: rgba(231, 76, 60, 0); }
        }

        .game-area.result-goal { animation: flash-goal 0.9s ease-out; }
        .game-area.result-save { animation: flash-save 0.9s ease-out; }

        @media (prefers-reduced-motion: reduce) {
          .game-area, .football, .goalkeeper { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
        }
      `}</style>

      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="archive-badge">// İNTERAKTİF ARENA</span>
        <h1 className="editorial-title">AYTEK vs. JIM CARREY</h1>
        <p className="editorial-subtitle">İdolüne karşı bir meydan okuma! Onu ters köşeye yatırabilecek misin?</p>
      </div>

      <div className="stadium-bg">
        <div className="score-board">
          <div style={{ fontWeight: 'bold' }}>AYTEK (SEN): {score.player}</div>
          <div>
            <FaTrophy color="#f1c40f" size={24} />
          </div>
          <div style={{ fontWeight: 'bold' }}>JIM CARREY: {score.gk}</div>
        </div>

        <div className="stat-strip">
          <div>
            SERİ: <strong>{streak}</strong>
          </div>
          <div>
            EN İYİ SERİ: <strong>{bestStreak}</strong>
          </div>
          {winRate !== null && (
            <div>
              İSABET ORANI: <strong>%{winRate}</strong>
            </div>
          )}
        </div>

        {streak >= 3 && (
          <div className="streak-badge">🔥 JIM CARREY SENİ OKUMAYA BAŞLADI — DAHA DİKKATLİ SEÇ</div>
        )}

        <div className="message-box">{message}</div>

        <div className={`game-area ${lastResult ? `result-${lastResult}` : ''}`}>
          <div className="goal-post">
            <div className="target-grid">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`Hedef bölge ${index + 1}`}
                  className="target-zone"
                  onClick={() => shoot(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
            </div>
          </div>

          <div
            className="goalkeeper"
            style={{
              left: `${gkPos === 'initial' ? coordinates.gkInitial.x : coordinates[gkPos].x}%`,
              top: `${gkPos === 'initial' ? coordinates.gkInitial.y : coordinates[gkPos].y}%`,
            }}
          >
            <img src="/jim-vucut.png" alt="Jim Carrey" className="gk-body" />
            <span className="gk-name">JIM CARREY</span>
          </div>

          <div
            className="football"
            style={{
              left: `${ballPos === 'initial' ? coordinates.initial.x : coordinates[ballPos].x}%`,
              top: `${ballPos === 'initial' ? coordinates.initial.y : coordinates[ballPos].y}%`,
              transform: `translate(-50%, -50%) ${
                ballPos !== 'initial' ? 'rotate(720deg) scale(0.7)' : 'rotate(0deg) scale(1)'
              }`,
            }}
          >
            <FaFutbol color="#2c3e50" style={{ background: '#fff', borderRadius: '50%' }} />
          </div>
        </div>

        <button onClick={resetGame} className="reset-btn">
          <FaRedo /> SKORU SIFIRLA
        </button>
      </div>
    </div>
  );
}

export default AytekPenalty;
