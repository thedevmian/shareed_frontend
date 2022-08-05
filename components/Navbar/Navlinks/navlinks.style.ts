import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  .person-icon {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      top: 0.65rem;
      left: 0.55rem;
    }
  }
`;

const NavLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    li {
      padding: 1rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;

export { Wrapper, Center, NavLinksWrapper };
