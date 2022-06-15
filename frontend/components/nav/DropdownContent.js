import styled from "styled-components";
import { NavLink } from "./NavLink";

 const StyledDropdownContent = styled.div`
    display: block;
    position: absolute;
    top: 70%;
    width: fit-content;
    background-color: var(--main-bg-color-light);
    z-index: 3;
    transition: all 0.6s ease-in-out;

    li {
      padding: 0.5rem 1rem;
    }
    @media screen and (min-width: 900px) {
      &:hover {
        display: block;
      }
    }

    @media screen and (max-width: 900px) {
      display: block;
      position: static;
      z-index: -23;
      border-bottom: 1px solid #ccc;
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
      transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-150%)")};
      height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
      transition: all 0.3s ease-in-out;

      li {
        display: block;
        padding: 0.5rem 1rem;
    }
  }
  `;

const DropdownContent = ({isOpen, closeMenu, links }) => {
  return (
    <StyledDropdownContent isOpen={isOpen}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={`/${link}`} onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
    </StyledDropdownContent>
  );
};

export default DropdownContent;
