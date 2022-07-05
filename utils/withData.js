import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/link-error";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { createUploadLink } from "apollo-upload-client";
import withApollo from "next-with-apollo";

const createClient = ({ headers, initialState }) => {

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
      createUploadLink({
        uri: "https://sharred.herokuapp.com/api/graphql",
        headers: {
          fetchOptions: {
            credentials: "include",
          },
        },
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
