import styled from "styled-components";

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
  overflow: hidden;
`;

export default MobileNav;
