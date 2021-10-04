import React, { useState } from "react";
import { StyleSheet, /* Text ,*/ View } from "react-native";
import expoLocalHost from "../../localHost";
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  Button,
  WarningOutlineIcon
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { allBranches, editedBranch } from "../../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";
import { byCountry } from "../../store/BranchReducer";

import axios from "axios";
import { useNavigation } from "@react-navigation/core";


export default function editBranch() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const singleBranch = useSelector((state) => state.branches.singleBranch);

  const [branch, setBranch] = useState({
    country: "",
    city: "",
    address: "",
    CP: "",
    phone: "",
    image: "",
  });

  const inputHandler = (type, value) => {
    switch (type) {
      case "country":
        setBranch({ ...branch, country: value });
        return;
      case "city":
        setBranch({ ...branch, city: value });
        return;
      case "address":
        setBranch({ ...branch, address: value });
        return;
      case "cp":
        setBranch({ ...branch, CP: value });
        return;
      case "phone":
        setBranch({ ...branch, phone: value });
        return;
      case "image":
        setBranch({ ...branch, image: value });
        return;
      default:
        setBranch({});
    }
  };
  
  const updateHandler = async (id) => {
    await dispatch(editedBranch({ id, branch }));
    await dispatch(byCountry(branch.country));
    // navigation.navigate("BranchesList");
  };

  const backHandler = () => {
    dispatch(allBranches());
    navigation.navigate("BranchesList");

  return (
    <ScrollView
      w={{
        base: "90%",
        md: "90%",
      }}
    >
      <Stack
        space={2.5}
        alignSelf="center"
        px="4"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "25%",
        }}
      >
        <Box>
          <Text bold fontSize="xl" mb="4">
            Branch
          </Text>

          <FormControl mb="2" isRequired>
            <FormControl.Label justifyContent='center'>Country</FormControl.Label>
            <Input
              value={branch.country}
              placeholder={singleBranch.country}
              onChangeText={(value) => inputHandler("country", value)}
            />
            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Required
            </FormControl.ErrorMessage>
          </FormControl>
          <Divider height={1} marginBottom={3}/>

          <FormControl mb="2">
            <FormControl.Label justifyContent='center'>City</FormControl.Label>
            <Input
              value={branch.city}
              placeholder={singleBranch.city}
              onChangeText={(value) => inputHandler("city", value)}
            />
          </FormControl>
          <Divider height={1} marginBottom={3}/>

          <FormControl mb="5">
            <FormControl.Label justifyContent='center'>Address</FormControl.Label>
            <Input
              value={branch.address}
              placeholder={singleBranch.address}
              onChangeText={(value) => inputHandler("address", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label justifyContent='center'>Postal Code</FormControl.Label>
            <Input
              value={branch.CP}
              placeholder={singleBranch.CP}
              onChangeText={(value) => inputHandler("cp", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label justifyContent='center'>Phone</FormControl.Label>
            <Input
              value={branch.phone}
              placeholder={singleBranch.phone}
              onChangeText={(value) => inputHandler("phone", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label justifyContent='center'>Image</FormControl.Label>
            <Input
              value={branch.image}
              placeholder={singleBranch.image}
              onChangeText={(value) => inputHandler("image", value)}
            />

            <Button onPress={() => updateHandler(singleBranch.id)}>
              Update Branch
            </Button>
            <Button onPress={() => backHandler()}>Go Back</Button>
          </FormControl>
          <Divider />
        </Box>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
