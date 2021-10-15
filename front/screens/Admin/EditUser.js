import React, { useEffect, useRef, useState } from "react";
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
  imageAttached,
  AddIcon,
  Spinner,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import useCreateUser from "../../hooks/useCreateUser";
import * as ImagePicker from "expo-image-picker";
import { allBranches } from "../../store/BranchReducer";

export const EditUser = () => {
  const [rendering, setRendering] = useState(true);
  const params = useCreateUser();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const phoneRef = useRef();
  const jobRef = useRef();
  const imgRef = useRef();

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
    createUser,
    loading,
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspace,
    setImage,
    image,
    submitEditUser,
  } = params;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.userById);
  const branches = useSelector((state) => state.branches.allBranches);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useEffect(() => {
    dispatch(allBranches());
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        alert("Sorry, we need camera roll permissions to make this work!");
    })();
    setTimeout(() => {
      setRendering(false);
    }, 1000);
  }, []);

  return (
    <View>
      {rendering ? (
        <Center mt="20">
          <Spinner size="lg" color="#A6CE39" />
        </Center>
      ) : (
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
                  Edit User
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
                    placeholder={`${user.firstName}`}
                    value={firstName}
                    onChangeText={(value) => setFistName(value)}
                    mb="2"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      lastNameRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Last Name
                  </FormControl.Label>
                  <Input
                    placeholder={user.lastName}
                    ref={lastNameRef}
                    value={lastName}
                    onChangeText={(value) => setLastName(value)}
                    mb="2"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      emailRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Email
                  </FormControl.Label>
                  <Input
                    placeholder={user.email}
                    ref={emailRef}
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    mb="2"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      passwordRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Password
                  </FormControl.Label>
                  <Input
                    ref={passwordRef}
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    mb="2"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      countryRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Country
                  </FormControl.Label>
                  <Input
                    placeholder={user.country}
                    ref={countryRef}
                    value={country}
                    onChangeText={(value) => setCountry(value)}
                    mb="2"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      phoneRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Phone Number
                  </FormControl.Label>
                  <Input
                    placeholder={user.phone}
                    ref={phoneRef}
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                    mb="2"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                      jobRef.current.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  <FormControl.Label justifyContent="center">
                    Job
                  </FormControl.Label>
                  <Input
                    placeholder={user.job}
                    ref={jobRef}
                    value={job}
                    onChangeText={(value) => setJob(value)}
                    mb="2"
                    returnKeyType="done"
                  />
                  <FormControl.Label justifyContent="center">
                    Image
                  </FormControl.Label>
                  <Input
                    ref={imgRef}
                    returnKeyType="done"
                    value={image}
                    InputRightElement={
                      <Button
                        ml={1}
                        backgroundColor="#999999"
                        roundedLeft={0}
                        roundedRight="md"
                        onPress={pickImage}
                      >
                        <AddIcon size="6" />
                      </Button>
                    }
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
                            label={
                              workspace.user_profile
                                ? `${workspace.name} (Ocuppied)`
                                : `${workspace.name} (Free)`
                            }
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
              <Button
                bg="#A6CE39"
                mb="10"
                _pressed={{ bg: "#A6CE39" }}
                isLoading={loading}
                _loading={{
                  bg: "#A6CE39",
                  _text: {
                    color: "coolGray.700",
                  },
                }}
                _spinner={{
                  color: "white",
                }}
                isLoadingText="Loading"
                onPress={() => submitEditUser(user.id)}
              >
                Submit
              </Button>
            </Stack>
          </ScrollView>
        </Center>
      )}
    </View>
  );
};
