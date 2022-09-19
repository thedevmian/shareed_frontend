const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function formatMoney(cents: number) {
  const dollars = cents / 100;

  if (cents % 100 === 0) {
    return formatter.format(dollars).replace(".00", "");
  }

  return formatter.format(dollars);
}
