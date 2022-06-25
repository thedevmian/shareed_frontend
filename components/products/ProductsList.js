import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { PRODUCTS_PER_PAGE } from "./Pagination";
import CardProduct from "./CardProduct";
import ProductsListContainer from "../../styles/ProductsListContainer";

const ALLPRODUCTS_QUERY = gql`
  query ALL_PRODUCTS($skip: Int = 1, $take: Int = ${PRODUCTS_PER_PAGE}) {
    products(take: $take, skip: $skip) {
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

const ProductsList = ({ page }) => {
  const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY, {
    variables: {
      skip: (page - 1) * PRODUCTS_PER_PAGE,
      take: PRODUCTS_PER_PAGE,
    },
  });

  return (
    <ProductsListContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.products.map((product) => <CardProduct key={product.id} product={product} />)}
    </ProductsListContainer>
  );
};

export default ProductsList;
