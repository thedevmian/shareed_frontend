import styled from "styled-components";

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

  @media (max-width: 1000px) {
    height: 4rem;
  }

  .nav-links {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: #030303 !important;
    }
    @media screen and (max-width: 1000px) {
      display: block;
    }
  }
`;

const LogoContainer = styled.div`
  z-index: 10;

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export { DesktopNav, LogoContainer };
