import Button from "../../styles/Button";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT_TO_BAG } from "graphql/operations/addProductToBag";

interface IAddToBagButtonProps {
  productId: string;
}

const AddToBagButton = ({ productId }: IAddToBagButtonProps) => {
  const [addProductToBag, { loading, data }] = useMutation(ADD_PRODUCT_TO_BAG, {
    variables: {
      id: productId,
    },
    refetchQueries: ["CurrentUser"],
    onError: () => {
      return null;
    },
  });

  return (
    <Button onClick={() => addProductToBag()} disabled={loading}>
      {data?.addProductToBag.id ? "Added to bag" : "Add to bag"}
    </Button>
  );
};

export default AddToBagButton;
