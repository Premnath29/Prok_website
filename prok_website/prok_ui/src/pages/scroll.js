import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '8px',
      backgroundColor: '#ccc',
      zIndex: 9999,
    }}>
      <div style={{
        height: '100%',
        width: `${scrollPercent}%`,
        backgroundColor: '#f39c12',
        transition: 'width 0.2s ease-in-out',
      }} />
    </div>
  );
};

export default ScrollProgress;