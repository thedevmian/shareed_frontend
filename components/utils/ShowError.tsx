import styled from "styled-components";
import { MdOutlineWarningAmber } from "react-icons/md";
import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
}

const ShowError: FunctionComponent<Props> = ({ children }) => {
  return (
    <ErrorContainerStyle>
      <MdOutlineWarningAmber size={25} />
      {children}
    </ErrorContainerStyle>
  );
};

export default ShowError;

const ErrorContainerStyle = styled.div`
  width: fit-content;
  border-radius: 1rem;
  background-color: var(--warning);
  color: var(--main-text-color);
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
`;
