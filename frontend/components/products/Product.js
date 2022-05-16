import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../../lib/formatMoney';
import AddToCartButton from './AddToCartButton';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
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
  font-size: 0.9rem;
  text-transform: uppercase;
  padding-left: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 1rem;
`;

const ProductInfo = styled.div`
  display: flex;
  padding-top: 0.5rem;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #fcfcfc;
  color: #333;
`;
const ProductHoverInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #fcfcfc;
  color: #333;
  width: 100%;
`;

const Product = ({ product }) => {
  const { id, name, price, photo } = product;
  return (
    <ProductContainer>
      <ImageContainer>
        <ProductImage src={photo[0]?.image.publicUrl} alt={photo[0]?.altText} />
      </ImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>{formatMoney(price)}</ProductPrice>
      </ProductInfo>
      <ProductHoverInfo>
        <AddToCartButton productId={id} />
      </ProductHoverInfo>
    </ProductContainer>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
