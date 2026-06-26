import React, { useState } from 'react';

// Filmografideki 16 Karakterin Tamamı
const CHARACTERS = {
  ATTILA: { name: "ATTİLA", project: "Tarihin Efsaneleri", image: "/attila.jpeg", desc: "Tarihin akışını değiştiren efsanevi bir lidersin. Güç savaşlarında ve dönüm noktalarında her zaman ön saflardasın. Kararların kitleleri etkiliyor." },
  SERIF: { name: "ŞERİF FURTUNA", project: "Taşacak Bu Deniz", image: "/şerif.jpeg", desc: "Hayatı duygulardan arındırılmış bir satranç oyunu gibi görüyorsun. Sabrın sınır tanımıyor; hedefin için 20 yıl bile bekleyebilirsin." },
  KURSAT: { name: "KÜRŞAT", project: "İnci Taneleri", image: "/kürşat.jpeg", desc: "Sıfır taviz! Görev bilinciyle hareket eden, işini ciddiyetle takip eden ve sorumluluklarını sonuna kadar yerine getiren kuralcı birisin." },
  GURKAN: { name: "GÜRKAN KOMİSER", project: "Gaddar", image: "/gürkan.jpeg", desc: "İdealist bir yapın var. Düzenin her şeyden önce geldiğine inanırsın ama adaletin işlemediği yerde kendi kurallarını koymaktan da çekinmezsin." },
  SERHAT: { name: "SERHAT", project: "Kübra", image: "/serhat.jpeg", desc: "Sadık, aklıselim ve mahalle kültürüne bağlı birisin. Dostlarının inanç ve gerçeklik arasındaki savaşlarında onlara ayna tutan en büyük destekçisin." },
  TURAHAN: { name: "TURAHAN", project: "Hay Sultan", image: "/turahan.jpeg", desc: "Dinamik ve stratejik bir yapın var. Sadakat, hırs ve adalet arasında gidip geliyor, her zaman kendi rüştünü ispat etmeye çalışıyorsun." },
  SARP: { name: "SARP", project: "Çöp Adam", image: "/sarp.jpeg", desc: "İntikam duygusuyla hareket eden, derin yaralar taşıyan ve inanılmaz manipülatif birisin. İnsanların hayatındaki dengelerle oynamayı iyi biliyorsun." },
  IMAM: { name: "İMAM", project: "Bana Karanlığını Anlat", image: "/imam2.jpeg", desc: "Karanlığın ve kaosun ortasında sakin kalan manevi bir figürsün. İnsanlar sırlarıyla ve korkularıyla yüzleşmek için senin sığınağına gelir." },
  SAHBAZ: { name: "KILIÇOĞLU ŞAHBAZ", project: "Barbaroslar", image: "/şahbaz.jpeg", desc: "Kurnaz, entrikacı ve hırslısın. Kendi çıkarların ve hedeflerin uğruna gerektiğinde herkesi feda edebilir, taraf değiştirebilirsin." },
  RUSTEM: { name: "RÜSTEM", project: "Uyanış: Büyük Selçuklu", image: "/rüstem.jpeg", desc: "Sistemin içine sızmış zeki ve tehlikeli bir casussun. Bilgi senin en büyük silahın. Görevlerin uğruna her türlü riski almaktan çekinmezsin." },
  BEHIC: { name: "HAKKI BEHİÇ BEY", project: "Ya İstiklal Ya Ölüm", image: "/behiç.jpeg", desc: "Dönemin gidişatını etkileyen, ciddi ve diplomatik bir devlet adamısın. Kararlarını her zaman büyük resmi düşünerek alıyorsun." },
  ALI: { name: "ALİ BİLGİN", project: "Kuzgun", image: "/kuzgun2.jpeg", desc: "Hırslı, güç odaklı ve karmaşık bir psikolojiye sahipsin. Çevrendeki insanların hikayesinde kilit bir rol oynamayı başarıyorsun." },
  LAIS: { name: "KOMUTAN LAİS", project: "Diriliş Ertuğrul", image: "/lais2.jpeg", desc: "Sinsi, zeki ve acımasızsın. Bulunduğun ortamda gizliden gizliye kaos yaratmak ve sistemi çökertmek senin uzmanlık alanın." },
  BOZAN: { name: "BOZAN EROL", project: "İsimsizler", image: "/bozan.jpeg", desc: "Acımasız, stratejik ve tehditkâr bir lidersin. Güç senin için her şeydir ve hedeflerine ulaşmak için düşmanlarına korku salmayı seçersin." },
  MERT: { name: "MERT", project: "46 Yok Olan", image: "/46dizi.jpeg", desc: "Kuralcı, son derece dikkatli ve olaylara tamamen rasyonel yaklaşan genç bir beyinsin. Kanıtlar olmadan adım atmazsın." },
  FIRAT: { name: "FIRAT", project: "Su Yüzü", image: "/fırat.jpeg", desc: "İçinde sanatsal ve duygusal bir derinlik taşıyorsun. Etrafındaki atmosferin ve insanların duygularını yakalayan iyi bir gözlemcisin." }
};

