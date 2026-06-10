import React, { useState, useRef } from 'react';

const GRID = [
  ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'R', '.', '.', 'S', 'E', 'R', 'H', 'A', 'T', '.', 'Ş', 'E', 'R', 'İ', 'F', '.'],
  ['G', 'Ü', 'R', 'K', 'A', 'N', '.', '.', 'L', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', 'S', '.', '.', 'R', '.', '.', '.', 'İ', 'M', 'A', 'M', '.', '.', '.', '.', '.'],
  ['.', 'T', '.', '.', 'P', '.', '.', '.', 'B', 'E', 'H', 'İ', 'Ç', '.', '.', '.', '.'],
  ['M', 'E', 'R', 'T', '.', '.', '.', '.', 'İ', '.', '.', '.', '.', '.', 'F', '.', '.'],
  ['.', 'M', '.', 'U', '.', '.', '.', '.', 'L', 'A', 'İ', 'S', '.', '.', 'I', '.', '.'],
  ['.', '.', '.', 'R', '.', '.', '.', '.', 'G', 'T', '.', '.', '.', '.', 'R', '.', '.'],
  ['.', '.', '.', 'A', '.', '.', '.', '.', 'İ', 'T', 'K', 'Ü', 'R', 'Ş', 'A', 'T', '.'],
  ['.', '.', '.', 'H', '.', '.', '.', '.', 'N', 'İ', '.', '.', '.', '.', 'T', '.', '.'],
  ['B', 'O', 'Z', 'A', 'N', '.', '.', '.', '.', 'L', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', 'N', '.', 'Ş', 'A', 'H', 'B', 'A', 'Z', '.', '.', '.', '.', '.', '.']
];

const NUMBERS = {
  "1-1": 1,  // RÜSTEM
  "1-4": 2,  // SERHAT (Sağa) & SARP (Aşağı)
  "1-8": 3,  // ALİ BİLGİN
  "1-11": 4, // ŞERİF
  "2-0": 5,  // GÜRKAN
  "3-8": 6,  // İMAM
  "4-8": 7,  // BEHİÇ
  "5-0": 8,  // MERT
  "5-3": 9,  // TURAHAN
  "5-14": 10, // FIRAT
  "6-8": 11, // LAİS
  "6-9": 12, // ATTİLA
  "8-10": 13, // KÜRŞAT
  "10-0": 14, // BOZAN
  "11-5": 15  // ŞAHBAZ
};

const ACROSS_CLUES = [
  { num: 2, text: "Kararlı, sorgulayıcı ve olayların peşini bırakmayan biri." },
  { num: 4, text: "Patavatsızlığı, komik tavırları ve dobra kişiliğiyle tanınır." },
  { num: 5, text: "Adalet duygusu güçlü, dikkatli ve görevine bağlı biri." },
  { num: 6, text: "Sözleriyle insanların düşünmesine ve kendini sorgulamasına neden olur." },
  { num: 7, text: "Sorumluluk sahibi, vatanına bağlı bir devlet adamı." },
  { num: 8, text: "Meraklı, cesur ve kendini beklenmedik olayların içinde bulan genç biri." },
  { num: 11, text: "Kurnazlığı ve çıkarlarını koruma çabasıyla öne çıkar." },
  { num: 13, text: "Sert görünümünün altında farklı duygular taşıyan bir karakter." },
  { num: 14, text: "Soğukkanlı davranabilen, gerektiğinde sert kararlar alabilen biri." },
  { num: 15, text: "Cesareti yüksek, mücadeleden kaçmayan sert mizaçlı bir karakter." }
];

const DOWN_CLUES = [
  { num: 1, text: "Hırslı, temkinli ve güç dengelerini iyi takip eden biri." },
  { num: 2, text: "Duygularını saklamayı tercih eden, içine kapanık ve gizemli." },
  { num: 3, text: "Sadakati ve mücadeleci yapısıyla dikkat çeker." },
  { num: 9, text: "Sakin, bilge ve manevi yönü güçlü biri." },
  { num: 10, text: "İç dünyasında taşıdığı yüklerle mücadele eden bir karakter." },
  { num: 12, text: "Kararlarıyla kalabalıkları peşinden sürükleyebilen biri." }
];

function Crossword() {
  const [inputs, setInputs] = useState({});
  // YENİ EKLENTİ: Inputları hafızada tutmak için useRef kullanıyoruz. 
  // Böylece otomatik odaklanma (focus) yapabileceğiz.
  const inputRefs = useRef({}); 

  const handleInputChange = (r, c, value) => {
    const char = value.toLocaleUpperCase('tr-TR').replace(/[^A-ZÇĞİÖŞÜI]/g, '').slice(-1);
    setInputs(prev => ({ ...prev, [`${r}-${c}`]: char }));

    // YENİ EKLENTİ: Harf girildiğinde eğer sağında veya altında boş bir kutu varsa otomatik olarak oraya geç
    if (char) {
      if (GRID[r][c + 1] && GRID[r][c + 1] !== '.') {
        // Sağa geç
        inputRefs.current[`${r}-${c + 1}`]?.focus();
      } else if (GRID[r + 1] && GRID[r + 1][c] !== '.') {
        // Sağa gidemiyorsa aşağı geç
        inputRefs.current[`${r + 1}-${c}`]?.focus();
      }
    }
  };

  // YENİ EKLENTİ: Yön tuşları ve silme (Backspace) desteği
  const handleKeyDown = (e, r, c) => {
    if (e.key === 'Backspace' && !inputs[`${r}-${c}`]) {
      // Kutucuk zaten boşken silmeye basılırsa bir önceki kutuya (sola veya yukarı) geri dön
      if (GRID[r][c - 1] && GRID[r][c - 1] !== '.') {
        inputRefs.current[`${r}-${c - 1}`]?.focus();
      } else if (GRID[r - 1] && GRID[r - 1][c] !== '.') {
        inputRefs.current[`${r - 1}-${c}`]?.focus();
      }
    } else if (e.key === 'ArrowRight' && GRID[r][c + 1] && GRID[r][c + 1] !== '.') {
      inputRefs.current[`${r}-${c + 1}`]?.focus();
    } else if (e.key === 'ArrowLeft' && GRID[r][c - 1] && GRID[r][c - 1] !== '.') {
      inputRefs.current[`${r}-${c - 1}`]?.focus();
    } else if (e.key === 'ArrowDown' && GRID[r + 1] && GRID[r + 1][c] !== '.') {
      inputRefs.current[`${r + 1}-${c}`]?.focus();
    } else if (e.key === 'ArrowUp' && GRID[r - 1] && GRID[r - 1][c] !== '.') {
      inputRefs.current[`${r - 1}-${c}`]?.focus();
    }
  };

  let totalCells = 0;
  let correctCells = 0;
  
  GRID.forEach((row, r) => {
    row.forEach((cell, c) => {
      if (cell !== '.') {
        totalCells++;
        if (inputs[`${r}-${c}`] === cell) {
          correctCells++;
        }
      }
    });
  });

  const isWon = totalCells > 0 && totalCells === correctCells;

  return (
    <div className="press-editorial-wrapper animate-fade" style={{ padding: '0.5rem 0 4rem 0', minHeight: '80vh' }}>
      
      <style>{`
        .cw-input {
          width: 100%; height: 100%; border: none; background: transparent; text-align: center;
          font-family: var(--font-heading); font-size: 1.2rem; font-weight: bold; outline: none;
          color: var(--accent-dark); transition: background 0.2s;
        }
        .cw-input:focus { background: rgba(84, 107, 65, 0.15); box-shadow: inset 0 0 10px rgba(84, 107, 65, 0.3); }
        .cw-cell.won .cw-input { color: #2ecc71; }
        .correct-input { background: #d4edda !important; color: #155724 !important; }
        .clues-container h3 {
          font-family: var(--font-heading); color: var(--accent-dark);
          border-bottom: 2px solid rgba(84, 107, 65, 0.2); padding-bottom: 0.5rem; margin-bottom: 1rem;
        }
        .clue-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.8rem; }
        .clue-list li { font-size: 0.9rem; line-height: 1.4; opacity: 0.9; }
        .clue-number {
          display: inline-block; background: var(--accent-dark); color: var(--bg-main);
          width: 22px; height: 22px; text-align: center; line-height: 22px; border-radius: 50%;
          font-weight: bold; font-size: 0.75rem; margin-right: 0.5rem;
        }
      `}</style>

      <div className="container">
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>// ZİHİNSEL ANTRENMAN</span>
          <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>KARE BULMACA</h1>
          <p className="editorial-subtitle">İpuçlarını takip ederek karakterlerin arşivdeki kimliklerini ortaya çıkarın.</p>
        </div>

        {isWon && (
          <div style={{ background: '#2ecc71', color: 'white', textAlign: 'center', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', fontFamily: 'var(--font-heading)', letterSpacing: '1px', animation: 'fadeIn 0.5s' }}>
            🎉 TEBRİKLER! TÜM GİZLİ KİMLİKLERİ BAŞARIYLA ÇÖZDÜNÜZ!
          </div>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '1 1 500px', overflowX: 'auto', display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
            <div style={{ 
              display: 'grid', gridTemplateColumns: `repeat(17, 35px)`, gap: '1px', 
              background: 'var(--accent-dark)', border: '2px solid var(--accent-dark)', padding: '2px' 
            }}>
              {GRID.map((row, r) => row.map((cell, c) => {
                const isPlayable = cell !== '.';
                const num = NUMBERS[`${r}-${c}`];
                const isCellCorrect = inputs[`${r}-${c}`] === cell;
                
                return (
                  <div key={`${r}-${c}`} className={`cw-cell ${isWon ? 'won' : ''}`} style={{
                    width: '35px', height: '35px',
                    background: isPlayable ? 'var(--bg-main)' : 'transparent',
                    position: 'relative'
                  }}>
                    {isPlayable && (
                      <>
                        {num && (
                          <span style={{ position: 'absolute', top: '2px', left: '2px', fontSize: '10px', fontFamily: 'var(--font-heading)', color: 'rgba(84, 107, 65, 0.7)', zIndex: 2, pointerEvents: 'none' }}>
                            {num}
                          </span>
                        )}
                        <input
                          type="text"
                          ref={el => inputRefs.current[`${r}-${c}`] = el} // Referansı hafızaya kaydettik
                          value={inputs[`${r}-${c}`] || ''}
                          onChange={(e) => handleInputChange(r, c, e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, r, c)} // Yön tuşları desteği
                          className={`cw-input ${isCellCorrect ? 'correct-input' : ''}`}
                          disabled={isWon}
                        />
                      </>
                    )}
                  </div>
                );
              }))}
            </div>
          </div>

          <div className="clues-container" style={{ flex: '1 1 350px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3>SOLDAN SAĞA</h3>
              <ul className="clue-list">
                {ACROSS_CLUES.map(clue => (
                  <li key={`across-${clue.num}`}><span className="clue-number">{clue.num}</span> {clue.text}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>YUKARIDAN AŞAĞIYA</h3>
              <ul className="clue-list">
                {DOWN_CLUES.map(clue => (
                  <li key={`down-${clue.num}`}><span className="clue-number">{clue.num}</span> {clue.text}</li>
                ))}
              </ul>
            </div>
            
            {!isWon && (
              <button onClick={() => setInputs({})} className="editorial-link-btn-anchor" style={{ marginTop: '2.5rem', width: '100%', textAlign: 'center', background: 'transparent', border: '1px dashed var(--accent-dark)' }}>
                BULMACAYI TEMİZLE ⟲
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crossword;