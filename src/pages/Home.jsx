import { Link, useLocation } from 'react-router-dom'; 
import { useEffect } from 'react'; 
import { activeNews } from '../data/newsData'; 

function Home() {
  const location = useLocation(); // URL'i dinlemek için

  useEffect(() => {
    if (location.hash === '#kronoloji') {
      const element = document.getElementById('kronoloji');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

 const mainArticle = activeNews[0]; 
  const sideArticles = activeNews.slice(1, 3);

  const newsCoverImages = {
    6: '/gallery/h1 (137).jpeg', 
  };

  const today = new Date();
  const nextBirthday = new Date(today.getFullYear(), 9, 9); 

  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const daysLeft = Math.ceil(
    (nextBirthday - today) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="home-wrapper animate-fade">
      
      {/* DERGİ KAPAĞI KONSEPTİ */}
      <section className="editorial-hero">
        <div className="hero-grid-container">
          
          <div className="hero-left-editorial">

            <div
              style={{
                display: 'flex',
                gap: '0.8rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}
            >
              <span className="archive-badge">
                // DIGITAL MEMORY PROJECT
              </span>

              <span className="archive-badge">
                🎂 {daysLeft} GÜN KALDI
              </span>
            </div>
            <h1 className="hero-main-title">AYTEK ŞAYAN</h1>
            <p className="hero-statement">
              "Başka bir dünya mümkün." Hayal etmeye, üretmeye devam edin. İnsana ve doğaya değer verin, saygı duyun. Ve mutlaka bir kere Don Kişot'u okuyun.
            </p>
            <div className="hero-editorial-footer">
              <span className="curator-info">Küratör: Aytek Şayan Official FC</span>
              <span className="archive-year">Estd. 2026</span>
            </div>
          </div>
          
          <div className="hero-right-display">
            <div className="canvas-frame">
              <div 
                className="canvas-inner" 
                style={{ 
                  backgroundImage: "url('/homesayfası.jpeg')", 
                  backgroundSize: "cover", 
                  backgroundPosition: "center top" 
                }}
              >
                <span className="canvas-tag" style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '2px' }}>
                  PORTRE #01
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* PROFESYONEL KARİYER */}
      <section className="archive-manifesto-bar">
        <div className="manifesto-container">
          
          <div className="manifesto-item">
            <span className="manifesto-tag">I. SİNEMA & TELEVİZYON</span>
            <span className="manifesto-title"><strong>15</strong> Özgün Karakter İnşası ve Rol Arşivi</span>
          </div>
          
          <div className="manifesto-divider"></div>
          
          <div className="manifesto-item">
            <span className="manifesto-tag">II. TİYATRO GEÇMİŞİ</span>
            <span className="manifesto-title"><strong>08</strong> Sahnelenen Oyun ve Canlı Performans Kaydı</span>
          </div>
          
          <div className="manifesto-divider"></div>
          
          <div className="manifesto-item">
            <span className="manifesto-tag">III. KRONOLOJİK KAPSAM</span>
            <span className="manifesto-title"><strong>2014 — 2026</strong> Kariyer Başlangıcından Bugüne Eksiksiz Dökümantasyon</span>
          </div>

        </div>
      </section>
      
      {/* AKTİF MANŞETLER & KAYITLAR */}
      <section className="curated-records">
        <div className="container">
          <div className="section-header-editorial">
            <h2 className="editorial-title">Aktif Arşiv Kayıtları</h2>
            <p className="editorial-subtitle">Oyuncunun sanat hayatından anlık güncellenen gelişmeler ve kritik dökümanlar.</p>
          </div>

          <div className="editorial-magazine-layout">
            
            {/* MANŞET HABER BLOĞU (editorial-magazine-layout'un İÇİNE aldık) */}
            <div className="mag-row-major">
              <div className="mag-preview-box" style={{ padding: 0, overflow: 'hidden', backgroundColor: 'transparent', position: 'relative' }}>
                {newsCoverImages[mainArticle?.id] ? (
                  <img 
                    src={newsCoverImages[mainArticle.id]} 
                    alt={mainArticle?.title || "Aktif Proje Detayı"} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'relative', zIndex: 20, opacity: 1 }} 
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-card)', fontFamily: 'var(--font-heading)', color: 'var(--accent-dark)', opacity: 0.5 }}>
                    GÖRSEL BEKLENİYOR
                  </div>
                )}
              </div>
              <div className="mag-text-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '1.5rem' }}>
                <div className="meta-row" style={{ display: 'flex', gap: '1rem', marginBottom: '0.2rem' }}>
                  <span className="card-category" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{mainArticle?.category}</span>
                  <span className="card-id" style={{ fontSize: '0.75rem', opacity: 0.7 }}>{mainArticle?.regCode}</span>
                </div>
                <h3 className="mag-title" style={{ fontSize: '1.6rem', lineHeight: '1.1', margin: '0' }}>
                  {mainArticle?.title?.toLocaleUpperCase('tr-TR')}
                </h3>
                <p style={{ margin: '0', fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'justify', opacity: 0.85 }}>
                  {mainArticle?.summary}
                </p>
                <div style={{ marginTop: '0.5rem' }}>
                  <Link to={mainArticle?.linkUrl || "/"} className="editorial-link" style={{ display: 'inline-block' }}>
                    {mainArticle?.linkText}
                  </Link>
                </div>
              </div>
            </div>

            {/* YAN HABERLER */}
            <div className="mag-sidebar-column">
              {sideArticles.map((article) => (
                <div className="sidebar-mag-card" key={article.id}>
                  <span className="card-category">{article.category}</span>
                  <h4>{article.title.toLocaleUpperCase('tr-TR')}</h4>
                  <p>{article.summary}</p>
                  <Link to={article.linkUrl} className="editorial-link">{article.linkText}</Link>
                </div>
              ))}
            </div>

          </div> {/* editorial-magazine-layout sonu */}

          {/* TÜMÜNÜ GÖRÜNTÜLE BUTONU */}
          {activeNews.length > 3 && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/arsiv" className="editorial-link" style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.8rem 2rem', border: '1px solid var(--accent-dark)' }}>
                TÜM ARŞİV KAYITLARINI GÖRÜNTÜLE ↗
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* KRONOLOJİK TARİHÇE */}
      <section id="kronoloji" className="chronicle-section">
        <div className="container">
          
          <div className="section-header-editorial">
            <span className="archive-badge">// KRONOLOJİK ARŞİV SİCİLİ</span>
            <h2 className="editorial-title">SANAT TARİHÇESİ</h2>
            <p className="editorial-subtitle">İzmir’deki o ilk amatör metin denemelerinden, bugünün avangart tiyatro hareketlerine uzanan hat.</p>
          </div>

          <div className="chronicle-table">
            
            <div className="chronicle-row">
              <div className="chronicle-year">1985</div>
              <div className="chronicle-details">
                <h4>İZMİR’DE DOĞUŞ VE KÖKLER</h4>
                <p>Çerkes kökenli (anne tarafı Düzceli, baba tarafı Balıkesirli) kalabalık bir ailenin içine 9 Ekim 1985 tarihinde İzmir'de doğdu. Çocukluk yazlarını Düzce'de, meyve ağaçları altında hikayeler biriktirerek geçirdi.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">1998</div>
              <div className="chronicle-details">
                <h4>EDEBİYATLA İLK TEMAS (13 YAŞ)</h4>
                <p>Odasında kendi kendine şiir ve öyküler yazmaya başladı. Yakup Kadri’nin <em>Yaban</em> romanından özenerek 60 sayfalık ilk amatör roman denemesine girişti.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">LİSE</div>
              <div className="chronicle-details">
                <h4>YUNUS EMRE ANADOLU LİSESİ</h4>
                <p>9 Eylül İlköğretim Okulu'nun ardından 7 yıl boyunca bu köklü lisede Almanca dilinde yoğun bir eğitim alarak entelektüel altyapısını güçlendirdi.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">BURSA</div>
              <div className="chronicle-details">
                <h4>VETERİNERLİK FAKÜLTESİ VE SAHNEYLE TANIŞMA</h4>
                <p>Uludağ Üniversitesi Veterinerlik Fakültesi'ne girdi. Okula başlar başlamaz üniversitenin tiyatro topluluğuna kaydolarak sahne sanatlarıyla geri dönülemez bir bağ kurdu.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">2010—14</div>
              <div className="chronicle-details">
                <h4>BÜYÜK KARAR & BİLKENT TİYATRO</h4>
                <p>Veterinerliği 4. sınıfta, mezuniyete sadece bir yıl kala tamamen bıraktı. Ankara’ya geçerek Bilkent Üniversitesi Tiyatro Bölümü’ne girdi ve 2014 yılında profesyonel bir aktör olarak mezun oldu. Ankara'da toplamda 9 senelik bir birikim dönemi geçirdi.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">2017</div>
              <div className="chronicle-details">
                <h4>"KISALAR" KOLEKTİFİNİN TEMELLERİ</h4>
                <p>Mert Fırat ve Didem Yalçın önderliğinde, kısa form sahne sanatlarına ve bağımsız ekiplere alan açmayı hedefleyen vizyoner tiyatro hareketinin temelleri atıldı.</p>
              </div>
            </div>

            {/* SALTO DÖNEMİ */}
            <div className="chronicle-row">
              <div className="chronicle-year">2018—19</div>
              <div className="chronicle-details">
                <h4>ULUSLARARASI FİZİKSEL TİYATRO: "SALTO"</h4>
                <p>Teatr Andra ekibi ile birlikte "organik dramaturji" temelinde şekillenen fiziksel tiyatro araştırması "Salto" oyununun çekirdek kadrosunda yer aldı. Polonya'daki Grotowski Enstitüsü'nde başlayan izole provaları takiben, Türkiye'de çeşitli sahnelerde seyirciyle buluşan bu performans, aynı zamanda kendi akademik tezinin de merkezini oluşturdu.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">2019—21</div>
              <div className="chronicle-details">
                <h4>İSTANBUL AKADEMİSİ & YÜKSEK LİSANS</h4>
                <p>Haliç Üniversitesi’nde Oyunculuk üzerine 2 yıllık Tezli Yüksek Lisans eğitimine başladı. 2021 yılında tez dökümanını başarıyla sunarak akademik derecesini tescilledi. Bu süreçte Devlet ve özel tiyatrolarda aktif roller üstlendi.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">2024—26</div>
              <div className="chronicle-details">
                <h4>"ŞERİF" KARAKTERİ VE BÜYÜK KIRILIM</h4>
                <p>"Taşacak Bu Deniz" dizisindeki antagonist <em>Şerif</em> rolüyle izleyicide devasa bir yankı uyandırdı. Karikatürize olmayan kötülük anatomisi çalışmasıyla kariyerinin en büyük popülarite patlamasını yaşadı.</p>
              </div>
            </div>

            <div className="chronicle-row">
              <div className="chronicle-year">2025—26</div>
              <div className="chronicle-details">
                <h4>KISALAR FESTİVALİ VE KÜRATÖRLÜK</h4>
                <p>Kısalar ekibiyle birlikte DasDas'ın mekan sponsorluğunda festivali hayata geçirdi. 160 başvurudan 62 bağımsız performansı sahnede seyirciyle buluşturarak kolektif üretimi desteklemeye devam ediyor.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SOSYAL DIJİTAL SİCİL VE İLETİŞİM */}
      <section className="archive-social-registry">
        <div className="container">
          <div className="registry-grid">
            
            {/* AKTÖRÜN GERÇEK RESMİ HESAPLARI */}
            <div className="registry-column official-channels">
              <span className="registry-tag">// RESMİ KANALLAR</span>
              <h3 className="registry-title">SANATÇI RESMİ AĞI</h3>
              <p className="registry-desc">Oyuncunun doğrulanmış resmi sosyal medya profilleri ve sektörel endeksleri.</p>
              
              <div className="social-links-list">
                <a href="https://www.instagram.com/aytek_sayan/" target="_blank" rel="noreferrer" className="registry-social-link">
                  INSTAGRAM <span className="link-arrow">↗</span>
                </a>
                <a href="https://twitter.com/adigeym" target="_blank" rel="noreferrer" className="registry-social-link">
                  TWITTER (X) <span className="link-arrow">↗</span>
                </a>
                <a href="https://www.imdb.com/name/nm10302424/" target="_blank" rel="noreferrer" className="registry-social-link">
                  IMDb PROFILI <span className="link-arrow">↗</span>
                </a>
              </div>
            </div>

            {/* FC TOPLULUK AĞLARIVE LİNKLERİ */}
            <div className="registry-column fc-channels">
              <span className="registry-tag">// TOPLULUK MERKEZİ</span>
              <h3 className="registry-title">AYTEK ŞAYAN FC AĞI</h3>
              <p className="registry-desc">Hayran portalı etkinlikleri, resmi topluluk ağları ve proje künyesine erişim.</p>
              
              <div className="social-links-list">
                
                <a href="https://twitter.com/aytekofc" target="_blank" rel="noreferrer" className="registry-social-link">
                  FC TWITTER (X) HESABI <span className="link-arrow">↗</span>
                </a>

                <a href="https://x.com/i/communities/1997579611480162338" target="_blank" rel="noreferrer" className="registry-social-link">
                  X TOPLULUĞUMUZ <span className="link-arrow">↗</span>
                </a>

                <a href="https://instagram.com/aytekofc" target="_blank" rel="noreferrer" className="registry-social-link">
                  FC INSTAGRAM HESABI <span className="link-arrow">↗</span>
                </a>

                <a href="mailto:aytekofc@gmail.com" className="registry-social-link mail-link">
                  İLETİŞİM (MAİL) <span className="link-arrow">→</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;