import {
  AllProductsDocument,
  AllProductsQuery,
  GetProductDocument,
  GetProductQuery,
} from "@/graphql/types";
import { addApolloState, initializeApollo } from "graphql/apolloClient";
import Head from "next/head";
import { useRouter } from "next/router";
import SingleProduct from "../../components/products/SingleProduct";

export interface ISingleProductProps {
  id: string;
  title?: string;
}

interface IStaticProps {
  params: {
    id: string | undefined;
  };
}

const SinglePageProduct = ({ id, title }: ISingleProductProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!id) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Head>
        <title>Shareed - {title}</title>
      </Head>
      <SingleProduct id={id} />
    </>
  );
};

const client = initializeApollo();

export const getStaticPaths = async () => {
  const {
    data: { products },
  } = await client.query<AllProductsQuery>({ query: AllProductsDocument });

  const ids = products?.map((product) => product.id);
  const paths = ids?.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: IStaticProps) => {
  if (!params.id) {
    return {
      props: {},
      revalidate: 60,
    };
  }

  try {
    const {
      data: { product },
    } = await client.query<GetProductQuery>({
      query: GetProductDocument,
      variables: { id: params.id },
    });
    return addApolloState(client, {
      props: {
        id: product?.id,
        title: product?.name,
      },
      revalidate: 60,
    });
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default SinglePageProduct;
