import styled from 'styled-components';

const PageLayout = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--main-bg-color-light);
  color: var(--main-text-color);
  overflow: hidden;
`;

export default PageLayout;
