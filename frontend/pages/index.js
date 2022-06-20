import styled from "styled-components";
import firstImage from "../public/static/images/med1.jpg";
import secondImage from "../public/static/images/med2.jpg";
import thirdImage from "../public/static/images/med3.jpg";
import Image from "next/image";
import Heading2 from "../styles/Heading2";
import Video from "../components/Video";

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
  border: 1px solid black;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
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

export default function IndexPage() {
  return (
    <Wrapper>
      <Section>
        <Video videoUrl={"http://thenewcode.com/assets/videos/fashion.mp4"} type={"video/mp4"} />
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
