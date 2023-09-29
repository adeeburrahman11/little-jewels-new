import React, { useState, useEffect } from 'react';
import './BackToTopButton.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    const scrolled = (scrollY / (scrollHeight - windowHeight)) * 100;

    if (scrolled > 20) {
      setIsVisible(true); 
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          Back to Top
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
