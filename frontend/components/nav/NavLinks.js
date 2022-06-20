import styled from "styled-components";
import { useUser } from "../../hooks/useUser";
import { useMenuContext } from "../../state/Menu";
import { NavLink } from "./NavLink";
import { BsBag, BsSuitHeart, BsPerson } from "react-icons/bs/";
import Dropdown from "./Dropdown";

const NavLinks = () => {
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
        <Dropdown
          buttonTitle={"collections"}
          links={["new", "men", "women"]}
          closeMenu={closeMenu}
        />
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
        {userData ? (
          <Center>
            <BsPerson size={16} className="person-icon" />
            <Dropdown
              buttonTitle={"account"}
              links={["profile", "orders", "logout"]}
              onClick={closeMenu}
            />
          </Center>
        ) : (
          <>
            <Center>
              <BsPerson size={16} className="person-icon" />
              <Dropdown buttonTitle={"account"} links={["login", "register"]} onClick={closeMenu} />
            </Center>
          </>
        )}

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
  @media screen and (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  .person-icon {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      top:0.65rem;
      left: 0.55rem;
    }
  }
`;

const NavLinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    li {
      padding: 1rem 0;
      width: 100%;
      text-align: center;
    }
  }
`;
