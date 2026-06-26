import { useState, useMemo } from 'react';
import { activeNews } from '../data/newsData';

function Archive() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TÜMÜ');

  // Arşivdeki kategorileri dinamik olarak çıkarıyoruz 
  const categories = ['TÜMÜ', ...new Set(activeNews.map(news => news.category))];

  // Arama ve kategori süzgeci 
  const filteredNews = useMemo(() => {
    return activeNews.filter(news => {
      const matchesCategory = selectedCategory === 'TÜMÜ' || news.category === selectedCategory;
      const searchLower = searchTerm.toLocaleLowerCase('tr-TR');
      const matchesSearch = 
        news.title.toLocaleLowerCase('tr-TR').includes(searchLower) ||
        news.summary.toLocaleLowerCase('tr-TR').includes(searchLower) ||
        news.regCode.toLocaleLowerCase('tr-TR').includes(searchLower);
        
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="container animate-fade" style={{ padding: '4rem 1rem', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* 📁 FİZİKSEL SİCİL DOSYASI & KONTROL PANELİ CSS */}
      <style>{`
        /* Arşiv Başlığı - Daktilo Şeridi Etkisi */
        .archive-main-heading {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .archive-main-heading::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: var(--accent-dark);
          margin: 1rem auto 0;
        }

        /* --- YENİ: ARAMA VE FİLTRE PANELİ --- */
        .archive-controls {
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: rgba(84, 107, 65, 0.03);
          padding: 2rem;
          border: 1px dashed rgba(84, 107, 65, 0.3);
          border-radius: 8px;
        }

        .archive-search-input {
          width: 100%;
          background: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--text-main);
          padding: 1rem 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 1rem;
          border-radius: 4px;
          outline: none;
          transition: box-shadow 0.3s;
        }

        .archive-search-input:focus {
          box-shadow: inset 4px 4px 0px rgba(84, 107, 65, 0.1);
        }

        .archive-search-input::placeholder {
          color: var(--accent-light);
          opacity: 0.7;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(84, 107, 65, 0.4);
          color: var(--accent-dark);
          padding: 0.5rem 1.2rem;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: bold;
          cursor: pointer;
          border-radius: 30px;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          border-color: var(--accent-dark);
          background: rgba(84, 107, 65, 0.05);
        }

        .filter-btn.active {
          background: var(--accent-dark);
          color: var(--bg-main);
          border-color: var(--accent-dark);
        }

        /* Fiziksel Klasör Kartı */
        .dossier-card {
          position: relative;
          background: var(--bg-card);
          border: 2px solid var(--accent-dark);
          border-left: 12px solid var(--accent-dark); /* Telli dosya kenarı */
          padding: 2rem 2.5rem;
          margin-bottom: 3rem;
          box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1); /* Sert Retro Gölge */
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .dossier-card:hover {
          transform: translateY(-4px) translateX(-2px);
          box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
        }

        /* Kartın İçindeki Kesik Çizgili Antet (Header) */
        .dossier-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px dashed var(--accent-dark);
          padding-bottom: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .dossier-code {
          font-family: monospace;
          font-size: 1.2rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: var(--accent-dark);
        }

        .dossier-clearance {
          font-family: monospace;
          font-size: 0.8rem;
          font-weight: bold;
          opacity: 0.6;
          letter-spacing: 1px;
        }

        /* Fiziksel Kaşe/Mühür (Stamp) Efekti */
        .dossier-stamp {
          position: absolute;
          top: 1.5rem;
          right: -1rem;
          transform: rotate(12deg);
          border: 3px solid var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.3rem 1.5rem;
          font-weight: 900;
          font-size: 0.85rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0.8;
          border-radius: 4px;
          pointer-events: none;
        }

        /* Başlık ve Metin */
        .dossier-title {
          font-size: 1.6rem;
          line-height: 1.2;
          margin: 0 0 1rem 0;
          padding-right: 3rem; /* Mühürle çakışmaması için */
        }

        .dossier-summary {
          font-size: 0.95rem;
          line-height: 1.8;
          opacity: 0.85;
          text-align: justify;
          margin-bottom: 1.5rem;
        }

        /* Ataçlanmış Dosya Linki */
        .dossier-link-wrapper {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .dossier-link-wrapper::before {
          content: '📎';
          font-size: 1.2rem;
          opacity: 0.7;
        }

        .dossier-action-link {
          font-weight: bold;
          font-size: 0.85rem;
          text-decoration: underline;
          text-underline-offset: 4px;
          color: var(--text-main);
          transition: color 0.2s;
        }
        
        .dossier-action-link:hover {
          color: var(--accent-dark);
        }

        /* MOBİL UYUMLULUK */
        @media (max-width: 600px) {
          .dossier-card {
            padding: 1.5rem;
            border-left-width: 8px;
            box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
          }
          .dossier-stamp {
            position: relative;
            top: 0;
            right: 0;
            transform: rotate(0);
            display: inline-block;
            margin-bottom: 1.5rem;
            border-width: 2px;
            padding: 0.2rem 0.8rem;
          }
          .dossier-title {
            padding-right: 0;
            font-size: 1.3rem;
          }
          .dossier-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .archive-controls {
            padding: 1rem;
          }
        }
      `}</style>

      <h1 className="editorial-title archive-main-heading">
        ARŞİV SİCİL KAYITLARI
      </h1>
      
      {/* KONTROL PANELİ (ARAMA VE FİLTRE) */}
      <div className="archive-controls">
        <input 
          type="text" 
          className="archive-search-input" 
          placeholder="DÖKÜMAN KODU, BAŞLIK VEYA ANAHTAR KELİME GİRİNİZ..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="category-filters">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* DOSYA LİSTESİ */}
      <div className="dossier-list">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div className="dossier-card" key={news.id}>
              
              {/* Kaşe / Mühür */}
              <div className="dossier-stamp">
                {news.category}
              </div>

              {/* Antet / Sicil Kodu */}
              <div className="dossier-header">
                <span className="dossier-code">
                  {news.regCode}
                </span>
                <span className="dossier-clearance">
                  // ERİŞİM: AÇIK
                </span>
              </div>
              
              {/* İçerik Gövdesi */}
              <h4 className="dossier-title">
                {news.title.toLocaleUpperCase('tr-TR')}
              </h4>
              
              <p className="dossier-summary">
                {news.summary}
              </p>
              
              {/* Ek/Link Bağlantısı */}
              <div className="dossier-link-wrapper">
                <a href={news.linkUrl} target="_blank" rel="noreferrer" className="dossier-action-link">
                  {news.linkText}
                </a>
              </div>

            </div>
          ))
        ) : (
          // EĞER ARAMA SONUCU EŞLEŞMEZSE GÖSTERİLECEK EKRAN
          <div style={{ textAlign: 'center', padding: '3rem', border: '1px dashed var(--accent-dark)', opacity: 0.7 }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗄️</div>
            <h3 style={{ fontFamily: 'var(--font-heading)' }}>KAYIT BULUNAMADI</h3>
            <p>Aradığınız kriterlere uygun bir döküman arşive henüz eklenmemiş olabilir.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default Archive;