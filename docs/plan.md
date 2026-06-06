# AYTEK ŞAYAN - DİJİTAL ARŞİV VE FAN PROJESİ (V1.0)
**Proje Durumu:** %85 Tamamlandı.

Bu doküman, projenin tasarım dilini, sayfa mimarisini, tamamlanan modüllerini ve teknik altyapısını içermektedir.

## 1. GÖRSEL KİMLİK (RENK PALETİ)
* **Ana Arka Plan (`#132A13`):** Koyu Orman Yeşili.
* **Kart/Menü Arka Planları (`#31572C` & `#4F772D`):** Orta Yeşiller (Hover ve Derinlik).
* **Vurgu / Accent (`#90A955`):** Canlı Adaçayı Yeşili (Butonlar, Linkler).
* **Metin Rengi (`#ECF39E`):** Açık Krem/Fıstık Yeşili.

---

## 2. TAMAMLANAN MODÜLLER VE SAYFA MİMARİSİ

### A. ANA SAYFA (DASHBOARD)
* **Sayaç Sistemleri:** Doğum Günü (DG) sayacı ve Yeni Bölüme Kalan Süre sayacı.
* **Hero Alanı:** Sabit portre ve altında karşılama metni.
* **Dinamik İçerik:** Manuel olarak güncellenen "Haber Bülteni".
* **Hızlı Bakış:** Ana sayfa kronoloji modülü.
* **Footer (İletişim):** Resmi hesaplar ve fan hesabı iletişim kanallarının ayrı ayrı kategorilendirildiği alt bilgi alanı.

### B. KARİYER VE SİCİL (CORE BİLEŞENLER)
* **Biyografi:** Kapsamlı yaşam ve kariyer yolculuğu.
* **Filmografi:** Dizi ve sinema projelerinin dökümü.
* **Tiyatro Envanteri:** 2014'ten günümüze aktif sahne performansları, oyun özetleri ve dinamik fotoğraflar.
* **Basın & Söyleşiler:** Röportajların ve basında çıkan haberlerin arşivi.
* **Ödüller:** Kazanılan ödüller ve adaylıkların listesi.

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
* **Adam Asmaca:** Geniş kelime havuzlu oyun.
* **Quiz:** Aytek Şayan hakkında bilgi yarışması.
* **Puzzle & Kare Bulmaca:** Görsel ve kelime tabanlı interaktif oyunlar.
* **Günün Repliği:** Değişen ikonik karakter sözleri.
* **Çuval Terapisi:** Eğlenceli ve stres atıcı konsept modül.

### E. TOPLULUK VE DESTEK
* **Official Kaynaklar:** Resmi kanallara yönlendirmeler.
* **Projeye Destek Ol:** Platformun büyümesine katkı sağlama modülü.
* **Fan Eserleri Galerisi:** Topluluktan gelen "Fanart" ve editlerin sergilendiği alan.
* **İletişim:** Geri bildirim ve genel mesajlaşma formu.

---

## 3. TEKNİK ALTYAPI
* **Çerçeve:** React.js
* **Yönlendirme:** React Router DOM
* **Veri Yönetimi:** Local JSON / Data dosyaları (`photoData.js`, `theaterList` vb.)
* **Stil:** Özel CSS, Grid/Flexbox mimarisi ve bileşen bazlı animasyonlar.