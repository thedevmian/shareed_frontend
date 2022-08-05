import styled from "styled-components";

const ButtonStyles = styled.button`
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
  margin: 0;
  padding: 0 1rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  border: none;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background-color: var(--main-text-color);
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const QuickAddButton = () => <ButtonStyles>Quick Add</ButtonStyles>;

export default QuickAddButton;
