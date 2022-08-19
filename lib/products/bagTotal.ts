export default function bagTotal(bag: any[]) {
  return bag.reduce((total, item) => {
    const itemTotal = item.product[0].price * item.quantity;
    return total + itemTotal;
  }, 0);
}
