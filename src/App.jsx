import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biography from './pages/Biography';
import PressInterviews from './pages/PressInterviews'; 
import Theater from './pages/Theater';
import Filmography from './pages/Filmography';
import Awards from './pages/Awards';
import MediaArchive from './pages/MediaArchive';
import Hangman from './pages/Hangman';
import Quiz from './pages/Quiz';
import Interactive from './pages/Interactive';
import CuvalTherapy from './pages/CuvalTherapy';
import JimCarreyPixel from './pages/JimCarreyPixel';
import AytekPenalty from "./pages/AytekPenalty";
import PhotoPuzzle from './pages/PhotoPuzzle';
import Crossword from './pages/Crossword';
import Contact from './pages/Contact'; 
import FCChannels from './pages/FCChannels';
import FanArtGallery from './pages/FanArtGallery';
import Newsletter from './pages/Newsletter';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState('');

  // Sezon arasına girildiğinde true, sezon başladığında false yap
  const isSeasonBreak = true; 

  useEffect(() => {
    const calculateCountdown = () => {
      
      if (isSeasonBreak) {
        return 'SEZON ARASI';
      }

      const now = new Date();
      const currentDay = now.getDay(); 
      
      let targetFriday = new Date(now);
      let daysToAdd = (5 - currentDay + 7) % 7;
      
      if (daysToAdd === 0) {
        const currentHour = now.getHours();
        if (currentHour >= 20 && currentHour < 23) {
          return 'YENİ BÖLÜM ŞU AN YAYINDA!';
        }
        if (currentHour >= 23) {
          daysToAdd = 7;
        }
      }
      
      targetFriday.setDate(now.getDate() + daysToAdd);
      targetFriday.setHours(20, 0, 0, 0);
      
      const difference = targetFriday - now;
      
      if (difference <= 0) {
        return 'YENİ BÖLÜM ŞU AN YAYINDA!';
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      let countdownString = '';
      if (days > 0) countdownString += `${days} GÜN `;
      
      countdownString += `${String(hours).padStart(2, '0')} SAAT ${String(minutes).padStart(2, '0')} DAKİKA ${String(seconds).padStart(2, '0')} SANİYE`;
      
      return countdownString;
    };

    setTimeLeft(calculateCountdown());

    const timer = setInterval(() => {
      setTimeLeft(calculateCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, [isSeasonBreak]); 

  return (
    <Router>

      <ScrollToTop />
      
      <div className="site-wrapper">
        
        <div className="countdown-ticker">
          <span className="ticker-label">YENİ BÖLÜME //</span>
          <span className="ticker-time">{timeLeft}</span>
        </div>

        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biyografi" element={<Biography />} />
            <Route path="/basin" element={<PressInterviews />} />
            <Route path="/tiyatro" element={<Theater />} />
            <Route path="/filmografi" element={<Filmography />} />
            <Route path="/oduller" element={<Awards />} />
            <Route path="/medya-deposu" element={<MediaArchive />} />
            <Route path="/adam-asmaca" element={<Hangman />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/gunun-repligi" element={<Interactive />} />
            <Route path="/cuval-terapi" element={<CuvalTherapy />} />
            <Route path="/jim-carrey-pixel" element={<JimCarreyPixel />} />
            <Route path="/penalti" element={<AytekPenalty />} />
            <Route path="/puzzle" element={<PhotoPuzzle />} />
            <Route path="/bulmaca" element={<Crossword />} />
            <Route path="/fc-hesaplar" element={<FCChannels />} />
            <Route path="/fan-gonderileri" element={<FanArtGallery />} />
            <Route path="/haber-bulteni" element={<Newsletter />} />
            <Route path="/proje-destek" element={<Support />} />
            <Route path="/iletisim" element={<Contact />} /> 
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-container">
            
            <div className="footer-social-icons">
             
               <a href="https://instagram.com/aytekofc" target="_blank" rel="noreferrer"><FaInstagram /></a>
               
               <a href="https://twitter.com/aytekofc" target="_blank" rel="noreferrer"><FaTwitter /></a>
               
               <a href="mailto:aytekofc@gmail.com"><FaEnvelope /></a>
            </div>

            {/* ORTA: MARKA KİMLİĞİ */}
            <div className="footer-brand">
               <p className="brand-logo">AYTEK SAYAN OFFICIAL FC</p>
               <p className="brand-copy">© 2026 Tüm Hakları Saklıdır.</p>
            </div>

            {/* SAĞ: KÜNYE LİNKİ */}
            <div className="footer-links">
               <Link to="/iletisim" className="dossier-link">PROJE KÜNYESİ →</Link>
            </div>

          </div>
        </footer>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;