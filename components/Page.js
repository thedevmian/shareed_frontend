import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import PageLayout from '../styles/PageLayout';
import { MenuProvider } from '../state/Menu';
import Navbar from './nav';
import Footer from './footer';
import { useScrollPosition } from '../hooks/useScrollPosition';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});



export default function Page({ children }) {
  const { visible } = useScrollPosition();
  
  return (
    <PageLayout>
      <MenuProvider>
        <Navbar stickyScrollPosition={visible} />
      </MenuProvider>
      {children}
      <Footer />
    </PageLayout>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
