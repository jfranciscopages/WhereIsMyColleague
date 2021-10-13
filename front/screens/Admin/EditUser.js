import React, { useEffect, useState } from "react";
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
  Spinner,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import useCreateUser from "../../hooks/useCreateUser";
import { allBranches } from "../../store/BranchReducer";
import { SelectBranch } from "../../components/SelectBranch/SelectBranch";

export const EditUser = () => {
  const [rendering, setRendering] = useState(true);
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
    loading,
    submitEditUser,
  } = params;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.userById);

  useEffect(() => {
    dispatch(allBranches());
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
                  />
                  <FormControl.Label justifyContent="center">
                    Last Name
                  </FormControl.Label>
                  <Input
                    placeholder={user.lastName}
                    value={lastName}
                    onChangeText={(value) => setLastName(value)}
                    mb="2"
                  />
                  <FormControl.Label justifyContent="center">
                    Email
                  </FormControl.Label>
                  <Input
                    placeholder={user.email}
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
                    placeholder={user.country}
                    value={country}
                    onChangeText={(value) => setCountry(value)}
                    mb="2"
                  />
                  <FormControl.Label justifyContent="center">
                    Phone Number
                  </FormControl.Label>
                  <Input
                    placeholder={user.phone}
                    value={phone}
                    onChangeText={(value) => setPhone(value)}
                    mb="2"
                  />
                  <FormControl.Label justifyContent="center">
                    Job
                  </FormControl.Label>
                  <Input
                    placeholder={user.job}
                    value={job}
                    onChangeText={(value) => setJob(value)}
                    mb="2"
                  />
                  <SelectBranch />
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
