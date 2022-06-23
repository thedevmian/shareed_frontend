import styled from "styled-components";
import { useState, useEffect } from "react";
import { useMenuContext } from "../../state/Menu";
import { useMedia } from "../../hooks/useMedia";
import { useIsMounted } from "../../hooks/useIsMounted";
import NavLinks from "./NavLinks";

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext();
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
      closeMenu();
    }
  }, [isMobile, closeMenu]);

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

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--main-bg-color-light);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
