import { createContext, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
  close: () => {},
};

export const MenuContext = createContext(initialState);

// eslint-disable-next-line react/prop-types
export const MenuProvider = ({ children }) => {
  const { isToggled, setToggled, toggle } = useToggle(false);
  const closeMenu = () => setToggled(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen: isToggled, toggleMenu: toggle, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
