import Wrapper from "../../styles/Wrapper";
import styled from "styled-components";
import SignIn from "../../components/account/SignIn";
import SignUp from "../../components/account/SignUp";
import Heading2 from "../../styles/Heading2";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 80%;
  }
`;

const FormContainer = styled.div`
  width: 30rem;
  padding: 2rem;
  background-color: aliceblue;
`;

const Span = styled.span`
  font-size: 0.9rem;
  width: 100%;
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
