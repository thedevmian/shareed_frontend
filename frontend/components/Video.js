import styled from "styled-components";

const Video = ({ videoUrl, type }) => {
  return (
    <StyledVideo className="video" autoPlay muted loop>
      <source src={videoUrl} type={type} />
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  width: 100vw;
  height: 80%;
  border: 2px solid #ccc;
`;

export default Video;
