import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaEraser, FaTrash, FaCheckCircle, FaRedo, FaArrowRight } from 'react-icons/fa';

const levels = [
  {
    id: 0,
    name: "THE MASK",
    revealImage: "/mask-gercek.jpeg",
    colors: { 1: '#2ecc71', 2: '#f1c40f', 3: '#2c3e50', 4: '#e74c3c', 5: '#ffffff' },
    targetGrid: [
      0, 0, 2, 2, 2, 2, 2, 2, 0, 0,
      0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 1, 5, 3, 1, 1, 3, 5, 1, 0,
      0, 1, 1, 1, 3, 3, 1, 1, 1, 0,
      0, 0, 1, 5, 5, 5, 5, 1, 0, 0,
      0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
      0, 2, 2, 5, 5, 5, 5, 2, 2, 0,
      2, 2, 2, 2, 4, 4, 2, 2, 2, 2,
      2, 2, 2, 2, 4, 4, 2, 2, 2, 2
    ]
  },
  {
    id: 1,
    name: "THE GRINCH",
    revealImage: "/grinch-gercek.jpeg",
    colors: { 1: '#d32f2f', 2: '#ffffff', 3: '#7ccc38', 4: '#f1c40f', 5: '#2c3e50' },
    targetGrid: [
      0, 0, 0, 1, 1, 1, 1, 2, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 2, 2, 2, 2, 2, 2, 2, 2, 0,
      0, 3, 3, 3, 3, 3, 3, 3, 3, 0,
      3, 3, 4, 5, 3, 3, 5, 4, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
      0, 3, 5, 3, 3, 3, 3, 5, 3, 0,
      0, 0, 3, 5, 5, 5, 5, 3, 0, 0,
      0, 0, 0, 3, 3, 3, 3, 0, 0, 0,
      0, 0, 1, 1, 2, 2, 1, 1, 0, 0
    ]
  },
  {
    id: 2,
    name: "ACE VENTURA",
    revealImage: "/ace-gercek.jpeg",
    colors: { 1: '#3e2723', 2: '#ffcc80', 3: '#ff4081', 4: '#00bcd4', 5: '#ffffff' },
    targetGrid: [
      0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 1, 1, 2, 2, 2, 2, 1, 0, 0,
      0, 0, 2, 5, 2, 2, 5, 2, 0, 0,
      0, 0, 2, 2, 2, 2, 2, 2, 0, 0,
      0, 0, 0, 2, 5, 5, 2, 0, 0, 0,
      0, 0, 2, 2, 2, 2, 2, 2, 0, 0,
      0, 3, 3, 5, 5, 5, 5, 3, 3, 0,
      3, 4, 3, 5, 5, 5, 5, 3, 4, 3
    ]
  }
];

