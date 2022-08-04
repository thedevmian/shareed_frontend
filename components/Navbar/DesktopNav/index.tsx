import Link from "next/link";
import Hamburger from "hamburger-react";
import { useMenuContext } from "../../../state/Menu";
import NavLinks from "../Navlinks";
import Logo from "../../Logo/logo.style";
import { DesktopNav, LogoContainer } from "./desktopNav.style";

const DesktopNavbar = () => {
  const { isMenuOpen, toggle } = useMenuContext();

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
        toggle={toggle}
        duration={0.3}
        distance="sm"
        hideOutline={true}
        label="hamburger-menu"
        size={28}
        color="#000"
      />
    </DesktopNav>
  );
};

export default DesktopNavbar;
