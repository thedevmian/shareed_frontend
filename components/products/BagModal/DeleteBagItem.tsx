import { useDeleteItemBagMutation } from "@/graphql/types";
import { BiX } from "react-icons/bi";
import styled from "styled-components";

interface IDeleteBagItemProps {
  id: string;
}

function DeleteBagItem({ id }: IDeleteBagItemProps) {
  const [deleteBagItem, { loading, error }] = useDeleteItemBagMutation({
    variables: {
      where: {
        id,
      },
    },
    update(cache) {
      const normalizedId = cache.identify({
        __typename: "Cart",
        id,
      });
      cache.evict({ id: normalizedId });
      cache.gc();
    },
  });

  const handleDeleteBagItem = async () => {
    try {
      await deleteBagItem();
    } catch {
      console.log(error);
    }
  };

  return (
    <DeleteButton
      onClick={() => handleDeleteBagItem()}
      disabled={loading}
      title="Remove This Product from the Cart"
    >
      <BiX size={26} />
    </DeleteButton>
  );
}

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: darkred;
  &:hover {
    transform: scale(1.1);
  }
`;

export default DeleteBagItem;
