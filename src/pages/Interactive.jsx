import React, { useState } from 'react';

function Interactive() {
  const quotes = [
    "ederuk bi tövbe anacum dertlenme",
    "he valla yüreğim sıkıştı",
    "naber kankaa",
    "ula ölmedi ki ne güzel kalktı gitti amerikalara -ha",
    "ne yarabbi",
    "ula ölmedi ki",
    "oha ne diyosun olaya bak",
    "shipledum sizi",
    "nee yiğenumla gelinumu almışlar geri de mi almayum",
    "en sevduğun kankan",
    "ama bezdum ya valla bezdum hakikaten bezdum",
    "seni sinsiii çavuş",
    "koçari sempatizanı furtunalılar",
    "ama boyle daha güzel oldu he saçu esme peri kızı gibi değil miydi düğünde",
    "he onuda ben ettum köyü ben zehirledum",
    "ne benim yüzünden ya ne sevcan uyku ilacını fazla koymuş o da mı benim suçum",
    "naber ula fadime",
    "en sevduğum yeğenum",
    "boşanmaya kalkmasan vurmazdımki",
    "hani şey diyorlardı ya neydi o empati",
    "adili vuracaktumm",
    "bismillahirrahmanirrahim",
    "sen bu ara bana çok yanlış yapaysun diyisun yanlış yapaysun",
    "nereye teslim edeyim kendimi",
    "yeni kankan hayırlı olsun",
    "sana da geçmiş olsun eski savcım",
    "hadi pasta ye",
    "iso kuru pastalar çok güzel he",
    "ben napayım nereye koyayım kendimi",
    "affettum sizi he hepinizi affettum valla affettum",
    "ama bu benim hayalimdeki manzara",
    "Allah Allah enteresan enteresan",
    "noldu ula fadime abinle mi kavga ettun, ne diyosun ya bayuldum bayuldum",
    "diyelim ki sen adil koçarisin kusura kalma",
    "ula harbilikte suç oldu he",
    "la bakma baa şöyle iştahımı kaçıraysun",
    "mutlu yıllar saaağa",
    "soğalasın kız hadi kapatum",
    "ana sen eleniyi mi kaçırdın sen neler edeysun oyle valla ben şok",
    "ula ne türkçe biliyosun ne çay demlemeyi biliyosun",
    "o geldiğinde de parti yaparuz",
    "kankamı kaybettuk",
    "ula çepçakusuu",
    "ergenler",
    "yok canum o kadarda değil hala ondan öğrenecek birkaç şeyumuz var",
    "sen ne biçim bi adamsın be",
    "hadi şimdi naş naş",
    "ahır mı burası",
    "ooohhoho sakin olun",
    "üçümüzde gebercez burda",
    "umrumda değil",
    "hadi durma vız gelir tırıs gider",
    "hayrola ahır mı burası",
    "topla ağzını",
    "yine gebertemedik şunları",
    "iftira, iftira atarsınız bana",
    "gelip gidip bana iftira atarsınız artık sizin yaptıklarınız yetti",
    "hayvan herifler",
    "kendimle yarışayrum",
    "afferun la saa yani öyle böyle değil şov yapaysun",
    "ula kendi kendime rakip oldum",
    "o yüzden söylemicem merak edin",
    "ouy benum şerifum vallahi gurur duyayrum ha seninle",
    "ha bu kızın kafası zehir zehir",
    "ne benim yüzümden ya ne",
    "sevcan ben yine bişey etmişum ne etmişum acaba",
    "ben çevreye verdiğim rahatsızlıktan dolayı çok özür dilerim",
    "ana o nerden bilecek ben bilmiyrum",
    "sesli düşüneyrum",
    "çok selam söyledi sağa",
    "ouy sen hareketlere bak bide kalktı boyle dimdik",
    "yuksek maas isteyn varsa gelsun benu bulsun",
    "hadi la ordan",
    "lan sen peygamber mi kesildin lan benim başıma",
    "ben de biraz malım",
    "nasıl diyodun sen ilahi adalet",
    "ben nasıl olayım ben yengecum ha boyle burda sırtımın bu tarafında bi ihanet acısı var ama neyse",
    "ya adam burda sıkıntıdan hamamböceği yarıştırıyor",
    "Allah'la kankasın ya",
    "Bi mesaj Allahım bu Serhat'ı çarp",
    "kuzenim yeni manikür yaptırdım gelmem imkan dahilinde değil",
    "Mevlamı arıyorum Alicemal sen",
    "sağda solda böyle konuşma manitamsın sanırlar he",
    "sen bugün yine ahirete havale işlerinle uğraşmışsın",
    "Allah aşkına başlama felsefeye",
    "maşallah bedensel bişey değil ruh sağlığıyla alakalı",
    "bi sal beni ya",
    "Allah aşkına onla mı konuştun bu mu yaptın anam mısın babam mısın bırak peşimi ya",
    "biraz para harcadum evet",
    "taş yağıcak başımıza taş",
    "he o sıfatundan bellu",
    "ilacını aldın mı sen",
    "hemen al götür haydi gitmiyoki ben napayum",
    "kafayı yiyecem kafayı yiyecem",
    "diyusun niçin",
    "ama bezdum ya valla bezdum hakikaten bezdum",
    "ayaklarumla",
    "he anacum içerdeydum",
    "o neydu oyle he ya ne alakaydı",
    "şş napaysun bide doktor olucaksın",
    "bebeğide sokağa atmadum oruç çöpe atmadum iyi bir aileye verdum",
    "paraya ihtiyacın olursa beni ara ben hallederum",
    "gittum adalete teslim oldum",
    "bence reislik öğren",
    "suikastten şüpheleniyorum",
    "furtunada seni bekliyordu",
    "ama sen de ne desem tehdid ne desem tehdid",
    "bende esmeyi eleniyle tehdit etmiş olabilirim ettum da ettum",
    "Rabbim o aklı sağa boşuna mı vermiş kullanda yengem",
    "benim arkamdan iş çevirmesen ben neden savcı hanımı işinden edeyim valla etmem",
    "bir musibet bin nasihatten daha iyi",
    "neyse ilk benden duy saa da geçmiş olsun",
    "benimde kumda oynayacak halim yok",
    "çıkalum bakalum sahalara",
    "dünyanın çivisini çıkarayrum",
    "sen naptın gittun düşmanın yarasını sardın, aferun sana..",
    "bu mu la senin reisliğin",
    "ana başa taç imiş, her derde ilaç imiş demişler ne kadar doğru demişler. Eleni'yi benim için kaçırmak çok iyi fikirdi ana. Seni affettim.",
    "iyi ki doğdun eleniii",
    "amin... de",
    "ulan sen koymuşsun ya beni hapse seni sinsi çavuş seni",
    "ha sen bu iki balıkçıdan mı medet umdun oy kıyamam ben sağa",
    "iso kuru pasta taze bak rizeden geturttum",
    "doğum gününü kutlamadık diye de evi patlatman bilema ağırdı",
    "ha iyi fuşki yedun",
    "hani o bir daha göremeyeceğin oruç var ya...",
    "eleni bak beni yalancı çıkarttun al sağa oruç",
    "şeytan diyor ki bak burda şeytan ben olayrum",
    "kanka sen yaklaşmak yok konuşmak yok dedin ama hiç söz dinlemedim bak ben nereye geldim"
  ];

  const [currentQuote, setCurrentQuote] = useState(null);
  const [isBurst, setIsBurst] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  
  const [hits, setHits] = useState(0);

  const handlePinataHit = () => {
    if (isShaking || isBurst) return;
    
    setIsShaking(true);
    const newHits = hits + 1;
    setHits(newHits);
    
    setTimeout(() => {
      setIsShaking(false);
      
      if (newHits >= 3) {
        setIsBurst(true);
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
      }
    }, 400); 
  };

  const resetGame = () => {
    setIsBurst(false);
    setCurrentQuote(null);
    setHits(0);
  };

  const getPromptText = () => {
    if (hits === 0) return "tic tac";
    if (hits === 1) return "tic tac";
    if (hits === 2) return "tic tac";
    return "";
  };

  return (
    <div className="interactive-wrapper animate-fade" style={{ padding: '1rem 0 4rem 0', textAlign: 'center' }}>
      
      <style>
        {`
          @keyframes cinematicFloat {
            0% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 20px rgba(220, 204, 172, 0.4)); }
            50% { transform: translateY(-15px) scale(1.02); filter: drop-shadow(0 0 40px rgba(220, 204, 172, 0.8)); }
            100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 0 20px rgba(220, 204, 172, 0.4)); }
          }
          @keyframes intenseShake {
            0%, 100% { transform: translate(0, 0) rotate(0deg); filter: brightness(1); }
            10%, 30%, 50%, 70%, 90% { transform: translate(-4px, -4px) rotate(-15deg) scale(1.1); filter: brightness(1.5) drop-shadow(0 0 50px rgba(255,255,255,0.8)); }
            20%, 40%, 60%, 80% { transform: translate(4px, 4px) rotate(15deg) scale(1.1); filter: brightness(2) drop-shadow(0 0 50px rgba(255,255,255,1)); }
          }
          @keyframes cinematicReveal {
            0% { opacity: 0; transform: translateY(30px) scale(0.95); filter: blur(10px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
          }
          @keyframes ambientGlow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
          }
          
          .game-arena {
            background: var(--bg-card);
            border: 1px solid rgba(79, 119, 45, 0.2);
            box-shadow: 0 15px 40px rgba(84, 107, 65, 0.05);
            border-radius: 20px;
            padding: 6rem 2rem;
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            overflow: hidden;
          }
          
          .game-arena::before {
            content: '';
            position: absolute;
            top: -20%; left: -10%;
            width: 300px; height: 300px;
            background: radial-gradient(circle, rgba(150, 110, 70, 0.25) 0%, transparent 70%);
            border-radius: 50%;
            animation: ambientGlow 8s infinite alternate ease-in-out;
            pointer-events: none;
          }
          .game-arena::after {
            content: '';
            position: absolute;
            bottom: -20%; right: -10%;
            width: 400px; height: 400px;
            background: radial-gradient(circle, rgba(210, 180, 140, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            animation: ambientGlow 6s infinite alternate-reverse ease-in-out;
            pointer-events: none;
          }

          .mystic-pinata {
            font-size: 8rem;
            cursor: pointer;
            position: relative;
            z-index: 10;
            display: inline-block;
            user-select: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .mystic-pinata:hover:not(.is-shaking) {
            transform: scale(1.15) translateY(-5px);
          }
          .status-floating {
            animation: cinematicFloat 4s ease-in-out infinite;
          }
          .is-shaking {
            animation: intenseShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
          }

          .cinematic-quote-box {
            background: rgba(20, 25, 21, 0.6);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 3rem 4rem;
            position: relative;
            z-index: 10;
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
            animation: cinematicReveal 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }
          
          .cinematic-quote-box::before {
            content: '"';
            position: absolute;
            top: -20px;
            left: 20px;
            font-size: 6rem;
            color: rgba(220, 204, 172, 0.15);
            font-family: serif;
            line-height: 1;
          }

          .candy-decoration {
            font-size: 2rem;
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            opacity: 0.8;
          }

          .reset-btn {
            margin-top: 3rem;
            background: linear-gradient(90deg, rgba(84, 107, 65, 0.8) 0%, rgba(50, 70, 40, 0.8) 100%);
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0.8rem 2.5rem;
            font-size: 0.85rem;
            font-family: var(--font-heading);
            font-weight: 700;
            letter-spacing: 3px;
            cursor: pointer;
            border-radius: 30px;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          }
          .reset-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 25px rgba(84, 107, 65, 0.4);
            border-color: rgba(255,255,255,0.5);
          }
        `}
      </style>

      <div className="container">
        <div className="section-header-editorial" style={{ marginBottom: '4rem' }}>
          <span className="archive-badge">// KADERİNİ ÇEK</span>
          <h1 className="editorial-title">REPLİK PİNYATASI</h1>
          <p className="editorial-subtitle">İçindeki repliği düşürmek için pinyataya vur!</p>
        </div>

        <div className="game-arena">
          
          <div 
            onClick={handlePinataHit}
            className={`mystic-pinata ${isShaking ? 'is-shaking' : (isBurst ? '' : 'status-floating')}`}
            style={{ 
              marginBottom: isBurst ? '0' : '2rem',
              display: isBurst ? 'none' : 'inline-block',
              transform: !isShaking && !isBurst && hits > 0 ? `rotate(${hits * 10}deg) scale(0.95)` : 'none'
            }}
          >
            🪅
          </div>

          {/* DİNAMİK YÖNLENDİRME METNİ */}
          {!isBurst && !isShaking && (
            <p style={{ 
              fontFamily: 'var(--font-heading)', 
              color: hits > 0 ? 'var(--accent-dark)' : 'rgba(4, 4, 4, 0.4)', 
              fontSize: hits > 0 ? '1rem' : '0.8rem', 
              letterSpacing: '4px',
              marginTop: '1rem',
              position: 'relative',
              zIndex: 10,
              fontWeight: hits > 0 ? 'bold' : 'normal',
              transition: '0.3s'
            }}>
              {getPromptText()}
            </p>
          )}

          {isBurst && currentQuote && (
            <div style={{ perspective: '1000px' }}>
              <div className="cinematic-quote-box">
                <div className="candy-decoration">
                  <span>🍬</span>
                  <span>🍭</span>
                  <span>🍬</span>
                </div>

                <p style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '1.8rem', 
                  fontWeight: '600',
                  lineHeight: '1.5',
                  color: '#eaeaea',
                  margin: 0,
                  textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                  {currentQuote}
                </p>
                
                <button className="reset-btn" onClick={resetGame}>
                  YENİ PİNYATA AS 
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Interactive;