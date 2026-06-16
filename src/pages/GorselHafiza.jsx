import React, { useState, useEffect } from 'react';
import { archivePhotos } from '../data/photoData'; 

function GorselHafiza() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [matches, setMatches] = useState(0);
  const [isWin, setIsWin] = useState(false);

  // Kartları karıştır ve oyunu başlat
  const shuffleCards = () => {
    // 1. archivePhotos içindeki fotoğraflardan rastgele 8 tanesini seçiyoruz
    const shuffledPool = [...archivePhotos].sort(() => Math.random() - 0.5);
    const selectedImages = shuffledPool.slice(0, 8).map(img => ({ 
      src: img.url, 
      matched: false 
    }));

    // 2. Seçilen 8 fotoğrafı ikiyle çarp (16 kart yap) ve tekrar karıştır
    const shuffledCards = [...selectedImages, ...selectedImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setMatches(0);
    setIsWin(false);
  };

  // Oyun sayfaya ilk girildiğinde başlasın
  useEffect(() => {
    shuffleCards();
  }, []);

  // Kart seçimi
  const handleChoice = (card) => {
    if (!disabled && !card.matched && card.id !== choiceOne?.id) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }
  };

  // İki kart seçildiğinde eşleşmeyi kontrol et
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        // EŞLEŞTİ!
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true, isJustMatched: true };
            }
            return card;
          });
        });
        setMatches((prev) => prev + 1);
        setTimeout(() => resetTurn(), 1000);
      } else {
        // EŞLEŞMEDİ!
        setCards((prevCards) => {
          return prevCards.map(card => {
            if (card.id === choiceOne.id || card.id === choiceTwo.id) {
              return { ...card, isShake: true };
            }
            return card;
          });
        });

        setTimeout(() => resetTurn(), 1200);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Turu sıfırla ve animasyon sınıflarını temizle
  const resetTurn = () => {
    setCards(prevCards => prevCards.map(card => ({ ...card, isJustMatched: false, isShake: false })));
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Kazanma Durumunu Kontrol Et
  useEffect(() => {
    if (matches === 8) {
      setTimeout(() => {
        setIsWin(true);
      }, 500);
    }
  }, [matches]);

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ paddingBottom: '4rem' }} lang="tr">
      
      {/* ÖZEL CSS STİLLERİ */}
      <style>{`
        .memory-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(10px, 2vw, 20px);
          max-width: 800px;
          margin: 0 auto;
          perspective: 1000px;
        }

        @media (max-width: 500px) {
          .memory-grid { gap: 8px; }
        }

        .memory-card {
          position: relative;
          aspect-ratio: 3/4;
          cursor: pointer;
        }

        .memory-card.flipped .card-inner { transform: rotateY(180deg); }
        .memory-card.matched-pulse { animation: pulseMatch 0.5s ease-in-out; }
        .memory-card.mismatch-shake { animation: shakeError 0.5s ease-in-out; }

        .card-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .card-front {
          transform: rotateY(180deg);
          overflow: hidden;
          border: 2px solid var(--accent-dark);
        }

        .card-back {
          background-color: var(--bg-card);
          border: 2px solid var(--accent-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        
        .memory-card:hover .card-back {
          background-color: rgba(84, 107, 65, 0.05);
        }

        @keyframes pulseMatch {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); z-index: 10; box-shadow: 0 0 20px var(--accent-dark); }
          100% { transform: scale(1); }
        }

        @keyframes shakeError {
          0% { transform: translateX(0); }
          20% { transform: translateX(-10px); }
          40% { transform: translateX(10px); }
          60% { transform: translateX(-10px); }
          80% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="container">
        
        {/* HİZALAMA DÜZELTİLDİ: paddingTop: '0', marginTop: '-3rem' EKLENDİ */}
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// İNTERAKTİF ARŞİV</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>GÖRSEL HAFIZA</h1>
          <p className="editorial-subtitle">Tüm kartları en az hamleyle eşleştirerek arşivi tamamlayın.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>HAMLE: <span style={{ fontSize: '1.8rem' }}>{turns}</span></div>
            <div style={{ fontSize: '1.2rem', color: 'var(--accent-dark)' }}>EŞLEŞME: <span style={{ fontSize: '1.8rem' }}>{matches}/8</span></div>
          </div>

          {isWin && (
            <div className="animate-fade" style={{ marginBottom: '2rem', color: 'var(--accent-dark)', textAlign: 'center', backgroundColor: 'rgba(84, 107, 65, 0.05)', padding: '1rem 2rem', borderRadius: '8px', border: '1px solid var(--accent-dark)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>TEBRİKLER! GÖRSEL HAFIZAN MÜKEMMEL.</h3>
              <p style={{ margin: 0 }}>Tüm arşivi <strong>{turns}</strong> hamlede başarıyla eşleştirdin.</p>
            </div>
          )}

          {/* KARTLARIN GRID YAPISI */}
          <div className="memory-grid" style={{ width: '100%', marginBottom: '3rem' }}>
            {cards.map((card) => {
              const isFlipped = card === choiceOne || card === choiceTwo || card.matched;
              return (
                <div 
                  className={`memory-card ${isFlipped ? 'flipped' : ''} ${card.isJustMatched ? 'matched-pulse' : ''} ${card.isShake ? 'mismatch-shake' : ''}`} 
                  key={card.id} 
                  onClick={() => handleChoice(card)}
                  style={{ cursor: disabled || card.matched ? 'default' : 'pointer' }}
                >
                  <div className="card-inner">
                    {/* ÖN YÜZ (FOTOĞRAF) */}
                    <div className="card-front">
                      <img src={card.src} alt="Aytek Arşiv" style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable="false" />
                      {card.matched && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>}
                    </div>

                    {/* ARKA YÜZ (KAPALI HALİ) */}
                    <div className="card-back">
                      <div style={{ width: '3px', height: '40%', backgroundColor: 'var(--accent-dark)', opacity: 0.3, borderRadius: '5px' }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={shuffleCards} className="editorial-link-btn-anchor reset-btn">
            YENİDEN BAŞLAT ⟲
          </button>

        </div>
      </div>
    </div>
  );
}

export default GorselHafiza;