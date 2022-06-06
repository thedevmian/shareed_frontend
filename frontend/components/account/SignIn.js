import { Formik, Field, Form } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { CURRENT_USER } from "../../hooks/useUser";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";


const SIGNIN_USER = gql`
  mutation SIGNIN_USER($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
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



const SignIn = () => {
  const [errors, setErrors] = useState(null);
  const [signInUser, { loading, error, data }] = useMutation(SIGNIN_USER, {
    variables: {
      email: "",
      password: "",
    },
    // refetchQueries: [{ query: CURRENT_USER }],
  });

  const handleSumbit = async (values) => {
    await signInUser({
      variables: {
        email: values.email,
        password: values.password,
      }
    })
    if (data?.authenticateUserWithPassword?.__typename === "UserAuthenticationWithPasswordSuccess") {
      Router.push("/");
    } else {
      setErrors({
        email: "Invalid email or password",
      });
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          handleSumbit(values);
        }}
        
        
      >
        {({ values, isSubmitting, handleChange, handleBlur }) => (
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              placeholder="email address"
              type="email"
              onChange={handleChange}

              onBlur={handleBlur}
              value={values.email}
            />
            <br />
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              placeholder="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br />

            <Center>
              <input name="rememberMe" type="checkbox" />
              <Label htmlFor="rememberMe">Remember Me</Label>
              <Link href="/account/request-new-password">
                <a>Forgot Password?</a>
              </Link>
            </Center>
            <br />

            {
              // error handling
            }

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;

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
    width: 100%;
  }
`;
