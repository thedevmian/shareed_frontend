import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import StyledLink from "./navLink.style";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  passHref?: boolean;
  closeMenu?: () => void;
}

export const NavLink = ({
  href,
  children,
  passHref,
  closeMenu,
}: NavLinkProps) => {
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
