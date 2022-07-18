import { useRouter } from "next/router";
import Pagination from "../../components/products/Pagination";
import ProductsList from "../../components/products/ProductsList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  margin: 8rem 0;
`;

function ProductsOrder() {
  const { query } = useRouter();
  const page = parseInt(query?.page as string) || 1;
  return (
    <Wrapper>
      <Pagination page={page} />
      <ProductsList page={page} />
      <Pagination page={page} />
    </Wrapper>
  );
}

export default ProductsOrder;
