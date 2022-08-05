import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Input from "../../styles/Input";
import styled from "styled-components";
import ShowError from "../utils/ShowError";
import Heading2 from "../../styles/Heading2";
import { useResetPasswordMutation } from "@/graphql/types";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const ResetPassword = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
    token: router.query.token as string,
  };
  const [resetPassword, { loading, error, data }] = useResetPasswordMutation({
    variables: initialValues,
  });

  return (
    <Container>
      <div>
        <Heading2>Reset Your Password</Heading2>
        <Span>
          Enter your new password and confirm it to reset your password.
        </Span>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            email: Yup.string().email("Invalid email").required("Required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Required"),
          })}
          onSubmit={async (values) => {
            await sleep(500);
            await resetPassword({
              variables: {
                email: values.email,
                password: values.password,
                token: values.token,
              },
            });
            if (data) {
              router.push("/login");
            } else {
              console.log(error);
            }
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Label htmlFor="email">Your email</Label>
              <Input
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <ShowError>{errors.email}</ShowError>
              )}

              <Label htmlFor="password">New password</Label>
              <Input
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <ShowError>{errors.password}</ShowError>
              )}

              <br />
              <Button type="submit">Reset password</Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default ResetPassword;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 80%;
`;

const Span = styled.span`
  font-size: 0.9rem;
  width: 50%;
  line-height: 2rem;
  margin-bottom: 3rem;
  color: var(--main-text-color);
`;
