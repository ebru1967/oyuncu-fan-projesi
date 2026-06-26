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

// 6 Soruluk Kapsamlı Karakter Puanlama Testi
const QUESTIONS = [
  { question: "Uzun yıllardır dost olduğun biri, seni korumak için büyük bir sırrı senden sakladığını itiraf ediyor. İlk tepkin ne olur?", options: [
    { text: "Neden yaptığını anlamaya çalışırım.", pts: { TURAHAN: 1, SERHAT: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Güven kırıldıysa sebebi önemli değildir.", pts: { KURSAT: 1, GURKAN: 1, MERT: 1, BEHIC: 1 } },
    { text: "Tüm detayları öğrenmeden karar vermem.", pts: { RUSTEM: 1, SAHBAZ: 1, BOZAN: 1, LAIS: 1 } },
    { text: "Kırılsam da dostluğumuzu tamamen bitirmem.", pts: { ALI: 1, SARP: 1, SERIF: 1, ATTILA: 1 } }
  ]},
  { question: "Çok emek verdiğin bir işin başarısı başkasına mal ediliyor. Ne yaparsın?", options: [
    { text: "Hakkımı sonuna kadar ararım.", pts: { MERT: 1, ATTILA: 1, SAHBAZ: 1, GURKAN: 1 } },
    { text: "Doğru zaman gelince gerçeği ortaya çıkarırım.", pts: { RUSTEM: 1, BOZAN: 1, SERIF: 1, LAIS: 1 } },
    { text: "Önemli olan sonucu almak der geçerim.", pts: { TURAHAN: 1, IMAM: 1, FIRAT: 1, KURSAT: 1 } },
    { text: "Sessiz kalırım ama unutamam.", pts: { ALI: 1, SARP: 1, BEHIC: 1, SERHAT: 1 } }
  ]},
  { question: "Bir liderin yanlış karar verdiğini biliyorsun. Ne yaparsın?", options: [
    { text: "Açıkça karşı çıkarım.", pts: { MERT: 1, GURKAN: 1, ATTILA: 1, KURSAT: 1 } },
    { text: "Önce neden böyle düşündüğünü anlamaya çalışırım.", pts: { TURAHAN: 1, BEHIC: 1, SERHAT: 1, FIRAT: 1 } },
    { text: "Emirleri uygularım.", pts: { LAIS: 1, BOZAN: 1, RUSTEM: 1, SAHBAZ: 1 } },
    { text: "Kendi çözümümü gizlice uygularım.", pts: { SARP: 1, SERIF: 1, ALI: 1, IMAM: 1 } }
  ]},
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
  },
  { question: "Bir seçim yapman gerekiyor:", options: [
    { text: "Sevdiğin insan.", pts: { BOZAN: 1, ATTILA: 1, SERIF: 1, SAHBAZ: 1 } },
    { text: "Görevin.", pts: { LAIS: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Adalet.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Kendi geleceğin.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "İnsanların seni en çok hangi özelliğinle hatırlamasını isterdin?", options: [
    { text: "Cesaretimle.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Sadakatimle.", pts: { GURKAN: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Zekâmla.", pts: { SERIF: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Kararlılığımla.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "En yakın arkadaşın büyük bir hata yaptı ve bunun sonuçlarına katlanmak istemiyor.", options: [
    { text: "Onu korurum.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Hatasıyla yüzleşmesini sağlarım.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Neden yaptığını anlamaya çalışırım.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Yardım ederim ama sorumluluğu ona bırakırım.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Hayatında her şeyi değiştirebilecek bir fırsat yakaladın fakat bu fırsat seni ailenden uzaklaştıracak.", options: [
    { text: "Fırsatı değerlendiririm.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Ailemi bırakmam.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "İkisini de koruyacak yol ararım.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Karar vermeden önce uzun süre düşünürüm.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Sana göre gerçek güç nedir?", options: [
    { text: "İnsanları koruyabilmek.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Duygularını kontrol edebilmek.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Vazgeçmemek.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "İnsanları yönlendirebilmek.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Haksızlığa uğradığında...", options: [
    { text: "Hemen tepki veririm.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Sabırla doğru zamanı beklerim.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Sebeplerini araştırırım.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Unutmasam da yoluma devam ederim.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Bir düşmanın yardımına ihtiyaç duyuyor.", options: [
    { text: "Yardım ederim.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Önce nedenini öğrenirim.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Geçmişi unutamam.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Duruma göre karar veririm.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Hayatını en iyi anlatan cümle hangisi?", options: [
    { text: "Mücadele etmeden vazgeçmem.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Her şeyin bir sebebi vardır.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Sevdiklerim benim önceliğimdir.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Kendi yolumu kendim çizerim.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "İnsanlarda seni en çok rahatsız eden şey nedir?", options: [
    { text: "İhanet", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Yalan.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Bencillik.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Korkaklık", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Bir ekipte hangi rol sana daha uygun?", options: [
    { text: "Lider", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Stratejist", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Koruyucu", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Yalnız çalışan", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "En büyük korkun nedir?", options: [
    { text: "Sevdiklerimi kaybetmek", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SERIF: 1 } },
    { text: "Amaçsız yaşamak", pts: { SAHBAZ: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Başarısız olmak", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Kendimi kaybetmek", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Sana yapılan bir iyiliği…", options: [
    { text: "Asla unutmam.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Karşılığını vermeye çalışırım.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "İçimde saklarım.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Normal karşılarım.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Bir savaşın ortasında olsan hangi görevi seçerdin?", options: [
    { text: "En önde savaşmak.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Plan yapmak.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "İnsanları korumak.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Gizli görev yürütmek.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Bir insanı gerçekten tanımak için ne gerekir?", options: [
    { text: "Zor günlerini görmek.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Güç sahibi olduğundaki halini görmek.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Sevdiklerine davranışını görmek.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Kaybederken nasıl davrandığını görmek.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Hangisi senin için daha ağırdır?", options: [
    { text: "İhanete uğramak", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Sevdiklerini kaybetmek", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Başarısız olmak", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Vicdan azabı çekmek", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Bir hata yaptığında ne yaparsın?", options: [
    { text: "Telafi etmeye çalışırım.", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Uzun süre düşünürüm.", pts: { SERIF: 1, SARP: 1, IMAM: 1, FIRAT: 1 } },
    { text: "Kimseye belli etmem.", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Ders çıkarıp devam ederim.", pts: { SERHAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]},
  { question: "Eğer hayatın bir kelimeyle özetlenecek olsaydı hangisi olurdu?", options: [
    { text: "Mücadele", pts: { BOZAN: 1, ATTILA: 1, LAIS: 1, SAHBAZ: 1 } },
    { text: "Sadakat", pts: { SERIF: 1, SARP: 1, IMAM: 1, SERIF: 1 } },
    { text: "Adalet", pts: { GURKAN: 1, MERT: 1, KURSAT: 1, RUSTEM: 1 } },
    { text: "Hedef", pts: { FIRAT: 1, BEHIC: 1, TURAHAN: 1, ALI: 1 } }
  ]}

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