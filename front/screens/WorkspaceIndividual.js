import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  NativeBaseProvider,
  Text,
  Center,
  HStack,
  Stack,
  View,
  Spinner,
  Button,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

export default function WorkspaceIndividual(){
    const singleWorkspace = useSelector((state) => state.singleWorkspace);
    return(
        <Text>
            {console.log("ME LLEGA BIEN SINGLEE", singleWorkspace)}
            ESTO ES WS INDIVIDUAL
        </Text>
    )
}

