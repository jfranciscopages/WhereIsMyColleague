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
  View,
  FormControl,
  Input,
  WarningOutlineIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedFloor } from "../../store/floorReducer";
import axios from "axios";
import { singleBranch } from "../../store/BranchReducer";
import expoLocalHost from "../../localHost";
export default function FloorList() {
  const branch = useSelector((state) => state.branches.singleBranch);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const selectedBranch = useSelector((state) => {
    console.log(state)
    return state.branches.singleBranch
  });
  const [editable, setEditable] = useState(false)
  let workSpaceName;

  const singleBranchFloors = useSelector((state) => {
    return state.branches.singleBranch.floors
  })

  useEffect(() => {
    setLoading(false);
  }, []);

  const goToUser = (id) => {
    dispatch(userById(id));
    navigation.navigate("userinfo");
  };
  const handlePressEditFloor = (value) => {
    navigation.navigate('EditFloor')
    console.log(value)
    dispatch(setSelectedFloor(value))
  }
  const handlePressEditWorkspace = () => {
    setEditable(true)
  }
  const workSpaceNameHandler = (value) => {
    workSpaceName = value
  }
  const handleEditWorkspace = (value) => {
    axios.put(`http://${expoLocalHost}/api/workSpace/editWorkSpace/${value}`, {
      name: workSpaceName,
    })
      .then((data) => {
        console.log('change succesfully')
        dispatch(singleBranch(selectedBranch.id))
        // navigation.navigate('Branch')
        setEditable(false)
        return data.data
      })
      .catch(e => console.log(e))
  }


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
                      <View>
                        {editable === false ?
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
                            onPress={() => handlePressEditWorkspace()}
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
                                <View></View>
                              </VStack>
                              <Spacer />
                            </HStack>
                          </Button>
                          :
                          <View>
                            <FormControl mb="2" isRequired>
                              <FormControl.Label justifyContent='center'>Change Workspace's name</FormControl.Label>
                              <Input
                                placeholder={`${workspace.name}`}
                                onChangeText={(value) => workSpaceNameHandler(value)}
                              />
                              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Required
                              </FormControl.ErrorMessage>
                            </FormControl>
                            <Button onPress={() => handleEditWorkspace(workspace.id)}>Edit Workspace!</Button>
                          </View>
                        }
                      </View>
                    );
                  })}
                  <View></View>
                  <Button onPress={(value) => handlePressEditFloor(floor.id)}>Edit Floor</Button>
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
