import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
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
  Container,
  Content,
  List,
  ListItem,
  Thumbnail,
  Image,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import SearchBarWorkspace from "../components/SearchBar/searchWorkspace";
import { setWorkSpaceValue } from "../store/searchbar/searchValue";
import { setWorkspace } from "../store/workSpaceReducer";
import { useDispatch, useSelector } from "react-redux";

export const WorkSpaces = () => {
  const floor = useSelector((state) => state.selectedFloor);
  const value = useSelector((state) => state.workspaceValue);
  const workSpacesById = useSelector((state) => state.WorkSpacesById);
  const selectedFloor = useSelector((state) => state.selectedFloor);
  const WorkSpacesById = useSelector((state) => state.WorkSpacesById);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWorkSpaceValue(""));
  }, []);

  const navigateWS = async (WsId) => {
    console.log("QUE ONDA ID", WsId);
    await dispatch(setWorkspace(WsId));
    navigation.navigate("Personal workspace");
  };

  return (
    <View>
      <View>
        <SearchBarWorkspace />
      </View>
      <Spacer></Spacer>
      {value == "" ? (
        <List>
          {floor.workspaces.map((ws, i) => {
            console.log("WSSS??", ws);
            const WsId = ws.id;
            console.log("ID=========>", WsId);
            return (
              <View>
                <List.Item key={i} onPress={(id) => navigateWS(WsId)} key={i}>
                  <HStack space={3} justifyContent="space-between">
                    <Avatar
                      size="48px"
                      source={{
                        uri: `${ws.image}`,
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
                </List.Item>
              </View>
            );
          })}
        </List>
      ) : (
        <List>
          {WorkSpacesById.length > 0 ? (
            WorkSpacesById.map((ws, i) => {
              return (
                <List.Item key={i}>
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
                </List.Item>
              );
            })
          ) : (
            <List.Item key={i}>
              <Text>No Match</Text>
            </List.Item>
          )}
        </List>
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
