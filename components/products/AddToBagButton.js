import styled from "styled-components";
import Button from "../../styles/Button";

const addToBag = (product) => {
  const { id, name, price, photo } = product;
  const productToAdd = {
    id,
    name,
    price,
    photo,
  };
  console.log(productToAdd);
  // const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :{error.message}</p>;
  // if (data) {
  //     const { products } = data;
  //     const productToAdd = products.find(product => product.id === id);
  //     console.log(productToAdd);
  // }
};

const AddToBagButton = ({ product }) => {
  return (
    <Button
      onClick={() => {
        addToBag(product);
      }}
    >
      Add to bag
    </Button>
  );
};

export default AddToBagButton;
