import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import "@testing-library/jest-dom";
import BagItemsIdentificator from "components/Products/BagModal/BagItemsIdentificator";
import { CurrentUserDocument } from "@/graphql/types";

const fakeUser = (overrides) => ({
  __typename: "User",
  id: "4234",
  name: "John",
  email: "johntest@mail.com",
  orders: [],
  cart: [{}, {}, {}],
  ...overrides,
});

const fakeCartItem = (overrides) => ({
  __typename: "CartItem",
  id: "omg123",
  quantity: 3,
  product: fakeItem(),
  user: fakeUser(),
  ...overrides,
});

const fakeItem = () => ({
  // __typename: 'Item',
  id: "abc123",
  price: 5000,
  photo: {
    id: "abc123",
    altText: "dogs are best",
    image: {
      publicUrlTransformed: "dog.jpg",
    },
  },
  name: "dogs are best",
  description: "dogs",
});

const notSignedInMocks = [
  {
    request: { query: CurrentUserDocument },
    result: { data: { authenticatedItem: null as any } },
  },
];

const signedInMocks = [
  {
    request: { query: CurrentUserDocument },
    result: { data: { authenticatedItem: fakeUser() } },
  },
];

const signedInMocksWithCartItems = [
  {
    request: { query: CurrentUserDocument },
    result: {
      data: {
        authenticatedItem: fakeUser(),
      },
    },
  },
];
describe("Bag Identyficator", () => {
  test("should render the bag identyficator", async () => {
    const { debug, rerender, container } = render(
      <MockedProvider mocks={signedInMocksWithCartItems}>
        <BagItemsIdentificator />
      </MockedProvider>
    );

    debug();
    expect(container).toMatchSnapshot();
  });
});
