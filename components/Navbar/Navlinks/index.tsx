import { useUser } from "../../../hooks/useUser";
import { useMenuContext } from "../../../state/Menu";
import { NavLink } from "../NavLink";
import { BsBag, BsSuitHeart, BsPerson } from "react-icons/bs/";
import Dropdown from "../Dropdown";
import { Center, NavLinksWrapper, Wrapper } from "./navlinks.style";

const NavLinks = () => {
  const userData = useUser();
  const { close } = useMenuContext();

  return (
    <Wrapper>
      <NavLinksWrapper className="nav-links">
        <li className="links">
          <NavLink href="/products" closeMenu={close}>
            products
          </NavLink>
        </li>
        <Dropdown buttonTitle={"collections"} links={["new", "men", "women"]} closeMenu={close} />
        {userData && (
          <>
            <li className="links">
              <NavLink href="/sell" closeMenu={close}>
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
              closeMenu={close}
            />
          </Center>
        ) : (
          <>
            <Center>
              <BsPerson size={16} className="person-icon" />
              <Dropdown buttonTitle={"account"} links={["login", "register"]} closeMenu={close} />
            </Center>
          </>
        )}

        <li className="links">
          <NavLink href="/wishlist" closeMenu={close}>
            <BsSuitHeart size={14} />
            wishlist
          </NavLink>
        </li>
        <li className="links">
          <NavLink href="/bag" closeMenu={close}>
            <BsBag size={14} />
            bag
          </NavLink>
        </li>
      </NavLinksWrapper>
    </Wrapper>
  );
};

export default NavLinks;
