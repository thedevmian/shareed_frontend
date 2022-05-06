import Link from 'next/link';
import styled from 'styled-components';
import Logo from './styles/Logo';
import { NavLink } from './NavLink';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 4rem;
  background-color: #fcfcfc;
`;

const NavGroup = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
  }
`;

const pagesRoutes = [
  { name: 'shop', href: '/products' },
  { name: 'sell', href: '/sell' },
  { name: 'orders', href: '/orders' },
];

const accountRoutes = [
  { name: 'cart', href: '/cart' },
  { name: 'account', href: '/account' },
  { name: 'signout', href: '/api/users/signout' },
];

const Nav = () => (
  <StyledNav>
    <NavGroup>
      {pagesRoutes.map(({ _id, name, href }) => (
        <NavLink key={_id} href={href}>
          {name}
        </NavLink>
      ))}
    </NavGroup>
    <Link href="/">
      <a style={{ textDecoration: '2em' }}>
        <Logo>.shareed.</Logo>
      </a>
    </Link>
    <NavGroup>
      <NavLink href="/cart">
        <span>my card(0)</span>
      </NavLink>
      <NavLink href="/account">
        <span>Account</span>
      </NavLink>
      <NavLink href="/api/users/signout">
        <span>Sign Out</span>
      </NavLink>
    </NavGroup>
  </StyledNav>
);

export default Nav;
