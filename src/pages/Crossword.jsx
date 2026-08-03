import React, { useState, useRef, useEffect, useCallback } from 'react';

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
  "1-1": 1, 
  "1-4": 2, 
  "1-8": 3, 
  "1-11": 4, 
  "2-0": 5, 
  "3-8": 6, 
  "4-8": 7, 
  "5-0": 8, 
  "5-3": 9, 
  "5-14": 10, 
  "6-8": 11, 
  "6-9": 12, 
  "8-10": 13, 
  "10-0": 14, 
  "11-5": 15 
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

const MAX_HINTS = 3;

function Crossword() {
  const [inputs, setInputs] = useState({});
  const [hintsUsed, setHintsUsed] = useState(0);
  const inputRefs = useRef({});

  const focusCell = (r, c) => {
    inputRefs.current[`${r}-${c}`]?.focus();
  };

  const handleInputChange = (r, c, value) => {
    const char = value.toLocaleUpperCase('tr-TR').replace(/[^A-ZÇĞİÖŞÜI]/g, '').slice(-1);
    setInputs((prev) => ({ ...prev, [`${r}-${c}`]: char }));

    if (char) {
      if (GRID[r][c + 1] && GRID[r][c + 1] !== '.') {
        focusCell(r, c + 1);
      } else if (GRID[r + 1] && GRID[r + 1][c] !== '.') {
        focusCell(r + 1, c);
      }
    }
  };

  const handleKeyDown = (e, r, c) => {
    if (e.key === 'Backspace' && !inputs[`${r}-${c}`]) {
      // Hücre zaten boşsa bir önceki hücreye geç VE onu da temizle
      // (standart bulmaca davranışı: geri tuşu bir önceki harfi siler)
      if (GRID[r][c - 1] && GRID[r][c - 1] !== '.') {
        setInputs((prev) => ({ ...prev, [`${r}-${c - 1}`]: '' }));
        focusCell(r, c - 1);
      } else if (GRID[r - 1] && GRID[r - 1][c] !== '.') {
        setInputs((prev) => ({ ...prev, [`${r - 1}-${c}`]: '' }));
        focusCell(r - 1, c);
      }
    } else if (e.key === 'ArrowRight' && GRID[r][c + 1] && GRID[r][c + 1] !== '.') {
      focusCell(r, c + 1);
    } else if (e.key === 'ArrowLeft' && GRID[r][c - 1] && GRID[r][c - 1] !== '.') {
      focusCell(r, c - 1);
    } else if (e.key === 'ArrowDown' && GRID[r + 1] && GRID[r + 1][c] !== '.') {
      focusCell(r + 1, c);
    } else if (e.key === 'ArrowUp' && GRID[r - 1] && GRID[r - 1][c] !== '.') {
      focusCell(r - 1, c);
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
  const progressPercent = totalCells > 0 ? Math.round((correctCells / totalCells) * 100) : 0;
  const hintsLeft = MAX_HINTS - hintsUsed;
  const hintsExhausted = hintsLeft <= 0;

  const focusFirstPlayableCell = useCallback(() => {
    for (let r = 0; r < GRID.length; r++) {
      for (let c = 0; c < GRID[r].length; c++) {
        if (GRID[r][c] !== '.') {
          focusCell(r, c);
          return;
        }
      }
    }
  }, []);

  useEffect(() => {
    focusFirstPlayableCell();
  }, [focusFirstPlayableCell]);

  const handleClear = () => {
    setInputs({});
    setHintsUsed(0);
    focusFirstPlayableCell();
  };

  const handleHint = () => {
    if (hintsExhausted) return;
    const emptyOrWrongCells = [];
    GRID.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell !== '.' && inputs[`${r}-${c}`] !== cell) {
          emptyOrWrongCells.push([r, c]);
        }
      });
    });
    if (emptyOrWrongCells.length === 0) return;
    const [r, c] = emptyOrWrongCells[Math.floor(Math.random() * emptyOrWrongCells.length)];
    setInputs((prev) => ({ ...prev, [`${r}-${c}`]: GRID[r][c] }));
    setHintsUsed((prev) => prev + 1);
    focusCell(r, c);
  };

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

        .cw-progress-row {
          display: flex; justify-content: space-between; align-items: center;
          font-family: var(--font-heading); font-size: 0.85rem; color: var(--accent-dark);
          max-width: 500px; margin: 0 auto 0.5rem;
        }
        .cw-progress-track {
          width: 100%; height: 5px; background: rgba(84, 107, 65, 0.15); border-radius: 3px;
          overflow: hidden; max-width: 500px; margin: 0 auto 1.5rem;
        }
        .cw-progress-fill { height: 100%; background: var(--accent-dark); transition: width 0.3s ease; }

        .hint-btn {
          margin-top: 0.8rem; width: 100%; text-align: center; background: transparent;
          border: 1px dashed rgba(84, 107, 65, 0.5); color: var(--accent-dark);
          padding: 0.6rem; border-radius: 4px; cursor: pointer; font-family: var(--font-body);
          font-size: 0.85rem; transition: all 0.2s ease;
        }
        .hint-btn:hover { background: rgba(84, 107, 65, 0.08); }
        .hint-btn:disabled {
          border-style: solid; border-color: rgba(84, 107, 65, 0.2); color: rgba(84, 107, 65, 0.4);
          cursor: not-allowed; background: transparent;
        }

        .hint-dots { display: inline-flex; gap: 4px; margin-left: 0.5rem; vertical-align: middle; }
        .hint-dot {
          width: 7px; height: 7px; border-radius: 50%; background: var(--accent-dark);
          transition: background 0.2s, opacity 0.2s;
        }
        .hint-dot.spent { background: transparent; border: 1px solid rgba(84, 107, 65, 0.4); }
        
        .badge-reward-container {
          background: #2ecc71;
          color: white;
          text-align: center;
          padding: 2.5rem;
          border-radius: 12px;
          margin-bottom: 3rem;
          font-family: var(--font-heading);
          box-shadow: 0 15px 35px rgba(46, 204, 113, 0.2);
          border: 3px solid rgba(255, 255, 255, 0.3);
          animation: slideDown 0.6s ease-out;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <div className="container">
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '0.5rem' }}>// ZİHİNSEL ANTRENMAN</span>
          <h1 className="editorial-title" style={{ textTransform: 'none', margin: '0.5rem 0' }}>KARE BULMACA</h1>
          <p className="editorial-subtitle">İpuçlarını takip ederek karakterlerin arşivdeki kimliklerini ortaya çıkarın.</p>
        </div>

        {isWon && (
          <div className="badge-reward-container">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎖️</div>
            <h2 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: 'white' }}>TEBRİKLER! BULMACA ÇÖZÜLDÜ!</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>
              Arşivin bu en zorlu görevini başarıyla tamamladın. "Crossword Master" dijital rozetin kazanıldı!
            </p>

            <a
              href="/bulmaca-rozet.svg"
              download="Aytek_Sayan_Crossword_Master.svg"
              style={{
                display: 'inline-block',
                backgroundColor: 'white',
                color: '#2ecc71',
                padding: '1rem 2.5rem',
                fontFamily: 'var(--font-heading)',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '50px',
                fontSize: '1rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              ROZETİ CİHAZINA İNDİR ↓
            </a>
          </div>
        )}

        {!isWon && (
          <>
            <div className="cw-progress-row">
              <span>İLERLEME</span>
              <span>{correctCells} / {totalCells} DOĞRU</span>
            </div>
            <div className="cw-progress-track" aria-hidden="true">
              <div className="cw-progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{ flex: '1 1 500px', overflowX: 'auto', display: 'flex', justifyContent: 'center', padding: '0.5rem 0' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(17, 35px)`,
                gap: '1px',
                background: 'var(--accent-dark)',
                border: '2px solid var(--accent-dark)',
                padding: '2px',
              }}
            >
              {GRID.map((row, r) =>
                row.map((cell, c) => {
                  const isPlayable = cell !== '.';
                  const num = NUMBERS[`${r}-${c}`];
                  const isCellCorrect = inputs[`${r}-${c}`] === cell;

                  return (
                    <div
                      key={`${r}-${c}`}
                      className={`cw-cell ${isWon ? 'won' : ''}`}
                      style={{
                        width: '35px',
                        height: '35px',
                        background: isPlayable ? 'var(--bg-main)' : 'transparent',
                        position: 'relative',
                      }}
                    >
                      {isPlayable && (
                        <>
                          {num && (
                            <span
                              style={{
                                position: 'absolute',
                                top: '2px',
                                left: '2px',
                                fontSize: '10px',
                                fontFamily: 'var(--font-heading)',
                                color: 'rgba(84, 107, 65, 0.7)',
                                zIndex: 2,
                                pointerEvents: 'none',
                              }}
                            >
                              {num}
                            </span>
                          )}
                          <input
                            type="text"
                            ref={(el) => (inputRefs.current[`${r}-${c}`] = el)}
                            value={inputs[`${r}-${c}`] || ''}
                            onChange={(e) => handleInputChange(r, c, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, r, c)}
                            className={`cw-input ${isCellCorrect ? 'correct-input' : ''}`}
                            disabled={isWon}
                            maxLength={1}
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck={false}
                            aria-label={num ? `${num} numaralı ipucunun hücresi` : 'Bulmaca hücresi'}
                          />
                        </>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="clues-container" style={{ flex: '1 1 350px' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3>SOLDAN SAĞA</h3>
              <ul className="clue-list">
                {ACROSS_CLUES.map((clue) => (
                  <li key={`across-${clue.num}`}>
                    <span className="clue-number">{clue.num}</span> {clue.text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3>YUKARIDAN AŞAĞIYA</h3>
              <ul className="clue-list">
                {DOWN_CLUES.map((clue) => (
                  <li key={`down-${clue.num}`}>
                    <span className="clue-number">{clue.num}</span> {clue.text}
                  </li>
                ))}
              </ul>
            </div>

            {!isWon && (
              <>
                <button
                  onClick={handleClear}
                  className="editorial-link-btn-anchor"
                  style={{ marginTop: '2.5rem', width: '100%', textAlign: 'center', background: 'transparent', border: '1px dashed var(--accent-dark)' }}
                >
                  BULMACAYI TEMİZLE ⟲
                </button>
                <button onClick={handleHint} className="hint-btn" disabled={hintsExhausted}>
                  💡 {hintsExhausted ? 'İPUÇLARI TÜKENDİ' : `BİR HARF GÖSTER (${hintsLeft} HAK KALDI)`}
                  <span className="hint-dots" aria-hidden="true">
                    {Array.from({ length: MAX_HINTS }).map((_, i) => (
                      <span key={i} className={`hint-dot ${i < hintsUsed ? 'spent' : ''}`} />
                    ))}
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crossword;
