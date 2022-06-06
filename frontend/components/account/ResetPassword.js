import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import styled from "styled-components";
import Link from "next/link";
import Wrapper from "../../styles/Wrapper";
import Heading2 from "../../styles/Heading2";

const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, password: $password, token: $token) {
      code
      message
    }
  }
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ResetPassword = () => {
  const router = useRouter();

  const [resetPassword, { loading, error, data }] = useMutation(RESET_PASSWORD, {
    variables: {
      email: "",
      password: "",
      token: "",
    },
    onCompleted: (data) => {
      console.log("data", data);
    },
  });

  return (
    <Wrapper>
      <Heading2>Reset Your Password</Heading2>
      <Formik
        initialValues={{
          email: "",
          password: "",
          token: router.query.token,
        }}
        onSubmit={async (values) => {
          await sleep(500);
          await resetPassword(
            {
              variables: {
                email: values.email,
                password: values.password,
                token: values.token,
              },
            },
            alert(JSON.stringify(values, null, 2))
          )
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
          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" />
          <Button type="submit">Reset password</Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default ResetPassword;
