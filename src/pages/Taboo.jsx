import React, { useState, useEffect, useCallback } from 'react';

// Quiz ve Arşiv Verileriyle Güncellenmiş 53 Kelimelik Dev Destesi
const TABOO_CARDS = [
  // Karakterler ve Projeler
  { word: "ŞERİF", forbidden: ["Karakter", "Taşacak Bu Deniz", "Kötü", "Çay", "20 Yıl"] },
  { word: "FURTUNA", forbidden: ["Şerif", "Soyadı", "Deniz", "Karakter", "Dizi"] },
  { word: "GÜRKAN", forbidden: ["Komiser", "Polis", "Karakter", "Gaddar", "Mesut"] },
  { word: "KÜRŞAT", forbidden: ["Karakter", "Dizi", "Sert", "İnci Taneleri", "Rol"] },
  { word: "SARP", forbidden: ["Çöp Adam", "Dizi", "Karakter", "Rol", "Yalı"] },
  { word: "BOZAN", forbidden: ["Karakter", "Kötü", "Dizi", "Saç", "Düşman"] },
  { word: "BEHİÇ", forbidden: ["Karakter", "Devlet", "Sadık", "Dizi", "Bıyık"] },
  { word: "LAİS", forbidden: ["Karakter", "Kurnaz", "Çıkar", "Dizi", "Oyun"] },
  { word: "İMAM", forbidden: ["Bana Karanlığını Anlat", "Din", "Cami", "Dizi", "Sinema"] },
  { word: "MERT", forbidden: ["Karakter", "Genç", "Dizi", "Hikaye", "İsimsizler"] },
  { word: "ŞAHBAZ", forbidden: ["Kılıçoğlu", "Barbaroslar", "Dizi", "Akdeniz", "Karakter"] },
  { word: "RÜSTEM", forbidden: ["Uyanış", "Selçuklu", "Karakter", "Dizi", "Tarihi"] },
  { word: "SERHAT", forbidden: ["Kübra", "Dizi", "Karakter", "Rol", "Netflix"] },
  { word: "TURAHAN", forbidden: ["Hay Sultan", "Karakter", "Dizi", "Rol", "Tarihi"] },
  { word: "ALİ BİLGİN", forbidden: ["Kuzgun", "Karakter", "Dizi", "Rol", "İsim"] },
  { word: "BİZANS KOMUTANI", forbidden: ["Diriliş Ertuğrul", "Dizi", "Bölüm", "Düşman", "Karakter"] },
  { word: "46 YOK OLAN", forbidden: ["Dizi", "İlk", "Profesyonel", "Proje", "Televizyon"] },
  { word: "İNCİ TANELERİ", forbidden: ["Dizi", "Kürşat", "Yılmaz Erdoğan", "Pavyon", "Kanal D"] },
  { word: "ŞAHSİYET", forbidden: ["Dizi", "Yerli", "Haluk Bilginer", "Sevmek", "Favori"] },
  
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
  { word: "ÇUVAL", forbidden: ["Kedi", "Felsefe", "Hayat", "İsim", "Evcil"] },
  
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

  // Felsefe, Kitaplar ve Set Anıları
  { word: "DON KİŞOT", forbidden: ["Kitap", "Okumak", "Roman", "Cervantes", "Tavsiye"] },
  { word: "YABAN", forbidden: ["Yakup Kadri", "Roman", "Edebiyat", "İlk", "Kitap"] },
  { word: "EĞİTİM SİSTEMİ", forbidden: ["Değiştirmek", "Oyunculuk", "Sektör", "Okul", "Akademi"] },
  { word: "MÜCADELE", forbidden: ["Kavram", "Tanım", "Hayat", "Zorluk", "Felsefe"] },
  { word: "AŞK", forbidden: ["Sabah", "Uyanmak", "İlk Şey", "Sevgi", "İlişki"] },
  { word: "TEPSİ", forbidden: ["Hata", "Kamera", "İkinci", "Düşürmek", "Çay"] },
  { word: "HASAN SABBAH", forbidden: ["Hayal", "Rol", "Oynamak", "Tarihi", "Alamut"] },
  { word: "BEKLEMEK", forbidden: ["Zor", "Oyunculuk", "Kulis", "Set", "Saat"] },
  { word: "DAVID LYNCH", forbidden: ["Yönetmen", "Yabancı", "Favori", "Sevdiği", "Sinema"] },
  { word: "YILMAZ ERDOĞAN", forbidden: ["Yönetmen", "İnci Taneleri", "BKM", "Yazar", "Usta"] },
  { word: "ANTAGONİST", forbidden: ["Kötü Adam", "Şerif", "Rol", "Karşıt", "Karakter"] }
];

