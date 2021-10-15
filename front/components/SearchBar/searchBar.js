import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers } from "../../store/usersReducer";
import { setSearchValue } from "../../store/searchbar/searchValue";
import { VStack, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar() {
  const dispatch = useDispatch();

  const handleChangeSearchBar = (value) => {
    dispatch(setSearchValue(value));
    if (value.length < 3) {
      return;
    } else {
      dispatch(setUsersByTitle(value));
    }
  };

  return (
    <VStack space={5} width="100%">
      <VStack width="100%" space={5} alignItems="center">
        <Input
          placeholder="Search Colleagues"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _focus={{ boxShadow: "none", borderColor: "#A6CE39" }}
          onChangeText={(e) => handleChangeSearchBar(e)}
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="search" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

export default SearchBar;
