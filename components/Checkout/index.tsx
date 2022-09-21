import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useUser } from "hooks/useUser";
import styled from "styled-components";
import formatMoney from "lib/products/formatMoney";
import Image from "next/image";

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
        `${process.env.NEXT_BACKEND_API_URL}api/create-payment-intent`,
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
    <CheckoutContainer>
      <Details>
        <h2>Order Summary</h2>
        <div>
          {bag?.map((item: any, index: number) => (
            <div key={item.id}>
              <p>
                <strong>{`${index + 1}.${item.product[0].name}`}</strong>
              </p>
              <ItemInfo>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {formatMoney(item.product[0].price)}</p>
              </ItemInfo>
              <ImageContainer>
                <Image
                  src={item.product[0].photo[0].image.publicUrlTransformed}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </ImageContainer>
              {index !== bag.length - 1 && <StyleLine />}
            </div>
          ))}
        </div>

        <SummaryContainer>
          <div>
            <p>Subtotal</p>
            <strong>
              {bag &&
                formatMoney(
                  bag.reduce(
                    (
                      acc: number,
                      item: { product: { price: number }[]; quantity: number }
                    ) => acc + item.product[0].price * item?.quantity,
                    0
                  )
                )}
            </strong>
          </div>
          <div>
            <p>Shipping</p>
            <strong>$5.00</strong>
          </div>
          <div>
            <p>Tax</p>
            <strong>$0.00</strong>
          </div>
          <div>
            <p>Total</p>
            <strong>
              {formatMoney(
                bag?.reduce(
                  (
                    acc: number,
                    item: { product: { price: number }[]; quantity: number }
                  ) => acc + item.product[0].price * item?.quantity,
                  0
                )
              )}
            </strong>
          </div>
        </SummaryContainer>
      </Details>

      <CheckoutSection>
        <h2>Payment</h2>
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </CheckoutSection>
    </CheckoutContainer>
  );
};

export default Checkout;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    width: 50%;
    border-right: 1px solid #e2e2e2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: min-content;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 4rem;
    min-height: 100vh;
    margin-top: 10rem;
    width: 70%;
  }
`;

const CheckoutSection = styled.div`
  width: 70%;

  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-right: 2rem;
  border-top: 1px solid #e2e2e2;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
`;

const StyleLine = styled.hr`
  margin: 0 auto;
  border: 1px solid hsla(0, 0%, 90%, 0.24);
`;
