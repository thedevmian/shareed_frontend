import { useState, useEffect } from 'react';

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { isMobile };
};
