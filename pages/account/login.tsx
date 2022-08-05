import Wrapper from "../../styles/Wrapper";
import styled from "styled-components";
import Heading2 from "../../styles/Heading2";
import SignIn from "components/User/SignIn";
import SignUp from "components/User/SignUp";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const FormContainer = styled.section`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 60%;
    margin-left: 6rem;
  }

  @media screen and (min-width: 1440px) {
    width: 30rem;
    padding: 0;
  }

  &.second {
    @media screen and (min-width: 768px) {
      margin-left: 6rem;
    }

    @media screen and (min-width: 1440px) {
      margin-left: 9rem;
    }
  }
`;

const Span = styled.span`
  font-size: 0.9rem;
  width: 80%;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: var(--main-text-color);
`;

const SignInPage = () => {
  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Heading2>Log in</Heading2>
          <Span>Log in to your account with your email address</Span>
          <SignIn />
        </FormContainer>
        <FormContainer className="second">
          <Heading2>Sign up</Heading2>
          <Span>Sign up to your account with your email address</Span>
          <SignUp />
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default SignInPage;
