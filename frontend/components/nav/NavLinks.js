import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import { useMenuContext } from "../../state/Menu";
import { NavLink } from "./NavLink";
import { BsBag, BsSuitHeart, BsPerson } from "react-icons/bs/";
import Dropdown from "./Dropdown";
import { useMedia } from "../../hooks/useMedia";

const NavLinks = ({ desktopVersion, children }) => {
  const userData = useUser();
  const { closeMenu } = useMenuContext();

  return (
    <Wrapper>
      <NavLinksWrapper className="nav-links">
        <li className="links">
          <NavLink href="/products" onClick={closeMenu}>
            products
          </NavLink>
        </li>
        <Dropdown buttonTitle={"collection"} links={["new", "men", "women"]} closeMenu={closeMenu} />
        {userData && (
          <>
            <li className="links">
              <NavLink href="/sell" onClick={closeMenu}>
                sell
              </NavLink>
            </li>
          </>
        )}
      </NavLinksWrapper>

      <NavLinksWrapper className="nav-links">
        <div className="dropdown">
          <StyledButtonLink className="links">
            <BsPerson size={14} />
            account
          </StyledButtonLink>
          {userData ? (
            <div className="dropdown-content">
              <li>
                <NavLink href="/user/profile" onClick={closeMenu}>
                  profile
                </NavLink>
              </li>
              <li>
                <NavLink href="/logout" onClick={closeMenu}>
                  logout
                </NavLink>
              </li>
              <li className="links">
                <NavLink href="/orders" onClick={closeMenu}>
                  orders
                </NavLink>
              </li>
            </div>
          ) : (
            <div className="dropdown-content">
              <li>
                <NavLink href="account/login" inActive="inactive" onClick={closeMenu}>
                  sign in
                </NavLink>
              </li>
              <li>
                <NavLink href="account/login" inActive="inactive" onClick={closeMenu}>
                  sign up
                </NavLink>
              </li>
            </div>
          )}
        </div>

        <li className="links">
          <NavLink href="/wishlist" onClick={closeMenu}>
            <BsSuitHeart size={14} />
            wishlist
          </NavLink>
        </li>
        <li className="links">
          <NavLink href="/bag" onClick={closeMenu}>
            <BsBag size={14} />
            bag
          </NavLink>
        </li>
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
  @media screen and (max-width: 900px) {
    flex: 0;
    flex-flow: column nowrap;
  }
`;

const NavLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  width: fit-content;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    li {
      margin-bottom: 1rem;
      padding: 1rem;
    }
  }

  .dropdown {
    overflow: hidden;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: block;
    min-width: fit-content;
    list-style-type: none;
    background-color: var(--main-bg-color-light);
    z-index: 2;
    position: absolute;

    @media screen and (max-width: 900px) {
      position: static;
      display: flex;
      flex-flow: column wrap;
    }
    @media screen and (min-width: 900px) {
      display: none;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    }
  }
  /* Links inside the dropdown */
  .dropdown-content li {
    margin: 0;
    padding: 1.5rem;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    @media screen and (min-width: 900px) {
      display: block;
    }
  }
`;


const StyledButtonLink = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 2rem;
  display: none;
  font-size: 0.9rem;
  font-weight: bold;

  position: relative;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    display: block;
  }

  @media screen and (min-width: 900px) {
    width: fit-content;
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

  &.active {
    &&::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;