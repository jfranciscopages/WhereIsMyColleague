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

import { StyleSheet, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { right } from "styled-system";

export default function WorkspaceIndividual() {
  const singleWorkspace = useSelector((state) => state.singleWorkspace);
  const SingleWS = singleWorkspace.singleWorkspace;
  return (
    <View>
      {console.log("WSIND==>", SingleWS)}
      <VStack alignItems="center" space={4}>
        <Text style={styles.text}>{SingleWS.name}</Text>
        <Box
          key={SingleWS.id}
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
                      uri: `https://www.globant.com/sites/default/files/styles/crop_center_335_224/public/2019-03/1%20%282%29.jpg?itok=Z8MucHhy`,
                    }}

                    alt="image"
                  />
                </AspectRatio>
              </Box>
            
        </Box>
      </VStack>
    </View>
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