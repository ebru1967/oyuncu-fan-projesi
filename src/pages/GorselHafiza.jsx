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
    // 1. archivePhotos içindeki 190 fotoğraftan rastgele 8 tanesini seçiyoruz
    const shuffledPool = [...archivePhotos].sort(() => Math.random() - 0.5);
    const selectedImages = shuffledPool.slice(0, 8).map(img => ({ 
      src: img.url, // Senin veritabanında 'url' olarak geçtiği için buraya eşitledik
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
    <div className="memory-container" style={{
      textAlign: 'center',
      padding: '3rem 1rem',
      backgroundColor: 'var(--bg-main)',
      color: 'var(--text-main)',
      fontFamily: 'var(--font-heading)',
      minHeight: '80vh'
    }}>
      <div className="section-header-editorial" style={{ marginBottom: '1.5rem' }}>
        <span className="archive-badge">// İNTERAKTİF ARŞİV</span>
        <h2 className="editorial-title" style={{ marginTop: '0.5rem', fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}>GÖRSEL HAFIZA</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontFamily: 'var(--font-body)', fontWeight: 'bold' }}>
        <div style={{ fontSize: '1.1rem' }}>HAMLE: <span style={{ fontSize: '1.4rem' }}>{turns}</span></div>
        <div style={{ fontSize: '1.1rem', color: 'var(--accent-dark)' }}>EŞLEŞME: <span style={{ fontSize: '1.4rem' }}>{matches}/8</span></div>
      </div>

      <button onClick={shuffleCards} className="editorial-link" style={{ padding: '0.6rem 1.5rem', border: '1px solid var(--accent-dark)', backgroundColor: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold', marginBottom: '2rem' }}>
        YENİDEN BAŞLAT
      </button>

      {isWin && (
        <div className="animate-fade" style={{ marginBottom: '2rem', color: 'var(--accent-dark)', animation: 'pulse 1.5s infinite' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>TEBRİKLER! GÖRSEL HAFIZAN MÜKEMMEL.</h3>
          <p>Tüm arşivi {turns} hamlede başarıyla eşleştirdin.</p>
        </div>
      )}

      {/* KARTLARIN GRID YAPISI */}
      <div className="memory-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 'clamp(10px, 2vw, 20px)',
        maxWidth: '800px',
        margin: '0 auto',
        perspective: '1000px'
      }}>
        {cards.map((card) => {
          const isFlipped = card === choiceOne || card === choiceTwo || card.matched;
          return (
            <div 
              className={`memory-card ${isFlipped ? 'flipped' : ''} ${card.isJustMatched ? 'matched-pulse' : ''} ${card.isShake ? 'mismatch-shake' : ''}`} 
              key={card.id} 
              onClick={() => handleChoice(card)}
              style={{ position: 'relative', aspectRatio: '3/4', cursor: disabled ? 'default' : 'pointer' }}
            >
              <div className="card-inner" style={{
                position: 'absolute', width: '100%', height: '100%', transition: 'transform 0.6s', transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}>
                {/* ÖN YÜZ (FOTOĞRAF) */}
                <div className="card-front" style={{
                  position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)', borderRadius: '8px', overflow: 'hidden', border: '2px solid var(--accent-dark)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <img src={card.src} alt="Aytek Arşiv" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  {card.matched && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}></div>}
                </div>

                {/* ARKA YÜZ (KAPALI HALİ) */}
                <div className="card-back" style={{
                  position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden',
                  backgroundColor: 'var(--bg-card)', border: '2px solid var(--accent-dark)', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ width: '2px', height: '40%', backgroundColor: 'var(--accent-dark)', opacity: 0.3 }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ANİMASYON CSS KODLARI */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 500px) {
          .memory-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        
        .matched-pulse {
          animation: pulseMatch 0.5s ease-in-out;
        }

        .mismatch-shake {
          animation: shakeError 0.5s ease-in-out;
        }

        @keyframes pulseMatch {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
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
      `}} />
    </div>
  );
}

export default GorselHafiza;