// 6 Soruluk Kapsamlı Karakter Puanlama Testi
const QUESTIONS = [
  {
    question: "Büyük bir krizin veya tehlikenin ortasındasın. İlk tepkin ne olur?",
    options: [
      { text: "Duygularımı sıfırlar, satranç oynar gibi stratejik hamlelerimi planlarım.", pointsTo: ["SERIF", "SARP", "LAIS", "RUSTEM"] },
      { text: "Gücümü kullanarak rakiplerime korku salar ve kaosu bastırırım.", pointsTo: ["ATTILA", "BOZAN", "SAHBAZ", "ALI"] },
      { text: "Kurallara ve kanunlara sarılır, olayı rasyonel bir şekilde çözerim.", pointsTo: ["KURSAT", "GURKAN", "MERT", "BEHIC"] },
      { text: "Sakin kalır, etrafımdaki insanların manevi olarak ayakta kalmasını sağlarım.", pointsTo: ["IMAM", "SERHAT", "FIRAT", "TURAHAN"] }
    ]
  },
  {
    question: "Hayattaki temel motivasyonun aşağıdakilerden hangisidir?",
    options: [
      { text: "Geçmişte bana yapılanların hesabını sormak ve intikam almak.", pointsTo: ["SERIF", "SARP", "ALI", "BOZAN"] },
      { text: "Görevimi eksiksiz yerine getirmek ve adaleti sağlamak.", pointsTo: ["GURKAN", "KURSAT", "MERT", "BEHIC"] },
      { text: "Bulunduğum hiyerarşide en tepeye çıkmak ve gücü elime almak.", pointsTo: ["SAHBAZ", "ATTILA", "LAIS", "RUSTEM"] },
      { text: "Sevdiklerime destek olmak ve kendimi ispatlamak.", pointsTo: ["SERHAT", "TURAHAN", "IMAM", "FIRAT"] }
    ]
  },
  {
    question: "İnsanlarla ilişkilerinde 'güven' konusuna nasıl yaklaşırsın?",
    options: [
      { text: "Kimseye güvenmem, insanlar benim için sadece kullanılabilecek araçlardır.", pointsTo: ["SARP", "SAHBAZ", "LAIS", "RUSTEM"] },
      { text: "Bana mutlak itaat ve saygı gösterenlere güvenirim.", pointsTo: ["BOZAN", "ATTILA", "SERIF", "ALI"] },
      { text: "Güven benim için kanundur. Bir kere sarsılırsa o kişiyi hayatımdan silerim.", pointsTo: ["KURSAT", "GURKAN", "MERT", "BEHIC"] },
      { text: "Dostlarıma her koşulda sonuna kadar inanır ve omuz veririm.", pointsTo: ["SERHAT", "IMAM", "FIRAT", "TURAHAN"] }
    ]
  },
  {
    question: "Düşmanını veya rakibini nasıl alt etmeyi tercih edersin?",
    options: [
      { text: "Entrika, kurnazlık ve arkadan iş çevirerek.", pointsTo: ["SAHBAZ", "LAIS", "RUSTEM", "TURAHAN"] },
      { text: "Yüzüne karşı, otoritemi ve gücümü kanıtlayarak.", pointsTo: ["BOZAN", "ATTILA", "ALI", "KURSAT"] },
      { text: "Bütün kanıtları toplayıp, rasyonel bir şekilde köşeye sıkıştırarak.", pointsTo: ["MERT", "GURKAN", "BEHIC", "SERIF"] },
      { text: "Psikolojisiyle oynayıp, zihinsel olarak çökmesini sağlayarak.", pointsTo: ["SARP", "SERIF", "IMAM", "FIRAT"] }
    ]
  },
  {
    question: "Bir ekibin veya grubun içinde genellikle hangi rolü üstlenirsin?",
    options: [
      { text: "Otoriteyi sağlayan, disiplinli lider.", pointsTo: ["ATTILA", "BOZAN", "KURSAT", "GURKAN"] },
      { text: "Arka planda gizli planları yapan stratejik zeka.", pointsTo: ["SERIF", "LAIS", "SARP", "RUSTEM"] },
      { text: "Kuralları sorgulayan ama detayları asla kaçırmayan analitik beyin.", pointsTo: ["MERT", "BEHIC", "ALI", "SAHBAZ"] },
      { text: "Grup içindeki dengeyi kuran sadık dost.", pointsTo: ["SERHAT", "TURAHAN", "IMAM", "FIRAT"] }
    ]
  },
  {
    question: "Kendini en rahat hissettiğin ortam neresidir?",
    options: [
      { text: "Herkesin bana itaat ettiği, gücün bende olduğu karanlık bir merkez.", pointsTo: ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"] },
      { text: "Kendi başıma kalıp geçmişi düşünebildiğim sessiz, izole bir yer.", pointsTo: ["SERIF", "SARP", "IMAM", "FIRAT"] },
      { text: "Aksiyonun, mücadelenin ve adaletin arandığı sokaklar/olay mahalleri.", pointsTo: ["GURKAN", "MERT", "KURSAT", "RUSTEM"] },
      { text: "Dostlarımla ve sevdiklerimle omuz omuza durduğum herhangi bir yer.", pointsTo: ["SERHAT", "BEHIC", "TURAHAN", "ALI"] }
    ]
  }
];

function CharacterTest() {
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState(null);
  
  // Tüm karakterlerin başlangıç skorları
  const [scores, setScores] = useState({
    ATTILA: 0, SERIF: 0, KURSAT: 0, GURKAN: 0,
    SERHAT: 0, TURAHAN: 0, SARP: 0, IMAM: 0,
    SAHBAZ: 0, RUSTEM: 0, BEHIC: 0, ALI: 0,
    LAIS: 0, BOZAN: 0, MERT: 0, FIRAT: 0
  });

  const handleAnswer = (pointsToKeys) => {
    // Seçilen şıktaki karakterlere 1'er puan ekle
    const newScores = { ...scores };
    pointsToKeys.forEach(key => {
      newScores[key] += 1;
    });
    setScores(newScores);

    // Sonraki soru veya sonuç ekranı
    if (currentQ + 1 < QUESTIONS.length) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores) => {
    // En yüksek puana sahip karakteri bul (Eşitlik durumunda ilk bulduğunu seçer)
    const highestScoreChar = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
    setResult(CHARACTERS[highestScoreChar]);
  };

  const resetTest = () => {
    setCurrentQ(0);
    setScores({
      ATTILA: 0, SERIF: 0, KURSAT: 0, GURKAN: 0,
      SERHAT: 0, TURAHAN: 0, SARP: 0, IMAM: 0,
      SAHBAZ: 0, RUSTEM: 0, BEHIC: 0, ALI: 0,
      LAIS: 0, BOZAN: 0, MERT: 0, FIRAT: 0
    });
    setResult(null);
  };

  const shareOnX = () => {
    const text = `Aytek Şayan Evreninde ben "%100 ${result.name}" çıktım! 🎬😎\n\nKarakter Analizi: "${result.desc.substring(0, 75)}..."\n\n16 farklı karakterden sen hangisisin? Testi çöz:`;
    const siteUrl = "https://ayteksayan.com/hangi-karaktersin"; 
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ minHeight: '80vh', paddingBottom: '4rem' }}>
      
      <style>{`
        .test-option-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: transparent;
          border: 1px solid rgba(84, 107, 65, 0.3);
          padding: 1.2rem;
          margin-bottom: 1rem;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: var(--text-main);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .test-option-btn:hover {
          background: rgba(84, 107, 65, 0.1);
          border-color: var(--accent-dark);
          transform: translateX(5px);
        }
        
        .result-card {
          background: var(--bg-card);
          border: 2px solid var(--accent-dark);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .result-image-container {
          height: 300px;
          width: 100%;
          border-bottom: 2px solid var(--accent-dark);
          background-color: #111;
        }
        
        .result-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }
        
        .progress-bar-container {
          width: 100%;
          height: 6px;
          background: rgba(84, 107, 65, 0.2);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        
        .progress-bar-fill {
          height: 100%;
          background: var(--accent-dark);
          transition: width 0.4s ease;
        }
      `}</style>

      <div className="container">
        
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="archive-badge">// KİŞİLİK ENVANTERİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>HANGİ KARAKTERSİN?</h1>
          <p className="editorial-subtitle">16 farklı karakterin yer aldığı psikolojik sicil testini tamamla ve Aytek Şayan evrenindeki alter eganı keşfet.</p>
        </div>

        {/* --- SONUÇ EKRANI --- */}
        {result ? (
          <div className="result-card animate-fade">
            <div className="result-image-container">
              <img src={result.image} alt={result.name} />
            </div>
            
            <div style={{ padding: '2.5rem 2rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', opacity: 0.7, letterSpacing: '2px' }}>
                {result.project.toLocaleUpperCase('tr-TR')}
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--accent-dark)', margin: '0.5rem 0 1.5rem 0' }}>
                {result.name}
              </h2>
              
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, marginBottom: '2.5rem' }}>
                {result.desc}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={shareOnX}
                  style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '1rem 2rem', borderRadius: '30px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  SONUCU X'TE PAYLAŞ 𝕏
                </button>
                <button 
                  onClick={resetTest}
                  style={{ backgroundColor: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', padding: '1rem 2rem', borderRadius: '30px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer' }}
                >
                  TESTİ TEKRARLA ⟲
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* --- SORU EKRANI --- */
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-heading)', fontWeight: 'bold', color: 'var(--accent-dark)', marginBottom: '0.5rem' }}>
              <span>ANALİZ: {currentQ + 1} / {QUESTIONS.length}</span>
              <span>% {Math.round((currentQ / QUESTIONS.length) * 100)}</span>
            </div>
            
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${(currentQ / QUESTIONS.length) * 100}%` }}></div>
            </div>

            <h3 style={{ fontSize: '1.5rem', lineHeight: '1.5', marginBottom: '2rem', color: 'var(--accent-dark)' }}>
              {QUESTIONS[currentQ].question}
            </h3>

            <div>
              {/* Seçenekler */}
              {QUESTIONS[currentQ].options.map((option, idx) => (
                <button 
                  key={idx} 
                  className="test-option-btn"
                  onClick={() => handleAnswer(option.pointsTo)}
                >
                  {option.text}
                </button>
              ))}
            </div>
            
          </div>
        )}

      </div>
    </div>
  );
}

export default CharacterTest;