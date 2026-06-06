import React, { useState, useEffect } from 'react';

function CuvalTherapy() {
  const [rubCount, setRubCount] = useState(0);
  const [isRubbing, setIsRubbing] = useState(false);

  const handleMassage = () => {
    setRubCount(prev => prev + 1);
    
    setIsRubbing(true);
    setTimeout(() => setIsRubbing(false), 150); 
  };

  const getCatReaction = () => {
    if (rubCount === 0) return "Çuval seni bekliyor. Sakince karnına dokun...";
    if (rubCount > 0 && rubCount < 10) return "Gözlerini hafifçe açtı. Devam et...";
    if (rubCount >= 10 && rubCount < 25) return "Mırrr... Doğru frekansı yakaladın!";
    if (rubCount >= 25 && rubCount < 50) return "Evet, tam orası! Gözleri tamamen kapandı...";
    if (rubCount >= 50 && rubCount < 80) return "Gerinmeye başladı. Çuvalizm felsefesi damarlarına işliyor.";
    if (rubCount >= 80 && rubCount < 100) return "Çuval şu an Nirvana'ya giden yolda. Boyut değiştiriyor!";
    if (rubCount >= 100) return "🐾 TEBRİKLER! ÇUVAL'IN EN SEVDİĞİ İNSAN OLDUN! 🐾";
  };

  const scaleRatio = Math.min(1 + (rubCount * 0.0015), 1.15); 

  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr" style={{ minHeight: '80vh' }}>
      
      <style>
        {`
          @keyframes purrShake {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(1px, 1px) rotate(0.5deg); }
            50% { transform: translate(0, 0) rotate(0eg); }
            75% { transform: translate(-1px, 1px) rotate(-0.5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .purr-active {
            animation: purrShake 0.15s linear infinite;
          }
        `}
      </style>

      <div className="container">
        
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>// STRES ATMA MERKEZİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>ÇUVAL TERAPİSİ</h1>
          <p className="editorial-subtitle">Günün yorgunluğunu atmak için Çuvalizm felsefesine katıl. Karnına tıkla ve masaj yap!</p>
        </div>

        <div className="game-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1rem' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', color: rubCount >= 100 ? 'var(--accent-dark)' : 'inherit', margin: 0, transition: 'color 0.5s', textShadow: rubCount >= 100 ? '0 0 20px rgba(84, 107, 65, 0.4)' : 'none' }}>
              {rubCount}
            </h2>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '3px', opacity: 0.5, display: 'block', marginTop: '-0.5rem' }}>
              MASAJ SKORU
            </span>
          </div>

          <div 
            onClick={handleMassage}
            // Titreşim (purr-active) sınıfı isRubbing true olduğunda eklenir
            className={isRubbing ? 'purr-active' : ''}
            style={{ 
              width: '300px', height: '300px', margin: '0 auto 3rem auto', cursor: 'pointer',
              backgroundColor: rubCount >= 100 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(84, 107, 65, 0.05)', 
              borderRadius: '50%', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: rubCount >= 100 
                ? '0 0 60px rgba(255, 215, 0, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.3)' // Nirvana Altın Haresi
                : (rubCount > 0 ? `0 0 ${rubCount}px rgba(84, 107, 65, 0.2)` : 'none'),
              transition: 'box-shadow 0.5s ease, background-color 0.5s ease, transform 0.1s ease',
              transform: `scale(${scaleRatio})`,
              userSelect: 'none', 
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            <img 
              src="/cuval.png" 
              alt="Çuval" 
              draggable="false" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: rubCount >= 100 
                  ? 'saturate(2) contrast(1.2) drop-shadow(0 0 10px gold)' 
                  : `saturate(${1 + (rubCount * 0.01)}) contrast(1.1)`, 
                transition: 'filter 0.5s ease',
                pointerEvents: 'none' 
              }} 
            />
          </div>

          <p style={{ 
            fontFamily: 'var(--font-heading)', fontSize: rubCount >= 100 ? '1.5rem' : '1.2rem', 
            color: rubCount >= 100 ? 'var(--accent-dark)' : 'inherit', 
            minHeight: '40px', fontStyle: 'italic', transition: 'all 0.3s',
            fontWeight: rubCount >= 100 ? 'bold' : 'normal',
            maxWidth: '600px', margin: '0 auto', lineHeight: '1.4'
          }}>
            {getCatReaction()}
          </p>

          {/* Sadece skor 0'dan büyükse sıfırlama butonu görünsün */}
          {rubCount > 0 && (
            <button 
              className="editorial-link-btn-anchor reset-btn" 
              onClick={() => setRubCount(0)}
              style={{ marginTop: '3rem', fontSize: '0.8rem', opacity: 0.8, padding: '0.5rem 1rem', background: 'transparent', border: '1px dashed currentColor' }}
            >
              ÇUVAL'I UYANDIR ⟲
            </button>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default CuvalTherapy;