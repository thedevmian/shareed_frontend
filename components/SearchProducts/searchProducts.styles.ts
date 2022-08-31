import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const SearchInput = styled.input`
  display: block;
  width: 30rem;
  height: 1rem;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid var(--main-bg-color-dark-3);

  color: var(--main-text-color);

  &:focus {
    outline: none;
    border: 1px solid var(--main-bg-color-dark-3);
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 1.5rem;
  right: 0.5rem;
  transform: translate(-50%, -50%);
  color: var(--main-bg-color-dark-4);
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyleComboBox = styled.ul<{ isOpen: boolean; loading: boolean }>`
  width: 30rem;
  position: absolute;
  top: 3.5rem;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  border: ${(props) =>
    props.loading ? "none" : "1px solid var(--main-bg-color-dark-3)"};
  list-style: none;
  padding: 1rem;
  margin: 0;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  background-color: var(--main-bg-color-light);
  border: 1px solid var(--main-bg-color-dark-3);
`;

const StyleComboBoxItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--main-bg-color-dark-5);
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: var(--main-bg-color-dark-3);
  }
`;

export {
  SearchContainer,
  SearchInput,
  InputWrapper,
  SearchIcon,
  StyleComboBox,
  StyleComboBoxItem,
};
