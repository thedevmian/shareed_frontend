import { useEffect } from "react";
import { useMenuContext } from "../../../state/Menu";
import { useMedia } from "../../../hooks/useMedia";
import { useIsMounted } from "../../../hooks/useIsMounted";
import NavLinks from "../Navlinks";
import MobileNav from "./mobileNav.style";

const MobileNavbar = () => {
  const { isMenuOpen, close } = useMenuContext();
  const { isMobile } = useMedia();
  const isMounted = useIsMounted();

  useEffect(() => {
    const fixed = document.getElementById("fixed");
    if (fixed) {
      fixed.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault();
        },
        { passive: false }
      );
    }
  }, [isMounted, isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      close();
    }
  }, [isMobile, close]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav id="fixed">
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;
