import { useGetProductQuery } from "@/graphql/types";
import Head from "next/head";
import styled from "styled-components";
import formatMoney from "../../lib/products/formatMoney";
import AddToBagButton from "./AddToBagButton";
import AddToFavoriteButton from "./AddToFavoriteButton";
import ZoomMainPicture from "./ZoomMainPicture";
import ZoomPicture from "./ZoomPicture";
import { ISingleProductProps } from "pages/product/[id]";

const ProductContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-color: white;
  }
`;

const Heading = styled.h1`
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 0.9rem;
  width: 100%;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: var(--main-text-color);

  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: var(--main-text-color);
`;

const Span = styled.span`
  font-size: 0.8rem;
  color: var(--main-text-color);
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    margin-left: 2rem;
    width: 60%;
  }

  @media (min-width: 1024px) {
    margin-left: 4rem;
    width: 40%;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }
`;

const LineWrapper = styled.div`
  width: 100%;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    width: 80%;
    flex-direction: row;
  }
`;

const AnotherPhotoContainer = styled.div`
  width: 80%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 4rem;
`;

const SingleProduct = ({ id }: ISingleProductProps) => {
  const { loading, error, data } = useGetProductQuery({
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p data-testid="error">Error :{error.message}</p>;
  if (data) {
    const { name, photo, description, id, price } = data.product!;
    if (!photo) {
      return <p>No photo</p>;
    }
    const restofPhotos = photo.slice(1, photo.length);
    return (
      <ProductContainer data-testid="single-product">
        <Head>
          <title>Shareed - {name}</title>
        </Head>
        <MainSection>
          <ImageWrapper>
            <ZoomMainPicture
              src={photo[0].image?.publicUrlTransformed as string}
              alt={photo[0].image?.filename as string}
            />
          </ImageWrapper>
          <InfoContainer>
            <LineWrapper>
              <Heading>{name}</Heading>
              <AddToFavoriteButton />
            </LineWrapper>
            <Description>{description}</Description>
            <LineWrapper>
              <Price>{formatMoney(price as number)}</Price>
              <Span>(VAT included)</Span>
            </LineWrapper>
            <Description>
              Mid-washed light indigo denim jeans.
              <br />
              Straight fit Classic waist
              <br />
              Straight leg 18 cm bottom leg width (Size 30) 5 pockets Tobacco
              topstitches
              <br />
              Buttoned fly
              <br />
              Metal rivets and buttons in antic black color ami black leather
              patch on the back
              <br />
              Eco-friendly washing reducing its environmental impact
              <br />
              Main fabric:100% Cotton
            </Description>
            <AddToBagButton productId={id} />
          </InfoContainer>
        </MainSection>
        <AnotherPhotoContainer>
          {restofPhotos.map((photo) => (
            <ZoomPicture
              key={photo.id}
              src={photo.image?.publicUrlTransformed as string}
              alt={photo.image?.filename as string}
            />
          ))}
        </AnotherPhotoContainer>

        <div>
          <Heading>You might also like</Heading>
        </div>
      </ProductContainer>
    );
  } else {
    return <></>;
  }
};

export default SingleProduct;
