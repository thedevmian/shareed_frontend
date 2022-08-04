import styled from "styled-components";

const StyledDropdown = styled.div`
  overflow: hidden;
`;

const DropdownWrapper = styled.div`
  @media screen and (min-width: 1000px) {
    display: none;

    ${StyledDropdown}:hover & {
      display: block;
    }
  }
`;

const StyledButtonLink = styled.button`
  background: none;
  color: var(--main-text-color);
  border: none;
  padding: 1rem;

  font-size: 0.9rem;
  font-weight: bold;

  position: relative;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    width: fit-content;
    padding: 0;
    margin: 0;
  }

  svg {
    position: absolute;
    right: 1.4rem;
    top: 1.4rem;

    @media screen and (min-width: 1000px) {
      display: none;
      margin: 0;
    }
  }

  @media screen and (min-width: 1000px) {
    &::before {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      border-radius: 1rem;
      background-color: #030303;
      left: 25%;
      bottom: -2px;
      transform: scaleX(0);
      transition: all 0.2s ease-in-out 0s;
      visibility: hidden;
    }

    &:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }

    &.active {
      &&::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

const Span = styled.span`
  display: inline-block;
  padding: 0.5rem 2rem;
  height: 100%;

  @media screen and (min-width: 1000px) {
    margin-top: 3px;
  }
`;

export { StyledDropdown, DropdownWrapper, StyledButtonLink, Span };
