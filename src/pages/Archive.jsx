import { activeNews } from '../data/newsData';

function Archive() {
  return (
    <div className="container animate-fade" style={{ padding: '4rem 1rem', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* 📁 FİZİKSEL SİCİL DOSYASI */}
      <style>{`
        /* Arşiv Başlığı - Daktilo Şeridi Etkisi */
        .archive-main-heading {
          text-align: center;
          margin-bottom: 4rem;
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
        }
      `}</style>

      <h1 className="editorial-title archive-main-heading">
        ARŞİV SİCİL KAYITLARI
      </h1>
      
      <div className="dossier-list">
        {activeNews.map((news) => (
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
        ))}
      </div>

    </div>
  );
}

export default Archive;