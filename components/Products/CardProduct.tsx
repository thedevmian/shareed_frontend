import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatMoney from "../../lib/products/formatMoney";
import QuickAddButton from "./QuickAddButton";
import AddToFavoriteButton from "./AddToFavoriteButton";
import Link from "next/link";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  :hover {
    cursor: pointer;
    background-color: var(--main-bg-color-light);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color-light);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductName = styled.h2`
  font-size: var(--font-size-md);
  text-transform: uppercase;
  margin: 0;
  padding-left: 1rem;
`;

const ProductPrice = styled.p`
  font-size: var(--font-size-xs);
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding-right: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 0.5rem 0;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
`;
const ProductHoverInfo = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  visibility: visible;
  flex-direction: row;
  justify-content: flex-end;
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
`;

const CardProduct = ({ product }: any) => {
  const { id, name, price, photo } = product;
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <ProductContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AddToFavoriteButton />
      <Link href="/product/[id]" as={`/product/${id}`}>
        <ImageContainer>
          <ProductImage
            src={photo?.[0]?.image.publicUrl || "/static/images/thumbCover.jpg"}
            alt={photo?.[0]?.altText}
          />
        </ImageContainer>
      </Link>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{formatMoney(price as number)}</ProductPrice>
      </ProductInfo>
      <ProductHoverInfo>
        {hover && <QuickAddButton productId={id} />}
      </ProductHoverInfo>
    </ProductContainer>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardProduct;
