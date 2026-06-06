import { useState, useEffect, useCallback } from 'react';

const WORDS = [
  // Karakterler & Roller
  'ŞERİF', 'FURTUNA', 'GÜRKAN', 'KÜRŞAT', 'SERHAT', 'TURAHAN', 'SARP', 
  'ŞAHBAZ', 'RÜSTEM', 'BEHİÇ', 'LAİS', 'BOZAN', 'MERT', 'FIRAT', 
  'HENRİ', 'ALİ BİLGİN', 'BOZAN EROL', 'KILIÇOĞLU', 'KOMİSER', 'İMAM', 'HAKKI BEHİÇ',

  // Diziler & Filmler 
  'GADDAR', 'KÜBRA', 'ÇÖP ADAM', 'BARBAROSLAR', 'UYANIŞ', 'DİRİLİŞ', 
  'İSİMSİZLER', 'YOK OLAN', 'KUZGUN', 'İNCİ TANELERİ', 'TAŞACAK BU DENİZ', 
  'HAY SULTAN', 'ŞAHSİYET', 'SU YÜZÜ', 'İSTİKLAL', 'ÖLÜM',

  // Tiyatro Oyunları & Festivaller
  'AYNA', 'SANAT', 'SALTO', 'AŞK APTALI', 'WOYZECK', 'KISALAR', 
  'MEZARSIZ ÖLÜLER', 'FESTİVAL', 'DİREKLERARASI', 'DASDAS', 'ALTERNATİF',

  // Eğitim, Biyografi ve Şehirler
  'İZMİR', 'DÜZCE', 'BALIKESİR', 'BURSA', 'ANKARA', 'POLONYA', 'TRABZON', 'İSTANBUL',
  'BİLKENT', 'ULUDAĞ', 'VETERİNERLİK', 'ÇERKES', 'HALİÇ', 'YÜKSEK LİSANS', 'TEZ',
  'GROTOWSKI', 'ENSTİTÜ', 'FİZİKSEL',

  // İlgi Alanları, Felsefe ve Anılar
  'ÇUVALİZM', 'DON KİŞOT', 'ÇUVAL', 'KEDİ', 'TEPSİ', 'ÇAY BARDAĞI', 
  'YABAN', 'ROMAN', 'DENEME', 'HASAN SABBAH', 'MİMAR SİNAN', 'MARATON', 
  'ÇILGINLIK', 'MÜCADELE', 'BEKLEMEK', 'SESSİZLİK',

  // Tiyatro & Sinema Terimleri
  'TİYATRO', 'SİNEMA', 'SAHNE', 'YÖNETMEN', 'OYUNCU', 'DRAMATURJİ', 'KÜRATÖR',
  'REJİ', 'DEKOR', 'KOSTÜM', 'EZBER', 'PROVA', 'PRÖMİYER', 'KULİS', 
  'TİRAT', 'MONOLOG', 'DİYALOG', 'SENARYO', 'KAMERA', 'KAYIT', 'PERDE', 
  'ALKIŞ', 'SEYİRCİ', 'JENERİK', 'SEZON', 'FİNAL', 'BÖLÜM', 'JÖN', 'ANTAGONİST',
  'KAMERA ARKASI', 'YAKIN ÇEKİM', 'MOTOR', 'SENARİST', 'KURGU', 'MONTAJ', 'SET', 
  'IŞIK', 'SES', 'DUBLÖR', 'DUBLAJ', 'ROL', 'HİKAYE', 'HAYAL',

  // Arşiv, Fan ve Teknik Terimler
  'KOÇARİ', 'ARŞİV', 'DİJİTAL', 'KANON', 'KESİT', 'MİMİK', 'REPLİK', 
  'ÇOK TATLISINIZ', 'FANART', 'VİDEO', 'KEYFRAME', 'MASKELEME', 
  'DUYGU', 'ANALİZ', 'TEPKİ', 'EDİT', 'AYTEK SAYAN OFFICIAL FC', 'GÖRSEL', 'MEDYA', 'AYBUR',

  // Yönetmenler & İlhamlar
  'LYNCH', 'NOLAN', 'TARANTİNO', 'FİNCHER', 'YILMAZ', 'TAYLAN', 'ÇAĞRI VİLA', 'İLHAM',

  // Karakter Özellikleri 
  'SADAKAT', 'İHANET', 'İNTİKAM', 'GİZEM', 'KARANLIK', 'AYDINLIK', 'SUİKAST',
  'ADALET', 'KUMPAS', 'SORGULAMA', 'KİMLİK', 'HAFIZA', 'RESTORASYON', 'ŞİFRE',
  'İSTİHBARAT', 'BELGE', 'DÖKÜMAN', 'AJAN', 'OPERASYON', 'GÜVEN', 'YALAN', 
  'GERÇEK', 'DOĞRU', 'YANLIŞ', 'MİZAÇ', 'BİLGE', 'DEVLET', 'VATAN', 'GÖREV', 
  'SİLAH', 'POLİSİYE', 'DRAM', 'KOMEDİ', 'TRAJEDİ', 'MİZAH', 'GÜLÜMSEME', 
  'ÖFKE', 'HÜZÜN', 'ŞAŞKINLIK', 'TEBESSÜM', 'BAKIŞ', 'GÖZLER', 'DURUŞ', 'JEST', 
  'TAVIR', 'DOBRA', 'PATAVATSIZ', 'SOĞUKKANLI', 'HIRSLI', 'TEMKİNLİ', 'CESUR', 'KORKUSUZ'
];

const ALPHABET = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split('');

