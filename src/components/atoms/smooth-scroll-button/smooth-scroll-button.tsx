import React, { useState, useEffect } from 'react';
import {ScrollButton } from './smooth-scroll-button.styles';


const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 3l-8 8h5v10h6V11h5z" />
  </svg>
);

const SmoothScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollButton visible={isVisible} onClick={scrollToTop}>
      <ArrowUpIcon />
    </ScrollButton>
  );
};


export default SmoothScrollButton;