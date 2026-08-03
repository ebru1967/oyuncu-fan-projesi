import React, { useState, useMemo, useRef, useEffect } from 'react';

const MILESTONES = [
  {
    year: 2023,
    title: 'İSTANBUL FİLM FESTİVALİ SEÇKİSİ',
    description: (
      <>
        Zeynep Köprülü'nün yönettiği ve Aytek Şayan'ın başrollerinden birini paylaştığı{' '}
        <strong>"Su Yüzü"</strong> (Sinema Filmi), 42. İstanbul Film Festivali'nin Ulusal
        Yarışma bölümünde dünya prömiyerini yaparak resmi seçkiye dahil edilmiştir.
      </>
    ),
    tag: 'FESTİVAL / SİNEMA KANONU',
  },
  {
    year: 2021,
    title: 'AKADEMİK ONUR: LİSANSÜSTÜ DERECE',
    description: (
      <>
        Haliç Üniversitesi Lisansüstü Eğitim Enstitüsü Tiyatro Anasanat Dalı bünyesinde
        yürüttüğü <strong>Oyunculuk üzerine Tezli Yüksek Lisans</strong> eğitimini
        başarıyla tamamlayarak uzmanlık derecesini almıştır.
      </>
    ),
    tag: 'AKADEMİ / TEORİK UZMANLIK',
  },
  {
    year: 2019,
    title: 'ULUSLARARASI TEMSİL VE ENSTİTÜ KABULÜ',
    description: (
      <>
        Polonya'daki prestijli <strong>Grotowski Enstitüsü</strong> partnerliğinde
        yürütülen ve Teatr Andra ekibi tarafından hayata geçirilen "Salto" projesinin
        fiziksel tiyatro araştırmalarına ana kadroda dahil olmuştur.
      </>
    ),
    tag: 'AVANGART / FİZİKSEL TİYATRO',
  },
];

