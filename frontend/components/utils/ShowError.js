import styled from "styled-components";
import { MdOutlineWarningAmber } from "react-icons/md";

const ShowError = ({ children }) => (
  <ErrorContainerStyle>
    <MdOutlineWarningAmber size={25} />
    {children}
  </ErrorContainerStyle>
);

export default ShowError;

const ErrorContainerStyle = styled.div`
  width: 90%;
  background-color: var(--warning);
  color: var(--main-text-color);
  padding: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
