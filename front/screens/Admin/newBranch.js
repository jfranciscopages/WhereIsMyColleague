import React, { useEffect, useState } from "react";
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
  AddIcon,
} from "native-base";
import { useDispatch } from "react-redux";
import { createBranch, allBranches } from "../../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function newBranch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [imageAttached, setImageAttached] = useState(null);

  const [branch, setBranch] = useState({
    country: "",
    city: "",
    address: "",
    CP: "",
    latitude: "",
    longitude: "",
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
      case "latitude":
        setBranch({ ...branch, latitude: value });
        return;
      case "longitude":
        setBranch({ ...branch, longitude: value });
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

  const submitHandler = async () => {
    await dispatch(createBranch({ branch }));
    await dispatch(allBranches());
    // navigation.navigate('BranchesList')
  };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        alert("Sorry, we need camera roll permissions to make this work!");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageAttached(result.uri);
    }
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
            <FormControl.Label>Latitude</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("latitude", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Longitude</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("longitude", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Phone</FormControl.Label>
            <Input onChangeText={(value) => inputHandler("phone", value)} />
          </FormControl>
          <Divider />

          <FormControl mb="5">
            <FormControl.Label>Image</FormControl.Label>
            <Input
              onChangeText={(value) =>
                inputHandler("image", imageAttached ? imageAttached : value)
              }
            />
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
              style={{ height: 40, width: 80 }}
            >
              <AddIcon size="5" />
            </Button>
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
