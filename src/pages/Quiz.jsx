import React, { useState, useEffect, useMemo, useRef } from 'react';

const QUESTIONS = [
  // 1-10: Kariyer ve Projeler
  { q: "Aytek Şayan'ın hayat felsefesine adını veren kedisinin adı nedir?", options: ["Şerif", "Çuval", "Don Kişot", "Attila"], answer: "Çuval" },
  { q: "Sektöre adım atmadan önce veterinerlik eğitimini hangi sınıfta bırakmıştır?", options: ["1. Sınıf", "2. Sınıf", "4. Sınıf", "Hiç başlamadı"], answer: "4. Sınıf" },
  { q: "İlk profesyonel dizi projesi hangisidir?", options: ["Kuzgun", "46 Yok Olan", "Diriliş Ertuğrul", "İsimsizler"], answer: "46 Yok Olan" },
  { q: "Çöp Adam dizisinde canlandırdığı karakterin adı nedir?", options: ["Sarp", "Ali", "Serhat", "Kürşat"], answer: "Sarp" },
  { q: "Gaddar dizisinde hangi meslek grubunu canlandırmıştır?", options: ["Doktor", "Avukat", "Komiser", "Gazeteci"], answer: "Komiser" },
  { q: "Taşacak Bu Deniz dizisindeki karakterinin soyadı nedir?", options: ["Şayan", "Furtuna", "Bilgin", "Erol"], answer: "Furtuna" },
  { q: "İnci Taneleri dizisinde canlandırdığı karakterin adı nedir?", options: ["Kürşat", "Sarp", "Lais", "Rüstem"], answer: "Kürşat" },
  { q: "Barbaroslar: Akdeniz'in Kılıcı'ndaki rolü nedir?", options: ["Kılıçoğlu Şahbaz", "Bozan Erol", "Lais", "Turahan"], answer: "Kılıçoğlu Şahbaz" },
  { q: "Uyanış: Büyük Selçuklu dizisindeki karakterinin adı nedir?", options: ["Rüstem", "Lais", "Bozan", "Sarp"], answer: "Rüstem" },
  { q: "Ya İstiklal Ya Ölüm dizisinde canlandırdığı karakter kimdir?", options: ["Hakkı Behiç Bey", "Turahan", "Ali Bilgin", "Lais"], answer: "Hakkı Behiç Bey" },

  // 11-20: Kişisel Detaylar ve Felsefe
  { q: "Aytek Şayan aslen nerelidir?", options: ["Ankara", "İzmir", "Düzce", "Trabzon"], answer: "İzmir" },
  { q: "Oyunculuk dünyasında en çok değiştirmek istediği şey nedir?", options: ["Dizi süreleri", "Eğitim sistemi", "Mekanlar", "Sosyal medya"], answer: "Eğitim sistemi" },
  { q: "Kendini tanımlarken en çok hangi kavramı vurgular?", options: ["Jönlük", "Mücadele", "Popülarite", "Hız"], answer: "Mücadele" },
  { q: "Bir ilişkide en hızlı soğumasına neden olan durum nedir?", options: ["Yalan", "Sessizlik", "Ben olmasına izin verilmemesi", "Mesafe"], answer: "Ben olmasına izin verilmemesi" },
  { q: "Aşk tanımı nedir?", options: ["Sabah uyandığında aklına gelen ilk şey olması", "Tutku", "Güven", "Ortak zemin"], answer: "Sabah uyandığında aklına gelen ilk şey olması" },
  { q: "İzmirli olmasına rağmen hangi üniversitede tiyatro eğitimi almıştır?", options: ["Bilkent", "Ankara", "İstanbul", "Ege"], answer: "Bilkent" },
  { q: "Hayatında ikinci kez kamera karşısındayken yaptığı hatada hangi eşyayı kullanmıştır?", options: ["Çay bardağı", "Tepsi", "Kitap", "Telefon"], answer: "Tepsi" },
  { q: "'Kısalar' festivalinde hangi tür performanslara odaklanılır?", options: ["Uzun metraj", "20 dk altı performanslar", "Belgesel", "Dizi"], answer: "20 dk altı performanslar" },
  { q: "Gelecekte hangi tarihi kişiliği oynamayı hayal etmektedir?", options: ["Fatih Sultan Mehmet", "Hasan Sabah", "Mimar Sinan", "Atatürk"], answer: "Hasan Sabah" },
  { q: "En büyük çılgınlığı nedir?", options: ["Dünya turu", "Dağa tırmanmak", "Henüz bir çılgınlığı yok", "Maraton koşmak"], answer: "Henüz bir çılgınlığı yok" },

  // 21-30: Sanatsal Bakış ve Set Detayları
  { q: "En sevdiği yerli dizi nedir?", options: ["Şahsiyet", "Avrupa Yakası", "Kübra", "Gaddar"], answer: "Şahsiyet" },
  { q: "Sokak röportajları dizinin hangi bölümünde yer alır?", options: ["1. Bölüm", "3. Bölüm", "8. Bölüm", "Final"], answer: "3. Bölüm" },
  { q: "Kübra dizisinde canlandırdığı karakterin adı nedir?", options: ["Serhat", "Gürkan", "Şerif", "Sarp"], answer: "Serhat" },
  { q: "Hay Sultan dizisinde canlandırdığı karakter kimdir?", options: ["Turahan", "Lais", "Bozan", "Kürşat"], answer: "Turahan" },
  { q: "İsimsizler dizisindeki rolü nedir?", options: ["Bozan Erol", "Mert", "Ali Bilgin", "Rüstem"], answer: "Bozan Erol" },
  { q: "Hangi yönetmenle 'İnci Taneleri' setinde çalışmıştır?", options: ["Yılmaz Erdoğan", "Taylan Biraderler", "Çağrı Vila Lostuvalı", "İlham Yazar"], answer: "Yılmaz Erdoğan" },
  { q: "Kuzgun dizisinde canlandırdığı karakter kimdir?", options: ["Ali Bilgin", "Şerif Furtuna", "Sarp", "Kürşat"], answer: "Ali Bilgin" },
  { q: "Diriliş Ertuğrul'daki Bizans komutanı hangi bölümler arasındadır?", options: ["1-50", "80-100", "122-128", "140-150"], answer: "122-128" },
  { q: "Oyunculukta en zorlandığı şey nedir?", options: ["Ezber", "Beklemek", "Çekim saatleri", "Kostüm"], answer: "Beklemek" },
  { q: "En sevdiği yabancı yönetmen kimdir?", options: ["David Lynch", "Nolan", "Tarantino", "Fincher"], answer: "David Lynch" },

  // 31-40: Tiyatro, Akademi ve Detaylı Sicil 
  { q: "25. Direklerarası Seyirci Ödülleri'nde 'En İyi Erkek Oyuncu' ödülünü hangi oyundaki performansıyla almıştır?", options: ["Sanat", "Ayna", "Salto", "Woyzeck Masalı"], answer: "Ayna" },
  { q: "2019-2021 yılları arasında Oyunculuk üzerine Tezli Yüksek Lisansını hangi üniversitede tamamlamıştır?", options: ["Haliç Üniversitesi", "Kadir Has Üniversitesi", "Bilkent Üniversitesi", "Mimar Sinan Üniversitesi"], answer: "Haliç Üniversitesi" },
  { q: "13 yaşındayken 60 sayfalık ilk amatör roman denemesini yazarken Yakup Kadri'nin hangi eserinden etkilenmiştir?", options: ["Yaban", "Kiralık Konak", "Sodom ve Gomore", "Nur Baba"], answer: "Yaban" },
  { q: "2018-2019 döneminde Polonya'daki Grotowski Enstitüsü'nde provaları başlayan fiziksel tiyatro araştırmasının adı nedir?", options: ["Sanat", "Ayna", "Salto", "Mezarsız Ölüler"], answer: "Salto" },
  { q: "Kariyer arşivinde yer alan 2022 yapımı 'Bana Karanlığını Anlat' adlı sinema filminde hangi karaktere hayat vermiştir?", options: ["İmam", "Komiser", "Doktor", "Öğretmen"], answer: "İmam" },
  { q: "Hayat felsefesini açıklarken sevenlerine mutlaka bir kere okumalarını tavsiye ettiği eser hangisidir?", options: ["Sefiller", "Suç ve Ceza", "İlahi Komedya", "Don Kişot"], answer: "Don Kişot" },
  { q: "İzmir doğumlu olan oyuncunun anne ve baba tarafının memleketleri sırasıyla nerelerdir?", options: ["Düzce - Balıkesir", "Bursa - İzmir", "Trabzon - Rize", "Ankara - Eskişehir"], answer: "Düzce - Balıkesir" },
  { q: "DasDas mekan sponsorluğunda hayata geçen ve küratörlüğünü üstlendiği tiyatro festivalinin tam adı nedir?", options: ["Alternatif Sahne", "Kısalar Festivali", "Bağımsız Tiyatro Günleri", "DasDas Kısalar"], answer: "Kısalar Festivali" },
  { q: "2014 yılında sahnelenen 'Mezarsız Ölüler' adlı tiyatro oyununda hangi karakteri oynamıştır?", options: ["Henri", "Mert", "Sarp", "Ali"], answer: "Henri" },
  { q: "Kariyerinde yer alan 2023 yapımı 'Su Yüzü' adlı projenin formatı nedir?", options: ["Kısa Film", "Tiyatro Oyunu", "Mini Dizi", "Sinema Filmi"], answer: "Kısa Film" }
];

