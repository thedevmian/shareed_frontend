import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar({ stickyScrollPosition }) {
  return (
    <Nav stickyScrollPosition={stickyScrollPosition}>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column no-wrap;
  z-index: 2;
  position: ${({ stickyScrollPosition }) => (stickyScrollPosition ? "fixed" : "relative")};
  top: ${({ stickyScrollPosition }) => (stickyScrollPosition ? "0" : "")};
  left: 0;
  box-shadow: ${({ stickyScrollPosition }) =>
    stickyScrollPosition ? "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" : ""};
  height: 5rem;
  transition: all 0.6s ease-in-out;
`;
