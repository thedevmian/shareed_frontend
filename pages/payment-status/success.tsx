import { useUpdateOrderMutation } from "@/graphql/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "styles/Button";
import Wrapper from "styles/Wrapper";
import Image from "next/image";
import styled from "styled-components";

const GIF = "https://i.gifer.com/WZ3W.gif";

const SuccessPaymentPage = () => {
  const orderId = useRouter().query.id as string;
  const redirectStatus = useRouter().query.redirect_status;
  const router = useRouter();
  const [updateOrderStatus] = useUpdateOrderMutation();

  useEffect(() => {
    if (redirectStatus === "failed") {
      router.push(`/payment-status/failed?id=${orderId}`);
    }
  }, [redirectStatus]);

  // mutation to mark order as paid
  useEffect(() => {
    if (orderId && redirectStatus === "succeeded") {
      updateOrderStatus({
        variables: {
          where: {
            id: orderId,
          },
          data: {
            status: "PAYMENT_COMPLETE",
          },
        },
        refetchQueries: ["CurrentUser"],
      });
    }
  }, [orderId]);

  if (!orderId) return <Wrapper>loading...</Wrapper>;
  if (redirectStatus === "failed") return <Wrapper>Wait...</Wrapper>;

  return (
    <Wrapper>
      <h2>Success Payment! 😎</h2>
      <Image
        unoptimized={true}
        src={GIF}
        alt="the gif"
        width={743}
        height={316}
      />
      <InfoContainer>
        <p>
          Your payment was successful. Now you can view your order. Estimate
          delivery time is 3-5 days.
        </p>
        <Button>
          <Link href={`/order/${orderId}`}>
            <a>View Order</a>
          </Link>
        </Button>
      </InfoContainer>
    </Wrapper>
  );
};

export default SuccessPaymentPage;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
`;
