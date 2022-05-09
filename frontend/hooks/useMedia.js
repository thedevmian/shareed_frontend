import { useState, useLayoutEffect } from 'react';

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { isMobile };
};
