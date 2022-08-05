import { NavLink } from "../NavLink";
import StyledDropdownContent from "./dropdownContent.style";

interface IStyledDropdownContentProps {
  isOpen: boolean | null;
  closeMenu: () => void;
  url: string;
  links: string[];
}

const DropdownContent = ({
  isOpen,
  closeMenu,
  url,
  links,
}: IStyledDropdownContentProps) => {
  return (
    <StyledDropdownContent isOpen={isOpen}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={`${url}/${link}`} closeMenu={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
    </StyledDropdownContent>
  );
};

export default DropdownContent;
