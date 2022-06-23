import { Formik, Field, Form } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CURRENT_USER } from "../../hooks/useUser";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import ShowError from "../utils/ShowError";
import SuccessInfo from "../utils/SuccessInfo";
import styled from "styled-components";
import Link from "next/link";
import * as Yup from "yup";
import Router from "next/router";

const SIGNIN_USER = gql`
  mutation SIGNIN_USER($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        sessionToken
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const SignIn = () => {
  const initialValues = { email: "", password: "" };
  const [failLogin, setFailLogin] = useState(null);
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const [signInUser, { loading, data, error }] = useMutation(SIGNIN_USER, {
    variables: initialValues,
  });

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={async (values, actions) => {
          await signInUser({
            variables: {
              email: values.email,
              password: values.password,
            },
          })
            .then((res) => {
              if (res.data.authenticateUserWithPassword.sessionToken) {
                setSuccessfulLogin(true);
                wait(2000).then(() => {
                  actions.resetForm({
                    values: { email: "", password: "" },
                  });
                  Router.push("/");
                });
              } else {
                setFailLogin(res.data.authenticateUserWithPassword.message);
                actions.resetForm({
                  values: { email: "", password: "" },
                });
                actions.setSubmitting(false);
              }
            })
        }}
        enableReinitialize={true}
      >
        {({ isSubmitting, touched, errors, handleChange, handleBlur, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              placeholder="email address"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <ShowError>{errors.email}</ShowError>}
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              placeholder="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && <ShowError>{errors.password}</ShowError>}
            <br />
            <Center>
              <input name="rememberMe" type="checkbox" />
              <Label htmlFor="rememberMe">Remember Me</Label>
            </Center>
            <Center>
              <Link href="/account/request-new-password">
                <a>Forgot Password?</a>
              </Link>
            </Center>
            <br />
            {failLogin && (
              <ShowError>Please check your email and password and try again.</ShowError>
            )}
            {successfulLogin && <SuccessInfo>Successfully logged in.</SuccessInfo>}
            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignIn;

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Center = styled.div`
  display: flex;
  gap: 1rem;
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: var(--main-bg-color-light);
    border: 1px solid var(--main-bg-color-dark-3);
  }
  input[type="checkbox"]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-color: var(--main-bg-color-dark-2);
  }
  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }

  a {
    color: var(--main-text-color);
    font-size: 0.8rem;
    text-decoration: underline;
    margin-right: 2rem;
  }
`;
