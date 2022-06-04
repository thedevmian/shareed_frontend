import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 60%;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid var(--main-bg-color-dark-3);
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
  margin-bottom: 1rem;

  &.price {
    width: 25%;

    @media screen and (min-width: 1024px) {
      width: 15%;
    }
  }

  &:focus {
    outline: none;
    border: 1px solid var(--main-text-color);
  }
`;

export default Input;