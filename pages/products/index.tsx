import { useRouter } from "next/router";
import Pagination from "../../components/Products/Pagination";
import ProductsList from "../../components/Products/ProductsList";
import styled from "styled-components";
import { NextPage } from "next/types";
import { addApolloState, initializeApollo } from "graphql/apolloClient";
import {
  AllProductsDocument,
  AllProductsQuery,
  AllProductsQueryVariables,
} from "@/graphql/types";
import SearchProducts from "components/SearchProducts";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  margin: 8rem 0;
`;

const ProductsOrder: NextPage = () => {
  const { query } = useRouter();
  const page: number = parseInt(query?.page as string) || 1;
  return (
    <Wrapper>
      <SearchProducts />
      <Pagination page={page} />
      <ProductsList page={page} />
      <Pagination page={page} />
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  try {
    await client.query<AllProductsQuery, AllProductsQueryVariables>({
      query: AllProductsDocument,
    });
    return addApolloState(client, {
      props: {},
      revalidate: 60,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ProductsOrder;
