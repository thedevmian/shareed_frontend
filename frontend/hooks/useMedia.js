import { useState, useEffect } from "react";

export const useMedia = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const onResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile]);

  return { isMobile };
};
