import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Image,
  Text,
  Select,
  CheckIcon,
  Box,
  Heading,
  AspectRatio,
  Stack,
  Button,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  byCountry,
  allBranches,
  deleteBranch,
  singleBranch,
} from "../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";

export default function Branches() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [branchCountry, setBranchCountry] = useState("");
  const branches = useSelector((state) => state.branches.allBranches);
  const countrySelected = useSelector((state) => state.branches.byCountry);

  let uniqueMap = branches.map(({ country }) => country);
  let uniqueSet = [...new Set(uniqueMap)];

  const countryHandler = (itemValue) => {
    setBranchCountry(itemValue);
    dispatch(byCountry(itemValue));
  };
  useEffect(() => {
    dispatch(allBranches());
  }, []);

  const individualBranchHandler = (id) => {
    dispatch(singleBranch(id));
    navigation.navigate("Branch");
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteBranch(id));
    dispatch(byCountry(branchCountry));
    return dispatch(allBranches());
  };

  const singleBranchHandler = (id) => {
    dispatch(singleBranch(id));
    navigation.navigate("editBranch");
  };

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  // useEffect(() => {
  //   console.log('BRANCHESLIST byCountry');
  //   dispatch(allBranches());
  // }, [branches]);

  console.log("BRANCHESSSSSS", branches);

  // console.log('STATE DEL DROPDOWN', branchCountry)
  console.log("*********************");
  console.log("COUNTRY EELEGIDO", countrySelected);
  return (
    <ScrollView>
      <View>
        <VStack alignItems="center" space={4}>
          <Text style={styles.text}>Please, select the branch's country</Text>
          <Select
            selectedValue={branchCountry}
            minWidth="200"
            accessibilityLabel="Countries"
            placeholder="Countries"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => countryHandler(itemValue)}
          >
            {branches
              ? uniqueSet.map((country, i) => (
                  <Select.Item key={i} label={country} value={country} />
                ))
              : null}
          </Select>
        </VStack>
      </View>
      <View style={styles.cityCard}>
        {countrySelected
          ? countrySelected.map(({ id, city, address, image, CP, phone }) => (
              <Box
                key={id}
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Box>
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      source={{
                        uri: image,
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                  {/* <Center
                      bg="violet.500"
                      _dark={{
                        bg: "violet.400",
                      }}
                      _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                      }}
                      position="absolute"
                      bottom="0"
                      px="3"
                      py="1.5"
                    >
                      PHOTOS
                    </Center> */}
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {city}
                    </Heading>
                    <Text
                      fontSize="xs"
                      _light={{
                        color: "violet.500",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {`${address}, ${CP}`}
                      {/* {floor.length > 0 ? floor : null} */}
                    </Text>
                  </Stack>
                  {/*  <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text> */}
                  <HStack
                    alignItems="center"
                    space={4}
                    justifyContent="space-between"
                  >
                    <HStack alignItems="center">
                      {/* <Text
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="400"
                        >
                          6 mins ago
                        </Text> */}
                    </HStack>
                  </HStack>
                </Stack>
                <View style={styles.Btns}>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */
                    width={20}
                    height={7}
                    marginLeft={2}
                    marginRight={2}
                    onPress={() => individualBranchHandler(id)}
                  >
                    View
                  </Button>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */ width={20}
                    height={7}
                    onPress={() => singleBranchHandler(id)}
                  >
                    Edit
                  </Button>
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    /* variant="outline" */
                    width={20}
                    height={7}
                    marginLeft={2}
                    onPress={() => dispatch(deleteBranch(id))}
                  >
                    Delete
                  </Button>
                </View>
              </Box>
            ))
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  cityCard: {
    marginTop: 15,
  },
  Btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
