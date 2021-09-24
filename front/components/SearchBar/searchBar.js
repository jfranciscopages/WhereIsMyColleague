import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers } from "../../store/usersReducer";
import { setSearchValue } from "../../store/searchbar/searchValue";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function SearchBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers());
  }, []);

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
          placeholder="Search People Places"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          _web={{
            _focus: { borderColor: "muted.300", style: { boxShadow: "none" } },
          }}
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
          InputRightElement={
            <Icon
              m="2"
              mr="3"
              size="6"
              color="gray.400"
              as={<MaterialIcons name="mic" />}
            />
          }
        />
      </VStack>
    </VStack>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="2">
        <SearchBar />
      </Center>
    </NativeBaseProvider>
  );
}
