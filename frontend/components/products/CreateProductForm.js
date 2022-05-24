import { MdOutlineWarningAmber } from "react-icons/md";
import styled from "styled-components";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import PhotoDropzone from "./PhotoDropzone";

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    $name: String!
    $price: Int!
    $description: String!
    $photo: [String]
  ) {
    createProduct(
      name: $name
      price: $price
      description: $description
      photo: $photo
      filename: $name
      altText: $name
    ) {
      id
      name
      price
      description
      photo {
        image {
          filename
          publicUrl
        }
        altText
      }
    }
  }
`;

const CreateProductFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 90%;
  height: min-content;
  margin-bottom: 8rem;
  padding: 2rem;

  @media screen and (min-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 1440px) {
    width: 50%;
  }
`;

const StyleHeadding = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 2rem;
`;

const StyleParagraph = styled.p`
  font-size: 1rem;
  color: var(--main-text-color);
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 0.875rem;
  color: var(--main-text-color);
  margin-bottom: 0.5rem;
`;

const InputStyle = styled.input`
  display: block;
  width: 60%;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid var(--main-text-color-light-3);
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color-light);
  margin-bottom: 1rem;

  &.price {
    width: 10%;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--main-text-color);
  }
`;

const TextareaStyle = styled.textarea`
  display: block;
  width: 60%;
  height: auto;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid var(--main-text-color-light-3);
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color-light);
  margin-bottom: 1rem;

  &.price {
    width: 10%;
  }

  &:focus {
    outline: none;
    border: 1px solid var(--main-text-color);
  }
`;

const FormStyle = styled.form`
  width: 100%;
  height: 100%;
  background-color: var(--main-bg-color-light);
  padding: 2rem;
  margin: 0;
`;


const StyleH3 = styled.h3`
  font-size: 1.2rem;
  display: inline-block;
  width: 80%;
  color: var(--main-text-color);
  margin: 0 auto;
  padding-bottom: 1rem;
`;

const ShowError = styled.div`
  width: max-content;
  background-color: var(--warning);
  color: var(--main-text-color);
  padding: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 4rem;
`;

const StyleButton = styled.button`
  background-color: var(--main-text-color);
  color: var(--main-bg-color);
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  margin-top: 1rem;

  &:hover {
    background-color: var(--main-text-color-light-3);
  }

  &:focus {
    outline: none;
  }
`;


const CreateProductForm = () => (
  <CreateProductFormContainer>
    <StyleHeadding>Add product to sell</StyleHeadding>
    <Formik
      initialValues={{ name: "", description: "", price: "", photo: "" }}
      validate={(values) => {
        const errors = {};
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
        } else if (!values.photo || values.photo.length < 1) {
          errors.photo = "Place a photo";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const { name, description, price, photo } = values;
        const filename = name.replace(/\s/g, "-").toLowerCase();
        const altText = name;
        const variables = { name, description, price, photo, filename, altText };

        const mutation = useMutation(CREATE_PRODUCT_MUTATION, {
          variables,
        });

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <FormStyle onSubmit={handleSubmit}>
            <StyleH3>
              Provide as much information as possible so buyers can understand your product.
            </StyleH3>
            <Label htmlFor="name">Name*</Label>
            <InputStyle
              placeholder="eg. Supreme T-Shirt"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            {errors.name && (
              <ShowError>
                <MdOutlineWarningAmber size={20} />
                {errors.name}
              </ShowError>
            )}
            <br />
            <Label htmlFor="description">Description*</Label>
            <TextareaStyle
              placeholder="Description (max 150 characters)"
              type="description"
              name="description"
              rows={5}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            {errors.description && (
              <ShowError>
                <MdOutlineWarningAmber size={20} />
                {errors.description}
              </ShowError>
            )}
            <br />
            <Label htmlFor="price">Price*</Label>
            <InputStyle
              className="price"
              placeholder="eg. $100"
              type="price"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && (
              <ShowError>
                <MdOutlineWarningAmber size={20} />
                {errors.price}
              </ShowError>
            )}
            <br />
            <Label htmlFor="photo">Photos</Label>
            <PhotoDropzone />
            {errors.photo && touched.photo && errors.photo}
            
            <ButtonContainer>

            <StyleButton type="submit" disabled={isSubmitting}>
              Add product
            </StyleButton>
            </ButtonContainer>
        </FormStyle>
      )}
    </Formik>
  </CreateProductFormContainer>
);

export default CreateProductForm;
