/* eslint-disable react/jsx-props-no-spreading */
// import App from 'next/app';
import Page from '../components/Page';
import 'normalize.css/normalize.css';
import '../components/styles/global.css';
import '../components/styles/nprogress.css';

// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />;
    </Page>
  );
}

export default App;
