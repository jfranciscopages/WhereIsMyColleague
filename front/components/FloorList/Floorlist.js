import React, { useState, useEffect } from "react";
import { userById } from "../../store/usersReducer";
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
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
export default function FloorList() {
  const branch = useSelector((state) => state.searchBranch);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(false);
  }, []);

  const goToUser = (id) => {
    dispatch(userById(id));
    navigation.navigate("userinfo");
  };

  return (
    <Flex>
      <Accordion allowMultiple w="sm">
        {!loading ? (
          branch.floors.map((floor, i) => {
            return (
              <Accordion.Item key={i}>
                <Accordion.Summary>
                  {floor.name}
                  <Accordion.Icon />
                </Accordion.Summary>
                <Accordion.Details>
                  {floor.workspaces.map((workspace, i) => {
                    return (
                      <Button
                        borderWidth={2}
                        borderRadius={10}
                        backgroundColor="muted.200"
                        px="2"
                        mb="1"
                        key={i}
                        borderBottomWidth="1"
                        borderColor="coolGray.200"
                        pr="5"
                        py="2"
                        onPress={() => goToUser(workspace.user_profile.id)}
                        justifyContent="space-between"
                      >
                        <HStack space={3} justifyContent="space-between">
                          <Avatar
                            size="48px"
                            source={{
                              uri: `${workspace.image}`,
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
                              {workspace.name}
                            </Text>
                            <Text
                              color="coolGray.600"
                              _dark={{
                                color: "warmGray.200",
                              }}
                            >
                              {`${workspace.user_profile.firstName} ${workspace.user_profile.lastName} `}
                            </Text>
                          </VStack>
                          <Spacer />
                        </HStack>
                      </Button>
                    );
                  })}
                </Accordion.Details>
              </Accordion.Item>
            );
          })
        ) : (
          <Accordion.Item></Accordion.Item>
        )}
      </Accordion>
    </Flex>
  );
}
