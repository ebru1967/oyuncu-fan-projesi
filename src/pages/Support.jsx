import React, { useState, useMemo, useEffect } from 'react';

const CONTRIBUTION_TYPES = [
  { id: 'video', label: 'VİDEO / KLİP', emoji: '🎬' },
  { id: 'foto', label: 'FOTOĞRAF', emoji: '📸' },
  { id: 'soylesi', label: 'RÖPORTAJ / SÖYLEŞİ', emoji: '🎙️' },
  { id: 'replik', label: 'REPLİK / ANI', emoji: '✏️' },
  { id: 'basin', label: 'BASIN KUPÜRÜ', emoji: '📰' },
  { id: 'diger', label: 'DİĞER', emoji: '🗃️' },
];

const CONTACT_EMAIL = 'aytekofc@gmail.com';
const VISIT_COUNTER_KEY = 'fc_supportPageVisits';

function Support() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [note, setNote] = useState('');
  const [copied, setCopied] = useState(false);
  const [visitCount, setVisitCount] = useState(null);

  // Sayfayı kaç kişi ziyaret etti (dürüst bir sayaç — gerçek tıklama verisi)
  useEffect(() => {
    try {
      const current = parseInt(localStorage.getItem(VISIT_COUNTER_KEY) || '0', 10) + 1;
      localStorage.setItem(VISIT_COUNTER_KEY, current.toString());
      setVisitCount(current);
    } catch (e) {
      setVisitCount(null);
    }
  }, []);

  const toggleType = (id) => {
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const mailtoHref = useMemo(() => {
    const typeLabels = CONTRIBUTION_TYPES
      .filter((t) => selectedTypes.includes(t.id))
      .map((t) => t.label)
      .join(', ');

    const subject = typeLabels
      ? `Arşiv Katkısı: ${typeLabels}`
      : 'Arşiv Katkısı';

    const bodyLines = [
      typeLabels ? `Katkı Türü: ${typeLabels}` : 'Katkı Türü: (belirtilmedi)',
      '',
      note ? `Not: ${note}` : 'Not: ',
      '',
      '--- Dosyaları bu maile ekleyebilir veya bir bulut linki paylaşabilirsiniz ---',
    ];

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  }, [selectedTypes, note]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // Panoya erişilemezse sessizce geç
    }
  };

  return (
    <div className="container animate-fade" style={{ padding: '4rem 0' }}>
      <style>{`
        .contribution-card {
          background: var(--bg-card);
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-radius: 4px;
          padding: 3.5rem 3rem;
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: border-color 0.3s ease;
        }

        .contribution-card:hover {
          border-color: var(--accent-dark);
        }

        @keyframes floatIcon {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .floating-icon {
          display: inline-block;
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.85;
          animation: floatIcon 3s ease-in-out infinite;
        }

        .support-intro {
          color: var(--accent-light);
          line-height: 1.8;
          font-size: 1.05rem;
          max-width: 480px;
          margin: 0 auto 2.5rem;
        }

        /* --- KATKI FİŞİ FORMU --- */
        .dossier-form {
          text-align: left;
          background: rgba(84, 107, 65, 0.03);
          border: 1px dashed rgba(84, 107, 65, 0.3);
          border-radius: 8px;
          padding: 2rem;
        }

        .dossier-form-label {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--accent-dark);
          opacity: 0.7;
          margin-bottom: 0.9rem;
          display: block;
        }

        .type-chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .type-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 0.55rem 1rem;
          border-radius: 30px;
          border: 1px solid rgba(84, 107, 65, 0.35);
          background: transparent;
          color: var(--text-main);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .type-chip:hover {
          border-color: var(--accent-dark);
        }

        .type-chip.selected {
          background: var(--accent-dark);
          color: var(--bg-main);
          border-color: var(--accent-dark);
        }

        .dossier-note {
          width: 100%;
          min-height: 90px;
          resize: vertical;
          background: var(--bg-main);
          border: 1px solid rgba(84, 107, 65, 0.25);
          border-radius: 6px;
          padding: 0.9rem 1.1rem;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-main);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .dossier-note:focus {
          border-color: var(--accent-dark);
        }

        .dossier-note::placeholder {
          opacity: 0.5;
        }

        .dossier-actions {
          display: flex;
          gap: 0.8rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2.2rem;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2.2rem;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          font-family: var(--font-heading);
          font-weight: 700;
          letter-spacing: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          font-size: 0.85rem;
          border-radius: 30px;
          background: transparent;
          cursor: pointer;
        }

        .cta-btn:hover {
          background: var(--accent-dark);
          color: white;
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.3);
        }

        .cta-btn.secondary {
          border-color: rgba(84, 107, 65, 0.35);
          color: var(--text-main);
        }

        .cta-btn.secondary:hover {
          background: transparent;
          color: var(--accent-dark);
          border-color: var(--accent-dark);
          box-shadow: none;
        }

        .copied-toast {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          color: var(--accent-dark);
          margin-top: 0.8rem;
        }

        .support-footnote {
          margin-top: 2.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          opacity: 0.5;
          text-align: center;
        }

        @media (max-width: 600px) {
          .contribution-card {
            padding: 2.5rem 1.5rem;
          }
          .dossier-form {
            padding: 1.5rem;
          }
        }
      `}</style>

      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '4rem', paddingTop: '0', marginTop: '-3rem' }}>
        <span className="archive-badge">// ARŞİV KATKISI</span>
        <h1 className="editorial-title">BİRLİKTE BİRİKTİRELİM</h1>
        <p className="editorial-subtitle">Bu arşiv senin katkılarınla büyüyor.</p>
      </div>

      <div className="contribution-card">
        <div className="floating-icon">🗂️</div>
        <p className="support-intro">
          Aytek Şayan'a dair elinde olan, burada yer almayan kesitleri, replikleri veya
          görselleri bizimle paylaşarak bu dijital müzenin bir parçası ol. Aşağıdan katkı
          türünü seç, mail otomatik hazırlansın.
        </p>

        <div className="dossier-form">
          <span className="dossier-form-label">// KATKI TÜRÜNÜ SEÇ (BİRDEN FAZLA SEÇİLEBİLİR)</span>
          <div className="type-chip-grid">
            {CONTRIBUTION_TYPES.map((type) => (
              <button
                key={type.id}
                type="button"
                className={`type-chip ${selectedTypes.includes(type.id) ? 'selected' : ''}`}
                onClick={() => toggleType(type.id)}
              >
                <span>{type.emoji}</span> {type.label}
              </button>
            ))}
          </div>

          <span className="dossier-form-label">// EKLEMEK İSTEDİĞİN BİR NOT VAR MI? (OPSİYONEL)</span>
          <textarea
            className="dossier-note"
            placeholder="Örn. 2019 tiyatro provasından bir kamera arkası klibim var, paylaşmak isterim..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={500}
          />
        </div>

        <div className="dossier-actions">
          <a href={mailtoHref} className="cta-btn">
            KATKIDA BULUN ↗
          </a>
          <button type="button" className="cta-btn secondary" onClick={handleCopyEmail}>
            {copied ? 'KOPYALANDI ✓' : '✉️ MAİL ADRESİNİ KOPYALA'}
          </button>
        </div>

        {copied && <div className="copied-toast">{CONTACT_EMAIL} panoya kopyalandı.</div>}

        {visitCount !== null && visitCount > 1 && (
          <div className="support-footnote">
            BU SAYFAYI {visitCount}. KEZ ZİYARET EDİYORSUN — ARŞİV SENİNLE BÜYÜYOR.
          </div>
        )}
      </div>
    </div>
  );
}

export default Support;