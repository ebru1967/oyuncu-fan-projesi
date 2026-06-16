import React, { useState } from 'react';
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
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '1rem 0 4rem 0' }} lang="tr">
      <style>{`
        .puzzle-grid {
          display: grid;
          gap: 0;
          margin: 1rem auto 2rem auto;
          background: rgba(84, 107, 65, 0.1);
          padding: 2px;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 1/1;
          position: relative;
        }
        
        .puzzle-piece {
          border: 0.5px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: transform 0.2s, filter 0.2s;
        }

        .puzzle-piece:hover {
          filter: brightness(1.1);
        }

        .puzzle-piece.selected {
          outline: 3px solid var(--accent-dark);
          outline-offset: -3px;
          z-index: 5;
        }

        @keyframes winPulse {
          0% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
          50% { box-shadow: 0 0 30px rgba(84, 107, 65, 0.6); }
          100% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
        }
        .puzzle-grid.won { animation: winPulse 2s infinite; }
      `}</style>

      <div className="container">
        
        {/* HİZALAMA DÜZELTİLDİ: paddingTop: '0', marginTop: '-3rem' EKLENDİ */}
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// RESTORASYON MERKEZİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>ARŞİV PUZZLE</h1>
          <p className="editorial-subtitle">Dağılan kareleri sırasıyla seçip yer değiştirerek gerçek görseli ortaya çıkar.</p>
        </div>

        <div className="game-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {[3, 4, 6].map(s => (
              <button 
                key={s} 
                onClick={() => { setSize(s); setPieces([...Array(s * s).keys()]); setIsStarted(false); setIsWon(false); setSelectedIndex(null); setMoves(0); }}
                className="editorial-link-btn"
                style={{ background: size === s ? 'var(--accent-dark)' : 'transparent', color: size === s ? '#fff' : 'var(--accent-dark)' }}
              >
                {s === 3 ? 'BAŞLANGIÇ (3x3)' : s === 4 ? 'ORTA (4x4)' : 'UZMAN (6x6)'}
              </button>
            ))}
          </div>

          <button onClick={pickRandomPhoto} className="editorial-link-btn" style={{ marginBottom: '2rem' }}>
            🎲 ARŞİVDEN RASTGELE GÖRSEL ÇEK
          </button>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', alignItems: 'center', marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', fontSize: '1.2rem', fontWeight: 'bold' }}>
              HAMLE: {moves}
            </div>
            {isStarted && !isWon && (
              <button 
                className="editorial-link-btn"
                onMouseDown={() => setShowPreview(true)}
                onMouseUp={() => setShowPreview(false)}
                onMouseLeave={() => setShowPreview(false)} 
                onTouchStart={() => setShowPreview(true)}  
                onTouchEnd={() => setShowPreview(false)}
              >
                👁️ GÖRSELİ HATIRLA
              </button>
            )}
          </div>

          <div className={`puzzle-grid ${isWon ? 'won' : ''}`} style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}>
            {showPreview && (
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url("${selectedImage}")`, backgroundSize: 'cover', zIndex: 10, borderRadius: '8px' }}></div>
            )}
            {pieces.map((originalPieceId, currentIndex) => {
              const xPos = (originalPieceId % size) * (100 / (size - 1));
              const yPos = Math.floor(originalPieceId / size) * (100 / (size - 1));
              return (
                <div 
                  key={currentIndex} 
                  className={`puzzle-piece ${selectedIndex === currentIndex ? 'selected' : ''}`}
                  onClick={() => handlePieceClick(currentIndex)}
                  style={{
                    backgroundImage: `url("${selectedImage}")`,
                    backgroundSize: `${size * 100}% ${size * 100}%`,
                    backgroundPosition: `${xPos}% ${yPos}%`
                  }}
                />
              );
            })}
          </div>

          <button className="editorial-link-btn-anchor" onClick={startGame}>
            {isStarted ? 'YENİDEN KARIŞTIR ↗' : 'OYUNU BAŞLAT ↗'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoPuzzle;