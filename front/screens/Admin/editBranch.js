import React, { useState } from "react";
import { StyleSheet, /* Text ,*/ View } from "react-native";
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  Button,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { createBranch } from "../../store/BranchReducer";

export default function editBranch() {
  const dispatch = useDispatch();
  const singleBranch = useSelector((state) => state.branches.singleBranch);

  const [branch, setBranch] = useState({
    country: "",
    city: "",
    address: "",
    CP: "",
    floor: "",
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
      case "floor":
        setBranch({ ...branch, floor: value });
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

  const updateHandler = () => {
    dispatch(createBranch());
  };

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
          <FormControl mb="5">
            <FormControl.Label>Country</FormControl.Label>
            <Input
            value={branch.country}
              placeholder={singleBranch.country}
              onChangeText={(value) => inputHandler("country", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>City</FormControl.Label>
            <Input
            value={branch.city}
              placeholder={singleBranch.city}
              onChangeText={(value) => inputHandler("city", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Address</FormControl.Label>
            <Input
            value={branch.address}
              placeholder={singleBranch.address}
              onChangeText={(value) => inputHandler("address", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Postal Code</FormControl.Label>
            <Input
            value={branch.CP}
              placeholder={singleBranch.CP}
              onChangeText={(value) => inputHandler("cp", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Floor</FormControl.Label>
            <Input
            value={branch.floor}
              //   placeholder={singleBranch.floor ? singleBranch.floor : null}
              onChangeText={(value) => inputHandler("floor", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Phone</FormControl.Label>
            <Input
            value={branch.phone}
              placeholder={singleBranch.phone}
              onChangeText={(value) => inputHandler("phone", value)}
            />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Image</FormControl.Label>
            <Input
            value={branch.image}
              placeholder={singleBranch.image}
              onChangeText={(value) => inputHandler("image", value)}
            />

            <Button onPress={() => updateHandler()}>Update Branch</Button>
          </FormControl>
          <Divider />
        </Box>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});