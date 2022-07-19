import { PRODUCTS_PER_PAGE } from "./Pagination";
import { AllProductsQuery, Maybe, ProductImage, useAllProductsQuery, Product } from "@/graphql/types";
import CardProduct from "./CardProduct";
import ProductsListContainer from "../../styles/ProductsListContainer";

interface ProductPageProps {
  page: number;
}

const ProductsList = ({ page }: ProductPageProps) => {
  const { data, loading, error } = useAllProductsQuery({
    variables: {
      skip: (page - 1) * PRODUCTS_PER_PAGE,
      take: PRODUCTS_PER_PAGE,
    },
  });

  return (
    <ProductsListContainer>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.products!.map((product) => <CardProduct key={product.id} product={product}/>)}
    </ProductsListContainer>
  );
};

export default ProductsList;
