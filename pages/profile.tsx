import { useUser } from "hooks/useUser";
import styled from "styled-components";
import Wrapper from "styles/Wrapper";

const ProfilePage = () => {
  const user = useUser();
  if (!user)
    return (
      <Wrapper>
        <h4>Loading...</h4>
      </Wrapper>
    );

  return (
    <Container>
      <h1>Profile</h1>
      <InformationContainer>
        <LeftColumn>
          <div>
            <h2>Username</h2>
            <p>{user.name}</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{user.email}</p>
          </div>
          <div>
            <h2>Orders</h2>
            <p>{user.orderCount}</p>
          </div>
        </LeftColumn>
        <RightColumn>
          <StyledImg
            src={
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
            width="150px"
            height="150px"
            alt="profile"
          />
          <PicButton
            onClick={() => alert("This feature is not yet implemented")}
          >
            Change Profile Picture
          </PicButton>
        </RightColumn>
      </InformationContainer>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 70vh;
  margin-top: 4rem;
  gap: 1rem;
  margin-bottom: 8rem;
  width: 90%;

  @media only screen and (min-width: 960px) {
    /* styles for browsers larger than 960px; */
    width: 60%;
  }
  @media only screen and (min-width: 1440px) {
    /* styles for browsers larger than 1440px; */
    width: 40%;
  }
  @media only screen and (min-width: 2000px) {
    /* for sumo sized (mac) screens */
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const RightColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const PicButton = styled.button`
  width: max-content;
  padding: 0.5rem 1rem;
  height: 2rem;
  border: none;
  background-color: var(--primary);
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--primary-hover);
  }

  @media screen and (min-width: 1024px) {
    margin-top: 0;
  }
`;
