import { activeNews } from '../data/newsData';

function Archive() {
  return (
    <div className="container" style={{ padding: '4rem 1rem' }}>
      <h1 className="editorial-title">Tüm Arşiv Kayıtları</h1>
      <div className="chronicle-table" style={{ marginTop: '2rem' }}>
        {activeNews.map((news) => (
          <div className="chronicle-row" key={news.id}>
            <div className="chronicle-year">{news.regCode.split('#')[1]}</div>
            <div className="chronicle-details">
              <span className="card-category">{news.category}</span>
              <h4>{news.title}</h4>
              <p>{news.summary}</p>
              <a href={news.linkUrl} target="_blank" rel="noreferrer" className="editorial-link">
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