import StyledDropdownContent from "./dropdownContent.style";

interface IStyledDropdownContentProps {
  isOpen: boolean | null;
  children: React.ReactNode;
}

const DropdownContent = ({ isOpen, children }: IStyledDropdownContentProps) => {
  return (
    <StyledDropdownContent isOpen={isOpen}>{children}</StyledDropdownContent>
  );
};

export default DropdownContent;
