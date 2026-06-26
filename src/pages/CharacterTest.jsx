import React, { useState } from 'react';

const CHARACTERS = {
  MERT: { name: "MERT", project: "46 Yok Olan", image: "/46dizi.jpeg", desc: "Cesur, mücadeleci ve fedakârsın. Senin için hayat, ne pahasına olursa olsun doğru olanı yapma mücadelesidir." },
  BOZAN: { name: "BOZAN EROL", project: "İsimsizler", image: "/bozan.jpeg", desc: "Soğukkanlı bir operasyon adamısın. Stratejik zekan ve disiplininle her durumu kontrol altında tutarsın." },
  LAIS: { name: "KOMUTAN LAİS", project: "Diriliş Ertuğrul", image: "/lais2.jpeg", desc: "Güçlü, hırslı ve sert bir karaktere sahipsin. Hedeflerine ulaşmak için hiçbir engeli tanımazsın." },
  ALI: { name: "ALİ BİLGİN", project: "Kuzgun", image: "/kuzgun2.jpeg", desc: "Sadık, duygusal ve sevdikleri için yaşayan birisin. Senin için ilişkiler her şeyden üstündür." },
  BEHIC: { name: "HAKKI BEHİÇ BEY", project: "Ya İstiklal Ya Ölüm", image: "/behiç.jpeg", desc: "İlkeleri olan, adaletli ve sorumluluk sahibi bir devlet adamısın." },
  RUSTEM: { name: "RÜSTEM", project: "Uyanış: Büyük Selçuklu", image: "/rüstem.jpeg", desc: "Zeki, planlı ve sabırlısın. Büyük resmi görme konusunda uzmansın." },
  SAHBAZ: { name: "KILIÇOĞLU ŞAHBAZ", project: "Barbaroslar", image: "/şahbaz.jpeg", desc: "Lider ruhlu, savaşçı ve kararlısın. Kendi yolunu kendin çizmeyi seviyorsun." },
  TURAHAN: { name: "TURAHAN", project: "Hay Sultan", image: "/turahan.jpeg", desc: "Bilge, sakin ve güvenilirsin. İnsanlar senin sükunetine ihtiyaç duyar." },
  SARP: { name: "SARP", project: "Çöp Adam", image: "/sarp.jpeg", desc: "Duygusal, kırılgan ama bir o kadar da sadıksın. Derin bir iç dünyan var." },
  SERHAT: { name: "SERHAT", project: "Kübra", image: "/serhat.jpeg", desc: "Mantıklı, gözlemci ve analitik birisin. Çevrendeki olayları derinlemesine analiz edersin." },
  GURKAN: { name: "GÜRKAN KOMİSER", project: "Gaddar", image: "/gürkan.jpeg", desc: "Kuralcı ve adalet peşindesin. Kendi değerlerin senin pusulandır." },
  KURSAT: { name: "KÜRŞAT", project: "İnci Taneleri", image: "/kürşat.jpeg", desc: "Güvenilir, dost canlısı ve koruyucusun. Çevrenin sığınağı sensin." },
  SERIF: { name: "ŞERİF FURTUNA", project: "Taşacak Bu Deniz", image: "/şerif.jpeg", desc: "Asi, bağımsız ve pes etmeyen birisin. Kendi kurallarınla yaşamayı seviyorsun." },
  ATTILA: { name: "ATTİLA", project: "Tarihin Efsaneleri", image: "/attila.jpeg", desc: "Öncü, kararlı ve büyük hayalleri olan birisin." },
  IMAM: { name: "İMAM", project: "Bana Karanlığını Anlat", image: "/imam2.jpeg", desc: "Maneviyatı yüksek, dingin ve çözüm odaklısın." },
  FIRAT: { name: "FIRAT", project: "Su Yüzü", image: "/fırat.jpeg", desc: "Sanatsal, hassas ve gözlemci bir ruha sahipsin." }
};

const option = (text, pointsTo) => ({ text, pointsTo });
const question = (question, options) => ({ question, options });

