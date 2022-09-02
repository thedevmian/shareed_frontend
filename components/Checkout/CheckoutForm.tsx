import React, { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
  PaymentElement,
  ElementsConsumer,
  P24BankElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import nProgress from "nprogress";
import { useCheckoutMutation } from "@/graphql/types";
import styled from "styled-components";
import router from "next/router";
import { gql, useMutation } from "@apollo/client";
import { useUser } from "hooks/useUser";

const CHECKOUT_MUTATION = gql`
  mutation Checkout($token: String!) {
    checkout(token: $token) {
      id
    }
  }
`;

const ELEMENT_OPTIONS = {
  classes: {
    base: "StripeElementP24",
    focus: "StripeElementP24--focus",
  },
  style: {
    base: {
      padding: "10px 14px",
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const user = useUser();
  const [message, setMessage] = useState(null);
  const [errorMessage, setError] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [checkout, { error: graphqlErrors }] = useMutation(CHECKOUT_MUTATION);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    nProgress.start();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const p24 = elements.getElement(P24BankElement);

    if (p24 == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "p24",
      p24,
      billing_details: {
        email: user.email,
        name: user.name,
      },
    });
    if (payload) {
      const { error, paymentMethod } = payload;
      console.log(paymentMethod);
    }
    if (payload.error) {
      console.log("[error]", payload.error);
      nProgress.done();
      setError(payload.error.message);
      // setPaymentMethod(null);
    }

    try {
      const order = await checkout({
        variables: {
          token: payload?.paymentMethod?.id ?? "",
        },
        // remove cart items from the Apollo cache
        // update(cache) {
        //   cache.modify({
        //     id: cache.identify(user as StoreObjectCompatible),
        //     fields: {
        //       cart() {
        //         return [];
        //       },
        //     },
        //   });
        // },
      });

      setIsLoading(false);
      nProgress.done();
      router.push({
        pathname: "/order/[id]",
        query: {
          id: order?.data?.checkout?.id ?? "#",
        },
      });
    } catch (err) {
      setIsLoading(false);
      nProgress.done();
      // graphql error is handled via useMutation
      console.error(err);
    }
  };

  // this works
  useEffect(() => {
    console.log("Test");
  }, []);

  return (
    <CheckoutFormStyles onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        required
        placeholder="Jenny Rosen"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label htmlFor="p24">Przelewy24 Bank</label>
      <P24BankElement
        id="p24"
        // onBlur={logEvent("blur")}
        // onChange={logEvent("change")}
        // onFocus={logEvent("focus")}
        // onReady={logEvent("ready")}
        options={ELEMENT_OPTIONS}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </CheckoutFormStyles>
  );
};

export const CheckoutTest = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

const CheckoutFormStyles = styled.form`
  width: 100%;
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;
