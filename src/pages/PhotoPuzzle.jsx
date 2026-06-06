import React, { useState, useEffect } from 'react';
import { archivePhotos } from '../data/photoData';

function PhotoPuzzle() {
  const [size, setSize] = useState(3);
  const [pieces, setPieces] = useState([...Array(9).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isWon, setIsWon] = useState(false);
  
  const [moves, setMoves] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const defaultImage = archivePhotos && archivePhotos.length > 0 
    ? archivePhotos[0].url 
    : ""; 

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  const pickRandomPhoto = () => {
    if (!archivePhotos || archivePhotos.length === 0) return;

    const randomIndex = Math.floor(Math.random() * archivePhotos.length);
    const newImage = archivePhotos[randomIndex].url;
    
    if (newImage === selectedImage && archivePhotos.length > 1) {
      pickRandomPhoto();
      return;
    }

    setSelectedImage(newImage);
    setPieces([...Array(size * size).keys()]);
    setIsStarted(false);
    setIsWon(false);
    setSelectedIndex(null);
    setMoves(0); 
  };

  const startGame = () => {
    const totalPieces = size * size;
    let shuffled = [...Array(totalPieces).keys()].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
    setIsStarted(true);
    setIsWon(false);
    setSelectedIndex(null);
    setMoves(0); 
  };

  const handlePieceClick = (index) => {
    if (!isStarted || isWon) return;

    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      const newPieces = [...pieces];
      const temp = newPieces[selectedIndex];
      newPieces[selectedIndex] = newPieces[index];
      newPieces[index] = temp;
      
      setPieces(newPieces);
      setSelectedIndex(null);
      setMoves(prev => prev + 1); 

      if (newPieces.every((val, i) => val === i)) {
        setIsWon(true);
        setIsStarted(false);
      }
    }
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '1rem 0 4rem 0', textAlign: 'center' }} lang="tr">
      <style>{`
        .puzzle-grid {
          display: grid;
          gap: 4px;
          margin: 1rem auto 2rem auto;
          background: rgba(84, 107, 65, 0.1);
          padding: 8px;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 1/1;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.1);
          position: relative; /* Önizleme için eklendi */
        }
        
        .puzzle-piece {
          background-color: rgba(84, 107, 65, 0.05);
          border: 2px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, border 0.2s, filter 0.2s;
          border-radius: 4px;
        }

        .puzzle-piece:hover {
          filter: brightness(1.2);
          transform: scale(0.98);
        }

        .puzzle-piece.selected {
          border: 3px solid var(--accent-dark);
          filter: brightness(1.3);
          transform: scale(0.95);
          box-shadow: 0 0 15px var(--accent-dark);
        }

        @keyframes winPulse {
          0% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
          50% { box-shadow: 0 0 40px rgba(84, 107, 65, 0.8); }
          100% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
        }
        .puzzle-grid.won {
          animation: winPulse 2s infinite;
          gap: 0px;
        }
        .puzzle-grid.won .puzzle-piece {
          border: none;
        }

        /* İpucu Butonu Stili */
        .hint-btn {
          background: transparent;
          border: 1px solid rgba(84, 107, 65, 0.5);
          color: var(--accent-dark);
          padding: 0.5rem 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          border-radius: 30px;
          cursor: help;
          transition: 0.3s;
          margin-bottom: 1rem;
        }
        .hint-btn:active {
          background: var(--accent-dark);
          color: #fff;
        }
      `}</style>

      <div className="container">
        
        <div className="section-header-editorial" style={{ marginBottom: '3rem' }}>
          <span className="archive-badge">// RESTORASYON MERKEZİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>ARŞİV PUZZLE</h1>
          <p className="editorial-subtitle">Dağılan kareleri sırasıyla seçip yer değiştirerek gerçek görseli ortaya çıkar.</p>
        </div>

        <div className="game-container" style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '3rem 2rem'
        }}>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {[3, 4, 6].map(s => (
              <button 
                key={s} 
                onClick={() => { 
                  setSize(s); 
                  setPieces([...Array(s * s).keys()]); 
                  setIsStarted(false); 
                  setIsWon(false);
                  setSelectedIndex(null);
                  setMoves(0);
                }}
                style={{
                  background: size === s ? 'var(--accent-dark)' : 'transparent',
                  border: '1px solid var(--accent-dark)',
                  color: size === s ? 'var(--bg-main)' : 'var(--accent-dark)',
                  padding: '0.6rem 1.5rem', cursor: 'pointer', fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem', fontWeight: '700', borderRadius: '30px', transition: 'all 0.3s'
                }}
              >
                {s === 3 ? 'BAŞLANGIÇ (3x3)' : s === 4 ? 'ORTA (4x4)' : 'UZMAN (6x6)'}
              </button>
            ))}
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <button 
              onClick={pickRandomPhoto}
              style={{
                backgroundColor: 'var(--bg-main)',
                color: 'var(--accent-dark)',
                border: '2px dashed var(--accent-dark)',
                padding: '0.8rem 2rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {e.currentTarget.style.background = 'rgba(84, 107, 65, 0.1)'}}
              onMouseOut={(e) => {e.currentTarget.style.background = 'var(--bg-main)'}}
            >
              🎲 ARŞİVDEN RASTGELE GÖRSEL ÇEK
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', alignItems: 'flex-end' }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', fontSize: '1.2rem', fontWeight: 'bold' }}>
              HAMLE: <span style={{ fontSize: '1.5rem' }}>{moves}</span>
            </div>
            
            {isStarted && !isWon && (
              <button 
                className="hint-btn"
                onMouseDown={() => setShowPreview(true)}
                onMouseUp={() => setShowPreview(false)}
                onMouseLeave={() => setShowPreview(false)} 
                onTouchStart={() => setShowPreview(true)}  
                onTouchEnd={() => setShowPreview(false)}   
              >
                👁️ GÖRSELİ HATIRLA (BASILI TUT)
              </button>
            )}
          </div>

          {isWon && (
            <div className="game-message success" style={{ margin: '1rem 0', width: '100%', maxWidth: '600px' }}>
              <strong>TEBRİKLER! GÖRSELİ {moves} HAMLEDE BAŞARIYLA RESTORE ETTİN.</strong>
            </div>
          )}

          <div className={`puzzle-grid ${isWon ? 'won' : ''}`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
            
            {showPreview && (
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: `url("${selectedImage}")`,
                backgroundSize: '100% 100%',
                borderRadius: '8px',
                zIndex: 10
              }}></div>
            )}

            {pieces.map((originalPieceId, currentIndex) => {
              
              const backgroundSizeX = size * 100;
              const backgroundSizeY = size * 100;
              
              const xPos = (originalPieceId % size) * (100 / (size - 1));
              const yPos = Math.floor(originalPieceId / size) * (100 / (size - 1));

              return (
                <div 
                  key={currentIndex} 
                  className={`puzzle-piece ${selectedIndex === currentIndex ? 'selected' : ''}`}
                  onClick={() => handlePieceClick(currentIndex)}
                  style={{
                    backgroundImage: `url("${selectedImage}")`,
                    backgroundSize: `${backgroundSizeX}% ${backgroundSizeY}%`,
                    backgroundPosition: `${xPos}% ${yPos}%`
                  }}
                >
                </div>
              );
            })}
          </div>

          <button 
            className="editorial-link-btn-anchor reset-btn" 
            onClick={startGame} 
            style={{ marginTop: '1rem', minWidth: '250px' }}
          >
            {isStarted ? 'YENİDEN KARIŞTIR ↗' : 'OYUNU BAŞLAT ↗'}
          </button>
          
          <span style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.5, fontFamily: 'var(--font-heading)', maxWidth: '500px' }}>
            NASIL OYNANIR: Yerini değiştirmek istediğin parçaya tıkla, ardından geçeceği yere tıkla. En az hamleyle görseli tamamla. Unutursan "Görseli Hatırla" butonuna basılı tutabilirsin.
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default PhotoPuzzle;