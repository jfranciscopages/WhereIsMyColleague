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
    WarningOutlineIcon
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import expoLocalHost from "../localHost";
import { singleBranch } from "../store/BranchReducer";


export const CreateFloor = () => {
    let floorsName;
    let siteMap;
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const selectedBranch = useSelector((state) => {
        console.log(state)
        return state.branches.singleBranch
    });
    console.log(selectedBranch)

    const FloorsNameHandler = (value) => {
        floorsName = value
    }
    const siteMapHandler = (value) => {
        siteMap = value
    }
    const createFloorPress = () => {
        axios.post(`http://${expoLocalHost}/api/floors/createFloor`, {
            branchId: selectedBranch.id,
            name: floorsName,
            image: siteMap
        })
            .then((data) => {
                dispatch(singleBranch(selectedBranch.id))
                console.log('Creaste este floor', data.data)
                navigation.navigate('Branch')
            })
            .catch((e) => console.log(e))
    }


    return (
        <View>
            {<ScrollView
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
                            <FormControl.Label justifyContent='center'>Floor's Name</FormControl.Label>
                            <Input
                                placeholder='Set Floor Name'
                                onChangeText={(value) => FloorsNameHandler(value)}
                            />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                Required
                            </FormControl.ErrorMessage>
                        </FormControl>
                        <Divider height={1} marginBottom={3} />

                        <FormControl mb="2">
                            <FormControl.Label justifyContent='center'>Site Map</FormControl.Label>
                            <Input
                                placeholder='Upload site map'
                                onChangeText={(value) => siteMapHandler(value)}
                            />
                        </FormControl>
                        <Divider height={1} marginBottom={3} />
                        <Divider />
                    </Box>
                    <Button onPress={() => createFloorPress(selectedBranch.id)}>
                        Create Floor
                    </Button>
                </Stack>
            </ScrollView>}
        </View>
    )
}