// show order item information
import React from "react";

interface Props {
  id: any;
}

const OrderItem = ({ item }: Props) => {
  return (
    // show order item information
    // total price
    // order date
    // order status
    // order items

    <div className="order-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <p className="name">{item.name}</p>
        <p className="price">{item.price}</p>
        <p className="quantity">Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default OrderItem;
