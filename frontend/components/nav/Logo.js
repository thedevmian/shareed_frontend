import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 1.5rem;
  font-family: 'Koulen', monospace;
  font-weight: bold;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  color: #030303;
  width: 100%;
  display: inline-block;
  z-index: 2;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default Logo;
