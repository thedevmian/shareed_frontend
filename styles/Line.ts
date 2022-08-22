import styled from "styled-components";

export const Line = styled.hr<{ color?: string }>`
  width: 100%;
  border-top: 1px solid ${(props) => props.color || "var(--main-text-color)"};
  margin-top: 2rem;
  padding: 0;
`;
