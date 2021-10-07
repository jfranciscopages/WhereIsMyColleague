import React, { useEffect, useState } from "react";
import { StyleSheet, /* Text ,*/ View } from "react-native";
import {
    Box,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    Accordion,
    Flex,
    Button,
  } from "native-base";
import { useSelector} from "react-redux";

export const FloorDetails = ()=>{
    const floor = useSelector((state) => state.selectedFloor)

    return(
        <View>
        {console.log("FLOOR===>", floor)}
        <Accordion allowMultiple w="sm">
           {floor.workspaces.map((ws, i)=>{
               return(
                <Accordion.Item key={i}>
                    <Accordion.Summary>
                  {floor.name}
                  <Accordion.Icon />
                </Accordion.Summary>
                <Accordion.Details>
                    <HStack space={3} justifyContent="space-between">
                     <Avatar
                            size="48px"
                            source={{
                              uri: `${ws.image}`,
                            }}
                          />
                    </HStack>
                </Accordion.Details>
                </Accordion.Item>
                

               )
           })}
        </Accordion>
        </View>
       
    )
}