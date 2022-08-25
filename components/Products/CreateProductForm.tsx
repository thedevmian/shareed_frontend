import { useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { Formik, FormikState } from "formik";
import styled from "styled-components";
import gql from "graphql-tag";
import { MdOutlineWarningAmber, MdDone, MdArrowForward } from "react-icons/md";
import PhotoDropzone from "./PhotoDropzone";
import Spinner from "../utils/Spinner";
import ShowError from "../utils/ShowError";
import Link from "next/link";
import Input from "../../styles/Input";
import Button from "../../styles/Button";
import Label from "../../styles/Label";
import Textarea from "../../styles/Textarea";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        select: "available"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
    }
  }
`;

const CreateProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<ApolloError | undefined | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [resetPhotoDropzone, setResetPhotoDropzone] = useState(false);
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT_MUTATION
  );
  const initialVariables = {
    name: "",
    description: "",
    price: "",
    image: [0, 0, 0],
  };

  return (
    <CreateProductFormContainer>
      <StyleHeadding>Add product to sell</StyleHeadding>
      <Formik
        initialValues={initialVariables}
        validate={(values) => {
          const errors: {
            name?: string;
            description?: string;
            price?: string;
            image?: string;
          } = {};
          if (!values.name || values.name.length < 3) {
            errors.name = "Name is required and must be at least 3 characters";
          } else if (
            !values.description ||
            values.description.length < 3 ||
            values.description.length > 150
          ) {
            errors.description =
              "Description is required and must be at least 3 and less than 150 characters";
          } else if (!values.price || values.price.length < 1) {
            errors.price = "Price is required";
          } else if (values.image[0] === 0) {
            errors.image = "Place a image";
          }
          return errors;
        }}
        onSubmit={async (values, action) => {
          const { name, description, price, image } = values;
          const { setSubmitting, resetForm } = action;
          const formattedPrice = 100 * parseInt(price);
          setIsLoading(loading);
          setIsError(error);

          try {
            if (!isRunning) {
              setIsRunning(true);
              await createProduct({
                variables: {
                  name,
                  description,
                  price: formattedPrice,
                  image: image[0],
                },
              }).then(() => {
                setIsSuccess(true);
                setIsLoading(false);
                setIsError(null);
                setResetPhotoDropzone(true);
                setSubmitting(false);
                resetForm(
                  initialVariables as Partial<
                    FormikState<{
                      name: string;
                      description: string;
                      price: string;
                      image: number[];
                    }>
                  >
                );
              });
            }
          } catch (error) {
            setIsError(error as ApolloError);
            setIsRunning(false);
            setIsLoading(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          submitForm,
          setFieldValue,
        }) => (
          <FormStyle onSubmit={handleSubmit}>
            <StyleH3>
              Provide as much information as possible so buyers can understand
              your product.
            </StyleH3>
            <Label htmlFor="name">Name*</Label>
            <Input
              placeholder="eg. Supreme T-Shirt"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <ShowError>{errors.name}</ShowError>
            ) : null}

            <br />
            <Label htmlFor="description">Description*</Label>
            <Textarea
              placeholder="Description (max 150 characters)"
              name="description"
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && touched.description ? (
              <ShowError>{errors.description}</ShowError>
            ) : null}
            <br />
            <Label htmlFor="price">Price*</Label>
            <Input
              className="price"
              placeholder="eg. $100"
              type="number"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price ? (
              <ShowError>{errors.price}</ShowError>
            ) : null}
            <br />
            <Label htmlFor="image">Photos*</Label>
            <PhotoDropzone
              value={values.image}
              setFieldValue={setFieldValue}
              reset={resetPhotoDropzone}
              setReset={setResetPhotoDropzone}
            />
            {errors.image && touched.image ? (
              <ShowError>{errors.image}</ShowError>
            ) : null}
            <ButtonContainer>
              <Button type="submit" onClick={submitForm}>
                Add product
              </Button>
              {isLoading && (
                <ResultContainer>
                  <Spinner />
                  <SpanStyle>Adding product...</SpanStyle>
                </ResultContainer>
              )}
              {isError && (
                <ResultContainer>
                  <SpanStyle>
                    <MdOutlineWarningAmber color="red" size={25} />
                    Something went wrong. Please try again.
                  </SpanStyle>
                </ResultContainer>
              )}
              {isSuccess && (
                <ResultContainer>
                  <MdDone color="green" size={25} />
                  <SpanStyle>Product added successfully.</SpanStyle>
                  <Link href={`/product/${data.createProduct.id}`}>
                    <GoToPage>
                      View product{" "}
                      <MdArrowForward
                        color="var(--main-bg-color-light)"
                        size={25}
                      />
                    </GoToPage>
                  </Link>
                </ResultContainer>
              )}
            </ButtonContainer>
          </FormStyle>
        )}
      </Formik>
    </CreateProductFormContainer>
  );
};

export default CreateProductForm;

const CreateProductFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: min-content;
  margin-bottom: 8rem;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 40%;
  }
`;

const StyleHeadding = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 2rem;
`;

const FormStyle = styled.form`
  width: 100%;
  background-color: var(--main-bg-color-light);
  padding: 2rem;
`;

const StyleH3 = styled.h3`
  font-size: 1.2rem;
  display: inline-block;
  width: 80%;
  color: var(--main-text-color);
  margin: 0 auto;
  padding-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 4rem;
  position: relative;
`;

const ResultContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SpanStyle = styled.span`
  color: var(--main-text-color);
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const GoToPage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  background-color: var(--main-text-color);
  color: var(--main-bg-color-light);
  padding: 1rem 2rem;
  border: none;
  margin-top: 1rem;
  text-decoration: none;

  svg {
    margin-left: 1rem;
  }

  &:hover {
    background-color: var(--main-text-color-light-3);

    & svg {
      transform: translateX(5px);
      transition: all 0.3s ease-out;
    }
  }
`;