const HIGH_SCORE_KEY = 'aytek-sayan-quiz-highscore';

// Fisher-Yates shuffle — orijinal diziyi bozmadan yeni bir dizi döner
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildShuffledQuestions() {
  return shuffleArray(QUESTIONS).map((item) => ({
    ...item,
    options: shuffleArray(item.options),
  }));
}

function Quiz() {
  const [questions, setQuestions] = useState(() => buildShuffledQuestions());
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  // Seçilen cevabı ve bekleme anını kontrol eder
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);

  // Yanlış cevaplanan sorular (sonuç ekranındaki sicil dosyası için)
  const [missedQuestions, setMissedQuestions] = useState([]);

  // En yüksek skor (localStorage)
  const [highScore, setHighScore] = useState(0);
  const [isNewRecord, setIsNewRecord] = useState(false);

  const answerLockRef = useRef(false);
  const advanceTimeoutRef = useRef(null);
  const clearTimeoutRef = useRef(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(HIGH_SCORE_KEY);
      if (stored) setHighScore(Number(stored));
    } catch (e) {
      // localStorage erişilemezse sessizce yok say (gizli sekme vb.)
    }
  }, []);

  // Bileşen kapanırken bekleyen zamanlayıcıları temizle
  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
      if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
    };
  }, []);

  const handleAnswer = (selectedOption) => {
    // Eğer bir cevap seçildiyse ve bekleniyorsa, diğer butonlara tıklamayı engeller
    if (isWaiting) return;

    setSelectedAnswer(selectedOption);
    setIsWaiting(true);
    answerLockRef.current = true;

    const currentQuestion = questions[currentQ];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setMissedQuestions((prev) => [
        ...prev,
        {
          question: currentQuestion.q,
          correctAnswer: currentQuestion.answer,
          selectedAnswer: selectedOption,
        },
      ]);
    }
    
    // 1. AŞAMA: Renkleri temizle (soru HENÜZ değişmiyor)
    advanceTimeoutRef.current = setTimeout(() => {
      setSelectedAnswer(null);
      setIsWaiting(false);

      // 2. AŞAMA: Renkler temizlendikten SONRA, bir sonraki karede soruyu değiştir.
      // Bu küçük gecikme, eski renklerin yeni soruya sızmasını kesin olarak engeller.
      clearTimeoutRef.current = setTimeout(() => {
        answerLockRef.current = false;

        if (currentQ + 1 < questions.length) {
          setCurrentQ(currentQ + 1);
        } else {
          finishQuiz(isCorrect ? score + 1 : score);
        }
      }, 50);
    }, 1200);
  };

  const finishQuiz = (finalScore) => {
    setShowResult(true);
    if (finalScore > highScore) {
      setHighScore(finalScore);
      setIsNewRecord(true);
      try {
        localStorage.setItem(HIGH_SCORE_KEY, String(finalScore));
      } catch (e) {
        // yazılamazsa sessizce geç
      }
    } else {
      setIsNewRecord(false);
    }
  };

  const resetQuiz = () => {
    if (advanceTimeoutRef.current) clearTimeout(advanceTimeoutRef.current);
    if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
    setQuestions(buildShuffledQuestions());
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsWaiting(false);
    setMissedQuestions([]);
    setIsNewRecord(false);
    answerLockRef.current = false;
  };

  // Klavye kısayolları: 1-4 veya A-D ile cevap seçimi
  useEffect(() => {
    function handleKeyDown(e) {
      if (showResult || answerLockRef.current) return;

      const currentOptions = questions[currentQ]?.options;
      if (!currentOptions) return;

      const key = e.key.toUpperCase();
      const numberMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
      const letterMap = { A: 0, B: 1, C: 2, D: 3 };

      let idx = null;
      if (key in numberMap) idx = numberMap[key];
      else if (key in letterMap) idx = letterMap[key];

      if (idx !== null && currentOptions[idx] !== undefined) {
        handleAnswer(currentOptions[idx]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQ, questions, showResult]);

  // Skor paylaşma fonksiyonu (Etiketler çıkarıldı)
  const shareOnX = () => {
    const text = `Aytek Şayan Arşiv Sınavı'nda 40 soruda ${score} doğru yaptım! 🗂️✨\n\nSen bu masada mısın? Testi çözmek ve arşivi incelemek için tıkla!`;
    const siteUrl = "https://ayteksayan.com"; 
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(siteUrl)}`;
    window.open(url, '_blank');
  };

  const getResultMessage = (score) => {
    const total = questions.length;
    const ratio = score / total;

    if (ratio === 1) {
      return "SİSTEM BİLDİRİMİ: Kusursuz skor! Arşivin tüm şifrelerini çözdünüz. Bütün karakterleri, tiyatro geçmişini ve set detaylarını ezbere biliyorsunuz. Baş Küratör unvanını sonuna kadar hak ettiniz!";
    } 
    else if (ratio >= 0.75) {
      return "Muazzam bir hafıza! Sadece birkaç ufak detayı gözden kaçırdınız. Set anılarından karakter analizlerine kadar neredeyse her şeye hakimsiniz. Gerçek ve sadık bir FC üyesi olduğunuzu kanıtladınız.";
    } 
    else if (ratio >= 0.50) {
      return "Fena değil! Temel projelere ve karakterlere aşinasınız ancak derin arşiv belgelerinde biraz kaybolmuşsunuz. Kanon sayfalarına tekrar göz atmanız tavsiye edilir.";
    } 
    else if (ratio >= 0.25) {
      return "Aytek Şayan evrenine henüz yeni adım atmış gibisiniz. Dizi jeneriklerini biliyorsunuz ama perde arkası sırları için Biyografi ciltlerini tekrar incelemelisiniz.";
    } 
    else {
      return "Erişim reddedildi! Şerif Furtuna'nın deyimiyle 'Sen bu masada yoksun'. Siteyi baştan aşağı okuyup acilen teste tekrar girmelisin.";
    }
  };

  const getButtonStyle = (option) => {
    if (!selectedAnswer) return {}; 

    const isCorrectAnswer = option === questions[currentQ].answer;
    const isSelected = option === selectedAnswer;

    if (isCorrectAnswer) {
      return { backgroundColor: '#4F772D', color: '#fff', borderColor: '#4F772D' }; // Doğru cevap yeşil olur
    }
    if (isSelected && !isCorrectAnswer) {
      return { backgroundColor: 'rgba(200, 50, 50, 0.8)', color: '#fff', borderColor: 'rgba(200, 50, 50, 0.8)' }; // Yanlış seçildiyse kırmızı olur
    }
    return { opacity: 0.5 }; 
  };

  return (
    <div className="press-editorial-wrapper animate-fade">
      <style>{`
        .missed-log {
          margin-top: 2.5rem;
          text-align: left;
          border-top: 1px dashed rgba(84, 107, 65, 0.3);
          padding-top: 1.5rem;
        }
        .missed-log summary {
          cursor: pointer;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--accent-dark);
          margin-bottom: 1rem;
        }
        .missed-item {
          background: rgba(200, 50, 50, 0.05);
          border-left: 3px solid rgba(200, 50, 50, 0.5);
          padding: 1rem 1.2rem;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .missed-item .missed-q {
          font-weight: 700;
          margin-bottom: 0.4rem;
        }
        .missed-item .missed-wrong {
          color: rgba(200, 50, 50, 0.9);
        }
        .missed-item .missed-correct {
          color: #4F772D;
          font-weight: 700;
        }
        .high-score-line {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          opacity: 0.7;
          margin-top: 0.5rem;
        }
        .new-record-badge {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
          background: var(--accent-dark);
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          margin-top: 0.8rem;
        }
        .quiz-key-hint {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          opacity: 0.45;
          text-align: center;
          margin-top: 1.5rem;
        }
      `}</style>
      <div className="container">
        
        <div className="section-header-editorial" style={{ paddingTop: '0', marginTop: '-3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// İNTERAKTİF ARŞİV PROTOKOLÜ</span>
          <h1 className="editorial-title">NE KADAR TANIYORSUN?</h1>
          <p className="editorial-subtitle">Aytek Şayan arşivine ne kadar hakim olduğunuzu ölçen resmi yeterlilik sınavı.</p>
        </div>

        <div className="game-container quiz-container">
          {showResult ? (
            <div className="quiz-result">
              <h3>SİCİL DEĞERLENDİRMESİ TAMAMLANDI</h3>
              <div className="score-display">
                <span>{score}</span> / {questions.length}
              </div>

              {isNewRecord && (
                <div className="new-record-badge">🏆 YENİ REKOR</div>
              )}
              <div className="high-score-line">
                EN YÜKSEK SİCİL: {highScore} / {questions.length}
              </div>

              <p className="result-message" style={{ lineHeight: '1.6', opacity: 0.9, marginTop: '1rem', marginBottom: '2rem' }}>
                {getResultMessage(score)}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="editorial-link-btn-anchor reset-btn" onClick={resetQuiz}>
                  TESTİ TEKRARLA ⟲
                </button>
                <button 
                  className="editorial-link-btn-anchor" 
                  onClick={shareOnX}
                  style={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }}
                >
                  SKORUNU X'TE PAYLAŞ 𝕏
                </button>
              </div>

              {missedQuestions.length > 0 && (
                <details className="missed-log">
                  <summary>// EKSİK SİCİL DOSYALARI ({missedQuestions.length})</summary>
                  {missedQuestions.map((item, idx) => (
                    <div className="missed-item" key={idx}>
                      <div className="missed-q">{item.question}</div>
                      <div>
                        Senin cevabın: <span className="missed-wrong">{item.selectedAnswer}</span>
                      </div>
                      <div>
                        Doğrusu: <span className="missed-correct">{item.correctAnswer}</span>
                      </div>
                    </div>
                  ))}
                </details>
              )}
            </div>
          ) : (
            <div className="quiz-question-box animate-fade" key={currentQ}> 
              
              <div className="quiz-progress" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span>DÖKÜMAN: {currentQ + 1 < 10 ? `0${currentQ + 1}` : currentQ + 1} / {questions.length}</span>
                <div style={{ width: '60%', height: '6px', backgroundColor: 'rgba(84, 107, 65, 0.2)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, height: '100%', backgroundColor: 'var(--accent-dark)', transition: 'width 0.5s ease' }}></div>
                </div>
              </div>

              <h3 className="quiz-question">{questions[currentQ].q}</h3>
              
              <div className="quiz-options">
                {questions[currentQ].options.map((option, idx) => (
                  <button 
                    key={`${currentQ}-${idx}`} 
                    className="quiz-option-btn"
                    onClick={() => handleAnswer(option)}
                    disabled={isWaiting} 
                    style={{ ...getButtonStyle(option), transition: 'all 0.3s' }} 
                  >
                    <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                    {option}
                  </button>
                ))}
              </div>

              <div className="quiz-key-hint">KLAVYE: 1-4 veya A-D tuşlarıyla da cevaplayabilirsin</div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Quiz;