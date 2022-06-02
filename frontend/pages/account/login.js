import Wrapper from "../../styles/Wrapper";
import styled from "styled-components";


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

const Heading = styled.h2`
  margin: 0.5rem 0;
  font-size: 2rem;
  font-weight: 400;
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
          <Heading>Log in</Heading>
          <Span>Log in to your account with your email address</Span>
            <Sing
        {/* <RequestReset /> */}
        </FormContainer>


        <FormContainer>
          <Heading>Sign up</Heading>
          <Span>Sign up to your account with your email address</Span>
        {/* <SignUp /> */}
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default SignInPage;
