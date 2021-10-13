import React, { useEffect, useState } from "react";
import { StyleSheet, /* Text ,*/ View, Image } from "react-native";
import {
  Box,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Accordion,
  Flex,
  Button,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBarWorkspace from "../components/SearchBar/searchWorkspace";
import { setWorkSpaceValue } from "../store/searchbar/searchValue";
import { useDispatch, useSelector } from "react-redux";

export const WorkSpaces = () => {
  const floor = useSelector((state) => state.selectedFloor);
  const value = useSelector((state) => state.workspaceValue);
  const workSpacesById = useSelector((state) => state.WorkSpacesById);
  const selectedFloor = useSelector((state) => state.selectedFloor);
  const WorkSpacesById = useSelector((state) => state.WorkSpacesById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWorkSpaceValue(""));
  }, []);

  return (
    <View>
      {console.log("LLEGA BIEN DEL BACK==>", WorkSpacesById)}
      <View>
        <SearchBarWorkspace />
      </View>
      <Spacer></Spacer>
      {value == "" ? (
        <Accordion allowMultiple w="sm">
          {floor.workspaces.map((ws, i) => {
            return (
              <Accordion.Item key={i}>
                <Accordion.Summary>
                  {ws.name}
                  <Accordion.Icon />
                  {console.log("ESTE SII==>", ws)}
                </Accordion.Summary>
                <Accordion.Details>
                  <HStack space={3} justifyContent="space-between">
                    <Avatar
                      size="48px"
                      source={{
                        uri: `${ws.user_profile}`,
                      }}
                    />
                    <VStack>
                      <Text
                        _dark={{
                          color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                      >
                        {ws.name}
                      </Text>
                      {ws.user_profile !== null ? (
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {`${ws.user_profile.firstName} ${ws.user_profile.lastName} `}
                        </Text>
                      ) : (
                        <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          {`Non-associated employee`}
                        </Text>
                      )}
                    </VStack>
                    <Spacer />
                  </HStack>
                </Accordion.Details>
              </Accordion.Item>
            );
          })}
        </Accordion>
      ) : (
        <Accordion allowMultiple w="sm">
          {WorkSpacesById.length > 0
            ? WorkSpacesById.map((ws, i) => {
                return (
                  <Accordion.Item key={i}>
                    <Accordion.Summary>
                      {ws.name}
                      <Accordion.Icon />
                    </Accordion.Summary>
                    <Accordion.Details>
                      <HStack space={3} justifyContent="space-between">
                        <Avatar
                          size="48px"
                          source={{
                            uri: `${ws.user_profile}`,
                          }}
                        />
                        <VStack>
                          <Text
                            _dark={{
                              color: "warmGray.50",
                            }}
                            color="coolGray.800"
                            bold
                          >
                            {ws.name}
                          </Text>
                          {ws.user_profile !== null ? (
                            <Text
                              color="coolGray.600"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {`${ws.user_profile.firstName} ${ws.user_profile.lastName} `}
                            </Text>
                          ) : (
                            <Text
                              color="coolGray.600"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {`Non-associated employee `}
                            </Text>
                          )}
                        </VStack>
                        <Spacer />
                      </HStack>
                    </Accordion.Details>
                  </Accordion.Item>
                );
              })
            : (<Accordion.Item key={1}>
              <Accordion.Summary>
                      No Match
                      <Accordion.Icon />
                    </Accordion.Summary>

            </Accordion.Item>)}
        </Accordion>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 30,
  },
  button: {
    position: "relative",
    height: 50,
    flex: 1,
    bottom: 0,
    justifyContent: "flex-end",
    color: "#A1CF6B",
    marginBottom: 0,
  },
  homeView: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
  },
  img: {
    resizeMode: "contain",
    width: 160,
    height: 100,
  },
  header: {
    marginLeft: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    marginTop: 50,
  },
  users: {
    marginTop: 30,
  },
  listUsers: {
    marginTop: 10,
  },
});