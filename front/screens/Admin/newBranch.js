import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  Button,
  WarningOutlineIcon,
} from "native-base";
import { useDispatch } from "react-redux";
import { createBranch, allBranches } from "../../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";

export default function newBranch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const submitHandler = () => {
    dispatch(createBranch({ branch }));
    dispatch(allBranches());
    // navigation.navigate('BranchesList')
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

          <FormControl mb="5" isInvalid>
            <FormControl.Label>Country</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("country", value)} />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Required
            </FormControl.ErrorMessage>
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>City</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("city", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Address</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("address", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Postal Code</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("cp", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Phone</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("phone", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Image</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("image", value)} />
            <View style={styles.Btns}>
              <Button
                bg="#A6CE39"
                size="sm"
                mx="2"
                my="5"
                /* variant="outline" */ width={20}
                height={7}
                onPress={() => submitHandler()}
              >
                Create
              </Button>
              <Button
                mx="2"
                my="5"
                bg="#A6CE39"
                size="sm"
                /* variant="outline" */ width={20}
                height={7}
                onPress={() => navigation.navigate("Home")}
              >
                Go Back
              </Button>
            </View>
          </FormControl>
          <Divider />
        </Box>
      </Stack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
