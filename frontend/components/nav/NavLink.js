import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  margin: 0 auto;

  align-self: center;
  text-align: center;
  padding: 1.5rem 0;
  width: 100%;

  color: #030303;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 1.2rem;
  position: relative;

  cursor: pointer;
  &a {
    text-decoration: none;
  }
  &&:hover {
    color: #fcfcfc;
    background: #030303;
    transition: all 0.2s ease-in-out;
  }

  &&.active {
    &:after {
      //we'll use the :after pseude element to create our bulb!
      content: ''; //all pseudo element MUST have a content declaration!
      display: block;
      position: absolute;
      width: 100%;
      height: 5px;
      background: black;
      bottom: 6px;
      left: 0;
    }
  }
`;

export const NavLink = ({ href, children, passHref }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const className = isActive ? 'active' : '';

  return (
    <StyledLink href={href} passHref={passHref}>
      <a className={className}>{children}</a>
    </StyledLink>
  );
};

NavLink.propTypes = {
  //   classNames: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
  passHref: PropTypes.bool,
};
