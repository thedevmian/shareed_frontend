import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 1.5rem;
  font-family: 'Nova Mono', monospace;
  font-weight: bold;
  letter-spacing: 0.25em;

  text-transform: uppercase;
  color: #030303;
  background: #fdfdfd;
  width: 100%;
  height: 100%;
  z-index: 2;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: 2.5rem;
  }
`;

export default Logo;
