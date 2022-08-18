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
  top: 50px;
  right: 10px;

  &.bag-items {
    justify-content: flex-start;
    gap: 1rem;
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
    padding-right: 1rem;
  }
`;

const BagItemH4 = styled.h4`
  font-size: 1.3em;
  width: 100%;
  color: var(--main-bg-color-dark-2);
  margin: 0;
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

export {
  BagItemsWrapper,
  BagItem,
  BagItemH4,
  BagContainer,
  StyledSpan,
  BagItemName,
  BagParagraph,
  ImageContainer,
};
