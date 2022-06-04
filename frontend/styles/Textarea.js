import styled from "styled-components";

const TextareaStyle = styled.textarea`
  display: block;
  width: 60%;
  height: auto;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid var(--main-bg-color-dark-3);
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border: 1px solid var(--main-text-color);
  }
`;

export default TextareaStyle;