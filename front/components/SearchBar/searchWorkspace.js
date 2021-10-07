import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersByTitle, setUsers } from "../../store/usersReducer";
import { setWorkSpaceValue } from "../../store/searchbar/searchValue";
import { VStack, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { workspacesByFloor } from "../../store/searchbar/searchWorkSpaceByFloor"

function SearchBarWorkspace() {
  const dispatch = useDispatch();

  const handleChangeSearchBar = (value) => {
    dispatch(setWorkSpaceValue(value));
    dispatch(workspacesByFloor({
      floorId:selectedFloor.id,
      name:value
    })) 
  };
  const value = useSelector((state) => state.workspaceValue);
  const selectedFloor = useSelector((state) => state.selectedFloor);

  return (
    <VStack space={5} width="100%">
        {console.log("FUNCA VALUE?==>", value)}
        {console.log("TUCCSONidddddBAR==>", selectedFloor)}
      <VStack width="100%" space={5} alignItems="center">
        <Input
          placeholder="Find Workspace"
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
        />
      </VStack>
    </VStack>
  );
}

export default SearchBarWorkspace;
