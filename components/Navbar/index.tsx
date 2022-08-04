import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import Nav from "./navbar.style";

export interface INavbarProps {
  sticky?: boolean;
}

const Navbar = ({ sticky }: INavbarProps) => {
  return (
    <Nav sticky={sticky}>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;
