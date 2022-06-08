import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import { useMenuContext } from "../../state/Menu";
import { NavLink } from "./NavLink";
import { BsBag, BsSuitHeart, BsPerson } from "react-icons/bs/";


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
        {/* <Search /> */}
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
      {userData && (
        <NavLinksWrapper className="nav-links">
          <div className="dropdown">
            <NavLink href="#" className="links">
              <BsPerson size={14} />
              account
            </NavLink>
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
          </div>
          <li className="links">
            <NavLink href="/wishlist" onClick={closeMenu}>
              <BsSuitHeart size={14}  />
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
      )}
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
  list-style: none;
  width: fit-content;

  @media screen and (max-width: 768px) {
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
    display: none;
    position: absolute;
    min-width: 160px;
    background-color: var(--main-bg-color);
    z-index: 2;
  }
  
  /* Links inside the dropdown */
  .dropdown-content li {
    margin: 0;
    padding: 0.5rem;
  }
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;
