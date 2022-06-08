import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 1.5rem;
  font-family: 'Koulen', monospace;
  font-weight: bold;
  letter-spacing: 0.045em;
  text-transform: uppercase;
  color: var(--main-text-color);
  z-index: 2;
  margin: 0;
  transition: var(--transition-base);

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
  :hover {
    color: var(--main-text-color-light-2);
  }
`;

export default Logo;
