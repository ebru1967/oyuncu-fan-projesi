import React, { useState, useEffect } from 'react';
import { FaFutbol, FaTrophy, FaRedo } from 'react-icons/fa';

function AytekPenalty() {
  const [score, setScore] = useState({ player: 0, gk: 0 });
  const [message, setMessage] = useState("Aytek sahnede! Hedefi seç ve şutunu çek.");
  const [isShooting, setIsShooting] = useState(false);
  
  const [ballPos, setBallPos] = useState('initial');
  const [gkPos, setGkPos] = useState('initial');

  const coordinates = {
    initial: { x: 50, y: 92 },   // Penaltı noktası (Çimde)
    gkInitial: { x: 50, y: 65 }, // Kaleci başlangıç çizgisi
    0: { x: 20, y: 48 }, // Sol Üst (90'a)
    1: { x: 50, y: 48 }, // Orta Üst (Üst direk altı)
    2: { x: 80, y: 48 }, // Sağ Üst (90'a)
    3: { x: 20, y: 80 }, // Sol Alt
    4: { x: 50, y: 80 }, // Orta Alt
    5: { x: 80, y: 80 }  // Sağ Alt
  };

  const shoot = (targetIndex) => {
    if (isShooting) return; 
    setIsShooting(true);
    setMessage("Top ağlara doğru süzülüyor...");

    setBallPos(targetIndex);

    const randomGkMove = Math.floor(Math.random() * 6);
    setGkPos(randomGkMove);

    setTimeout(() => {
      const isExactMatch = targetIndex === randomGkMove; 
      const isSameDirection = Math.abs(targetIndex - randomGkMove) === 3; 

      if (isExactMatch) {
        setMessage("TAM ÜSTÜNE! Jim Carrey topu kucağına aldı!");
        setScore(prev => ({ ...prev, gk: prev.gk + 1 }));
      } else if (isSameDirection) {
        setMessage("KÖŞEYİ BİLDİ! Jim Carrey uzanarak topu çıkardı!");
        setScore(prev => ({ ...prev, gk: prev.gk + 1 }));
      } else {
        setMessage("GOOOOL! Aytek, idolünü ters köşeye yatırdı!");
        setScore(prev => ({ ...prev, player: prev.player + 1 }));
      }

      setTimeout(() => {
        resetPositions();
      }, 2000);

    }, 600); 
  };

  const resetPositions = () => {
    setBallPos('initial');
    setGkPos('initial');
    setMessage("Sıradaki Şut! İdolüne acıma.");
    setIsShooting(false);
  };

  const resetGame = () => {
    setScore({ player: 0, gk: 0 });
    resetPositions();
    setMessage("Yeni Maç Başladı! Göster kendini Aytek.");
  };

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
          background: var(--accent-dark);
          color: #fff;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          align-items: center;
        }

        /* OYUN ALANI: Gökyüzü ve Çim ayrımı yapıldı */
        .game-area {
          position: relative;
          width: 100%;
          height: 350px;
          background: linear-gradient(180deg, 
            rgba(135, 206, 235, 0.6) 0%,   /* Gökyüzü */
            rgba(135, 206, 235, 0.6) 45%,  /* Ufuk çizgisi */
            rgba(84, 107, 65, 0.7) 45%,    /* Çim başlangıcı */
            rgba(84, 107, 65, 1) 100%);    /* Çim bitişi */
          border: 4px solid var(--accent-dark);
          border-radius: 8px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        /* KALE DİREKLERİ: Fiziksel bir sınır çizildi */
        .goal-post {
          position: absolute;
          bottom: 20px; /* Çimden biraz yukarıda başlar */
          left: 10%;
          width: 80%;
          height: 55%; /* Yalnızca belirli bir alanı kaplar */
          border: 6px solid #fff;
          border-bottom: none;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 25px 25px;
          z-index: 2;
          box-shadow: inset 0 15px 20px rgba(0,0,0,0.1);
        }

        /* HEDEF IZGARASI ARTIK SADECE KALE DİREKLERİ İÇİNDE */
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
        }

        .target-zone:hover {
          background: rgba(231, 76, 60, 0.3);
          border: 1px dashed rgba(231, 76, 60, 0.7);
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
        :global(body.dark-mode) .score-board {
          background-color: #222222 !important; /* Çok koyu gri arka plan */
          color: #FFFFFF !important; /* Beyaz yazı */
          border: 1px solid #444444; /* Şık bir sınır çizgisi */
        }

        :global(body.dark-mode) .message-box {
          color: #FFFFFF !important; /* Mesaj yazısı da beyaz olsun */
        }
        
        :global(body.dark-mode) .stadium-bg {
          background-color: #0b0d09 !important; /* Ana arka planı da karanlığa uyumlu yap */
          border-color: #333333 !important; /* Kenarlığı yumuşat */
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
          <div><FaTrophy color="#f1c40f" size={24} /></div>
          <div style={{ fontWeight: 'bold' }}>JIM CARREY: {score.gk}</div>
        </div>

        <div className="message-box">
          {message}
        </div>

        <div className="game-area">
          
          <div className="goal-post">
            <div className="target-grid">
              {[0, 1, 2, 3, 4, 5].map(index => (
                <div 
                  key={index} 
                  className="target-zone" 
                  onClick={() => shoot(index)}
                ></div>
              ))}
            </div>
          </div>
          
          <div 
            className="goalkeeper" 
            style={{ 
              left: `${gkPos === 'initial' ? coordinates.gkInitial.x : coordinates[gkPos].x}%`, 
              top: `${gkPos === 'initial' ? coordinates.gkInitial.y : coordinates[gkPos].y}%` 
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
              transform: `translate(-50%, -50%) ${ballPos !== 'initial' ? 'rotate(720deg) scale(0.7)' : 'rotate(0deg) scale(1)'}`
            }}
          >
            <FaFutbol color="#2c3e50" style={{ background: '#fff', borderRadius: '50%' }} />
          </div>

        </div>

        <button 
          onClick={resetGame}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '2px solid var(--accent-dark)', color: 'var(--accent-dark)', padding: '0.6rem 2rem', borderRadius: '30px', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 'bold', transition: '0.3s' }}
          onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}}
          onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
        >
          <FaRedo /> SKORU SIFIRLA
        </button>

      </div>
    </div>
  );
}

export default AytekPenalty;