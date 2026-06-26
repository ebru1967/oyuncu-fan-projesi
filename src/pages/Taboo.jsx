import React, { useState, useEffect, useCallback } from 'react';

// Quiz, Arşiv Verileri ve Özel "Lore" Eklemeleriyle 59 Kelimelik Dev Deste
const TABOO_CARDS = [
  // Karakterler ve Projeler
  { word: "ŞERİF", forbidden: ["Karakter", "Taşacak Bu Deniz", "Kötü", "Çay", "20 Yıl"] },
  { word: "FURTUNA", forbidden: ["Şerif", "Soyadı", "Taşacak Bu Deniz", "Reis", "Dizi"] },
  { word: "GÜRKAN", forbidden: ["Komiser/Polis", "Çağatay Ulusoy", "Karakter", "Gaddar", "Mesut"] },
  { word: "KÜRŞAT", forbidden: ["Karakter", "Komiser", "Kahve", "İnci Taneleri", "Yılmaz Erdoğan"] },
  { word: "SARP", forbidden: ["Çöp Adam", "Dizi", "Engin Altan Düzyatan", "Manipüle", "Elçin Sangu"] },
  { word: "BOZAN", forbidden: ["Asker", "Kötü", "İsimsizler", "Operasyon", "Düşman"] },
  { word: "BEHİÇ", forbidden: ["Karakter", "Devlet", "Sadık", "Ya İstiklal Ya Ölüm", "Bıyık"] },
  { word: "LAİS", forbidden: ["Karakter", "Kurnaz", "Çıkar", "Diriliş Ertuğrul", "Oyun"] },
  { word: "İMAM", forbidden: ["Bana Karanlığını Anlat", "Din", "Cami", "Film", "Sinema"] },
  { word: "MERT", forbidden: ["2016", "Genç", "Polis", "Cinayet Büro", "46 Yok Olan"] },
  { word: "ŞAHBAZ", forbidden: ["Kılıçoğlu", "Barbaroslar", "Ulaş Tuna Astepe", "Akdeniz", "Korsan"] },
  { word: "RÜSTEM", forbidden: ["Uyanış: Büyük Selçuklu", "Casus", "İdam", "Dizi", "Tarihi"] },
  { word: "SERHAT", forbidden: ["Kübra", "Küfür", "Gülcan", "Çağatay Ulusoy", "Netflix"] },
  { word: "TURAHAN", forbidden: ["Hay Sultan", "Karakter", "Dizi", "Sabbâhi", "Tarihi"] },
  { word: "ALİ BİLGİN", forbidden: ["Kuzgun", "Karakter", "Dizi", "Rol", "Uzun saç"] },
  { word: "BİZANS KOMUTANI", forbidden: ["Diriliş Ertuğrul", "Dizi", "Tarihi", "Düşman", "Karakter"] },
  { word: "46 YOK OLAN", forbidden: ["Dizi", "İlk", "Profesyonel", "Proje", "Televizyon"] },
  { word: "İNCİ TANELERİ", forbidden: ["Dizi", "Kürşat", "Yılmaz Erdoğan", "Pavyon", "Kanal D"] },
  { word: "ŞAHSİYET", forbidden: ["Dizi", "Yerli", "Haluk Bilginer", "Sevmek", "Favori"] },
  { word: "MESUT", forbidden: ["Gaddar", "Gürkan", "Dandun", "Taksi", "Çağatay Ulusoy"] },
  { word: "ESME", forbidden: ["Şerif", "Takıntı", "Taşacak Bu Deniz", "Aşk", "Eleni"] },
  
  // Biyografi ve Eğitim
  { word: "VETERİNERLİK", forbidden: ["Bursa", "Baba", "Hayvan", "Bırakmak", "Tiyatro"] },
  { word: "BİLKENT", forbidden: ["Ankara", "Üniversite", "Tiyatro", "Mezun", "Eğitim"] },
  { word: "HALİÇ ÜNİVERSİTESİ", forbidden: ["Yüksek Lisans", "İstanbul", "Tez", "Akademi", "Eğitim"] },
  { word: "YUNUS EMRE LİSESİ", forbidden: ["İzmir", "Okul", "Almanca", "Eğitim", "Lise"] },
  { word: "İZMİR", forbidden: ["Doğum", "Şehir", "Çocukluk", "Ege", "Memleket"] },
  { word: "DÜZCE", forbidden: ["Yaz", "Çocukluk", "Çerkes", "Anne", "Aile"] },
  { word: "ANKARA", forbidden: ["Bilkent", "Şehir", "Öğrenci", "Ayaz", "Başkent"] },
  { word: "BURSA", forbidden: ["Uludağ", "Veteriner", "Şehir", "Fakülte", "Gençlik"] },
  { word: "POLONYA", forbidden: ["Grotowski", "Salto", "Ülke", "Yurtdışı", "Tiyatro"] },
  { word: "ÇERKES", forbidden: ["Kök", "Soy", "Aile", "Düzce", "Kafkas"] },
  { word: "SÜRMENE", forbidden: ["Trabzon", "Karadeniz", "İlçe", "Bıçak", "Taşacak bu deniz"] },
  { word: "ÇUVAL", forbidden: ["Kedi", "Felsefe", "Hayvan", "İsim", "Evcil"] },
  
  // Tiyatro ve Sanat
  { word: "SALTO", forbidden: ["Polonya", "Fiziksel", "Grotowski", "Oyun", "Tiyatro"] },
  { word: "AYNA", forbidden: ["Ödül", "Direklerarası", "Oyun", "Tiyatro", "En İyi Erkek"] },
  { word: "MEZARSIZ ÖLÜLER", forbidden: ["Oyun", "Tiyatro", "Henri", "Sahne", "2014"] },
  { word: "SU YÜZÜ", forbidden: ["Kısa", "Film", "Proje", "2023", "Sinema"] },
  { word: "TEATR ANDRA", forbidden: ["Ekip", "Polonya", "Salto", "Tiyatro", "Bağımsız"] },
  { word: "DASDAS", forbidden: ["Sahne", "Ataşehir", "Tiyatro", "Festival", "Mekan"] },
  { word: "FİZİKSEL TİYATRO", forbidden: ["Beden", "Hareket", "Salto", "Yöntem", "Eğitim"] },
  { word: "BAĞIMSIZ TİYATRO", forbidden: ["Kısalar", "Ekip", "Özgür", "Alternatif", "Sahne"] },
  { word: "ORGANİK DRAMATURJİ", forbidden: ["Tez", "Salto", "Yöntem", "Fiziksel", "Beden"] },
  { word: "KISALAR", forbidden: ["Festival", "DasDas", "Bağımsız", "Mert Fırat", "Sahne"] },
  { word: "TEZ", forbidden: ["Yüksek Lisans", "Akademi", "Savunma", "Yazı", "Haliç"] },
  { word: "SAHNE", forbidden: ["Tiyatro", "Oyun", "Perde", "Seyirci", "Işık"] },
  { word: "KULİS", forbidden: ["Hazırlık", "Arka", "Kostüm", "Makyaj", "Beklemek"] },

  // Felsefe, Set Anıları ve İkonik Detaylar
  { word: "DON KİŞOT", forbidden: ["Kitap", "Okumak", "Roman", "Cervantes", "Tavsiye"] },
  { word: "YABAN", forbidden: ["Yakup Kadri", "Roman", "Edebiyat", "İlk", "Kitap"] },
  { word: "EĞİTİM SİSTEMİ", forbidden: ["Değiştirmek", "Oyunculuk", "Sektör", "Okul", "Akademi"] },
  { word: "MÜCADELE", forbidden: ["Kavram", "Tanım", "Hayat", "Zorluk", "Felsefe"] },
  { word: "TEPSİ", forbidden: ["Hata", "Kamera", "İkinci", "Düşürmek", "Çay"] },
  { word: "HASAN SABBAH", forbidden: ["Hayal", "Rol", "Oynamak", "Tarihi", "Alamut"] },
  { word: "BEKLEMEK", forbidden: ["Zor", "Oyunculuk", "Kulis", "Set", "Saat"] },
  { word: "DAVID LYNCH", forbidden: ["Yönetmen", "Yabancı", "Favori", "Sevdiği", "Sinema"] },
  { word: "YILMAZ ERDOĞAN", forbidden: ["Yönetmen", "İnci Taneleri", "BKM", "Yazar", "Usta"] },
  { word: "ANTAGONİST", forbidden: ["Kötü Adam", "Şerif", "Rol", "Karşıt", "Karakter"] },
  { word: "JIM CARREY", forbidden: ["Komedi", "Oyuncu", "Hollywood", "Maske", "İdol"] },
  { word: "PLÜTON", forbidden: ["Gezegen", "Uzay", "Kılıf/Telefon", "Dokuzuncu", "Sistem"] },
  { word: "KURU PASTA", forbidden: ["Şerif", "Favori", "Çay", "Rize", "Tatlı"] },
  { word: "BALIKESİR", forbidden: ["Baba", "Memleket", "İzmir", "Düzce", "Kök"] },
  { word: "RICK AND MORTY", forbidden: ["Çizgi Dizi", "Öğlen", "İzlemek", "Animasyon", "Bilim Kurgu"] },
  { word: "INCEPTION", forbidden: ["Film", "Gece", "Rüya", "Nolan", "İzlemek"] },
  { word: "HIIT ANTRENMAN", forbidden: ["Spor", "Kardiyo", "Dayanıklılık", "Set", "Disiplin"] },
  { word: "PROTEİN", forbidden: ["Beslenme", "Diyet", "Yemek", "Catering", "Set"] },
  { word: "DRAGOS", forbidden: ["Komutan", "Lais", "Bizans", "Düşman", "Ertuğrul"] },
  { word: "ORUÇ REİS", forbidden: ["Barbaroslar", "Şahbaz", "Taşacak bu deniz", "Şerif", "Dizi"] },
  { word: "SEMAVİ (GÖKHAN)", forbidden: ["Serhat", "Arkadaş", "Mahalle", "Kübra", "İnanç"] },
  { word: "BÂTINÎ", forbidden: ["Rüstem", "Casus", "Selçuklu", "Fedai", "Suikast"] },
  { word: "KOÇARİ", forbidden: ["Köy", "Şerif", "Kan Davası", "Cinayet", "Düşman"] },
  { word: "GASİLHANE", forbidden: ["İmam", "Ölüm", "Film", "Karanlık", "Mekan"] },
  { word: "FOTOĞRAFÇI", forbidden: ["Fırat", "Kısa Film", "Düğün", "Su Yüzü", "Meslek"] },
  { word: "JERZY GROTOWSKI", forbidden: ["Fiziksel", "Tiyatro", "Enstitü", "Polonya", "Yönetmen"] },
  { word: "KADIKÖY THEATRON", forbidden: ["Tiyatro", "Sahne", "Salto", "Moda", "Mekan"] }
];