const GAME_TIME = 60; // Saniye cinsinden oyun süresi

function Taboo() {
  const [gameState, setGameState] = useState('start'); // start, playing, end
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);
  const [deck, setDeck] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [passCount, setPassCount] = useState(3);

  // Oyunu Başlat ve Kartları Karıştır
  const startGame = () => {
    const shuffledDeck = [...TABOO_CARDS].sort(() => Math.random() - 0.5);
    setDeck(shuffledDeck);
    setCurrentCardIndex(0);
    setScore(0);
    setTimeLeft(GAME_TIME);
    setPassCount(3);
    setGameState('playing');
  };

  // Sonraki Karta Geç
  const nextCard = useCallback(() => {
    if (currentCardIndex + 1 < deck.length) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setGameState('end'); 
    }
  }, [currentCardIndex, deck.length]);

  // Buton Aksiyonları
  const handleCorrect = () => {
    setScore(prev => prev + 1);
    nextCard();
  };

  const handleTaboo = () => {
    setScore(prev => prev - 1);
    nextCard();
  };

  const handlePass = () => {
    if (passCount > 0) {
      setPassCount(prev => prev - 1);
      nextCard();
    }
  };

  // Zamanlayıcı (Timer)
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('end');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '2rem 1rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="archive-badge">// ZAMANLI MEYDAN OKUMA</span>
        <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>TABU: ARŞİV VERSİYONU</h1>
        <p className="editorial-subtitle">Yasaklı kelimeleri kullanmadan ana kelimeyi anlat. Süren 60 saniye!</p>
      </div>

      {/* BAŞLANGIÇ EKRANI */}
      {gameState === 'start' && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⏱️</div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--accent-dark)' }}>
            Hazır olduğunda süre başlayacak. Toplam {TABOO_CARDS.length} kelimelik deste karıştırılıyor...
          </p>
          <button 
            onClick={startGame}
            style={{ backgroundColor: 'var(--accent-dark)', color: 'var(--bg-main)', padding: '1rem 3rem', borderRadius: '50px', border: 'none', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            OYUNU BAŞLAT
          </button>
        </div>
      )}

      {/* OYUN EKRANI */}
      {gameState === 'playing' && deck.length > 0 && (
        <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* Üst Bilgi Barı */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--bg-card)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--accent-dark)' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: timeLeft <= 10 ? '#e74c3c' : 'var(--accent-dark)', fontFamily: 'var(--font-heading)' }}>
              ⏳ {timeLeft}sn
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-dark)', fontFamily: 'var(--font-heading)' }}>
              PUAN: {score}
            </div>
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

      {/* BİTİŞ EKRANI */}
      {gameState === 'end' && (
        <div style={{ textAlign: 'center', marginTop: '2rem', backgroundColor: 'var(--bg-card)', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid var(--accent-dark)' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-dark)', margin: '0 0 1rem 0', fontFamily: 'var(--font-heading)' }}>SÜRE DOLDU!</h2>
          <div style={{ fontSize: '5rem', margin: '1rem 0' }}>🎯</div>
          <p style={{ fontSize: '1.5rem', margin: '0 0 2rem 0' }}>
            Toplam Puanınız: <strong style={{ fontSize: '2.5rem', display: 'block', color: 'var(--accent-dark)' }}>{score}</strong>
          </p>
          <button 
            onClick={startGame}
            style={{ backgroundColor: 'var(--accent-dark)', color: 'var(--bg-main)', padding: '1rem 2rem', borderRadius: '30px', border: 'none', fontSize: '1rem', fontFamily: 'var(--font-heading)', fontWeight: 'bold', cursor: 'pointer' }}
          >
            YENİDEN OYNA ⟲
          </button>
        </div>
      )}

    </div>
  );
}

export default Taboo;