import CollectionProductList from "../../components/products/collections/CollectionProductList";
import { useRouter } from "next/router";

const CollectionPage = () => {
  const { query } = useRouter();

  return <CollectionProductList slug={query.slug as string} />;
};

export default CollectionPage;
