/* eslint-disable @next/next/no-img-element */
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import styled from "styled-components";

const PictureContainer = styled.div`
  width: 35rem;
  height: 45rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ZoomPicture = ({src, alt}) => {
  return (
    <Zoom overlayBgColorEnd='rgba(100, 100, 100, 0.85)'>
      <PictureContainer>
      <img alt={alt} src={src} width="100%" height="100%" />
      </PictureContainer>
    </Zoom>
      
  );
};

export default ZoomPicture;

