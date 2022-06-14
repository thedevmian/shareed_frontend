import styled from "styled-components";
import { useState } from "react";
import DropdownContent from "./DropdownContent";
import { useMedia } from "../../hooks/useMedia";

const Dropdown = ({ buttonTitle, links, closeMenu }) => {
    const { isMobile } = useMedia();
    const [isOpen, setIsOpen] = useState(isMobile);

  const buttonClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <StyledDropdown className="dropdown">
      <StyledButtonLink onClick={buttonClick}>{buttonTitle}</StyledButtonLink>
      <DropdownContent
        className="dropdown-content"
        isOpen={isOpen}
        closeMenu={closeMenu}
        links={links}
      />
    </StyledDropdown>
  );
};

export default Dropdown;

const StyledDropdown = styled.div`
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover + .dropdown-content {
        display: block;
    }
`;

const StyledButtonLink = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 2rem;
  display: block;
  font-size: 0.9rem;
  font-weight: bold;

  position: relative;
  cursor: pointer;

  background-color: azure;

  @media screen and (min-width: 900px) {
    width: fit-content;
  }

  svg {
    display: none;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    @media screen and (min-width: 1024px) {
      display: inline-block;
    }
  }

  &.mobileDropdown {
      display: ${props => (props.isOpen ? "block" : "none")};

  }

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
`;
