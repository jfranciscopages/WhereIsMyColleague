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
} from "native-base";
import axios from "axios";
import FloorList from "../components/FloorList/Floorlist";
import { useDispatch, useSelector } from "react-redux";
import { singleBranch } from "../store/BranchReducer";
function Branch() {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.singleBranch);
  const [loading, setLoading] = useState(false);
  const userLogged = useSelector(state => state.profile)

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
                      uri: `${branch.image}`,
                    }}
                    fallbackSource={{
                      uri: `${branch.image}`,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {`${branch.city}`}
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{ color: "#39B54A" }}
                    _dark={{ color: "#39B54A" }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    {`It’s located in ${branch.country}.`}
                  </Text>
                </Stack>
                <Text fontWeight="400">
                  Today, we have more than 40 Globant offices around the globe,
                  with more than 9000 Globers! You might say we are everywhere,
                  and also that we share a taste for fun offices.{"\n"}You can
                  find the location of your colleagues located in this branch
                  below.
                </Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                ></HStack>
              </Stack>
              <Box>
                <FloorList />
              </Box>
            </Box>
          </View>
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
