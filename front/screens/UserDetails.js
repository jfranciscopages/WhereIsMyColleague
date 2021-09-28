import React from "react";
import { VStack, HStack, Avatar, Image, Text } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";

function UserDetails() {
  const userById = useSelector((state) => state.users.userById);
  return (
    <View>
      {userById.id ? (
        <VStack m={4} space={4} borderRadius="lg">
          <HStack alignItems="center" px={4} pt={4}>
            <Avatar
              borderWidth={1}
              source={{
                uri: `${userById.avatar}`,
              }}
            />
            <VStack ml={2} space={2}>
              <Text fontSize="lg" bold underline>
                {userById.firstName}
              </Text>
              <Text>{userById.lastName}</Text>
            </VStack>
          </HStack>
          <Image
            w="100%"
            height={72}
            source={{
              uri: `http://lorempixel.com/400/400/city/gray/`,
            }}
            alt="NativeBase logo"
          ></Image>
          <VStack px={4} pb={4}>
            <Text>
              <Text bold>{userById.firstName}</Text> works in{" "}
              <Text bold>{userById.city}</Text> , {userById.country}.
            </Text>
          </VStack>
        </VStack>
      ) : (
        <Text>"LOADING.."</Text>
      )}
    </View>
  );
}

export default UserDetails;
