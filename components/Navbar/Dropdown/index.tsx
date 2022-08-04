import { useState } from "react";
import DropdownContent from "../DropdownContent";
import { useMedia } from "../../../hooks/useMedia";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { DropdownWrapper, Span, StyledButtonLink, StyledDropdown } from "./dropdown.style";

interface IDropdownProps {
  buttonTitle: string;
  links: string[];
  closeMenu: () => void;
}

const Dropdown = ({ buttonTitle, links, closeMenu }: IDropdownProps) => {
  const { isMobile } = useMedia();
  const [isOpen, setIsOpen] = useState<boolean | null>(isMobile);

  const buttonClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <StyledDropdown className="dropdown">
      <StyledButtonLink onClick={buttonClick}>
        <Span>{buttonTitle}</Span>
        {!isOpen ? <RiArrowDownSLine size={20} /> : <RiArrowUpSLine size={20} />}
      </StyledButtonLink>
      <DropdownWrapper>
        <DropdownContent url={buttonTitle} isOpen={isOpen} closeMenu={closeMenu} links={links} />
      </DropdownWrapper>
    </StyledDropdown>
  );
};

export default Dropdown;
