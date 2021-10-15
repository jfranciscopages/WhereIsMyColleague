import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, /* Text ,*/ View } from "react-native";
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  Button,
  WarningOutlineIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import expoLocalHost from "../localHost";
import axios from "axios";
import { singleBranch } from "../store/BranchReducer";

export const EditFloor = () => {
  let floorsName;
  let siteMap;
  let workSpaceName;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => {
    console.log(state);
    return state.branches.singleBranch;
  });
  const siteMapRef = useRef();

  const floorId = useSelector((state) => state.selectedFloorId);
  console.log(selectedBranch);

  const floorsNameHandler = (value) => {
    floorsName = value;
  };
  const siteMapHandler = (value) => {
    siteMap = value;
  };
  const workSpaceNameHandler = (value) => {
    workSpaceName = value;
  };
  const editFloorPress = () => {
    axios
      .put(`http://${expoLocalHost}/api/floors/editFloor/${floorId}`, {
        name: floorsName,
        image: siteMap,
      })
      .then((data) => {
        dispatch(singleBranch(selectedBranch.id));
        navigation.navigate("Branch");
        console.log("ESTO ESTOY BUSCANDO AHORA", data.data);
        return data.data;
      })
      .catch((e) => console.log("falla en la edicion", e));
  };
  const createWorkSpaceHAndler = () => {
    axios
      .post(
        `http://${expoLocalHost}/api/workSpace/createWorkSpace/${floorId}`,
        {
          name: workSpaceName,
        }
      )
      .then((data) => {
        dispatch(singleBranch(selectedBranch.id));
        navigation.navigate("Branch");
        return data.data;
      })
      .catch((e) => console.log(e));
  };

  return (
    <View>
      {
        <ScrollView
          w={{
            base: "90%",
            md: "90%",
          }}
        >
          <Stack
            space={2.5}
            alignSelf="center"
            px="4"
            safeArea
            mt="4"
            w={{
              base: "100%",
              md: "25%",
            }}
          >
            <Box>
              <Text bold fontSize="xl" mb="4" alignSelf="center">
                Edit Floor
              </Text>

              <FormControl mb="2" isRequired>
                <FormControl.Label justifyContent="center">
                  Floor's Name
                </FormControl.Label>
                <Input
                  placeholder="Set Floor Name"
                  onChangeText={(value) => floorsNameHandler(value)}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    siteMapRef.current.focus();
                  }}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Required
                </FormControl.ErrorMessage>
              </FormControl>
              <Divider height={1} marginBottom={3} />

              <FormControl mb="2">
                <FormControl.Label justifyContent="center">
                  Site Map
                </FormControl.Label>
                <Input
                  ref={siteMapRef}
                  placeholder="Upload site map"
                  onChangeText={(value) => siteMapHandler(value)}
                />
              </FormControl>
              <Divider height={1} marginBottom={3} />
              <Divider />
            </Box>
            <Button bg="#aecf53" onPress={() => editFloorPress()}>
              Edit Floor
            </Button>
            <Divider height={1} marginBottom={3} />
            <Box>
              <Text>Want to add a work space?</Text>
            </Box>
            <FormControl mb="2" isRequired>
              <FormControl.Label justifyContent="center">
                Work space name
              </FormControl.Label>
              <Input
                placeholder="Set work space name"
                onChangeText={(value) => workSpaceNameHandler(value)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Required
              </FormControl.ErrorMessage>
            </FormControl>
            <Button bg="#aecf53" onPress={() => createWorkSpaceHAndler()}>
              Create Workspace
            </Button>
          </Stack>
        </ScrollView>
      }
    </View>
  );
};
