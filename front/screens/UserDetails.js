import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  View,
  Spinner,
  Button,
  ScrollView,
  Avatar,
} from "native-base";
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { singleBranch } from "../store/BranchReducer";
import { userById } from "../store/usersReducer";

function UserDetails() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.branches.singleBranch.image);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.users.userById);

  useEffect(() => {
    dispatch(singleBranch(user.branchId));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const editUser = () => {
    dispatch(userById(user.id));
    navigation.navigate("EditUser");
  };

  return (
    <View>
      {!loading ? (
        <Box
          rounded="lg"
          overflow="hidden"
          width="72"
          shadow={1}
          _light={{ backgroundColor: "gray.50" }}
          _dark={{ backgroundColor: "gray.700" }}
        >
          <Box>
            <AspectRatio ratio={16 / 9}>
              <Avatar
              alignSelf='center'
            marginTop={10}
                bg="purple.600"
                size="2xl"
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                }}
              >
                RB
              </Avatar>
              {/* <Image
                source={{
                  uri: `${branch}`,
                }}
                alt="image"
              /> */}
            </AspectRatio>
            {/* <Center
              bg="violet.500"
              _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
              position="absolute"
              bottom={0}
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center> */}
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {user.firstName} {user.lastName}
              </Heading>
              <Text
                fontSize="xs"
                _light={{ color: "violet.500" }}
                _dark={{ color: "violet.300" }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                {/* <Text color="gray.500" fontWeight="400">
                  6 mins ago
                </Text> */}
              </HStack>
            </HStack>
          </Stack>
          <Button bg="#A6CE39" onPress={() => editUser()}>
            Edit
          </Button>
        </Box>
      ) : (
        <Spinner color="danger.500" />
      )}
    </View>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <UserDetails />
      </Center>
    </NativeBaseProvider>
  );
}
