/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useUser } from "hooks/useUser";
import Link from "next/link";
import Button from "styles/Button";
import {
  BagContainer,
  BagItem,
  BagItemH4,
  BagItemName,
  BagItemsWrapper,
  BagParagraph,
  ImageContainer,
  StyledSpan,
} from "./bagItemsModal.styles";
import formatMoney from "lib/formatMoney";
import Image from "next/image";
import DeleteBagItem from "./DeleteBagItem";

const BagItemsModal = () => {
  const user = useUser();

  if (!user) {
    return (
      <BagItemsWrapper>
        <br />
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
    );
  }
  if (user?.cart?.length === 0) {
    return (
      <BagItemsWrapper>
        <BagItem>
          <BagItemH4>Your bag is empty</BagItemH4>
        </BagItem>
        <p>
          You have no items in your bag.
          <Link href="/">
            <a>
              <Button>continue shopping</Button>
            </a>
          </Link>
        </p>
      </BagItemsWrapper>
    );
  }

  return (
    <BagItemsWrapper className="bag-items">
      {user?.cart
        ?.map(({ product, productCount, quantity, id }) => {
          const { name, price, photo } = product[0]!;
          const { publicUrlTransformed } = photo[0]?.image!;
          return (
            <BagItem className="bag-item" key={id}>
              <ImageContainer>
                <Image
                  src={publicUrlTransformed as string}
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
                <strong>{formatMoney(price! * quantity!)}</strong>
              </BagParagraph>
              <DeleteBagItem id={id} />
            </BagItem>
          );
        })
        .reverse()}
    </BagItemsWrapper>
  );
};

export default BagItemsModal;
