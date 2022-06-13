import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { debounce } from "debounce";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log(currentScrollPos, "currentScrollPos");
    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 100) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { capture: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column no-wrap;
  position: fixed;
  transition: all 0.3s ease-in-out;
  top: 0;
  z-index: 2;

  .visible {
    top: -60px;
  }
`;
