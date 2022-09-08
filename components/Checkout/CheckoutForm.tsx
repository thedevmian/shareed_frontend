import React, { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

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
  const [checkout, { data, error: mutationErrors }] =
    useMutation(CHECKOUT_MUTATION);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(null);

  const router = useRouter();

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

    if (!stripe || !elements) {
      return;
    }

    try {
      await checkout({
        variables: {
          token: clientSecret,
        },
      });
    } catch (error) {
      console.log(error);
    }
    const { error } = await stripe.confirmPayment({
      elements,
      // return_url: "http://localhost:3000/checkout",
      // add later
      confirmParams: {
        return_url: "http://localhost:3000/checkout",
      },
    });
    if (error) {
      setError(error);
      setSuccess(false);
    } else {
      setError(null);
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card details
        <PaymentElement />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <div>{error.message}</div>}
      {success && <div>Success!</div>}
    </form>
  );
};

export default CheckoutForm;
