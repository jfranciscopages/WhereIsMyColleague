import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

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
  const navigation = useNavigation();

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
      <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Please sign in to continue.
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Email
            </FormControl.Label>
            <Input
              style={styles.input}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                color: "coolGray.800",
                fontSize: "xs",
                fontWeight: 500,
              }}
            >
              Password
            </FormControl.Label>
            <Input
              type={show ? "text" : "password"}
              style={styles.input}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              InputRightElement={
                <Button backgroundColor="muted.900" onPress={handleClick}>
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
            backgroundColor="muted.900"
            _text={{ color: "white" }}
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
