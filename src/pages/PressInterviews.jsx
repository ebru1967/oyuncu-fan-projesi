import React, { useState, useRef } from 'react';

function PressInterviews() {
  const [filter, setFilter] = useState('all'); 
  const [expandedId, setExpandedId] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'
  const cardRefs = useRef({});

  const interviewData = [
    {
      id: 24, 
      type: 'video',
      source: 'YOUTUBE // BLOOMBERG HT',
      date: '14 TEMMUZ 2026', 
      title: 'Aslı Şafak\'la İşin Aslı - Aytek Şayan',
      summary: 'Aytek Şayan, Aslı Şafak\'ın sunduğu "İşin Aslı" programında; çocukluğundan bugüne uzanan içsel yolculuğunu, tiyatro ve ekran oyunculuğundaki beden-zihin koordinasyonunu ve amatör ruhun Kısalar Festivali ile nasıl harmanlandığını samimi detaylarıyla anlatıyor.',
      videoUrl: 'https://youtu.be/sG7ZLQ6PBs8'
    },
    {
      id: 23, 
      type: 'video',
      source: 'YOUTUBE // BACKSTAGE WHISPERS',
      date: '30 HAZİRAN 2026', 
      title: 'Aytek Şayan ile Kısalar Festivali Üzerine',
      summary: 'Backstage Whispers kanalına konuk olan Aytek Şayan, Kısalar Festivali\'nin perde arkasını, bağımsız tiyatro ekiplerinin üretim süreçlerini ve kısa oyun formatının tiyatro dünyasındaki tazeleyici etkisini izleyicilerle paylaşıyor.',
      videoUrl: 'https://youtu.be/BrMAowJZ0oU'
    },
    {
      id: 22,
      type: 'written',
      source: 'SAHNERTOZ // CEREN ERTÖZ',
      date: '22 HAZİRAN 2026',
      title: 'Kısalar Festivali Özel: "Bu Festivaller Şehre ve Herkese Aittir"',
      summary: "Ceren Ertöz'e konuşan Aytek Şayan; Kısalar Festivali'nin temalarını, seçim kriterlerini ve festivalin Türkiye tiyatrosundaki geleceğine dair hedeflerini paylaşıyor. Şayan, kusursuzluk yerine cesur fikirlerin ve sahnede eylemin gücüne inandığının altını çiziyor.",
      qaList: [
        {
          q: "Kırılgan Köprüler, Çevresel Kıyamet, Modern Oburluk, 'Kimlik ve Aidiyet' ve 'Neşeli Direniş'... Bu temalar sanatçılar için bir sınır mı, yoksa bir davet mi?",
          a: "Aslında buradaki tek düşünülmesini istemediğim şey, bunun sanatçıları sınırlandırıyor gibi durması. Çünkü burada bir davet var. İki senedir bu temaları belirlerken dünyadaki festivalleri, sanatla ilgili fonları ve insanların üzerine düşündüğü meseleleri değerlendiriyoruz. Bu başlıklar hem entelektüel hem de etik anlamda önemli gördüğümüz konular. Bu beş temayı yan yana koyduğumuzda, aslında bugün dünyada neler olup bitiyorsa onlar hakkında düşünmüş oluyoruz. Kimlik ve aidiyet bu kadar ilgi görürken çevresel kıyamet neden daha az ilgi görüyor? Türkiye'de sonuç böyleyse, İngiltere'de ya da Manisa'da nasıl olurdu? Burada bir rota var. Bu rotayı belirleyen bazı değerlerimiz var. İnsanlar da o değerlere göre reaksiyon veriyorlar ve biz de burada bazı şeyleri görme şansı buluyoruz."
        },
        {
          q: "Kısalar Festivali bu yıl oldukça geniş bir seçkiyle, 50 oyunla gerçekleşiyor. Uzun vadede hedefiniz daha fazla üretime alan açmak mı, yoksa daha seçici bir yapıyla seçilen oyunların gelişim süreçlerine görünürlüğüne daha fazla alan tanımak mı? Bu dengeyi nasıl kurmayı hedefliyorsunuz?",
          a: "Bence bunun ana amacı şu: 'Bir fikrim var, keşke onu insanlara gösterebilsem.' Evde otururken bir fikir bulup heyecanlanmak başka, o fikri çalışıp sahneye taşıyabilmek başka. İnsan o çalışma sürecine girdiğinde zaten kendini sınamış oluyor ve bence bu yeterince önemli bir sınav. Kısalar Festivali ağırlıklı olarak bundan daha fazlasını sınamamalı. Şu an için tavrımız daha çok 'Hadi yapalım' diyerek insanları desteklemek. Keşke diğer tiyatrolar da buraya gelip potansiyel gördükleri oyunları keşfetse. Çünkü bu, gençlere yatırım yapmanın en kolay ve en kısa yolu. Biz kendi adımıza tiyatro sektörüne hizmet etmeye çalışıyoruz. Daha fazla oyuna destek verebilmek için de çalışmaya devam ediyoruz."
        },
        {
          q: "Kısalar Festivali pek çok genç yazar, yönetmen ve oyuncunun ilk kez görünür olduğu bir alan. Bir oyunu değerlendirirken sizin için belirleyici olan şey nedir? Kusursuz bir iş mi, cesur bir fikir mi, yoksa geleceğe dair güçlü bir potansiyel mi?",
          a: "Kesinlikle kusursuz bir şey arayışında değiliz. Hatta neyin kusursuz, neyin kusur olduğunu da sorguladığımız bir yer burası. Çok çalışılıp yanlış çalışılabilme ihtimali de bizim gördüğümüz bir şey. Böyle bir projede, o sürecin kıymetli bir kesitini tam olarak buraya denk düşürmeye çalışıyoruz. Biz oyunun en çok dramaturjisiyle ve sahneye koyuş biçimiyle ilgileniyoruz. Çünkü aynı şeyi anlatıyor olabiliriz ama birimiz onu diğerinden daha farklı anlatıyor. Bu anlamda fikir bizim için çok önemli. Çıkış noktası da çok önemli. Ama en çok da nasıl anlatılmaya çalışıldığı önemli. Ekiplerin içinde sahne sanatlarında farklı şeyleri kıymetli bulan insanlar da var. Bu da bizim için bir çeşitlilik. Hata yapma şansı olan insanları elemeye çalışmıyoruz. Hata yapma şansı olan insanlarla beraber burada olalım istiyoruz."
        },
        {
          q: "Kısalar Festivalinin geleceğini nasıl hayal ediyorsunuz? Festivalin farklı mekanlara ve şehirlere yayılması mümkün mü?",
          a: "Kısalar'ın geleceğini düşünürken mesele sadece yeni mekanlar değil, festival deneyiminin nasıl büyüyeceği. Tek mekanın şöyle bir güzelliği oluyor: Herkes dört gün boyunca nereye geleceğini biliyor. Aslında bu işi kuvvetlendiren bir taraf da bu. Şehre yayılmak da bir seçenek ama bunu nasıl yaptığımız önemli. Şehri bir noktada toplamak da başka bir kuvvet, başka bir romantizm yaratıyor. İnsanlar yollarda kaybolmak yerine her gün nereye gideceğini biliyor ve rastlaşa rastlaşa geliyor. Ama benim kafamda bu festivali Berlin'e de, Amsterdam'a da, Londra'ya da, Trabzon'a da, Van'a da, Ankara'ya da götürmek var. Çünkü bu festivaldeki deneyimin kodlarını alıp başka yerlere taşımak istiyorum. Bu anlamda Kısalar Festivali doğru kaynağa ulaşabilirse, buradaki niyetin ve amatör ruhun dünyanın her yerinde karşılık bulacağını düşünüyorum."
        },
        {
          q: "Festival boyunca çok sayıda oyun sahneleniyor. Oyunları izleme, değerlendirme ve üzerine tartışma sürecini nasıl yürütüyorsunuz? Bu tartışmalar gelecek yılların festivalini de şekillendiriyor mu?",
          a: "Arkadaşlarımızı, dramaturg arkadaşlarımızı ve akademisyenleri buraya davet ettik. Onlardan da geri dönüşler aldık. Ama burada bizim için önemli olan şeylerden biri eylem. Bir oyuncu çıkıp trapez öğrenmek ya da kendi hikâyesini anlatabilmek için yeni bir beceri edinmek üzere yola çıkıyorsa, bu benim için kıymetli. Çünkü sadece metni iyi oynamak değil, o yolculuğun kendisi de önemli. Ben bir eylemin gücüne inanıyorum. Tiyatro sahnesinde eylemin kuvvetine inanıyorum. Sözün de bir eylem olduğunu düşünüyorum. Bir anlamda festival de benim için bir arayış. 'Şu beş tema üzerine bir şey yapabilirsiniz.' diyorum. Mesele yalnızca onların kendini göstermesi olmuyor; bu aynı zamanda ileride birlikte çalışacağım insanları tanıma biçimim. Keşke bu mesleğin içinde birlik oluşturmaya çalışanlar da bu kadar insanın bir araya geldiği yerlere gelseler. Bu sene OGM Yapım'ın desteğiyle şunu gördüm: Sektörde işini gerçekten ciddiye alan insanlar var ve bizim bu umudu kırmamamız lazım."
        },
        {
          q: "Siz yıllar sonra geriye dönüp baktığınızda bu festivalin Türkiye Tiyatrosu'nda nasıl bir iz bırakmasını istersiniz? Kısalar Festivali'nin nasıl bir hafızaya dönüşmesini hayal ediyorsunuz?",
          a: "Festivalin çok profesyonel işler yapan insanlarla hala amatör ruhu taşıyan insanların buluşma noktası olmasını istiyorum. Biz bunu hak ediyoruz. Bir araya gelip oyunlar izlemeyi, oyunlar üzerine konuşmayı ve birlikte düşünmeyi hak ediyoruz. Ben festivallerin bir şehre ait olduğuna inanıyorum. Birilerinin değil, herkesin. 'Bir gün insanların, Biz Kısalar'dan çıktık' demesini isterim. İleride oyuncuların, yazarların ve sanatçıların 'Bir yolculuğa Kısalar Festivali'nde başladık' demesi benim için çok kıymetli olur. Çünkü biz burada genelde yolculuğun başındaki insanlarla buluşuyoruz. İnsanları umutlandıran, cesaretlendiren ve giderek buradan çıkan insanların da beslediği bir yapıya dönüşmesini isterim. En büyük hayalim ise şu: Kısalar Festivali'nin o üniversite tiyatrolarındaki amatör, cesur ve umut dolu ruhu koruması."
        }
      ]
    },
    {
      id: 21,
      type: 'written',
      source: 'TİYATRO DERGİSİ // PINAR EROL',
      date: '16 HAZİRAN 2026',
      title: 'AYTEK ŞAYAN’LA UZUN LAFIN KISASI: ADI KISA, ETKİSİ UZUN; HADİ FESTİVALE BUYURUN!',
      summary: "Meyvenin çekirdeğinden yeşeren yaşam gibi, en yoğun, en vurucu hikâyeler bazen o küçücük formların içinden çıkıyor. Uzun bir romanın dolaşa dolaşa anlatacağı şeyi, iki dizelik şiir, bir anda kalbinize bırakıveriyor. “Kısalar Festivali”nin ikinci yılında, Aytek Şayan'la kısa formun dönüştürücü gücüne ve sanatın kolektif ruhuna yakından bakıyoruz.",
      qaList: [
        {
          q: "“Kısalar Festivali”nin ikincisini karşılamaya günler kaldı. Daha dün elimize doğan festivalin büyümesini izlemenin heyecanı üzerimizde. Bu sene neler olacak? Belirlenen temalar yine birbirleriyle paslaşacaklar mı, aralarında konuşacaklar mı?",
          a: "Festivali ikinci kez yapmak bizim için de çok heyecan verici. Bu sene temaları belirlerken biraz daha net olmak istedik. Geçen seneden bu seneye taşıdığımız bir tema var; “çevresel kıyamet”. Diğer temalar da “neşeli direniş”, “modern oburluk”, “kırılgan köprüler”, “kimlik ve aidiyet”. Hepsi de her gün içinden geçtiğimiz, her gün soluduğumuz dünyayı anlatıyor. Her biri kendi başına güçlü bir manifesto gibi ama bu dönemin ruhunu çok iyi temsil ettikleri için yan yana geldiklerinde de birbirleriyle konuşmaya başlıyorlar. Bu çağın getirdiği sorulara bambaşka yerlerden cevap verme fırsatı sunuyor aslında temalar."
        },
        {
          q: "Festival bu yıl da DasDas'ta gerçekleşiyor. Bu iş birliğinin festivalin kimliğine ve üretim anlayışına nasıl bir etkisi var? Bir yandan da tarihleri, programı ve izleyicileri bekleyen atölye gibi buluşmaları konuşalım mı?",
          a: "“Kısalar Festivali”, ikinci senesinde de DasDas'ta yapılıyor. İş birliği aslında bakış açılarının ortaklaşması demek bizim için. O yüzden sadece bir mekân değil bir yol arkadaşlığı gibi. Türkiye'de bir festivalin süresi boyunca tek bir mekânda gerçekleşmesi artık pek mümkün olmuyor biz burada bunu da başarıyoruz. Bu sene festival tarihleri 18 ve 21 Haziran arasındaki dört gün. Bu dört gün boyunca aşağı yukarı elli performans olacak. Ayrıca bu sene festivalde Alexandra Kazazou “Fiziksel Tiyatro” atölyesi gerçekleştirecek."
        },
        {
          q: "“Kısa” tiyatro formatına pek alışık değiliz. Belli ki kalıpların dışına çıkan, bir tanıma hapsolmak istemeyen bir kimliği var “Kısalar Festivali”nin. Hatta tiyatroyla da sınırlamayalım, sahne sanatlarını kapsayan, genişleten, disiplinler arası bir üretim dili diyelim. Nedense “kısa” form olarak tamamlanmamış, rüştünü ispat etmemiş gibi algılanıyor. Bu festival bu algıya itiraz ediyor, değil mi?",
          a: "Biz geçen sene festivale “yalın, özgür, şimdi” diyerek başladık. Aslında herkese anlatacağın bir hikâyen varsa onu belirli kalıplara sıkışmadan, yaratıcılığını kullanarak anlatabilirsin dedik. O yüzden “kısa” formun tamamlanmamış gibi algılanması aslında alışılagelmiş kalıpların bir yanılgısı. Festival bizim için sürelerin kısaldığı bir alan değil, tam tersine belirli tanımlara hapsolmak istemeyen, disiplinler arası bir özgürlük alanı. Hatta bu “kısa” forma, anlatının en rafine hali bile diyebiliriz. Aslında “kısa” form, anlatıyı en saf, en dürüst ve en yalın haliyle anlatmayı da mümkün kılıyor. Dolayısıyla bu algıya sadece itiraz etmiyoruz, bu algıyı kırmak için de elimizden geleni yapıyoruz."
        },
        {
          q: "Her sene tiyatronun en zor senesindeyiz diye diye bu tiyatro mevsimini de atlattık (!) Bir oyun üzerinde hemfikir olmak, ekip kurmak, prova için mekân bulmak, salon bulmak, seyirciyle buluşmak başlı başına zorken ve gitgide zorlaşıyorken bir anlamda kolaylaştırıcı, yüreklendirici mi oluyor festival? Bir dayanışma ve motivasyon zemini oluşturuyor da diyebiliriz.",
          a: "Evet sorunlar hep var, her zaman vardı ama “Kısalar Festivali”nin bir cesaretlendirme hali var. Dört gün boyunca yan yana durmanın, o kolektif enerjinin iyileştirici bir gücü oluyor. Festivale katılan herkes; izleyiciler, sahnede olanlar, yaratıcı ekipler, teknik ekipler ortak dertleri paylaşıyorlar ama ne olursa olsun bu işi yapmanın da heyecanını hissediyorlar. Bu yüzden festival herkes için “buradayız, devam ediyoruz” dediğimiz bir alan haline de geliyor. Çünkü hepimiz farkındayız ki sanatı sürdürülebilir kılmanın yollarından biri de birbirimize alan açmak ve yüklerimizi paylaşmak."
        },
        {
          q: "Üretim dolaşıma da girebiliyor böylece.",
          a: "Tabii buna alan açmak da çok önemli. Geçen sene “Kısalar Festivali”ndeki bazı oyunlar başka festivallerde de oynadı. “Kısalar Festivali”nde ilk gösterimini gerçekleştiren birkaç oyun da sezonda farklı sahnelerde oynamaya başladı. Bu oyunların ilk kez “Kısalar Festivali”nde oynanmış olması da bizi çok mutlu ediyor."
        },
        {
          q: "Seyirci bazen bir performansla öyle özel bir buluşma yaşıyor, öyle güçlü bir bağ kuruyor ki o koltuktan öylece kalkıp gitmek olmuyor. İllaki oyuncusuyla, yönetmeniyle, yaratıcı ekibiyle buluşmak, biraz daha tiyatro konuşmak, biraz daha tiyatro yaşamak, biraz daha o dünyanın içinde kalmak istiyor. Bu festival bize bunun için biraz daha zaman veriyor.",
          a: "Bizim tam olarak hayal ettiğimiz ve yaratmak istediğimiz şey buydu; bu aradaki mesafeyi kaldırabilmek. Her performanstan sonra yapılan soru-cevap kısmı tam da bunun için kurguladığımız ve ayırdığımız bir zaman. Seyirciyi performans biter bitmez ekiple buluşturuyoruz. O enerji yok olmadan, izleyici aklındaki soruyu hemen sorsun, duygusunu paylaşabilsin, fikirleri tartışabilsin diye. Çünkü performans sahnede bittiğinde aslında bitmiyor, izleyicinin, ekibin zihninde devam ediyor. Bir de izleyicilerin tiyatro, sahne sanatları üzerine ekiplerle konuşabileceği alan neredeyse yok gibi. Bu alanı açmak da önemli bir misyon bizim için. Geçen sene seyircinin de ekiplerin de bunu özlemiş olduğunu fark ettik."
        },
        {
          q: "Bir de sezon biterken tiyatro sevdalıları için de bonus gibi oluyor. Kapanışı reddedenlere ilaç gibi geliyor.",
          a: "Aslında bu söylediğiniz çok güzel ama biz aslında tiyatroda sezonun bitmemesi gerektiğini düşünüyoruz. Bu ezberi bozabilmek güzel olurdu. Festivalin dört gün boyunca da aynı enerjiyle, heyecanla ve katılımla devam etmesi de belki buna ufak bir katkı sunuyordur."
        },
        {
          q: "Bu buluşmanın “3 Kısa” gibi çıktısı da oldu.",
          a: "Evet geçen sene festivale katılmış üç oyunu seçerek “3 Kısa” adıyla yeni bir prodüksiyon yaptık. Ortak temalarda buluşan üç kadın oyunu yeni bir dramaturji yapılarak Fırat Aygün tarafından yönetildi. Önümüzdeki sene de yine böyle bir prodüksiyon yapmayı umuyoruz."
        },
        {
          q: "Bir festivali programlamaktan çok bir ekosistem kuruyorsunuz aslında. Bu sayede de kim bilir kaç kişinin hayali gerçekleşiyor, sesi duyuluyor, varlığı biliniyor ve fikri karşılık buluyor. Şimdi bunlara teşekkür edilmez mi?",
          a: "Biz çok teşekkür ederiz. Ekosistem kelimesi niyetimizi de çok güzel özetliyor. Amacımız, seyircilerin ve tüm yaratıcı ekiplerin birbirleriyle temas ettiği, yaşayan bir alan kurabilmek. Size, katılan tüm ekiplere, seyircilere ve festivali yapan tüm sahne arkası ekibe bir hayale ortak olduğu için de ayrıca teşekkür ederiz."
        }
      ]
    },
    {
      id: 20,
      type: 'written',
      source: 'MİLLİYET // SEYHAN AKINCI',
      date: '14 HAZİRAN 2026',
      title: 'Aytek Şayan: "Bu yolculuk kendimize doğru"',
      summary: 'Milliyet Gazetesi\'nden Seyhan Akıncı\'ya konuşan Aytek Şayan; veterinerlikten vazgeçiş sürecini, İstanbul\'daki ilk yıllarında yaşadığı ekonomik zorlukları ve "Kısalar Festivali"nin çıkış noktasını anlatıyor. Dizilerdeki ölüm sahnelerinin kendisine ölümü değil "kirayı" düşündürdüğünü samimiyetle itiraf eden Şayan, aidiyet duygusu ve tiyatro felsefesi üzerine derin açıklamalarda bulunuyor.',
      originalLink: 'https://www.milliyet.com.tr/pazar/aytek-sayan-bu-yolculuk-kendimize-dogru-7604424',
      qaList: [
        {
          q: "Kısalar Festivali’nin ikinci edisyonuna hazırlanıyorsunuz, bu yıl nasıl bir festival bekliyor seyircileri?",
          a: "Bir kere ikincisini yapıyor olmaktan dolayı çok mutluyuz. Geçen sene 2200 tekil seyircimiz vardı. 4 bin kişi oyun izledi. Oyun izleyen 4 bin kişiyi görünce festivalde tiyatroyla dolu romantik dört günün geçtiğini anlamıştık. Geçen sene 167 başvuru vardı, bu sene 245 başvuru aldık. Sahne sanatlarına emek vermiş başka ekiplerin de bizlerle beraber olmak istediğini fark ettik başvurularda. Biz de ona göre bir seçki yapmak istedik. Geçen sene 64 oyun sergilenmişti. Bu sene içeriğin kalitesini yükseltmek için sayıyı azalttık."
        },
        {
          q: "Bu yılki festivalin temalarından biri ‘Kimlik ve Aidiyet’... Sizin için aidiyet mekân mıdır duygu mu?",
          a: "Bence bir duygu. Bir amaç dahilinde hareket ederken harcanan emeğin getirdiği bir hissiyat bence aidiyet. O yüzden hayatta da emek arkadaşlığına inanırım. Ve kendimi de aileme ve arkadaşlarıma ait hissetmeye çalışırım. Arkadaş olmak için de eylemler bulmaya çalışan bir insanım. Kısalar Festivali de o eylemlerden biri. Aidiyet bir amaç uğruna eyleme geçip üretimde bulunurken hissedilen duygu."
        },
        {
          q: "İzmir, Düzce, Bursa, Ankara, İstanbul gibi farklı yerlerde yaşadınız. Bunların arasında en çok iz bırakan yer neresi?",
          a: "Ben yemeği bile yerken dilimin dört farklı yerindeki reseptörde gezdirip hepsinin tadını almaya çalışırım. Hissederek yaşamaya çalışan biriyim. O yüzden hepsiyle ilgili bir şey anlatabilirim. Ama Düzce benim için çok önemli. Çünkü İzmir’de çok güzel ve steril bir hayatımız vardı. Babam öğretim üyesi, profesör. Sekiz yaşımdan itibaren hayatımda jimnastik, yüzme, masa tenisi, folklor, Çerkez’im zaten bütün oyunları bilirim. Futbol, tekvando yaptım 9 yıl. Düzce’ye gittiğimde dayılarımın güzel delikanlılıklarını dinleyerek, ağaçtan meyve toplayarak, sokak kültürüyle, kalabalık aileyle beraber büyüdüm."
        },
        {
          q: "Bunlar kalabalık aileyle bir arada olmayı seven bir fotoğraf getiriyor gözümün önüne...",
          a: "18 yaşıma kadar hep öyleydi hayatımız. Tiyatroyla tanıştığım andan itibaren hayatım değişti o anlamda. Bir yolculuğa çıktığımı ve o yolculukta biraz da kendi ailemi yaratmaya yöneldiğimi fark ettim. Bir sene Boğaziçi Üniversitesi’ndeki arkadaşlarımla kalmıştım. Pakistanlı bir arkadaşımız “Yazın nereye gideceksiniz?” diye sordu bizlere. Herkes diyor ki “Memlekete annemlerin yanına gideceğim.” O da “Neden kendini tanıyacağın başka eylemlerin içine atmıyorsun?” dedi. Adamlar 18 yaşında çocuğu “sokağa atıyorlar.” Bizde “Bakarım” durumu var. Ben de öyle biriyim. Bana 32 yaşıma kadar babam baktı İstanbul’a gelip dizide oynamaya başlayana kadar. Çünkü seçtiğimiz yolda para yoktu. Herhalde 21 yaşımdaydım onu duyduğumda. Kendimi başka tecrübeler edinecek durumların içine atmaya çalıştım ve tiyatroya çok vakit ayırdım. Öyle bir alışverişe girdim hayatla."
        },
        {
          q: "Mesleğiniz yüksek konsantrasyon isteyen oldukça stresli bir alan. Bu süreçleri nasıl yönetiyorsunuz?",
          a: "Neden bu mesleği yaptığınızı bilmek çok yardımcı oluyor. Ama sektörde şu anda gördüğüm, yaşanan birçok şeye binaen de bazen veterinerliği bırakmasaydım dediğim oluyor. Çok daha romantik bir yerde kalmak isterdim. Ama tabii insanoğlunun en büyük mücadelesi bence kıskanma duygusu. Sen bir sürü emek harcarken başka bir arkadaşın senin de hayal ettiğin şeylere ulaşabiliyor. Ben de bu duyguları hissettim ve bunu kendime itiraf etmekten kaçınmadım. Hepimizin ihtiyacı olduğu zaman psikoloğa gitmesi gerektiğini düşünüyorum ama ben hep arkadaşlarımı arar ne yaşıyorsam anlatırım. Annemi arar, akıl alırım. Yüzleşmek için elimden geleni yaparım. İnsanların önüne atarım kendimi, duygularımı, düşüncelerimi. Eleştirmelerine veya bana yardımcı olmalarına izin veririm."
        },
        {
          q: "Enteresan, bizim gibi toplumlarda erkekler biraz daha duygularını içeride yaşar...",
          a: "Ben çok öyle değilim. Çoğu arkadaşımın kafasını şişirdim dertlerimle. Onların da benimkini şişirmesine izin veririm. Arkadaşlığın bu olduğunu düşünüyorum. Bir de hayatın bana yardımcı olduğuna inanıyorum. Bir keresinde uzun soluklu olacağını söyledikleri bir işle anlaşmıştım. Ev bakmaya başladım. Çok param da yoktu. Evi tuttum. Annem diyor “Tutma, biraz aksın gitsin.” 29 yaşındayım, İstanbul’dayım. Makyözümüz vardı “Bak altıncı bölümde ölürsün” dedi. “Hayır ölmeyeceğim, sezon sonuna kadar anlaştık” dedim. Altıda öldürdüler beni. O kadar güzel bir evim var ki. Haberi aldım, oturdum ve “Zaten hak etmiyordun ki, o yüzden oldu” dedim. Bir hafta sonra “Kuzgun”da çok daha iyi bir rolüm oldu. Belki de hayatın “Hak ediyorsun” cevabıydı. Bunlarla mücadele eden 20’li, 30’lu yaşlarında çok arkadaşım olduğunu biliyorum. Bu yolculuğun kendimize doğru olduğunu unutmamak lazım. Ben veterinerliği bıraktım. Bilkent’te son aşamada sınava gelip kapıyı açmadan önce içeri alınacağımı biliyordum. Şunu dedim kendime “Oğlum çok uzun bir süre para kazanamayacaksın.” Az önce anlattığım anıyı yaşadığımda okuldan mezun olalı dört yıl olmuştu. Ben kendime para kazanamayacaksın diye sene biçerken belki 9-10 yıldır demiştim. “Hazır mısın?” dediğimde “Hazırım” demiştim ama hazır değilsin işte."
        },
        {
          q: "Dizilerde rol gereği ölüyorsunuz ama bu ölümü daha çok düşündürtüyor mu?",
          a: "Dizilerdeki ölüm hikâyesi sadece evin kirasını düşündürtüyor. Benim hâlâ kafam öyle çalışıyor. “Şu kadar bölüm oynadım, tamam bir yıllık kiram çıktı” diye bakıyorum. Tiyatroda ölüm üzerine düşünmemi gerektiren bir rolüm vardı. Bir de dijitalde “Kübra” Yağmur-Durul Taylan’la çalıştığımız. Orada başka bir karakterin ölümü üzerinden düşündüm. Ama dediğim gibi genelde dizilerdeki ölüm sahneleri, ölümü değil kirayı düşündürtüyor."
        },
        {
          q: "Bu yaz nasıl bir rotanız var?",
          a: "Bu yaz tekrar Avrupa’da dolaşmak istiyorum. İspanya’da gitmediğim yerler var. İspanya’ya gitmişken Portekiz’e geçmek. Ama asıl temmuzda bir aya yakın ABD’ye vakit ayırmak istiyorum. Amerika’nın ilgimi çeken yönü çok uluslu oluşu. O dokuyu görmeye gidiyorum."
        },
        {
          q: "ABD, Dünya Kupası ev sahiplerinden biri. Futbolla aranız nasıl?",
          a: "Oyuncu olmasam futbolcu olacaktım. Babam bir kere yanlışlıkla Galatasaray maçına götürseydi o stadın içine küçükken girseydim kaçış olmazdı. Galiba 21 yaşımda gittim ilk Galatasaray maçına. Melo bir gol atmıştı. 55 bin kişinin enerjisi içinden geçiyor. Biraz da kabiliyetli olduğuma inandığım bir alan. Futbolcu olmak isterdim."
        },
        {
          q: "40’lı yaşları nasıl tecrübe ediyorsunuz?",
          a: "Eylem hâlinde olduğum için üzerine çok düşünmüyorum. Daha doğrusu yaşa böyle bir yerden bakmıyorum. Evlenmek istiyor muyum? Çocuk sahibi olmak istiyor muyum? Kendi aileni öyle bir yerden kurmakla alakalı, biyolojiyle alakalı konular üzerinde birazcık sıkışmış hissettiğim oluyor. Ama mesleğimle alakalı öyle bir hissim yok. Ben hep nedense “Beni geç bulsun diye dua etmiş biriyim.”"
        },
        {
          q: "Hiç “Geç oldu” demiyor musunuz?",
          a: "Yoo hiç demiyorum. Küçükken de öyleydi. Nedense önemli olan varmak değil, yolda olmak hissi bende hep vardı. Bu aslında bitsin istememek gibi bir şey. Mesela para kazanırsın ama kazandığın parayı nasıl harcarsın? Biraz onu gördüğüm yerler oluyor kendimde. Çünkü hobilerimden yıllar içerisinde vazgeçtiğimi, çalışmaya odaklı bir yere döndüğümü fark ediyorum."
        }
      ]
    },
    {
      id: 19, 
      type: 'video',
      source: 'YOUTUBE // TEKE TEK SANAT',
      date: '12 HAZİRAN 2026', 
      title: '"Dilden Çok Eylemin Kuvvetine İnanıyorum"',
      summary: 'Bedia Ceylan Güzelce\'nin sunduğu Teke Tek Sanat programına konuk olan Aytek Şayan; Trabzon\'da çekilen popüler dizi "Taşacak Bu Deniz"in setindeki deneyimlerini ve veterinerlikten oyunculuğa uzanan yolculuğunu anlatıyor. Ayrıca kurucularından olduğu "Kısalar Festivali"nin vizyonunu, bağımsız tiyatroyu ve sahnedeki "eylemin gücü" felsefesini detaylarıyla izleyicilere aktarıyor.',
      videoUrl: 'https://youtu.be/vYxmFneVEQI?si=MdOSHXTq-4f1HWGP'
    },
    {
      id: 18,
      type: 'written',
      source: 'RÖPORTAJ // GÜLSEREN ÜST POLAT',
      date: '12 HAZİRAN 2026',
      title: 'Tiyatro bir ritüeldir',
      originalLink: 'https://www.hafta.com.tr/tiyatro-bir-ritueldir-80918',
      summary: 'Genç sanatçılara görünür olabilecekleri bir alan açan ‘Kısalar Festivali’ne sayılı günler kaldı. Kısa formatı bir süre kısıtı değil, yeni bir anlatı imkânı olarak gören oyuncu Aytek Şayan da festivalin mimarlarından. “Herkesin aslında 10 dakikalık bir fikri var” diyen oyuncu; tiyatronun deneyimle, merakla ve soru sormakla kurduğu ilişkiyi ve oyunculuk anlayışını anlattı.',
      qaList: [
        {
          q: "Kısalar Festivali’ni doğuran o temel düşünce, ‘bu işi yapmalıyız’ dedirten motivasyon neydi?",
          a: "Ben konservatuar tiyatro bölümü mezunuyum ama esasen amatör tiyatro çıkışlı olarak görüyorum kendimi. Uludağ Üniversitesi’nde Veterinerlik okurken, tiyatro topluluğunda 4-5 yıl çalıştım. Çok da iyi eğitim alıyorduk. Sene sonunda öğrendiklerimizi uygulamamız için kısa oyunlar sahneliyorduk ve sahneye koyuş biçimimizle kendimizi ifade ediyorduk. Tiyatro topluluğunun en güzel yanı ile konservatuarın en kötü yanı aynı aslında. Tiyatro topluluğunda oyunculuk ikinci, üçüncü planda, diğerinde birinci planda. Oyunculuk birinci planda olduğunda tiyatroyla değil, kendiyle ilgilenen bir nesil yaratmanız yüksek ihtimal ama eğer oyunculuk ikinci, üçüncü planda olursa neden tiyatro yaptığını anlayan ve bunun bir öğesinin de oyunculuk olduğunu düşünen bir nesil yaratmanız muhtemel. Üniversitedeki bu yaklaşım benim aklımda kalan bir şeydi. En güzel tarafı, biri sana “gel şunu oyna” demiyor. Biri sana bir şey öğretiyor ve sen ne yapmak istediğine öğrendiklerin dahilinde karar veriyorsun."
        },
        {
          q: "Ve bu düşünceden yürüdünüz…",
          a: "Herkesin aslında 10 dakikalık bir fikri var bu işle ilgili. Ama satamam diye düşünüyor. Kendini göstereceği, öğrendiklerini, fikrini, vizyonunu göstereceği en önemli örneği belki hiç bir zaman deneyemeyecek ve çalışamayacak onun üzerine. Biz de 20-30 yaş arasında, konservatuarın 3 ya da 4. sınıf öğrencilerine ya da yıllardır profesyonel olarak çalışan ama profesyonelliğin içine girdikten sonra fikrinin üstünü örtmek zorunda kalanlara o 10 dakikalık fikrini hatırla; gel şimdi onu basit, özgün şekilde yap diyoruz. Çok ve yanlış çalışılmış olacağına az çalışılmış, ama fikrin daha görünür olduğu bir şey olsun istiyoruz."
        },
        {
          q: "“Sadece oyun izlenen bir alan değil bu festival” diye bir ifadeniz var. Biraz bunu açar mısınız? Burada asıl kelime ‘deneyim’ mi?",
          a: "Bugünün dertlerinin artistik bir şekilde anlatıldığı bir alanda, hep beraber romantik bir dört gün geçirmek bizim niyetimiz. Temalara karar veriyoruz ama festivale gelecek oyunların ne olduğuna karar vermiyoruz. Tüm bunlar olmasa dahi bizim seyirci için yaşattığımız deneyim kısmı söyleşiler. “Sen de bir şey söyle” diyoruz. İzleyici sorsun: Ne anlatmak istedin? Hangi yöntemlerle çalıştın? Oyunu oynayan kişinin de “Ben bu fikri geliştirmeye devam edeyim mi” sorusunun yanıtını görebilmesi için olabildiğince nitelikli seyirci alanı yaratmaya çalışıyoruz. Tiyatronun bir deneyim olduğunu unuttuğumuz 1000 yıl geçirmiş durumdayız ne yazık ki."
        },
        {
          q: "Nasıl yani?",
          a: "Tiyatro, salonlara hapsedilen, bir yazarın bir başka üst akıl tarafından “şunu insanlara anlatsana” dediği bir şey değildir. Tiyatro Antonin Artaud’un dediği gibi esasında bir ritüeldir, deneyimdir. Tiyatro canlı oynanan bir şey. Biz ‘Kısalar’da kendi adımıza bir deneyim yaşatmaya çalışıyoruz insanlara. İnsanlara nitelikli bir şey öğreten ortam yaratalım... Seyirci de ileride kötü bir şey izlemek istemiyorsa buraya gelmeli bence. Benim için sanatta iyi, kötü, güzel, çirkin diye şeyler yok. Enteresan diye bir şey var. O da deneyimle ilintili zaten. Biz enteresan olmak, ilgi çekici olmak zorundayız. Cazibeli olmak zorundayız."
        },
        {
          q: "Anladığım kadarıyla ‘kısalar’ fikrini sadece bir festival formatı olarak görmüyorsunuz, yeni bir dil yaratma çabası sanırım.",
          a: "Tabii, onun arayışı içerisindeyiz."
        },
        {
          q: "Festival başvuruları bitti. Bu yıl festivale ilgi nasıldı, seçimler neye göre yapıldı?",
          a: "Biz elemeyi sevmiyoruz. İnanmıyoruz da. Yarışmaktan, elenme usulünden nefret ederim. Bizim yaptığımız ‘arayı’ bulmaya çalışmak. Temalarımız var ve o temalar özelinde gelen başvuruların olabildiğince homojen bir şekilde dağılmasını sağladık. Yine gençlere alan açmaya çalıştık seçim yaparken."
        },
        {
          q: "Festival seçkisini oluştururken sizi en çok hangi işler heyecanlandırıyor: anlatısını güçlü kuranlar mı, sahne dilini zorlayanlar mı, yoksa bu ikisi arasında yeni bir alan açabilenler mi?",
          a: "Bir kere ben söze inanmıyorum. Dil benim için müthiş bir bariyer. İş sahneye aktarma kısmına gelince ben fiziksel olana daha fazla inanıyorum. Yani sahne dilini zorlayan diyebilirim. Benim en çok ilgilendiğim şey şu oluyor: Neyi öğrenmek için, kendine ne katmak için yola çıkmış? Mesela bir arkadaşımız trapez öğrenmek istemiş ve sirklerde çalışan arkadaşlardan eğitim almış. Sonra da bu öğrendiği şeye bir tekst bulmuş. Bizim oyuncu olarak hayattaki görevimiz bu. En güzel konuşan olmak gibi sorumluluğumuz yok bizim."
        },
        {
          q: "‘Kırılgan Köprüler’, ‘Çevresel Kıyamet’, ‘Modern Oburluk’, ‘Kimlik ve Aidiyet’ ile ‘Neşeli Direniş’... Bu temalar sadece bir seçki çerçevesi mi, yoksa sanatçıları düşünsel olarak provoke eden bir başlangıç noktası diyebilir miyiz?",
          a: "Evet öyle. Biz dünyadaki fonları araştırıyoruz, başka festivalleri araştırıyoruz. İstiyoruz ki, katılımcılar bu festivale çalışmış ve burada da bir karşılık bulmuşsa, yaptığı işle gidip başka bir fona da başvurabilsin. Başka bir açıdan da Kısalar Festivali ile bir sosyoloğun da psikoloğun da ilgilenmesi gerektiğini düşünüyorum. Çünkü 20-30 yaş arasındaki gençlerin bu temalar bağlamında kendileri ve dünyayla ilintili ne düşündükleriyle ilgili de bir röntgen çekme şansı buluyoruz. Biraz günlüğe dönen işler de oluyor."
        },
        {
          q: "Festivaller doğal olarak birkaç günle sınırlı kalıyor. Bunun hem mekana hem zamana yayılmasıyla ilgili planlar var mı?",
          a: "Tabii ki. Ama bu ne kadar kaynağımız olduğu ile de alakalı oluyor. Alternatif workshop planlarımız da var. Geçen sene de 3 tane kısayı seçtik. Onları devam ettirip ayda bir oynattık. Bu noktada mekan destekçisi olarak DasDas’ı unutmamak lazım. Hem Mert’in (Fırat) hem İlksen’in (Başarır) çok destekleri oluyor. Bu çok anlamlı bir proje sektörümüz için."
        },
        {
          q: "20 dakika sınırı, bir hikâyeyi “eksiltmeye” mi zorlar, yoksa onu daha keskin bir dile mi iter? Bir sanatçının yaratım refleksini nasıl değiştirir?",
          a: "Festivalde deneyimlediğimiz en ilginç şey şuydu: 20 dakika aslında o kadar uzun ki. Siz iki saatlik bir oyuna gittiğinizde “25 dakika zaten sıkılacağım” diye kabul ederek gidiyorsunuz. Ama 20 dakikalık bir oyunun 3 dakikası boş geçtiğinde, deli gibi sıkılmaya başlıyorsun. Aslında burada bence sanatçıyı keskinleştirmeye yönelik bir amaç var. Benim aslında insanlara tavsiyem kısa oyunları okumaları. Kısa öykü okumak ya da şiir okumak gibi."
        },
        {
          q: "Bilet fiyatları ve ekonomik koşullar malum… İnsanlar hesap kitap yapmak zorunda kalıyor. Kısa süreli oyunlar ya da sahne performansları insanlara “20 dakika için değer mi” dedirtir mi?",
          a: "Biz tiyatrocuların kabul etmediği bir şey var; o da bizim de bazen üstüne az çalışılmış, yeterli özeni göstermediğimiz işler yaptığımız. Bir kere öncelikle bizim ‘neyi anlatalım, ne yapalım’ araştırmasına girmemiz lazım. Ben insanlara, “bir saat yol gelecek, bilet satacağım, 20 dakika oyun izleyecek ve gidecek” de demiyorum. Bunu da geliştirerek bir konsept bulabiliriz. Mesela açık alanda yapalım. İnsanlar 20 dakikalık bir oyun izlemez ama bir deneyim yaşar, birkaç tane 20 dakikalık iş izler mesela…"
        },
        {
          q: "Bir karakteri canlandırırken en zor kırılma noktası sizce nerede başlıyor: Karakteri “anlamakta” mı, yoksa onu “bırakabilmekte” mi? Oyuncu olarak kontrolü kaybetmeye ne kadar izin veriyorsunuz?",
          a: "Kişisel olarak masa başı çalışmasına yani dramaturji çalışmasına çok inanan biriyim. Ben neyin anlatıldığı bir şeyin içindeyim, bunun hangi ögesiyim? Yaşı, fiziksel özellikleri, psikolojik durumu, içinde bulunduğu sosyoloji… Bunlara bakarım. ‘Bırakabilmek’ kısmında sanırım benim en önemsediğim şu: Ben oynarken bile soru soruyorum, cevap vermiyorum. Benim için enteresan olan, izleyenlerin de soru sorduğumu fark etmeden, soru sormaya başlamalarını sağlamak. Gitmek istediğim yer tabii ki belli ama bir yandan da hala cümlelerle, eylemlerle bir oluş halinde… O kaotik durumu gözler önüne sermek benim niyetim. O yüzden, kontrolü bırakmaya inanıyorum. Öyle de oynamaya çalışıyorum."
        }
      ]
    },
    {
      id: 1,
      type: 'written',
      source: 'HÜRRİYET',
      date: '18 NİSAN 2026',
      title: 'Sokakta Alınan Tepkiler, Hayatı ve Oyunculuk Yolculuğu',
      summary: '13 yaşında şiirler, öyküler yazan, ardından tiyatro yapıp ekranla tanışan Aytek Şayan’la buluşup projelerini, hayatını ve sokakta aldığı tepkileri konuşuyoruz. Dizi çekimleri için sürekli Trabzon’da olan oyuncu, İstanbul’a geldiği boş gününde buluşmamızda sert bakışlarının altındaki muzip ve neşeli karakteriyle bizleri karşılıyor.',
      qaList: [
        {
          q: "Son işinle çok popüler oldun. Ama hakkında pek bilgiye ulaşamadım. En baştan başlayalım: İzmirliymişsin. Nasıl bir ailen vardı?",
          a: "İzmir’de doğdum, büyüdüm. Annem Düzceli, babam Balıkesirli, Çerkesiz. Annem ev hanımı, babam da Ege Üniversitesi’nden emekli eski öğretim üyesi, akademisyen. İki kardeşiz ama kalabalık bir ailenin içinde büyüdüm. Yazlarımız Düzce’de, anneannemin bahçeli evinde geçerdi, altı kuzendik, meyve ağaçları altında top oynardık. Bursa’da veterinerlik fakültesi kazandım ve oraya gittim. Biraz da Bursalı oldum. Sonra Ankara’da dokuz sene okudum."
        },
        {
          q: "Tek tek gidelim, veterinerliği bitirdin mi?",
          a: "Dördüncü sınıfa başlarken bıraktım."
        },
        {
          q: "Yüzüp yüzüp kuyruğuna gelmişken neden bıraktın?",
          a: "Okul beş seneydi. O bölümü seçmemde de sağ olsun babamın etkisi vardı. Onun alanı ziraat, hayvan besleme. Bana “Yurtdışına konferanslara gidip geliyorum. İleride insanlar evlerinde çok kedi-köpek besleyecek, bu meslek çok popüler olacak” dedi. Ben de o bölüme girdim ama okula başlayınca hemen bir tiyatro topluluğuna kaydoldum."
        },
        {
          q: "Oyunculuğun temelleri de orada mı atıldı?",
          a: "Aslında öncesinde... Edebiyat hocam çok tatlı bir kadındı, beni motive ederdi. Odamda kendimce şiir, öykü yazmaya çalışıyordum. 13 yaşında Yakup Kadri Karaosmanoğlu’nun ‘Yaban’ını okuyup, özenip 60 sayfa roman yazmaya çalışmıştım (gülüyor). Üniversitede tiyatro topluluğunu bulunca çok sevdim. Bilkent’te tiyatro okumaya başladım. Sonra da İstanbul’da Haliç Üniversitesi’nde oyunculuk üzerine yüksek lisans yaptım."
        },
        {
          q: "Seni yeni yeni tanıyoruz. Kendini nasıl özetlersin?",
          a: "İş üzerinden anlatırım sanırım. Aslında bu durum beni bazen üzüyor. İş konusunda çok hayallerim var, oyunculuk yolunu çok ciddiye alıyorum ve o ciddiyet bazen beni yoruyor. Tiyatroyla bir şeyler üreterek kalıcı olmaya çalışıyorum. Gezdiğim şehirlerde biriktirdiğim arkadaşlarım var. Kendimi biraz arkadaşlarımın üzerinden okurum. Onlarla 20 yıldır görüşüyorum. Arkadaşlarını çok seven biriyim."
        },
        {
          q: "Kendinde değiştirmek istediğin yanın ne?",
          a: "Biraz daha rahatlamak isterdim. Kendimi izlerken çok yargılıyor, eleştiriyorum. Orayı biraz rahat bırakmak iyi olurdu."
        },
        {
          q: "Hayatında “Bitti” dediğin ama sonra yeniden başladığın bir an var mı?",
          a: "İnan “Bitti artık” dediğim bir an yok. Mücadeleyi çok seviyorum. Kendimle alakalı da şöyle bir duam var: İnşallah her şey beni adım adım bulur, kolay bir şekilde bulmaz, ben de değerini bilirim. Hakikaten de hayatım öyle geçiyor."
        },
        {
          q: "41 yaşındasın. 20 yıldır içinde bulunduğun oyunculuk sektöründe sence uğradığın en büyük haksızlık neydi?",
          a: "Kimse gençlerin ne yapmak istediğini merak etmiyor. “Sen ne düşünüyorsun”, “Ne yapmak istersin”, “Senin için böyle bir alan var” diyen birinin olmaması bu işteki en büyük haksızlık. Olana uyumlanmaya çalıştığımız bir düzenin içindeyiz, o da çok zorluyor."
        },
        {
          q: "Oyunculuk dünyasında bir şey değiştirecek olsan neyi değiştirmek isterdin?",
          a: "En büyük sıkıntı şu: Kendimize hep başkalarının gözünden bakarak bir kariyer veya yol inşa etmeye çalışıyoruz. O yüzden eğitim sistemini değiştirmek isterdim."
        },
        {
          q: "Oyunculuğun sence en zor kısmı ne?",
          a: "Herkes sosyal medyada en iyi anını paylaşıyor. Dizide zaten en iyi anlarımız çekiliyor. Ama bu öyle bir iş değil. Bu işin en zor kısmı bir rol gelsin diye bekliyorsun, geliyor. Sonra dizi tutsun diye dua ediyorsun, tutuyor. “Rolü daha geniş yazarlar inşallah” diyorsun, yazıyorlar. Bu sefer “Karakteri öldürüp diziden çıkarmasalar” diyorsun. Hangi rolde olursan ol bu olabiliyor. Ve bu psikolojiyi idare etmek çok zor. Ben kendi adıma buralarla ilgilenmemeyi becerebildiğim için kendimi takdir ediyorum. Tabii bazen çok zorlanıyorum. Bu psikolojiyi diri tutmak o kadar kolay bir şey değil."
        },
        {
          q: "Son dönemde çok beğeniliyorsun. Sence sen jön müsün?",
          a: "Bilmiyorum. Onun tam olarak ne demek olduğunu söylersen..."
        },
        {
          q: "Dizileri başrolde oynayan, yakışıklı, yalılarda falan oturan karakterleri canlandıranlar gibi...",
          a: "Ancak öyle olsaydım herhalde şimdiye kadar olurdu. Gerçekten bu düşündüğüm bir şey değil. Bazen bana öyle diyen arkadaşlarım var ama beni motive etmek için söylediklerini düşünüyorum ve konuya gerçekten oradan bakmıyorum. Aslında hiç unutmuyorum, şu an çok meşhur olan oyuncu bir arkadaşım eskiden bir yerde otururken benim yüzüme baktı ve “Sen hiçbir zaman jön oynayamayacaksın, biliyor musun” dedi. “Neden öyle bir şey dedin abi” dedim. “Bu işin bir matematiği var” falan dedi. Sanırım birtakım kalıplar var. Ama ben biri hikâye yazmaya başladığı zaman o kalıpları düşünerek yazdığını da düşünmüyorum, iş satmaya geldiği zaman sanırım herkes o kalıpları düşünmeye başlıyor. Mesela şu an içinde bulunduğumuz işte de o kalıplara göre hiç kimsenin role seçildiğini düşünmüyorum. O yüzden de kendimi şanslı hissediyorum."
        },
        {
          q: "Peki, hep kadınlar tarafından beğenilir miydin?",
          a: "Beğenilirdim. Ama bunu fiziksel olarak düşünmezdim. Hep bir esprim vardı, mahallemde hep ünlüydüm. Ünlüydüm derken yaşam enerjim çok yüksekti, girdiğin ortamda parlamak gibi. Sorduğun sorunun fiziksel olan yanından çok bende kuvvetli olan yanı, yaşamayı sevmem ve yaşarken de onu coşkulu bir şekilde yaşamam."
        },
        {
          q: "Hayatında biri var mı? Âşık mısın?",
          a: "Var, evet ve güzel gidiyor."
        },
        {
          q: "Bir aşk tanımın var mı?",
          a: "Gece yattığında ve sabah kalktığında ilk aklına gelen şey eğer oysa âşıksındır."
        },
        {
          q: "Seni bir ilişkiden en hızlı soğutan şey nedir?",
          a: "Benim ben olmama izin vermediğini hissettiğim ilk an senden soğurum."
        },
        {
          q: "Şu an hayatın nasıl bir dönemindesin?",
          a: "Bence en iyi dönemlerinden birindeyim. 40’ların başındayım ve eğer söylenenler doğruysa en güzel yaşlarımın başlamış olması lazım. Galiba 40 olmanın en iyi durumu seninle alakalı değil. Sen 40’ken 30’a, 20’ye daha fazla denk geliyor ve senin yaşadığının aynısını yaşayan insanları, reaksiyonlarını görüyorsun. Tabii hepimiz tekiz ama çok birbirimize benzediğimizi de düşünüyorum bir noktada. Onda gördüğünde, bir çözüm üretebiliyor olduğunda, kendinin büyüdüğünü de hissetmeye başlıyorsun."
        },
        {
          q: "Yeni projelerin neler?",
          a: "‘Taşacak Bu Deniz’ devam ediyor. Bu sene kendi oynadığım bir tiyatro oyunu yok. Ama kendi adıma tiyatroyla ilgili bir şeyler yapmaya çalışıyorum. ‘Kısalar’ diye bir ekip kurduk arkadaşlarımla ve geçen sene ‘Das Das’ın mekân sponsorluğunda ‘Kısalar Festivali’ni yaptık. Sahne sanatları alanında üretilmiş, 20 dakikanın altında kalan tüm performanslarla ilgilenen bir festival. 160 oyun başvurdu. 62’sini sahneye çıkardık. İmkânlarımızı zorlayıp oradan üç kadın hikâyesini seçtik, şimdi onlar ‘Kısalar’ adına ‘Das Das’ın mekân sponsorluğunda sahneye çıkıyorlar."
        },
        {
          q: "Dizide canlandırdığın karakter âşık olduğu kadını kendiyle evlenmeye zorlamış, çocuğunu ondan koparmış biri. Sen aşk için bu kadar ileriye gider miydin?",
          a: "Ben aşk için bu kadar ileriye gitmezdim. Şerif karakteri de bunları aşk için yaptığını zannediyor ama ben o duygunun, o kavramın ne olduğunu bilmediğini düşünüyorum."
        },
        {
          q: "Karakterin sana ne ifade ediyor?",
          a: "Son iki senedir iyi karakterleri canlandırdım ama ondan önce çokça kötü karakter oynadım, o yüzden tekrar kötü bir karakteri oynama konusunda gerçekten düşündüm. Karaktere ‘Neden kötü’ diye baktım. Ben onu hiçbir yerde haklı bulmuyorum. Ama o kendini nerede haklı buluyor diye düşünmek zorunda olduğumu biliyorum. Çünkü öbür türlü kötü bir karakter ekmeği bile sabah kahvaltısında bıçaklar ve karikatürize bir yere gider. Buradaki karakter öyle değildi. Böyle olmasının bana verilen bir sürü sosyolojik, psikolojik sebepleri vardı. Bende onları kendimce bir şeyler araştırıp içine koymaya çalıştım. Ama aslen ben işimizin kolektif bir çalışmanın başarısı olduğuna inanıyorum. Yazarlarımız, yönetmenlerimiz ve oyuncu arkadaşlarımızla beraber birbirimize yardımcı olarak oluşturduk bu dünyayı ve bu tüm karakterleri daha gerçekçi kılıyor."
        },
        {
          q: "Senin hayatında ‘Şerif’ karakteri gibi intikamın yeri var mıdır?",
          a: "İntikam almakla hiç uğraşamam, öyle bir şeyim yoktur. Biri bana bir şey yaptıysa, unutmam, yakınlaşamam, affetmem zordur ama bir intikam almaya çalışmam."
        },
        {
          q: "Sokakta tepkiler nasıl?",
          a: "“Sana daha dün akşam ekranda izlerken küfrettim, şimdi karşımdasın” diyen oluyor. Ama en ilginci, sürekli gittiğimiz bir yerde mutfaktan bir abla koşarak geldi ve “Sana bir kere sarılabilir miyim? Kimse sana sarılmıyordur” dedi. O benim için çok ilginçti. Anne olup Şerif’e “Sana bir sarılayım” diyen çok insanla karşılaşmaya başladım, sanki sarılınca Şerif de bir daha kötü davranmayacakmış gibi bir yerden bakıyorlar."
        },
        {
          q: "Yıllardır oyunların, dizilerin var ama patlamayı bu sene 41 yaşında yaptın. Sevdin mi tanınmayı?",
          a: "Kendi hayatımda çok rahat konuşan, hareket eden biriyim. Şimdi ona daha dikkat etmek zorunda olmak beni biraz zorluyor. Bir keresinde Trabzon Havalimanı’nda onun bir örneğini yaşadım. Bir yerde hakkımız olan şeyle alakalı hem kendi adıma hem senin adına itiraz edebilir, konuşabilirim. Bu kadar görünür olmazken bu problem değil. Ama görünür olduğunda bunlar hep manipüle edilebilir. O beni biraz rahatsız ediyor."
        }
      ]
    },
    {
      id: 2,
      type: 'written',
      source: 'WS MEN // WOMEN\'S SHINE',
      date: '7 MAYIS 2026',
      title: 'Stil, Denge ve Sahne Disiplini Üzerine',
      summary: 'Aytek Şayan; "Taşacak Bu Deniz" dizisindeki Şerif karakterini, kötülüğün anatomisini, gardırobunun imza parçalarını, spor rutini ile hayat felsefesini içtenlikle paylaşıyor.',
      qaList: [
        {
          q: "Şu an \"Taşacak Bu Deniz\" ile izleyici karşısındasınız. Şerif karakteri oldukça katmanlı; onun o sert ve mücadeleci dünyasına hazırlanırken çıkış noktanız ne oldu?",
          a: "Öncelikle yazarlarımızın nasıl bir karakterden bahsettiğini anlamak gerekiyor bence. Sonuçta onların yazdığı bir hikâyeyi, anlatmaya çalıştıkları bir dünyayı seyirciyle buluşturmaya çalışıyoruz. Doğal olarak ilk çıkış noktam onların bana verdikleri materyaller oldu. Bunlar üzerine mümkün olduğunca sorular sorup kendimce ne katabileceğim üzerine düşündüm. Sonrasında yönetmenimizin bu hikâyeyi, bu karakteri nasıl anlatmak istediği üzerine sohbetler ettik. İki yönetmenimizin de karakter hakkındaki görüşleri benim için çok kıymetliydi. Hep beraber hikâye için kıymetli olduğuna inandığımız bir karakter yaratmaya çalıştık."
        },
        {
          q: "Şerif'in en çok hangi özelliğiyle kendinizi özdeşleştiriyorsunuz veya hangi özelliği size \"bu ben değilim\" dedirtiyor?",
          a: "Hiçbir özelliğiyle kendimi özdeşleştirmiyorum açıkçası; dolayısıyla tümüyle benden uzak bir karakter olduğunu düşünüyorum. Zaten Şerif ile ilgili ilk dikkatimi çeken şey de buydu. Bir başkasına bile isteye zarar vermeye çalışan ve bunu yaparken de kendini ve diğerlerini ikna etmeyi becerebilen bu insanın neden ve nasıl var olduğunu anlamaya ve anlatmaya çalışmak zor bir süreç; ama ne yazık ki hayatta böyle insanlar var, dibimizdeler. Bazılarının farkındayız, bazılarının değiliz. Aynı Şerif'in ne kadar kötü olduğu ile ilgili seyircinin bazen kafasının karıştığı gibi, gerçek hayatta da bu denli kötü insanların öyle olup olmadıklarını anlamak ne yazık ki zor. Ve en zor olanı, bu kötülüğü neyin yarattığını kabul etmek, onunla yüzleşmek. Bir oyuncu olarak benim görevim hikâyedeki bu noktalar üzerine çalışıp insanları bununla yüzleştirmek."
        },
        {
          q: "Kariyerinizde bugüne kadar canlandırdığınız karakterler arasında, zihninizi en çok meşgul eden ve set bitse bile etkisinden çıkamadığınız biri oldu mu?",
          a: "Biz haftalık diziler çekiyoruz; doğal olarak aylarca her hafta, her gün sete gidip çalışıyoruz. Her hafta yeni gelen senaryo üzerine çalışıyoruz, bu yüzden hep zihnimin bir kenarı karakter ile ilgili düşünüyor. Bazen \"keşke daha iyi etüt etseydim\" diye kafama takılan sahneler oluyor. Ama bu \"keşke daha iyi anlatabilseydim\" takıntısı oluyor; yoksa etkisinden çıkamadığım bir karakter yok. Öyle şeylere de inanmam, sevmem de. İşim biter; ben Aytek olarak işimi değerlendiririm, nelerim eksik diye bakarım o kadar."
        },
        {
          q: "Oyunculukta \"karakter çıkarma\" sürecinde ritüelleriniz var mı? Mesela o karaktere özel bir koku veya müzik listesi belirler misiniz?",
          a: "Benim en önemli ritüelim karakter ile ilgili dramaturji çalışmamdır. Tabii ki bunların sonucunda ortaya çıkan bazı materyalleri de düzenli olarak kullanıyorum; ama bu bazen bir karakter için müzik oluyor, bazen başka bir karakter için çay olabiliyor. Ama mümkün olduğunca yapmaya çalıştığım şey, kostümümü giyerken konsantre olmaya başlamak ve o süreci bir dönüşüm anı gibi kullanmak."
        },
        {
          q: "WS Men kapağındayız; erkek dünyasında \"stilin\" sadece kıyafetten ibaret olmadığını biliyoruz. Sizin için gerçek şıklık ve karakterli bir duruş ne ifade ediyor?",
          a: "Bence gerçek şıklık, insanın giydiklerinden çok duruşuyla, tavırlarıyla ve değerleriyle şekillenen bir şey. Kendine güven, samimiyet ve bir hikâye anlatma yeteneği bence karakterli bir duruşun en büyük bileşenleri."
        },
        {
          q: "Gardırobunuzun en vazgeçilmez, \"bu parça benim imzamdır\" dediğiniz parçası nedir?",
          a: "Kesinlikle klasik bir siyah deri ceket. Onu her alanda, gündelik hayattan daha resmi davetlere kadar kombinleyebiliyorum. Hem zamansız hem de kişiliğimi çok güzel yansıtıyor."
        },
        {
          q: "Yoğun set temposunda fiziksel formunuzu korumak bir zorunluluk mu, yoksa sizin için bir yaşam biçimi mi?",
          a: "Aslında benim için kesinlikle bir yaşam biçimi. Yoğun set temposunda enerjimi koruyabilmek, odaklı kalabilmek ve hem fiziksel hem de mental olarak dengede durmak için düzenli spor yapmak bir zorunluluk."
        },
        {
          q: "Spor rutininizde sizi en çok zorlayan ama en çok sonuç aldığınız antrenman türü hangisi?",
          a: "Kesinlikle yüksek yoğunluklu interval antrenman (HIIT) diyebilirim. Hem kardiyovasküler dayanıklılığımı ciddi anlamda artırıyor hem de kısa sürede maksimum verimi alıyorum. Zorlayıcı ama gerçekten sonuç veriyor."
        },
        {
          q: "Beslenme disiplininizden bahsedelim; set aralarında o meşhur \"catering\" masalarından kendinizi nasıl koruyorsunuz?",
          a: "Set ortamında o \"catering\" masası gerçekten en büyük sınavlardan biri. Ama ben bunu bir yasaklar listesi gibi değil, bilinçli bir denge meselesi olarak görüyorum. Açıkçası kendimi tamamen kısıtlamıyorum; sadece neyi, ne zaman ve ne kadar yediğime dikkat ediyorum. Gün içinde kan şekerimi dengede tutacak daha sade ve temiz seçeneklere yöneliyorum; protein ağırlıklı beslenmek, bol su içmek ve porsiyon kontrolü benim için kilit noktalar. O masaya aç gitmemek de önemli; çünkü açken yapılan seçimler genelde en sağlıklısı olmuyor. Bir de şu var: Set temposu zaten yorucu, o yüzden yediklerimin bana enerji vermesi gerekiyor, ağırlık değil. Arada kaçamak yapıyor muyum? Tabii ki. Ama onu bir ödül gibi, dozunda bırakıyorum. Disiplin benim için kısıtlama değil, sürdürülebilir bir denge kurmak demek."
        },
        {
          q: "\"Cheat day\" (kaçamak günü) sizin için ne anlama geliyor? Kendinizi en çok neyle ödüllendirirsiniz?",
          a: "Yemek yemeyi çok sevdiğim için listemde farklı lezzetlere dair bir sürü restoran var. Onlardan birini seçiyorum, her seferinde farklı bir şey oluyor bu. Güzel yemek yemek benim için önemli."
        },
        {
          q: "İlişkilerde \"denge\" kavramına nasıl bakıyorsunuz? Kendi alanınızı korumak ile bir hayatı paylaşmak arasındaki o çizgiyi nasıl yönetirsiniz?",
          a: "Ben ilişkilerde dengeyi, \"ben\"i kaybetmeden \"biz\" olabilmek olarak görüyorum. Kendi alanını korumak bir uzaklaşma değil, ilişkiye daha sağlıklı dönebilmek demektir. Bunu da en çok açık iletişim ve karşılıklı anlayış sağlıyor."
        },
        {
          q: "Sizce modern zamanda bir ilişkiyi \"gerçek\" kılan en temel değer nedir? Güven mi, tutku mu, yoksa ortak bir entelektüel zemin mi?",
          a: "Bence tek bir cevap yok ama temeli kesinlikle güven. Güven olmadan ne tutku sürdürülebilir oluyor ne de o entelektüel bağ derinleşebiliyor. Tutku ilişkiye enerji katar, ortak bir zihin dünyası da bağı besler; ama güven hepsinin taşıyıcı zemini. Güven varsa diğerleri zamanla büyüyebiliyor."
        },
        {
          q: "Zor bir set gününden sonra partnerinizin veya yakınlarınızın size nasıl yaklaşması ruhunuzu dinlendirir? Anlaşılmak mı istersiniz yoksa sessizlik mi?",
          a: "Aslında sadece onların yanında olmak bile bana yetiyor. Bazen derdimi onlara açmak ve eleştirilerini beklemek, bazen onların dertlerini dinleyip kendi dertlerimden uzaklaşmak, bazen de hiç konuşmadan sessizliği paylaşmak... Dediğim gibi, sadece onlarla beraber olmak bile beni dinlendiriyor."
        },
        {
          q: "Sosyal medyada ve ekranlarda herkesin birbirine benzemeye çalıştığı bir dönemdeyiz. Özgün kalabilmeyi nasıl başarıyorsunuz?",
          a: "Açıkçası özgün kalmayı bir \"çaba\"dan çok kendime dönmekle ilişkilendiriyorum. Herkesin birbirine benzediği bir yerde fark yaratmaya çalışmak yerine; neyi sevdiğimi, neye inanmadığımı net tutmak benim için daha önemli. Trendleri tamamen yok saymıyorum ama onların beni yönlendirmesine de izin vermiyorum. Kendi filtremden geçiriyorum. Bir de sosyal medyayla arama mesafe koymak önemli; sürekli maruz kalınca ister istemez etkileniyorsun. Sonuçta özgünlük, dışarıya ne gösterdiğinden çok içeride ne kadar net olduğunla ilgili. O netliği koruduğunda zaten doğal olarak ayrışıyorsun."
        },
        {
          q: "Setten eve döndüğünüzde, günün yorgunluğunu atmak için başvurduğunuz o ilk sessizlik anında ne yaparsınız?",
          a: "Çocuğum var, kedim. Zaten o kapıda başlıyor şikâyetlerine; onun dertlerini dinleyip kendiminkileri unutuyorum. Kendisi de oyuncudur. Onunla birkaç oyunumuz var, onları oynuyoruz; stres falan kalmıyor. Kalırsa da kendisi bu sefer benimle ilgileniyor, karnıma masajlar falan yapıyor. Eğer o izin verirse de Xbox'ım var; kardeşim ve kuzenlerimle beraber oyun oynuyoruz. Gerçi o biraz stres yapıyor ama kafamı dağıtmama yardımcı oluyor."
        },
        {
          q: "Seyahat etmeyi seviyorsunuz; ruhunuzu en çok doyuran yer bir metropol müdür, yoksa doğanın tam ortasında bir inziva mı?",
          a: "Yeni mekânlar görmeyi, hikâyeler dinlemeyi seviyorum; o yüzden öyle bir ayrımım yok. Aslında ruh halime göre değişiyor. Sadece nereye gidersem gideyim turist gibi değil, yerel biriymiş gibi vakit geçirmeye çalışıyorum. O yüzden yeni bir yer göreceksem kısa değil, uzun kalmak isterim orada."
        },
        {
          q: "Aytek Şayan'ın bir günü nasıl başlar? Sabah rutininizde vazgeçilmez olan o ilk adım nedir?",
          a: "Günüm genelde sakin bir başlangıçla başlıyor. Uyanır uyanmaz telefona sarılmak yerine kendime birkaç dakika veriyorum; o kısa sessizlik anı günün tonunu belirliyor. Ardından su içmek ve hafif bir esneme ya da kısa bir egzersiz, hem zihnimi hem bedenimi açıyor. Yani vazgeçilmezim; güne acele etmeden ve kendimle temas ederek başlamak."
        },
        {
          q: "Sinema ve dizi sektörü hızla dijitalleşiyor. Siz bir oyuncu olarak bu hıza nasıl ayak uyduruyorsunuz?",
          a: "Bu hızın içinde kalmanın yolu, değişime direnmek yerine onu anlamaya çalışmak. Dijitalleşme aslında oyunculuk açısından yeni anlatım biçimleri ve daha geniş izleyiciyle buluşma imkânı demek. Benim için önemli olan, teknolojinin getirdiği yenilikleri takip ederken hikâye anlatma özünü kaybetmemek. Kamera değişiyor, platform değişiyor ama karakteri doğru kurmak, sahici kalmak hâlâ en temel şey. O dengeyi korumaya çalışıyorum."
        },
        {
          q: "Gelecekte bir gün \"bu hikâyeyi ben anlatmalıyım\" diyerek kamera arkasına geçme planınız var mı?",
          a: "Bir planım yok ama bir isteğim var. Kendi yazdığım bir hikâyeyi çekmek isterim, umarım bir gün olur. Bunun için ekstra bir plana ihtiyacım var mı bilmiyorum; ben zaten hayatımı ve yaptığım işi bir yaşam şekline dönüştürdüğüm için yarın aklıma eserse yapebilirim, denerim yani ne olacak."
        },
        {
          q: "Son olarak; WS Men okurlarına ve sizi takip eden genç yeteneklere, kendi potansiyellerini keşfetmeleri için verebileceğiniz en samimi tavsiye nedir?",
          a: "Benim için buradaki en önemli soru bu. Yıllardır kendimce, kendi alanımda arkadaşlarımla bu mesleği yapan gençlere ulaşmaya, onlarla tanışmaya çalışıyorum. Sadece onlara bir şeyler söylemek için değil, onların ne anlattığını dinlemek ve onlardan öğrenmek için yapıyorum bunu. Daha önce de iki kez arkadaşlarımla festival düzenlemiştik, şimdi de Kısalar Festivali'ni düzenliyoruz. Sağ olsun DasDas da bize sahnelerini kullanma izni vererek destek oluyor. Öncelikle herkesle ve özellikle tüm gençlerle oradaki buluşmayı çok isterim; kendi hikâyelerini anlatan bu gençleri dinlemelerini isterim. Aslında gençlere bir şeyler demekten ziyade, öncelikli olarak onların dinlenmesi gerektiğini söyleyerek cevap vermek istedim. Onlara tek diyebileceğim; \"Başka bir dünya mümkün.\" Hayal etmeye, üretmeye devam edin. İnsana ve doğaya değer verin, saygı duyun. Ve mutlaka bir kere Don Kişot'u okuyun."
        }
      ]
    },
    {
      id: 3,
      type: 'written',
      source: 'GAGETE',
      date: '29 MAYIS 2026',
      title: 'Canlı, Sahici ve Cesur Bir Arayış: Kısalar Festivali',
      summary: 'Aytek Şayan, tiyatroda bağımsız ekiplere alan açan Kısalar Festivali’nin doğuş motivasyonunu, bu yılın kilit temalarını ve kısa formun taşıdığı yoğun sahne vaadini anlatıyor.',
      qaList: [
        {
          q: "Kısalar Festivali'nin ilk çıktığı yıldan beri takip ediyoruz. Öncelikle hangi motivasyonla başladığınızı çok merak ediyoruz.",
          a: "Kısalar Festivali, aslında sahne sanatları alanında Üretim yapanlara daha fazla alan açma ihtiyacından doğdu. Tiyatroda üretmek isteyen çok fazla genç, bağımsız ekip ve yeni fikir var ama bu fikirlerin seyirciyle buluşabileceği alanlar her zaman yeterince fazla değil. Biz de kısa formun bu anlamda çok güçlü bir imkân sunduğunu düşündük. Kısa oyun ya da kısa performans, hem üretici için daha ulaşılabilir bir alan açıyor hem de seyirciye aynı gün içinde farklı dünyalarla karşılaşma şansı veriyor. Festivalin ilk motivasyonu; yeni metinlere, yeni sahne dillerine, genç Üreticilere ve bağımsız topluluklara görünürlük kazandırmaktı."
        },
        {
          q: "", 
          a: "Bir diğer motivasyonumuz ise şehirde gerçek anlamda festival hissi yaratan bir buluşma alanı kurmaktı. Tiyatronun sadece sahnede başlayıp biten bir deneyim olmadığını düşünüyoruz. Bu yüzden gün boyu oyunların izlendiği, söyleşilerin yapıldığı; insanların yalnızca oyun izlemek için değil, tiyatro ekseninde insanı, hayatı, geçmişi ve geleceği konuşabilmek için de bir araya geldiği canlı bir alan yaratmak istedik."
        },
        {
          q: "Tiyatronun biraz nefes alması, sahne sanatlarında yer bulamayan gençlerin ya da toplulukların biraz daha görünür olması için şahane fırsat. Peki özetle sahne sanatlarına gönül verenler Kısalar Festivali'nde neden olmalı?",
          a: "Çünkü Kısalar Festivali yalnızca oyun izlenen bir yer değil; izlenen işlerin üzerine konuşulan, üreticiyle seyircinin aynı zeminde buluşabildiği önemli bir deneyim alanı. Bizim için festivalin en önemli taraflarından biri de bu söyleşi ve paylaşım kısmı. Bir oyunun sahnelenmesi kadar, o oyunun ardından sanatçının kendi üretim sürecini, derdini, arayışını ve sorularını seyirciyle paylaşabilmesi de çok kıymetli."
        },
        {
          q: "",
          a: "Bu, özellikle genç üreticiler ve bağımsız topluluklar için önemli bir görünürlük alanı yaratıyor. Çünkü sahnede yalnızca sonuç izlenmiyor; o sonuca giden düşünce, emek ve arayış da görünür hâle geliyor. Seyirci ise izlediği işle daha doğrudan bir ilişki kurabiliyor; sanatçı da işinin karşılığını yalnızca alkışla değil, soru, yorum ve gerçek bir temasla alabiliyor."
        },
        {
          q: "",
          a: "Sahne sanatlarına gönül veren herkesin burada olma sebebi bence biraz da bu. Kısalar Festivali'nde bazen tamamlanmış bir işle, bazen çok güçlü bir fikirle, bazen de ileride büyüyebilecek bir sahne diliyle karşılaşıyoruz. Bu karşılaşmalar yalnızca sanatçıları değil, seyircileri de görünür kılıyor. Seyircinin düşüncesi, hissi, sorusu ve tanıklığı da festivalin parçası oluyor. Böylece tiyatro sahnede başlayıp biten bir şey olmaktan çıkıyor; birlikte konuşulan, tartışılan ve çoğalan bir deneyime dönüşüyor."
        },
        {
          q: "Her sene bir konsept ve kilit temalarla başlıyor festival. Peki bu sene bizi neler bekliyor? Temalar nasıl oluşturuldu?",
          a: "Bu yıl temalarımızı bugünün dünyasında bizi en çok meşgul eden meselelerden yola çıkarak oluşturduk. Kimlik ve aidiyet, kırılgan köprüler, modern oburluk, çevresel kıyamet ve neşeli direniş gibi başlıklar var. Bunların her biri farklı gibi görünse de aslında birbirine temas eden alanlar. Bugün hepimiz bir biçimde 'Ben nereye aitim?', 'Neyle bağ kuruyorum?', 'Neyi tüketiyorum?', 'Neye direniyorum?' gibi sorularla yaşıyoruz. Bu yılki seçkide de bu soruların çok farklı biçimlerde sahneye taşındığını göreceğiz."
        },
        {
          q: "",
          a: "Metin tiyatrosundan performansa, fiziksel tiyatrodan dansa, dijital ve interaktif işlere kadar geniş bir yelpaze olacak. Temaları belirlerken özellikle üreticileri sınırlamak değil, onlara bir düşünme alanı açmak istedik. Yani tema bizim için bir kalıp değil, daha çok bir davet. Her başvuru sahibinin bu temaları kendi diliyle, kendi dünyasıyla ilişkilendirmesi bizim için çok kıymetliydi."
        },
        {
          q: "Sahneye koyulacak gösteriler nasıl seçiliyor? Bu bağlamda bir öneriniz ya da söylemek istediğiniz bir șey var mı?",
          a: "Seçim sürecinde birkaç noktaya birlikte bakıyoruz. Öncelikle işin seçtiği tema ile nasıl ilişki kurduğuna dikkat ediyoruz. Sadece temayı başlık olarak seçmiş olması yeterli değil; o temanın nasıl düşünüldüğü, sahneye nasıl taşındığı ve Üreticinin kendi diliyle nasıl ilişkilendirildiği bizim için önemli. Bunun yanında metnin ya da performans fikrinin sahne vaadine, özgünlüğüne, anlatım gücüne ve festival programı içindeki yerine bakıyoruz. Bazen çok iyi yazılmış bir metin öne çıkıyor, bazen çok güçlü bir sahne fikri, bazen de daha deneysel ama festivalin ruhuna çok iyi oturan bir iş dikkatimizi çekiyor."
        },
        {
          q: "",
          a: "Tabii seçim süreci her zaman kolay olmuyor. Çünkü başvurular arasında çok emek verilmiş, kendi arayışı olan, farklı nedenlerle değerli bulduğumuz işler de oluyor. Festivalin süresi, program dengesi, teknik koşullar ve o yılın genel dramaturjik hattı nedeniyle her iyi fikre yer açmak mümkün olmayabiliyor. Bu yüzden seçkiye girememek, bir işin değersiz olduğu anlamına gelmiyor."
        },
        {
          q: "",
          a: "Bir diğer önemli noktada șu, kısa form az düşünmek anlamına gelmiyor. Tam tersine, çok yoğun ve net düşünmeyi, ama aynı zamanda hızlıca eyleme geçebilmeyi gerektiriyor. Derdini bilen, sahneyle gerçekten ilişki kuran ve kendi dilini arayan işler bizi her zaman heyecanlandırıyor. Kusursuzluk aramıyoruz; canlı, sahici ve cesur bir arayış görmek istiyoruz."
        }
      ]
    },
    {
      id: 4,
      type: 'written',
      source: 'DİJİTAL BASIN // 15 SORU',
      date: '12 NİSAN 2023',
      title: '15 Soruda Aytek Şayan: "Sadece \'Yapmaya\' Başlamak Gerek"',
      summary: '2013 Bilkent mezunu Aytek Şayan; rol aldığı tarihi dizilerden "Bana Karanlığını Anlat" filmindeki İmam karakterine, kariyerinin en komik anısı olan \'boş tepsi\' hikayesinden kedisi Çuval adına kurduğu \'Çuvalizm\' kavramına kadar hakkında merak edilen 15 soruyu yanıtlıyor.',
      qaList: [
        {
          q: "Son projenizde canlandırdığınız karakteri özetleyecek beş anahtar kelime?",
          a: "En son Attila’da çalışmıştım. Canlandırdığım Attila hırslı, acımasız, idealist, planlı ve zeki bir karakter."
        },
        {
          q: "Canlandırdığınız karakterin tek bir özelliğine sahip olacaksınız; hangisini seçerdiniz?",
          a: "Çok planlı bir insan değilim o nedenle Attila gibi daha planlı olmayı seçerdim."
        },
        {
          q: "Oynadığınız diziyi, filmi veya tiyatro oyununu bir yemek, canlandırdığınız karakteri de malzemelerden biri olarak düşünecek olursanız; projeyi hangi yemeğe benzetirsiniz ve karakteriniz olmasa hangi malzeme eksik olurdu?",
          a: "Bu soruyu en son Netflix’te yayınlanan filmimiz “Bana Karanlığını Anlat” üzerinden cevaplamak isterim. Hangi yemek olduğunu seçmek zor ama karakterim filmin tuzu, biberi benim için."
        },
        {
          q: "İlk audition’ınızı hatırlıyor musunuz; nasıl geçmişti?",
          a: "Hatırlıyorum, eğlenceli geçmişti. Ben auditionları küçük birer gösteri gibi değerlendiriyorum ve bana ayrılan o sürede keyif almaya bakıyorum."
        },
        {
          q: "Bugüne kadar oynarken yaptığınız en komik hata nedir?",
          a: "Hayatımda ikinci kez kamera karşısındaydım. Kalabalık bir sahneydi. Diğer oyuncular bir odada oturuyorlar ben de elimde tepsiyle girip çay, kahve dağıtacağım. Benim içeri girmemin bir zamanlaması var onu yakalamam gerek. Birkaç kere çektik olmadı, tabi kahveler çaylar arka tarafta yenileniyor her seferinde. Neyse en son işte “OLMADI, BİR DAHA” dendi. Ben hemen arkaya koştum kahveleri çayları yenileyebilsinler diye ama bu işi yapan arkadaş orda yok. Hemen eskileri suya tutayım diye tepsiden indirdim, reji “OYUN” dedi. Napayım ne edeyim derken “HADİ GİRİYOSUN” dediler. Tepsi boş… Ben de tiyatrodan gelen bir refleksle tepsim doluymuş gibi içeri girdim. İlk 20 saniye kimse anlamadı, ben baya çay kahve dağıtıyorum, -MIŞ gibi. İşin ilginci diğerleri de alıyor benim hayali çayları… En son tabi yönetmenimiz olayı fark etti, hep beraber güldük."
        },
        {
          q: "Şu an/son olarak oynadığınız dizide, filmde veya tiyatro oyununda sizin ya da başka bir karakterin söylediği, en sevdiğiniz replik nedir?",
          a: "Şu an bir oyunda oynamıyorum ama bu soru bağlamında aklıma ilk gelen replik daha önce oynadığım bir tiyatro oyunundan: “Bütün hayvanlar eşittir ama bazıları daha eşittir.”"
        },
        {
          q: "Bir bölümlüğüne/sahneliğine oynadığınız herhangi bir işteki karakterinizi ekipten başkası canlandıracak. Kimi o rolde görmek isterdiniz? Aynı şekilde siz de başka bir karakteri oynayacaksınız. Hangisini seçerdiniz? (Yaş, cinsiyet vb. etmenleri düşünmeden)",
          a: "Açıkçası oynadığım rollerden herhangi biri için oyuncu arkadaşlarımdan kimse aklıma gelmiyor ama içinde yer aldığım işlerden birinde Hasan Sabah vardı. Onu oynamak isterdim, hakikaten ilgi çekici bir tarihi kişilik. Hasan Sabah’ı seçmemin bir nedeni de bugüne kadar doğru kaynaklar ele alınarak anlatıldığını düşünmemem."
        },
        {
          q: "Ergenliğinize döndük; sevdiğiniz bir ünlünün fotoğrafını tişörte bastıracaksınız. Bu kim olurdu? (Yerli/yabancı fark etmez)",
          a: "“Geleceğe Dönüş”teki Marty karakteriyle Michael J. Fox veya “Maske” filmindeki haliyle Jim Carrey."
        },
        {
          q: "Karşınızda zaman makinesi var; hangi dönemde, hangi şehre ışınlanmak isterdiniz?",
          a: "Fransız Devrimi / Paris-Bastille."
        },
        {
          q: "Bugüne kadarki en büyük çılgınlığınız nedir?",
          a: "Yani düşündüğümde “çılgınlık” diye hatırladığım bir şey yok ama hemen bir tane edineceğim :)"
        },
        {
          q: "Hangi dizileri takip ediyorsunuz ve onları izlerken yanında yemesem olmaz dediğiniz abur cuburlar neler?",
          a: "Bu aralar “Last Of Us”ı takip ediyorum, abur cuburlarla aram yok. İzlerken atıştırmak pek adetim değil ama meyve yiyorum öyle zamanlarda."
        },
        {
          q: "Güne bir kitabın dünyasında başlayacaksınız; öğlen bir dizinin, akşamı da bir filmin dünyasında geçireceksiniz. Hangilerini seçerdiniz?",
          a: "Sabah: “Don Kişot”, öğlen: “Rick and Morty”, geceler zaten hep “Inception”."
        },
        {
          q: "Oyunculuğun en çekilir ve çekilmez yanları nelerdir?",
          a: "Oyunculuk hakikaten eğlenceli. Sevdiğim işi yapıyorum ve mesleğini seven herkesin eğlendiği kadar ben de eğleniyorum. Ama beklemek çok zor."
        },
        {
          q: "Kapitalizm, feminizm, sosyalizm, elitizm... Hadi, bunların yanına bir tane de siz yepyeni bir “-izm”li kavram ekleyin.",
          a: "O kadar çok “-izm” var ki bir tane de ben eklemeyi tercih etmem. Ama illa bir “-izm” olacaksa, çok tatlı bir kedim var, adı Çuval. Çuvalizm olsun, zaten kendisiyle tanışanlar da katıldı bu Çuvalizm’e."
        },
        {
          q: "İnsan tabiatı gereği kendini ciddi anlamda eleştirirken zorlanır. Çünkü nedenini herkesten iyi bildiği için hep o noktalara sığınır. Ben bu soruyu kime sorduğumu bilmiyorum ancak diğer oyunculara ve okurlara bir mesaj olması açısından kendinde ‘tamamlanabilir bir eksiklik’ gördüğün şeyi nedeniyle birlikte anlatır mısın?",
          a: "İnsan kendini eleştirirken zorlanır mı bilmiyorum. Ama eleştiri dinlerken veya eleştirdiği şeyleri değiştirmeye çalışırken zorlanıyor. Onu biliyorum. Ben daha eylemsel olmaya çalışıyorum. Özellikle benim için önemli olan konulardaki düşüncelerimi eyleme geçiremediğim için çok eleştiriyorum kendimi. Nedenini sordunuz, zaten bu nedenleri düşünürken kaybolup eyleme geçemiyor insan. O yüzden kabul edilebilir bir nedeni yok sanırım. Sadece “yapmaya” başlamak gerek."
        }
      ]
    },
    {
      id: 5,
      type: 'video',
      source: 'YOUTUBE // HÜRRİYET',
      date: '24 NİSAN 2026',
      title: 'Sıkı Muhabbet: "İntikam Almakla Hiç Uğraşamam"',
      summary: 'Hakan Gence ile gerçekleştirilen bu detaylı röportajda; Taşacak Bu Deniz dizisindeki Şerif karakterinin derinlikleri, sokaktan gelen ilginç tepkiler ve oyunculuk kariyerindeki dönüm noktaları masaya yatırılıyor.',
      videoUrl: 'https://youtu.be/r-NlIwWIiFk?si=wcI2uJ61N165xRKV'
    },
    {
      id: 6,
      type: 'video',
      source: 'INSTAGRAM // REEL',
      date: '10 NİSAN 2026',
      title: 'Sosyal Medya Özel: Karakter ve Sahne Uyumu',
      summary: 'Dijital dünyada geniş yankı uyandıran, çarpıcı bakışların ve sahne enerjisinin ön plana çıkarıldığı özel video edit/performans kesiti.',
      videoUrl: 'https://www.instagram.com/reel/DW8-bSfD512/?igsh=YjI2dXdycXRmZDJ0'
    },
    {
      id: 7,
      type: 'video',
      source: 'YOUTUBE // TRT WORLD',
      date: '8 MART 2026',
      title: 'Behind Turkish Series: Trabzon Set Arkası',
      summary: 'Trabzon\'un eşsiz coğrafyasında çekilen projenin uluslararası belgeseli. Yabancı izleyiciler için set arkası atmosferi ve İngilizce destekli tanıtım görüntüleri.',
      videoUrl: 'https://youtu.be/VhlpbTi8Dz8?si=mlFgB_mEBu2Fajix'
    },
    {
      id: 8,
      type: 'video',
      source: 'YOUTUBE // TİMECODE',
      date: '11 ARALIK 2025',
      title: 'Aytek Şayan\'a En Sevdiği Film ve Dizileri Sorduk',
      summary: 'Oyuncunun favori yönetmenlerini (David Lynch), sevdiği yerli yapımları (Sivas, Şahsiyet) ve global dizi tercihlerini (Succession) paylaştığı kısa ve keyifli soru-cevap kesiti.',
      videoUrl: 'https://youtube.com/shorts/zR-udIBVgU8?si=geJt6V2wHFRfIVxo'
    },
    {
      id: 9,
      type: 'video',
      source: 'YOUTUBE // BİRSEN ALTUNTAŞ',
      date: '6 ARALIK 2025',
      title: 'Güneşin Oğlu Galası: Şerif Karakteri Üzerine',
      summary: 'Tiyatro galasında muhabirlerin sorularını yanıtlayan oyuncunun, Şerif karakterinin ekranda yarattığı etki ve setteki aile ortamı hakkında verdiği samimi mini röportaj.',
      videoUrl: 'https://youtube.com/shorts/81OqsT36khw?si=7OGuCEO6a3VaRCWe'
    },
    {
      id: 10,
      type: 'video',
      source: 'INSTAGRAM // REEL',
      date: '10 TEMMUZ 2025',
      title: 'Kısalar Festivali: Festival Komitesi',
      summary: 'Kısalar Festivali Komitesi\'nden Aytek Şayan ile Kısalar Festivali üzerine sohbet.',
      videoUrl: 'https://www.instagram.com/reel/DL626TUN_Tp/'
    },
    {
      id: 11,
      type: 'video',
      source: 'YOUTUBE // EKOTÜRK TV',
      date: '10 HAZİRAN 2025',
      title: 'Tiyatro Sahnesinden Ekranlara Uzanan Yolculuk',
      summary: 'Veterinerlik fakültesini bırakıp Bilkent\'e geçişini, ilk tiyatro topluluğu deneyimlerini, fiziksel tiyatro felsefesini ve DasDas sahnelerindeki üretim sürecini anlattığı çok kapsamlı bir sohbet.',
      videoUrl: 'https://youtu.be/qnBRGnSrzbA?si=X5oN6RWMnqnYF9VT'
    },
    {
      id: 12,
      type: 'video',
      source: 'YOUTUBE // BANT MAG.',
      date: '17 OCAK 2024',
      title: 'Bant Mag. Soruyor, Kübra Ekibi Yanıtlıyor',
      summary: 'Kübra dizisinin oyuncu kadrosu ve Taylan Biraderler\'in bir araya geldiği bu söyleşide, karakter yaratım süreci ve hikayenin ruhsal, toplumsal altyapısı tartışılıyor.',
      videoUrl: 'https://youtu.be/Y54KFlvL9IA?si=bSsLZmYQp9rbTxBn'
    },
    {
      id: 13,
      type: 'video',
      source: 'YOUTUBE // MUHABİR ONLİNE',
      date: '17 OCAK 2024',
      title: 'Kübra Gala Gecesi: Oyuncular Anlatıyor',
      summary: 'Projenin merakla beklenen özel gösterim gecesinde, oyuncuların kırmızı halıda basın mensuplarının sorularını yanıtladığı ve dizinin mistik yapısına dair ipuçları verdiği anlar.',
      videoUrl: 'https://youtu.be/RmvcjDihYs4?si=5dLWCdPRaIOWll9Z'
    },
    {
      id: 14,
      type: 'video',
      source: 'YOUTUBE // BEYAZPERDE',
      date: '16 OCAK 2024',
      title: '"Kübra" Dizisi Özel Ekip Röportajı',
      summary: 'Dizinin felsefi boyutları, sokak isyanı sahnelerinin kamera arkası ve oyuncuların kendi karakterleriyle kurdukları bağlar üzerine detaylı sinema/dizi platformu sohbeti.',
      videoUrl: 'https://youtu.be/5ikXStztLec?si=Oy2VREAzEdJF1d6P'
    },
    {
      id: 15, 
      type: 'written',
      source: 'ÖZEL SÖYLEŞİ',
      date: '9 HAZİRAN 2026', 
      title: 'Şerif\'in Psikolojisi, Karadeniz\'in Zorlu Şartları',
      summary: 'Aytek Şayan, "Taşacak Bu Deniz" dizisinde canlandırdığı karakterin derinliğini, Karadeniz coğrafyasının zorlu ama etkileyici set koşullarını, rol arkadaşlarıyla olan güçlü bağını ve Brezilya kültürüne duyduğu merakı anlatıyor.',
      qaList: [
        {
          q: "Dizideki karakterinizin (Şerif) oldukça karanlık ve karmaşık bir yapısı var. Bu karakteri inşa ederken kötülük kavramına nasıl yaklaştınız?",
          a: "Amacım kötü bir adamı iyi göstermek ya da onun bir ‘insani yönü’ olduğunu söylemek değil. Ama şu soruyla yüzleşmemiz gerekiyor: Biz kötü mü doğuyoruz, yoksa sonradan mı kötü oluyoruz? Bir kötü karakterin insani tarafını göstermeye çalışmıyorum. Ben daha çok karakterlerin nasıl karikatürize edildiğiyle ilgileniyorum… ve aşırı derecede zalim olarak sunulmalarıyla. Yani böyle bir kötü karakter yaratmaya çalışmıyorum. Gerçek hayatta böyle insanlar yok. Aslında ‘kötü’ dediğimiz şey her zaman hemen fark edilebilen bir şey değildir. Bizi aldatan ve manipüle eden insanlar gerçekten kötüyse… onları gerçek hayatta tanımak zordur."
        },
        {
          q: "Dizinin görsel atmosferi ve mekanları sahnelerin hissiyatını inanılmaz artırıyor. Bu zorlu coğrafyada çalışmak süreci nasıl etkiliyor?",
          a: "Sürekli çok ağır sahneler çekiyoruz. Ayrıca çekim yaptığımız bölgenin doğal koşulları da her şeyi oldukça zorlaştırıyor. Ama tam da bu özellikler diziyi bu kadar etkileyici kılıyor. Bölgenin coğrafyası gerçekten büyük bir ağırlık taşıyor. Bazen çok zor oluyor; yamaçlarda, çamurun içinde çalışıyoruz. Yakın zamanda dört gün boyunca çok yoğun çalıştım. Birçok sahne örneği verebilirim ama geçen gün altı buçuk saat boyunca denizin içinde çekim yapmak zorunda kaldık. Bu günlerde çektiğimiz sahneler oldukça ağırdı."
        },
        {
          q: "Kamera önündeki bu ağır ve gerilimli atmosfere rağmen, set ortamınız ve oyuncu kadrosuyla aranızdaki dinamik nasıl?",
          a: "Birbirimizi çok seviyor ve saygı duyuyoruz. Ayrıca fırsat buldukça kamera arkasında da çok eğleniyoruz. İyi ki bu arkadaşlarla birlikteyim. Mesela Ulaş’ı ilk andan itibaren çok sevdim. Zaten onu önceden de çok seviyordum ve fırsat buldukça görüşüyorduk. Deniz’i tanıdığıma da çok memnunum. Sonuçta günümün büyük kısmını onunla, Abdü’yle geçiriyorum. Sürekli birlikteyiz, gerçekten hiç kavga etmeden. Bu arkadaşlarla burada çalıştığım için çok mutluyum."
        },
        {
          q: "Son olarak, uluslararası alanda, özellikle Brezilya'dan da çok tutkulu bir hayran kitleniz oluştu. Brezilya ve oradaki izleyiciler hakkında ne düşünüyorsunuz?",
          a: "Beni çok meraklandıran bir yer. Uzaktan gördüğüm kadarıyla insanlar çok sıcakkanlı görünüyor. Eğlenmeyi seviyorlar. Bir şekilde dünya siyasetini de biraz takip ediyorum ve yaşadıkları zorlukları görüyorum. Toplumdaki ayrışmaları, gruplar arasındaki uçurumları fark edebiliyorum. Ekonomik açıdan da bunu görebiliyorum. Bu yüzden merakımı uyandıran, ilginç ve farklı kültürlere sahip bir yer. Brezilya’ya gitmeyi gerçekten çok istiyorum."
        }
      ]
    },
    {
      id: 16, 
      type: 'video',
      source: 'YOUTUBE // PORTAL ENTRETETİZEİ',
      date: '9 HAZİRAN 2026', 
      title: 'Şerif\'in Psikolojisi, Set Ortamı ve Brezilya Hayali',
      summary: 'Aytek Şayan\'ın; Şerif karakterinin kötülük felsefesini, Karadeniz\'in zorlu çekim koşullarını, rol arkadaşlarıyla olan eğlenceli dinamiklerini ve Brezilya kültürüne duyduğu merakı anlattığı özel video röportajı.',
      videoUrl: 'https://youtu.be/dHMEj6ao7_M?si=u0ppuZQAKmMrbRHL'
    },
    {
      id: 17, 
      type: 'video',
      source: 'YOUTUBE // FRAGMAGAZIN',
      date: '6 HAZİRAN 2026', 
      title: 'Konser Heyecanı ve Sezon Finali',
      summary: 'Katıldığı bir konser öncesinde magazin basınının sorularını yanıtlayan Aytek Şayan; rol arkadaşı Burcu Cavrar\'ı sahnede izleme heyecanını ve dizinin başarılı geçen sezon finali hakkındaki düşüncelerini paylaşıyor.',
      videoUrl: 'https://youtu.be/tMWRDI4zsiY?si=z_QYqHT_k0rsLthm'
    }
  ];

  const parseDate = (dateString) => {
    if (!dateString) return new Date(); 
    const months = {
      'OCAK': 0, 'ŞUBAT': 1, 'MART': 2, 'NİSAN': 3, 'MAYIS': 4, 'HAZİRAN': 5,
      'TEMMUZ': 6, 'AĞUSTOS': 7, 'EYLÜL': 8, 'EKİM': 9, 'KASIM': 10, 'ARALIK': 11
    };
    const parts = dateString.split(' ');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = months[parts[1].toUpperCase()];
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date(0); 
  };

  const getReadingTime = (item) => {
    if (item.type !== 'written' || !item.qaList) return null;
    const wordCount = item.qaList.reduce((sum, block) => {
      const qWords = block.q ? block.q.split(/\s+/).length : 0;
      const aWords = block.a ? block.a.split(/\s+/).length : 0;
      return sum + qWords + aWords;
    }, 0);
    return Math.max(1, Math.round(wordCount / 200));
  };

  const matchesSearch = (item, query) => {
    if (!query.trim()) return true;
    const q = query.trim().toLocaleLowerCase('tr-TR');
    return (
      item.title.toLocaleLowerCase('tr-TR').includes(q) ||
      item.summary.toLocaleLowerCase('tr-TR').includes(q) ||
      item.source.toLocaleLowerCase('tr-TR').includes(q)
    );
  };

  const filteredInterviews = interviewData
    .filter(item => {
      if (filter !== 'all' && item.type !== filter) return false;
      return matchesSearch(item, searchQuery);
    })
    .sort((a, b) => {
      const diff = parseDate(b.date) - parseDate(a.date);
      return sortOrder === 'newest' ? diff : -diff;
    });

  const toggleExpand = (id) => {
    const willExpand = expandedId !== id;
    setExpandedId(willExpand ? id : null);
    if (willExpand) {
      setTimeout(() => {
        cardRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div className="press-editorial-wrapper animate-fade">
      
      <style>{`
        .press-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .filter-link {
          background: transparent;
          border: 1px solid rgba(84, 107, 65, 0.3);
          color: var(--accent-dark);
          padding: 0.6rem 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .filter-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.15);
        }

        .filter-link.active {
          background: var(--accent-dark);
          color: var(--bg-main);
          border-color: var(--accent-dark);
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.2);
        }

        .press-toolbar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .press-search-input {
          width: 100%;
          max-width: 340px;
          padding: 0.7rem 1.1rem;
          border-radius: 30px;
          border: 1px dashed rgba(84, 107, 65, 0.4);
          background: transparent;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--accent-dark);
          outline: none;
          transition: border-color 0.2s ease;
        }

        .press-search-input:focus { border-color: var(--accent-dark); border-style: solid; }
        .press-search-input::placeholder { color: rgba(84, 107, 65, 0.5); }

        .sort-toggle-btn {
          background: transparent;
          border: 1px solid rgba(84, 107, 65, 0.3);
          color: var(--accent-dark);
          padding: 0.6rem 1.1rem;
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 30px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .sort-toggle-btn:hover { border-color: var(--accent-dark); background: rgba(84, 107, 65, 0.05); }

        .press-result-count {
          text-align: center;
          font-size: 0.8rem;
          opacity: 0.6;
          font-family: monospace;
          margin-bottom: 2rem;
        }

        .reading-time-badge {
          font-size: 0.72rem;
          opacity: 0.6;
          font-family: monospace;
          margin-left: 0.7rem;
        }

        .press-archive-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .press-archive-card {
          position: relative;
          background: linear-gradient(145deg, var(--bg-main) 0%, rgba(84, 107, 65, 0.02) 100%);
          border: 1px solid rgba(84, 107, 65, 0.15);
          padding: 2.5rem;
          border-radius: 8px;
          border-left: 5px solid var(--accent-dark);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          scroll-margin-top: 100px;
        }

        .press-archive-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(84, 107, 65, 0.12);
          border-color: rgba(84, 107, 65, 0.3);
        }

        .press-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-heading);
          font-weight: bold;
          margin-bottom: 1.5rem;
          border-bottom: 1px dashed rgba(84, 107, 65, 0.2);
          padding-bottom: 0.8rem;
        }

        .press-source {
          background: rgba(84, 107, 65, 0.1);
          color: var(--accent-dark);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          letter-spacing: 1px;
        }

        .press-date {
          font-size: 0.8rem;
          color: var(--accent-light);
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        .press-card-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--accent-dark);
          margin: 0 0 1.2rem 0;
          line-height: 1.35;
          letter-spacing: -0.5px;
        }

        .press-archive-summary {
          font-size: 1rem;
          line-height: 1.7;
          opacity: 0.85;
          margin-bottom: 2rem;
        }

        .editorial-link-btn {
          background: transparent;
          border: 1px solid var(--accent-dark);
          color: var(--accent-dark);
          padding: 0.8rem 1.5rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: bold;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .editorial-link-btn:hover {
          background: var(--accent-dark);
          color: var(--bg-main);
          box-shadow: 0 5px 15px rgba(84, 107, 65, 0.2);
        }

        .editorial-link-btn-anchor {
          display: inline-block;
          background: var(--accent-dark);
          color: #fff;
          text-decoration: none;
          padding: 0.8rem 1.8rem;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: bold;
          border-radius: 4px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(84, 107, 65, 0.15);
        }

        .editorial-link-btn-anchor:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(84, 107, 65, 0.25);
        }

        .press-full-text-area {
          margin-top: 2rem;
          padding: 2rem;
          background: rgba(84, 107, 65, 0.02);
          border: 1px solid rgba(84, 107, 65, 0.08);
          border-radius: 8px;
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.02);
        }

        .qa-block-unit {
          margin-bottom: 2rem;
        }

        .interview-question {
          font-style: italic;
          color: var(--accent-dark);
          line-height: 1.6;
          border-left: 3px solid var(--accent-light);
          padding: 1rem 1.2rem;
          background: rgba(84, 107, 65, 0.05);
          border-radius: 0 8px 8px 0;
          margin-bottom: 1rem;
        }

        .interview-answer {
          line-height: 1.7;
          opacity: 0.9;
          padding-left: 1.4rem;
          border-left: 3px solid transparent;
        }
      `}</style>

      <div className="container" style={{ paddingBottom: '5rem' }}>
        
        <div className="section-header-editorial" style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '0', marginTop: '-3rem' }}>
          <span className="archive-badge" style={{ display: 'inline-block', marginBottom: '1rem' }}>// BASIN SİCİLİ & SÖYLEŞİLER</span>
          <h1 className="editorial-title" style={{ fontSize: '3rem' }}>MEDYA ARŞİVİ</h1>
          <p className="editorial-subtitle">Yazılı basın röportajları, dijital söyleşiler ve doğrulanmış kayıt dokümanları.</p>
        </div>

        <div className="press-filters">
          <button className={filter === 'all' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('all'); setExpandedId(null); }}>TÜM KAYITLAR</button>
          <button className={filter === 'written' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('written'); setExpandedId(null); }}>YAZILI BASIN</button>
          <button className={filter === 'video' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('video'); setExpandedId(null); }}>VİDEO KAYITLARI</button>
        </div>

        <div className="press-toolbar">
          <input
            type="text"
            className="press-search-input"
            placeholder="Başlık, kaynak veya konu ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="sort-toggle-btn"
            onClick={() => setSortOrder(prev => prev === 'newest' ? 'oldest' : 'newest')}
          >
            {sortOrder === 'newest' ? '↓ EN YENİ' : '↑ EN ESKİ'}
          </button>
        </div>

        <p className="press-result-count">{filteredInterviews.length} kayıt bulundu</p>

        <div className="press-archive-grid">
          {filteredInterviews.length === 0 && (
            <p style={{ textAlign: 'center', opacity: 0.6, fontFamily: 'monospace' }}>
              // Aramanızla eşleşen bir kayıt bulunamadı.
            </p>
          )}

          {filteredInterviews.map((item) => {
            const readingTime = getReadingTime(item);
            return (
            <div
              key={item.id}
              className={`press-archive-card ${item.type}`}
              ref={(el) => (cardRefs.current[item.id] = el)}
            >
              
              <div className="press-card-meta">
                <span className="press-source">{item.source}</span>
                <span className="press-date">{item.date}</span>
              </div>
              
              <h3 className="press-card-title">
                {item.title}
                {readingTime && <span className="reading-time-badge">~{readingTime} dk okuma</span>}
              </h3>
              <p className="press-archive-summary">{item.summary}</p>

              {item.type === 'written' ? (
                <div className="written-expand-container">
                  <button className="editorial-link-btn" onClick={() => toggleExpand(item.id)}>
                    <span>{expandedId === item.id ? 'DOSYAYI KAPAT' : 'SÖYLEŞİNİN TAM METNİNİ OKU'}</span>
                    <span>{expandedId === item.id ? '↑' : '↓'}</span>
                  </button>
                  
                  {expandedId === item.id && (
                    <div className="press-full-text-area animate-fade">
                      {item.qaList.map((block, idx) => (
                        <div key={idx} className="qa-block-unit">
                          {block.q && (
                            <div className="interview-question">
                              <strong>GAZETECİ:</strong> {block.q}
                            </div>
                          )}
                          <div className="interview-answer">
                            <strong>AYTEK ŞAYAN:</strong> {block.a}
                          </div>
                        </div>
                      ))}
                      {item.originalLink && (
                        <div style={{ marginTop: '2.5rem', textAlign: 'right', borderTop: '1px dashed rgba(84,107,65,0.2)', paddingTop: '1.5rem' }}>
                          <a href={item.originalLink} target="_blank" rel="noreferrer" className="editorial-link-btn-anchor" style={{ background: 'transparent', color: 'var(--accent-dark)', border: '1px solid var(--accent-dark)', boxShadow: 'none' }}>
                            ORİJİNAL KAYNAĞA GİT ↗
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.videoUrl} target="_blank" rel="noreferrer" className="editorial-link-btn-anchor">
                  GÖRÜNTÜLÜ KAYDI İNCELE ↗
                </a>
              )}

            </div>
          );})}
        </div>

      </div>
    </div>
  );
}

export default PressInterviews;
