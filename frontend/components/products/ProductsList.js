import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import CardProduct from './CardProduct';

const ALLPRODUCTS_QUERY = gql`
  query ALL_PRODUCTS {
    products {
      id
      name
      price
      photo(take: 1) {
        image {
          filename
          publicUrl
        }
        altText
      }
    }
  }
`;

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

const ProductsList = () => {
  const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY);

  return (
    <ProductsListContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
    </ProductsListContainer>
  );
};

export default ProductsList;