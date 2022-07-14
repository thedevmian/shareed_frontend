import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  from,
  RequestHandler,
  HttpLink,
} from "@apollo/client";
import { ErrorHandler, onError } from "@apollo/link-error";
import { createUploadLink } from "apollo-upload-client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import type { AppProps } from "next/app";
import { IncomingHttpHeaders } from "http";
// import { getDataFromTree } from "@apollo/client/react/ssr";

const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject> | null;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
}) as unknown as ApolloLink | RequestHandler;

const httpLink = new HttpLink({
  uri: "https://shareed-backend.herokuapp.com/api/graphql",
  headers: {
    fetchOptions: {
      credentials: "include",
    },
  },
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache({
      possibleTypes: {
        authenticatedItem: ["User"],
      },
    }),
  });
};

interface IInitializeApollo {
  headers?: IncomingHttpHeaders;
  initialState?: NormalizedCacheObject | null;
}

export const initializeApollo = (initialState: IInitializeApollo) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingState = _apolloClient.extract();
    const state = merge(existingState, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(s, d))),
      ],
    });

    _apolloClient.cache.restore(state);

    if (typeof window === "undefined") {
      return _apolloClient;
    }

    if (!apolloClient) {
      apolloClient = _apolloClient;
    }

    return _apolloClient;
  }
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: AppProps["pageProps"]
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
