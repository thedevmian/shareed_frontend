import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  margin: 0 auto;
  width: 100%;

  align-self: center;
  text-align: center;
  padding: 0.5rem 3rem;

  color: #030303;
  font-weight: normal;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 0.5rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 1rem;
    background-color: #030303;
    left: 0;
    bottom: -2px;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }

  &.active {
    &&::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export const NavLink = ({ href, children, passHref }) => {
  const router = useRouter();
  const isActive = router.pathname === `/${href}`;
  const className = isActive ? 'active' : '';

  return (
    <Link href={href} passHref={passHref}>
      <StyledLink className={className}>{children}</StyledLink>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
  passHref: PropTypes.bool,
};
