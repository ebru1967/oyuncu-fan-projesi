import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { archivePhotos, wallpapers, headers, gifs, stickers, profilePics, btsVideos, btsPhotos } from '../data/photoData';

function MediaArchive() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('karakter-kesitleri');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (location.hash === '#karakter-kesitleri') setActiveTab('karakter-kesitleri');
    if (location.hash === '#fotograflar') setActiveTab('fotograflar');
    if (location.hash === '#wallpapers') setActiveTab('wallpapers');
    if (location.hash === '#headers') setActiveTab('headers'); 
    if (location.hash === '#profil-fotograflari') setActiveTab('profil-fotograflari'); 
    if (location.hash === '#kamera-arkasi') setActiveTab('kamera-arkasi');
    if (location.hash === '#replikler') setActiveTab('replikler');
    if (location.hash === '#mimikler') setActiveTab('mimikler');
    if (location.hash === '#sticker') setActiveTab('sticker');
  }, [location]);

  const dizi1Kesitleri = [
    { id: 1, bolum: "1. Bölüm", sure: "6:13", url: "https://x.com/chicolw/status/2015470724346003902?s=46" },
    { id: 2, bolum: "2. Bölüm", sure: "9:44", url: "https://x.com/chicolw/status/2015485987397255179?s=46" },
    { id: 3, bolum: "3. Bölüm", sure: "7:16", url: "https://x.com/chicolw/status/2015711826776903964?s=46" },
    { id: 4, bolum: "4. Bölüm", sure: "42:15", url: "https://x.com/chicolw/status/2015762717299147109?s=46" },
    { id: 5, bolum: "5. Bölüm", sure: "32:32", url: "https://x.com/chicolw/status/2015832764923187418?s=46" },
    { id: 6, bolum: "6. Bölüm", sure: "29:50", url: "https://x.com/chicolw/status/2016435797570765187?s=46" },
    { id: 7, bolum: "7. Bölüm", sure: "15:49", url: "https://x.com/chicolw/status/2016531600750551438?s=46" },
    { id: 8, bolum: "8. Bölüm", sure: "28:00", url: "https://x.com/chicolw/status/2017173002044006884?s=46" },
    { id: 9, bolum: "9. Bölüm", sure: "22:48", url: "https://x.com/chicolw/status/2017216212342555005?s=46" },
    { id: 10, bolum: "10. Bölüm", sure: "13:54", url: "https://x.com/chicolw/status/2017605640655425599?s=46" },
    { id: 11, bolum: "11. Bölüm", sure: "11:57", url: "https://x.com/chicolw/status/2017633343777485285?s=46" },
    { id: 12, bolum: "12. Bölüm", sure: "24:41", url: "https://x.com/chicolw/status/2017714776302887246?s=46" },
    { id: 13, bolum: "13. Bölüm", sure: "20:12", url: "https://x.com/chicolw/status/2017891049603994048?s=46" },
    { id: 14, bolum: "14. Bölüm", sure: "17:32", url: "https://x.com/chicolw/status/2018310499734040820?s=46" },
    { id: 15, bolum: "15. Bölüm", sure: "29:11", url: "https://x.com/chicolw/status/2020564009959686389?s=46" },
    { id: 16, bolum: "16. Bölüm", sure: "12:25", url: "https://x.com/chicolw/status/2017368023628214706?s=46" },
    { id: 17, bolum: "17. Bölüm", sure: "24:16", url: "https://x.com/chicolw/status/2019895810322776550?s=46" },
    { id: 18, bolum: "18. Bölüm", sure: "28:54", url: "https://x.com/chicolw/status/2023110770339565605?s=46" },
    { id: 19, bolum: "19. Bölüm", sure: "4:39", url: "https://x.com/chicolw/status/2024963527870452099?s=46" },
    { id: 20, bolum: "20. Bölüm", sure: "32:37", url: "https://x.com/chicolw/status/2030042228559655069?s=46" },
    { id: 21, bolum: "21. Bölüm", sure: "14:08", url: "https://x.com/chicolw/status/2032577315624902776?s=46" },
    { id: 22, bolum: "22. Bölüm", sure: "21:39", url: "https://x.com/chicolw/status/2037644191258251771?s=46" },
    { id: 23, bolum: "23. Bölüm", sure: "25:22", url: "https://x.com/chicolw/status/2040200631743303756?s=46" },
    { id: 24, bolum: "24. Bölüm", sure: "19:53", url: "https://x.com/chicolw/status/2042726618221732141?s=46" },
    { id: 25, bolum: "25. Bölüm", sure: "18:58", url: "https://x.com/chicolw/status/2047815789479182339?s=46" },
    { id: 26, bolum: "26. Bölüm", sure: "6:10", url: "https://x.com/chicolw/status/2050326007068946747?s=46" },
    { id: 27, bolum: "27. Bölüm", sure: "7:04", url: "https://x.com/chicolw/status/2052872532533911657?s=46" },
    { id: 28, bolum: "28. Bölüm", sure: "18:25", url: "https://x.com/chicolw/status/2055412309099467166?s=46" },
    { id: 29, bolum: "29. Bölüm", sure: "25:43", url: "https://x.com/chicolw/status/2057960836216258841?s=46" },
    { id: 30, bolum: "30. Bölüm", sure: "9:52", url: "https://x.com/chicolw/status/2060476085939187770?s=46" },
    { id: 31, bolum: "31. Bölüm", sure: "11:50", url: "https://x.com/chicolw/status/2063197647431712938?s=46" }
  ];

  const dizi2Kesitleri = [
    { id: 1, bolum: "1. Part", sure: "58:16", url: "https://x.com/chicolw/status/2026617959246856555?s=46" },
    { id: 2, bolum: "2. Part", sure: "67:10", url: "https://x.com/chicolw/status/2026640745449279568?s=46" },
    { id: 3, bolum: "3. Part", sure: "49:29", url: "https://x.com/chicolw/status/2026684583899533414?s=46" }
  ];

  return (
    <div className="media-wrapper animate-fade">
      
      <style>{`
        /* SCROLLBAR TASARIMI */
        .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(84, 107, 65, 0.05); border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(84, 107, 65, 0.3); border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(84, 107, 65, 0.6); }
        
        /* SEKME MENÜSÜ (Pill Badges) */
        .tab-menu-container {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          /* Sadece scrollbar alanını gösterir, alt çizgi kaldırıldı */
        }

        .media-tab-btn {
          background: transparent;
          border: 1px dashed rgba(84, 107, 65, 0.4);
          border-radius: 30px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          color: rgba(84, 107, 65, 0.7);
          padding: 0.6rem 1.5rem;
          white-space: nowrap;
        }
        
        .media-tab-btn.active {
          background: var(--accent-dark);
          color: var(--bg-main);
          border-color: var(--accent-dark);
          box-shadow: 0 4px 10px rgba(84, 107, 65, 0.2);
          transform: translateY(-2px);
        }

        .media-tab-btn:hover:not(.active) {
          border-color: var(--accent-dark);
          color: var(--accent-dark);
          background: rgba(84, 107, 65, 0.05);
        }

        /* VİDEO KESİTLERİ (Kayıt Defteri Stili) */
        .scene-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 1.5rem;
          background: linear-gradient(90deg, rgba(84, 107, 65, 0.05) 0%, rgba(255,255,255,0) 100%);
          border: 1px solid rgba(84, 107, 65, 0.1);
          border-left: 4px solid var(--accent-dark);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .scene-card:hover {
          transform: translateX(5px);
          background: linear-gradient(90deg, rgba(84, 107, 65, 0.1) 0%, rgba(255,255,255,0) 100%);
          border-color: rgba(84, 107, 65, 0.3);
        }

        /* ARŞİV KARTLARI (Fotoğraf & Görseller) */
        .media-grid-card {
          border: 1px solid rgba(84, 107, 65, 0.15);
          border-radius: 6px;
          padding: 0.8rem;
          background-color: var(--bg-main);
          box-shadow: 2px 2px 0px rgba(84, 107, 65, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .media-grid-card:hover {
          transform: translateY(-4px);
          box-shadow: 6px 6px 0px rgba(84, 107, 65, 0.1);
          border-color: rgba(84, 107, 65, 0.3);
        }

        /* İNDİR / İZLE BUTONLARI */
        .action-link-btn {
          display: inline-block;
          background-color: transparent;
          color: var(--accent-dark);
          border: 1px solid var(--accent-dark);
          padding: 0.5rem 1.2rem;
          font-size: 0.75rem;
          border-radius: 30px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: bold;
          font-family: var(--font-heading);
          letter-spacing: 1px;
        }

        .action-link-btn:hover {
          background-color: var(--accent-dark);
          color: var(--bg-main);
        }
      `}</style>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// GÖRSEL & İŞİTSEL ENVANTER</span>
          <h1 className="editorial-title" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>MEDYA DEPOSU</h1>
          <p className="editorial-subtitle">Oyuncunun profesyonel çekimlerinden, set arkası hallerine ve kurgularda kullanabileceğiniz ikonik mimik arşivine uzanan dijital kaynaklar.</p>
        </div>

        {/* SEKME (TAB) MENÜSÜ */}
        <div className="tab-menu-container custom-scroll">
          <button className={`media-tab-btn ${activeTab === 'karakter-kesitleri' ? 'active' : ''}`} onClick={() => setActiveTab('karakter-kesitleri')}>KARAKTER KESİTLERİ</button>
          <button className={`media-tab-btn ${activeTab === 'fotograflar' ? 'active' : ''}`} onClick={() => setActiveTab('fotograflar')}>FOTOĞRAF ARŞİVİ</button>
          <button className={`media-tab-btn ${activeTab === 'wallpapers' ? 'active' : ''}`} onClick={() => setActiveTab('wallpapers')}>DUVAR KAĞITLARI</button>
          <button className={`media-tab-btn ${activeTab === 'profil-fotograflari' ? 'active' : ''}`} onClick={() => setActiveTab('profil-fotograflari')}>PROFİL FOTOĞRAFLARI</button>
          <button className={`media-tab-btn ${activeTab === 'headers' ? 'active' : ''}`} onClick={() => setActiveTab('headers')}>HEADER GÖRSELLERİ</button>
          <button className={`media-tab-btn ${activeTab === 'kamera-arkasi' ? 'active' : ''}`} onClick={() => setActiveTab('kamera-arkasi')}>KAMERA ARKASI</button>
          <button className={`media-tab-btn ${activeTab === 'mimikler' ? 'active' : ''}`} onClick={() => setActiveTab('mimikler')}>MİMİKLER (GIF)</button>
          <button className={`media-tab-btn ${activeTab === 'sticker' ? 'active' : ''}`} onClick={() => setActiveTab('sticker')}>STICKER</button>
        </div>

        {/* SEKME İÇERİKLERİ */}
        <div className="tab-content-container">

          {/* 1. KARAKTER KESİTLERİ */}
          {activeTab === 'karakter-kesitleri' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>KARAKTER KESİTLERİ (ONLY SCENES)</h2>
              <p style={{ opacity: 0.8, marginBottom: '3rem', fontSize: '0.95rem' }}>Dizilerin tamamını izlemek yerine sadece favori karakterinizin sahnelerini arayanlar için bölüm bölüm derlenmiş X (Twitter) arşiv listesi.</p>
              
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ borderBottom: '2px dashed rgba(84, 107, 65, 0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h3 style={{ margin: 0, color: 'var(--accent-dark)', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>TAŞACAK BU DENİZ</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.8, fontFamily: 'monospace' }}>// Şerif Furtuna</span>
                </div>
                
                <div className="custom-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                  {dizi1Kesitleri.map((kesit) => (
                    <div key={kesit.id} className="scene-card">
                      <div>
                        <strong style={{ color: 'var(--accent-dark)', display: 'block', marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>{kesit.bolum} - Tüm Sahneler</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7, fontFamily: 'monospace' }}>Ekran Süresi: {kesit.sure} dk</span>
                      </div>
                      <a href={kesit.url} target="_blank" rel="noreferrer" className="action-link-btn">
                        X'TE İZLE ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ borderBottom: '2px dashed rgba(84, 107, 65, 0.3)', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h3 style={{ margin: 0, color: 'var(--accent-dark)', fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>GADDAR</h3>
                  <span style={{ fontSize: '0.85rem', opacity: 0.8, fontFamily: 'monospace' }}>// Gürkan Komiser</span>
                </div>
                
                <div className="custom-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                  {dizi2Kesitleri.map((kesit) => (
                    <div key={kesit.id} className="scene-card">
                      <div>
                        <strong style={{ color: 'var(--accent-dark)', display: 'block', marginBottom: '0.3rem', fontFamily: 'var(--font-heading)' }}>{kesit.bolum} - Tüm Sahneler</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.7, fontFamily: 'monospace' }}>Ekran Süresi: {kesit.sure} dk</span>
                      </div>
                      <a href={kesit.url} target="_blank" rel="noreferrer" className="action-link-btn">
                        X'TE İZLE ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. FOTOĞRAF ARŞİVİ */}
          {activeTab === 'fotograflar' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>DİJİTAL KARANLIK ODA</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>Kariyer duraklarından, set hallerinden ve profesyonel çekimlerden oluşan geniş kapsamlı fotoğraf arşivi. Büyütmek için fotoğrafların üzerine tıklayın.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {archivePhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    className="media-grid-card"
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ cursor: 'zoom-in' }}
                  >
                    <div style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'rgba(84, 107, 65, 0.05)' }}>
                      <img 
                        src={photo.url} 
                        alt={`Arşiv Kare ${photo.id}`} 
                        loading="lazy" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }} 
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'} 
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. DUVAR KAĞITLARI */}
          {activeTab === 'wallpapers' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>EKRAN ARŞİVİ (MOBİL)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>Telefonlarınız için özel tasarlanmış, yüksek çözünürlüklü duvar kağıtları (9:16 form).</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                {wallpapers.map(item => (
                  <div key={item.id} className="media-grid-card" style={{ textAlign: 'center' }}>
                    <div style={{ aspectRatio: '9/16', backgroundColor: 'rgba(220, 204, 172, 0.3)', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={item.url} alt={`Wallpaper ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-dark)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>Wallpaper {item.id}</h4>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6, display: 'block', marginBottom: '1rem', fontFamily: 'monospace' }}>[ HD • Mobil ]</span>
                    
                    <a href={item.url} download={`AytekSayan_Wallpaper_${item.id}.jpeg`} className="action-link-btn" style={{ width: '100%' }}>
                      İNDİR ↓
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFİL FOTOĞRAFLARI SEKMESİ */}
          {activeTab === 'profil-fotograflari' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>PROFİL FOTOĞRAFLARI (AVATAR)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>Sosyal medya hesaplarınızda (X, Instagram, TikTok vb.) kullanabileceğiniz yuvarlak formatlı, özel kesilmiş profil görselleri.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '2rem' }}>
                {profilePics && profilePics.length > 0 ? (
                  profilePics.map(item => (
                    <div key={item.id} className="media-grid-card" style={{ textAlign: 'center' }}>
                      <div style={{ aspectRatio: '1/1', backgroundColor: 'rgba(220, 204, 172, 0.3)', margin: '0 auto 1.2rem auto', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent-dark)', width: '100px', height: '100px' }}>
                        <img src={item.url} alt={`Profil ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <h4 style={{ margin: '0 0 1rem 0', color: 'var(--accent-dark)', fontSize: '0.8rem', fontFamily: 'var(--font-heading)' }}>Icon #{item.id}</h4>
                      
                      <a href={item.url} download={`AytekSayan_Profil_${item.id}.jpeg`} className="action-link-btn" style={{ fontSize: '0.7rem' }}>
                        İNDİR ↓
                      </a>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '3rem 2rem', textAlign: 'center', width: '100%', gridColumn: '1 / -1', border: '1px dashed rgba(84, 107, 65, 0.3)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.6, fontFamily: 'monospace' }}>// PROFİL FOTOĞRAFLARI YAKINDA EKLENECEK</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* HEADER GÖRSELLERİ */}
          {activeTab === 'headers' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>HEADER ARŞİVİ (MASAÜSTÜ & PROFİL)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>X (Twitter) profilleriniz veya masaüstü ekranlarınız için yüksek çözünürlüklü yatay görseller.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {headers.map(item => (
                  <div key={item.id} className="media-grid-card" style={{ textAlign: 'center' }}>
                    <div style={{ aspectRatio: '3/1', backgroundColor: 'rgba(220, 204, 172, 0.3)', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={item.url} alt={`Header ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-dark)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>Header Tasarım {item.id}</h4>
                    
                    <a href={item.url} download={`AytekSayan_Header_${item.id}.jpeg`} className="action-link-btn" style={{ marginTop: '1rem' }}>
                      CİHAZA İNDİR ↓
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SET GÜNLÜKLERİ */}
          {activeTab === 'kamera-arkasi' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>SET GÜNLÜKLERİ & KAMERA ARKASI</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>Çekim aralarındaki doğal anlar ve ekip içi şakalaşmalar...</p>
              
              <div style={{ columnCount: 'auto', columnWidth: '300px', columnGap: '1.5rem' }}>
                {btsPhotos && btsPhotos.map(photo => (
                  <div key={photo.id} className="media-grid-card" style={{ marginBottom: '1.5rem', breakInside: 'avoid', padding: '0.5rem' }}>
                    <img src={photo.url} alt="Kamera Arkası" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
                  </div>
                ))}

                {btsVideos && btsVideos.map(video => (
                  <div key={video.id} className="media-grid-card" style={{ marginBottom: '1.5rem', breakInside: 'avoid', padding: '0.5rem', backgroundColor: '#000' }}>
                    <video src={`${video.url}#t=0.1`} controls preload="none" playsInline style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MİMİKLER */}
          {activeTab === 'mimikler' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>MİMİK VE BAKIŞ GALERİSİ</h2>
              
              <div style={{ columnCount: 'auto', columnWidth: '200px', columnGap: '1rem' }}>
                {gifs && gifs.length > 0 ? (
                  gifs.map(gif => (
                    <div key={gif.id} className="media-grid-card" style={{ marginBottom: '1rem', breakInside: 'avoid', padding: '0.3rem' }}>
                      <video src={gif.url} autoPlay loop muted playsInline style={{ width: '100%', display: 'block', borderRadius: '4px' }} />
                    </div>
                  ))
                ) : (
                  <p style={{ fontFamily: 'monospace', opacity: 0.6 }}>// Arşiv yükleniyor...</p>
                )}
              </div>
            </div>
          )}

          {/* STICKER */}
          {activeTab === 'sticker' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1rem', fontSize: '1.5rem' }}>STICKER PAKETLERİ</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem', fontSize: '0.95rem' }}>WhatsApp ve Telegram için özel hazırlanmış çıkartmalar. Uygulamaya gitmek için tıklayın.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                {stickers && stickers.map((paket) => (
                  <div key={paket.id} className="media-grid-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                    <div style={{ width: '60px', height: '60px', margin: '0 auto 1.5rem auto', fontSize: '2.5rem' }}>🎭</div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--accent-dark)', fontFamily: 'var(--font-heading)' }}>{paket.name}</h4>
                    <a 
                      href={paket.url}
                      target="_blank" 
                      rel="noreferrer"
                      className="action-link-btn"
                    >
                      PAKETİ GÖRÜNTÜLE ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div> 
      </div> 

      {/* --- TAM EKRAN FOTOĞRAF BÜYÜTÜCÜ (LIGHTBOX) --- */}
      {selectedPhoto && (
        <div 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)', zIndex: 9999, display: 'flex',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', backdropFilter: 'blur(5px)'
          }}
          onClick={() => setSelectedPhoto(null)} 
        >
          <button 
            onClick={() => setSelectedPhoto(null)}
            style={{ position: 'absolute', top: '20px', right: '30px', background: 'transparent', color: '#fff', border: 'none', fontSize: '3rem', cursor: 'pointer', opacity: 0.8 }}
          >
            ×
          </button>
          <img 
            src={selectedPhoto.url} 
            alt="Büyütülmüş Görsel" 
            style={{ maxHeight: '75vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', cursor: 'default' }} 
            onClick={(e) => e.stopPropagation()} 
          />
          <a 
            href={selectedPhoto.url} 
            download={`Arsiv_${selectedPhoto.id}.jpeg`}
            className="action-link-btn"
            style={{ marginTop: '2.5rem', color: 'var(--bg-main)', borderColor: 'var(--bg-main)' }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--bg-main)'; e.currentTarget.style.color = '#000'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--bg-main)'; }}
          >
            CİHAZA İNDİR ↓
          </a>
        </div>
      )}
    </div>
  );
}

export default MediaArchive;