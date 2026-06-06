import React from 'react';

const theaterList = [
  { 
    id: 1, 
    year: "Şu An Sahnede", 
    title: "ÜÇ KISA", 
    role: "PROJE TASARIM", 
    meta: "Kısalar Festivali & DasDas Sahne // Performans // 60 dk. // Sahnede", 
    summary: "Kısalar Festivali, 20 dakikanın altında üreten tüm performansçıları görünür kılmayı, yeni şeyler deneme cesaretini ve yaratma hevesini taşıyan sanatçıları desteklemeyi amaçlayan bir üretim alanıdır. Festival, yalnızca sahne sunmakla kalmaz; aynı zamanda sanatçılara sınırları zorlayabilecekleri, yenilik peşinde koşabilecekleri kolektif bir çalışma iklimi açmayı hedefler. Bu yıl festivalden seçilen üç kısa oyun, tam da bu anlayışın somut bir çıktısı olarak, birlikte düşünme, üretme ve deneme süreçleriyle şekillenmiştir. Kısalar Festivali’nin üretim ruhundan doğan ÜÇ KISA, yirmi dakikanın altındaki performanslarla özgürlük fikrini sahneye taşıyor. Denemeye cesaret eden, sınırları zorlayan ve birlikte üretmenin gücüne inanan sanatçıların buluştuğu bu seçkide üç kısa oyun tek bir sese dönüşüyor. Kafes: Kendi isteğiyle kafese girmiş bir kuşun hikayesi… Kosmokrator: Bir adam, bir savunma, bir suç. “Kosmokrator” suç, güç ve manipülasyonun iç içe geçtiği bir oyun. İç Ses: Kusurlarıyla yüzleşerek bakış açısını dönüştürmeye çabalayan bir performansçı.", 
    link: "#", // Sahnede ama henüz link yok
    photos: [
      "/uckisa.jpeg", 
      "/uckisa2.jpeg",
      "/uckisa3.jpeg", 
    ]
  },
  { 
    id: 2, 
    year: "20 Eylül 2024", 
    title: "AYNA", 
    role: "OYUNCU", 
    meta: "İstanbul DasDas Sahne // Trajedi / Dram, Komedi // Sahnede", 
    summary: "Leyla ve Joel nikah törenlerinde sizleri yanlarında görmekten mutluluk duyacak. Günlük ve biraz şık kıyafetlerinizi giyebilirsiniz. Kapılar 20:30’da kapandıktan sonra Leyla ve Joel evlilik yeminlerini edecekler. Ve işaret gelir gelmez eğlence başlayacak. Dünyanın bir köşesindeki totaliter bir rejimde tüm sanat eserlerinin Kültür Bakanlığı tarafından onaylanması gerekmektedir. Bir tiyatro grubu kendi oyunlarını oynamak için kendilerine yeni bir yol bulurlar. AYNA, her şeyin değersizleştiği bir toplumda aşkın ve adaletin arandığı çok eğlenceli ve hiçbir şeyin göründüğü gibi olmadığı bir oyun.", 
    link: "https://www.dasdas.com.tr",
    photos: [
      "/ayna.jpeg", 
      "/ayna2.jpeg",
      "/ayna3.jpeg", 
      "/ayna4.jpeg",
      "/ayna5.jpeg" 
    ]
  },
  { 
    id: 3, 
    year: "23 Mart 2021", 
    title: "SANAT", 
    role: "OYUNCU", 
    meta: "Podacto // Komedi / Radyo Tiyatrosu // 85 dk. // Sona Erdi", 
    summary: "Yasmina Reza’nın kaleminden, Ali Yoğurtçuoğlu, Aytek Şayan ve Fatih Artman’ın sesinden “Sanat”, üç arkadaşın bir tablo üzerinden arkadaşlıklarını masaya yatırmalarını ele alıyor. Serge bir gün beyaz üzerinde beyaz çizgiler olan bir tabloya iki yüz bin frank verir. Bunu duyan arkadaşı Marc buna çok sinirlenir. Ardından arkadaşları Yvan ile akşam yemeği için buluştuklarında işin rengi değişmeye başlar. Konuşma öyle bir hal alır ki tablo artık bir sanat eseri değil üç arkadaşın birbirlerini gerçekte nasıl gördüklerine dair bir düelloya dönüşür. Serge sonunda Marc’a tabloya çizim yapması için bir kalem verir. Bu kalem arkadaşlıklarında bir şey değiştirecek midir yoksa insan ilişkilerinin doğası bu mudur? “Bak seni başı boş bıraktığımın bir ispatı daha... Günlük konuşmada bile birbirimizi anlamakta güçlük çekiyoruz.”",
    link: null,
    photos: [
      "/sanat.jpeg", 
      "/sanat2.jpeg"
    ]
  },
  { 
    id: 4, 
    year: "23 Kasım 2019", 
    title: "KALDIRIM SERÇESİ – EDITH PIAF", 
    role: "OYUNCU", 
    meta: "Altıdan Sonra Tiyatro / İstanbul Küçük Çiftlik Park // Trajedi / Dram // 2 Perde / 170 dk. // Sona Erdi", 
    summary: "Sadece sesiyle değil, hayata, müziğe ve aşka olan tutkusuyla da ölümsüzleşen Edith Piaf; 48 yıllık trajik hayatında dibi de gördü, zirveyi de. Kaldırımda doğmuş, yaşamı boyunca yoksulluk ve hastalıklarla boğuşmuş olsa da; hayatı müthiş bir tutku ve cesaretle kucaklayarak, giderek dünyayı sarsan bir efsaneye dönüştü. 1950’ler Fransa’sından 80’ler Türkiye’sine uzanan bu hayat yolu, Tülay Günal’ın etkileyici yorumuyla yeniden bizimle... Kaldırım Serçesi, eseri kaleme alan Başar Sabuncu’ya ve 1982’deki yorumuyla Edith Piaf ile özdeşleşen Gülriz Sururi’ye de bir saygı duruşu niteliğinde...",
    link: null,
    photos: [
      "/kaldirim.jpeg", 
      "/kaldirim2.jpeg", 
      "/kaldirim3.jpeg", 
      "/kaldirim4.jpeg"  
    ]
  },
  { 
    id: 5, 
    year: "21 Kasım 2018", 
    title: "SALTO", 
    role: "OYUNCU", 
    meta: "Teatr Andra / İstanbul Yüzüncü Yıl Sanat Merkezi // Trajedi / Dram // Tek Perde / 90 dk. // Sona Erdi", 
    summary: "Salto, dünyadan yalıtılmış, gerçek ile rüya arasında asılı kalmış uykulu bir kasabayı ziyaret eden bir yabancının, Kowalski-Malinowski’nin hikayesidir. Kowalski-Malinowski, kasaba insanlarına hem geliş nedenleri hem de kendi karakteri hakkında çelişkili bilgiler verecektir. Kimilerine, kendisini öldürmeye çalışan insanlardan kaçtığını, kimilerine de bir peygamber olduğunu söyler. Arketiplere dayalı karakterlerin her biri bambaşka bir tavrı temsil eder. Kowalski-Malinowski’nin kasabadakiler ile sürdürdüğü bu oyunun altında onları kazanmanın ötesinde bir şey yatmaktadır. Onlara bir aynaya bakıyorlarmışçasına hakiki yüzlerini gösteren bir palyaçoya dönüşen Kowalski-Malinowski, söylediği her yalanın arkasından gerçeği de ortaya koymakta gecikmez. Sonunda kasabadakilere kendilerini hakikatte oldukları gibi gösterecek Salto dansını öğretir. Gizemli bir Polonya kinayesi olan Salto, güçlü teatral etkisi ile kesin bir gerçekliğe dayanmayan, insanın kendisine bakışının, burayı ve şimdiyi görmesinin, hayat ile olduğu kadar dünyayla, başkalarıyla olduğu kadar kendisiyle, tanrının yanı sıra korkuyla ve sevgiyle oynadığı oyunları anlamanın sayısız ve sonsuz yolları olduğunu gördüğümüz Kafkaesk bir anlatıdır. Biz ölene dek belki de gerçek olan tek dansı yaparız: Salto.",
    link: null,
    photos: [
      "/salto.jpeg", 
      "/salto2.jpeg", 
      "/salto3.jpeg", 
      "/salto4.jpeg",
      "/salto5.jpeg"  
    ]
  },
  { 
    id: 6, 
    year: "8 Ekim 2016", 
    title: "AŞK APTALI", 
    role: "EDDİE", 
    meta: "Ankara Tatbikat Sahnesi // Trajedi / Dram // Sona Erdi", 
    summary: "May Mojave Çölün’de bir motelde saklanmaktadır. 15 yıldır kesintilerle devam eden yıkıntılı bir ilişkiye sahip olduğu Eddie onu oradan götürmek için yanına gelir. Bu çarpık ilişkiye May’in yeni sevgilisi Martin ve ikisi için kilit karakter olan ihtiyar adam da dahil olur. Yılların hesaplaşması böylelikle başlar.",
    link: null,
    photos: [
      "/ask.jpeg", 
      "/ask2.jpeg", 
      "/ask3.jpeg", 
      "/ask4.jpeg",
      "/ask5.jpeg"  
    ]
  },
  { 
    id: 7, 
    year: "27 Ocak 2015", 
    title: "WOYZECK MASALI", 
    role: "OYUNCU", 
    meta: "Ankara Tatbikat Sahnesi // Müzikal / Kabare // Tek Perde / 90 dk. // Sona Erdi", 
    summary: "Yoksul bir asker olan Woyzeck'in toplum tarafından sömürülmesini, aşağılanmasını ve giderek ruhsal çöküşe sürüklenmesini anlatır. Maddi sıkıntılar nedeniyle hem subaylarının baskısına boyun eğmek zorunda kalan hem de bilimsel deneylerde kullanılan Woyzeck, sevgilisi Marie'nin kendisini aldattığını öğrenince psikolojik olarak daha da sarsılır. Oyun, bireyin yoksulluk, sınıf ayrımı, otorite baskısı ve toplumsal adaletsizlik karşısındaki çaresizliğini işler. Modern tiyatronun öncü eserlerinden sayılan metin, insanın çevresel koşullar tarafından nasıl şekillendirildiğini ve toplumsal baskıların trajik sonuçlarını güçlü bir şekilde ortaya koyar. İnsan nedir? Biraz toprak, biraz toz, biraz et, biraz kan mı? İnsanı insan yapan nedir? Georg Büchner, dünya tiyatro literatürünün en önemli oyunlarından biri olan Woyzeck’te insan olmak olgusunu; erdem, ahlâk ve iyilik kavramları üzerinden sorguluyor. Her zaman zorunlu ve haklı görülen savaşta; yoksulluk, sınıf farklılıkları, toplum baskısı içinde, insan daha fazla uçuruma sürüklenmeden insan olabilmeyi ve insan kalabilmeyi ne kadar başarır? Gerçekliğin saptığı böyle kaypak bir dünyada insan ne içindir?",
    link: "https://youtu.be/-MEJWxsuE8c?si=_rU1kUYEHvRa9Cym",
    photos: [
      "/w.jpeg"
    ]
  },
  { 
    id: 8, 
    year: "1 Mayıs 2014", 
    title: "MEZARSIZ ÖLÜLER", 
    role: "HENRİ", 
    meta: "Ankara Tatbikat Sahnesi // Trajedi / Dram // Tek Perde / 80 dk. // Sona Erdi", 
    summary: "Mezarsız Ölüler, işgal altındaki bir ülkede yakalanan direnişçilerin sorgu ve işkence karşısındaki tutumlarını anlatır. Eserde, tutsakların hem fiziksel acıyla hem de korku, suçluluk, ihanet ve ölüm düşüncesiyle mücadeleleri işlenir. Jean-Paul Sartre, karakterler üzerinden insanın özgürlük, sorumluluk ve varoluş karşısındaki seçimlerini sorgular. Oyun, savaşın yalnızca bedenleri değil, insanların ahlaki değerlerini ve psikolojilerini de nasıl yıprattığını gösterirken, ölümün kaçınılmazlığı karşısında insan onurunun ne anlama geldiği sorusuna odaklanır. Sartre “İnsan kendi kendinin yaratısıdır, kendini gerçekleştirdiği ölçüde var olur, yani eylemlerinden oluşur, hayatının ta kendisidir” der. “İnsan özgürdür, insan özgürlüktür”. Dolayısıyla temel sorun şudur: Bu özgürlüğümüzü nasıl kullanacağız?",
    link: null,
    photos: [
      "/m.jpeg"
    ]
  }
];

