import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import formatMoney from '../../lib/formatMoney';
import AddToCartButton from './AddToCartButton';
import CardAddToFavoriteButton from './CardAddToFavoriteButton';

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

const CardProduct = ({ product }) => {
  const { id, name, price, photo } = product;
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  console.log(hover);
  return (
    <ProductContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardAddToFavoriteButton />
      <ImageContainer>
        <ProductImage src={photo[0]?.image.publicUrl} alt={photo[0]?.altText} />
      </ImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{formatMoney(price)}</ProductPrice>
      </ProductInfo>
      <ProductHoverInfo>
        {hover && <AddToCartButton productId={id} />}
      </ProductHoverInfo>
    </ProductContainer>
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CardProduct;
