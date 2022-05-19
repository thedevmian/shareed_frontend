import Link from 'next/link';
import Hamburger from 'hamburger-react';
import styled from 'styled-components';
import { useMenuContext } from '../../state/Menu';
import { useMedia } from '../../hooks/useMedia';
import NavLinks from './NavLinks';
import Logo from './Logo';

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isMobile } = useMedia();
  return (
    <DesktopNav>
      <NavLinks>
        <Link href="/">
          <a>
            <Logo>.shareed.</Logo>
          </a>
        </Link>
      </NavLinks>
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0.5} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: var(--main-bg-color-light);

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: #030303 !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
