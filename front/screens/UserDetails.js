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
  ScrollView,
} from "native-base";
import { SunIcon } from "native-base";
import { IconButton } from "native-base";
import axios from "axios";
import listitem, { ListItem } from "@ui-kitten/components";
import FloorList from "../components/FloorList/Floorlist";
import { useDispatch, useSelector } from "react-redux";
import { setBranchReducer } from "../store/searchBranch/searchBranchReducer";
import { Icon } from "react-native-elements";
// import { styles } from "styled-system";
import { StyleSheet } from "react-native";
import { singleBranch } from "../store/BranchReducer";
import { backgroundColor, width } from "styled-system";
function Branch() {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.singleBranch);
  const [loading, setLoading] = useState(true);
  const userById = useSelector((state) => state.users.userById);
  const actualUser = useSelector((state) => state.users.usersByTitle);

  useEffect(() => {
    dispatch(singleBranch(userById.branchId));
    /*  axios
      .get(
        `http://${expoLocalHost}/api/branches/singleBranch/${userById.branchId}`
      )
      .then((data) => console.log("ACAAA", data.data)); */
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
                  {userById.firstName} {userById.lastName}
                </Heading>
                <Text
                  fontSize="md"
                  _light={{ color: "rgba(52, 146, 2, 0.63)" }}
                  _dark={{ color: "rgba(52, 146, 2, 0.63)" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  She is from {userById.city}, {userById.country}.
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
                  <Text>{userById.email}</Text>
                </View>
                <View></View>
                <View></View>
                <View style={styles.view}>
                  <Heading size="md" ml="-1">
                    <Icon name="phone" type="evilicon" color="#517fa4" /> Phone
                  </Heading>
                  <Text>{userById.phone}</Text>
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
              {/* <FloorList /> */}
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
