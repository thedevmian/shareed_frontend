import styled from "styled-components";
import thumbCoverImage from "../../public/static/images/thumbCover.png";
import Image from "next/image";

const ThumbInner = styled.div`
  overflow: hidden;
  padding: 0 1rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyleImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function ThumbCover({ image }) {
  return (
    <ThumbInner>{image ? <Img src={image} /> : <StyleImage src={thumbCoverImage} />}</ThumbInner>
  );
}

export default ThumbCover;
