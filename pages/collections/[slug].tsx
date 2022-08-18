import CollectionProductList from "../../components/Products/collections/CollectionProductList";
import { useRouter } from "next/router";

const CollectionPage = () => {
  const { query } = useRouter();

  return <CollectionProductList slug={query.slug as string} />;
};

export default CollectionPage;
