import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm, CheckoutTest } from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const Checkout = () => {
  return (
    <CheckoutTest>
      <CheckoutForm />
    </CheckoutTest>
  );
};

export default Checkout;
