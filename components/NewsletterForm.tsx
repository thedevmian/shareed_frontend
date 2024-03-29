import styled from "styled-components";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import Input from "../styles/Input";
import Button from "../styles/Button";
import ShowError from "./utils/ShowError";

const NewsletterSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  firstName: Yup.string()
    .required("Your name is required")
    .min(2, "Too Short!")
    .max(30, "Too Long!"),
});

type NewsletterInputs = {
  email: string;
  firstName: string;
};

const NewsletterForm = () => {
  const initialValues = { email: "", firstName: "" };

  const handleSubmit = (values: NewsletterInputs) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={NewsletterSchema}
    >
      {({ touched, errors, handleChange, handleBlur, values }) => (
        <StyleForm>
          <Input
            className="newsletter"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          <Input
            className="newsletter"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.firstName && errors.firstName && (
            <ShowError>{errors.firstName}</ShowError>
          )}
          {touched.email && errors.email && (
            <ShowError>{errors.email}</ShowError>
          )}
          <LegalText>
            By clicking &quot;Subscribe&quot;, you agree to our Terms of Service
            and Privacy Policy.
          </LegalText>
          <Button type="submit">Subscribe</Button>
        </StyleForm>
      )}
    </Formik>
  );
};

const StyleForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 40%;
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

const LegalText = styled.p`
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--main-bg-color-dark-3);
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default NewsletterForm;
