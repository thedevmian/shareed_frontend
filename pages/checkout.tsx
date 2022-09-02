import Checkout from "components/Checkout";
import WideWrapper from "styles/WideWrapper";

const CheckoutPage = () => {
  return (
    <WideWrapper>
      <h1>Checkout</h1>
      <p>This is a checkout page.</p>
      <Checkout />
      <span>Where are you?</span>
    </WideWrapper>
  );
};

export default CheckoutPage;
