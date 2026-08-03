import React, { useState, useRef } from 'react';
import { FaTwitter, FaEnvelope, FaPen } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const MAX_MESSAGE_LENGTH = 500;

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [messageLength, setMessageLength] = useState(0);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: botlar bu gizli alanı doldurur, gerçek kullanıcılar görmez bile
    if (form.current.elements['website']?.value) {
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);

    emailjs
      .sendForm('service_7ext7hb', 'template_nj0wswr', form.current, 'A1Pr_6f81H0k0CkPr')
      .then((result) => {
        console.log('Mesaj başarıyla uçtu:', result.text);
        setIsSent(true);
        setIsLoading(false);
        form.current.reset();
        setMessageLength(0);
        setTimeout(() => setIsSent(false), 3000);
      })
      .catch((error) => {
        console.log('Bir hata oluştu:', error.text);
        setIsLoading(false);
        setErrorMsg('Mesaj gönderilemedi. Bağlantını kontrol edip tekrar dener misin?');
      });
  };

  return (
    <div className="press-editorial-wrapper contact-wrapper animate-fade">
      <style>{`
        .contact-wrapper {
          padding: 0 0 4rem 0;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 2rem;
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
          color: inherit; padding: 1rem; margin-bottom: 0.4rem; border-radius: 4px;
          font-family: inherit; transition: border-color 0.3s ease;
        }
        .contact-input:focus, .contact-textarea:focus { outline: none; border-color: var(--accent-dark); }

        .char-counter {
          text-align: right;
          font-size: 0.75rem;
          color: var(--accent-light);
          opacity: 0.6;
          margin-bottom: 1.1rem;
        }
        .char-counter.near-limit { color: #b85c5c; opacity: 1; }

        .honeypot-field {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }
        
        .submit-btn {
          background: transparent; color: var(--accent-dark); border: 1px solid var(--accent-dark);
          padding: 0.8rem 2.5rem; font-family: var(--font-heading); font-weight: 700;
          cursor: pointer; border-radius: 4px; transition: all 0.3s ease;
          width: 100%; text-transform: uppercase;
        }
        .submit-btn:hover:not(:disabled) { background: var(--accent-dark); color: #fff; }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; border-color: var(--accent-dark); }
        .submit-btn.sent { background: var(--accent-dark); color: #fff; }
        
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

        .form-error-box {
          background: rgba(184, 92, 92, 0.08);
          border-left: 3px solid #b85c5c;
          padding: 0.8rem 1rem;
          margin-bottom: 1rem;
          border-radius: 0 4px 4px 0;
          font-size: 0.85rem;
          color: #b85c5c;
        }
        
        @media (max-width: 768px) { 
          .contact-header {
            margin-top: -3.5rem !important;
          }
          .contact-grid { 
            grid-template-columns: 1fr; 
            gap: 3rem; 
            margin-top: 1rem;
          } 
        }
      `}</style>

      <div className="container">
        <div className="section-header-editorial contact-header" style={{ textAlign: 'center', paddingTop: '0', marginTop: '-2rem' }}>
          <span className="archive-badge">// BİZE ULAŞIN</span>
          <h1 className="editorial-title">İLETİŞİM & DESTEK</h1>
          <p className="editorial-subtitle">Bağımsız hayran topluluğu ve arşiv geliştirme ekibi.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h3><FaEnvelope /> İLETİŞİM KANALLARI</h3>
            
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

            {errorMsg && <div className="form-error-box" role="alert">{errorMsg}</div>}

            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                className="contact-input"
                placeholder="İsim / Rumuz"
                required
              />

              {/* Botlara karşı görünmez tuzak alan — gerçek kullanıcılar bunu hiç görmez */}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <textarea
                name="message"
                className="contact-textarea"
                placeholder="Sorun veya önerin..."
                rows="4"
                maxLength={MAX_MESSAGE_LENGTH}
                required
                onChange={(e) => setMessageLength(e.target.value.length)}
              ></textarea>
              <div className={`char-counter ${messageLength > MAX_MESSAGE_LENGTH * 0.9 ? 'near-limit' : ''}`}>
                {messageLength} / {MAX_MESSAGE_LENGTH}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSent ? 'sent' : ''}`}
                disabled={isLoading || isSent}
                aria-live="polite"
              >
                {isLoading ? 'GÖNDERİLİYOR...' : isSent ? 'GÖNDERİLDİ!' : 'GÖNDER →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
