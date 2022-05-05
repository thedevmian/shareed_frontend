import Link from 'next/link';
import styled from 'styled-components';
import Logo from './styles/Logo';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80px;
  background-color: #fcfcfc;
`;

export default function Nav() {
  return (
    <>
      <StyledNav>
        <Link href="/">
          <a>Shoppee</a>
        </Link>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </StyledNav>
      <Logo />
    </>
  );
}
