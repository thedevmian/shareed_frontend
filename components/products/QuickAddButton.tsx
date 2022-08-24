import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_TO_BAG } from "graphql/operations/addProductToBag";
import styled from "styled-components";

interface IProductIdProps {
  productId: string;
}

const QuickAddButton = ({ productId }: IProductIdProps) => {
  const [addProductToBag, { loading, error, data }] = useMutation(
    ADD_PRODUCT_TO_BAG,
    {
      variables: {
        id: productId,
      },
      refetchQueries: ["CurrentUser"],
      onError: () => {
        return null;
      },
    }
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Please log in first</div>;
  return (
    <ButtonStyles onClick={() => addProductToBag()}>
      {data?.addProductToBag.id ? "Added to bag" : "Quick add"}
    </ButtonStyles>
  );
};
export default QuickAddButton;

const ButtonStyles = styled.button`
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
  margin: 0;
  padding: 0 1rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  border: none;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 1rem;
    background-color: var(--main-text-color);
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
