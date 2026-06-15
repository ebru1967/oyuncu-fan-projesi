import React, { useState, useEffect } from 'react';

function AytekBulmaca() {
  // Oyun durumları: 'idle' (başlamadı), 'showing' (fotoğrafı gösteriyor), 'shuffling' (karışıyor), 'guessing' (tahmin bekleniyor), 'gameover' (yandı)
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // 3 kartımız var. targetCard: Aytek'in olduğu kartın ID'si (0, 1 veya 2)
  const [targetCard, setTargetCard] = useState(1); 
  
  // Kartların ekrandaki sırası. Örneğin [0, 1, 2] veya karışmış hali [2, 0, 1]
  const [positions, setPositions] = useState([0, 1, 2]); 
  
  // Karıştırma hızı (Skor arttıkça düşecek, yani hızlanacak)
  const [shuffleSpeed, setShuffleSpeed] = useState(500);

  // Oyunu Başlat veya Sonraki Tura Geç
  const startRound = () => {
    setGameState('showing');
    // Aytek'in fotoğrafını rastgele bir karta koy
    const newTarget = Math.floor(Math.random() * 3);
    setTargetCard(newTarget);
    setPositions([0, 1, 2]); // Pozisyonları sıfırla

    // 1.5 saniye fotoğrafı göster, sonra kapat ve karıştırmaya başla
    setTimeout(() => {
      setGameState('shuffling');
      startShuffling();
    }, 1500);
  };

  const startShuffling = () => {
    let shuffleCount = 0;
    // Skor arttıkça karıştırma sayısı da artsın (Zorluk seviyesi)
    const maxShuffles = 5 + Math.floor(score / 2); 
    
    // Hız, skor arttıkça hızlansın (Minimum 150ms'ye kadar düşsün)
    const currentSpeed = Math.max(150, 500 - (score * 30)); 
    setShuffleSpeed(currentSpeed);

    const interval = setInterval(() => {
      setPositions((prev) => {
        const newPos = [...prev];
        // Rastgele iki kartın yerini değiştir
        const idx1 = Math.floor(Math.random() * 3);
        let idx2 = Math.floor(Math.random() * 3);
        while (idx1 === idx2) {
          idx2 = Math.floor(Math.random() * 3);
        }
        const temp = newPos[idx1];
        newPos[idx1] = newPos[idx2];
        newPos[idx2] = temp;
        return newPos;
      });

      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(interval);
        setGameState('guessing');
      }
    }, currentSpeed);
  };

  const handleCardClick = (cardId) => {
    if (gameState !== 'guessing') return;

    if (cardId === targetCard) {
      // DOĞRU BİLDİ!
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) setHighScore(newScore);
      
      // Kısa bir tebrik arası, sonra oyun hızlanarak devam eder
      setGameState('showing');
      setTimeout(() => {
        startRound();
      }, 1000);
    } else {
      // YANLIŞ BİLDİ - OYUN BİTTİ
      setGameState('gameover');
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameState('idle');
  };

  return (
    <div className="game-container" style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#111', color: '#fff', borderRadius: '12px', marginTop: '2rem' }}>
      <h2 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>DİJİTAL HAFIZA OYUNU</h2>
      <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Aytek'in fotoğrafını gözlerinle takip et. Yanlış yapana kadar devam!</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <div style={{ fontSize: '1.2rem' }}>SKOR: <strong>{score}</strong></div>
        <div style={{ fontSize: '1.2rem', color: '#d4af37' }}>EN İYİ: <strong>{highScore}</strong></div>
      </div>

      {/* KARTLARIN OLDUĞU ALAN */}
      <div style={{ position: 'relative', height: '200px', width: '340px', margin: '0 auto 2rem auto' }}>
        {[0, 1, 2].map((cardId) => {
          // Kartın şu anki görsel pozisyonunu bul
          const currentPosIndex = positions.indexOf(cardId);
          
          return (
            <div
              key={cardId}
              onClick={() => handleCardClick(cardId)}
              style={{
                position: 'absolute',
                width: '100px',
                height: '140px',
                left: `${currentPosIndex * 120}px`, // 0px, 120px veya 240px
                transition: `left ${shuffleSpeed / 1000}s ease-in-out`,
                backgroundColor: '#222',
                border: '2px solid #444',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: gameState === 'guessing' ? 'pointer' : 'default',
                overflow: 'hidden',
                boxShadow: gameState === 'guessing' ? '0 0 10px rgba(212, 175, 55, 0.3)' : 'none'
              }}
            >
              {/* Sadece showing veya gameover durumundaysa ve bu kart target ise fotoğrafı göster */}
              {(gameState === 'showing' || gameState === 'gameover') && cardId === targetCard ? (
                <img 
                  src="/portreicin.jpeg" 
                  alt="Aytek" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ) : (
                <div style={{ fontSize: '3rem', opacity: 0.2 }}>?</div>
              )}
            </div>
          );
        })}
      </div>

      {/* KONTROL BUTONLARI VE MESAJLAR */}
      {gameState === 'idle' && (
        <button onClick={startRound} style={{ padding: '10px 24px', fontSize: '1.1rem', backgroundColor: '#d4af37', color: '#000', border: 'none', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
          OYUNU BAŞLAT
        </button>
      )}

      {gameState === 'shuffling' && <p style={{ color: '#d4af37', letterSpacing: '2px' }}>KARIŞTIRILIYOR...</p>}
      
      {gameState === 'guessing' && <p style={{ color: '#4caf50', fontSize: '1.2rem', fontWeight: 'bold' }}>FOTOĞRAF HANGİSİNDE?</p>}

      {gameState === 'gameover' && (
        <div className="animate-fade">
          <p style={{ color: '#f44336', fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>YANLIŞ KART!</p>
          <button onClick={resetGame} style={{ padding: '10px 24px', fontSize: '1.1rem', backgroundColor: '#333', color: '#fff', border: '1px solid #666', cursor: 'pointer', borderRadius: '4px' }}>
            YENİDEN DENE
          </button>
        </div>
      )}
    </div>
  );
}

export default AytekBulmaca;