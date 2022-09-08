import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useUser } from "hooks/useUser";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const user = useUser();
  const [bag, setBag] = useState(null);
  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        borderRadius: "0px",
      },
    },
  };

  useEffect(() => {
    if (user) {
      if (!bag) {
        setBag(user.cart);
      }
    }
  }, [user]);

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}api/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bag),
        }
      );
      const data = await response.json();
      setClientSecret(data.clientSecret);
    }
    if (bag?.length > 0) {
      createPaymentIntent();
    }
  }, [bag]);

  return (
    <div className="checkout">
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
