import styled from 'styled-components';

const ButtonStyles = styled.button`
  background-color: #fcfcfc;
  color: #030303;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background-color: #030303;
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

const AddToCartButton = ({ id }) => (
  <ButtonStyles product={id}>Quick Add</ButtonStyles>
);

export default AddToCartButton;
