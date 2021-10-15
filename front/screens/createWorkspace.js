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
    AddIcon,
    Button,
    WarningOutlineIcon,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import expoLocalHost from "../localHost";
import axios from "axios";
import { singleBranch } from "../store/BranchReducer";
import * as ImagePicker from "expo-image-picker";

export const createWorkspace = () => {
    const [imageAttached, setImageAttached] = useState("");
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
    let picture;
    let workSpaceName;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const selectedBranch = useSelector((state) => {
        console.log(state);
        return state.branches.singleBranch;
    });
    const siteMapRef = useRef();

    const floorId = useSelector((state) => state.selectedFloorId);
    console.log(selectedBranch);
    const pictureHandler = (value) => {
        picture = value;
    };
    const workSpaceNameHandler = (value) => {
        workSpaceName = value;
    };
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

    const createWorkSpaceHAndler = () => {
        axios
            .post(
                `http://${expoLocalHost}/api/workSpace/createWorkSpace/${floorId}`,
                {
                    name: workSpaceName,
                    image: picture
                }
            )
            .then((data) => {
                dispatch(singleBranch(selectedBranch.id));
                navigation.navigate("Branch");
                return data.data;
            })
            .catch((e) => console.log(e));
    };

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
                            <FormControl mb="2" isRequired>
                                <FormControl.Label justifyContent="center">
                                    Workspace's Name
                                </FormControl.Label>
                                <Input
                                    placeholder="Set Workspace's Name"
                                    onChangeText={(value) => workSpaceNameHandler(value)}
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
                                    Workspace's picture
                                </FormControl.Label>
                                <Input
                                    ref={siteMapRef}
                                    placeholder="Upload Workspace's picture"
                                    onChangeText={(value) => pictureHandler(value)}
                                />
                            </FormControl>
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
                            <Divider height={1} marginBottom={3} />
                            <Divider />
                        </Box>
                        <Button bg="#A6CE39" onPress={() => createWorkSpaceHAndler()}>Create Workspace!</Button>
                        <Divider height={1} marginBottom={3} />
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
        alignItems: "center"
    }
})
