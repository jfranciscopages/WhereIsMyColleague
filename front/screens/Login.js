import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";

import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Center,
  Input,
  Image,
  Link,
  Button,
} from "native-base";

import useLogin from "../hooks/useLogin";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const passwordRef = useRef();

  const params = useLogin();
  const {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    loading,
  } = params;

  return (
    <NativeBaseProvider>
      <Box marginTop="81" safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Center>
          <Image
            source={{
              uri: `https://secure.meetupstatic.com/photos/event/6/e/2/5/clean_488248197.jpeg`,
            }}
            resizeMode="center"
            size="xl"
            alt="Globant logo"
          />
        </Center>
        <Heading
          alignSelf="center"
          size="lg"
          fontWeight="bold"
          color="coolGray.800"
        >
          Welcome
        </Heading>
        <Heading
          alignSelf="center"
          mt="1"
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Please sign in to continue.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "sm",
                fontWeight: 500,
              }}
            >
              Email
            </FormControl.Label>
            <Input
              style={[styles.input, { fontSize: 17 }]}
              value={loginEmail}
              onChangeText={(e) => setLoginEmail(e)}
              returnKeyType="next"
              onSubmitEditing={() => {
                passwordRef.current.focus();
              }}
              blurOnSubmit={false}
              keyboardType={"email-address"}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "sm",
                fontWeight: 500,
              }}
            >
              Password
            </FormControl.Label>
            <Input
              ref={passwordRef}
              type={show ? "text" : "password"}
              style={[styles.input, { fontSize: 17 }]}
              value={loginPassword}
              onChangeText={(e) => setLoginPassword(e)}
              returnKeyType="send"
              onSubmitEditing={(e) => handleSubmit(e)}
              InputRightElement={
                <Button
                  _text={{ color: "coolGray.800" }}
                  style={{ marginLeft: 7 }}
                  backgroundColor="#aecf53"
                  onPress={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              }
            />
          </FormControl>
          {loading ? (
            <Button bg="#A6CE39" isLoading>
              Submitting...
            </Button>
          ) : (
            <Button
              onPress={(e) => {
                handleSubmit(e);
              }}
              mt="2"
              backgroundColor="#aecf53"
              _text={{ color: "coolGray.800" }}
            >
              Sign in
            </Button>
          )}
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#171717",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
  },
});
