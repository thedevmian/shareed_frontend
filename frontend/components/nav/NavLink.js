import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  margin: 0 auto;
  width: 5rem;

  align-self: center;
  text-align: center;
  padding: 0.5rem 2rem;

  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: fit-content;
    padding: 0.5rem 2rem;
  }

  svg {
    display: none;
    margin-right: 0.5rem;
    margin-top: 0.5rem;
    @media screen and (min-width: 1024px) {
      display: inline-block;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 2px;
    border-radius: 1rem;
    background-color: #030303;
    left: 25%;
    bottom: -2px;
    transform: scaleX(0);
    transition: all 0.2s ease-in-out 0s;
    visibility: hidden;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const NavLink = ({ href, children, passHref, closeMenu  }) => {
  return (
    <Link href={href} passHref={passHref}>
      <StyledLink onClick={closeMenu}>{children}</StyledLink>
    </Link>
  );
};

NavLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
  passHref: PropTypes.bool,
};
