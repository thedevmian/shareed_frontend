export default function bagTotal(bag: any[]): number {
  return bag.reduce(
    (
      total: number,
      item: { product: { price: number }[]; quantity: number }
    ) => {
      const itemTotal = item.product[0].price * item.quantity;
      return total + itemTotal;
    },
    0
  );
}
