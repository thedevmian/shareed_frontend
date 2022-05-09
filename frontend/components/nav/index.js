import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => (
  <Nav>
    <DesktopNav />
    <MobileNav />
  </Nav>
);

export default Navbar;

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column no-wrap;
`;
