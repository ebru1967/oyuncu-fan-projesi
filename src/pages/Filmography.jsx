import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';

const filmographyList = [
  { 
    id: 16, 
    year: "2022", 
    title: "Tarihin Efsaneleri: Attila", 
    character: "Attila", 
    episodes: "9-10", 
    platform: "TRT Belgesel", 
    image: "/attila.jpeg", 
    summary: "Tarihin akışını değiştiren efsanevi liderlerin anlatıldığı docudrama (yarı belgesel yarı drama) formatındaki yapımın Attila bölümünde yer alarak, Hun İmparatorluğu'nun güç savaşları arasındaki tarihi bir figüre hayat vermiştir.",
    urls: [
      { label: "9. BÖLÜM İZLE ↗", link: "https://youtu.be/aD-7bHQg1SQ" },
      { label: "10. BÖLÜM İZLE ↗", link: "https://youtu.be/DvnuitwWBOY" } 
    ]
  },
  { 
    id: 15, year: "2025-Günümüz", title: "Taşacak Bu Deniz", character: "Şerif Furtuna", 
    episodes: "Güncel", platform: "TRT 1", image: "/şerif.jpeg", 
    summary: "Şerif, hayatı duygulardan arındırılmış bir satranç oyunu gibi gören, olaylara her zaman mantık çerçevesinden yaklaşan bir karakterdir. Koçari köyüyle arasında kan davası bulunan Şerif, cinayet suçundan 20 yıl hapis yatmış ve geçmişin gölgesini üzerinde taşıyan bir figürdür.",
    url: "https://youtube.com/playlist?list=PLkowzc1JKWSj-LXZoBKue22W-RIPiIPiW"
  },
  { 
    id: 14, year: "2024-2025", title: "İnci Taneleri", character: "Kürşat", 
    episodes: "20-44", platform: "Kanal D", image: "/kürşat.jpeg", 
    summary: "Görev bilinciyle hareket eden, işini ciddiyetle takip eden ve sorumluluklarını sonuna kadar yerine getiren tavizsiz bir komiserdir.",
    url: "https://www.kanald.com.tr/inci-taneleri/bolumler" 
  },
  { 
    id: 13, year: "2024", title: "Gaddar", character: "Gürkan Komiser", 
    episodes: "1-20", platform: "NOW", image: "/gürkan.jpeg", 
    summary: "Düzenin her şeyden önce geldiğine inanan idealist bir komiserken, adaletin işlemediği bir sistemde kendi adaletini bizzat kurmaya başlayan bir karaktere dönüşmüştür.",
    url: "https://www.nowtv.com.tr/Gaddar/bolumler" 
  },
  { 
    id: 12, year: "2024", title: "Kübra", character: "Serhat", 
    episodes: "Tüm Bölümler", platform: "Netflix", image: "/serhat.jpeg", 
    summary: "Serhat, Gökhan’ın (Semavi) mahalleden arkadaşı ve en yakın destekçilerinden biridir. Mahalle kültürünü temsil eden, sadık ve aklıselim bir karakter olarak Gökhan’ın inanç ile gerçeklik arasındaki dönüşüm sürecinde hem yol arkadaşı hem de eleştirel bir figür olarak kritik bir rol oynar.",
    url: "https://www.netflix.com/title/81608248" 
  },
  { 
    id: 11, year: "2023", title: "Hay Sultan", character: "Turahan", 
    episodes: "Mini Dizi", platform: "tabii", image: "turahan.jpeg", 
    summary: "Turahan, dinamik ve stratejik bir karakterdir. Rüştünü ispat etmeye çalışan Turahan, sadakat, hırs ve adalet arasında gidip gelen bir yapıya sahiptir; Sabbâhi ile bağlantılı olaylarda onu yakalamaya çalışsa da başarısız olmuş ve olayların gidişini değiştiremeyen bir figür olarak kalmıştır.",
    url: "https://www.tabii.com/detail/haysultan" 
  },
  { 
    id: 10, year: "2023", title: "Çöp Adam", character: "Sarp", 
    episodes: "26-30", platform: "Star TV", image: "/sarp.jpeg", 
    summary: "Sarp, intikam duygusuyla hareket eden, derin yaralar taşıyan, zeki ve manipülatif bir karakterdir. Tamer ve Peri’nin hayatındaki dengeleri etkileyen kritik bir rol üstlenir.",
    url: "https://www.startv.com.tr/dizi/cop-adam/bolumler" 
  },
  { 
    id: 9, year: "2022", title: "Bana Karanlığını Anlat", character: "İmam", 
    episodes: "Sinema Filmi", platform: "Beyazperde", image: "/imam2.jpeg", 
    summary: "İmam karakteri, Veli'nin eşi Nermin ve ailenin diğer üyeleriyle yüzleştiği bu gerilimli gasilhane ortamında manevi bir figür olarak yer alır. İmam, ölümün soğukluğu ve ailenin karmaşık sırları arasında hem bir sığınak hem de keskin bir yüzleşme aracıdır.",
    url: "https://www.mubi.com/tr/films/tell-me-about-your-darkness" 
  },
  { 
    id: 8, year: "2021-2022", title: "Barbaroslar: Akdeniz’in Kılıcı", character: "Kılıçoğlu Şahbaz", 
    episodes: "9-28", platform: "TRT 1", image: "/şahbaz.jpeg", 
    summary: "Şahbaz, tüccar kimliğinin arkasına saklanan, kurnaz ve entrikacı bir karakterdir. Kendi çıkarları ve yüksek bir mertebe uğruna ailesini bile feda edebilecek kadar hırslıdır; Oruç ve Hızır Reis’e karşı gizli planlar kurarak taraf değiştiren ve olayların seyrini etkileyen tehlikeli bir figürdür.",
    url: "https://www.trtizle.com/diziler/barbaroslar-akdenizin-kilici" 
  },
  { 
    id: 7, year: "2020-2021", title: "Uyanış: Büyük Selçuklu", character: "Rüstem", 
    episodes: "1-15", platform: "TRT 1", image: "/rüstem.jpeg", 
    summary: "Rüstem, Selçuklu devletine karşı gizli faaliyetler yürüten Bâtınî bir dâi ve fedaisidir. Devletin içine sızmış zeki ve tehlikeli bir casus olarak görev yapmış, suikast ve istihbarat faaliyetlerinde bulunmuş ve sonunda Selçuklu alperenleri tarafından yakalanarak idam edilmiştir.",
    url: "https://www.trtizle.com/diziler/uyanis-buyuk-selcuklu" 
  },
  { 
    id: 6, year: "2020", title: "Ya İstiklal Ya Ölüm", character: "Hakkı Behiç Bey", 
    episodes: "1-6", platform: "TRT 1", image: "/behiç.jpeg", 
    summary: "Behiç Bey, işgal döneminde yaşanan siyasi ve toplumsal olayların içinde yer alan, dönemin gidişatını etkileyen önemli bir figürdür.",
    url: "https://www.trtizle.com/diziler/ya-istiklal-ya-olum" 
  },
  { 
    id: 5, 
    year: "2019", 
    title: "Kuzgun", 
    character: "Ali Bilgin", 
    episodes: "1-21", 
    platform: "Star TV", 
    image: "/kuzgun2.jpeg", 
    summary: "Ali Bilgin, hırslı, güç odaklı ve karmaşık psikolojisiyle öne çıkan kilit bir figürdür. Kuzgun’un çevresindeki Cebeci ailesiyle bağlantılı yardımcı bir karakter olarak hikâyede yer alır.",
    url: "https://youtube.com/playlist?list=PLAQU_XC8EdugOVxzz_PP8ARhlE0dBHAop" 
  },
  { 
    id: 4, year: "2018", title: "Diriliş Ertuğrul", character: "Lais", 
    episodes: "122-128", platform: "TRT 1", image: "/lais2.jpeg", 
    summary: "Komutan Lais, Bizans adına kale yöneten ve Dragos’un emrinde çalışan sinsi, zeki ve acımasız bir komutandır. Söğüt ve çevresinde kaos yaratmak için bölgeye gönderilmiş, Bizans istihbarat ağına hizmet eden bir ajan olarak Ertuğrul Bey’in planlarıyla ortaya çıkarılıp etkisiz hale getirilmiştir.",
    url: "https://www.trtizle.com/diziler/dirilis-ertugrul" 
  },
  { 
    id: 3, year: "2017", title: "İsimsizler", character: "Bozan Erol", 
    episodes: "1-13", platform: "Kanal D", image: "/bozan.jpeg", 
    summary: "Bozan Erol, zeki, acımasız ve stratejik yapısıyla öne çıkan bir terör örgütü figürüdür. Sert ve tehditkâr tavırlarıyla dikkat çeken Bozan, ana karakterlerin mücadelesinde karşılarına çıkan güçlü bir kötü karakterdir.",
    url: "https://www.kanald.com.tr/isimsizler/bolumler" 
  },
  { 
    id: 2, year: "2016", title: "46 Yok Olan", character: "Mert", 
    episodes: "2-13", platform: "Star TV", image: "/46dizi.jpeg", 
    summary: "Komiser Mert, Cinayet Büro’da görev yapan, kuralcı, dikkatli ve olaylara rasyonel yaklaşan genç bir polistir.",
    url: "https://www.startv.com.tr/dizi/46-yok-olan/bolumler" 
  },
  { 
    id: 1, year: "2023", title: "Su Yüzü", character: "Fırat", 
    episodes: "Kısa Film", platform: "TV+", image: "/fırat.jpeg", 
    summary: "Fırat, kasabada fotoğrafçılık yapan, özellikle düğün fotoğrafları çeken ve kasabanın duygusal atmosferini yansıtan bir karakterdir.",
    url: "https://tvplus.com.tr/film-izle/su-yuzu--215988411" 
  }
];

