import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import ProductsListContainer from "../../../styles/ProductsListContainer";
import CardProduct from "../CardProduct";

const COLLECTION_PRODUCTS = gql`
  query COLLECTION_PRODUCTS($slug: String!) {
    products(where: { collections: { equals: $slug } }) {
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

interface CollectionProductsProps {
  slug: string;
}

const CollectionProductList = ({ slug }: CollectionProductsProps) => {
  const { loading, error, data } = useQuery(COLLECTION_PRODUCTS, {
    variables: { slug },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ProductsListContainer>
      {data.products.map((product: any) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </ProductsListContainer>
  );
};

export default CollectionProductList;
