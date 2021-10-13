import React, { useEffect } from "react";
import { View } from "react-native";
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Box,
  Button,
  Center,
  Select,
  CheckIcon,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
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
    country,
    setCountry,
    job,
    setJob,
    nameValidation,
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspace,
    createUser,
    loading,
  } = params;

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
                <Select
                  minWidth="200"
                  placeholder="Select Access"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size={5} />,
                  }}
                  mt="1"
                  mb="2"
                  value={access}
                  onValueChange={(itemValue) => setAccess(itemValue)}
                >
                  <Select.Item label="user" value="user" />
                  <Select.Item label="admin" value="admin" />
                </Select>
                <FormControl.Label justifyContent="center">
                  First Name
                </FormControl.Label>
                <Input
                  value={firstName}
                  onChangeText={(value) => setFistName(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Last Name
                </FormControl.Label>
                <Input
                  value={lastName}
                  onChangeText={(value) => setLastName(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Email
                </FormControl.Label>
                <Input
                  value={email}
                  onChangeText={(value) => setEmail(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Password
                </FormControl.Label>
                <Input
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Country
                </FormControl.Label>
                <Input
                  value={country}
                  onChangeText={(value) => setCountry(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Phone Number
                </FormControl.Label>
                <Input
                  value={phone}
                  onChangeText={(value) => setPhone(value)}
                  mb="2"
                />
                <FormControl.Label justifyContent="center">
                  Job
                </FormControl.Label>
                <Input
                  value={job}
                  onChangeText={(value) => setJob(value)}
                  mb="2"
                />
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
                    branch.floors.map((floor) => {
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
                  onValueChange={(itemValue) => setWorkspace(itemValue)}
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
              </FormControl>
            </Box>
            {loading ? (
              <Button bg="#A6CE39" isLoading>
                Loading
              </Button>
            ) : (
              <Button bg="#A6CE39" mb="10" onPress={() => createUser()}>
                Submit
              </Button>
            )}
          </Stack>
        </ScrollView>
      </Center>
    </View>
  );
};
