import React from 'react';

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
      { label: "1. BÖLÜM İZLE ↗", link: "https://youtu.be/aD-7bHQg1SQ" },
      { label: "2. BÖLÜM İZLE ↗", link: "https://youtu.be/DvnuitwWBOY" } 
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
    episodes: "Kısa Film", platform: "Bağımsız", image: "/fırat.jpeg", 
    summary: "Fırat, kasabada fotoğrafçılık yapan, özellikle düğün fotoğrafları çeken ve kasabanın duygusal atmosferini yansıtan bir karakterdir.",
    url: "#" 
  }
];

filmographyList.sort((a, b) => {
  const getYear = (y) => {
    if (y === "Bilinmiyor") return 0;
    return parseInt(y.split('-')[0]);
  };
  return getYear(b.year) - getYear(a.year);
});

function Filmography() {
  return (
    <div className="filmography-wrapper animate-fade">
      <div className="container" style={{ paddingBottom: '4rem' }}>
        
        {/* SAYFA BAŞLIĞI */}
        <div className="section-header-editorial" style={{ marginBottom: '4rem', paddingTop: '3rem' }}>
          <span className="archive-badge">// EKRAN KANONU</span>
          <h1 className="editorial-title" style={{ fontSize: '3.5rem' }}>DİZİ & FİLMOGRAFİ</h1>
          <p className="editorial-subtitle">Oyuncunun 2016'dan günümüze televizyon, sinema ve dijital platformlardaki dönüşümü, inşa ettiği karakterler ve proje arşivi.</p>
        </div>

        {/* PROJELER LİSTESİ (IZGARA DÜZENİ) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          {filmographyList.map((project) => (
            <div key={project.id} style={{ border: '1px solid rgba(84, 107, 65, 0.15)', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
              
              {/* Fotoğraf Alanı */}
              <div style={{ height: '200px', backgroundColor: 'rgba(220, 204, 172, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(84, 107, 65, 0.1)' }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <span style={{ fontFamily: 'var(--font-heading)', opacity: 0.4, fontSize: '0.8rem', letterSpacing: '2px' }}>GÖRSEL BEKLENİYOR</span>
                )}
              </div>

              {/* Metin ve Bilgi Alanı */}
              <div style={{ padding: '2rem' }}>
                
                {/* ÜST BİLGİ SATIRI */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontFamily: 'var(--font-heading)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-light)' }}>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <span style={{ backgroundColor: 'rgba(84, 107, 65, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{project.year}</span>
                    <span>BÖLÜM: {project.episodes}</span>
                  </div>
                  <span style={{ opacity: 0.6 }}>{project.platform}</span>
                </div>
                
                {/* DİZİ/FİLM ADI */}
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--accent-dark)', margin: '0 0 0.5rem 0' }}>
                  {project.title.toLocaleUpperCase('tr-TR')}
                </h3>
                
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.9rem', fontWeight: 'bold', opacity: 0.8 }}>
                  Karakter: <span style={{ color: 'var(--accent-dark)' }}>{project.character}</span>
                </p>
                
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, opacity: 0.7, marginBottom: '2rem' }}>
                  {project.summary}
                </p>

                {/* DİNAMİK LİNK/BUTON MANTIĞI */}
                {project.url && project.url !== "#" ? (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ 
                      display: 'inline-block',
                      backgroundColor: 'transparent', 
                      border: '1px solid var(--accent-dark)', 
                      padding: '0.6rem 1.2rem', 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'var(--accent-dark)', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s',
                      textDecoration: 'none',
                      textAlign: 'center'
                    }} 
                    onMouseOver={(e) => {e.target.style.background = 'var(--accent-dark)'; e.target.style.color = '#fff'}} 
                    onMouseOut={(e) => {e.target.style.background = 'transparent'; e.target.style.color = 'var(--accent-dark)'}}
                  >
                    İZLEME LİNKİ & DETAYLAR ↗
                  </a>
                ) : (
                  <button 
                    disabled 
                    style={{ 
                      backgroundColor: 'transparent', 
                      border: '1px dashed rgba(84, 107, 65, 0.3)', 
                      padding: '0.6rem 1.2rem', 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      color: 'rgba(84, 107, 65, 0.5)', 
                      cursor: 'not-allowed', 
                      transition: 'all 0.3s',
                      width: '100%',
                      textAlign: 'left'
                    }}
                  >
                    LİNK YAKINDA EKLENECEK
                  </button>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Filmography;