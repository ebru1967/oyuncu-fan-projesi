import { useState, useRef, useCallback } from 'react';

const CHAPTERS = [
  {
    id: 1,
    navLabel: '01 / KÖKLER & İZMİR HAFIZASI',
    quote: '"Meyve ağaçlarının altında biriken hikayeler..."',
    paragraphs: [
      `Aytek Şayan, yüksek bir yaşam enerjisiyle İzmir'de gözlerini açtı. Anne tarafı Düzceli, baba tarafı ise Balıkesirli olan Şayan, Çerkes kökenli kalabalık bir aile kültürünün coşkusu içinde büyüdü. Çocukluk yazları Düzce'de, anneannesinin o kocaman bahçeli evinde, altı kuzeniyle birlikte meyve ağaçlarının altında top oynayarak ve hayatı keşfederek geçti.`,
      `İlkokul eğitimini 9 Eylül İlköğretim Okulu'nda tamamlamıştır. Ardından girdiği Anadolu Liseleri sınavında büyük bir başarı göstererek Yunus Emre Anadolu Lisesi'ni kazanmış ve burada tam 7 yıl boyunca Almanca dilinde yoğun bir eğitim almıştır. Edebiyata ve anlatıcılığa olan ilgisi lisedeki edebiyat öğretmeninin güçlü motivasyonuyla uyandı. Odasında kendi kendine şiirler ve öyküler karalayan Şayan, henüz 13 yaşındayken Yakup Kadri Karaosmanoğlu'nun 'Yaban' romanından ilham alarak 60 sayfalık amatör bir roman denemesine imza attı.`,
    ],
  },
  {
    id: 2,
    navLabel: '02 / BÜYÜK KARAR & ANKARA MİLADI',
    quote: '"Veterinerlikten Bilkent koridorlarına..."',
    paragraphs: [
      `Üniversite eğitimine ilk olarak Veterinerlik Fakültesi'nde başlamıştır. Bursa'ya adım atar atmaz okulun tiyatro topluluğuna kaydoldu ve zamanının büyük kısmını sahnede geçirmeye başladı. Beş yıllık zorlu okulun dördüncü sınıfına geldiğinde, mezuniyete sadece tek bir sene kalmışken, hayatının en radikal kararlarından birini verdi ve veterinerlik fakültesini tamamen bıraktı.`,
      `Daha sonra rotasını Ankara'ya çevirerek Bilkent Üniversitesi Tiyatro bölümüne geçiş yapmış ve 2014 yılında bu köklü okuldan başarıyla mezun olmuştur. Akademik disiplini sahne tutkusuyla birleştirdiği Ankara yıllarında toplamda 9 senelik muazzam bir birikim dönemi geçirdi.`,
    ],
  },
  {
    id: 3,
    navLabel: '03 / İSTANBUL AKADEMİSİ & SAHNE',
    quote: '"Tezli Yüksek Lisans ve profesyonel envanter..."',
    paragraphs: [
      `Bilkent mezuniyetinin ardından rotasını sanatın kalbi olan İstanbul'a kırdı. Oyunculuk teorisine ve metodolojisine daha derinlemesine hakim olmak adına akademik çalışmalarına devam etti. 2021 yılında Haliç Üniversitesi Lisansüstü Eğitim Enstitüsü Tiyatro Anasanat Dalı'nda yüksek lisans eğitimini başarıyla tamamlamıştır.`,
      `Eğitim hayatı süresinde yurtiçinde ve yurtdışında, oyunculuk alanında farklı tekniklerin öğretildiği birçok seminere katılmıştır. Bu akademik sürecin pratiğini ise sahnelerde sürdürmüş; Devlet Tiyatroları ve özel tiyatrolarda çeşitli oyunlarda rol alarak oyunculuk enstrümanını sürekli diri ve güncel tutmuştur.`,
    ],
  },
  {
    id: 4,
    navLabel: '04 / ŞERİF ANATOMİSİ & KAMERA ARKASI',
    quote: '"İlk set gününden, ekrandaki karanlığa..."',
    paragraphs: [
      `Televizyon dünyasına ilk profesyonel adımını "46 Yok Olan" dizisiyle atan Şayan; kariyeri boyunca "İsimsizler" (Bozan Erol), "Diriliş: Ertuğrul", "Uyanış: Büyük Selçuklu", "Barbaroslar: Akdeniz'in Kılıcı", "Kuzgun" ve "Bana Karanlığını Anlat" (İmam) gibi birbirinden tamamen farklı türlerde ve dönemlerde yer alarak oyunculuk yelpazesinin genişliğini kanıtladı. Özellikle tarihi ve katmanlı karakterler inşa etmedeki ustalığıyla dikkat çekti.`,
      `Ancak televizyon dünyasında popülaritesini perçinleyen ve kariyerinin en büyük kitle kırılımını yaratan iş, "Taşacak Bu Deniz" dizisindeki antagonist "Şerif" karakteri oldu. Şayan, imza attığı bu patlamayla sektördeki klasik "jön" ezberlerini ve biçimsel kalıpları tamamen yıktı. Sokakta insanlardan "Dün akşam sana ekranda küfrettim, şimdi karşımdasın" reaksiyonları alsa da, Şerif'in kötülüğünü karikatürize etmeden, arkasındaki sosyolojik sebepleri araştırarak canlandırdığı için izleyicinin derin bir saygısını kazandı.`,
    ],
  },
  {
    id: 5,
    navLabel: '05 / ALTERNATİF KANON & KISALAR',
    quote: '"Başka bir dünya mümkün..."',
    paragraphs: [
      `Aytek Şayan, oyunculuk sektöründe karşılaştığı en büyük haksızlığın "kimsenin gençlerin ne yapmak istediğini merak etmemesi" olduğunu açık yüreklilikle savunuyor. Sadece olana uyumlanmaya çalışılan bu kısır sektörel düzeni kırmak adına, alternatif ve kolektif sahne hareketlerine çok büyük bir ağırlık veriyor.`,
      `Bu vizyon doğrultusunda, temelleri ilk olarak 2017 yılında Mert Fırat ve Didem Yalçın önderliğinde atılan "Kısalar" kolektifinin çatısı altında arkadaşlarıyla birlikte lider roller üstleniyor. DasDas'ın büyük mekan sponsorluğu desteğiyle hayata geçirilen Kısalar Festivali'nde, sahne sanatları alanında üretilmiş ve 20 dakikanın altında kalan avangart performansları destekliyor. Yüzlerce başvuru arasından onlarca bağımsız işe görünürlük kazandırarak, tiyatronun sahnede başlayıp biten bir şey olmaktan çıkıp, birlikte çoğalan interaktif bir deneyime dönüşmesi için üretmeye devam ediyor.`,
    ],
  },
  {
    id: 6,
    navLabel: '06 / YAŞAM DİSİPLİNİ & "ÇUVAL"',
    quote: '"Çuvalizm ve sürdürülebilir denge..."',
    paragraphs: [
      `Yoğun set temposunun getirdiği zihinsel ve fiziksel ağırlığı idare edebilmek adına sporu ve doğru beslenmeyi katı bir yasaklar listesi olarak değil, sürdürülebilir bir yaşam biçimi olarak görüyor. Kardiyovasküler dayanıklılığını maksimuma çıkaran HIIT antrenmanları ve setlerdeki o tehlikeli catering masalarına karşı kurduğu protein ağırlıklı beslenme disiplini onun en büyük kilit noktaları. Ayrıca sabahları "Don Kişot", öğlenleri "Rick and Morty", geceleri ise "Inception" dünyasında yaşamayı hayal eden çok katmanlı bir zihin dünyasına sahip.`,
      `Yoğun bir set gününün ardından eve döndüğünde günün yorgunluğunu attığı ilk sığınak ise kendisi gibi bir oyuncu olan kedisi "Çuval". Hayatında o kadar çok "-izm" olmasından sıkılan aktör, kedisinden ilham alarak kendi hayat felsefesine "Çuvalizm" adını vermiştir.`,
      `Kendine dair en büyük özeleştirisi ise eyleme geçme konusundadır. Düşünceler içinde kaybolup zaman kaybetmek yerine, eleştirileri bir kenara bırakıp "sadece yapmaya başlamak" gerektiğine inanır. Hayata karşı duruşunu net tutan aktörün genç yeteneklere en samimi tavsiyesi ise çok net: Trendlerin sizi yönetmesine izin vermeyin, içeride net olun ve mutlaka hayatınızda bir kez Don Kişot'u okuyun.`,
    ],
  },
  {
    id: 7,
    navLabel: '07 / FİZİKSEL TİYATRO & SALTO ARAŞTIRMASI',
    quote: '"Bedensel ifadenin eşzamanlı eyleme dönüşümü..."',
    paragraphs: [
      `Klasik ve metne dayalı tiyatronun sınırlarını aşan Aytek Şayan, Eugenio Barba'nın "organik dramaturji" ve Jerzy Grotowski'nin "fiziksel tiyatro" prensipleri üzerine pratik ve akademik çalışmalar yürütmektedir. Bu yaklaşımın en somut örneklerinden biri, 2018-2019 yılları arasında Teatr Andra ekibi tarafından gerçekleştirilen 'Salto' adlı fiziksel tiyatro araştırmasıdır.`,
      `Polonyalı yönetmen Tadeusz Konwicki'nin 1965 yapımı filminin tiyatro sahnesine uyarlandığı bu özel proje, tam bir yıla yayılan devasa bir yaratım sürecine dayanmaktadır. Provaların önemli bir bölümü Grotowski Enstitüsü'nün Wroclaw'daki Na Grobli yerleşkesinde, dış dünyadan izole bir kamp şeklinde gerçekleştirilmiştir. Türkiye'ye taşınan provalar sırasıyla Kadıköy Theatron, Mimar Sinan Üniversitesi Bomonti yerleşkesi ve Devlet Tiyatroları Üsküdar Tekel sahnesinde tamamlanmıştır.`,
      `Aytek Şayan, çok uluslu bu projede sadece sahne üzerinde performans sergileyen bir aktör olmakla kalmamış; prova sürecini adım adım takip ederek, yönetmenin dramaturji çalışmalarını akademik bir vizyonla teze dönüştürmüştür.`,
    ],
  },
];

