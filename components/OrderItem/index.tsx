// show order item information
import { useOrderItemQuery } from "@/graphql/types";
import { formatDate } from "lib/formatDate";
import formatMoney from "lib/products/formatMoney";
import WideWrapper from "styles/WideWrapper";
import Wrapper from "styles/Wrapper";

interface Props {
  itemId: string;
}

const OrderItem = ({ itemId }: Props) => {
  const { data, loading, error } = useOrderItemQuery({
    variables: {
      where: {
        id: itemId,
      },
    },
    fetchPolicy: "network-only",
  });

  if (loading)
    return (
      <WideWrapper>
        <h4>Loading...</h4>
      </WideWrapper>
    );
  if (error)
    return (
      <WideWrapper>
        <h4>Error: {error.message}</h4>
      </WideWrapper>
    );

  return (
    <Wrapper>
      <h2>Order Item</h2>
      <p>Here is your order item</p>
      <div>
        <p>
          <strong>Order ID:</strong> {itemId}
        </p>
        <p>
          <strong>Order Date:</strong> {formatDate(data.order.orderDate)}
        </p>
        <div>
          <strong>Order Items:</strong>
          {data?.order?.items.map((item, index) => (
            <div key={index}>
              <p>
                <strong>Name: {item.name}</strong>
              </p>
              <p> Quantity {item.quantity}</p>
              <p> Price {formatMoney(item.price)}</p>
            </div>
          ))}
        </div>
        <div>
          <strong>Total:</strong> {formatMoney(data?.order?.total)}
          <br />
          <strong>Order Status:</strong>{" "}
          {data?.order?.status.slice(8).toLowerCase()}
          {data?.order?.status === "PAYMENT_PENDING" && (
            <div>
              <button>Pay Again</button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderItem;
