import styled from "styled-components";
import { useMedia } from "../hooks/useMedia";

const Video = () => {
  const { isMobile } = useMedia();

  return (
    <StyledVideo autoPlay muted loop>
      {isMobile ? (
        <source
          src="https://res.cloudinary.com/dkxixe3yr/video/upload/v1655822030/shareed/home_video/shareed_home_video_staticVideo_qcpynq-ac_none_c_crop_h_1012_vc_auto_w_1459_webm_1_morgi6.webm"
          type="video/webm"
          media="(max-width:1080px)"
        />
      ) : (
        <source
          src="https://res.cloudinary.com/dkxixe3yr/video/upload/v1655824008/shareed/home_video/shareed_home_video_staticVideo_qcpynq-ac_none_q_100_vc_auto_webm_pw9v6s.webm"
          type="video/webm"
        />
      )}
    </StyledVideo>
  );
};

const StyledVideo = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

export default Video;