function Theater() {
  return (
    <div className="press-editorial-wrapper animate-fade" lang="tr">
      <div className="container">
        
        {/* SAYFA BAŞLIĞI */}
        <div className="section-header-editorial">
          <span className="archive-badge">// SANAT & KARİYER SİCİLİ</span>
          <h1 className="editorial-title" style={{ textTransform: 'none' }}>TİYATRO ENVANTERİ</h1>
          <p className="editorial-subtitle">2014 Bilkent mezuniyetinden bugüne aktif sahne performansları, oyun özetleri ve sahne kareleri.</p>
        </div>

        {/* DİNAMİK LİSTE */}
        <div className="inventory-list-full">
          
          {theaterList.map((play) => (
            <div className="record-card" key={play.id}>
              
              <div className="record-year">{play.year}</div>
              
              <div className="record-details">
                <h4 className="record-title" style={{ textTransform: 'none' }}>{play.title}</h4>
                <span className="record-role" style={{ textTransform: 'none' }}>{play.role}</span>
                <span className="record-meta" style={{ textTransform: 'none' }}>{play.meta}</span>
                
                {play.photos && play.photos.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
                    
                    <img 
                      src={play.photos[0]} 
                      alt={`${play.title} Ana Sahne`} 
                      loading="lazy"
                      style={{ 
                        width: '100%', 
                        aspectRatio: '16/9', 
                        objectFit: 'cover', 
                        objectPosition: 'top', 
                        borderRadius: '8px',
                        border: '1px solid rgba(84, 107, 65, 0.2)'
                      }} 
                    />

                    {play.photos.length > 1 && (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem' }}>
                        {play.photos.slice(1).map((photoUrl, index) => (
                          <img 
                            key={index} 
                            src={photoUrl} 
                            alt={`${play.title} Sahne Detay ${index + 1}`} 
                            loading="lazy"
                            style={{ 
                              width: '100%', 
                              aspectRatio: '16/9', 
                              objectFit: 'cover', 
                              objectPosition: 'top', 
                              borderRadius: '6px',
                              border: '1px solid rgba(84, 107, 65, 0.2)',
                              opacity: 0.9,
                              transition: '0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.opacity = '1'}
                            onMouseOut={(e) => e.target.style.opacity = '0.9'}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="record-media">
                    <span>[ {play.title} SAHNE FOTOĞRAFI EKLENECEK ]</span>
                  </div>
                )}
                {/* --------------------------------- */}
                
                <p className="record-summary">
                  <strong>OYUN ÖZETİ:</strong> {play.summary}
                </p>
                
                {/* --- LİNK VE BUTON MANTIĞI --- */}
                {play.link && play.link !== "#" ? (
                  /* Geçerli bir link varsa aktif buton */
                  <a href={play.link} target="_blank" rel="noreferrer" className="record-action-link" style={{ textTransform: 'none', display: 'inline-block', marginTop: '1rem' }}>
                    TANITIM / BİLET LİNKİ ↗
                  </a>
                ) : play.meta.includes("Sahnede") ? (
                  /* Oyun "Sahnede" yazıyor ama linki yoksa pasif buton */
                  <span className="record-action-link" style={{ textTransform: 'none', opacity: 0.5, cursor: 'not-allowed', display: 'inline-block', borderStyle: 'dashed', marginTop: '1rem' }}>
                    BİLETLER YAKINDA / TANITIM BEKLENİYOR
                  </span>
                ) : null}
                
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Theater;