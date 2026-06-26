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

        /* --- KONTROL PANELİ (YAN YANA TASARIM) --- */
        .archive-controls {
          margin-bottom: 4rem;
          display: flex;
          gap: 1rem;
          background: rgba(84, 107, 65, 0.03);
          padding: 2rem;
          border: 1px dashed rgba(84, 107, 65, 0.3);
          border-radius: 8px;
          align-items: center;
        }

        .archive-search-input {
          flex: 2;
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

        .archive-category-select {
          flex: 1;
          width: 100%;
          background: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--text-main);
          padding: 1rem 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 1rem;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
        }
        
        .archive-category-select option {
          background: var(--bg-main);
          color: var(--text-main);
        }

        /* Fiziksel Klasör Kartı */
        .dossier-card {
          position: relative;
          background: var(--bg-card);
          border: 2px solid var(--accent-dark);
          border-left: 12px solid var(--accent-dark);
          padding: 2rem 2.5rem;
          margin-bottom: 3rem;
          box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .dossier-card:hover {
          transform: translateY(-4px) translateX(-2px);
          box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
        }

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

        .dossier-title {
          font-size: 1.6rem;
          line-height: 1.2;
          margin: 0 0 1rem 0;
          padding-right: 3rem;
        }

        .dossier-summary {
          font-size: 0.95rem;
          line-height: 1.8;
          opacity: 0.85;
          text-align: justify;
          margin-bottom: 1.5rem;
        }

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
          .archive-controls {
            flex-direction: column;
            padding: 1.5rem;
          }
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
        }
      `}</style>

      <h1 className="editorial-title archive-main-heading">
        ARŞİV SİCİL KAYITLARI
      </h1>
      
      {/* KONTROL PANELİ (ARAMA VE AÇILIR MENÜ) */}
      <div className="archive-controls">
        <input 
          type="text" 
          className="archive-search-input" 
          placeholder="DÖKÜMAN KODU, BAŞLIK VEYA KELİME ARA..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="archive-category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category === 'TÜMÜ' ? 'TÜM KATEGORİLER' : `KATEGORİ: ${category}`}
            </option>
          ))}
        </select>
      </div>

      {/* DOSYA LİSTESİ */}
      <div className="dossier-list">
        {filteredNews.length > 0 ? (
          filteredNews.map((news) => (
            <div className="dossier-card" key={news.id}>
              
              <div className="dossier-stamp">
                {news.category}
              </div>

              <div className="dossier-header">
                <span className="dossier-code">
                  {news.regCode}
                </span>
                <span className="dossier-clearance">
                  // ERİŞİM: AÇIK
                </span>
              </div>
              
              <h4 className="dossier-title">
                {news.title.toLocaleUpperCase('tr-TR')}
              </h4>
              
              <p className="dossier-summary">
                {news.summary}
              </p>
              
              <div className="dossier-link-wrapper">
                <a href={news.linkUrl} target="_blank" rel="noreferrer" className="dossier-action-link">
                  {news.linkText}
                </a>
              </div>

            </div>
          ))
        ) : (
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