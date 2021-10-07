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
  SafeAreaView,
  ScrollView,
} from "native-base";
import axios from "axios";
import FloorList from "../components/FloorList/Floorlist";
import { useDispatch, useSelector } from "react-redux";
import { setBranchReducer } from "../store/searchBranch/searchBranchReducer";
function Branch() {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.singleBranch);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(setBranchReducer());
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
                    uri: `https://www.globant.com/sites/default/files/2021-01/31%20Jan%202018-%20Globant_%20Bogota%20office%20gets%20featured%20in%20the%20top%2025%20most%20popular%20offices%20of%202017%20report%20published%20by%20Office%20Snapshots.png`,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  {branch.country}
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{ color: "violet.500" }}
                  _dark={{ color: "violet.300" }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {`It’s located in England’s Southeast.`}
                </Text>
              </Stack>
              <Text fontWeight="400">
                Globant office is located in the Clerkenwell area, downtown
                London. Nowadays, there are 42 Globers from different parts of
                the world, England, Argentina, Spain, Greece, Bulgaria, France,
                Australia, United States, Tahití and Scotland.
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                  <Text color="gray.500" fontWeight="400">
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
            <Box justifyContent="center" alignItems="center">
              <Box
                w={{
                  base: "100%",
                  md: "25%",
                }}
              >
                <Heading fontSize="xl" p="4" pb="3">
                  Floors
                </Heading>
              </Box>
              <FloorList />
            </Box>
          </Box>
        ) : (
          <Spinner color="danger.500" />
        )}
      </ScrollView>
    </View>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Branch />
      </Center>
    </NativeBaseProvider>
  );
}
