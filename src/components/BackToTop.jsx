import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Sayfada 300px aşağı inince buton görünsün
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default BackToTop;