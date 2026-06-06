import React, { useState, useEffect } from 'react';
import { FaPaintBrush, FaEraser, FaTrash, FaCheckCircle, FaRedo } from 'react-icons/fa';

function JimCarreyPixel() {
  const levels = [
    {
      id: 0,
      name: "THE MASK",
      revealImage: "/mask-gercek.jpeg",
      colors: {
        1: '#2ecc71', // Maske Yeşili
        2: '#f1c40f', // Sarı Şapka/Takım
        3: '#2c3e50', // Siyah Göz Bebekleri/Detay
        4: '#e74c3c', // Kırmızı Kravat
        5: '#ffffff'  // Beyaz (Dişler ve Göz Akı)
      },
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
      colors: {
        1: '#d32f2f', // Noel Baba Şapkası Kırmızısı
        2: '#ffffff', // Şapka Pamuğu Beyazı
        3: '#7ccc38', // Grinch Yeşili
        4: '#f1c40f', // Sarı Gözler
        5: '#2c3e50'  // Siyah Göz Bebeği ve Ağız
      },
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
      colors: {
        1: '#3e2723', // Kabarık Saç (Kahverengi)
        2: '#ffcc80', // Ten Rengi
        3: '#ff4081', // Çiçekli Gömlek Pembe
        4: '#00bcd4', // Gömlek Detay Mavi
        5: '#ffffff'  // İç Tişört ve Dişler
      },
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

  const gridSize = 100; 
  const [currentLevel, setCurrentLevel] = useState(0);
  const [grid, setGrid] = useState(Array(gridSize).fill(0));
  const [selectedColor, setSelectedColor] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const activeData = levels[currentLevel];

  // Oyunun bitip bitmediğini kontrol et
  useEffect(() => {
    const checkWin = activeData.targetGrid.every((val, index) => val === grid[index]);
    if (checkWin && grid.some(val => val !== 0)) {
      setTimeout(() => setIsCompleted(true), 300);
    } else {
      setIsCompleted(false);
    }
  }, [grid, activeData]);

  const changeLevel = (levelId) => {
    setCurrentLevel(levelId);
    setGrid(Array(gridSize).fill(0));
    setIsCompleted(false);
    setSelectedColor(1);
  };

  const handlePixelClick = (index) => {
    if (isCompleted) return;

    if (selectedColor === 0) {
      const newGrid = [...grid];
      newGrid[index] = 0;
      setGrid(newGrid);
      return;
    }

    if (selectedColor !== activeData.targetGrid[index]) {
      return; 
    }

    const newGrid = [...grid];
    newGrid[index] = selectedColor;
    setGrid(newGrid);
  };

  const clearCanvas = () => {
    if (window.confirm('Tüm tuvali temizlemek istediğine emin misin?')) {
      setGrid(Array(gridSize).fill(0));
      setIsCompleted(false);
    }
  };

  return (
    <div className="container animate-fade" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      
      <style>{`
        /* SEVİYE BUTONLARI EKLENDİ */
        .level-selector {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .level-btn {
          background: transparent;
          border: 2px solid rgba(84, 107, 65, 0.2);
          color: var(--accent-dark);
          padding: 0.8rem 1.5rem;
          border-radius: 30px;
          font-family: var(--font-heading);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }

        .level-btn.active {
          background: var(--accent-dark);
          color: #fff;
          border-color: var(--accent-dark);
          box-shadow: 0 4px 12px rgba(84, 107, 65, 0.3);
        }

        /* 3D FLIP ANIMATION BİLEŞENLERİ */
        .reveal-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1/1;
          margin: 0 auto;
          perspective: 1000px; 
        }
        
        .reveal-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        
        .reveal-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .reveal-front, .reveal-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden; 
          border-radius: 8px;
        }

        .reveal-back {
          transform: rotateY(180deg); 
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          border: 4px solid var(--accent-dark);
        }

        .real-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* GRID TASARIMI (FRONT) */
        .pixel-board {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          width: 100%;
          height: 100%;
          background-color: rgba(84, 107, 65, 0.05);
          border: 2px solid var(--accent-dark);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .pixel-cell {
          border: 1px solid rgba(84, 107, 65, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: bold;
          font-size: 1.2rem;
          color: rgba(84, 107, 65, 0.3);
          transition: transform 0.1s;
          user-select: none;
        }
        
        .pixel-cell:hover {
          transform: scale(1.1);
          z-index: 2;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }

        .palette-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          border: 3px solid transparent;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-family: var(--font-heading);
          font-weight: bold;
          color: #fff;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }

        .palette-btn.active {
          border-color: var(--accent-dark);
          transform: scale(1.15);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .success-banner {
          background: var(--accent-dark);
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-family: var(--font-heading);
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          margin-bottom: 1rem;
        }

        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="archive-badge">// DİJİTAL TUVAL</span>
        <h1 className="editorial-title">PİKSEL BOYAMA GALERİSİ</h1>
        <p className="editorial-subtitle">Karakteri seç, kodları takip et ve tuvali gerçeğe dönüştür.</p>
      </div>

      <div className="level-selector">
        {levels.map((lvl) => (
          <button 
            key={lvl.id} 
            className={`level-btn ${currentLevel === lvl.id ? 'active' : ''}`}
            onClick={() => changeLevel(lvl.id)}
          >
            {lvl.name}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        {isCompleted && (
          <div className="success-banner">
            <FaCheckCircle size={24} /> HARİKA! {activeData.name} ESERİNİ TAMAMLADIN!
          </div>
        )}

        {!isCompleted && (
          <div style={{ display: 'flex', gap: '1rem', background: 'rgba(84, 107, 65, 0.05)', padding: '1rem 2rem', borderRadius: '30px', border: '1px solid rgba(84, 107, 65, 0.2)' }}>
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
            
            {/* KARTIN ÖN YÜZÜ */}
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

            {/* KARTIN ARKA YÜZÜ (GERÇEK GÖRSEL) */}
            <div className="reveal-back">
              <img 
                src={activeData.revealImage} 
                alt={`Gerçek ${activeData.name}`} 
                className="real-image" 
              />
            </div>

          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button 
            onClick={clearCanvas}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', border: '1px solid #e74c3c', color: '#e74c3c', padding: '0.6rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}
          >
            {isCompleted ? <><FaRedo /> YENİDEN OYNA</> : <><FaTrash /> SIFIRLA</>}
          </button>
        </div>

      </div>
    </div>
  );
}

export default JimCarreyPixel;