import React, { useEffect, useState } from "react";
import expoLocalHost from "../localHost";
import {
  Box,
  View,
  Heading,
  HStack,
  Text,
  AspectRatio,
  NativeBaseProvider,
  Spinner,
  Image,
  Center,
  Stack,
  SafeAreaView,
  Button,
  ScrollView,
} from "native-base";
import { SunIcon } from "native-base";
import { IconButton } from "native-base";
import axios from "axios";
import FloorList from "../components/FloorList/Floorlist";
import { useDispatch, useSelector } from "react-redux";
import { setBranchReducer } from "../store/searchBranch/searchBranchReducer";
import { Icon } from "react-native-elements";
// import { styles } from "styled-system";
import { StyleSheet } from "react-native";
import { singleBranch } from "../store/BranchReducer";
import { userById } from "../store/usersReducer";
import { backgroundColor, width } from "styled-system";
import { useNavigation } from "@react-navigation/core";
function Branch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const branch = useSelector((state) => state.branches.singleBranch);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.users.userById);
  const actualUser = useSelector((state) => state.users.usersByTitle);

  useEffect(() => {
    dispatch(singleBranch(user.branchId));
    /*  axios
      .get(
        `http://${expoLocalHost}/api/branches/singleBranch/${userById.branchId}`
      )
      .then((data) => console.log("ACAAA", data.data)); */
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const editUser = () => {
    dispatch(userById(user.id));
    navigation.navigate("EditUser");
  };

  return (
    <View my="3">
      <ScrollView>
        {!loading ? (
          <Box
            rounded="lg"
            overflow="hidden"
            w="sm"
            shadow={1}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "gray.700" }}
          >
            <Box>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri: `${branch.image}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {user.firstName} {user.lastName}
                </Heading>
                <Text
                  fontSize="md"
                  _light={{ color: "rgba(52, 146, 2, 0.63)" }}
                  _dark={{ color: "rgba(52, 146, 2, 0.63)" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  She is from {user.city}, {user.country}.
                </Text>
                <View></View>
                {/*   <View></View>
                <View style={styles.view}>
                  <Heading size="md" ml="-1">
                    <SunIcon /> Work place
                  </Heading>
                  <Text>
                    {branch.city}, {branch.country}.
                  </Text>
                  <Text>{branch.floors[0].name}</Text>
                </View> */}
                <View></View>
                <View></View>
                <View style={styles.view}>
                  <Heading size="md" ml="-1">
                    <Icon name="sc-telegram" type="evilicon" color="#517fa4" />{" "}
                    Email
                  </Heading>
                  <Text>{user.email}</Text>
                </View>
                <View></View>
                <View></View>
                <View style={styles.view}>
                  <Heading size="md" ml="-1">
                    <Icon name="phone" type="evilicon" color="#517fa4" /> Phone
                  </Heading>
                  <Text>{user.phone}</Text>
                </View>
              </Stack>
              {/* <Icon name='sc-telegram' type='evilicon' color='#517fa4' /> */}
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              ></HStack>
            </Stack>
            <Box justifyContent="center" alignItems="center">
              <Box
                w={{
                  base: "100%",
                  md: "25%",
                }}
              ></Box>
              <Button onPress={() => editUser()}> Edit</Button>
            </Box>
          </Box>
        ) : (
          <Spinner color="danger.500" />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderBottomColor: "rgba(52, 146, 2, 0.26)",
    borderBottomWidth: 0.5,
    borderRadius: 12,
    width: 400,
    marginLeft: -100,
    paddingLeft: 125,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
});
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Branch />
      </Center>
    </NativeBaseProvider>
  );
}
