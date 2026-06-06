import React, { useState, useEffect } from 'react';
import { FaPlay, FaTwitter, FaTiktok } from 'react-icons/fa';

function FanArtGallery() {
  const artworks = [
    { 
      id: 1,
      title: "Haktan & Aytek benzerliği.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan", "Haktan Akarçeşme"],
      coverImage: "/haktan.jpeg",
      url: "https://x.com/i/status/2040734409280639229" 
    },
    { 
      id: 2,
      title: "Haktan & Aytek benzerliği vol2", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan", "Haktan Akarçeşme"],
      coverImage: "/haktan2.jpeg",
      url: "https://x.com/i/status/2061053121829200270" 
    },
    { 
      id: 3,
      title: "cıvıl cıvıl şerif psikolojik vakaya dönüşüyor.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/psikolojikvaka.jpeg",
      url: "https://x.com/i/status/2015398515061497897" 
    },
    { 
      id: 4,
      title: "abartılması gereken bir sahne.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/abartilmasigerekensahne.jpeg",
      url: "https://x.com/i/status/1995918721424990387" 
    },
    { 
      id: 5,
      title: "Şerif Furtuna tanıtım sahnesi.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/tanitim.jpeg",
      url: "https://x.com/i/status/2007423704167243996" 
    },
    { 
      id: 6,
      title: "Kaliteli oyuncu.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/kaliteli.jpeg",
      url: "https://x.com/i/status/2024070681986560381" 
    },
    { 
      id: 7,
      title: "Şerif Furtuna kaçış.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/kacis.jpeg",
      url: "https://x.com/i/status/2030022864431091722" 
    },
    { 
      id: 8,
      title: "Komik Şerif Furtuna kesitleri.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/komik.jpeg",
      url: "https://x.com/i/status/2004848306992849253" 
    },
    { 
      id: 9,
      title: "Şerif'in en büyük savaşı kendisi.'", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/enbuyuksavasi.jpeg",
      url: "https://x.com/i/status/2002481223067972005" 
    },
    { 
      id: 10,
      title: "Humor", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/humor.jpeg",
      url: "https://x.com/i/status/2004899100622545049" 
    },
    { 
      id: 11,
      title: "Kendine iyi bak.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/iyibak.jpeg",
      url: "https://x.com/i/status/2005593054887952852" 
    },
    { 
      id: 12,
      title: "Şerif Furtuna fictional bir karakter.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/fic.jpeg",
      url: "https://x.com/i/status/2006710350092087329" 
    },
    { 
      id: 13,
      title: "different fonts.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/dif.jpeg",
      url: "https://x.com/i/status/2007830234448466401" 
    },
    { 
      id: 14,
      title: "heathens.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/heathens.jpeg",
      url: "https://x.com/i/status/2008636494764708149" 
    },
    { 
      id: 15,
      title: "Ghetto Şerif Furtuna.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/savas.jpeg",
      url: "https://x.com/i/status/2009939462537564226" 
    },
    { 
      id: 16,
      title: "Vuruldum ama ölmedumki.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/vuruldum.jpeg",
      url: "https://x.com/i/status/2009999415973655005" 
    },
    { 
      id: 17,
      title: "Bir şehir sanki karşında ⛓️💥", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/sehir.jpeg",
      url: "https://x.com/LunarisOne/status/2043014450945446061" 
    },
    { 
      id: 18,
      title: "yalnızlık.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/yalniz.jpeg",
      url: "https://x.com/LunarisOne/status/2040200706276171836" 
    },
    { 
      id: 19,
      title: "sabaha kadar namaz kıl ne fayda..", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/namaz.jpeg",
      url: "https://x.com/chicolw/status/2040006537016435055" 
    },
    { 
      id: 20,
      title: "kuyuya atılınca hakkını helal etmediği annesini sayıklıyor 🥲", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/kuyu.jpeg",
      url: "https://x.com/chicolw/status/2048077231046471823" 
    },
    { 
      id: 21,
      title: "şerif furtuna geliyor 🚶🏻şerif furtuna gidiyor 🚶🏻‍➡️", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/geliyor.jpeg",
      url: "https://x.com/chicolw/status/2048434533008060601" 
    },
    { 
      id: 22,
      title: "inadına inadına darbuka.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/durak.jpeg",
      url: "https://x.com/chicolw/status/2052468338274574821" 
    },
    { 
      id: 23,
      title: "çay.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/cay.jpeg",
      url: "https://x.com/chicolw/status/2057368402587512846" 
    },
    { 
      id: 24,
      title: "Aytek Şayan resitali.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/omg.jpeg",
      url: "https://x.com/chicolw/status/2061118089786179832" 
    },
    { 
      id: 25,
      title: "bordo gömlek.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/gomlek.jpeg",
      url: "https://x.com/chicolw/status/2061526675251237038" 
    },
    { 
      id: 26,
      title: "şerif furtuna core", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/core.jpeg",
      url: "https://x.com/chicolw/status/2040354168334950852" 
    },
    { 
      id: 27,
      title: "resital.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/resital.jpeg",
      url: "https://x.com/ittsmiiaa/status/2050590625096184252" 
    },
    { 
      id: 28,
      title: "cehenneme çevireceğim hayatınızı…", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/cehennem.jpeg",
      url: "https://x.com/ittsmiiaa/status/2043311920325726392" 
    },
    { 
      id: 29,
      title: "Tiyatro Günü.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/tiyatro.jpeg",
      url: "https://x.com/ittsmiiaa/status/2037492224167190921" 
    },
    { 
      id: 30,
      title: "AYTEK ŞAYAN.", 
      platform: "X",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/aytek.jpeg",
      url: "https://x.com/ittsmiiaa/status/2022585339202933183" 
    },
    { 
      id: 31,
      title: "Şerif & Eleni", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Eleni"],
      coverImage: "/oyy.jpeg",
      url: "https://vt.tiktok.com/ZSQ8Vb6JR/" 
    },
    { 
      id: 32,
      title: "harmony.", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Eleni"],
      coverImage: "/harmony.jpeg",
      url: "https://vt.tiktok.com/ZSQ8V4X5x/" 
    },
    { 
      id: 33,
      title: "Şerif Karizma Furtuna.", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/karizma2.jpeg",
      url: "https://vt.tiktok.com/ZSQ8VGK8q/" 
    },
    { 
      id: 34,
      title: "Göz kırpma.", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/goz.jpeg",
      url: "https://vt.tiktok.com/ZSQ8VWmtB/" 
    },
    { 
      id: 35,
      title: "Haktan & Aytek", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan" , "Haktan Akarçeşme"],
      coverImage: "/2haktan.jpeg",
      url: "https://vt.tiktok.com/ZSQ8Vqe2A/" 
    },
    { 
      id: 36,
      title: "Şerif & Eleni", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan" , "Eleni"],
      coverImage: "/eleni.jpeg",
      url: "https://vt.tiktok.com/ZSQ8V5qAL/" 
    },
     { 
      id: 37,
      title: "darbuka", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/darbuka.jpeg",
      url: "https://vt.tiktok.com/ZSQ8q2wnA/" 
    },
     { 
      id: 38,
      title: "hadi la ordan", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/hadi.jpeg",
      url: "https://vt.tiktok.com/ZSQ8VEAag/" 
    },
     { 
      id: 39,
      title: "Karizma.", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/karizma.jpeg",
      url: "https://vt.tiktok.com/ZSQ8qNegS/" 
    },
     { 
      id: 40,
      title: "Sadece sevilmek istedim.", 
      platform: "TikTok",
      tags: ["Şerif Furtuna", "Aytek Şayan"],
      coverImage: "/sadece.jpeg",
      url: "https://vt.tiktok.com/ZSQ8qddaq/" 
    }
  ];

  // Kartları karıştırmak için State oluşturuyoruz
  const [shuffledArtworks, setShuffledArtworks] = useState([]);

  // Sayfa yüklendiğinde artworks listesini rastgele karıştırır
  useEffect(() => {
    const shuffled = [...artworks].sort(() => Math.random() - 0.5);
    setShuffledArtworks(shuffled);
  }, []);

  return (
    <div className="container animate-fade" style={{ padding: '4rem 0', minHeight: '80vh' }}>
      <style>{`
        .watch-link {
          text-decoration: none !important;
          color: inherit;
          display: inline-block;
          width: 100%;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .art-card {
          background: var(--bg-main);
          border: 1px solid rgba(84, 107, 65, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .art-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-dark);
          box-shadow: 0 15px 30px rgba(84, 107, 65, 0.1);
        }

        .cover-image-container {
          position: relative;
          width: 100%;
          height: 180px;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(84, 107, 65, 0.1);
          background: rgba(84,107,65,0.05); 
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover; 
          transition: transform 0.5s ease, filter 0.5s ease;
        }

        .play-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.8);
          background: rgba(20, 25, 21, 0.7);
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          pointer-events: none;
          z-index: 2;
          backdrop-filter: blur(4px);
        }

        .art-card:hover .cover-image {
          transform: scale(1.08); 
          filter: brightness(0.8);
        }

        .art-card:hover .play-overlay {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }

        .tag-container {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .edit-tag {
          font-size: 0.7rem;
          background: rgba(84, 107, 65, 0.1);
          color: var(--accent-dark);
          padding: 0.2rem 0.6rem;
          border-radius: 20px;
          font-weight: bold;
          letter-spacing: 0.5px;
          transition: 0.3s;
        }
        
        .edit-tag:hover {
          background: var(--accent-dark);
          color: var(--bg-main);
        }

        .play-btn {
          width: 100%;
          padding: 0.8rem;
          background: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          font-family: var(--font-heading);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: auto; 
          border-radius: 4px;
        }

        .play-btn:hover {
          background: var(--accent-dark);
          color: var(--bg-main);
        }

        .no-context-card {
          border: 2px dashed rgba(84, 107, 65, 0.4);
          background: transparent;
        }

        .no-context-card:hover {
          border: 2px dashed var(--accent-dark);
        }
        
        @keyframes pulseLive {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        .no-context-placeholder {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          color: var(--accent-dark);
          letter-spacing: 2px;
          border-bottom: 1px dashed rgba(84, 107, 65, 0.2);
          margin-bottom: 1.5rem;
          position: relative;
        }
        
        .live-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #e74c3c;
          border-radius: 50%;
          margin-left: 8px;
          animation: pulseLive 1.5s infinite;
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="archive-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>// GÖRSEL HAFIZA MERKEZİ</span>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--accent-dark)', marginBottom: '1rem' }}>
          FAN ESERLERİ GALERİSİ
        </h1>
        <p style={{ opacity: 0.8, maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Topluluğumuzun yaratıcı gözünden Aytek Şayan editleri ve video kurguları.
        </p>
      </div>
      
      <div className="gallery-grid">
        
      {/* 1. SIRADA HER ZAMAN NO CONTEXT AYTEK KARTI OLACAK */}
        <div className="art-card no-context-card">
          {/* KAPAK FOTOĞRAFI */}
          <div className="cover-image-container">
            <img 
              src="/kapak.jpeg" 
              alt="No Context Aytek" 
              className="cover-image" 
              style={{ objectPosition: 'center' }}
            />
          </div>

          <h3 style={{ color: 'var(--accent-dark)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
            NO CONTEXT AYTEK
          </h3>
          <p style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '1.5rem', lineHeight: '1.5', minHeight: '40px' }}>
            Aytek Şayan'ın en ikonik anlarının kesitleri. 
          </p>
          <a href="https://x.com/nocontextaytek" target="_blank" rel="noreferrer" className="watch-link" style={{ marginTop: 'auto' }}>
            <button className="play-btn" style={{ borderStyle: 'dashed' }}>
              <FaTwitter size={14} /> SAYFAYA GİT
            </button>
          </a>
        </div>

        {/* 2. SIRADAN İTİBAREN DİĞER KARTLAR KARIŞIK OLARAK LİSTELENECEK */}
        {shuffledArtworks.map((art) => (
          <div key={art.id} className="art-card">
            <div className="cover-image-container">
              <img src={art.coverImage} alt={art.title} className="cover-image" />
              <div className="play-overlay">
                <FaPlay size={16} style={{ marginLeft: '4px' }} />
              </div>
            </div>
            
            <div className="tag-container">
              {art.tags.map((tag, i) => (
                <span key={i} className="edit-tag">{tag}</span>
              ))}
            </div>

            <h3 style={{ color: 'var(--accent-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', lineHeight: '1.4' }}>
              {art.title}
            </h3>
            
            <a href={art.url} target="_blank" rel="noreferrer" className="watch-link" style={{ marginTop: 'auto' }}>
              <button className="play-btn">
                {art.platform === 'TikTok' ? <FaTiktok size={14} /> : <FaTwitter size={14} />} 
                {art.platform === 'TikTok' ? "TIKTOK'TA İZLE" : "X'TE İZLE"}
              </button>
            </a>
          </div>
        ))}

      </div>
    </div>
  );
}

export default FanArtGallery;