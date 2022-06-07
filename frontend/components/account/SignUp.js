import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import styled from "styled-components";
import ShowError from "../utils/ShowError";

const SIGNUP_MUTATION = gql`
  mutation SignUpMutation($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      token
      id
      email
      name
    }
  }
`;

const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(6, "Too short! (min 6 characters)"),
});


const SignUp = () => {
  const initialValues = { email: "", password: "", name: "" };

  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting, touched, errors, handleChange, handleBlur, values }) => (
          <Form>
            <Label htmlFor="name">First Name*</Label>
            <Input
              name="name"
              placeholder="first name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {touched.name && errors.name && <ShowError>{errors.name}</ShowError>}
            <Label htmlFor="email">Email*</Label>
            <Input
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && <ShowError>{errors.email}</ShowError>}

            <Label htmlFor="password">Password*</Label>
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
            <Button type="submit" disabled={isSubmitting}>
              Create account
            </Button>
            <br />
            <Span>
              By clicking Register you agree to our Terms and Conditions and Privacy and Cookies
              Policy.
            </Span>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default SignUp;

const Span = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  width: 80%;
`;

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
