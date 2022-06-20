import styled from "styled-components";

const Video = ({ videoUrl, type }) => {
  return (
    <StyledVideo className="video" autoPlay muted loop>
      <source src={videoUrl} type={type} />
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  width: 100%;
  height: 60vh;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 90vh;
  }

  @media screen and (min-width: 1024px) {
    height: 100vh;
  }

`;



export default Video;
