import React, { useState, useEffect } from 'react';
import { FaEraser, FaTrash, FaCheckCircle, FaRedo } from 'react-icons/fa';

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

  const activeData = levels[currentLevel];

  // Oyunun bitip bitmediğini kontrol et
  useEffect(() => {
    const checkWin = activeData.targetGrid.every((val, index) => val === grid[index]);
    if (checkWin && grid.some(val => val !== 0)) {
      setTimeout(() => setIsCompleted(true), 300);
    }
  }, [grid, activeData]);

  const changeLevel = (levelId) => {
    setCurrentLevel(levelId);
    setGrid(Array(100).fill(0));
    setIsCompleted(false);
    setSelectedColor(1);
  };

  const handlePixelClick = (index) => {
    if (isCompleted) return;

    if (selectedColor === 0) {
      const newGrid = [...grid];
      newGrid[index] = 0;
      setGrid(newGrid);
    } else if (selectedColor === activeData.targetGrid[index]) {
      const newGrid = [...grid];
      newGrid[index] = selectedColor;
      setGrid(newGrid);
    }
  };

  const clearCanvas = () => {
    if (window.confirm('Tüm tuvali temizlemek istediğine emin misin?')) {
      setGrid(Array(100).fill(0));
      setIsCompleted(false);
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
        }
        .pixel-cell { border: 0.5px solid rgba(84, 107, 65, 0.1); cursor: pointer; transition: 0.1s; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-weight: bold; font-size: 1.2rem; color: rgba(84, 107, 65, 0.3); user-select: none; }
        .pixel-cell:hover { transform: scale(1.1); z-index: 2; box-shadow: 0 0 5px rgba(0,0,0,0.2); }
        .reveal-container { perspective: 1000px; width: 100%; max-width: 400px; margin: 0 auto; position: relative; aspect-ratio: 1/1; }
        .reveal-inner { position: relative; width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-style: preserve-3d; }
        .reveal-inner.flipped { transform: rotateY(180deg); }
        .reveal-front, .reveal-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 8px; }
        .reveal-back { transform: rotateY(180deg); border: 4px solid var(--accent-dark); overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.3); }
        .palette-container { display: inline-flex; gap: 0.8rem; justify-content: center; margin: 0 0 2rem 0; flex-wrap: wrap; background: rgba(84, 107, 65, 0.05); padding: 1rem 2rem; border-radius: 30px; border: 1px solid rgba(84, 107, 65, 0.2); }
        .palette-btn { width: 45px; height: 45px; border-radius: 50%; border: 3px solid transparent; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-family: var(--font-heading); font-weight: bold; color: #fff; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        .palette-btn.active { border-color: var(--accent-dark); transform: scale(1.15); box-shadow: 0 4px 10px rgba(0,0,0,0.3); }
        .success-banner { background: var(--accent-dark); color: #fff; padding: 1rem 2rem; border-radius: 8px; font-family: var(--font-heading); font-size: 1.2rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); margin: 0 auto 2rem auto; max-width: 400px; }
        @keyframes popIn { 0% { transform: scale(0.8); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
      `}</style>

      <div className="container">
        
        {/* HİZALAMA DÜZELTİLDİ: Diğer sayfalarla aynı hizada */}
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
            </div>
          )}

          {/* Renk Paleti (Oyun bitmediği sürece görünür) */}
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

          {/* Oyun alanı ve 3D Kart */}
          <div className="reveal-container">
            <div className={`reveal-inner ${isCompleted ? 'flipped' : ''}`}>
              
              <div className="reveal-front">
                <div className="pixel-board">
                  {grid.map((cellColor, index) => {
                    const showHint = cellColor === 0 && activeData.targetGrid[index] !== 0;
                    return (
                      <div 
                        key={index} 
                        className="pixel-cell"
                        style={{ backgroundColor: cellColor === 0 ? 'transparent' : activeData.colors[cellColor] }}
                        onMouseDown={() => handlePixelClick(index)}
                        onMouseEnter={(e) => {
                          if (e.buttons === 1) handlePixelClick(index); 
                        }}
                      >
                        {showHint ? activeData.targetGrid[index] : ''}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="reveal-back">
                <img 
                  src={activeData.revealImage} 
                  alt={`Gerçek ${activeData.name}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <button onClick={clearCanvas} className="editorial-link-btn" style={{ borderColor: '#e74c3c', color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {isCompleted ? <><FaRedo /> YENİDEN OYNA</> : <><FaTrash /> SIFIRLA</>}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JimCarreyPixel;