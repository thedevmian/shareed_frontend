import { Formik, Field, Form } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import Wrapper from "../../styles/Wrapper";
import Heading2 from "../../styles/Heading2";
import Spinner from "../../components/utils/Spinner";
import Router from "next/router";
import styled from "styled-components";

const REQUEST_NEW_PASSWORD = gql`
  mutation REQUEST_NEW_PASSWORD($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RequestNewPassword = () => {
  const [requestNewPassword, { loading, error, data }] = useMutation(REQUEST_NEW_PASSWORD, {
    variables: {
      email: "",
    },
    onCompleted: (data) => {
      console.log("data", data);
    },
  });

  return (
    <Container>
      <div>
        <Heading2>Password Recover</Heading2>
        <Span>Enter your email address and we will send you a link to reset your password.</Span>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
            await requestNewPassword({
              variables: {
                email: values.email,
              },
            })
              .catch((error) => {
                console.log("error", error);
              })
              .then((data) => {
                console.log("data", data);
              });
          }}
        >
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" />
            <Button type="submit">Request new password</Button>
          </Form>
        </Formik>
      </div>
      {loading && <Spinner />}
      {data && (
        <Container>
          <p>
            Check your mailbox! We’ve just sent you an email with your reset password link. Make it
            quick you’ve got 24 hours.
          </p>
          <Button onClick={() => Router.push("/")}>Go to home page</Button>
        </Container>
      )}
    </Container>
  );
};

export default RequestNewPassword;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  height: 70vh;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

const Span = styled.span`
  font-size: 0.9rem;
  width: 80%;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: var(--main-text-color);
`;
