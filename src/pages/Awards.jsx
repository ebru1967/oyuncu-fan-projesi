import React from 'react';

function Awards() {
  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr">
      <div className="container">
        
        <div className="section-header-editorial">
          <span className="archive-badge">// SANAT & KARİYER SİCİLİ</span>
          <h1 className="editorial-title">ÖDÜLLER</h1>
          <p className="editorial-subtitle">Sektörel ödül törenleri, akademi başarıları ve jüri tescil nedenleri.</p>
        </div>

        <div className="inventory-list-full">
          
          {/* 1. KART: 2025 DİREKLERARASI (FOTOĞRAF ALANLI) */}
          <div className="record-card trophy-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'center' }}>
            
            {/* Sol Taraf: Ödül Bilgileri */}
            <div style={{ display: 'flex', gap: '1.5rem', flex: '1 1 min-content' }}>
              <div className="record-year">2025</div>
              <div className="record-details">
                <h4 className="record-title" style={{ textTransform: 'none' }}>EN İYİ ERKEK OYUNCU</h4>
                <span className="record-role" style={{ textTransform: 'none' }}>"AYNA" TİYATRO OYUNU (DASDAS)</span>
                <span className="record-meta" style={{ textTransform: 'none' }}>25. DİREKLERARASI SEYİRCİ ÖDÜLLERİ</span>
                
                <div className="award-reason">
                  <strong>ÖDÜL NEDENİ:</strong> "DasDas'ta sahnelenen 'Ayna' adlı tiyatro oyunundaki üstün performansı, sahne hakimiyeti ve karaktere kattığı derinlik sebebiyle seyirciler tarafından bu ödüle layık görülmüştür."
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Fotoğraf Ekleme Alanı */}
            <div className="award-photo-container" style={{ 
              width: '180px', 
              height: '180px', 
              flexShrink: 0, 
              borderRadius: '8px', 
              overflow: 'hidden', 
              backgroundColor: 'rgba(84, 107, 65, 0.05)', 
              border: '1px dashed var(--accent-dark)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              
              <img src="/aynaodulu.jpeg" alt="25. Direklerarası Ödül Töreni" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Awards;