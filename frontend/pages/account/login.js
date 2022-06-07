import Wrapper from "../../styles/Wrapper";
import styled from "styled-components";
import SignIn from "../../components/account/SignIn";
import SignUp from "../../components/account/SignUp";
import Heading2 from "../../styles/Heading2";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    gap: 3rem;
    width: 80%;
  }
`;

const FormContainer = styled.section`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (min-width: 1440px) {
    width: 30rem;
    padding: 0;
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
        <FormContainer>
          <Heading2>Sign up</Heading2>
          <Span>Sign up to your account with your email address</Span>
          <SignUp />
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default SignInPage;
