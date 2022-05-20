import styled from 'styled-components';
import { useEffect } from 'react';
import { useMenuContext } from '../../state/Menu';
import { useMedia } from '../../hooks/useMedia';
import NavLinks from './NavLinks';

const MobileNavbar = () => {
  const { isMenuOpen, closeMenu } = useMenuContext();

  const { isMobile } = useMedia();

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
  }, [isMobile]);

  return (
    <>
      {isMenuOpen && (
        <MobileNav>
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
`;
