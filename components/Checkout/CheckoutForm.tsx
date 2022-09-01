import React, { FormEvent, useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import nProgress from "nprogress";
import { useCheckoutMutation } from "@/graphql/types";
import styled from "styled-components";
import router from "next/router";

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY ?? "");

export const CheckoutForm = () => {
  const elements = useElements();
  const stripe = useStripe();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checkout, { error }] = useCheckoutMutation();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    nProgress.start();
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement) ?? { token: "" },
      });
      if (error) {
        setMessage(error.message);
        nProgress.done();
        setIsLoading(false);
        return;
      }

      try {
        const order = await checkout({
          variables: {
            token: paymentMethod?.id ?? "",
          },
          //a remove cart items from the Apollo cache
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
      }
    } catch (err) {
      setIsLoading(false);
      nProgress.done();
      console.error(err);
    }
  };

  return (
    <CheckoutFormStyles onSubmit={(event) => handleSubmit(event)}>
      <CardElement />
      {error && <p>{error.message}</p>}
      <button disabled={isLoading}>Checkout</button>
    </CheckoutFormStyles>
  );
};

export const CheckoutTest = ({ children }) => {
  return <Elements stripe={stripeLib}>{children}</Elements>;
};

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;
