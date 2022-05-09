import PropTypes from 'prop-types';
import PageLayout from './styles/PageLayout';
import { MenuProvider } from '../state/Menu';
import Navbar from './nav';

export default function Page({ children }) {
  return (
    <PageLayout>
      <MenuProvider>
        <Navbar />
      </MenuProvider>
      {children}
    </PageLayout>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
