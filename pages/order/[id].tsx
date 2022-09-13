import { useRouter } from "next/router";
import Head from "next/head";
import Wrapper from "styles/Wrapper";
import OrderItem from "components/OrderItem";

const OrderItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  // get params from url

  return (
    <>
      <Head>
        <title>Shareed Your Order</title>
      </Head>
      <Wrapper>
        <OrderItem itemId={id} />
      </Wrapper>
    </>
  );
};

export default OrderItemPage;
