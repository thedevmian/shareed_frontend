import styled from "styled-components";
import { NavLink } from "./NavLink";

 const StyledDropdownContent = styled.div`
    display: block;
    position: absolute;
    top: 70%;
    width: fit-content;
    background-color: var(--main-bg-color-light);
    z-index: 3;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
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
      box-shadow: rgba(0, 0, 0, 0.1) 1em 1rem 2rem;
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
      opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
      transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(150%)")};
      height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
      transition: all 0.3s ease-in-out;

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
