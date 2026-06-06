import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  // URL'deki "pathname" her değiştiğinde pencereyi en tepeye (0, 0) kaydırır.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Ekrana hiçbir şey basmayan, sadece arkaplanda çalışan hayalet bir bileşen.
  return null;
}

export default ScrollToTop;