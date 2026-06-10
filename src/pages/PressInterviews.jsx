import React, { useState } from 'react';

function PressInterviews() {
  const [filter, setFilter] = useState('all'); 
  const [expandedId, setExpandedId] = useState(null); 

  const interviewData = [
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

  // Ayları JavaScript'in anlayacağı bir sayıya çeviren yardımcı fonksiyon
  const parseDate = (dateString) => {
    if (!dateString) return new Date(); // Eğer tarih yoksa en üste at
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
    return new Date(0); // Format uyuşmazsa en sona at
  };

  // Önce filtrele, sonra tarihe göre (en yeni en üstte) sırala
  const filteredInterviews = interviewData
    .filter(item => {
      if (filter === 'all') return true;
      return item.type === filter;
    })
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="press-editorial-wrapper animate-fade">
      <div className="container">
        
        <div className="section-header-editorial">
          <span className="archive-badge">// BASIN SİCİLİ & SÖYLEŞİLER</span>
          <h1 className="editorial-title">MEDYA ARŞİVİ</h1>
          <p className="editorial-subtitle">Yazılı basın röportajları, dijital söyleşiler ve doğrulanmış kayıt dökümanları.</p>
        </div>

        <div className="press-filters">
          <button className={filter === 'all' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('all'); setExpandedId(null); }}>TÜM KAYITLAR</button>
          <button className={filter === 'written' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('written'); setExpandedId(null); }}>YAZILI BASIN</button>
          <button className={filter === 'video' ? 'filter-link active' : 'filter-link'} onClick={() => { setFilter('video'); setExpandedId(null); }}>VİDEO KAYITLARI</button>
        </div>

        <div className="press-archive-grid">
          {filteredInterviews.map((item) => (
            <div key={item.id} className={`press-archive-card ${item.type}`}>
              
              <div className="press-card-meta">
                <span className="press-source">{item.source}</span>
                <span className="press-date">{item.date}</span>
              </div>
              
              <h3 className="press-card-title">{item.title}</h3>
              <p className="press-archive-summary">{item.summary}</p>

              {item.type === 'written' ? (
                <div className="written-expand-container">
                  <button className="editorial-link-btn" onClick={() => toggleExpand(item.id)}>
                    {expandedId === item.id ? '↑ DOSYAYI KAPAT' : '→ SÖYLEŞİNİN TAM METNİNİ OKU'}
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
                    </div>
                  )}
                </div>
              ) : (
                <a href={item.videoUrl} target="_blank" rel="noreferrer" className="editorial-link-btn-anchor">
                  → GÖRÜNTÜLÜ KAYDI İNCELE ↗
                </a>
              )}

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default PressInterviews;