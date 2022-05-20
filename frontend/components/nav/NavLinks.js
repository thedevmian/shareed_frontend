import styled from 'styled-components';
import { useMenuContext } from '../../state/Menu';
import { NavLink } from './NavLink';

const links = ['products', 'sell', 'orders'];
export const secondLinks = ['cart', 'account', 'signout'];

const NavLinks = ({ desktopVersion, children }) => {
  const { closeMenu } = useMenuContext();

  return (
    <Wrapper>
      <NavLinksWrapper className="nav-links">
        {links.map((link) => (
          <li key={link} className="links">
            <NavLink href={link} onClick={closeMenu}>
              {link}
            </NavLink>
          </li>
        ))}
      </NavLinksWrapper>
      {children}
      <NavLinksWrapper className="nav-links">
        {secondLinks.map((link) => (
          <li key={link} className="links">
            <NavLink href={link} onClick={closeMenu}>
              {link}
            </NavLink>
          </li>
        ))}
      </NavLinksWrapper>
    </Wrapper>
  );
};

export default NavLinks;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex: 0;
    flex-flow: column nowrap;
  }
`;

const NavLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  list-style: none;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 20rem;
  }
  @media screen and (min-width: 1024px) {
    width: 35rem;
  }

  .links {
    padding: 0 0.5rem;

    @media screen and (min-width: 1024px) {
      padding: 0;
    }

    @media screen and (min-width: 1440px) {
      width: 40rem;
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }
`;
