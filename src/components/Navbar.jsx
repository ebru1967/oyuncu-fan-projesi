import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">AYTEK SAYAN OFFICIAL FC</Link>
      </div>
      
      <div className="nav-links">
        <Link to="/" className="nav-item-link">ANA SAYFA</Link>
        
        {/* AKTÖR PROFİLİ */}
        <div className="dropdown">
          <span className="dropdown-trigger">PROFIL ▾</span>
          <div className="dropdown-menu">
            <Link to="/biyografi">DETAYLI BİYOGRAFİ</Link>
            <Link to="/#kronoloji">KRONOLOJİK TARİHÇE</Link>
            <Link to="/basin">BASIN & SÖYLEŞİLER</Link>
          </div>
        </div>

        {/* SANAT KANONU */}
        <div className="dropdown">
          <span className="dropdown-trigger">SANAT & KARİYER ▾</span>
          <div className="dropdown-menu">
            <Link to="/tiyatro">TİYATRO ENVANTERİ</Link>
            <Link to="/filmografi">DİZİ & FİLMOGRAFİ</Link>
            <Link to="/oduller">ÖDÜLLER & ADAYLIKLAR</Link>
          </div>
        </div>

        {/* GENİŞLETİLMİŞ MEDYA REPO */}
        <div className="dropdown">
          <span className="dropdown-trigger">MEDYA DEPOSU ▾</span>
          <div className="dropdown-menu">
            <Link to="/medya-deposu#karakter-kesitleri">KARAKTER KESİTLERİ</Link>
            <Link to="/medya-deposu#fotograflar">FOTOĞRAF ARŞİVİ</Link>
            <Link to="/medya-deposu#wallpapers">DUVAR KAĞITLARI</Link>
            <Link to="/medya-deposu#profil-fotograflari">PROFİL FOTOĞRAFLARI</Link>
            <Link to="/medya-deposu#headers">HEADER GÖRSELLERİ</Link>
            <Link to="/medya-deposu#kamera-arkasi">KAMERA ARKASI & DOĞAL HALLER</Link>
            <Link to="/medya-deposu#mimikler">İKONİK MİMİKLER & BAKIŞLAR</Link>
            <Link to="/medya-deposu#sticker">STICKER ARCHIVE</Link>
          </div>
        </div>

        {/* İNTERAKTİF ARŞİV */}
        <div className="dropdown">
          <span className="dropdown-trigger">İNTERAKTİF ▾</span>
          <div className="dropdown-menu">
            <Link to="/adam-asmaca">ŞİFRE ÇÖZÜMÜ (ADAM ASMACA)</Link>
            <Link to="/quiz">QUİZ</Link>
            <Link to="/gunun-repligi">GÜNÜN REPLİĞİ</Link>
            <Link to="/cuval-terapi">ÇUVAL TERAPİSİ (SAYAÇ)</Link>
            <Link to="/jim-carrey-pixel">PİKSEL BOYAMA</Link>
            <Link to="/penalti">PENALTI ATIŞI</Link>
            <Link to="/puzzle">ARŞİV PUZZLE</Link>
            <Link to="/bulmaca">KARE BULMACA</Link>
          </div>
        </div>

        {/* FC TOPLULUĞU MENÜSÜ */}
        <div className="dropdown">
           <span className="dropdown-trigger">FC TOPLULUĞU ▾</span>
           <div className="dropdown-menu">
             <Link to="/fc-hesaplar">X OFFICIAL KANALLAR</Link>
           {/* <Link to="/haber-bulteni">FC HABER BÜLTENİ</Link>*/}
             <Link to="/proje-destek">PROJEYE DESTEK OL</Link>
             <Link to="/fan-gonderileri">FAN ESERLERİ GALERİSİ</Link>
           </div>
        </div>

        <Link to="/iletisim" className="nav-item-link">İLETİŞİM</Link>
      </div>
    </nav>
  );
}

export default Navbar;