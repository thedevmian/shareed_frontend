import Button from "../../styles/Button";

const addToBag = (product: string) => {
  // const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :{error.message}</p>;
  // if (data) {
  //     const { products } = data;
  //     const productToAdd = products.find(product => product.id === id);
  //     console.log(productToAdd);
  // }
};

interface IAddToBagButtonProps {
  productID: string;
}

const AddToBagButton = ({ productID }: IAddToBagButtonProps) => {
  return (
    <Button
      onClick={() => {
        addToBag(productID);
      }}
    >
      Add to bag
    </Button>
  );
};

export default AddToBagButton;
