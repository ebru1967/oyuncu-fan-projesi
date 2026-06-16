import React from 'react';

function Awards() {
  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr">
      
      {/* 🚀 ÖDÜLLER ÖZEL CSS MOTORU */}
      <style>{`
        .trophy-card {
          display: flex;
          gap: 2rem;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.3s ease;
        }
        
        .trophy-card:hover {
          transform: translateY(-3px);
        }

        .award-info-col {
          display: flex;
          gap: 1.5rem;
          flex: 1;
        }

        /* Arşiv Fotoğraf Çerçevesi (Polaroid Hissi) */
        .award-photo-frame {
          width: 180px;
          height: 180px;
          flex-shrink: 0;
          background-color: var(--bg-card); /* Çerçeve arka planı */
          border: 1px dashed var(--accent-dark); /* Kesik çizgili sınır */
          padding: 0.5rem; /* Fotoğrafın çerçeveyi örtmemesi için iç boşluk! */
          box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
          transform: rotate(3deg); /* Dosyaya hafif eğik iğnelenmiş gibi */
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* Kartın üzerine gelince fotoğraf canlanır ve düzelir */
        .trophy-card:hover .award-photo-frame {
          transform: rotate(0deg) scale(1.05);
          box-shadow: 8px 8px 0px rgba(0,0,0,0.12);
        }

        .award-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: sepia(30%) grayscale(20%); /* Hafif retro arşiv filtresi */
          transition: filter 0.4s ease;
        }

        .trophy-card:hover .award-photo-frame img {
          filter: sepia(0%) grayscale(0%); /* Orijinal renklere döner */
        }

        /* Mobil Uyumluluk */
        @media (max-width: 600px) {
          .trophy-card {
            flex-direction: column-reverse; /* Mobilde fotoğraf üste, yazı alta geçer */
            align-items: flex-start;
            gap: 1.5rem;
          }
          .award-photo-frame {
            width: 100%;
            max-width: 250px;
            height: 250px;
            margin: 0 auto;
            transform: rotate(0deg); /* Mobilde düz dursun */
          }
        }
      `}</style>

      <div className="container">
        
        <div className="section-header-editorial">
          <span className="archive-badge">// SANAT & KARİYER SİCİLİ</span>
          <h1 className="editorial-title">ÖDÜLLER</h1>
          <p className="editorial-subtitle">Sektörel ödül törenleri, akademi başarıları ve jüri tescil nedenleri.</p>
        </div>

        <div className="inventory-list-full">
          
          {/* 1. KART: 2025 DİREKLERARASI */}
          <div className="record-card trophy-card">
            
            {/* Sol Taraf: Ödül Bilgileri */}
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

            {/* Sağ Taraf: Fotoğraf Çerçevesi */}
            <div className="award-photo-frame">
              <img src="/aynaodulu.jpeg" alt="25. Direklerarası Ödül Töreni" />
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;