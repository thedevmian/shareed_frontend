import { ApolloClient, ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useApollo } from "../graphql/apolloClient";
import Page from "../components/Page";
import "normalize.css/normalize.css";
import "../styles/global.css";
import "../styles/nprogress.css";
import { AppProps } from "next/app";

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient as ApolloClient<any>}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default App;
