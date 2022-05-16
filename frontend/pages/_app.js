/* eslint-disable react/jsx-props-no-spreading */
// import App from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import 'normalize.css/normalize.css';
import '../components/styles/global.css';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps, apollo }) {
  console.log('apollo', apollo);
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />;
      </Page>
    </ApolloProvider>
  );
}
// TODO: Refactor this in future
App.getInitialProps = async (appContext) => {
  let pageProps = {};
  console.log('appContext', appContext.ctx);
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  pageProps.query = appContext.ctx.query;
  return { pageProps };
};

export default withData(App);