const QUESTIONS = [
  question("Uzun yıllardır dost olduğun biri, seni korumak için büyük bir sırrı senden sakladığını itiraf ediyor. İlk tepkin ne olur?", [
    option("Neden yaptığını anlamaya çalışırım.", ["TURAHAN", "SERHAT", "IMAM", "FIRAT"]),
    option("Güven kırıldıysa sebebi önemli değildir.", ["KURSAT", "GURKAN", "MERT", "BEHIC"]),
    option("Tüm detayları öğrenmeden karar vermem.", ["RUSTEM", "SAHBAZ", "BOZAN", "LAIS"]),
    option("Kırılsam da dostluğumuzu tamamen bitirmem.", ["ALI", "SARP", "SERIF", "ATTILA"])
  ]),

  question("Çok emek verdiğin bir işin başarısı başkasına mal ediliyor. Ne yaparsın?", [
    option("Hakkımı sonuna kadar ararım.", ["MERT", "ATTILA", "SAHBAZ", "GURKAN"]),
    option("Doğru zaman gelince gerçeği ortaya çıkarırım.", ["RUSTEM", "BOZAN", "SERIF", "LAIS"]),
    option("Önemli olan sonucu almak der geçerim.", ["TURAHAN", "IMAM", "FIRAT", "KURSAT"]),
    option("Sessiz kalırım ama unutamam.", ["ALI", "SARP", "BEHIC", "SERHAT"])
  ]),

  question("Bir liderin yanlış karar verdiğini biliyorsun. Ne yaparsın?", [
    option("Açıkça karşı çıkarım.", ["MERT", "GURKAN", "ATTILA", "KURSAT"]),
    option("Önce neden böyle düşündüğünü anlamaya çalışırım.", ["TURAHAN", "BEHIC", "SERHAT", "FIRAT"]),
    option("Emirleri uygularım.", ["LAIS", "BOZAN", "RUSTEM", "SAHBAZ"]),
    option("Kendi çözümümü gizlice uygularım.", ["SARP", "SERIF", "ALI", "IMAM"])
  ]),

  question("Büyük bir krizin veya tehlikenin ortasındasın. İlk tepkin ne olur?", [
    option("Duygularımı sıfırlar, satranç oynar gibi stratejik hamlelerimi planlarım.", ["SERIF", "SARP", "LAIS", "RUSTEM"]),
    option("Gücümü kullanarak rakiplerime korku salar ve kaosu bastırırım.", ["ATTILA", "BOZAN", "SAHBAZ", "ALI"]),
    option("Kurallara ve kanunlara sarılır, olayı rasyonel bir şekilde çözerim.", ["KURSAT", "GURKAN", "MERT", "BEHIC"]),
    option("Sakin kalır, etrafımdaki insanların manevi olarak ayakta kalmasını sağlarım.", ["IMAM", "SERHAT", "FIRAT", "TURAHAN"])
  ]),

  question("Hayattaki temel motivasyonun aşağıdakilerden hangisidir?", [
    option("Geçmişte bana yapılanların hesabını sormak ve intikam almak.", ["SERIF", "SARP", "ALI", "BOZAN"]),
    option("Görevimi eksiksiz yerine getirmek ve adaleti sağlamak.", ["GURKAN", "KURSAT", "MERT", "BEHIC"]),
    option("Bulunduğum hiyerarşide en tepeye çıkmak ve gücü elime almak.", ["SAHBAZ", "ATTILA", "LAIS", "RUSTEM"]),
    option("Sevdiklerime destek olmak ve kendimi ispatlamak.", ["SERHAT", "TURAHAN", "IMAM", "FIRAT"])
  ]),

  question("İnsanlarla ilişkilerinde 'güven' konusuna nasıl yaklaşırsın?", [
    option("Kimseye güvenmem, insanlar benim için sadece kullanılabilecek araçlardır.", ["SARP", "SAHBAZ", "LAIS", "RUSTEM"]),
    option("Bana mutlak itaat ve saygı gösterenlere güvenirim.", ["BOZAN", "ATTILA", "SERIF", "ALI"]),
    option("Güven benim için kanundur. Bir kere sarsılırsa o kişiyi hayatımdan silerim.", ["KURSAT", "GURKAN", "MERT", "BEHIC"]),
    option("Dostlarıma her koşulda sonuna kadar inanır ve omuz veririm.", ["SERHAT", "IMAM", "FIRAT", "TURAHAN"])
  ]),

  question("Düşmanını veya rakibini nasıl alt etmeyi tercih edersin?", [
    option("Entrika, kurnazlık ve arkadan iş çevirerek.", ["SAHBAZ", "LAIS", "RUSTEM", "TURAHAN"]),
    option("Yüzüne karşı, otoritemi ve gücümü kanıtlayarak.", ["BOZAN", "ATTILA", "ALI", "KURSAT"]),
    option("Bütün kanıtları toplayıp, rasyonel bir şekilde köşeye sıkıştırarak.", ["MERT", "GURKAN", "BEHIC", "SERIF"]),
    option("Psikolojisiyle oynayıp, zihinsel olarak çökmesini sağlayarak.", ["SARP", "SERIF", "IMAM", "FIRAT"])
  ]),

  question("Bir ekibin veya grubun içinde genellikle hangi rolü üstlenirsin?", [
    option("Otoriteyi sağlayan, disiplinli lider.", ["ATTILA", "BOZAN", "KURSAT", "GURKAN"]),
    option("Arka planda gizli planları yapan stratejik zeka.", ["SERIF", "LAIS", "SARP", "RUSTEM"]),
    option("Kuralları sorgulayan ama detayları asla kaçırmayan analitik beyin.", ["MERT", "BEHIC", "ALI", "SAHBAZ"]),
    option("Grup içindeki dengeyi kuran sadık dost.", ["SERHAT", "TURAHAN", "IMAM", "FIRAT"])
  ]),

  question("Kendini en rahat hissettiğin ortam neresidir?", [
    option("Herkesin bana itaat ettiği, gücün bende olduğu karanlık bir merkez.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Kendi başıma kalıp geçmişi düşünebildiğim sessiz, izole bir yer.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Aksiyonun, mücadelenin ve adaletin arandığı sokaklar/olay mahalleri.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Dostlarımla ve sevdiklerimle omuz omuza durduğum herhangi bir yer.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir seçim yapman gerekiyor:", [
    option("Sevdiğin insan.", ["BOZAN", "ATTILA", "SERIF", "SAHBAZ"]),
    option("Görevin.", ["LAIS", "SARP", "IMAM", "FIRAT"]),
    option("Adalet.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Kendi geleceğin.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("İnsanların seni en çok hangi özelliğinle hatırlamasını isterdin?", [
    option("Cesaretimle.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Sadakatimle.", ["GURKAN", "SARP", "IMAM", "FIRAT"]),
    option("Zekâmla.", ["SERIF", "MERT", "KURSAT", "RUSTEM"]),
    option("Kararlılığımla.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("En yakın arkadaşın büyük bir hata yaptı ve bunun sonuçlarına katlanmak istemiyor.", [
    option("Onu korurum.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Hatasıyla yüzleşmesini sağlarım.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Neden yaptığını anlamaya çalışırım.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Yardım ederim ama sorumluluğu ona bırakırım.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Hayatında her şeyi değiştirebilecek bir fırsat yakaladın fakat bu fırsat seni ailenden uzaklaştıracak.", [
    option("Fırsatı değerlendiririm.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Ailemi bırakmam.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("İkisini de koruyacak yol ararım.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Karar vermeden önce uzun süre düşünürüm.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Sana göre gerçek güç nedir?", [
    option("İnsanları koruyabilmek.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Duygularını kontrol edebilmek.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Vazgeçmemek.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("İnsanları yönlendirebilmek.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Haksızlığa uğradığında...", [
    option("Hemen tepki veririm.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Sabırla doğru zamanı beklerim.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Sebeplerini araştırırım.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Unutmasam da yoluma devam ederim.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir düşmanın yardımına ihtiyaç duyuyor.", [
    option("Yardım ederim.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Önce nedenini öğrenirim.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Geçmişi unutamam.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Duruma göre karar veririm.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Hayatını en iyi anlatan cümle hangisi?", [
    option("Mücadele etmeden vazgeçmem.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Her şeyin bir sebebi vardır.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Sevdiklerim benim önceliğimdir.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Kendi yolumu kendim çizerim.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("İnsanlarda seni en çok rahatsız eden şey nedir?", [
    option("İhanet.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Yalan.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Bencillik.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Korkaklık.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir ekipte hangi rol sana daha uygun?", [
    option("Lider.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Stratejist.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Koruyucu.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Yalnız çalışan.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("En büyük korkun nedir?", [
    option("Sevdiklerimi kaybetmek.", ["BOZAN", "ATTILA", "LAIS", "SERIF"]),
    option("Amaçsız yaşamak.", ["SAHBAZ", "SARP", "IMAM", "FIRAT"]),
    option("Başarısız olmak.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Kendimi kaybetmek.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Sana yapılan bir iyiliği...", [
    option("Asla unutmam.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Karşılığını vermeye çalışırım.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("İçimde saklarım.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Normal karşılarım.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir savaşın ortasında olsan hangi görevi seçerdin?", [
    option("En önde savaşmak.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Plan yapmak.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("İnsanları korumak.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Gizli görev yürütmek.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir insanı gerçekten tanımak için ne gerekir?", [
    option("Zor günlerini görmek.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Güç sahibi olduğundaki halini görmek.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Sevdiklerine davranışını görmek.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Kaybederken nasıl davrandığını görmek.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Hangisi senin için daha ağırdır?", [
    option("İhanete uğramak.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Sevdiklerini kaybetmek.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Başarısız olmak.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Vicdan azabı çekmek.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Bir hata yaptığında ne yaparsın?", [
    option("Telafi etmeye çalışırım.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Uzun süre düşünürüm.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Kimseye belli etmem.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Ders çıkarıp devam ederim.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ]),

  question("Eğer hayatın bir kelimeyle özetlenecek olsaydı hangisi olurdu?", [
    option("Mücadele.", ["BOZAN", "ATTILA", "LAIS", "SAHBAZ"]),
    option("Sadakat.", ["SERIF", "SARP", "IMAM", "FIRAT"]),
    option("Adalet.", ["GURKAN", "MERT", "KURSAT", "RUSTEM"]),
    option("Hedef.", ["SERHAT", "BEHIC", "TURAHAN", "ALI"])
  ])
];

const CHARACTER_KEYS = Object.keys(CHARACTERS);

const createInitialScores = () =>
  CHARACTER_KEYS.reduce((scores, key) => {
    scores[key] = 0;
    return scores;
  }, {});

function CharacterTest() {
  const [currentQ, setCurrentQ] = useState(0);
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState(createInitialScores);

  const getHighestScoreKey = (finalScores) =>
    CHARACTER_KEYS.reduce((bestKey, key) =>
      finalScores[key] > finalScores[bestKey] ? key : bestKey
    );

  const handleAnswer = (pointsTo) => {
    const nextScores = { ...scores };

    pointsTo.forEach((key) => {
      nextScores[key] += 1;
    });

    setScores(nextScores);

    if (currentQ + 1 < QUESTIONS.length) {
      setCurrentQ((prev) => prev + 1);
      return;
    }

    const winnerKey = getHighestScoreKey(nextScores);
    setResult(CHARACTERS[winnerKey]);
  };

  const resetTest = () => {
    setCurrentQ(0);
    setScores(createInitialScores());
    setResult(null);
  };

  const shareOnX = () => {
    if (!result) return;

    const text = `Aytek Şayan Evreninde ben "%100 ${result.name}" çıktım!

Karakter Analizi: "${result.desc.substring(0, 75)}..."

16 farklı karakterden sen hangisisin? Testi çöz:`;

    const siteUrl = "https://ayteksayan.com/hangi-karaktersin";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const progressPercent = Math.round(((currentQ + 1) / QUESTIONS.length) * 100);
  const activeQuestion = QUESTIONS[currentQ];

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ minHeight: "80vh", paddingBottom: "4rem" }}>
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
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
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
        <div className="section-header-editorial" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="archive-badge">// KİŞİLİK ENVANTERİ</span>
          <h1 className="editorial-title" style={{ textTransform: "none", margin: "0.5rem 0" }}>
            HANGİ KARAKTERSİN?
          </h1>
          <p className="editorial-subtitle">
            16 farklı karakterin yer aldığı psikolojik sicil testini tamamla ve Aytek Şayan evrenindeki alter eganı keşfet.
          </p>
        </div>

        {result ? (
          <div className="result-card animate-fade">
            <div className="result-image-container">
              <img src={result.image} alt={result.name} />
            </div>

            <div style={{ padding: "2.5rem 2rem" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", opacity: 0.7, letterSpacing: "2px" }}>
                {result.project.toLocaleUpperCase("tr-TR")}
              </span>

              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", color: "var(--accent-dark)", margin: "0.5rem 0 1.5rem" }}>
                {result.name}
              </h2>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "2.5rem" }}>
                {result.desc}
              </p>

              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={shareOnX}
                  style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    padding: "1rem 2rem",
                    borderRadius: "30px",
                    fontFamily: "var(--font-heading)",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  SONUCU X'TE PAYLAŞ 𝕏
                </button>

                <button
                  onClick={resetTest}
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--accent-dark)",
                    border: "1px solid var(--accent-dark)",
                    padding: "1rem 2rem",
                    borderRadius: "30px",
                    fontFamily: "var(--font-heading)",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  TESTİ TEKRARLA ⟲
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-heading)", fontWeight: "bold", color: "var(--accent-dark)", marginBottom: "0.5rem" }}>
              <span>ANALİZ: {currentQ + 1} / {QUESTIONS.length}</span>
              <span>% {progressPercent}</span>
            </div>

            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
            </div>

            <h3 style={{ fontSize: "1.5rem", lineHeight: "1.5", marginBottom: "2rem", color: "var(--accent-dark)" }}>
              {activeQuestion.question}
            </h3>

            {activeQuestion.options.map((answer, index) => (
              <button
                key={`${currentQ}-${index}`}
                className="test-option-btn"
                onClick={() => handleAnswer(answer.pointsTo)}
              >
                {answer.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterTest;