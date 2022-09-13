import { useUpdateOrderMutation } from "@/graphql/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "styles/Button";
import Wrapper from "styles/Wrapper";

const SuccessPaymentPage = () => {
  const orderId = useRouter().query.id as string;
  const [updateOrderStatus] = useUpdateOrderMutation();

  // mutation to mark order as paid
  useEffect(() => {
    if (orderId) {
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

  return (
    <Wrapper>
      <h2>Success Payment! 😎</h2>
      <p>
        Your payment was successful. Now you can view your order. Estimate
        delivery time is 3-5 days.
      </p>

      <Button>
        <Link href={`/order/${orderId}`}>
          <a>View Order</a>
        </Link>
      </Button>
    </Wrapper>
  );
};

export default SuccessPaymentPage;
