import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { Formik, Field, Form } from "formik";

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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const SignUp = () => {
    const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);
    
    return (
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" placeholder="Jane" />

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" placeholder="Doe" />

              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="jane@acme.com" type="email" />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
}


export default SignUp;