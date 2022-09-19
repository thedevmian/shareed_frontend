import { useUser } from "hooks/useUser";
import styled from "styled-components";

const BagItemsIdentificator = () => {
  const user = useUser();

  return (
    <StyledBagItemsIdentificator
      data-testid="bag-identyficator"
      className={user?.cart?.length > 0 ? "visible" : ""}
    >
      {user?.cart?.length}
    </StyledBagItemsIdentificator>
  );
};

const StyledBagItemsIdentificator = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 15px;
  padding: 0.2em;
  background-color: #d33737;
  color: var(--main-bg-color);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  border-radius: 50%;
  z-index: 1;
  transition: all 0.2s ease-in-out 0s;
  visibility: hidden;
  transform: scale(0);

  &.visible {
    visibility: visible;
    transform: scale(1);
  }

  @media (max-width: 900px) {
    top: 5px;
    right: 0;
  }

  @media (min-width: 900px) and (max-width: 1000px) {
    right: 20px;
  }
`;

export default BagItemsIdentificator;
