import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  NativeBaseProvider,
  Text,
  Center,
  HStack,
  Stack,
  View,
  Spinner,
  Button,
  Avatar,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { singleBranch } from "../store/BranchReducer";
import { Entypo } from "@expo/vector-icons";
import { Linking, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { userById } from "../store/usersReducer";
// const faker = require("faker");


function UserDetails() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.singleBranch);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.users.userById);
  const userLogged = useSelector(state => state.profile)


  useEffect(() => {
    dispatch(singleBranch(user.branchId));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  console.log(branch.id);

  const makeCall = () => {
    let phoneNumber = "";

    if (Platform.OS === "android") {
      phoneNumber = `tel:${user.phone}`;
    } else {
      phoneNumber = `telprompt:${user.phone}`;
    }

    Linking.openURL(phoneNumber);
  };

  const branchButtonHandlePress = () => {
    dispatch(singleBranch(user.branchId));
    navigation.navigate("Branch");
  };

  const editUser = () => {
    dispatch(userById(user.id));
    navigation.navigate("EditUser");
  };

  return (
    <View my="3">
      {!loading ? (
        <Box
          style={styles.backBox}
          rounded="lg"
          overflow="hidden"
          width="sm"
          shadow={1}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <Box>

            <View style={styles.avatar}>
              <Avatar
                style={styles.avatarImg}
                size="2xl"
                source={{
                  uri: `${user.profilePhoto}`,
                }}
                alt="image"
              />
            </View>


          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="lg" ml="-1">
                {user.firstName} {user.lastName}
              </Heading>
              <Text
                fontSize="md"
                _light={{ color: "violet.500" }}
                _dark={{ color: "violet.300" }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                - {user.job} -
              </Text>
              <View style={styles.textButtonView}>
                <MaterialIcons
                  style={styles.placeIcon}
                  name="place"
                  size={24}
                  color="black"
                />
                <Text
                  style={styles.text}
                  fontSize="md"
                  _light={{ color: "rgb(65, 64, 102)" }}
                  _dark={{ color: "violet.300" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {`Work's in ${branch.city}, ${branch.country}`}
                </Text>
                <Button
                  overflow="hidden"
                  onPress={() => branchButtonHandlePress()}
                  variant="outline"
                  style={styles.goToBranchButton}
                >
                  Go to Branch!
                </Button>
              </View>
              <View style={styles.textPhoneView}>
                <AntDesign name="phone" size={24} color="black" />
                <Text
                  style={styles.phoneText}
                  fontSize="md"
                  _light={{ color: "rgb(65, 64, 102)" }}
                  _dark={{ color: "violet.300" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {`Phone's number:`}
                </Text>
                <Button
                  onPress={() => makeCall()}
                  overflow="hidden"
                  variant="outline"
                  style={styles.phoneButton}
                >
                  {user.phone}
                </Button>
              </View>
              <View style={styles.emailTextView}>
                <Entypo name="mail" size={24} color="black" />
                <Text
                  style={styles.mailText}
                  fontSize="md"
                  _light={{ color: "rgb(65, 64, 102)" }}
                  _dark={{ color: "violet.300" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {`E-mail:`}
                </Text>
                <Button
                  variant="outline"
                  style={styles.mailButton}
                  onPress={() => Linking.openURL(`mailto:${user.email}`)}
                  title="support@example.com"
                >
                  {" "}
                  {user.email}
                </Button>
              </View>
            </Stack>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center"></HStack>
            </HStack>
          </Stack>
          {userLogged.access === 'admin' ?
            <Button bg="#A6CE39" onPress={() => editUser()}>
              Edit
            </Button>
            : null}
        </Box >
      ) : (
        <Spinner color="danger.500" />
      )
      }
    </View >
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
    height: 60,
    paddingBottom: 30,
    width: 200,
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
        <UserDetails />
      </Center>
    </NativeBaseProvider>
  );
}