function Awards() {
  const [sortOrder, setSortOrder] = useState('desc'); // desc = yeniden eskiye (varsayılan sıra)
  const [visibleSet, setVisibleSet] = useState(() => new Set());
  const [progress, setProgress] = useState(0);

  const milestoneRefs = useRef([]);
  const timelineRef = useRef(null);

  const sortedMilestones = useMemo(() => {
    const arr = [...MILESTONES];
    arr.sort((a, b) => (sortOrder === 'desc' ? b.year - a.year : a.year - b.year));
    return arr;
  }, [sortOrder]);

  // Kaydırınca kilometre taşlarının belirmesi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleSet((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    milestoneRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sortOrder]);

  // Zaman çizgisi ilerleme çubuğu (scroll'a göre dolan hat)
  useEffect(() => {
    let ticking = false;

    function updateProgress() {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const raw = (viewportH * 0.6 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, raw)) * 100);
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sortOrder]);

  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr">
      
      <style>{`
        .trophy-card {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease;
          margin-bottom: 5rem;
        }
        
        .trophy-card:hover {
          transform: translateY(-3px);
        }

        .award-info-col {
          display: flex;
          gap: 1.5rem;
          flex: 1;
        }

        .award-photo-frame {
          width: 180px;
          height: 180px;
          flex-shrink: 0;
          background-color: var(--bg-card);
          border: 1px dashed var(--accent-dark);
          padding: 0.5rem;
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
          transform: rotate(3deg);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .trophy-card:hover .award-photo-frame {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 8px 8px 0px rgba(0,0,0,0.12);
        }

        .award-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(30%) grayscale(20%);
          transition: filter 0.4s ease;
        }

        .trophy-card:hover .award-photo-frame img {
          filter: sepia(0%) grayscale(0%);
        }

        /* --- SİCİLE İŞLENDİ ROZETİ --- */
        .verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent-dark);
          background: rgba(84, 107, 65, 0.08);
          border: 1px solid rgba(84, 107, 65, 0.25);
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          margin-top: 0.8rem;
        }

        /* --- MİLESTONE KONTROL ŞERİDİ --- */
        .milestones-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .milestones-count {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          opacity: 0.6;
          letter-spacing: 1px;
        }

        .sort-toggle-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          background: transparent;
          color: var(--accent-dark);
          border: 1px solid var(--accent-dark);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .sort-toggle-btn:hover {
          background: var(--accent-dark);
          color: var(--bg-main);
        }

        /* --- KARİYER TİMELİNE (MİLESTONES) STİLLERİ --- */
        .milestones-container {
          margin-top: 2rem;
          position: relative;
          padding-left: 2rem;
          border-left: 2px dashed rgba(84, 107, 65, 0.3);
        }

        /* Scroll ilerleme çubuğu — dashed çizginin üzerine dolan katı hat */
        .milestones-progress-fill {
          position: absolute;
          left: -2px;
          top: 0;
          width: 2px;
          background: var(--accent-dark);
          transition: height 0.1s linear;
          z-index: 1;
        }

        .milestone-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 1.5rem;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .milestone-item.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        /* Daire İkonu */
        .milestone-item::before {
          content: '';
          position: absolute;
          left: -2.65rem;
          top: 0.2rem;
          width: 12px;
          height: 12px;
          background: var(--bg-main);
          border: 2px solid var(--accent-dark);
          border-radius: 50%;
          z-index: 2;
        }

        .milestone-year {
          font-family: 'Space Mono', monospace;
          font-weight: bold;
          color: var(--accent-dark);
          font-size: 1.1rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .milestone-content h4 {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin: 0 0 0.5rem 0;
          color: var(--text-main);
        }

        .milestone-content p {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
          margin: 0;
        }

        .milestone-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-family: 'Space Mono', monospace;
          background: rgba(84, 107, 65, 0.1);
          padding: 0.1rem 0.5rem;
          margin-top: 0.5rem;
          border-radius: 4px;
          color: var(--accent-dark);
        }

        @media (prefers-reduced-motion: reduce) {
          .milestone-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        @media (max-width: 600px) {
          .trophy-card {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .award-photo-frame {
            width: 100%;
            max-width: 250px;
            height: 250px;
            margin: 0 auto;
            transform: rotate(0deg);
          }
          .milestones-container {
            padding-left: 1.5rem;
          }
          .milestones-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="container">
        
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem' }}>
          <span className="archive-badge">// SANAT & KARİYER SİCİLİ</span>
          <h1 className="editorial-title">ÖDÜLLER</h1>
          <p className="editorial-subtitle">Sektörel ödül törenleri, akademi başarıları ve jüri tescil nedenleri.</p>
        </div>

        <div className="inventory-list-full">
          
          {/* ANA ÖDÜL KARTI */}
          <div className="record-card trophy-card">
            <div className="award-info-col">
              <div className="record-year">2025</div>
              <div className="record-details">
                <h4 className="record-title" style={{ textTransform: 'none' }}>EN İYİ ERKEK OYUNCU</h4>
                <span className="record-role" style={{ textTransform: 'none' }}>"AYNA" TİYATRO OYUNU (DASDAS)</span>
                <span className="record-meta" style={{ textTransform: 'none' }}>25. DİREKLERARASI SEYİRCİ ÖDÜLLERİ</span>
                
                <div className="award-reason" style={{ marginTop: '1rem', lineHeight: '1.6', opacity: '0.9' }}>
                  <strong>ÖDÜL NEDENİ:</strong> "DasDas'ta sahnelenen 'Ayna' adlı tiyatro oyunundaki üstün performansı, sahne hakimiyeti ve karaktere kattığı derinlik sebebiyle seyirciler tarafından bu ödüle layık görülmüştür."
                </div>
{/* ---
                <span className="verified-tag"></span>  sonradan eklenebilecek cümle --- */}
              </div>
            </div>

            <div className="award-photo-frame">
              <img src="/aynaodulu.jpeg" alt="25. Direklerarası Ödül Töreni" />
            </div>
          </div>

          {/* --- KARİYER KİLOMETRE TAŞLARI BÖLÜMÜ --- */}
          <div style={{ marginTop: '4rem' }}>
            <span className="archive-badge" style={{ marginBottom: '2rem', display: 'inline-block' }}>
              // KARİYER KİLOMETRE TAŞLARI & ÖNEMLİ SEÇKİLER
            </span>

            <div className="milestones-toolbar">
              <span className="milestones-count">
                {MILESTONES.length} KİLOMETRE TAŞI KAYITLI
              </span>
              <button
                type="button"
                className="sort-toggle-btn"
                onClick={() => setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'))}
              >
                {sortOrder === 'desc' ? '↓ ESKİDEN YENİYE SIRALA' : '↑ YENİDEN ESKİYE SIRALA'}
              </button>
            </div>

            <div className="milestones-container" ref={timelineRef}>
              <div
                className="milestones-progress-fill"
                style={{ height: `${progress}%` }}
              />

              {sortedMilestones.map((milestone, index) => (
                <div
                  key={milestone.year + milestone.title}
                  className={`milestone-item ${visibleSet.has(index) ? 'in-view' : ''}`}
                  data-index={index}
                  ref={(el) => (milestoneRefs.current[index] = el)}
                >
                  <span className="milestone-year">{milestone.year}</span>
                  <div className="milestone-content">
                    <h4>{milestone.title}</h4>
                    <p>{milestone.description}</p>
                    <span className="milestone-tag">{milestone.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* -------------------------------------- */}

        </div>
      </div>
    </div>
  );
}

export default Awards;