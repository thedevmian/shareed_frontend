/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext } from "react";
import { useToggle } from "../hooks/useToggle";

const initialState = {
  isMenuOpen: false,
  toggle: () => {},
  close: () => {},
};

export const MenuContext = createContext(initialState);

interface Props {
  children?: ReactNode;
}

export const MenuProvider = ({ children }: Props) => {
  const { isToggled, setToggled, toggle } = useToggle(false);
  const closeMenu = () => setToggled(false);

  return (
    <MenuContext.Provider
      value={{ isMenuOpen: isToggled, toggle, close: closeMenu }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
