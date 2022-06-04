import styled from 'styled-components';

const Button = styled.button`
  background: var(--main-bg-color-dark);
  border: none;
  color: var(--main-text-color-white);
  font-size: 1rem;
  padding: 1rem 3rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--main-bg-color-dark-3);
  }

  &:active {
    background: var(--main-bg-color-dark-2);
    transform: scale(0.95);
  }
`;

export default Button;