// Ortalama Türkçe okuma hızı ~200 kelime/dk üzerinden yaklaşık okuma süresi
function estimateReadingMinutes(paragraphs) {
  const wordCount = paragraphs.join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.round(wordCount / 200));
}

function Biography() {
  const [activePage, setActivePage] = useState(1);
  const navContainerRef = useRef(null);

  const activeIndex = CHAPTERS.findIndex((c) => c.id === activePage);
  const activeChapter = CHAPTERS[activeIndex];

  const goToChapter = useCallback((id) => {
    setActivePage(id);
  }, []);

  const goRelative = useCallback(
    (delta) => {
      const nextIndex = (activeIndex + delta + CHAPTERS.length) % CHAPTERS.length;
      setActivePage(CHAPTERS[nextIndex].id);
      // Yeni aktif sekmeye odak taşı, klavye ile gezinmeyi sürdürülebilir kılar
      requestAnimationFrame(() => {
        const btn = navContainerRef.current?.querySelector(`[data-chapter-id="${CHAPTERS[nextIndex].id}"]`);
        btn?.focus();
      });
    },
    [activeIndex]
  );

  const handleNavKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goRelative(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goRelative(-1);
    }
  };

  return (
    <div className="bio-editorial-wrapper animate-fade">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=Lora:ital,wght@0,400;0,600;1,400&family=Space+Mono:wght@700&display=swap');

        .editorial-bio-paragraph {
          font-family: 'Lora', serif !important;
          font-size: 1.05rem !important;
          line-height: 1.9 !important;
          color: var(--text-main);
          opacity: 0.9;
        }

        .bio-handwritten {
          font-family: 'Caveat', cursive !important;
          font-size: 1.8rem !important;
          color: var(--accent-dark) !important;
          transform: rotate(-2deg);
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .archive-badge, .spec-label, .canvas-tag {
          font-family: 'Space Mono', monospace !important;
          letter-spacing: 1px !important;
        }

        .bio-progress-track {
          width: 100%;
          height: 3px;
          background: rgba(84, 107, 65, 0.15);
          border-radius: 2px;
          margin: 1rem 0 0.5rem;
          overflow: hidden;
        }

        .bio-progress-fill {
          height: 100%;
          background: var(--accent-dark);
          transition: width 0.35s ease;
        }

        .bio-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 1px;
          opacity: 0.6;
          margin-bottom: 1rem;
        }

        .bio-chapter-nav-buttons {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(84, 107, 65, 0.15);
        }

        .bio-chapter-nav-btn {
          background: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 1px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
          text-align: left;
          flex: 1;
        }

        .bio-chapter-nav-btn.next { text-align: right; }

        .bio-chapter-nav-btn:hover,
        .bio-chapter-nav-btn:focus-visible {
          background: var(--accent-dark);
          color: #fff;
          outline: none;
        }

        .bio-chapter-nav-btn .nav-btn-label {
          display: block;
          opacity: 0.6;
          font-size: 0.6rem;
          margin-bottom: 2px;
        }

        .index-link:focus-visible {
          outline: 2px solid var(--accent-dark);
          outline-offset: 2px;
        }
      `}</style>
      <section className="bio-editorial-section">
        <div className="bio-grid-container">
          <div className="bio-left-content">
            <span className="archive-badge">// ENVANTER CİLT NO: #089</span>
            <h1 className="bio-main-title">SANATÇI VESİKASI</h1>

            <div
              className="bio-index-nav"
              ref={navContainerRef}
              role="tablist"
              aria-label="Biyografi ciltleri"
              onKeyDown={handleNavKeyDown}
            >
              {CHAPTERS.map((chapter) => (
                <button
                  key={chapter.id}
                  data-chapter-id={chapter.id}
                  role="tab"
                  aria-selected={activePage === chapter.id}
                  className={activePage === chapter.id ? 'index-link active' : 'index-link'}
                  onClick={() => goToChapter(chapter.id)}
                >
                  {chapter.navLabel}
                </button>
              ))}
            </div>

            <div className="bio-editorial-body" style={{ width: '100%' }}>
              <div className="bio-progress-track" aria-hidden="true">
                <div
                  className="bio-progress-fill"
                  style={{ width: `${((activeIndex + 1) / CHAPTERS.length) * 100}%` }}
                />
              </div>
              <div className="bio-meta-row">
                <span>CİLT {activeIndex + 1} / {CHAPTERS.length}</span>
                <span>YAKLAŞIK {estimateReadingMinutes(activeChapter.paragraphs)} DK OKUMA</span>
              </div>

              <div className="editorial-page-content animate-fade" key={activeChapter.id}>
                <p className="bio-handwritten">{activeChapter.quote}</p>
                {activeChapter.paragraphs.map((paragraph, i) => (
                  <p className="editorial-bio-paragraph" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bio-chapter-nav-buttons">
                <button className="bio-chapter-nav-btn prev" onClick={() => goRelative(-1)}>
                  <span className="nav-btn-label">← ÖNCEKİ CİLT</span>
                  {CHAPTERS[(activeIndex - 1 + CHAPTERS.length) % CHAPTERS.length].navLabel}
                </button>
                <button className="bio-chapter-nav-btn next" onClick={() => goRelative(1)}>
                  <span className="nav-btn-label">SONRAKİ CİLT →</span>
                  {CHAPTERS[(activeIndex + 1) % CHAPTERS.length].navLabel}
                </button>
              </div>
            </div>
          </div>

          <div className="bio-right-sidebar">
            <div className="sidebar-canvas-frame" style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  flex: 1,
                  width: '100%',
                  overflow: 'hidden',
                  marginBottom: '1rem',
                  border: '1px solid rgba(84,107,65,0.1)',
                }}
              >
                <img
                  src="/portreicin.jpeg"
                  alt="Aytek Şayan Portre"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <span
                className="canvas-tag"
                style={{ color: 'var(--accent-dark)', opacity: 0.8, textAlign: 'left', width: '100%' }}
              >
                ARŞİV FOTOĞRAFI #089
              </span>
            </div>

            <div className="dossier-spec-box" style={{ marginTop: '1.5rem' }}>
              <div className="spec-row">
                <span className="spec-label">SİCİL ADI:</span>
                <span className="spec-value">AYTEK ŞAYAN</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">MEZUNİYET:</span>
                <span className="spec-value">BİLKENT ÜNİVERSİTESİ (2014)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">YÜKSEK LİSANS:</span>
                <span className="spec-value">HALİÇ ÜNİVERSİTESİ (2021)</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">VERİ KAYNAĞI:</span>
                <span className="spec-value">RESMİ BEYANAT & WS ARŞİVİ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Biography;
