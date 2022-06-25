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
  height: auto;
  flex-flow: column no-wrap;
  z-index: 2;
  position: ${({ stickyScrollPosition }) => (stickyScrollPosition ? "fixed" : "relative")};
  top: ${({ stickyScrollPosition }) => (stickyScrollPosition ? "0" : "")};
  left: ${({ stickyScrollPosition }) => (stickyScrollPosition ? "0" : "")};
  box-shadow: ${({ stickyScrollPosition }) =>
    stickyScrollPosition ? "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" : ""};
  transition: all 0.3s ease-in-out;
`;
