import React, { useEffect, useState } from "react";
import {
  Box,
  View,
  Heading,
  HStack,
  Text,
  AspectRatio,
  NativeBaseProvider,
  Spinner,
  Icon,
  Image,
  Center,
  Stack,
  Divider,
  ScrollView,
  FormControl,
  Button,
} from "native-base";
import { StyleSheet } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { singleBranch } from "../store/BranchReducer";
import { useNavigation } from "@react-navigation/core";
import { userById } from "../store/usersReducer";
function WorkSpaceInd() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const singleWorkspace = useSelector((state) => state.singleWorkspace);
  const SingleWS = singleWorkspace.singleWorkspace;
  const WsUser = SingleWS.user_profile;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  

  return (
    <View>
      <ScrollView my="1">
        {loading ? (
          <Center mt="20">
            <Spinner size="lg" color="#A6CE39" />
          </Center>
        ) : (
          <View minWidth="full">
            <Box
              rounded="xl"
              overflow="hidden"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    source={{
                      uri: `${SingleWS.image}`,
                    }}
                    fallbackSource={{
                      uri: `${SingleWS.image}`,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {`${SingleWS.name}`}
                  </Heading>
                  {WsUser !== null ? (
                    <Text
                      fontSize="xs"
                      _light={{ color: "#39B54A" }}
                      _dark={{ color: "#39B54A" }}
                      fontWeight="900"
                      ml="-0.5"
                      mt="-1"
                    >
                      {`${WsUser.firstName}, ${WsUser.lastName}`}
                    </Text>
                  ) : (
                    <Text
                      fontSize="xs"
                      _light={{ color: "#39B54A" }}
                      _dark={{ color: "#39B54A" }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {`Non-associated employee`}
                    </Text>
                  )}
                </Stack>
                {WsUser !== null ? (
                  <Text fontWeight="400">
                    {`${WsUser.firstName} ${WsUser.lastName} is currently working at this workspace as ${WsUser.job}.`}
                  </Text>
                ) : (
                  <Text fontWeight="400">
                    {`There is no employee associated to this workspace.`}
                  </Text>
                )}

              </Stack>
              <Box>
                <HStack>
                  {WsUser !== null ? (<><Button
                    overflow="hidden"
                    onPress={() => {
                      dispatch(userById(WsUser.id));
                      navigation.navigate("userinfo");
                    }}
                    variant="outline"
                    style={styles.goToBranchButton}
                  >
                    User Details
                  </Button>
                  <Button
                    overflow="hidden"
                    onPress={() => branchButtonHandlePress()}
                    variant="outline"
                    style={styles.goToBranchButton}
                  >
                    Edit Workspace
                  </Button>
                  <Button
                    overflow="hidden"
                    onPress={() => branchButtonHandlePress()}
                    variant="outline"
                    style={styles.goToBranchButton}
                  >
                    Create Workspace
                  </Button></>) : (<><Button
                    overflow="hidden"
                    onPress={() => branchButtonHandlePress()}
                    variant="outline"
                    style={styles.goToBranchButton}
                  >
                    Edit Workspace
                  </Button>
                  <Button
                    overflow="hidden"
                    onPress={() => branchButtonHandlePress()}
                    variant="outline"
                    style={styles.goToBranchButton}
                  >
                    Create Workspace
                  </Button></>)}
                </HStack>
              </Box>
            </Box>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    // borderColor: 'red',
    // borderWidth: 1,
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: 500
    paddingTop: 20,
  },
  backBox: {
    marginTop: -100,
  },
  text: {
    // borderColor: 'red',
    // borderWidth: 1,
    // paddingTop: 10,
    width: 150,
  },
  textButtonView: {
    // borderColor: 'red',
    // borderWidth: 1,
    marginTop: 25,
    marginBottom: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    // borderColor: 'red',
    // borderWidth: 1
  },
  avatarImg: {
    height: 500,
  },
  mailText: {
    marginLeft: -20,
  },
  mailButton: {
    height: 40,
    paddingBottom: 30,
    width: 250,
  },
  placeIcon: {
    marginTop: 5,
  },
  textPhoneView: {
    flexDirection: "row",
    marginBottom: 25,
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: 'red',
    // borderWidth: 1
  },
  phoneText: {
    marginLeft: 15,
  },
  phoneButton: {},
  emailTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    // borderColor: 'red',
    // borderWidth: 1,
    justifyContent: "space-between",
  },
});

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <WorkSpaceInd />
      </Center>
    </NativeBaseProvider>
  );
}
