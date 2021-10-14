import React, { useEffect, useRef } from "react";
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
import useCreateUser from "../../hooks/useCreateUser";
import { SelectBranch } from "../../components/SelectBranch/SelectBranch";
import { useForm, Controller } from "react-hook-form";

export const CreateUser = () => {
  const params = useCreateUser();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const phoneRef = useRef();
  const jobRef = useRef();

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
  } = params;

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
                  ref={emailRef}
                  value={email}
                  keyboardType={"email-address"}
                  onChangeText={(value) => setEmail(value)}
                  mb="2"
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
                  ref={phoneRef}
                  value={phone}
                  keyboardType="phone-pad"
                  onChangeText={(value) => setPhone(value)}
                  mb="2"
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
                  ref={jobRef}
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
              onPress={() => createUser()}
            >
              Submit
            </Button>
          </Stack>
        </ScrollView>
      </Center>
    </View>
  );
};
