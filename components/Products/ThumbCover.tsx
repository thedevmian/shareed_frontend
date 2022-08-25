import styled from "styled-components";
import { MdOutlinePhotoCamera } from "react-icons/md";

const ThumbInner = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 350px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;

const StyleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: var(--main-bg-color-dark-4);
  color: var(--transparent-light);
  margin: 1rem;

  @media screen and (min-width: 768px) {
    height: 250px;
  }
`;

// eslint-disable-next-line react/prop-types
const ThumbCover: React.FC<{ image: string }> = ({ image }) => {
  return (
    <ThumbInner>
      {image ? (
        <Img src={image} />
      ) : (
        <StyleImageContainer>
          <MdOutlinePhotoCamera size={50} />
        </StyleImageContainer>
      )}
    </ThumbInner>
  );
};

export default ThumbCover;
