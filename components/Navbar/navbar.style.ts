import styled from 'styled-components';
import { INavbarProps } from '.';

const Nav = styled.div<INavbarProps>`
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

export default Nav;