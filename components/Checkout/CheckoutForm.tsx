import React, { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { gql, useMutation } from "@apollo/client";
import styled from "styled-components";

const CHECKOUT_MUTATION = gql`
  mutation Checkout($token: String!) {
    checkout(token: $token) {
      id
    }
  }
`;

interface Props {
  clientSecret: string;
}

const CheckoutForm = ({ clientSecret }: Props) => {
  const [checkout, { error: mutationErrors }] = useMutation(CHECKOUT_MUTATION);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { data } = await checkout({
      variables: {
        token: clientSecret,
      },
    });

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-status/success?id=${data.checkout.id}`,
      },
    });

    if (error) {
      setError(error);
      setSuccess(false);
      setIsLoading(false);
    } else {
      setError(null);
      setSuccess(true);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <PaymentElement />
      </label>
      <StyleButton disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </StyleButton>
      {mutationErrors && <p>{mutationErrors.message}</p>}
      {error && <div>{error.message}</div>}
      {success && <div>Success!</div>}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;

const StyleButton = styled.button`
  background: #0e0f11;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
  margin-top: 2rem;

  &:hover {
    filter: contrast(115%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #0c0d15;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #0d0e16;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`;
