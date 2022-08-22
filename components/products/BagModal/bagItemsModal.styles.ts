import styled from "styled-components";

const BagItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30rem;
  height: 30rem;
  padding: 2rem 1rem;
  background-color: var(--main-bg-color-light);
  border-color: var(--main-bg-color-dark-2);
  position: absolute;
  top: 35px;
  right: 10px;

  &.bag-items {
    gap: 2rem;
  }

  &.bag-wrapper-site {
    width: 100%;
    height: 100vh;
    flex-direction: row;
    align-items: flex-start;
    position: static;

    @media screen and (max-width: 1024px) {
      width: 90%;
      flex-direction: column;
    }
  }
`;

const BagItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: var(--main-bg-color);
  font-size: 1rem;

  &.bag-item {
    margin-bottom: 1rem;
    padding-right: 1rem;
  }
`;

const ItemsContainer = styled.div`
  width: 100%;
  max-height: calc(30rem - 4rem);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &.items-container-site {
    width: 50%;
    height: 100%;
    overflow-y: visible;

    @media screen and (max-width: 1024px) {
      width: 100%;
      max-height: min-content;
      height: min-content;
    }
  }
`;

const BagItemH4 = styled.h4`
  font-size: 1.3em;
  width: 100%;
  color: var(--main-bg-color-dark-2);
  margin-bottom: 1rem;
  padding: 0;
  text-transform: uppercase;
  text-align: center;
`;
const BagItemName = styled.h3`
  font-size: 0.8rem;
  color: var(--main-bg-color-dark-2);
  text-transform: uppercase;
  text-align: center;
  padding: 0.2rem 0;
  flex: 1;
`;

const BagContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;
const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  background-color: black;

  &.bag-image-site {
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1024px) {
      width: 150px;
      height: 150px;
    }
  }
`;

const StyledSpan = styled.span`
  font-size: 0.9rem;
  color: var(--main-bg-color-dark-2);
`;

const BagParagraph = styled.p`
  font-size: 0.75rem;
  color: var(--main-bg-color-dark-2);
  text-align: center;
`;

const CheckoutButton = styled.button`
  width: 100%;
  padding: 1.5rem 3rem;
  margin-bottom: 1rem;
  background-color: var(--main-bg-color-dark-2);
  color: var(--main-bg-color-light);
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    margin-left: 1rem;
  }

  &:hover {
    background-color: var(--main-bg-color-dark-3);
  }
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  &.total-section-site {
    background-color: var(--main-bg-color-light);
    border: 1px solid var(--main-bg-color);
    flex-direction: column;
    padding: 2rem;
    width: 90%;
  }

  &.checkout-section {
    background-color: var(--main-bg-color);
    text-align: center;
  }
`;

const CheckoutSection = styled.div`
  flex: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color-light);

  &.checkout-section-site {
    flex: 2;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;
    min-height: 20rem;
  }
`;

const TextLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export {
  BagItemsWrapper,
  BagItem,
  BagItemH4,
  BagContainer,
  StyledSpan,
  BagItemName,
  BagParagraph,
  ImageContainer,
  CheckoutButton,
  CheckoutSection,
  TotalSection,
  ItemsContainer,
  TextLine,
};
