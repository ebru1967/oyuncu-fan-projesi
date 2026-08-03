import React, { useState, useEffect, useRef } from 'react';
import { archivePhotos } from '../data/photoData';

const BEST_KEY_PREFIX = 'aytek-sayan-puzzle-best-';
const HINTS_PER_GAME = 2;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function PhotoPuzzle() {
  const [size, setSize] = useState(3);
  const [pieces, setPieces] = useState([...Array(9).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isWon, setIsWon] = useState(false);
  
  const [moves, setMoves] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  // Süre sayacı
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(null);

  // İpucu hakları
  const [hintsLeft, setHintsLeft] = useState(HINTS_PER_GAME);

  // En iyi rekor (zorluk bazında)
  const [bestRecord, setBestRecord] = useState(null);

  const defaultImage = archivePhotos && archivePhotos.length > 0 
    ? archivePhotos[0].url 
    : ""; 

  const [selectedImage, setSelectedImage] = useState(defaultImage);

  // Süre sayacını yönet
  useEffect(() => {
    if (isStarted && !isWon) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isStarted, isWon]);

  // Zorluk değiştikçe o zorluğun rekorunu yükle
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`${BEST_KEY_PREFIX}${size}`);
      setBestRecord(stored ? JSON.parse(stored) : null);
    } catch (e) {
      setBestRecord(null);
    }
  }, [size]);

  const saveBestRecordIfNeeded = (finalMoves, finalSeconds) => {
    try {
      const key = `${BEST_KEY_PREFIX}${size}`;
      const stored = localStorage.getItem(key);
      const current = stored ? JSON.parse(stored) : null;

      const isBetter =
        !current ||
        finalMoves < current.moves ||
        (finalMoves === current.moves && finalSeconds < current.seconds);

      if (isBetter) {
        const record = { moves: finalMoves, seconds: finalSeconds };
        localStorage.setItem(key, JSON.stringify(record));
        setBestRecord(record);
        return true;
      }
    } catch (e) {
      // localStorage erişilemezse sessizce geç
    }
    return false;
  };

  const [isNewBest, setIsNewBest] = useState(false);

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
    setSeconds(0);
    setHintsLeft(HINTS_PER_GAME);
    setIsNewBest(false);
  };

  const startGame = () => {
    const totalPieces = size * size;
    let shuffled = [...Array(totalPieces).keys()].sort(() => Math.random() - 0.5);
    setPieces(shuffled);
    setIsStarted(true);
    setIsWon(false);
    setSelectedIndex(null);
    setMoves(0); 
    setSeconds(0);
    setHintsLeft(HINTS_PER_GAME);
    setIsNewBest(false);
  };

  const handlePieceClick = (index) => {
    if (!isStarted || isWon) return;

    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else if (selectedIndex === index) {
      // Aynı parçaya tekrar tıklanırsa: hamle harcamadan seçimi iptal et
      setSelectedIndex(null);
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
        const gotNewBest = saveBestRecordIfNeeded(moves + 1, seconds);
        setIsNewBest(gotNewBest);
      }
    }
  };

  // İpucu: rastgele yanlış konumdaki bir parçayı doğru yerine yerleştirir
  const useHint = () => {
    if (hintsLeft <= 0 || !isStarted || isWon) return;

    const misplacedIndices = pieces
      .map((val, idx) => (val !== idx ? idx : null))
      .filter((idx) => idx !== null);

    if (misplacedIndices.length === 0) return;

    // Doğru yere ait parçanın nerede olduğunu bulup, bir tanesini yerine koy
    const targetIndex = misplacedIndices[Math.floor(Math.random() * misplacedIndices.length)];
    const currentHolderIndex = pieces.indexOf(targetIndex);

    const newPieces = [...pieces];
    const temp = newPieces[targetIndex];
    newPieces[targetIndex] = newPieces[currentHolderIndex];
    newPieces[currentHolderIndex] = temp;

    setPieces(newPieces);
    setHintsLeft((prev) => prev - 1);
    setSelectedIndex(null);

    if (newPieces.every((val, i) => val === i)) {
      setIsWon(true);
      setIsStarted(false);
      const gotNewBest = saveBestRecordIfNeeded(moves, seconds);
      setIsNewBest(gotNewBest);
    }
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ paddingBottom: '4rem' }} lang="tr">
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
          position: relative;
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
          z-index: 2;
        }

        @keyframes winPulse {
          0% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
          50% { box-shadow: 0 0 40px rgba(84, 107, 65, 0.8); }
          100% { box-shadow: 0 0 0 rgba(84, 107, 65, 0.4); }
        }
        .puzzle-grid.won { animation: winPulse 2s infinite; gap: 0px; }
        .puzzle-grid.won .puzzle-piece { border: none; }

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
        .hint-btn:active { background: var(--accent-dark); color: #fff; }

        .expert-hint-btn {
          background: transparent;
          border: 1px dashed var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.5rem 1.2rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s;
        }
        .expert-hint-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .expert-hint-btn:not(:disabled):hover {
          background: var(--accent-dark);
          color: #fff;
        }

        .puzzle-timer {
          font-family: 'Space Mono', monospace;
        }

        .best-record-line {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          opacity: 0.6;
          margin-top: 0.3rem;
        }

        .new-best-badge {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          background: #fff;
          color: var(--accent-dark);
          padding: 0.2rem 0.7rem;
          border-radius: 4px;
          margin-left: 0.6rem;
        }
      `}</style>

      <div className="container">
        
        {/* HİZALAMA DÜZELTİLDİ: Diğer sayfalarla aynı hizada */}
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// RESTORASYON MERKEZİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>ARŞİV PUZZLE</h1>
          <p className="editorial-subtitle">Dağılan kareleri sırasıyla seçip yer değiştirerek gerçek görseli ortaya çıkar.</p>
        </div>

        <div className="game-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
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
                  setSeconds(0);
                  setHintsLeft(HINTS_PER_GAME);
                  setIsNewBest(false);
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

          {bestRecord && (
            <div className="best-record-line">
              BU ZORLUKTAKİ EN İYİ SİCİL: {bestRecord.moves} HAMLE · {formatTime(bestRecord.seconds)}
            </div>
          )}

          <div style={{ margin: '1rem 0' }}>
            <button 
              onClick={pickRandomPhoto}
              style={{
                backgroundColor: 'var(--bg-main)', color: 'var(--accent-dark)', border: '2px dashed var(--accent-dark)',
                padding: '0.8rem 2rem', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 'bold',
                cursor: 'pointer', borderRadius: '4px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}
              onMouseOver={(e) => {e.currentTarget.style.background = 'rgba(84, 107, 65, 0.1)'}}
              onMouseOut={(e) => {e.currentTarget.style.background = 'var(--bg-main)'}}
            >
              🎲 ARŞİVDEN RASTGELE GÖRSEL ÇEK
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
              <div style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                HAMLE: <span style={{ fontSize: '1.5rem' }}>{moves}</span>
              </div>
              <div className="puzzle-timer" style={{ color: 'var(--accent-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                ⏱ {formatTime(seconds)}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {isStarted && !isWon && (
                <>
                  <button
                    className="expert-hint-btn"
                    onClick={useHint}
                    disabled={hintsLeft <= 0}
                    title="Bir parçayı doğru yerine otomatik yerleştirir"
                  >
                    🛠️ UZMAN MÜDAHALESİ ({hintsLeft})
                  </button>
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
                </>
              )}
            </div>
          </div>

          {isWon && (
            <div className="game-message success" style={{ margin: '1rem 0', width: '100%', maxWidth: '600px', backgroundColor: 'var(--accent-dark)', color: '#fff', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
              <strong>TEBRİKLER! GÖRSELİ {moves} HAMLEDE, {formatTime(seconds)} SÜREDE BAŞARIYLA RESTORE ETTİN.</strong>
              {isNewBest && <span className="new-best-badge">🏆 YENİ REKOR</span>}
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
            {isStarted ? 'YENİDEN KARIŞTIR ⟲' : 'OYUNU BAŞLAT ↗'}
          </button>
          
          <span style={{ marginTop: '1.5rem', fontSize: '0.75rem', opacity: 0.5, fontFamily: 'var(--font-heading)', maxWidth: '500px', textAlign: 'center', display: 'inline-block' }}>
            NASIL OYNANIR: Yerini değiştirmek istediğin parçaya tıkla, ardından geçeceği yere tıkla. Aynı parçaya tekrar tıklarsan seçim iptal olur, hamle sayılmaz. En az hamle ve en kısa sürede görseli tamamla. Unutursan "Görseli Hatırla" butonuna basılı tutabilirsin, sıkışırsan "Uzman Müdahalesi" hakkını kullanabilirsin.
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default PhotoPuzzle;