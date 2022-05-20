import styled from 'styled-components';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

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
  height: 100vh;
`;

const StyleHeadding = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 1rem;
`;

const StyleParagraph = styled.p`
  font-size: 1rem;
  color: var(--main-text-color);
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: var(--main-text-color);
  margin-bottom: 0.5rem;
`;

const InputStyle = styled.input`
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid var(--main-text-color);
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color-light);
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;

const TextareaStyle = styled.textarea`
  display: block;
  font-size: 1rem;

  color: var(--main-text-color);
  margin-bottom: 1rem;
`;

const FormStyle = styled.form`
  border: 1px solid red;
  padding: 2rem;
  width: 100%;
  height: 100%;
`;

const CreateProductForm = () => (
  <CreateProductFormContainer>
    <StyleHeadding>Add your product to sell here!</StyleHeadding>
    <StyleParagraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatem, doloremque, quibusdam quisquam, quidem quisquam quisquam

    </StyleParagraph>
    <Formik
      initialValues={{ name: '', description: '', price: '', photo: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.name || values.name.length < 3) {
          errors.name = 'Name is required and must be at least 3 characters';
        } else if (!values.description || values.description.length < 3 || values.description.length > 150) {
          errors.description = 'Description is required and must be at least 3 and less than 150 characters';
        } else if (!values.price || values.price.length < 1) {
          errors.price = 'Price is required';
        } else if (!values.photo || values.photo.length < 1) {
          errors.photo = 'Place a photo';
        }
         
      return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {

        const { name, description, price, photo } = values;
        const filename = name.replace(/\s/g, '-').toLowerCase();
        const altText = name;
        const variables = { name, description, price, photo, filename, altText };

        const mutation = useMutation(CREATE_PRODUCT_MUTATION, {
            variables}); 
                
        
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FormStyle onSubmit={handleSubmit}>
          
          <Label htmlFor="name">Name</Label>
          <InputStyle
            placeholder='Name'
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <br />
          <Label htmlFor="description">Description</Label>
          <TextareaStyle
            placeholder='Description (max 150 characters)'
            type="description"
            name="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {errors.description && touched.description && errors.description}
          <br />
          <Label htmlFor="price">Price</Label>
          <InputStyle
            placeholder='Price'
            type="price"
            name="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && errors.price}
          <br />
          <Label htmlFor="photo">Add photo</Label>
          <InputStyle
            placeholder=''
            type="photo"
            name="photo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.photo}
          />
          {errors.photo && touched.photo && errors.photo}
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </FormStyle>
      )}
    </Formik>
  </CreateProductFormContainer>
);

export default CreateProductForm;
