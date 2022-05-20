import styled from 'styled-components';
import ProductsList from '../components/products/ProductsList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  margin: 8rem 0;
`;

export default function IndexPage() {
  return (
    <Wrapper>
      <ProductsList />
    </Wrapper>
  );
}
