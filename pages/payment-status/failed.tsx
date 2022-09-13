import Link from "next/link";
import { useRouter } from "next/router";
import WideWrapper from "styles/WideWrapper";

const FailedPage = () => {
  const router = useRouter();
  return (
    <WideWrapper>
      <h2>Payment Failed</h2>
      <p>Something went wrong with your payment. Please try again.</p>
      <p>
        <Link href={`/order/${router.query.id}`}>
          <a>View Order</a>
        </Link>
      </p>
    </WideWrapper>
  );
};

export default FailedPage;
