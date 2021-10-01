import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
} from "native-base";

import useLogin from "../hooks/useLogin";

export default function Login() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const params = useLogin();
  const {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
  } = params;

  return (
    <NativeBaseProvider>
      <Box marginTop="120" safeArea flex={1} p="2" py="8" w="90%" mx="auto">
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
              type={show ? "text" : "password"}
              style={[styles.input, { fontSize: 17 }]}
              value={loginPassword}
              onChangeText={(e) => setLoginPassword(e)}
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
