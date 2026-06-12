import { activeNews } from '../data/newsData';

function Archive() {
  return (
    <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="editorial-title" style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid var(--accent-dark)', paddingBottom: '1rem' }}>
        TÜM ARŞİV KAYITLARI
      </h1>
      
      <div className="chronicle-table">
        {activeNews.map((news) => (
          <div className="chronicle-row" key={news.id} style={{ 
            display: 'grid', 
            gridTemplateColumns: '100px 1fr', 
            gap: '2rem', 
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border-color)' 
          }}>
            <div className="chronicle-year" style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              color: 'var(--accent-dark)',
              fontFamily: 'var(--font-heading)'
            }}>
              {news.regCode.split('#')[1]}
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
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9 }}>{news.summary}</p>
              <a href={news.linkUrl} target="_blank" rel="noreferrer" className="editorial-link" style={{ 
                display: 'inline-block', 
                marginTop: '1rem',
                fontSize: '0.85rem'
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