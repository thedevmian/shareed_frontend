import {
  BagItemsWrapper,
  BagItem,
  BagItemH4,
  BagContainer,
  StyledSpan,
  BagItemName,
  BagParagraph,
  ImageContainer,
  CheckoutButton,
  CheckoutSection,
  TotalSection,
  ItemsContainer,
  TextLine,
} from "components/Products/BagModal/bagItemsModal.styles";
import { useUser } from "hooks/useUser";
import Image from "next/image";
import formatMoney from "lib/products/formatMoney";
import bagTotal from "lib/products/bagTotal";
import Wrapper from "styles/Wrapper";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";
import DeleteBagItem from "components/Products/BagModal/DeleteBagItem";
import Button from "styles/Button";
import WideWrapper from "styles/WideWrapper";
import Span from "styles/Span";
import { Line } from "styles/Line";

const BagPage = () => {
  const shippingFee = 500;
  const user = useUser();
  if (!user) {
    return (
      <Wrapper>
        <BagItemsWrapper className="bag-wrapper-site">
          <BagItemH4>You must be logged in to see your bag</BagItemH4>
          <BagContainer>
            <StyledSpan>To view your bag please</StyledSpan>
            <br />
            <Link href="/login">
              <a>
                <Button>login</Button>
              </a>
            </Link>
            <StyledSpan>or</StyledSpan>
            <br />
            <Link as="/register" href="/login">
              <a>
                <Button>register</Button>
              </a>
            </Link>
          </BagContainer>
        </BagItemsWrapper>
      </Wrapper>
    );
  }
  if (user?.cart?.length === 0) {
    return (
      <Wrapper>
        <BagItemsWrapper className="bag-wrapper-site">
          <BagItemH4>Your bag is empty</BagItemH4>
          <p>
            You have no items in your bag.
            <Link href="/">
              <a>
                <Button>continue shopping</Button>
              </a>
            </Link>
          </p>
        </BagItemsWrapper>
      </Wrapper>
    );
  }

  return (
    <WideWrapper>
      <BagItemsWrapper className="bag-items bag-wrapper-site">
        <ItemsContainer className="items-container-site">
          <BagItemH4>My Shopping Bag Shareed</BagItemH4>
          {user?.cart
            ?.map(({ product, quantity, id }) => {
              if (!product) return null;
              const { name, price, photo } = product[0];
              const imageURL = photo?.[0].image?.publicUrlTransformed;
              return (
                <BagItem className="bag-item site" key={id}>
                  <ImageContainer className="bag-image-site">
                    <Image
                      src={imageURL as string}
                      alt={name as string}
                      layout="fill"
                      objectFit="cover"
                    />
                  </ImageContainer>
                  <BagItemName>{name}</BagItemName>
                  <BagParagraph>
                    Quantity:
                    <br />
                    <strong>{quantity}</strong>
                  </BagParagraph>
                  <BagParagraph>
                    Price:
                    <br />
                    <strong>{formatMoney(price * quantity)}</strong>
                  </BagParagraph>
                  <DeleteBagItem id={id} />
                </BagItem>
              );
            })
            .reverse()}
        </ItemsContainer>
        <CheckoutSection className="checkout-section-site">
          <BagItemH4>Order summary</BagItemH4>
          <TotalSection className="total-section-site">
            <TextLine>
              <Span className="span-xl span-space">Sub-total:</Span>
              <strong>{formatMoney(bagTotal(user?.cart))}</strong>
            </TextLine>
            <TextLine>
              <Span className="span-xl span-space">Estimated shipping</Span>
              <strong>{formatMoney(shippingFee)}</strong>
            </TextLine>
            <Line />
            <hr />
            <TextLine>
              <Span className="span-xl span-space">Total:</Span>
              <strong>{formatMoney(bagTotal(user?.cart) + shippingFee)}</strong>
            </TextLine>
          </TotalSection>
          <TotalSection className="total-section-site checkout-section">
            <Link href="/checkout">
              <a>
                <CheckoutButton>
                  Proceed To Checkout
                  <BsCartDash size={16} />
                </CheckoutButton>
              </a>
            </Link>
            <Span>
              Our returns are free and easy. If something isnt quite right, you
              have 14 days to send it back to us. Read more in our returns and
              refund policy
            </Span>
          </TotalSection>
        </CheckoutSection>
      </BagItemsWrapper>
    </WideWrapper>
  );
};

export default BagPage;
