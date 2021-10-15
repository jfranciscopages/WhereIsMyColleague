import React, { useEffect, useState, useRef } from "react";
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
  Center,
} from "native-base";
import { useDispatch } from "react-redux";
import { createBranch, allBranches } from "../../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

export default function newBranch() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [imageAttached, setImageAttached] = useState("");
  const cityRef = useRef();
  const addressRef = useRef();
  const postalRef = useRef();
  const latRef = useRef();
  const longRef = useRef();
  const phoneRef = useRef();
  const imgRef = useRef();


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
    <Center>
      <ScrollView
        w={{
          base: "90%",
          md: "90%",
        }}
      >
        <Stack
          space={2.5}
          alignSelf="center"
          px="8"
          mt="4"
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Box>
            <Text alignSelf="center" bold fontSize="xl" mb="4">
              Create Branch
            </Text>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Country
              </FormControl.Label>
              <Input
                onChangeText={(value) => inputHandler("country", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  cityRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                City
              </FormControl.Label>
              <Input
                ref={cityRef}
                onChangeText={(value) => inputHandler("city", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  addressRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Address
              </FormControl.Label>
              <Input
                ref={addressRef}
                onChangeText={(value) => inputHandler("address", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  postalRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Postal Code
              </FormControl.Label>
              <Input
                ref={postalRef}
                onChangeText={(value) => inputHandler("cp", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  latRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Latitude
              </FormControl.Label>
              <Input
                ref={latRef}
                onChangeText={(value) => inputHandler("latitude", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  longRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Longitude
              </FormControl.Label>
              <Input
                ref={longRef}
                onChangeText={(value) => inputHandler("longitude", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  phoneRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Phone
              </FormControl.Label>
              <Input
                ref={phoneRef}
                onChangeText={(value) => inputHandler("phone", value)}
                returnKeyType="next"
                keyboardType="phone-pad"
                onSubmitEditing={() => {
                  imgRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center">
                Image
              </FormControl.Label>
              <Input
                ref={imgRef}
                returnKeyType="done"
                onChangeText={(value) =>
                  inputHandler("image", imageAttached ? imageAttached : value)
                }
                value={imageAttached}
                InputRightElement={
                  <Button
                    ml={1}
                    backgroundColor="#999999"
                    roundedLeft={0}
                    roundedRight="md"
                    onPress={pickImage}
                  >
                    <AddIcon size="6" />
                  </Button>
                }
              />

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
    </Center>
  );
}

const styles = StyleSheet.create({
  Btns: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
});
