import styled from "styled-components";

const StyledDropdownContent = styled.ul<{ isOpen: boolean | null }>`
  position: absolute;
  top: 80%;
  padding: 0;
  width: fit-content;
  background-color: var(--main-bg-color-light);
  z-index: 3;
  transition: all 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: min-content;
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  @media screen and (max-width: 1000px) {
    position: sticky;
    z-index: 2;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    background-color: transparent;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-25%)"};
    height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    transition: all 0.3s ease-in-out;
  }
`;

export default StyledDropdownContent;
