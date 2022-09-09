import { useUser } from "hooks/useUser";
import formatMoney from "lib/products/formatMoney";
import Link from "next/link";
import styled from "styled-components";
import WideWrapper from "styles/WideWrapper";
import classNames from "classnames";
import { useMedia } from "hooks/useMedia";
import Head from "next/head";
import { formatDate } from "lib/formatDate";

export default function OrderPage() {
  const user = useUser();
  const { isMobile } = useMedia();

  if (!user)
    return (
      <WideWrapper>
        <h4>Loading...</h4>
      </WideWrapper>
    );
  if (user.orderCount === 0)
    return (
      <WideWrapper>
        <h2>You have no orders yet</h2>
      </WideWrapper>
    );

  return (
    <>
      <Head>
        <title>Shareed - Your Orders</title>
      </Head>
      <WideWrapper>
        <h1>All your orders</h1>
        <p>Here are all your orders</p>
        <OrdersItemContainer>
          <OrderItemSection className="header">
            <h4>OrderID</h4>
            <h4>Date</h4>
            <h4>Status</h4>
            <h4>Total</h4>
            <ImagesContainer>
              <h4>Items</h4>
            </ImagesContainer>
          </OrderItemSection>
          {user.order.map((order) => (
            <Link href={`/order/${order.id}`} key={order.id}>
              <StyledA>
                <OrderItemSection
                  className={classNames({
                    paid: order.status === "PAYMENT_COMPLETE",
                    pending: order.status === "PAYMENT_PENDING",
                  })}
                >
                  <StyledSpan>{order.label.slice(0, 12)}</StyledSpan>
                  <StyledSpan>{formatDate(order.orderDate)}</StyledSpan>
                  <StyledSpan>
                    {order.status === "PAYMENT_PENDING"
                      ? "Pending"
                      : order.status === "PAYMENT_INCOMPLETE"
                      ? "Incomplete"
                      : order.status === "PAYMENT_COMPLETE"
                      ? "Complete"
                      : order.status === "PAYMENT_REFUNDED"
                      ? "Refunded"
                      : order.status}
                  </StyledSpan>

                  <StyledSpan>{formatMoney(order.total)}</StyledSpan>
                  <ImagesContainer>
                    {isMobile &&
                      order.items.slice(0, 1).map((item, index) => (
                        <div key={index}>
                          <Photo
                            src={item.photo[0].image.publicUrlTransformed}
                            alt={item.name}
                          />
                          <StyleOverlayPhoto>
                            {order.items.length} items
                          </StyleOverlayPhoto>
                        </div>
                      ))}
                    {!isMobile &&
                      order.items.map((item, index) => (
                        <div key={index}>
                          <Photo
                            src={item.photo[0].image.publicUrlTransformed}
                            alt={item.name}
                          />
                        </div>
                      ))}
                  </ImagesContainer>
                </OrderItemSection>
              </StyledA>
            </Link>
          ))}
        </OrdersItemContainer>
      </WideWrapper>
    </>
  );
}

const OrdersItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const OrderItemSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--grey);
  padding: 1rem;
  width: 100%;

  &.paid {
    background-color: #c0dec7;
  }

  &.pending {
    background-color: #ebebeb;
  }
  &.header {
    padding: 0 1rem;
    width: 95%;
    border: none;
    height: 2rem;
    margin-bottom: -1rem;
  }
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: var(--black);
  width: 100%;
  display: flex;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 6rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  width: 10rem;

  @media screen and (max-width: 1024px) {
    width: 6rem;
    font-size: 0.8rem;
  }
`;

const StyleOverlayPhoto = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
`;
