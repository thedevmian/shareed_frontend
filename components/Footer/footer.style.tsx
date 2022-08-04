import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color-light);

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    height: 20rem;
  }
`;

export const StyledContainer = styled.div`
  padding: 0 2rem;
  margin-left: 0;
  margin-top: 2rem;

  @media screen and (min-width: 1024px) {
    margin-left: 100px;
  }
`;

export const NavStyle = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
`;

export const StyledUl = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    flex: 0 1 25%;
    padding: 1rem;

    @media screen and (min-width: 1024px) {
      padding: 0.5rem;
    }
    a {
      font-size: var(--font-size-sm);
      position: relative;
      cursor: pointer;
      color: var(--main-text-color-light-2);

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        border-radius: 1rem;
        background-color: var(--main-text-color-light-3);
        left: 0;
        bottom: -4px;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
        visibility: hidden;
      }

      &:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
      &:hover {
        color: var(--main-text-color-light-3);
      }
    }
  }
`;