function JimCarreyPixel() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [grid, setGrid] = useState(Array(100).fill(0));
  const [selectedColor, setSelectedColor] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [shakeIndex, setShakeIndex] = useState(null);

  const winTimeoutRef = useRef(null);
  const shakeTimeoutRef = useRef(null);
  const isPaintingRef = useRef(false);

  const activeData = levels[currentLevel];

  useEffect(() => {
    const checkWin = activeData.targetGrid.every((val, index) => val === grid[index]);
    if (checkWin && grid.some((val) => val !== 0)) {
      winTimeoutRef.current = setTimeout(() => setIsCompleted(true), 300);
    }
    return () => clearTimeout(winTimeoutRef.current);
  }, [grid, activeData]);

  useEffect(() => {
    return () => clearTimeout(shakeTimeoutRef.current);
  }, []);

  const changeLevel = (levelId) => {
    setCurrentLevel(levelId);
    setGrid(Array(100).fill(0));
    setIsCompleted(false);
    setSelectedColor(1);
    setShowClearConfirm(false);
  };

  const goToNextLevel = () => {
    const nextId = (currentLevel + 1) % levels.length;
    changeLevel(nextId);
  };

  const handlePixelClick = useCallback(
    (index) => {
      if (isCompleted) return;

      if (selectedColor === 0) {
        setGrid((prev) => {
          const next = [...prev];
          next[index] = 0;
          return next;
        });
      } else if (selectedColor === activeData.targetGrid[index]) {
        setGrid((prev) => {
          const next = [...prev];
          next[index] = selectedColor;
          return next;
        });
      } else if (activeData.targetGrid[index] !== 0 && grid[index] === 0) {
        // Yanlış renk seçiliyken tıklandığında sessizce hiçbir şey olmasın diye
        // kısa bir "sarsılma" ile tıklamanın algılandığını ama rengin yanlış olduğunu belirt
        setShakeIndex(index);
        clearTimeout(shakeTimeoutRef.current);
        shakeTimeoutRef.current = setTimeout(() => setShakeIndex(null), 300);
      }
    },
    [isCompleted, selectedColor, activeData, grid]
  );

  const requestClear = () => {
    const hasProgress = grid.some((val) => val !== 0);
    if (!hasProgress) {
      setGrid(Array(100).fill(0));
      setIsCompleted(false);
      return;
    }
    setShowClearConfirm(true);
  };

  const confirmClear = () => {
    setGrid(Array(100).fill(0));
    setIsCompleted(false);
    setShowClearConfirm(false);
  };

  // Dokunmatik cihazlarda sürükleyerek boyama: parmağın altındaki hücreyi bulup boyar
  const handleTouchMove = (e) => {
    if (isCompleted) return;
    const touch = e.touches[0];
    if (!touch) return;
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const index = el?.dataset?.index;
    if (index !== undefined) {
      handlePixelClick(Number(index));
    }
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ paddingBottom: '4rem' }} lang="tr">
      <style>{`
        .pixel-board {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          width: 100%;
          aspect-ratio: 1/1;
          background-color: rgba(84, 107, 65, 0.05);
          border: 2px solid var(--accent-dark);
          margin: 0 auto;
          touch-action: none;
        }
        .pixel-cell { border: 0.5px solid rgba(84, 107, 65, 0.1); cursor: pointer; transition: 0.1s; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-weight: bold; font-size: 1.2rem; color: rgba(84, 107, 65, 0.3); user-select: none; }
        .pixel-cell:hover { transform: scale(1.1); z-index: 2; box-shadow: 0 0 5px rgba(0,0,0,0.2); }
        .pixel-cell.shake { animation: cellShake 0.3s ease; }
        @keyframes cellShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }
        .reveal-container { perspective: 1000px; width: 100%; max-width: 400px; margin: 0 auto; position: relative; aspect-ratio: 1/1; }
        .reveal-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
        .reveal-inner.flipped { transform: rotateY(180deg); }
        .reveal-front, .reveal-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 8px; }
        .reveal-back { transform: rotateY(180deg); border: 4px solid var(--accent-dark); overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.3); }
        .palette-container { display: inline-flex; gap: 0.8rem; justify-content: center; margin: 0 0 2rem 0; flex-wrap: wrap; background: rgba(84, 107, 65, 0.05); padding: 1rem 2rem; border-radius: 30px; border: 1px solid rgba(84, 107, 65, 0.2); }
        .palette-btn { width: 45px; height: 45px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-family: var(--font-heading); font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        .palette-btn.active { border-color: var(--accent-dark); transform: scale(1.15); box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .success-banner { background: var(--accent-dark); color: #fff; padding: 1rem 2rem; border-radius: 8px; font-family: var(--font-heading); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); margin: 0 auto 2rem auto; max-width: 450px; }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }

        .confirm-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 50;
          display: flex; align-items: center; justify-content: center; padding: 1rem;
        }
        .confirm-box {
          background: var(--bg-main); border: 2px solid var(--accent-dark); border-radius: 8px;
          padding: 2rem; max-width: 360px; text-align: center; font-family: var(--font-body);
        }
        .confirm-actions { display: flex; gap: 1rem; margin-top: 1.5rem; justify-content: center; }
      `}</style>

      <div className="container">
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// DİJİTAL TUVAL</span>
          <h1 className="editorial-title">PİKSEL BOYAMA GALERİSİ</h1>
          <p className="editorial-subtitle">Karakteri seç, kodları takip et ve tuvali gerçeğe dönüştür.</p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {levels.map((lvl) => (
            <button key={lvl.id} className={`editorial-link-btn ${currentLevel === lvl.id ? 'active' : ''}`} onClick={() => changeLevel(lvl.id)}>
              {lvl.name}
            </button>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          {isCompleted && (
            <div className="success-banner">
              <FaCheckCircle size={24} /> HARİKA! {activeData.name} TAMAMLANDI!
              <button
                onClick={goToNextLevel}
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  borderRadius: '20px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                  marginLeft: '0.5rem',
                }}
              >
                SIRADAKİ KARAKTER <FaArrowRight size={12} />
              </button>
            </div>
          )}

          {!isCompleted && (
            <div className="palette-container">
              {Object.entries(activeData.colors).map(([keyNum, hexCode]) => (
                <button
                  key={keyNum}
                  className={`palette-btn ${selectedColor === Number(keyNum) ? 'active' : ''}`}
                  style={{ backgroundColor: hexCode }}
                  onClick={() => setSelectedColor(Number(keyNum))}
                >
                  {keyNum}
                </button>
              ))}
              <div style={{ width: '2px', backgroundColor: 'rgba(84, 107, 65, 0.2)', margin: '0 0.5rem' }}></div>
              <button
                className={`palette-btn ${selectedColor === 0 ? 'active' : ''}`}
                style={{ backgroundColor: '#fff', border: '1px solid #ccc', color: '#555', textShadow: 'none' }}
                onClick={() => setSelectedColor(0)}
                title="Silgi"
              >
                <FaEraser size={18} />
              </button>
            </div>
          )}

          <div className="reveal-container">
            <div className={`reveal-inner ${isCompleted ? 'flipped' : ''}`}>
              <div className="reveal-front">
                <div className="pixel-board" onTouchMove={handleTouchMove}>
                  {grid.map((cellColor, index) => {
                    const showHint = cellColor === 0 && activeData.targetGrid[index] !== 0;
                    return (
                      <div
                        key={index}
                        data-index={index}
                        className={`pixel-cell ${shakeIndex === index ? 'shake' : ''}`}
                        style={{ backgroundColor: cellColor === 0 ? 'transparent' : activeData.colors[cellColor] }}
                        onMouseDown={() => handlePixelClick(index)}
                        onMouseEnter={(e) => {
                          if (e.buttons === 1) handlePixelClick(index);
                        }}
                        onTouchStart={() => handlePixelClick(index)}
                      >
                        {showHint ? activeData.targetGrid[index] : ''}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="reveal-back">
                <img src={activeData.revealImage} alt={`Gerçek ${activeData.name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <button onClick={isCompleted ? confirmClear : requestClear} className="editorial-link-btn" style={{ borderColor: '#e74c3c', color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isCompleted ? <><FaRedo /> YENİDEN OYNA</> : <><FaTrash /> SIFIRLA</>}
            </button>
          </div>
        </div>
      </div>

      {showClearConfirm && (
        <div className="confirm-overlay" onClick={() => setShowClearConfirm(false)}>
          <div className="confirm-box" onClick={(e) => e.stopPropagation()}>
            <p style={{ marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--accent-dark)' }}>Tuvali temizle</p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Şu ana kadarki ilerlemen silinecek. Emin misin?</p>
            <div className="confirm-actions">
              <button
                onClick={() => setShowClearConfirm(false)}
                style={{ background: 'transparent', border: '1px solid rgba(84,107,65,0.4)', color: 'var(--text-main)', padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer' }}
              >
                VAZGEÇ
              </button>
              <button
                onClick={confirmClear}
                style={{ background: '#e74c3c', border: 'none', color: '#fff', padding: '0.5rem 1.2rem', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                TEMİZLE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JimCarreyPixel;
