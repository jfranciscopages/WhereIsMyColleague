import React, { useEffect, useState, useRef } from "react";
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
  WarningOutlineIcon,
  AddIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import expoLocalHost from "../localHost";
import axios from "axios";
import { singleBranch } from "../store/BranchReducer";
import * as ImagePicker from "expo-image-picker";

export const EditFloor = () => {
  const imgRef = useRef();
  let floorsName;
  const [picture, setPicture] = useState("");
  const [imageAttached, setImageAttached] = useState("");
  const [workSpaceName, setWorkSpaceName] = useState("");

  let siteMap;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedBranch = useSelector((state) => {
    console.log(state);
    return state.branches.singleBranch;
  });
  const siteMapRef = useRef();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };
  // const pictureHandler = (value) => {
  //   setPicture(value)
  // };

  const floorId = useSelector((state) => state.selectedFloorId);
  console.log(selectedBranch);

  const floorsNameHandler = (value) => {
    floorsName = value;
  };
  const siteMapHandler = (value) => {
    siteMap = value;
  };
  const editFloorPress = () => {
    axios
      .put(`http://${expoLocalHost}/api/floors/editFloor/${floorId}`, {
        name: workSpaceName,
        image: siteMap,
      })
      .then((data) => {
        dispatch(singleBranch(selectedBranch.id));
        navigation.navigate("Branch");
        console.log("ESTO ESTOY BUSCANDO AHORA", data.data);
        return data.data;
      })
      .catch((e) => console.log("falla en la edicion", e));
  };

  const createWorkSpaceHAndler = () => {
    axios
      .post(
        `http://${expoLocalHost}/api/workSpace/createWorkSpace/${floorId}`,
        {
          name: workSpaceName,
          image: picture,
        }
      )
      .then((data) => {
        dispatch(singleBranch(selectedBranch.id));
        navigation.navigate("Branch");
        return data.data;
      })
      .catch((e) => console.log(e));
  };
  workSpaceName;
  return (
    <View style={styles.container}>
      {
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
              <Text bold fontSize="xl" mb="4" alignSelf="center">
                Edit Floor
              </Text>

              <FormControl mb="2" isRequired>
                <FormControl.Label justifyContent="center">
                  Floor's Name
                </FormControl.Label>
                <Input
                  placeholder="Set Floor Name"
                  onChangeText={(value) => floorsNameHandler(value)}
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    siteMapRef.current.focus();
                  }}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}
                >
                  Required
                </FormControl.ErrorMessage>
              </FormControl>
              <Divider height={1} marginBottom={3} />

              <FormControl mb="2">
                <FormControl.Label justifyContent="center">
                  Site Map
                </FormControl.Label>
                <Input
                  ref={siteMapRef}
                  placeholder="Upload site map"
                  onChangeText={(value) => siteMapHandler(value)}
                />
              </FormControl>
              <Divider height={1} marginBottom={3} />
              <Divider />
            </Box>
            <Button bg="#A6CE39" onPress={() => editFloorPress()}>
              Edit Floor
            </Button>
            <Divider height={1} marginBottom={3} />
            <Box>
              <Text>Want to add a work space?</Text>
            </Box>
            <FormControl mb="2" isRequired>
              <FormControl.Label justifyContent="center">
                Work space name
              </FormControl.Label>
              <Input
                placeholder="Set work space name"
                onChangeText={(value) => setWorkSpaceName(value)}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Required
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl.Label justifyContent="center">
              Workspace image
            </FormControl.Label>
            <Input
              ref={imgRef}
              placeholder="Upload Workspace image"
              returnKeyType="done"
              // onChangeText={(value) =>
              //   setPicture(value)
              // }
              value={picture}
              InputRightElement={
                <Button
                  ml={1}
                  backgroundColor="#A6CE39"
                  roundedLeft={0}
                  roundedRight="md"
                  onPress={pickImage}
                >
                  <AddIcon size="6" />
                </Button>
              }
            />
            <Button bg="#A6CE39" onPress={() => createWorkSpaceHAndler()}>
              Create Workspace
            </Button>
          </Stack>
        </ScrollView>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
