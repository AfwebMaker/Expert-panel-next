'use client'

import React, { useState, useEffect } from 'react';

function StickyElement() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-blue-500 h-[71px] ${isSticky ? 'sticky top-0' : ''}`}>
      ggg
    </div>
  );
}

export default StickyElement;