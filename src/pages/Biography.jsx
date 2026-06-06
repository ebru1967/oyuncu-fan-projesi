import { useState } from 'react';

function Biography() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="bio-editorial-wrapper animate-fade">
      <section className="bio-editorial-section">
        <div className="bio-grid-container">
          
          <div className="bio-left-content">
            <span className="archive-badge">// ENVANTER CİLT NO: #089</span>
            <h1 className="bio-main-title">SANATÇI VESİKASI</h1>
            
            <div className="bio-index-nav">
              <button 
                className={activePage === 1 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(1)}
              >
                01 / KÖKLER & İZMİR HAFIZASI
              </button>
              <button 
                className={activePage === 2 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(2)}
              >
                02 / BÜYÜK KARAR & ANKARA MİLADI
              </button>
              <button 
                className={activePage === 3 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(3)}
              >
                03 / İSTANBUL AKADEMİSİ & SAHNE
              </button>
              <button 
                className={activePage === 4 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(4)}
              >
                04 / ŞERİF ANATOMİSİ & KAMERA ARKASI
              </button>
              <button 
                className={activePage === 5 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(5)}
              >
                05 / ALTERNATİF KANON & KISALAR
              </button>
              <button 
                className={activePage === 6 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(6)}
              >
                06 / YAŞAM DİSİPLİNİ & "ÇUVAL"
              </button>
              <button 
                className={activePage === 7 ? 'index-link active' : 'index-link'} 
                onClick={() => setActivePage(7)}
              >
                07 / FİZİKSEL TİYATRO & SALTO ARAŞTIRMASI
              </button>
            </div>

            {/* Dinamik Değişen Cilt İçerikleri */}
            <div className="bio-editorial-body">
              
              {/* CİLT 1: KÖKLER & İZMİR HAFIZASI */}
              {activePage === 1 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Meyve ağaçlarının altında biriken hikayeler..."</p>
                  <p className="editorial-bio-paragraph">
                    Aytek Şayan, yüksek bir yaşam enerjisiyle İzmir’de gözlerini açtı. Anne tarafı Düzceli, baba tarafı ise Balıkesirli olan Şayan, Çerkes kökenli kalabalık bir aile kültürünün coşkusu içinde büyüdü. Çocukluk yazları Düzce’de, anneannesinin o kocaman bahçeli evinde, altı kuzeniyle birlikte meyve ağaçlarının altında top oynayarak ve hayatı keşfederek geçti.
                  </p>
                  <p className="editorial-bio-paragraph">
                    İlkokul eğitimini 9 Eylül İlköğretim Okulu'nda tamamlamıştır. Ardından girdiği Anadolu Liseleri sınavında büyük bir başarı göstererek Yunus Emre Anadolu Lisesi'ni kazanmış ve burada tam 7 yıl boyunca Almanca dilinde yoğun bir eğitim almıştır. Edebiyata ve anlatıcılığa olan ilgisi lisedeki edebiyat öğretmeninin güçlü motivasyonuyla uyandı. Odasında kendi kendine şiirler ve öyküler karalayan Şayan, henüz 13 yaşındayken Yakup Kadri Karaosmanoğlu’nun ‘Yaban’ romanından ilham alarak 60 sayfalık amatör bir roman denemesine imza attı.
                  </p>
                </div>
              )}

              {/* CİLT 2: BÜYÜK KARAR & ANKARA MİLADI */}
              {activePage === 2 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Veterinerlikten Bilkent koridorlarına..."</p>
                  <p className="editorial-bio-paragraph">
                    Üniversite eğitimine ilk olarak Veterinerlik Fakültesi'nde başlamıştır. Bursa'ya adım atar atmaz okulun tiyatro topluluğuna kaydoldu ve zamanının büyük kısmını sahnede geçirmeye başladı. Beş yıllık zorlu okulun dördüncü sınıfına geldiğinde, mezuniyete sadece tek bir sene kalmışken, hayatının en radikal kararlarından birini verdi ve veterinerlik fakültesini tamamen bıraktı.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Daha sonra rotasını Ankara'ya çevirerek Bilkent Üniversitesi Tiyatro bölümüne geçiş yapmış ve 2014 yılında bu köklü okuldan başarıyla mezun olmuştur. Akademik disiplini sahne tutkusuyla birleştirdiği Ankara yıllarında toplamda 9 senelik muazzam bir birikim dönemi geçirdi.
                  </p>
                </div>
              )}

              {/* CİLT 3: İSTANBUL AKADEMİSİ & SAHNE */}
              {activePage === 3 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Tezli Yüksek Lisans ve profesyonel envanter..."</p>
                  <p className="editorial-bio-paragraph">
                    Bilkent mezuniyetinin ardından rotasını sanatın kalbi olan İstanbul'a kırdı. Oyunculuk teorisine ve metodolojisine daha derinlemesine hakim olmak adına akademik çalışmalarına devam etti. 2021 yılında Haliç Üniversitesi Lisansüstü Eğitim Enstitüsü Tiyatro Anasanat Dalı'nda yüksek lisans eğitimini başarıyla tamamlamıştır. 
                  </p>
                  <p className="editorial-bio-paragraph">
                    Eğitim hayatı süresinde yurtiçinde ve yurtdışında, oyunculuk alanında farklı tekniklerin öğretildiği birçok seminere katılmıştır. Bu akademik sürecin pratiğini ise sahnelerde sürdürmüş; Devlet Tiyatroları ve özel tiyatrolarda çeşitli oyunlarda rol alarak oyunculuk enstrümanını sürekli diri ve güncel tutmuştur.
                  </p>
                </div>
              )}

              {/* CİLT 4: ŞERİF ANATOMİSİ & KAMERA ARKASI */}
              {activePage === 4 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"İlk set gününden, ekrandaki karanlığa..."</p>
                  <p className="editorial-bio-paragraph">
                    Televizyon dünyasına ilk profesyonel adımını "46 Yok Olan" dizisiyle atan Şayan; kariyeri boyunca "İsimsizler" (Bozan Erol), "Diriliş: Ertuğrul", "Uyanış: Büyük Selçuklu", "Barbaroslar: Akdeniz’in Kılıcı", "Kuzgun" ve "Bana Karanlığını Anlat" (İmam) gibi birbirinden tamamen farklı türlerde ve dönemlerde yer alarak oyunculuk yelpazesinin genişliğini kanıtladı. Özellikle tarihi ve katmanlı karakterler inşa etmedeki ustalığıyla dikkat çekti.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Ancak televizyon dünyasında popülaritesini perçinleyen ve kariyerinin en büyük kitle kırılımını yaratan iş, "Taşacak Bu Deniz" dizisindeki antagonist "Şerif" karakteri oldu. Şayan, imza attığı bu patlamayla sektördeki klasik "jön" ezberlerini ve biçimsel kalıpları tamamen yıktı. Sokakta insanlardan "Dün akşam sana ekranda küfrettim, şimdi karşımdasın" reaksiyonları alsa da, Şerif’in kötülüğünü karikatürize etmeden, arkasındaki sosyolojik sebepleri araştırarak canlandırdığı için izleyicinin derin bir saygısını kazandı.
                  </p>
                </div>
              )}

              {/* CİLT 5: ALTERNATİF KANON & KISALAR */}
              {activePage === 5 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Başka bir dünya mümkün..."</p>
                  <p className="editorial-bio-paragraph">
                    Aytek Şayan, oyunculuk sektöründe karşılaştığı en büyük haksızlığın "kimsenin gençlerin ne yapmak istediğini merak etmemesi" olduğunu açık yüreklilikle savunuyor. Sadece olana uyumlanmaya çalışılan bu kısır sektörel düzeni kırmak adına, alternatif ve kolektif sahne hareketlerine çok büyük bir ağırlık veriyor.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Bu vizyon doğrultusunda, temelleri ilk olarak 2017 yılında Mert Fırat ve Didem Yalçın önderliğinde atılan "Kısalar" kolektifinin çatısı altında arkadaşlarıyla birlikte lider roller üstleniyor. DasDas’ın büyük mekan sponsorluğu desteğiyle hayata geçirilen Kısalar Festivali’nde, sahne sanatları alanında üretilmiş ve 20 dakikanın altında kalan avangart performansları destekliyor. Yüzlerce başvuru arasından onlarca bağımsız işe görünürlük kazandırarak, tiyatronun sahnede başlayıp biten bir şey olmaktan çıkıp, birlikte çoğalan interaktif bir deneyime dönüşmesi için üretmeye devam ediyor.
                  </p>
                </div>
              )}

              {/* CİLT 6: YAŞAM DİSİPLİNİ & "ÇUVAL" */}
              {activePage === 6 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Çuvalizm ve sürdürülebilir denge..."</p>
                  <p className="editorial-bio-paragraph">
                    Yoğun set temposunun getirdiği zihinsel ve fiziksel ağırlığı idare edebilmek adına sporu ve doğru beslenmeyi katı bir yasaklar listesi olarak değil, sürdürülebilir bir yaşam biçimi olarak görüyor. Kardiyovasküler dayanıklılığını maksimuma çıkaran HIIT antrenmanları ve setlerdeki o tehlikeli catering masalarına karşı kurduğu protein ağırlıklı beslenme disiplini onun en büyük kilit noktaları. Ayrıca sabahları "Don Kişot", öğlenleri "Rick and Morty", geceleri ise "Inception" dünyasında yaşamayı hayal eden çok katmanlı bir zihin dünyasına sahip.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Yoğun bir set gününün ardından eve döndüğünde günün yorgunluğunu attığı ilk sığınak ise kendisi gibi bir oyuncu olan kedisi "Çuval". Hayatında o kadar çok "-izm" olmasından sıkılan aktör, kedisinden ilham alarak kendi hayat felsefesine "Çuvalizm" adını vermiştir. 
                  </p>
                  <p className="editorial-bio-paragraph">
                    Kendine dair en büyük özeleştirisi ise eyleme geçme konusundadır. Düşünceler içinde kaybolup zaman kaybetmek yerine, eleştirileri bir kenara bırakıp "sadece yapmaya başlamak" gerektiğine inanır. Hayata karşı duruşunu net tutan aktörün genç yeteneklere en samimi tavsiyesi ise çok net: Trendlerin sizi yönetmesine izin vermeyin, içeride net olun ve mutlaka hayatınızda bir kez Don Kişot’u okuyun.
                  </p>
                </div>
              )}

              {/* CİLT 7: FİZİKSEL TİYATRO & SALTO ARAŞTIRMASI */}
              {activePage === 7 && (
                <div className="editorial-page-content animate-fade">
                  <p className="bio-handwritten">"Bedensel ifadenin eşzamanlı eyleme dönüşümü..."</p>
                  <p className="editorial-bio-paragraph">
                    Klasik ve metne dayalı tiyatronun sınırlarını aşan Aytek Şayan, Eugenio Barba'nın "organik dramaturji" ve Jerzy Grotowski'nin "fiziksel tiyatro" prensipleri üzerine pratik ve akademik çalışmalar yürütmektedir. Bu yaklaşımın en somut örneklerinden biri, 2018-2019 yılları arasında Teatr Andra ekibi tarafından gerçekleştirilen 'Salto' adlı fiziksel tiyatro araştırmasıdır.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Polonyalı yönetmen Tadeusz Konwicki'nin 1965 yapımı filminin tiyatro sahnesine uyarlandığı bu özel proje, tam bir yıla yayılan devasa bir yaratım sürecine dayanmaktadır. Provaların önemli bir bölümü Grotowski Enstitüsü'nün Wroclaw'daki Na Grobli yerleşkesinde, dış dünyadan izole bir kamp şeklinde gerçekleştirilmiştir. Türkiye'ye taşınan provalar sırasıyla Kadıköy Theatron, Mimar Sinan Üniversitesi Bomonti yerleşkesi ve Devlet Tiyatroları Üsküdar Tekel sahnesinde tamamlanmıştır.
                  </p>
                  <p className="editorial-bio-paragraph">
                    Aytek Şayan, çok uluslu bu projede sadece sahne üzerinde performans sergileyen bir aktör olmakla kalmamış; prova sürecini adım adım takip ederek, yönetmenin dramaturji çalışmalarını akademik bir vizyonla teze dönüştürmüştür.
                  </p>
                </div>
              )}

            </div>
          </div>
          
         {/* SAĞ ALAN: PORTRE ÇERÇEVESİ VE DÖKÜMAN KÜNYESİ */}
          <div className="bio-right-sidebar">
            
            {/* Dış çerçeve kalıyor, içini dikey hiza (column) yapıyoruz */}
            <div className="sidebar-canvas-frame" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Resim İçin Çerçeve Alanı */}
              <div style={{ flex: 1, width: '100%', overflow: 'hidden', marginBottom: '1rem', border: '1px solid rgba(84,107,65,0.1)' }}>
                <img 
                  src="/portreicin.jpeg" 
                  alt="Aytek Şayan Portre"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    display: 'block' 
                  }} 
                />
              </div>

              <span className="canvas-tag" style={{ color: 'var(--accent-dark)', opacity: 0.8, textAlign: 'left', width: '100%' }}>
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