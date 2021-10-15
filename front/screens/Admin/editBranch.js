import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, /* Text ,*/ View } from "react-native";
import expoLocalHost from "../../localHost";
import axios from "axios";
import {
  useToast,
  FormControl,
  Input,
  Stack,
  Text,
  ScrollView,
  Divider,
  Box,
  Button,
  WarningOutlineIcon,
  Center,
  imageAttached,
  pickImage,
  AddIcon,
} from "native-base";
import { useDispatch, useSelector } from "react-redux";

import { allBranches, editedBranch } from "../../store/BranchReducer";
import { useNavigation } from "@react-navigation/native";
import { byCountry } from "../../store/BranchReducer";
import * as ImagePicker from "expo-image-picker";

export default function editBranch() {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const singleBranch = useSelector((state) => state.branches.singleBranch);
  const toast = useToast();
  const cityRef = useRef();
  const addressRef = useRef();
  const postalRef = useRef();
  const latRef = useRef();
  const longRef = useRef();
  const phoneRef = useRef();
  const imgRef = useRef();
  const [imageAttached, setImageAttached] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageAttached(result.uri);
      inputHandler("image", result.uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted")
        alert("Sorry, we need camera roll permissions to make this work!");
    })();
  }, []);

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
  const updateHandler = async () => {
    setLoading(true);
    await axios
      .put(
        `http://${expoLocalHost}/api/branches/editBranch/${singleBranch.id}`,
        branch
      )
      .then(() => {
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="4" rounded="sm" mt={50}>
                Branch edited successfully!
              </Box>
            );
          },
        });
        navigation.navigate(`DrawerNavigator`);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="red.500" px="2" py="4" rounded="sm" mt={50}>
                Can't edit branch.
              </Box>
            );
          },
        });
        console.log(err);
      });
  };

  const backHandler = () => {
    dispatch(allBranches());
    navigation.navigate("BranchesList");
  };

  const CreateFloorHandlePress = () => {
    navigation.navigate("CreateFloor");
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
          mt="5"
          alignSelf="center"
          px="8"
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Box>
            <Text alignSelf="center" bold fontSize="xl" mb="4">
              Edit Branch
            </Text>

            <FormControl mb="2" isRequired>
              <FormControl.Label justifyContent="center" isRequired>
                Country
              </FormControl.Label>
              <Input
                value={branch.country}
                placeholder={singleBranch.country}
                onChangeText={(value) => inputHandler("country", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  cityRef.current.focus();
                }}
                blurOnSubmit={false}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Required
              </FormControl.ErrorMessage>
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center" isRequired>
                City
              </FormControl.Label>
              <Input
                ref={cityRef}
                value={branch.city}
                placeholder={singleBranch.city}
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
                value={branch.address}
                placeholder={singleBranch.address}
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
                value={branch.CP}
                placeholder={singleBranch.CP}
                onChangeText={(value) => inputHandler("cp", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  latRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center" isRequired>
                Latitude
              </FormControl.Label>
              <Input
                ref={latRef}
                value={singleBranch.latitude}
                onChangeText={(value) => inputHandler("latitude", value)}
                returnKeyType="next"
                onSubmitEditing={() => {
                  longRef.current.focus();
                }}
                blurOnSubmit={false}
              />
            </FormControl>

            <FormControl mb="2">
              <FormControl.Label justifyContent="center" isRequired>
                Longitude
              </FormControl.Label>
              <Input
                ref={longRef}
                value={singleBranch.longitude}
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
                value={branch.phone}
                placeholder={singleBranch.phone}
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
              <FormControl.Label justifyContent="center" isRequired>
                Image
              </FormControl.Label>
              <Input
                ref={imgRef}
                value={imageAttached}
                onChangeText={(value) => inputHandler("image", imageAttached)}
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
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                {loading ? (
                  <Button
                    bg="#A6CE39"
                    isLoading
                    size="sm"
                    width={20}
                    height={7}
                    marginLeft={2}
                    marginRight={2}
                  >
                    wait...
                  </Button>
                ) : (
                  <Button
                    bg="#A6CE39"
                    size="sm"
                    width={20}
                    height={7}
                    marginLeft={2}
                    marginRight={2}
                    onPress={() => updateHandler(singleBranch.id)}
                  >
                    Update
                  </Button>
                )}
                <Button
                  bg="#A6CE39"
                  size="sm"
                  width={20}
                  height={7}
                  onPress={() => CreateFloorHandlePress()}
                >
                  Add floor
                </Button>
                <Button
                  bg="#A6CE39"
                  size="sm"
                  width={20}
                  height={7}
                  marginLeft={2}
                  onPress={() => backHandler()}
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
