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
    { id: 30, bolum: "30. Bölüm", sure: "9:52", url: "https://x.com/chicolw/status/2060476085939187770?s=46" }
  ];

  const dizi2Kesitleri = [
    { id: 1, bolum: "1. Part", sure: "58:16", url: "https://x.com/chicolw/status/2026617959246856555?s=46" },
    { id: 2, bolum: "2. Part", sure: "67:10", url: "https://x.com/chicolw/status/2026640745449279568?s=46" },
    { id: 3, bolum: "3. Part", sure: "49:29", url: "https://x.com/chicolw/status/2026684583899533414?s=46" }
  ];

  return (
    <div className="media-wrapper animate-fade">
      
      {/* Özel Scrollbar Tasarımı */}
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-track { background: rgba(84, 107, 65, 0.05); border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(84, 107, 65, 0.3); border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: rgba(84, 107, 65, 0.6); }
      `}</style>

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        
        {/* SAYFA BAŞLIĞI */}
        <div className="section-header-editorial" style={{ marginBottom: '3rem' }}>
          <span className="archive-badge">// GÖRSEL & İŞİTSEL ENVANTER</span>
          <h1 className="editorial-title" style={{ fontSize: '3.5rem' }}>MEDYA DEPOSU</h1>
          <p className="editorial-subtitle">Oyuncunun profesyonel çekimlerinden, set arkası hallerine ve kurgularda kullanabileceğiniz ikonik mimik arşivine uzanan dijital kaynaklar.</p>
        </div>

        {/* SEKME (TAB) MENÜSÜ */}
        <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '2px solid rgba(84, 107, 65, 0.2)', marginBottom: '3rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          
          <button onClick={() => setActiveTab('karakter-kesitleri')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'karakter-kesitleri' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'karakter-kesitleri' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            KARAKTER KESİTLERİ
          </button>

          <button onClick={() => setActiveTab('fotograflar')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'fotograflar' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'fotograflar' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            FOTOĞRAF ARŞİVİ
          </button>

          <button onClick={() => setActiveTab('wallpapers')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'wallpapers' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'wallpapers' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            DUVAR KAĞITLARI
          </button>

          <button onClick={() => setActiveTab('profil-fotograflari')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'profil-fotograflari' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'profil-fotograflari' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            PROFİL FOTOĞRAFLARI
          </button>

          <button onClick={() => setActiveTab('headers')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'headers' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'headers' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            HEADER GÖRSELLERİ
          </button>

          <button onClick={() => setActiveTab('kamera-arkasi')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'kamera-arkasi' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'kamera-arkasi' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            KAMERA ARKASI
          </button>

          <button onClick={() => setActiveTab('mimikler')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'mimikler' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'mimikler' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            MİMİKLER (GIF)
          </button>

          <button onClick={() => setActiveTab('sticker')} style={{ background: 'transparent', border: 'none', fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', color: activeTab === 'sticker' ? 'var(--accent-dark)' : 'rgba(84, 107, 65, 0.5)', borderBottom: activeTab === 'sticker' ? '3px solid var(--accent-dark)' : '3px solid transparent', paddingBottom: '0.5rem', whiteSpace: 'nowrap' }}>
            STICKER
          </button>
        </div>

        {/* SEKME İÇERİKLERİ */}
        <div className="tab-content-container">

          {/* 1. KARAKTER KESİTLERİ */}
          {activeTab === 'karakter-kesitleri' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>KARAKTER KESİTLERİ (ONLY SCENES)</h2>
              <p style={{ opacity: 0.8, marginBottom: '3rem' }}>Dizilerin tamamını izlemek yerine sadece favori karakterinizin sahnelerini arayanlar için bölüm bölüm derlenmiş X (Twitter) arşiv listesi.</p>
              
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ borderBottom: '2px solid var(--accent-dark)', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h3 style={{ margin: 0, color: 'var(--accent-dark)', fontSize: '1.4rem' }}>TAŞACAK BU DENİZ</h3>
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Karakter: Şerif Furtuna</span>
                </div>
                
                <div className="custom-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                  {dizi1Kesitleri.map((kesit) => (
                    <div key={kesit.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem', backgroundColor: 'rgba(84, 107, 65, 0.03)', border: '1px solid rgba(84, 107, 65, 0.1)', borderRadius: '4px', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(84, 107, 65, 0.08)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(84, 107, 65, 0.03)'}>
                      <div>
                        <strong style={{ color: 'var(--accent-dark)', display: 'block', marginBottom: '0.2rem' }}>{kesit.bolum} - Tüm Sahneler</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Ekran Süresi: {kesit.sure} dk</span>
                      </div>
                      <a href={kesit.url} target="_blank" rel="noreferrer" style={{ backgroundColor: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', padding: '0.5rem 1.5rem', fontSize: '0.8rem', borderRadius: '4px', textDecoration: 'none', transition: '0.3s', fontWeight: 'bold' }} onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}>
                        X'TE İZLE ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ borderBottom: '2px solid var(--accent-dark)', paddingBottom: '0.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <h3 style={{ margin: 0, color: 'var(--accent-dark)', fontSize: '1.4rem' }}>GADDAR</h3>
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Karakter: Gürkan Komiser</span>
                </div>
                
                <div className="custom-scroll" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxHeight: '400px', overflowY: 'auto', paddingRight: '1rem' }}>
                  {dizi2Kesitleri.map((kesit) => (
                    <div key={kesit.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem', backgroundColor: 'rgba(84, 107, 65, 0.03)', border: '1px solid rgba(84, 107, 65, 0.1)', borderRadius: '4px', transition: '0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(84, 107, 65, 0.08)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(84, 107, 65, 0.03)'}>
                      <div>
                        <strong style={{ color: 'var(--accent-dark)', display: 'block', marginBottom: '0.2rem' }}>{kesit.bolum} - Tüm Sahneler</strong>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>Ekran Süresi: {kesit.sure} dk</span>
                      </div>
                      <a href={kesit.url} target="_blank" rel="noreferrer" style={{ backgroundColor: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', padding: '0.5rem 1.5rem', fontSize: '0.8rem', borderRadius: '4px', textDecoration: 'none', transition: '0.3s', fontWeight: 'bold' }} onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}>
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
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>DİJİTAL KARANLIK ODA</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Kariyer duraklarından, set hallerinden ve profesyonel çekimlerden oluşan geniş kapsamlı fotoğraf arşivi. Büyütmek için fotoğrafların üzerine tıklayın.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {archivePhotos.map((photo) => (
                  <div 
                    key={photo.id} 
                    onClick={() => setSelectedPhoto(photo)}
                    style={{ aspectRatio: '1/1', borderRadius: '4px', overflow: 'hidden', backgroundColor: 'rgba(84, 107, 65, 0.05)', cursor: 'zoom-in' }}
                  >
                    <img 
                      src={photo.url} 
                      alt={`Arşiv Kare ${photo.id}`} 
                      loading="lazy" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }} 
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} 
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. DUVAR KAĞITLARI */}
          {activeTab === 'wallpapers' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>EKRAN ARŞİVİ (MOBİL)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Telefonlarınız için özel tasarlanmış, yüksek çözünürlüklü duvar kağıtları (9:16 form).</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}>
                {wallpapers.map(item => (
                  <div key={item.id} style={{ border: '1px solid rgba(84, 107, 65, 0.15)', borderRadius: '4px', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ aspectRatio: '9/16', backgroundColor: 'rgba(220, 204, 172, 0.3)', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={item.url} alt={`Wallpaper ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-dark)', fontSize: '0.9rem' }}>Wallpaper {item.id}</h4>
                    <span style={{ fontSize: '0.7rem', opacity: 0.6, display: 'block', marginBottom: '1rem' }}>HD • Mobil</span>
                    
                    <a href={item.url} download={`AytekSayan_Wallpaper_${item.id}.jpeg`} style={{ display: 'block', textDecoration: 'none', backgroundColor: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', transition: '0.3s' }} onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}>
                      CİHAZA İNDİR ↓
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PROFİL FOTOĞRAFLARI SEKMESİ */}
          {activeTab === 'profil-fotograflari' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>PROFİL FOTOĞRAFLARI (AVATAR)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Sosyal medya hesaplarınızda (X, Instagram, TikTok vb.) kullanabileceğiniz yuvarlak formatlı, özel kesilmiş profil görselleri.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '2rem' }}>
                {profilePics && profilePics.length > 0 ? (
                  profilePics.map(item => (
                    <div key={item.id} style={{ border: '1px solid rgba(84, 107, 65, 0.15)', borderRadius: '8px', padding: '1.5rem 1rem', textAlign: 'center', background: 'rgba(84, 107, 65, 0.02)' }}>
                      {/* Avatar Çerçevesi (Yuvarlak) */}
                      <div style={{ aspectRatio: '1/1', backgroundColor: 'rgba(220, 204, 172, 0.3)', margin: '0 auto 1.2rem auto', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--accent-dark)', width: '100px', height: '100px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                        <img src={item.url} alt={`Profil ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                      </div>
                      <h4 style={{ margin: '0 0 1rem 0', color: 'var(--accent-dark)', fontSize: '0.8rem' }}>Icon #{item.id}</h4>
                      
                      <a href={item.url} download={`AytekSayan_Profil_${item.id}.jpeg`} style={{ display: 'inline-block', textDecoration: 'none', backgroundColor: 'var(--accent-dark)', color: '#fff', border: '1px solid var(--accent-dark)', padding: '0.4rem 1.2rem', fontSize: '0.7rem', borderRadius: '30px', fontFamily: 'var(--font-heading)', transition: '0.3s' }} onMouseOver={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}} onMouseOut={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}}>
                        İNDİR ↓
                      </a>
                    </div>
                  ))
                ) : (
                  <div style={{ padding: '2rem', textAlign: 'center', width: '100%', gridColumn: '1 / -1', border: '1px dashed rgba(84, 107, 65, 0.3)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.9rem', opacity: 0.6 }}>PROFİL FOTOĞRAFLARI YAKINDA EKLENECEK</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 4. HEADER GÖRSELLERİ */}
          {activeTab === 'headers' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>HEADER ARŞİVİ (MASAÜSTÜ & PROFİL)</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>X (Twitter) profilleriniz veya masaüstü ekranlarınız için yüksek çözünürlüklü yatay görseller.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
                {headers.map(item => (
                  <div key={item.id} style={{ border: '1px solid rgba(84, 107, 65, 0.15)', borderRadius: '4px', padding: '1rem', textAlign: 'center' }}>
                    <div style={{ aspectRatio: '3/1', backgroundColor: 'rgba(220, 204, 172, 0.3)', marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                      <img src={item.url} alt={`Header ${item.id}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--accent-dark)', fontSize: '0.9rem' }}>Header Tasarım {item.id}</h4>
                    
                    <a href={item.url} download={`AytekSayan_Header_${item.id}.jpeg`} style={{ display: 'inline-block', marginTop: '0.5rem', textDecoration: 'none', backgroundColor: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', padding: '0.5rem 2rem', fontSize: '0.75rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', transition: '0.3s' }} onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}} onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}>
                      CİHAZA İNDİR ↓
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* 5. SET GÜNLÜKLERİ (FOTOĞRAFLAR VE VİDEOLAR) */}
{activeTab === 'kamera-arkasi' && (
  <div className="animate-fade">
    <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>SET GÜNLÜKLERİ & KAMERA ARKASI</h2>
    <p style={{ opacity: 0.8, marginBottom: '2rem' }}>Çekim aralarındaki doğal anlar ve ekip içi şakalaşmalar...</p>
    
    <div style={{ 
      columnCount: 'auto', 
      columnWidth: '300px', 
      columnGap: '1.5rem' 
    }}>
      
      {btsPhotos && btsPhotos.map(photo => (
        <div key={photo.id} style={{ 
          marginBottom: '1.5rem', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          border: '1px solid rgba(84, 107, 65, 0.2)',
          breakInside: 'avoid' 
        }}>
          <img 
            src={photo.url} 
            alt="Kamera Arkası" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      ))}

      {btsVideos && btsVideos.map(video => (
        <div key={video.id} style={{ 
          marginBottom: '1.5rem', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          border: '1px solid rgba(84, 107, 65, 0.2)', 
          backgroundColor: '#000',
          breakInside: 'avoid'
        }}>
          <video 
            src={`${video.url}#t=0.1`} 
            controls 
            preload="metadata" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
        </div>
      ))}

    </div>
  </div>
)}

         {/* 6. MİMİKLER (GIF/MP4 - AKILLI GALERİ) */}
{activeTab === 'mimikler' && (
  <div className="animate-fade">
    <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>MİMİK VE BAKIŞ GALERİSİ</h2>
    
    <div style={{ 
      columnCount: 'auto', 
      columnWidth: '200px', 
      columnGap: '1rem' 
    }}>
      {gifs && gifs.length > 0 ? (
        gifs.map(gif => (
          <div key={gif.id} style={{ 
            marginBottom: '1rem',
            borderRadius: '8px', 
            overflow: 'hidden',
            breakInside: 'avoid' 
          }}>
            <video 
              src={gif.url} 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ 
                width: '100%', 
                display: 'block' 
              }} 
            />
          </div>
        ))
      ) : (
        <p>Arşiv yükleniyor...</p>
      )}
    </div>
  </div>
)}

          {/* 7. STICKER PAKETLERİ */}
          {activeTab === 'sticker' && (
            <div className="animate-fade">
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', marginBottom: '1.5rem' }}>STICKER PAKETLERİ</h2>
              <p style={{ opacity: 0.8, marginBottom: '2rem' }}>WhatsApp ve Telegram için özel hazırlanmış çıkartmalar. Uygulamaya gitmek için tıklayın.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                {stickers && stickers.map((paket) => (
                  <div key={paket.id} style={{ textAlign: 'center', padding: '2rem 1rem', border: '1px solid rgba(84, 107, 65, 0.2)', borderRadius: '8px', background: 'rgba(84, 107, 65, 0.02)' }}>
                    <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem auto', fontSize: '3rem' }}>🎭</div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '1rem', color: 'var(--accent-dark)' }}>{paket.name}</h4>
                    <a 
                      href={paket.url}
                      target="_blank" 
                      rel="noreferrer"
                      style={{ display: 'inline-block', backgroundColor: 'var(--accent-dark)', color: '#fff', padding: '0.6rem 1.2rem', fontSize: '0.8rem', borderRadius: '30px', textDecoration: 'none', fontFamily: 'var(--font-heading)', transition: '0.3s' }}
                    >
                      PAKETİ GÖRÜNTÜLE →
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
            style={{ maxHeight: '75vh', maxWidth: '90vw', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', cursor: 'default' }} 
            onClick={(e) => e.stopPropagation()} 
          />
          <a 
            href={selectedPhoto.url} 
            download={`Arsiv_${selectedPhoto.id}.jpeg`}
            style={{ marginTop: '2rem', padding: '0.8rem 2.5rem', backgroundColor: 'var(--accent-dark)', color: '#fff', textDecoration: 'none', borderRadius: '30px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', letterSpacing: '1px', transition: '0.3s', border: '2px solid transparent' }}
          >
            CİHAZA İNDİR ↓
          </a>
        </div>
      )}
    </div>
  );
}

export default MediaArchive;