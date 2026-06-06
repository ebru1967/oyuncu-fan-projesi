import { FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaTiktok, FaUserShield } from 'react-icons/fa';

function FCChannels() {
  return (
    <div className="container animate-fade" style={{ padding: '4rem 0' }}>
      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="archive-badge">// RESMİ İLETİŞİM PROTOKOLÜ</span>
        <h1 className="editorial-title">X OFFICIAL FC — KANALLAR</h1>
        <p className="editorial-subtitle">Aytek Şayan topluluğuna dair tüm dijital noktalar burada.</p>
      </div>

      <div className="channel-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem', 
        maxWidth: '900px', 
        margin: '0 auto' 
      }}>
        {/* X (TWITTER) TOPLULUK */}
        <div className="channel-card">
          <FaTwitter size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>AYTEKOFC TOPLULUK</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            X (Twitter) üzerinden tüm paylaşımların yapıldığı ortak alan.
          </p>
          <a 
            href="https://x.com/i/communities/1997579611480162338" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            TOPLULUĞA KATIL ↗
          </a>
        </div>
        {/* RESMİ FC X (TWITTER) HESABI */}
        <div className="channel-card">
          <FaTwitter size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>X OFFICIAL FC</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Aytek Şayan Official Fan Club resmi X (Twitter) sayfası. (@aytekofc)
          </p>
          <a 
            href="https://x.com/aytekofc" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            TAKİP ET ↗
          </a>
        </div>
        {/* INSTAGRAM HESABI */}
        <div className="channel-card">
          <FaInstagram size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>INSTAGRAM HUB</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Arşivden görsel seçkiler, özel özetler ve güncel paylaşımlar. (@aytekofc)
          </p>
          <a 
            href="https://www.instagram.com/aytekofc" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            TAKİP ET ↗
          </a>
        </div>
        
        {/* E-Mail */}
        <div className="channel-card">
          <FaEnvelope size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>RESMİ İLETİŞİM</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            İş birlikleri, fikirleriniz ve arşiv katkıları için bize ulaşın.
          </p>
          <a 
            href="mailto:aytekofc@gmail.com" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            MAİL GÖNDER ↗
          </a>
        </div>

        {/* ANA X (TWITTER) HESABI */}
        <div className="channel-card">
          <FaTwitter size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>X ANA HESAP</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Geliştirici ile iletişime geçmek için. (@chicolw)
          </p>
          <a 
            href="https://x.com/chicolw" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            PROFİLE GİT ↗
          </a>
        </div>
        
        {/* YÖNETİM - ITTSMIIAA */}
        <div className="channel-card">
          <FaUserShield size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>OFC YÖNETİMİ</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Özel destek. (@ittsmiiaa)
          </p>
          <a 
            href="https://x.com/ittsmiiaa" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            PROFİLE GİT ↗
          </a>
        </div>

        {/* TIKTOK HESABI */}
        <div className="channel-card">
          <FaTiktok size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>TIKTOK VİDEO & EDİT</h3>
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            Editler için. (@nachtblick33)
          </p>
          <a 
            href="https://www.tiktok.com/@nachtblick33" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              display: 'inline-block',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-dark)',
              color: 'var(--accent-dark)', 
              padding: '0.6rem 1.2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = 'var(--bg-main)'}}
            onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
          >
            TIKTOK'A GİT ↗
          </a>
        </div>

        
      </div>
    </div>
  );
}

export default FCChannels;