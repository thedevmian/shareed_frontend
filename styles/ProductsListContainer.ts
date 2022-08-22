import styled from "styled-components";

const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  margin-top: 3rem;
  padding: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default ProductsListContainer;
