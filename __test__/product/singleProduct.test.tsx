import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { GetProductDocument } from "../../graphql/types-and-hooks";
import SingleProduct from "components/Products/SingleProduct";

const fakeProduct = {
  id: "abc123",
  name: "Product Name",
  description: "Product Description",
  price: 100,
  user: {
    id: "abc123",
    name: "User Name",
  },
  photo: [
    {
      id: "abc123",
      image: {
        publicUrlTransformed: "image.jpg",
        filename: "image.jpg",
      },
      altText: "Product Name",
    },
  ],
};

const mocks = [
  {
    request: {
      query: GetProductDocument,
      variables: {
        id: "1",
      },
    },
    result: {
      data: {
        product: fakeProduct,
      },
    },
  },
];
const errorMock = [
  {
    request: {
      query: GetProductDocument,
      variables: {
        id: "2",
      },
    },
    result: {
      data: {
        product: null as any,
      },
    },
    error: {
      name: "Error",
      message: "Item not found",
    },
  },
];

describe("Single Product Page", () => {
  it("renders with proper data", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="1" />
      </MockedProvider>
    );
    expect(await screen.findByText(/Product Name/i)).toBeInTheDocument();
    expect(await screen.findByText(/Product Description/i)).toBeInTheDocument();
    expect(await screen.findByText("$1")).toBeInTheDocument();
  });

  it("render finding id", async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <SingleProduct id="1" />
      </MockedProvider>
    );
    await screen.findByTestId("single-product");
    debug();
    expect(container).toMatchSnapshot();
  });
  it("Error out when no data", async () => {
    const { container, debug } = render(
      <MockedProvider mocks={errorMock}>
        <SingleProduct id="2" />
      </MockedProvider>
    );

    await screen.findByTestId("error");
    debug();
    expect(container).toHaveTextContent("Error :Item not found");
  });
});
