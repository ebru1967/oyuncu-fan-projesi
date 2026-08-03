import React, { useState, useRef, useEffect, useCallback } from 'react';

// --- Çuval'ın tepki havuzu: her seviyede birden fazla cümle var,
// seviyeye girerken rastgele biri seçiliyor ki tekrar oynanışta tek düze olmasın.
const REACTION_POOL = {
  0: ["Çuval seni bekliyor. Sakince karnına dokun..."],
  low: [
    "Gözlerini hafifçe açtı. Devam et...",
    "Kulakları hafifçe kıpırdadı. İlgisini çektin.",
    "Bir gözünü araladı, seni tartıyor."
  ],
  mid: [
    "Mırrr... Doğru frekansı yakaladın!",
    "Titreşim başladı. Tam kararında.",
    "Pençeleri hafifçe açılıp kapanıyor, iyi işaret."
  ],
  high: [
    "Evet, tam orası! Gözleri tamamen kapandı...",
    "Tüyleri diken diken oldu, memnuniyetten.",
    "Karnı ritmik olarak inip kalkıyor."
  ],
  veryHigh: [
    "Gerinmeye başladı. Çuvalizm felsefesi damarlarına işliyor.",
    "Patileri havada, tam teslimiyet hali.",
    "Mırıltısı artık odanın her yerinden duyuluyor."
  ],
  almostThere: [
    "Çuval şu an Nirvana'ya giden yolda. Boyut değiştiriyor!",
    "Gerçeklikle bağı zayıflıyor, sınırın eşiğinde.",
    "Bir ayağı bu dünyada değil artık."
  ],
  done: "🐾 TEBRİKLER! ÇUVAL'IN EN SEVDİĞİ İNSAN OLDUN! 🐾"
};

const MILESTONES = {
  10: "Seviye atladın: Güvenilir Dost",
  25: "Seviye atladın: Mırıltı Ustası",
  50: "Seviye atladın: Çuvalizm Çırağı",
  80: "Seviye atladın: Nirvana Kapıcısı",
  100: "En yüksek seviye: Çuval'ın Seçilmişi"
};

function getTierKey(count) {
  if (count === 0) return 0;
  if (count < 10) return 'low';
  if (count < 25) return 'mid';
  if (count < 50) return 'high';
  if (count < 80) return 'veryHigh';
  if (count < 100) return 'almostThere';
  return 'done';
}

function pickPhrase(tierKey) {
  const pool = REACTION_POOL[tierKey];
  if (typeof pool === 'string') return pool;
  return pool[Math.floor(Math.random() * pool.length)];
}

const IDLE_MS = 4000;

