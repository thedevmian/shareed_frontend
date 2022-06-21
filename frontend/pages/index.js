import styled from "styled-components";
import firstImage from "../public/static/images/med1.jpg";
import secondImage from "../public/static/images/med2.jpg";
import thirdImage from "../public/static/images/med3.jpg";
import Image from "next/image";
import Heading2 from "../styles/Heading2";
import Video from "../components/Video";
import Button from "../styles/Button";
import { useRouter } from "next/router";

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

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  overflow: hidden;
`;

const VideoCover = styled.div`
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
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;

  @media screen and (min-width: 768px) {
    height: 70vh;
  }

  @media screen and (min-width: 1024px) {
    height: 90vh;
  }
`;

const VideoHeading = styled(Heading2)`
  color: #fff;
  font-size: 5rem;
  font-weight: bolder;
  text-transform: uppercase;
  text-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, 0.21);
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  font-style: italic;
  margin-top: 1rem;
  width: 50%;
  margin-bottom: 2rem;
  font-weight: 300;
  stroke: #fff;
  stroke-width: 0.1rem;
  text-align: center;
`;

const GoToButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #fff;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export default function IndexPage() {
  return (
    <Wrapper>
      <Section>
        <VideoCover>
          <VideoHeading>2022 Summer Collection</VideoHeading>
          <Paragraph>
            Check out the new 2020 summer collection! We've got the best of both worlds in one
            place.
          </Paragraph>
          <GoToButton>Go to collection</GoToButton>
        </VideoCover>
        <Video />
      </Section>
      <Section>
        <ImageContainer>
          <Image
            src={secondImage}
            layout="fill"
            objectFit="cover"
            quality={95}
            placeholder="blur"
          />
        </ImageContainer>
      </Section>
      <Section>
        <ImageContainer>
          <Image src={thirdImage} layout="fill" objectFit="cover" quality={100} priority />
        </ImageContainer>
      </Section>
      <Section>
        <Heading2>Welcome to the home page</Heading2>
      </Section>
      <Section>
        <ImageContainer>
          <Image src={firstImage} layout="fill" objectFit="cover" quality={100} priority />
        </ImageContainer>
      </Section>
    </Wrapper>
  );
}
