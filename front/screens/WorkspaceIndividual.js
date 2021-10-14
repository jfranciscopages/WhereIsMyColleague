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

export default function WorkspaceIndividual() {
  const singleWorkspace = useSelector((state) => state.singleWorkspace);
  const SingleWS = singleWorkspace.singleWorkspace;
  return (
    <View>
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
            <Image
                      source={{
                        uri: `${SingleWS.image}`,
                      }}
                      alt="image"
                    />
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