function CuvalTherapy() {
  const [rubCount, setRubCount] = useState(0);
  const [isRubbing, setIsRubbing] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [phrase, setPhrase] = useState(pickPhrase(0));
  const [particles, setParticles] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [toast, setToast] = useState(null);

  const tierRef = useRef(0);
  const idleTimerRef = useRef(null);
  const particleIdRef = useRef(0);
  const toastTimerRef = useRef(null);

  // Sekme değiştiğinde yeni cümle seç
  useEffect(() => {
    const tierKey = getTierKey(rubCount);
    if (tierKey !== tierRef.current) {
      tierRef.current = tierKey;
      setPhrase(pickPhrase(tierKey));
    }
  }, [rubCount]);

  // Kilometre taşı bildirimi
  useEffect(() => {
    if (MILESTONES[rubCount]) {
      setToast(MILESTONES[rubCount]);
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = setTimeout(() => setToast(null), 2200);
    }
    if (rubCount === 100) {
      const pieces = Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.4,
        duration: 1.4 + Math.random() * 0.8,
        rotate: Math.random() * 360,
        emoji: i % 2 === 0 ? '🐾' : '✨'
      }));
      setConfetti(pieces);
      setTimeout(() => setConfetti([]), 2600);
    }
  }, [rubCount]);

  // Boşta kalma tespiti: birkaç saniye dokunulmazsa Çuval uyukluyor
  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), IDLE_MS);
  }, []);

  useEffect(() => {
    resetIdleTimer();
    return () => clearTimeout(idleTimerRef.current);
  }, [resetIdleTimer]);

  useEffect(() => () => clearTimeout(toastTimerRef.current), []);

  const handleMassage = (e) => {
    setRubCount(prev => prev + 1);
    setIsRubbing(true);
    setTimeout(() => setIsRubbing(false), 150);
    resetIdleTimer();

    // Tıklanan noktada küçük bir pati/kalp parçacığı belirsin
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = particleIdRef.current++;
    const emoji = rubCount >= 100 ? '✨' : (Math.random() > 0.5 ? '🐾' : '💗');
    const drift = (Math.random() - 0.5) * 40;
    setParticles(prev => [...prev, { id, x, y, drift, emoji }]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== id));
    }, 700);
  };

  const displayPhrase = isIdle && rubCount > 0 && rubCount < 100
    ? "Çuval uyukluyor... dokunmaya devam et 💤"
    : phrase;

  const scaleRatio = Math.min(1 + (rubCount * 0.0015), 1.15);

  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr" style={{ minHeight: '80vh', position: 'relative' }}>

      <style>
        {`
          @keyframes purrShake {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(1.5px, 1.5px) rotate(0.5deg); }
            50% { transform: translate(0, 0) rotate(0deg); }
            75% { transform: translate(-1.5px, 1.5px) rotate(-0.5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .purr-active img {
            animation: purrShake 0.15s linear infinite;
          }
          @keyframes floatUpFade {
            0% { transform: translate(0, 0) scale(0.8); opacity: 1; }
            100% { transform: translate(var(--drift, 0px), -70px) scale(1.2); opacity: 0; }
          }
          .rub-particle {
            position: absolute;
            pointer-events: none;
            font-size: 1.4rem;
            animation: floatUpFade 0.7s ease-out forwards;
            z-index: 5;
          }
          @keyframes confettiFall {
            0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(90vh) rotate(360deg); opacity: 0; }
          }
          .confetti-piece {
            position: fixed;
            top: 0;
            font-size: 1.6rem;
            pointer-events: none;
            z-index: 50;
            animation-name: confettiFall;
            animation-timing-function: ease-in;
            animation-fill-mode: forwards;
          }
          @keyframes toastSlide {
            0% { transform: translate(-50%, -16px); opacity: 0; }
            15% { transform: translate(-50%, 0); opacity: 1; }
            85% { transform: translate(-50%, 0); opacity: 1; }
            100% { transform: translate(-50%, -16px); opacity: 0; }
          }
          .milestone-toast {
            position: absolute;
            top: 0.5rem;
            left: 50%;
            background: var(--accent-dark, #333);
            color: #fff;
            padding: 0.5rem 1.2rem;
            border-radius: 999px;
            font-size: 0.85rem;
            font-weight: bold;
            letter-spacing: 0.5px;
            animation: toastSlide 2.2s ease forwards;
            z-index: 20;
            white-space: nowrap;
          }
          @keyframes breathe {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.7; }
          }
          .sleepy-zzz {
            animation: breathe 1.6s ease-in-out infinite;
          }
        `}
      </style>

      {toast && <div className="milestone-toast">🏆 {toast}</div>}

      {confetti.map(c => (
        <span
          key={c.id}
          className="confetti-piece"
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            transform: `rotate(${c.rotate}deg)`
          }}
        >
          {c.emoji}
        </span>
      ))}

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
            className={isRubbing ? 'purr-active' : ''}
            style={{
              width: 'min(300px, 70vw)',
              aspectRatio: '1 / 1',
              margin: '0 auto 3rem auto', cursor: 'pointer',
              position: 'relative',
              backgroundColor: rubCount >= 100 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(84, 107, 65, 0.05)',
              borderRadius: '50%', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: rubCount >= 100
                ? '0 0 60px rgba(255, 215, 0, 0.5), inset 0 0 20px rgba(255, 215, 0, 0.3)'
                : (rubCount > 0 ? `0 0 ${rubCount}px rgba(84, 107, 65, 0.2)` : 'none'),
              transition: 'box-shadow 0.5s ease, background-color 0.5s ease, transform 0.1s ease',
              transform: `scale(${scaleRatio}) ${isIdle && rubCount > 0 ? 'translateY(2px)' : ''}`,
              userSelect: 'none',
              WebkitTapHighlightColor: 'transparent',
              touchAction: 'manipulation',
              filter: isIdle && rubCount > 0 && rubCount < 100 ? 'grayscale(0.15) brightness(0.97)' : 'none'
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

            {isIdle && rubCount > 0 && rubCount < 100 && (
              <span
                className="sleepy-zzz"
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '14%',
                  fontSize: '1.6rem',
                  pointerEvents: 'none'
                }}
              >
                💤
              </span>
            )}

            {particles.map(p => (
              <span
                key={p.id}
                className="rub-particle"
                style={{ left: p.x, top: p.y, '--drift': `${p.drift}px` }}
              >
                {p.emoji}
              </span>
            ))}
          </div>

          <p style={{
            fontFamily: 'var(--font-heading)', fontSize: rubCount >= 100 ? '1.5rem' : '1.2rem',
            color: rubCount >= 100 ? 'var(--accent-dark)' : 'inherit',
            minHeight: '40px', fontStyle: 'italic', transition: 'all 0.3s',
            fontWeight: rubCount >= 100 ? 'bold' : 'normal',
            maxWidth: '600px', margin: '0 auto', lineHeight: '1.4'
          }}>
            {displayPhrase}
          </p>

          {rubCount > 0 && (
            <button
              className="editorial-link-btn-anchor reset-btn"
              onClick={() => {
                setRubCount(0);
                tierRef.current = 0;
                setPhrase(pickPhrase(0));
                setIsIdle(false);
              }}
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
