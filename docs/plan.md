# AYTEK ŞAYAN - DİJİTAL ARŞİV VE FAN PROJESİ (V1.0)
**Proje Durumu:** Aktif Geliştirme

Bu doküman, projenin tasarım dilini, sayfa mimarisini, tamamlanan modüllerini ve teknik altyapısını içermektedir.

## 1. GÖRSEL KİMLİK (RENK PALETİ)

**Açık Tema (Varsayılan):**
* **Ana Arka Plan (`#FFF8EC`):** Sıcak Krem/Fildişi.
* **Kart Arka Planı (`#DCCCAC`):** Kum Bej.
* **Vurgu / Accent Açık (`#99AD7A`):** Adaçayı Yeşili (linkler, ikincil vurgular).
* **Vurgu / Accent Koyu (`#546B41`):** Koyu Zeytin Yeşili (başlıklar, butonlar).
* **Metin Rengi (`#546B41`):** Koyu Zeytin Yeşili.

**Karanlık Mod (`body.dark-mode` ile aktifleşir):**
* **Ana Arka Plan (`#000000`):** Saf Siyah.
* **Kart Arka Planı (`#111111`):** Neredeyse Siyah Gri.
* **Vurgu / Accent Koyu (`#FFFFFF`):** Saf Beyaz (başlıklar, vurgular).
* **Vurgu / Accent Açık (`#999999`):** Orta Gri (ikincil detaylar).
* **Metin Rengi (`#FFFFFF`):** Saf Beyaz.

**Tipografi:**
* **Başlık Fontu:** Montserrat (600/700/800)
* **Gövde Fontu:** Inter (400/500)
* **Biyografi/El Yazısı Fontu:** Caveat (400/500/600)

---

## 2. TAMAMLANAN MODÜLLER VE SAYFA MİMARİSİ

### A. ANA SAYFA (DASHBOARD)
* **Sayaç Sistemleri:** Doğum Günü (DG) sayacı ve Yeni Bölüme Kalan Süre sayacı.
* **Hero Alanı:** Sabit portre ve altında karşılama metni.
* **Dinamik İçerik:** Manuel olarak güncellenen "Haber Bülteni".
* **Hızlı Bakış:** Ana sayfa kronoloji modülü.
* **Günlük Seri Takibi:** Kullanıcının art arda kaç gün siteyi ziyaret ettiğini gösteren rozet sistemi.
* **Footer (İletişim):** Resmi hesaplar ve fan hesabı iletişim kanallarının ayrı ayrı kategorilendirildiği alt bilgi alanı.

### B. KARİYER VE SİCİL (CORE BİLEŞENLER)
* **Biyografi:** Kapsamlı yaşam ve kariyer yolculuğu.
* **Filmografi:** Dizi ve sinema projelerinin dökümü.
* **Tiyatro Envanteri:** 2014'ten günümüze aktif sahne performansları, oyun özetleri ve dinamik fotoğraflar.
* **Basın & Söyleşiler:** Röportajların ve basında çıkan haberlerin arşivi.
* **Ödüller:** Kazanılan ödüller, adaylıklar ve kariyer kilometre taşları.
* **Arşiv Sicil Kayıtları:** Arama ve kategori filtreleme destekli haber/gelişme arşivi.

### C. MEDYA DEPOSU
Geniş kapsamlı, cihazlara indirilebilir ve kategorize edilmiş görsel/işitsel arşiv:
* Karakter Kesitleri (X/Twitter entegreli)
* Fotoğraf Galerisi (Tam ekran lightbox destekli)
* Header Görselleri (Masaüstü/Profil için)
* Duvar Kağıtları (Mobil 9:16)
* Profil Resimleri
* Kamera Arkası Videoları
* Replikler (Kült sözler)
* Mimikler (GIF arşivi)
* Sticker Paketleri

### D. İNTERAKTİF EĞLENCE & FAN ETKİLEŞİMİ (GAMIFICATION)
Sitenin etkileşimini artıran, konsept mini oyunlar ve modüller:
* **Adam Asmaca:** Geniş kelime havuzlu, dinamik hata payı hesaplamalı oyun.
* **Bilgi Testi (Quiz):** 40 sorudan oluşan, her oynanışta karışan, en yüksek skoru kaydeden arşiv sınavı.
* **Kare Bulmaca & Arşiv Puzzle:** Görsel restorasyon temalı, hamle ve süre takipli sürükle-bırak bulmaca.
* **Tabu: Arşiv Versiyonu:** Zamanlı, iki takımlı, özelleştirilebilir takım isimli kelime anlatma oyunu.
* **Masa Tenisi:** Klavye ve fare kontrollü, zorluk seviyeli bot karşısında refleks oyunu.
* **XOX:** Zorluk seviyeli, seri skor takipli klasik XOX.
* **Penaltı Atışı:** Stadyum temalı, skor tabelalı penaltı oyunu.
* **Piksel Boyama:** Seviye seçimli, ipucu numaralı piksel-art bulmaca.
* **Görsel Hafıza & Karakter Testi:** Hafıza ve kişilik temalı interaktif modüller.
* **Günün Repliği & Çuval Terapisi:** Kullanıcı etkileşimini artıran günlük modüller.

### E. TOPLULUK VE DESTEK
* **Official Kaynaklar:** Resmi kanallara yönlendirmeler.
* **Projeye Destek Ol:** Katkı türü seçimli, otomatik mail oluşturan destek modülü.
* **Fan Eserleri Galerisi:** Topluluktan gelen "Fanart" ve editlerin sergilendiği alan.
* **İletişim:** Geri bildirim ve genel mesajlaşma formu.

---

## 3. TEKNİK ALTYAPI
* **Çerçeve:** React.js
* **Yönlendirme:** React Router DOM
* **Veri Yönetimi:** Local JSON / Data dosyaları (`photoData.js`, `theaterList` vb.)
* **Stil:** Özel CSS mimarisi, CSS değişkenleri (`:root`) ile tema yönetimi, Grid/Flexbox mimarisi ve bileşen bazlı animasyonlar.
* **Tema Sistemi:** Açık/Karanlık mod desteği (`body.dark-mode` class toggle, localStorage ile kalıcı tercih).
* **Analitik:** Vercel Analytics.