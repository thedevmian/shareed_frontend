import { gql } from "@apollo/client";

export const ADD_PRODUCT_TO_BAG = gql`
  mutation AddProductToBag($id: ID!) {
    addProductToBag(productId: $id) {
      id
      quantity
      product {
        id
      }
    }
  }
`;
