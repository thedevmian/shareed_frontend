import { useRouter } from "next/router";
import Pagination from "../../components/Products/Pagination";
import ProductsList from "../../components/Products/ProductsList";
import styled from "styled-components";
import { NextPage } from "next/types";
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
  let page: number = parseInt(query?.page as string);
  if (isNaN(page)) page = 1;
  return (
    <Wrapper>
      <SearchProducts />
      <Pagination page={page} />
      <ProductsList page={page} />
      <Pagination page={page} />
    </Wrapper>
  );
};

export default ProductsOrder;
