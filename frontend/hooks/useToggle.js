import { useState } from 'react';

export const useToggle = (initialState) => {
  const [isToggled, setToggled] = useState(initialState);
  const toggle = () => setToggled((prevState) => !prevState);
  return { isToggled, toggle, setToggled };
};
