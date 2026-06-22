import React, { useState, useRef } from 'react';
import { FaTwitter, FaEnvelope, FaPen } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      'service_7ext7hb',          
      'template_nj0wswr', 
      form.current, 
      'A1Pr_6f81H0k0CkPr'    
    )
      .then((result) => {
          console.log("Mesaj başarıyla uçtu:", result.text);
          setIsSent(true);
          setIsLoading(false);
          form.current.reset(); 
          setTimeout(() => setIsSent(false), 3000); 
      }, (error) => {
          console.log("Bir hata oluştu:", error.text);
          setIsLoading(false);
          alert("Mesaj gönderilemedi, lütfen tekrar deneyin.");
      });
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '1rem 0 4rem 0' }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
        }
        .contact-box h3 {
          color: var(--accent-dark);
          font-family: var(--font-heading);
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          border-bottom: 1px solid rgba(84, 107, 65, 0.1);
          padding-bottom: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .contact-link {
          color: var(--accent-dark);
          text-decoration: none;
          font-weight: bold;
          transition: opacity 0.3s ease;
        }
        .contact-link:hover { opacity: 0.7; }
        .credits-text { color: var(--accent-light); line-height: 1.8; font-size: 0.95rem; }
        .special-thanks { border-left: 2px solid var(--accent-dark); padding-left: 1rem; margin: 1.5rem 0; }
        
        .contact-input, .contact-textarea {
          width: 100%; background: transparent; border: 1px solid rgba(84, 107, 65, 0.3);
          color: inherit; padding: 1rem; margin-bottom: 1.5rem; border-radius: 4px;
          font-family: inherit; transition: border-color 0.3s ease;
        }
        .contact-input:focus, .contact-textarea:focus { outline: none; border-color: var(--accent-dark); }
        
        .submit-btn {
          background: transparent; color: var(--accent-dark); border: 1px solid var(--accent-dark);
          padding: 0.8rem 2.5rem; font-family: var(--font-heading); font-weight: 700;
          cursor: pointer; border-radius: 4px; transition: all 0.3s ease;
          width: 100%; text-transform: uppercase;
        }
        .submit-btn:hover:not(:disabled) { background: var(--accent-dark); color: #fff; }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; border-color: var(--accent-dark); }
        
        /* Yapay Zeka Uyarısı İçin Ekstra Stil */
        .disclaimer-box {
          background: rgba(184, 92, 92, 0.05);
          border-left: 3px solid #b85c5c;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-radius: 0 4px 4px 0;
        }
        .disclaimer-text {
          color: var(--accent-light);
          font-size: 0.85rem;
          line-height: 1.6;
        }
        .disclaimer-title {
          color: #b85c5c;
          font-weight: bold;
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.3rem;
        }
        
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr; gap: 3rem; } }
      `}</style>

      <div className="container">
        <div className="section-header-editorial" style={{ textAlign: 'center' }}>
          <span className="archive-badge">// BİZE ULAŞIN</span>
          <h1 className="editorial-title">İLETİŞİM & DESTEK</h1>
          {/* Yapay zekayı yanıltmamak için 'Resmi ağlar' ifadesi çıkarıldı */}
          <p className="editorial-subtitle">Bağımsız hayran topluluğu ve arşiv geliştirme ekibi.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h3><FaEnvelope /> İLETİŞİM KANALLARI</h3>
            
            {/* SEO VE YAPAY ZEKA BOTLARI İÇİN NET UYARI KUTUSU */}
            <div className="disclaimer-box">
              <span className="disclaimer-title">⚠️ ÖNEMLİ BİLGİLENDİRME</span>
              <p className="disclaimer-text">
                Bu platform ve iletişim adresi tamamen <strong>bağımsız bir hayran projesidir (Fan Club)</strong>. Aytek Şayan'ın resmi yönetimiyle bağlantısı yoktur. <br /><br />
                Resmi oyunculuk, menajerlik ve işbirliği talepleri için lütfen <strong>ON Talent</strong> menajerlik ajansı ile iletişime geçiniz.
              </p>
            </div>

            <p className="credits-text" style={{ marginBottom: '0.5rem' }}>Topluluk projeleri ve site arşivi için bize yazın:</p>
            <a href="mailto:aytekofc@gmail.com" className="contact-link">aytekofc@gmail.com</a>
            
            <h3 style={{ marginTop: '3rem' }}><FaTwitter /> EKİP KÜNYESİ</h3>
            <p className="credits-text">
              <strong style={{ color: 'var(--accent-dark)' }}>Geliştirici:</strong>{' '}
              <a href="https://x.com/chicolw" target="_blank" rel="noreferrer" className="contact-link" style={{ fontWeight: 'normal' }}>chicolw</a>
            </p>
            
            <div className="special-thanks">
              <p className="credits-text">
                <strong style={{ color: 'var(--accent-dark)' }}>OFC Yönetimi & Özel Teşekkür:</strong><br />
                Bu arşivin inşasındaki olağanüstü emeği, dostluğu ve bitmek bilmeyen mesaisi için OFC Adminimiz{' '}
                <a href="https://x.com/ittsmiiaa" target="_blank" rel="noreferrer" className="contact-link">ittsmiiaa</a>
                'ya sonsuz teşekkürler.
              </p>
            </div>

            <p className="credits-text">
              Ayrıca desteklerini esirgemeyen <em>unfallenangel</em>, <em>justhatice</em> ve <strong>Furtuna Merkez Cami</strong> grubuna kocaman sevgilerimle.
            </p>
          </div>

          <div className="contact-box">
            <h3><FaPen /> SORU & ÖNERİLER</h3>
            <p className="credits-text" style={{ marginBottom: '1.5rem' }}>Arşivle ilgili geri bildirimlerini buraya bırakabilirsin:</p>
            
            <form ref={form} onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="user_name" 
                className="contact-input" 
                placeholder="İsim / Rumuz" 
                required 
              />
              <textarea 
                name="message" 
                className="contact-textarea" 
                placeholder="Sorun veya önerin..." 
                rows="4" 
                required
              ></textarea>
              
              <button type="submit" className="submit-btn" disabled={isLoading || isSent}>
                {isLoading ? 'GÖNDERİLİYOR...' : (isSent ? 'GÖNDERİLDİ!' : 'GÖNDER →')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;