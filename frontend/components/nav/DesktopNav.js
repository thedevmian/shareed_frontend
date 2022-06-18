import Link from "next/link";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import { useMenuContext } from "../../state/Menu";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();

  return (
    <DesktopNav>
      <LogoContainer>
        <Link href="/">
          <a>
            <Logo>.shareed.</Logo>
          </a>
        </Link>
      </LogoContainer>
      <NavLinks />
      <Hamburger
        toggled={isMenuOpen}
        toggle={toggleMenu}
        duration={0.3}
        distance="sm"
        hideOutline={true}
        label="hamburger-menu"
        size={28}
      />
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
  padding: 0 2rem;
  background-color: var(--main-bg-color-light);
  position: relative;

  .nav-links {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: #030303 !important;
    }
    @media screen and (max-width: 900px) {
      display: block;
    }
  }
`;

const LogoContainer = styled.div`
  z-index: 10;

  @media screen and (min-width: 900px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
