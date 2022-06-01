import styled from "styled-components";

const addToBag = (product) => {
    const { id, name, price, photo } = product;
    const productToAdd = {
        id,
        name,
        price,
        photo
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


const Button = styled.button`
    background: var(--main-bg-color-dark);
    border: none;
    color: var(--main-text-color-white);
    font-size: 1rem;
    padding: 1rem 3rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: var(--main-bg-color-dark-3);
    }

    &:active {
        background: var(--main-bg-color-dark-2);
        transform: scale(0.95);
    }
`;