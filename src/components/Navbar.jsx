import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          AYTEK SAYAN OFFICIAL FC
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menüyü Aç/Kapat"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item-link" onClick={closeMenu}>
          ANA SAYFA
        </Link>

        <div className="dropdown">
          <span className="dropdown-trigger">PROFİL ▾</span>
          <div className="dropdown-menu">
            <Link to="/biyografi" onClick={closeMenu}>
              DETAYLI BİYOGRAFİ
            </Link>
            <Link to="/#kronoloji" onClick={closeMenu}>
              KRONOLOJİK TARİHÇE
            </Link>
            <Link to="/basin" onClick={closeMenu}>
              BASIN & SÖYLEŞİLER
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-trigger">SANAT & KARİYER ▾</span>
          <div className="dropdown-menu">
            <Link to="/tiyatro" onClick={closeMenu}>
              TİYATRO ENVANTERİ
            </Link>
            <Link to="/filmografi" onClick={closeMenu}>
              DİZİ & FİLMOGRAFİ
            </Link>
            <Link to="/oduller" onClick={closeMenu}>
              ÖDÜLLER & ADAYLIKLAR
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-trigger">MEDYA DEPOSU ▾</span>
          <div className="dropdown-menu">
            <Link to="/medya-deposu#karakter-kesitleri" onClick={closeMenu}>
              KARAKTER KESİTLERİ
            </Link>
            <Link to="/medya-deposu#fotograflar" onClick={closeMenu}>
              FOTOĞRAF ARŞİVİ
            </Link>
            <Link to="/medya-deposu#wallpapers" onClick={closeMenu}>
              DUVAR KAĞITLARI
            </Link>
            <Link to="/medya-deposu#profil-fotograflari" onClick={closeMenu}>
              PROFİL FOTOĞRAFLARI
            </Link>
            <Link to="/medya-deposu#headers" onClick={closeMenu}>
              HEADER GÖRSELLERİ
            </Link>
            <Link to="/medya-deposu#kamera-arkasi" onClick={closeMenu}>
              KAMERA ARKASI & DOĞAL HALLER
            </Link>
            <Link to="/medya-deposu#mimikler" onClick={closeMenu}>
              İKONİK MİMİKLER & BAKIŞLAR
            </Link>
            <Link to="/medya-deposu#sticker" onClick={closeMenu}>
              STICKER ARCHIVE
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-trigger">İNTERAKTİF ▾</span>
          <div className="dropdown-menu">
            <Link to="/adam-asmaca" onClick={closeMenu}>
              ŞİFRE ÇÖZÜMÜ (ADAM ASMACA)
            </Link>
            <Link to="/quiz" onClick={closeMenu}>
              QUIZ
            </Link>
            <Link to="/gunun-repligi" onClick={closeMenu}>
              GÜNÜN REPLİĞİ
            </Link>
            <Link to="/cuval-terapi" onClick={closeMenu}>
              ÇUVAL TERAPİSİ (SAYAÇ)
            </Link>
            <Link to="/jim-carrey-pixel" onClick={closeMenu}>
              PİKSEL BOYAMA
            </Link>
            <Link to="/penalti" onClick={closeMenu}>
              PENALTI ATIŞI
            </Link>
            <Link to="/puzzle" onClick={closeMenu}>
              ARŞİV PUZZLE
            </Link>
            <Link to="/bulmaca" onClick={closeMenu}>
              KARE BULMACA
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <span className="dropdown-trigger">FC TOPLULUĞU ▾</span>
          <div className="dropdown-menu">
            <Link to="/fc-hesaplar" onClick={closeMenu}>
              X OFFICIAL KANALLAR
            </Link>
            <Link to="/proje-destek" onClick={closeMenu}>
              PROJEYE DESTEK OL
            </Link>
            <Link to="/fan-gonderileri" onClick={closeMenu}>
              FAN ESERLERİ GALERİSİ
            </Link>
          </div>
        </div>

        <Link
          to="/iletisim"
          className="nav-item-link"
          onClick={closeMenu}
        >
          İLETİŞİM
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;