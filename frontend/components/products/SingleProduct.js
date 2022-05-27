import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
    product(where: { id: $id }) {
      id
      name
      description
      price
      photo {
        id
        image {
          filename
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const SingleProduct = ({ query }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: query.id },
    });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  
  return (
    <div>
      <h1>{data.product.name}</h1>
      <p>{data.product.description}</p>
      <p>{data.product.price}</p>
      <img src={data.product.photo.image} alt={data.product.photo.altText} />
    </div>
  );
};

export default SingleProduct;
