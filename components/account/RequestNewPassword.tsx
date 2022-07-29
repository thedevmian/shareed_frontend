import { Formik, Form } from "formik";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import Heading2 from "../../styles/Heading2";
import ShowError from "../utils/ShowError";
import Spinner from "../utils/Spinner";
import Router from "next/router";
import styled from "styled-components";
import { BiMailSend } from "react-icons/bi";
import * as Yup from "yup";

const REQUEST_NEW_PASSWORD = gql`
  mutation REQUEST_NEW_PASSWORD($email: String!) {
    sendUserPasswordResetLink(email: $email)
  }
`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const RequestNewPassword = () => {
  const initialValues = { email: "" };
  const [loading, setLoading] = useState(false);
  const [requestNewPassword, { data }] = useMutation(REQUEST_NEW_PASSWORD, {
    variables: initialValues,
  });

  return (
    <Container>
      <div>
        {!data && !loading && (
          <>
            <Heading2>Password Recover</Heading2>
            <Span>
              Enter your email address and we will send you a link to reset your password.
            </Span>
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                email: Yup.string().email("Invalid email").required("Required"),
              })}
              onSubmit={async (values) => {
                setLoading(true);
                await sleep(1000);
                await requestNewPassword({
                  variables: {
                    email: values.email,
                  },
                });
                setLoading(false);
              }}
            >
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && <ShowError>{errors.email}</ShowError>}

                  <Button type="submit">Request new password</Button>
                </Form>
              )}
            </Formik>
          </>
        )}

        {loading && (
          <Container>
            <Spinner />
          </Container>
        )}
        {data && (
          <Container>
            <BiMailSend className="send" size={50} color="green" />
            <Span>
              Check your mailbox! We’ve just sent you an email with your reset password link. Make
              it quick you’ve got 24 hours.
            </Span>
            <Button onClick={() => Router.push("/")}>Go to home page</Button>
          </Container>
        )}
      </div>
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
  width: 80%;

  svg .send {
    margin-bottom: 1rem;
    animation: jump 1s infinite;

    @keyframes jump {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const Span = styled.span`
  font-size: 0.9rem;
  width: 50%;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: var(--main-text-color);
`;
