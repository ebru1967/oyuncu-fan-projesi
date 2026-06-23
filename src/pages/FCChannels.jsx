import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope, FaTiktok, FaUserShield } from 'react-icons/fa';

function FCChannels() {
  return (
    <div className="press-editorial-wrapper animate-fade" style={{ paddingBottom: '4rem' }}>
      
      <style>{`
        .channel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .channel-card {
          background: var(--bg-main);
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-radius: 8px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .channel-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-dark);
          box-shadow: 0 10px 25px rgba(84, 107, 65, 0.1);
        }

        .channel-btn {
          display: inline-block;
          background-color: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.6rem 1.2rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 1px;
          border-radius: 4px;
          transition: all 0.3s;
          margin-top: auto; 
        }

        .channel-btn:hover {
          background-color: var(--accent-dark);
          color: var(--bg-main);
        }

        /* ÖZEL TEŞEKKÜR VİDEOSU ALANI CSS */
        .special-thanks-container {
          max-width: 600px;
          margin: 0 auto 5rem auto;
          background: rgba(84, 107, 65, 0.03);
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-left: 5px solid var(--accent-dark);
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .thanks-title {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--accent-dark);
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .thanks-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.8;
          margin-bottom: 2rem;
        }
      `}</style>

      <div className="container">
        
        {/* SAYFA BAŞLIĞI */}
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '0', marginTop: '-3rem' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// HAYRAN TOPLULUĞU AĞI</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem' }}>FC — KANALLAR</h1>
          <p className="editorial-subtitle">Aytek Şayan hayran topluluğuna dair tüm dijital iletişim noktaları.</p>
        </div>

        {/* --- ÖZEL TEŞEKKÜR KÖŞESİ (YENİ EKLENDİ) --- */}
        <div className="special-thanks-container animate-fade">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--accent-dark)' }}>
            <span style={{ fontSize: '2rem' }}>★</span>
          </div>
          <h2 className="thanks-title">AYTEK ŞAYAN'DAN PROJEYE ÖZEL MESAJ</h2>
          <p className="thanks-desc">
            Bu dijital arşivin kuruluş aşamasında, projeyi bizzat inceleyerek samimi düşüncelerini ve teşekkürlerini bir video ile paylaşan Aytek Şayan'a FC ailesi olarak sonsuz minnettarız. 
          </p>
          
          {/* X (TWITTER) VİDEO EMBED KODU */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="tr" dir="ltr">
              </p>&mdash; X (@chicolw) 
              <a href="https://twitter.com/chicolw/status/2068762476846485524?ref_src=twsrc%5Etfw">
                Mayıs 18, 2026
              </a>
            </blockquote> 
            {/* Embed kodunun çalışması için gereken script */}
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
        </div>
        {/* -------------------------------------- */}

        <div className="channel-grid">
          
          {/* X (TWITTER) TOPLULUK */}
          <div className="channel-card">
            <FaTwitter size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>AYTEKOFC TOPLULUK</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              X (Twitter) üzerinden tüm paylaşımların yapıldığı ortak alan.
            </p>
            <a href="https://x.com/i/communities/1997579611480162338" target="_blank" rel="noreferrer" className="channel-btn">
              TOPLULUĞA KATIL ↗
            </a>
          </div>

          {/* FC X (TWITTER) HESABI */}
          <div className="channel-card">
            <FaTwitter size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>X FAN SAYFASI</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Aytek Şayan Fan Club X (Twitter) sayfası. (@aytekofc)
            </p>
            <a href="https://x.com/aytekofc" target="_blank" rel="noreferrer" className="channel-btn">
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
            <a href="https://www.instagram.com/aytekofc" target="_blank" rel="noreferrer" className="channel-btn">
              TAKİP ET ↗
            </a>
          </div>
          
          {/* E-Mail */}
          <div className="channel-card">
            <FaEnvelope size={30} style={{ color: 'var(--accent-dark)', marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>TOPLULUK İLETİŞİMİ</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Fan projeleri, fikirleriniz ve arşiv katkıları için bize ulaşın.
            </p>
            <a href="mailto:aytekofc@gmail.com" className="channel-btn">
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
            <a href="https://x.com/chicolw" target="_blank" rel="noreferrer" className="channel-btn">
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
            <a href="https://x.com/ittsmiiaa" target="_blank" rel="noreferrer" className="channel-btn">
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
            <a href="https://www.tiktok.com/@nachtblick33" target="_blank" rel="noreferrer" className="channel-btn">
              TIKTOK'A GİT ↗
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FCChannels;