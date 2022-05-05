import PropTypes from 'prop-types';
import Nav from './Nav';
import PageLayout from './styles/PageLayout';

export default function Page({ children }) {
  return (
    <PageLayout>
      <Nav />
      {children}
    </PageLayout>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
