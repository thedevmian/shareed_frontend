import React from "react";
import { resetIdCounter, useCombobox } from "downshift";
import { debounce } from "lodash";
import { useSearchProductLazyQuery } from "@/graphql/types";
import {
  InputWrapper,
  SearchContainer,
  SearchIcon,
  SearchInput,
  StyleComboBox,
  StyleComboBoxItem,
} from "./searchProducts.styles";
import { useRouter } from "next/router";

const SearchProducts = () => {
  const router = useRouter();
  const [findProducts, { loading, data }] = useSearchProductLazyQuery({
    fetchPolicy: "no-cache",
  });
  const items = data?.products ?? [];
  const debouncedFindProducts = debounce(findProducts, 500);
  resetIdCounter();
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
    inputValue: controlledInputValue,
  } = useCombobox({
    items,
    onInputValueChange: () => {
      debouncedFindProducts({
        variables: {
          searchTerm: controlledInputValue,
        },
      });
    },
    onSelectedItemChange: ({ selectedItem }) => {
      router.push(`/product/${selectedItem?.id}`);
    },
    itemToString: (item) => item?.name || "",
  });

  return (
    <SearchContainer {...getComboboxProps()}>
      <InputWrapper>
        <SearchInput placeholder="search product" {...getInputProps()} />
        <SearchIcon />
      </InputWrapper>
      <StyleComboBox isOpen={isOpen} loading={loading} {...getMenuProps()}>
        {items.map((item, id) => (
          <StyleComboBoxItem
            style={
              highlightedIndex === id ? { backgroundColor: "#d3d3d3" } : {}
            }
            key={`${item}${id}`}
            {...getItemProps({ item, index: id })}
          >
            {item.name}
          </StyleComboBoxItem>
        ))}
        {!items.length && !loading && (
          <li>
            <strong>No products found</strong>
          </li>
        )}
      </StyleComboBox>
    </SearchContainer>
  );
};

export default SearchProducts;
