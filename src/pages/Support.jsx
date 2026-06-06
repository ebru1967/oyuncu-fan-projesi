import React from 'react';

function Support() {
  return (
    <div className="container animate-fade" style={{ padding: '4rem 0' }}>
      <style>{`
        .contribution-card {
          background: var(--bg-card);
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-radius: 4px;
          padding: 4rem 3rem;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .contribution-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-dark);
        }
        .cta-btn {
          display: inline-block;
          margin-top: 2.5rem;
          padding: 1rem 3rem;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.9rem;
          border-radius: 30px;
        }
        .cta-btn:hover {
          background: var(--accent-dark);
          color: white;
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.3);
        }
      `}</style>

      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="archive-badge">// ARŞİV KATKISI</span>
        <h1 className="editorial-title">BİRLİKTE BİRİKTİRELİM</h1>
        <p className="editorial-subtitle">Bu arşiv senin katkılarınla büyüyor.</p>
      </div>

      <div className="contribution-card">
        <div style={{ fontSize: '3rem', marginBottom: '1.5rem', opacity: 0.8 }}>🗂️</div>
        <p style={{ color: 'var(--accent-light)', lineHeight: '1.8', fontSize: '1.1rem' }}>
          Aytek Şayan'a dair elinde olan, burada yer almayan kesitleri, replikleri veya görselleri bizimle paylaşarak 
          bu dijital müzenin bir parçası ol.
        </p>
        <a href="mailto:aytekofc@gmail.com" className="cta-btn">
          KATKIDA BULUN ↗
        </a>
        
      </div>
    </div>
  );
}

export default Support;