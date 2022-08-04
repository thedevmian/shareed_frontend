import Logo from "../Logo/logo.style";
import { FooterStyle, StyledContainer, NavStyle, StyledUl } from "./footer.style";

const Footer = () => (
  <FooterStyle>
    <StyledContainer>
      <Logo>.shareed.</Logo>
    </StyledContainer>
    <NavStyle>
      <StyledUl>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Newsletter</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Track Order</a>
        </li>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Cookie Policy</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">YouTube</a>
        </li>
        <li>
          <a href="#">Terms &#38; Conditions</a>
        </li>
        <li>
          <a href="#">Pinterest</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
      </StyledUl>
    </NavStyle>
  </FooterStyle>
);

export default Footer;
