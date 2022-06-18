import styled from "styled-components";
import { NavLink } from "./NavLink";

const StyledDropdownContent = styled.ul`
  position: absolute;
  top: 70%;
  padding: 0;
  width: fit-content;
  background-color: var(--main-bg-color-light);
  z-index: 3;
  transition: all 0.6s ease-in-out;

  li {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  @media screen and (max-width: 900px) {
    position: static;
    z-index: 2;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    background-color: transparent;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-25%)")};
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    transition: all 0.3s ease-in-out;
  }
`;

const DropdownContent = ({ isOpen, closeMenu, links }) => {
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
