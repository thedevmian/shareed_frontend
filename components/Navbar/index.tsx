import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface INavbarProps {
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

const Nav = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-flow: column no-wrap;
  z-index: 2;
  position: ${(props) => (props.sticky ? "fixed" : "relative")};
  top: ${(props) => (props.sticky ? "0" : "")};
  left: ${(props) => (props.sticky ? "0" : "")};
  box-shadow: ${(props) => (props.sticky ? "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" : "")};
  transition: all 0.3s ease-in-out;
`;

export default Navbar;
