import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styled from "styled-components";

const PictureContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

interface IZoomPictureProps {
  src: string;
  alt: string;
}

const ZoomMainPicture = ({ src, alt }: IZoomPictureProps) => {
  return (
    <Zoom overlayBgColorEnd="rgba(100, 100, 100, 0.85)">
      <PictureContainer>
        <img alt={alt} src={src} />
      </PictureContainer>
    </Zoom>
  );
};

export default ZoomMainPicture;
