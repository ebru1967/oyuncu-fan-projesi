import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setIsSubscribed(true);
      // 3 saniye sonra formu eski haline getir
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '6rem 0', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        <div style={{ 
          backgroundColor: 'var(--bg-main)', 
          border: '1px solid rgba(84, 107, 65, 0.2)', 
          padding: '4rem 3rem', 
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
          
          <span className="archive-badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
            // FC DİJİTAL AĞI
          </span>
          
          <h1 className="editorial-title" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>
            AYTEKOFC BÜLTENİ
          </h1>
          
          <p style={{ color: 'var(--text-main)', opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Yeni projeler, arşiv güncellemeleri ve FC topluluğuna özel duyurulardan ilk sizin haberiniz olsun. Dijital bültenimize kayıt olun.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input 
              type="email" 
              placeholder="E-posta adresinizi girin..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: '1rem',
                backgroundColor: 'transparent',
                border: '1px solid rgba(84, 107, 65, 0.4)',
                color: 'var(--accent-dark)',
                fontFamily: 'var(--font-main)',
                fontSize: '0.95rem',
                outline: 'none',
                textAlign: 'center'
              }}
            />
            <button 
              type="submit"
              style={{
                padding: '1rem',
                backgroundColor: isSubscribed ? '#4CAF50' : 'var(--accent-dark)',
                color: 'var(--bg-main)',
                border: 'none',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {isSubscribed ? 'KAYIT BAŞARILI ✓' : 'ABONE OL ↗'}
            </button>
          </form>

          <p style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '2rem', fontStyle: 'italic' }}>
            *Bilgileriniz sadece FC arşiv bilgilendirmeleri için kullanılacaktır.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Newsletter;