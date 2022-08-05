import styled from "styled-components";
import CreateProductForm from "../components/products/CreateProductForm";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  width: 100%;
  height: auto;
`;

export default function IndexPage() {
  return (
    <Wrapper>
      <CreateProductForm />
    </Wrapper>
  );
}
