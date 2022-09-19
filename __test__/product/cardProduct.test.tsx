import { render, screen } from "@testing-library/react";
import CardProduct from "components/Products/CardProduct";
import { MockedProvider } from "@apollo/react-testing";
import "@testing-library/jest-dom";

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
        publicUrl: "image.jpg",
      },
      altText: "Product Name",
    },
  ],
};

describe("Single card product", () => {
  it("should render the product detail component", () => {
    const { container } = render(
      <MockedProvider>
        <CardProduct product={fakeProduct} />
      </MockedProvider>
    );
    expect(screen.getByText("Product Name")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(1);
    // photo
    const image = container.querySelector("img");
    expect(image).toHaveAttribute("src", "image.jpg");
  });

  it("should render the product detail component with no image", () => {
    const { container } = render(
      <MockedProvider>
        <CardProduct product={{ ...fakeProduct, photo: [] }} />
      </MockedProvider>
    );
    expect(screen.getByText("Product Name")).toBeInTheDocument();

    const image = container.querySelector("img");
    expect(image).toHaveAttribute("src", "/static/images/thumbCover.jpg");
  });
  it("snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <CardProduct product={fakeProduct} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
