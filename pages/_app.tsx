import { ApolloClient, ApolloProvider } from "@apollo/client";
import { useApollo } from "../graphql/apolloClient";
import Page from "../components/Page";
import "normalize.css/normalize.css";
import "../styles/global.css";
import "../styles/nprogress.css";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Spinner from "components/utils/Spinner";
import Wrapper from "styles/Wrapper";
import WideWrapper from "styles/WideWrapper";
import Center from "components/utils/Center";

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {!loading ? (
        <ApolloProvider client={apolloClient as ApolloClient<any>}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      ) : (
        <Center>
          <Spinner />
        </Center>
      )}
    </>
  );
};

export default App;
