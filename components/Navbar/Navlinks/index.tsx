import { useUser } from "../../../hooks/useUser";
import { useMenuContext } from "../../../state/Menu";
import { NavLink } from "../NavLink";
import { BsBag, BsSuitHeart, BsPerson } from "react-icons/bs/";
import Dropdown from "../Dropdown";
import { Center, NavLinksWrapper, StyledLi, Wrapper } from "./navlinks.style";
import BagItemsModal from "components/Products/BagModal/BagItemsModal";
import BagItemsIdentificator from "components/Products/BagModal/BagItemsIdentificator";

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
        <Dropdown buttonTitle="collections">
          <li>
            <NavLink href="/collections/new" closeMenu={close}>
              new
            </NavLink>
          </li>
          <li>
            <NavLink href="/collections/men" closeMenu={close}>
              men
            </NavLink>
          </li>
          <li>
            <NavLink href="/collections/women" closeMenu={close}>
              women
            </NavLink>
          </li>
        </Dropdown>
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
            <Dropdown buttonTitle="account">
              <li>
                <NavLink href="/profile" closeMenu={close}>
                  profile
                </NavLink>
              </li>
              <li>
                <NavLink href="/orders" closeMenu={close}>
                  orders
                </NavLink>
              </li>
              <li>
                <NavLink href="/logout" closeMenu={close}>
                  logout
                </NavLink>
              </li>
            </Dropdown>
          </Center>
        ) : (
          <>
            <Center>
              <BsPerson size={16} className="person-icon" />
              <Dropdown buttonTitle="account">
                <li>
                  <NavLink href="/login" closeMenu={close}>
                    login
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/login" closeMenu={close}>
                    register
                  </NavLink>
                </li>
              </Dropdown>
            </Center>
          </>
        )}

        <li>
          <NavLink href="/wishlist" closeMenu={close}>
            <BsSuitHeart size={14} />
            wishlist
          </NavLink>
        </li>
        <StyledLi>
          <NavLink href="/bag" closeMenu={close}>
            <BsBag size={14} />
            bag
            <BagItemsIdentificator />
          </NavLink>
          <div className="modal-open">
            <BagItemsModal />
          </div>
        </StyledLi>
      </NavLinksWrapper>
    </Wrapper>
  );
};

export default NavLinks;
