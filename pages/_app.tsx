import { ApolloClient, ApolloProvider } from "@apollo/client";
import { useApollo } from "../graphql/apolloClient";
import Page from "../components/Page";
import "normalize.css/normalize.css";
import "../styles/global.css";
import "../styles/nprogress.css";
import { AppProps } from "next/app";

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient as ApolloClient<any>}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

export default App;
