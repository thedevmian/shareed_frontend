import styled from 'styled-components';
import Logo from './Logo';

const StyledMenu = styled.nav`
  display: block;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};

  max-height: min-content;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  transition: transform 0.3s ease-in-out;
  z-index: -4;
  @media (min-width: 768px) {
    display: none;
  }
  a {
    font-size: 1.2rem;
    color: #030303;
    text-decoration: none;
    padding: 1rem 1rem;
    display: block;
  }
  &:hover {
    color: #dedede;
  }
`;

const MenuHamburger = ({ open }) => (
  <StyledMenu open={open}>
    <a href="/products">Products</a>
    <a href="/sell">Sell</a>
    <a href="/orders">Orders</a>
    <a href="/cart">Cart</a>
    <a href="/account">Account</a>
    <a href="/api/users/signout">Sign Out</a>
  </StyledMenu>
);

export default MenuHamburger;