const WIN_QUOTES = [
  "suikastten şüpheleniyorum",
  "hadi la ordan",
  "ama bezdum ya valla bezdum hakikaten bezdum",
  "ouy sen hareketlere bak bide kalktı boyle dimdik",
  "ha bu kızın kafası zehir zehir",
  "afferun la saa yani öyle böyle değil şov yapaysun"
];

const LOSE_QUOTES = [
  "neyse ilk benden duy saa da geçmiş olsun",
  "bu mu la senin reisliğin",
  "o neydu oyle he ya ne alakaydı",
  "kendimle yarışayrum",
  "ula kendi kendime rakip oldum",
  "ama bu benim hayalimdeki manzara",
  "ouy benum şerifum vallahi gurur duyayrum ha seninle"
];

function Hangman() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [endQuote, setEndQuote] = useState('');
  const maxMistakes = 6;

  const isGameOver = mistakes >= maxMistakes;
  const isGameWon = word && word.split('').every(letter => letter === ' ' || guessedLetters.includes(letter));

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setMistakes(0);
    setEndQuote('');
  };

  // useCallback ile sarmaladık ki klavye event listener'ı güncel state'i yakalayabilsin
  const handleGuess = useCallback((letter) => {
    if (guessedLetters.includes(letter) || isGameOver || isGameWon) return;

    const newGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(newGuessedLetters);
    
    let newMistakes = mistakes;
    if (!word.includes(letter)) {
      newMistakes += 1;
      setMistakes(newMistakes);
    }

    const isNowLost = newMistakes >= maxMistakes;
    const isNowWon = word && word.split('').every(char => char === ' ' || newGuessedLetters.includes(char));

    if (isNowLost) {
      setEndQuote(LOSE_QUOTES[Math.floor(Math.random() * LOSE_QUOTES.length)]);
    } else if (isNowWon) {
      setEndQuote(WIN_QUOTES[Math.floor(Math.random() * WIN_QUOTES.length)]);
    }
  }, [guessedLetters, isGameOver, isGameWon, mistakes, word]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLocaleUpperCase('tr-TR');
      if (ALPHABET.includes(key)) {
        handleGuess(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGuess]);

  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr">
      <div className="container">
        
        <div className="section-header-editorial">
          <span className="archive-badge">// İNTERAKTİF ARŞİV PROTOKOLÜ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>ADAM ASMACA</h1>
          <p className="editorial-subtitle">Aytek Şayan arşivinin derinliklerindeki kelimeleri tahmin edin. Dikkatli olun, Şerif hatalı harfleri affetmez.</p>
        </div>

        <div className="game-container">
          <div className="hangman-status">
            <h3>SİSTEM GÜVENLİĞİ: {maxMistakes - mistakes} HATA PAYI KALDI</h3>
            <div className="mistake-bar">
              <div className="mistake-fill" style={{ width: `${(mistakes / maxMistakes) * 100}%`, backgroundColor: mistakes > 4 ? 'rgba(200, 50, 50, 0.8)' : 'var(--accent-dark)' }}></div>
            </div>
          </div>

          <div className="word-display" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {word.split(' ').map((wordPart, wordIndex) => (
              <div key={wordIndex} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'nowrap' }}>
                {wordPart.split('').map((letter, letterIndex) => (
                  <span key={letterIndex} className="word-letter">
                    {guessedLetters.includes(letter) || isGameOver ? letter : ''}
                  </span>
                ))}
              </div>
            ))}
          </div>

          {isGameOver && (
            <div className="game-message error" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '1.5rem', backgroundColor: 'rgba(200, 50, 50, 0.1)', border: '1px solid rgba(200, 50, 50, 0.3)', borderRadius: '8px' }}>
              <strong style={{ color: 'rgba(200, 50, 50, 0.9)' }}>ARŞİVE ERİŞİM REDDEDİLDİ! KELİME: {word}</strong>
              <span style={{ fontStyle: 'italic', fontSize: '1rem', opacity: 0.9, fontFamily: 'var(--font-heading)' }}>
                "{endQuote}" <br/><span style={{ fontSize: '0.8rem', opacity: 0.7, fontStyle: 'normal' }}>— Şerif Furtuna</span>
              </span>
            </div>
          )}

          {isGameWon && (
            <div className="game-message success" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: '1.5rem', backgroundColor: 'rgba(84, 107, 65, 0.1)', border: '1px solid var(--accent-dark)', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--accent-dark)' }}>ŞİFRE ÇÖZÜLDÜ! ARŞİV ERİŞİMİ ONAYLANDI.</strong>
              <span style={{ fontStyle: 'italic', fontSize: '1rem', opacity: 0.9, fontFamily: 'var(--font-heading)' }}>
                "{endQuote}" <br/><span style={{ fontSize: '0.8rem', opacity: 0.7, fontStyle: 'normal' }}>— Şerif Furtuna</span>
              </span>
            </div>
          )}

          <div className="keyboard">
            {ALPHABET.map(letter => (
              <button
                key={letter}
                className={`key-btn ${guessedLetters.includes(letter) ? (word.includes(letter) ? 'correct' : 'wrong') : ''}`}
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter) || isGameOver || isGameWon}
              >
                {letter}
              </button>
            ))}
          </div>

          {(isGameOver || isGameWon) && (
            <button className="editorial-link-btn-anchor reset-btn" onClick={startNewGame} style={{ marginTop: '2rem' }}>
              YENİ KELİME ÜRET ↗
            </button>
          )}
        </div>

      </div>
    </div>
  );
}

export default Hangman;