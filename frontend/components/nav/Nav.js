import { useEffect, useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';
import { NavLink } from './NavLink';
import MenuHamburger from './MenuHamburger';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #fcfcfc;
  position: relative;
  z-index: 43;
`;

const NavWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    max-width: 30%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const NavLogo = styled.div`
  padding: 0 1rem;
  z-index: 44;
`;

const Bars = styled(FaBars)`
  display: none;
  color: #030303;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -5px;
    right: 0px;
    transform: translate(-100%, 75%);
    z-index: 2;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

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

const Nav = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  return (
    <>
      <StyledNav>
        <NavWrapper>
          {pagesRoutes.map(({ _id, name, href }) => (
            <NavLink key={_id} href={href}>
              {name}
            </NavLink>
          ))}
        </NavWrapper>
        <NavLogo>
          <Link href="/">
            <a>
              <Logo>.shareed.</Logo>
            </a>
          </Link>
        </NavLogo>
        <NavWrapper>
          <NavLink href="/cart">
            <span>my card(0)</span>
          </NavLink>
          <NavLink href="/account">
            <span>Account</span>
          </NavLink>
          <NavLink href="/api/users/signout">
            <span>Sign Out</span>
          </NavLink>
        </NavWrapper>
        <Bars
          onClick={() => {
            setOpen(!open);
            console.log('halko');
          }}
        />
        <MenuHamburger open={open} />
      </StyledNav>
    </>
  );
};
export default Nav;