// Tarihe göre kronolojik sıralama
filmographyList.sort((a, b) => {
  const getYear = (y) => {
    if (y === "Bilinmiyor") return 0;
    return parseInt(y.split('-')[0]);
  };
  return getYear(b.year) - getYear(a.year);
});

const SUMMARY_LIMIT = 140;

function FilmoCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isLong = project.summary.length > SUMMARY_LIMIT;
  const shownSummary = expanded || !isLong
    ? project.summary
    : project.summary.slice(0, SUMMARY_LIMIT).trimEnd() + '…';

  return (
    <div
      ref={cardRef}
      className="filmo-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.5s ease ${Math.min(index, 6) * 0.05}s, transform 0.5s ease ${Math.min(index, 6) * 0.05}s`
      }}
    >
      <div style={{ height: '200px', backgroundColor: 'rgba(220, 204, 172, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(84, 107, 65, 0.1)' }}>
        {project.image ? (
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ fontFamily: 'var(--font-heading)', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '2px' }}>GÖRSEL BEKLENİYOR</span>
        )}
      </div>

      <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-light)' }}>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <span style={{ backgroundColor: 'rgba(84, 107, 65, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{project.year}</span>
            <span>BÖLÜM: {project.episodes}</span>
          </div>
          <span style={{ opacity: 0.6 }}>{project.platform}</span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--accent-dark)', margin: '0 0 0.5rem 0' }}>
          {project.title.toLocaleUpperCase('tr-TR')}
        </h3>

        <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>
          Karakter: <span style={{ color: 'var(--accent-dark)' }}>{project.character}</span>
        </p>

        <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.7, marginBottom: isLong ? '0.5rem' : '2rem' }}>
          {shownSummary}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(prev => !prev)}
            style={{
              alignSelf: 'flex-start',
              background: 'none',
              border: 'none',
              padding: 0,
              marginBottom: '2rem',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-dark)',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {expanded ? 'DAHA AZ GÖSTER' : 'DEVAMINI OKU'}
          </button>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
          {project.urls && project.urls.length > 0 ? (
            project.urls.map((u, idx) => (
              <a key={idx} href={u.link} target="_blank" rel="noreferrer" className="filmo-btn">
                {u.label}
              </a>
            ))
          ) : project.url && project.url !== "#" ? (
            <a href={project.url} target="_blank" rel="noreferrer" className="filmo-btn">
              İZLEME LİNKİ & DETAYLAR ↗
            </a>
          ) : (
            <button disabled className="filmo-btn">
              LİNK YAKINDA EKLENECEK
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

function Filmography() {
  const [activePlatform, setActivePlatform] = useState('Tümü');

  const platforms = useMemo(() => {
    const set = new Set(filmographyList.map(p => p.platform));
    return ['Tümü', ...Array.from(set).sort()];
  }, []);

  const stats = useMemo(() => {
    const years = filmographyList
      .map(p => parseInt(p.year.split('-')[0]))
      .filter(y => !isNaN(y));
    const platformCount = new Set(filmographyList.map(p => p.platform)).size;
    return {
      total: filmographyList.length,
      spanStart: Math.min(...years),
      spanEnd: new Date().getFullYear(),
      platformCount
    };
  }, []);

  const filteredList = useMemo(() => {
    if (activePlatform === 'Tümü') return filmographyList;
    return filmographyList.filter(p => p.platform === activePlatform);
  }, [activePlatform]);

  return (
    <div className="filmography-wrapper animate-fade">

      <style>{`
        .filmo-card {
          border: 1px solid rgba(84, 107, 65, 0.15);
          border-radius: 8px;
          overflow: hidden;
          background-color: var(--bg-main);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .filmo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(84, 107, 65, 0.1);
          border-color: var(--accent-dark);
        }

        .filmo-btn {
          display: inline-block;
          background-color: transparent;
          border: 1px solid var(--accent-dark);
          padding: 0.6rem 1.2rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-dark);
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .filmo-btn:hover {
          background-color: var(--accent-dark);
          color: var(--bg-main);
        }

        .filmo-btn:disabled {
          border: 1px dashed rgba(84, 107, 65, 0.3);
          color: rgba(84, 107, 65, 0.5);
          cursor: not-allowed;
        }
        
        .filmo-btn:disabled:hover {
          background-color: transparent;
          color: rgba(84, 107, 65, 0.5);
        }

        .video-showcase-container {
          max-width: 750px;
          margin: 0 auto 4rem auto;
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
          position: relative;
        }
        
        .video-showcase-video {
          width: 100%;
          height: auto;
          display: block;
          outline: none;
        }

        .filmo-header-container {
          margin-bottom: 3rem;
          padding-top: 0;
          margin-top: -2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .filmo-main-title {
          font-family: var(--font-heading);
          font-size: clamp(2rem, 8vw, 3.5rem);
          text-align: center;
          width: 100%;
          margin: 0;
          line-height: 1.2;
        }

        @media (max-width: 768px) {
          .filmo-header-container {
            margin-top: -4rem;
          }
        }

        .filmo-stats-bar {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          margin: 0 auto 2.5rem auto;
        }

        .filmo-stat {
          text-align: center;
        }

        .filmo-stat-value {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          color: var(--accent-dark);
          display: block;
          line-height: 1.1;
        }

        .filmo-stat-label {
          font-size: 0.7rem;
          letter-spacing: 1px;
          opacity: 0.6;
          font-weight: 700;
        }

        .filmo-filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin: 0 auto 3rem auto;
          max-width: 900px;
        }

        .filmo-chip {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.4rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(84, 107, 65, 0.3);
          background: transparent;
          color: var(--accent-dark);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .filmo-chip:hover {
          border-color: var(--accent-dark);
        }

        .filmo-chip.active {
          background: var(--accent-dark);
          color: var(--bg-main);
          border-color: var(--accent-dark);
        }
      `}</style>

      <div className="container" style={{ paddingBottom: '4rem' }}>

        <div className="section-header-editorial filmo-header-container">
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// EKRAN KANONU</span>
          <h1 className="editorial-title filmo-main-title">DİZİ & FİLMOGRAFİ</h1>
          <p className="editorial-subtitle" style={{ marginTop: '1rem' }}>Oyuncunun 2016'dan günümüze televizyon, sinema ve dijital platformlardaki dönüşümü, inşa ettiği karakterler ve proje arşivi.</p>
        </div>

        <div className="filmo-stats-bar">
          <div className="filmo-stat">
            <span className="filmo-stat-value">{stats.total}</span>
            <span className="filmo-stat-label">PROJE</span>
          </div>
          <div className="filmo-stat">
            <span className="filmo-stat-value">{stats.spanStart}—{stats.spanEnd}</span>
            <span className="filmo-stat-label">KARİYER ARALIĞI</span>
          </div>
          <div className="filmo-stat">
            <span className="filmo-stat-value">{stats.platformCount}</span>
            <span className="filmo-stat-label">PLATFORM</span>
          </div>
        </div>

        <div style={{ maxWidth: '750px', margin: '0 auto 1.5rem auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem' }}>
            <span className="archive-badge" style={{ backgroundColor: 'var(--accent-dark)', color: 'var(--bg-main)' }}>// VİDEO ARŞİVİ</span>
            <span style={{ fontSize: '0.8rem', opacity: 0.6, fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>SÜRE: 1 DK 56 SN</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--accent-dark)', margin: 0 }}>
            BİR AKTÖRÜN DÖNÜŞÜMÜ
          </h2>
          <p style={{ margin: 0, opacity: 0.8, fontSize: '0.95rem' }}>
            2016'dan günümüze Aytek Şayan'ın hayat verdiği tüm ikonik karakterlerin evrimi.
          </p>
        </div>

        <div className="video-showcase-container">
          <video 
            className="video-showcase-video" 
            controls 
            poster="/karakterkapak.jpeg"
          >
            <source src="/karakterediti.mp4" type="video/mp4" />
            Tarayıcınız video oynatmayı desteklemiyor.
          </video>
        </div>

        <div className="filmo-filter-bar">
          {platforms.map(p => (
            <button
              key={p}
              className={`filmo-chip ${activePlatform === p ? 'active' : ''}`}
              onClick={() => setActivePlatform(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {filteredList.map((project, index) => (
            <FilmoCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredList.length === 0 && (
          <p style={{ textAlign: 'center', opacity: 0.6, marginTop: '2rem' }}>
            Bu platformda henüz proje listelenmedi.
          </p>
        )}

      </div>
    </div>
  );
}

export default Filmography;
