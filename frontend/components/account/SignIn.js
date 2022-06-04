import { Formik, Field, Form } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";

const SIGNIN_USER = gql`
  mutation SIGNIN_USER($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const SignIn = () => {
  const [signInUser, { loading, error, data }] = useMutation(SIGNIN_USER, {
    variables: {
      email: "",
      password: "",
    },
    onCompleted: (data) => {
      

    },
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
          await signInUser({
            variables: {
              email: values.email,
              password: values.password,
            },
          })
            .catch((error) => {
              
            })
            .then((data) => {
              console.log("data", data);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="email address" type="email" />
            <br />
            <Label htmlFor="password">Password</Label>
            <Input name="password" placeholder="password" type="password" />
            <br />
            
            <Label htmlFor="rememberMe">Remember Me</Label> 
            <Field name="rememberMe" type="checkbox" />

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
