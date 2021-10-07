import React, { useEffect, useState } from "react";
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
  Center,
  Select,
  CheckIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import expoLocalHost from "../localHost";
import axios from "axios";
import { singleBranch } from "../store/BranchReducer";
import useCreateUser from "../hooks/useCreateUser";
import { allBranches } from "../store/BranchReducer";

export const CreateUser = () => {
  const params = useCreateUser();
  const {
    access,
    setAccess,
    firstName,
    setFistName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    city,
    setCity,
    country,
    setCountry,
    job,
    setJob,
    onSubmitCreateUser,
    error,
    disabled,
    nameValidation,
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspaceId,
    createUser,
  } = params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches.allBranches);

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  return (
    <View>
      <Center>
        <ScrollView w="90%">
          <Stack
            space={2.5}
            alignSelf="center"
            px="8"
            mt="4"
            w={{
              base: "100%",
              md: "25%",
            }}
          >
            <Box>
              <Text bold fontSize="xl" mb="4" alignSelf="center">
                Create User
              </Text>

              <FormControl mb="2" isRequired>
                <FormControl.Label justifyContent="center">
                  Access
                </FormControl.Label>
                <Input onChangeText={(value) => setAccess(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  First Name
                </FormControl.Label>
                <Input onChangeText={(value) => setFistName(value)} mb="2" />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Required
                </FormControl.ErrorMessage>

                <FormControl.Label justifyContent="center">
                  Last Name
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  Email
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  Password
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  Country
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  Phone Number
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label justifyContent="center">
                  Job
                </FormControl.Label>
                <Input onChangeText={(value) => setLastName(value)} mb="2" />
                <FormControl.Label alignSelf="center">
                  Select Branch
                </FormControl.Label>
                <Select
                  minWidth="200"
                  placeholder="Choose Branch"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1"
                  mb="2"
                  onValueChange={(itemValue) => searchFloor(itemValue)}
                >
                  {branches
                    ? branches.map((branch) => {
                        return (
                          <Select.Item
                            key={branch.id}
                            label={branch.city}
                            value={branch.id}
                          />
                        );
                      })
                    : null}
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Please make a selection!
                </FormControl.ErrorMessage>
                <FormControl.Label alignSelf="center">
                  Select Floor
                </FormControl.Label>
                <Select
                  minWidth="200"
                  placeholder="Choose Branch"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1"
                  mb="2"
                  onValueChange={(itemValue) => searchWorkspace(itemValue)}
                >
                  {floorsOk ? (
                    branch.floors.map((floor, i) => {
                      return (
                        <Select.Item
                          key={floor.id}
                          label={floor.name}
                          value={floor.id}
                        />
                      );
                    })
                  ) : (
                    <Select.Item />
                  )}
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Please make a selection!
                </FormControl.ErrorMessage>
                <FormControl.Label alignSelf="center">
                  Select Workspace
                </FormControl.Label>
                <Select
                  minWidth="200"
                  placeholder="Choose Branch"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1"
                  mb="4"
                  onValueChange={(itemValue) => setWorkspaceId(itemValue)}
                >
                  {workspacesOk ? (
                    floor.workspaces.map((workspace) => {
                      return (
                        <Select.Item
                          key={workspace.id}
                          label={workspace.name}
                          value={workspace.id}
                        />
                      );
                    })
                  ) : (
                    <Select.Item />
                  )}
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Please make a selection!
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Button mb="10" onPress={() => createUser()}>
              Edit Floor
            </Button>
          </Stack>
        </ScrollView>
      </Center>
    </View>
  );
};
