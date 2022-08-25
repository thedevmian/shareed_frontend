import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { useProductsCountQuery } from "@/graphql/types";
import React from "react";
export const PRODUCTS_PER_PAGE = 8;

interface ProductPageProps {
  page: number;
}

const Pagination: React.FC<ProductPageProps> = ({ page }) => {
  const { loading, error, data } = useProductsCountQuery();
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Error: {error.message}</p>
      </>
    );

  const count = data?.productsCount || 0;
  const pages = Math.ceil(count! / PRODUCTS_PER_PAGE);

  const isFirst = page === 1;
  const isLast = page === pages;
  const prevPage = page - 1 === 1 ? "/products" : `/products?page=${page - 1}`;
  const nextPage = `/products?page=${page + 1}`;

  return (
    <>
      <PaginationStyles>
        <Head>
          <title>
            Shareed Page {page} of {pages}
          </title>
        </Head>
        <Link href={prevPage}>
          <a aria-disabled={isFirst}>&lt; Prev</a>
        </Link>
        <p>
          Page {page} of {pages}
        </p>
        <Link href={nextPage}>
          <a aria-disabled={isLast}>Next &gt;</a>
        </Link>
      </PaginationStyles>
    </>
  );
};

export default Pagination;

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid var(--lightGray);
  border-radius: 10px;

  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: grey;
    pointer-events: none;
  }
`;
