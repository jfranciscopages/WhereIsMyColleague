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
  Center,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedFloor, setSelectedFloorId } from "../../store/floorReducer";
import axios from "axios";
import { singleBranch } from "../../store/BranchReducer";
import expoLocalHost from "../../localHost";
export default function FloorList() {
  const branch = useSelector((state) => state.branches.singleBranch);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const singleBranchFloors = useSelector((state) => {
    return state.branches.singleBranch.floors;
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const goToUser = (id) => {
    dispatch(userById(id));
    navigation.navigate("userinfo");
  };
  const handlePressEditFloor = (value) => {
    dispatch(setSelectedFloorId(value));
    navigation.navigate("EditFloor");
  };
  const handlePressViewFloor = (value) => {
    dispatch(setSelectedFloor(value));
    navigation.navigate("WorkSpaces");
  };

  return (
    <Flex>
      <Accordion allowMultiple>
        {!loading ? (
          <Accordion.Item>
            <Accordion.Summary _expanded={{ backgroundColor: "#A6CE39" }}>
              Floors
              <Accordion.Icon />
            </Accordion.Summary>
            {branch.floors.map((floor, i) => {
              return (
                <Accordion.Details
                  key={i}
                  borderRadius="xl"
                  borderWidth="1"
                  borderColor="muted.300"
                  m="1"
                >
                  <HStack>
                    <Avatar
                      mr="3"
                      size="48px"
                      source={{
                        uri: `${floor.image}`,
                      }}
                    />
                    <Text
                      mt="2.5"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {floor.name}
                    </Text>
                  </HStack>
                  <Center>
                    {profile.access == "admin" ? (
                      <Flex display="flex" flexDirection="row">
                        <Button
                          borderRadius="xl"
                          bg="#A6CE39"
                          mt="1"
                          w="20"
                          onPress={(value) => handlePressViewFloor(floor)}
                        >
                          View
                        </Button>
                        <Button
                          borderRadius="xl"
                          bg="#A6CE39"
                          ml="1"
                          mt="1"
                          w="20"
                          onPress={(value) => handlePressEditFloor(floor.id)}
                        >
                          Edit
                        </Button>
                      </Flex>
                    ) : (
                      <Flex display="flex" flexDirection="row">
                        <Button
                          borderRadius="xl"
                          bg="#A6CE39"
                          mt="1"
                          w="20"
                          onPress={(value) => handlePressViewFloor(floor)}
                        >
                          View
                        </Button>
                      </Flex>
                    )}
                  </Center>
                </Accordion.Details>
              );
            })}
          </Accordion.Item>
        ) : (
          <Accordion.Item></Accordion.Item>
        )}
      </Accordion>
    </Flex>
  );
}
