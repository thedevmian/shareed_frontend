import Link from "next/link";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Heading2 from "../../styles/Heading2";
import CardProduct from "./CardProduct";
import Button from "../../styles/Button";

const GET_LATEST_PRODUCTS = gql`
  query GET_LATEST_PRODUCTS {
    products(orderBy: { publishDate: asc }, take: 3) {
      id
      name
      price
      description
      photo {
        id
        altText
        image {
          publicUrl
        }
      }
    }
  }
`;

function LatestProducts() {
  const { data, loading, error } = useQuery(GET_LATEST_PRODUCTS, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <Wrapper>
      <Heading2>Latest products from our store</Heading2>
      <CardSection>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.products.map((product) => <CardProduct key={product.id} product={product} />)}
      </CardSection>
      <Button>
        <Link href="/products">See all products</Link>
      </Button>
    </Wrapper>
  );
}

export default LatestProducts;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const CardSection = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 3rem;
  margin-top: 3rem;
  padding: 3rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
