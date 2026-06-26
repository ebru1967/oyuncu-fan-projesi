import React from 'react';

function Awards() {
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

        /* --- YENİ: KARİYER TİMELİNE (MİLESTONES) STİLLERİ --- */
        .milestones-container {
          margin-top: 2rem;
          position: relative;
          padding-left: 2rem;
          border-left: 2px dashed rgba(84, 107, 65, 0.3);
        }

        .milestone-item {
          position: relative;
          margin-bottom: 3rem;
          padding-left: 1.5rem;
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

            <div className="milestones-container">
              
              {/* Milestone 1: Su Yüzü */}
              <div className="milestone-item">
                <span className="milestone-year">2023</span>
                <div className="milestone-content">
                  <h4>İSTANBUL FİLM FESTİVALİ SEÇKİSİ</h4>
                  <p>
                    Zeynep Köprülü'nün yönettiği ve Aytek Şayan'ın başrollerinden birini paylaştığı <strong>"Su Yüzü"</strong> (Sinema Filmi), 42. İstanbul Film Festivali'nin Ulusal Yarışma bölümünde dünya prömiyerini yaparak resmi seçkiye dahil edilmiştir.
                  </p>
                  <span className="milestone-tag">FESTİVAL / SİNEMA KANONU</span>
                </div>
              </div>

              {/* Milestone 2: Yüksek Lisans */}
              <div className="milestone-item">
                <span className="milestone-year">2021</span>
                <div className="milestone-content">
                  <h4>AKADEMİK ONUR: LİSANSÜSTÜ DERECE</h4>
                  <p>
                    Haliç Üniversitesi Lisansüstü Eğitim Enstitüsü Tiyatro Anasanat Dalı bünyesinde yürüttüğü <strong>Oyunculuk üzerine Tezli Yüksek Lisans</strong> eğitimini başarıyla tamamlayarak uzmanlık derecesini almıştır.
                  </p>
                  <span className="milestone-tag">AKADEMİ / TEORİK UZMANLIK</span>
                </div>
              </div>

              {/* Milestone 3: Salto & Grotowski */}
              <div className="milestone-item">
                <span className="milestone-year">2019</span>
                <div className="milestone-content">
                  <h4>ULUSLARARASI TEMSİL VE ENSTİTÜ KABULÜ</h4>
                  <p>
                    Polonya'daki prestijli <strong>Grotowski Enstitüsü</strong> partnerliğinde yürütülen ve Teatr Andra ekibi tarafından hayata geçirilen "Salto" projesinin fiziksel tiyatro araştırmalarına ana kadroda dahil olmuştur.
                  </p>
                  <span className="milestone-tag">AVANGART / FİZİKSEL TİYATRO</span>
                </div>
              </div>

            </div>
          </div>
          {/* -------------------------------------- */}

        </div>
      </div>
    </div>
  );
}

export default Awards;