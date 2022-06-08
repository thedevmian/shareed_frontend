import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useState, useEffect } from 'react';

const Navbar = () => {
  
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setStickyClass("sticky") : setStickyClass("e");
    }
  };
  

  return (
  <Nav className={}>
   
    <DesktopNav />
    <MobileNav />
  </Nav>
);
}

export default Navbar;

const Nav = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column no-wrap;
`;
