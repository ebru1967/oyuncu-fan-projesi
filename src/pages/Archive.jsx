import { activeNews } from '../data/newsData';

function Archive() {
  return (
    <div className="container animate-fade" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* MOBİL UYUMLULUK VE HOVER ANİMASYONU */}
      <style>{`
        .archive-row-item {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border-color);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        
        /* Üzerine gelince hafifçe sağa kayar ve alt çizgisi parlar */
        .archive-row-item:hover {
          transform: translateX(8px);
          border-bottom-color: var(--accent-dark);
        }

        .archive-code-col {
          flex: 0 0 100px;
        }

        /* TELEFON EKRANLARI İÇİN ÖZEL TASARIM */
        @media (max-width: 600px) {
          .archive-row-item {
            flex-direction: column; /* Yan yana değil alt alta dizer */
            gap: 0.5rem;
          }
          .archive-code-col {
            flex: none;
            border-bottom: 2px dashed var(--accent-dark);
            padding-bottom: 0.5rem;
            display: inline-block;
            width: max-content;
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <h1 className="editorial-title" style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid var(--accent-dark)', paddingBottom: '1rem' }}>
        TÜM ARŞİV KAYITLARI
      </h1>
      
      <div className="chronicle-table">
        {activeNews.map((news) => (
          <div className="archive-row-item" key={news.id}>
            
            <div className="archive-code-col" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--accent-dark)',
              fontFamily: 'var(--font-heading)'
            }}>
              {news.regCode.split('#')[1] || news.regCode}
            </div>
            
            <div className="chronicle-details">
              <span className="card-category" style={{ 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                opacity: 0.7 
              }}>
                {news.category}
              </span>
              <h4 style={{ fontSize: '1.3rem', margin: '0.5rem 0' }}>{news.title}</h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9, textAlign: 'justify' }}>{news.summary}</p>
              <a href={news.linkUrl} target="_blank" rel="noreferrer" className="editorial-link" style={{ 
                display: 'inline-block', 
                marginTop: '1rem',
                fontSize: '0.85rem',
                fontWeight: 'bold'
              }}>
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