const GAME_TIME = 60; // Saniye cinsinden her elin süresi

function Taboo() {
  const [gameState, setGameState] = useState('start'); // start, playing, turnEnd, gameOver
  const [currentTeam, setCurrentTeam] = useState('A'); // 'A' veya 'B'
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [deck, setDeck] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [passCount, setPassCount] = useState(3);

  // Oyunu En Baştan Başlat
  const startGame = () => {
    const shuffledDeck = [...TABOO_CARDS].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    setCurrentCardIndex(0);
    setTeamAScore(0);
    setTeamBScore(0);
    setCurrentTeam('A');
    setTimeLeft(GAME_TIME);
    setPassCount(3);
    setGameState('playing');
  };

  // Sırayı Değiştir ve Diğer Takıma Geç
  const startNextTurn = () => {
    setCurrentTeam(prev => prev === 'A' ? 'B' : 'A');
    setTimeLeft(GAME_TIME);
    setPassCount(3);
    setGameState('playing');
  };

  // Sonraki Karta Geç veya Deste Biterse Oyunu Bitir
  const nextCard = useCallback(() => {
    if (currentCardIndex + 1 < deck.length) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setGameState('gameOver'); 
    }
  }, [currentCardIndex, deck.length]);

  // Puanlama Fonksiyonları
  const handleCorrect = () => {
    if (currentTeam === 'A') setTeamAScore(prev => prev + 1);
    else setTeamBScore(prev => prev + 1);
    nextCard();
  };

  const handleTaboo = () => {
    if (currentTeam === 'A') setTeamAScore(prev => prev - 1);
    else setTeamBScore(prev => prev - 1);
    nextCard();
  };

  const handlePass = () => {
    if (passCount > 0) {
      setPassCount(prev => prev - 1);
      nextCard();
    }
  };

  // Zamanlayıcı (Timer) - Süre bitince sırayı diğerine atar
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('turnEnd');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '2rem 1rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="archive-badge">// ZAMANLI TAKIM MÜSABAKASI</span>
        <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>TABU: ARŞİV VERSİYONU</h1>
        <p className="editorial-subtitle">A Takımı vs B Takımı! Yasaklı kelimeleri kullanmadan en çok arşivi anlatan kazanır.</p>
      </div>

      {/* BAŞLANGIÇ EKRANI */}
      {gameState === 'start' && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎭</div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--accent-dark)' }}>
            Hazır olduğunuzda süre başlayacak. İlk sıra <strong>A TAKIMI'NDA!</strong> <br/><br/>
            Toplam {TABOO_CARDS.length} kelimelik deste karıştırılıyor...
          </p>
          <button 
            onClick={startGame}
            style={{ backgroundColor: 'var(--accent-dark)', color: 'var(--bg-main)', padding: '1rem 3rem', borderRadius: '50px', border: 'none', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' }}
          >
            MÜSABAKAYI BAŞLAT
          </button>
        </div>
      )}

      {/* OYUN EKRANI */}
      {gameState === 'playing' && deck.length > 0 && (
        <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Skor Tabelası */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--accent-dark)' }}>
            <div style={{ textAlign: 'center', flex: 1, borderRight: '1px solid var(--accent-dark)' }}>
              <span style={{ fontSize: '0.8rem', display: 'block', opacity: 0.8 }}>A TAKIMI</span>
              <strong style={{ fontSize: '1.5rem', color: currentTeam === 'A' ? '#2ecc71' : 'var(--accent-dark)' }}>{teamAScore}</strong>
            </div>
            
            <div style={{ textAlign: 'center', flex: 1 }}>
              <span style={{ fontSize: '1.5rem', display: 'block', fontWeight: 'bold', color: timeLeft <= 10 ? '#e74c3c' : 'var(--accent-dark)' }}>⏳ {timeLeft}sn</span>
            </div>

            <div style={{ textAlign: 'center', flex: 1, borderLeft: '1px solid var(--accent-dark)' }}>
              <span style={{ fontSize: '0.8rem', display: 'block', opacity: 0.8 }}>B TAKIMI</span>
              <strong style={{ fontSize: '1.5rem', color: currentTeam === 'B' ? '#2ecc71' : 'var(--accent-dark)' }}>{teamBScore}</strong>
            </div>
          </div>

          <div style={{ textAlign: 'center', backgroundColor: currentTeam === 'A' ? 'rgba(46, 204, 113, 0.2)' : 'rgba(52, 152, 219, 0.2)', padding: '0.5rem', borderRadius: '8px', fontFamily: 'var(--font-heading)', fontWeight: 'bold' }}>
            ŞU AN OYNAYAN: {currentTeam} TAKIMI
          </div>

          {/* Kart Alanı */}
          <div style={{ backgroundColor: 'var(--bg-main)', border: '3px solid var(--accent-dark)', borderRadius: '16px', padding: '2rem 1rem', textAlign: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '2rem', margin: '0 0 1.5rem 0', color: 'var(--accent-dark)', borderBottom: '2px dashed var(--accent-dark)', paddingBottom: '1rem' }}>
              {deck[currentCardIndex].word}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {deck[currentCardIndex].forbidden.map((word, idx) => (
                <li key={idx} style={{ fontSize: '1.2rem', color: '#e74c3c', fontWeight: 'bold' }}>
                  {word}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontrol Butonları */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginTop: '1rem' }}>
            <button onClick={handleTaboo} style={{ padding: '1rem', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>TABU (-1)</button>
            <button onClick={handlePass} disabled={passCount === 0} style={{ padding: '1rem', backgroundColor: '#f1c40f', color: '#333', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: passCount > 0 ? 'pointer' : 'not-allowed', opacity: passCount > 0 ? 1 : 0.5 }}>PAS ({passCount})</button>
            <button onClick={handleCorrect} style={{ padding: '1rem', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>DOĞRU (+1)</button>
          </div>
        </div>
      )}

      {/* EL BİTİŞ EKRANI (TURN END) */}
      {gameState === 'turnEnd' && (
        <div style={{ textAlign: 'center', marginTop: '2rem', backgroundColor: 'var(--bg-card)', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid var(--accent-dark)' }}>
          <h2 style={{ fontSize: '2rem', color: '#e74c3c', margin: '0 0 1rem 0', fontFamily: 'var(--font-heading)' }}>SÜRE DOLDU!</h2>
          <p style={{ fontSize: '1.2rem', margin: '0 0 2rem 0' }}>
            Telefonu / Bilgisayarı diğer takıma devredin.
          </p>
          <button 
            onClick={startNextTurn}
            style={{ backgroundColor: currentTeam === 'A' ? '#3498db' : '#2ecc71', color: '#fff', padding: '1rem 2rem', borderRadius: '30px', border: 'none', fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer' }}
          >
            {currentTeam === 'A' ? 'B TAKIMI HAZIRSA BAŞLA' : 'A TAKIMI HAZIRSA BAŞLA'}
          </button>
        </div>
      )}

      {/* OYUN BİTİŞ EKRANI (GAME OVER - DESTE BİTİNCE) */}
      {gameState === 'gameOver' && (
        <div style={{ textAlign: 'center', marginTop: '2rem', backgroundColor: 'var(--bg-card)', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid var(--accent-dark)' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-dark)', margin: '0 0 1rem 0', fontFamily: 'var(--font-heading)' }}>TÜM KARTLAR BİTTİ!</h2>
          <div style={{ fontSize: '5rem', margin: '1rem 0' }}>🏆</div>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0', fontSize: '1.5rem' }}>
            <div>A Takımı: <strong>{teamAScore}</strong></div>
            <div>B Takımı: <strong>{teamBScore}</strong></div>
          </div>

          <div style={{ fontSize: '2rem', color: '#2ecc71', fontWeight: 'bold', marginBottom: '2rem' }}>
            {teamAScore > teamBScore ? 'A TAKIMI KAZANDI!' : teamBScore > teamAScore ? 'B TAKIMI KAZANDI!' : 'İNANILMAZ, BERABERE!'}
          </div>

          <button 
            onClick={startGame}
            style={{ backgroundColor: 'var(--accent-dark)', color: 'var(--bg-main)', padding: '1rem 2rem', borderRadius: '30px', border: 'none', fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer' }}
          >
            RÖVANŞ İÇİN YENİDEN OYNA ⟲
          </button>
        </div>
      )}

    </div>
  );
}

export default Taboo;