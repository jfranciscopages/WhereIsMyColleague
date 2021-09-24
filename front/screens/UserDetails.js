import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  Center,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet,  View,  Button, TextInput } from "react-native";
import faker from "faker"

function Nuevo() {
  const singleUser = useSelector((state) => state.singleUser);
  return (
    <View>
    {singleUser.id ?
      <VStack m={4} space={4} border={1} borderRadius="lg">
      {console.log("singleUSer==>", singleUser)}
      <HStack alignItems="center" px={4} pt={4}>
        <Avatar
          borderWidth={1}
          source={{
            uri: `${singleUser.avatar}`,
          }}
        />
        <VStack ml={2} space={2}>
          <Text fontSize="lg" bold underline>
            {singleUser.firstName}
          </Text>
          <Text>{singleUser.lastName}</Text>
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
        <Text bold>{singleUser.firstName}</Text> works in <Text bold>{singleUser.city}</Text> , {singleUser.country}. 
        </Text>
      </VStack>
    </VStack> :
  <Text>"LOADING.."</Text> }
  
  </View>
  );
}

export default Nuevo;
