import Link from "next/link";
import styled from "styled-components";
import firstPhotoCover from "../public/static/images/photo-1.jpg";
import secondPhotoCover from "../public/static/images/photo-2.jpg";
import Image from "next/image";
import Heading2 from "../styles/Heading2";
import Video from "../components/Video";
import Button from "../styles/Button";
import NewsletterForm from "../components/NewsletterForm";
import LatestProducts from "../components/products/LatestProducts";

export default function IndexPage() {
  return (
    <Wrapper>
      <Section>
        <ContentWrapper>
          <SectionHeading>Summer Collection 2022</SectionHeading>
          <Paragraph>
            Check out the new 2020 summer collection! We've got the best of both worlds in one
            place.
          </Paragraph>
          <Link href="/collections/new">
            <GoToButton>Go to collection</GoToButton>
          </Link>
        </ContentWrapper>
        <Video />
      </Section>
      <ProductListSection className="products-list">
        <LatestProducts />
      </ProductListSection>

      <Section>
        <ContentWrapper className="darker-background">
          <SectionHeading>Women streetwear collection</SectionHeading>
          <Paragraph>
            Trending clothes for the women. Get some cool and limited streetwear clothes.
          </Paragraph>
          <Link href="/collections/women">
            <GoToButton>Women Collection</GoToButton>
          </Link>
        </ContentWrapper>
        <ImageContainer>
          <Image src={firstPhotoCover} layout="fill" objectFit="cover" quality={100} priority />
        </ImageContainer>
      </Section>

      <Section>
        <ContentWrapper className="white">
          <Heading2>SUBSCRIBE AND GET 10% OFF</Heading2>
          <Paragraph className="black">
            Sign up for early sale access, new in, promotions and more
          </Paragraph>
          <NewsletterForm />
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper className="darker-background">
          <SectionHeading>Sign in / Sign up</SectionHeading>
          <Link href="/account/login">
            <GoToButton>Sign in / Sign Up</GoToButton>
          </Link>
        </ContentWrapper>
        <ImageContainer>
          <Image src={secondPhotoCover} layout="fill" objectFit="cover" quality={100} priority />
        </ImageContainer>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  width: 100%;
  min-height: 100vh;
`;
const ProductListSection = styled.div`
  width: 100%;
  min-height: min-content;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  overflow: hidden;

  &.products-list {
    @media screen and (max-width: 1024px) {
      height: min-content;
    }
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4rem;

  &.white {
    background-color: var(--main-bg-color-light);
  }

  &.darker-background {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SectionHeading = styled(Heading2)`
  color: #fff;
  font-weight: bolder;
  text-transform: uppercase;
  text-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.21);
  text-align: center;
  font-size: 2rem;
  width: 80%;

  @media screen and (min-width: 480px) {
    font-size: 3.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-top: 1rem;
  width: 50%;
  margin-bottom: 2rem;
  font-weight: 300;
  text-align: center;
  word-wrap: break-word;

  &.black {
    color: var(--main-text-color);
  }
`;

const GoToButton = styled(Button)`
  margin-top: 4rem;
  background-color: transparent;
  border: 1px solid #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
