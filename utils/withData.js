import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";
import fetch from "isomorphic-unfetch";

const createClient = ({ headers, initialState }) => {
  const enhancedFetch = (url, options) => {
    console.log(options);
    return fetch(url, {
      ...options,
      headers: {
        "Access-Control-Allow-Origin": "access-control-allow-origin,content-type",
        Cookie: headers?.cookie || "",
      },
    });
  };

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError)
          console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
      }),
      // this uses apollo-link-http under the hood, so all the options here come from that package
      createUploadLink({
        uri: "https://sharred.herokuapp.com/api/graphql",
        fetchOptions: {
          mode: "cors",
          credentials: "include",
        },
        fetch: enhancedFetch,
      }),
    ]),
    cache: new InMemoryCache({
      possibleTypes: {
        authenticatedItem: ["User"],
      },
    }).restore(initialState || {}),
  });
};

export default withApollo(createClient, { getDataFromTree });
